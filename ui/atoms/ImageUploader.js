import React, { useState, useEffect } from "react";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { v4 as uuidv4 } from 'uuid';
import { uploadToS3 } from "@services/aws.service";

export const ImageUploader = (props) => {
  const uploadImageCb = props.onUpload;
  const [crop, setCrop] = useState({
    unit: '%',
    width: 100,
    aspect: 16 / 9,
  });
  const [croppedImageUrl, setCroppedImageUrl] = useState();
  const [completedImageUrl, setCompletedImageUrl] = useState();
  const [src, setSrc] = useState();
  const [imageRef, setImageRef] = useState();
  const [showCropping, setShowCropping] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  let fileUrl;

  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      setShowCropping(true);
    }
  };

  useEffect(() => {
    if (props.preCroppedImageUrl) {
      setCompletedImageUrl(props.preCroppedImageUrl);
    }
  }, [])

  const onImageLoaded = image => {
    setImageRef(image);
  };

  const onCropComplete = cropImage => {
    makeClientCrop(cropImage);
  };

  const onCropChange = (crop, percentCrop) => {
    setCrop(crop);
  };

  const makeClientCrop = async (crop) => {
    if (imageRef && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(
        imageRef,
        crop,
        'newFile.jpeg'
      );
      setCroppedImageUrl(croppedImageUrl);
    }
  }
  var getFileBlob = function (url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.addEventListener('load', function () {
      cb(xhr.response);
    });
    xhr.send();
  };

  const uploadImage = async () => {
    setIsUploading(true);
    const imageUrl = croppedImageUrl || await getCroppedImg(
      imageRef,
      crop,
      'newFile.jpeg'
    );
    getFileBlob(imageUrl, async (blob) => {
      const fileName = `${props.fileNamePrefix || 'image'}_'${uuidv4()}.jpeg`;
      const key = encodeURIComponent(fileName)
      try {
        await uploadToS3(props.bucket, blob, key)
        setIsUploading(false);
        setShowCropping(false);
        setCompletedImageUrl(imageUrl);
        uploadImageCb(key)
      } catch (error) {
        console.log(error);
      }

    })
  }


  const doneCropping = () => {
    uploadImage()
    setCompletedImageUrl(croppedImageUrl);
  }

  const cancelCropping = () => {
    setSrc();
    setShowCropping(false);
  }

  const getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d'); ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    ); return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(fileUrl);
        fileUrl = window.URL.createObjectURL(blob);
        resolve(fileUrl);
      }, 'image/jpeg');
    });
  }

  return (
    <div className="flex flex-col items-center  ">
      <div className="mb-5">
        <label className="w-24 h-24 border-2 p-2 items-center cursor-pointer rounded-lg" htmlFor={"fileUpload" + props.id}><i className="large material-icons "> {props.label || "Upload Profile Pic"}</i></label>
        <input type="file" accept="image/*" id={"fileUpload" + props.id} name="cameraInput" onChange={onSelectFile} className="btn btn-default spacer-top hidden" />
      </div>
      {showCropping && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"> <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <ReactCrop
                  src={src}
                  crop={crop}
                  ruleOfThirds
                  onImageLoaded={onImageLoaded}
                  onComplete={onCropComplete}
                  onChange={onCropChange}
                />
              </div>
            </div>
            <div className="flex px-2">
              <PrimaryButton value="Done" onClick={doneCropping} isLoading={isUploading}></PrimaryButton>
              <SecondaryButton value="Cancel" onClick={cancelCropping}></SecondaryButton>
            </div>
          </div>
          </div>
        </div>)}
      { completedImageUrl && (
        < img alt="Crop" key={"image" + props.id} style={{ maxWidth: '200px' }} src={completedImageUrl} />
      )}
      { props.error && (
        <label className="w-24 h-24 p-2 items-center">{props.error.message}</label>
      )}
    </div>
  );
}

export default ImageUploader;