import * as HttpService from "./http.service";
import { GET_PRE_SIGNED_URL } from "./url.service";
import * as AWS from 'aws-sdk';

const AWS_ACCESS_KEY_ID = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY;
const region = process.env.NEXT_PUBLIC_REGION;
const bucketName = process.env.NEXT_PUBLIC_BUCKET_NAME;
const bucketUrl = process.env.NEXT_PUBLIC_BUCKET_URL;

const  awsS3 = {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    region,
    bucketName,
    url: bucketUrl
}


AWS.config.update({
    accessKeyId: awsS3.AWS_ACCESS_KEY_ID,
    secretAccessKey: awsS3.AWS_SECRET_ACCESS_KEY,
    region: awsS3.region
});

const s3Bucket = new AWS.S3({
    params: {
        Bucket: awsS3.bucketName
    }
});

export const getSignedUrl = fileKey => {
    const s3 = new AWS.S3();
    return s3.getSignedUrl('getObject', {
      Bucket: bucketName,
      Key: fileKey,
      Expires: 600000
    });
}


export const getPreSignedUrl = (fileKey) => {
    return new Promise((resolve, reject) => {
        HttpService.postWithOutAuth(GET_PRE_SIGNED_URL, { fileKey })
        .then((response) => {
          resolve(response);
        });
    });
}

export const uploadImageToS3 = (albumName, file) => {
    return new Promise((resolve, reject) => {
        if (!file) {
          reject(new Error('Invalid file'));
        }
  
        const currentTime = new Date().getTime();
        const fileName = new Date().toISOString() + currentTime;
        const albumPhotosKey = `${encodeURIComponent(albumName)}/`;
  
        const photoKey = `${albumPhotosKey}${fileName}.${file.type.split('/').slice(-1)[0]}`;
  
        const data = {
          Key: photoKey,
          Body: file,
        };

        s3Bucket.putObject(data, (err) => {
        if (err) {
            reject(err);
        } else {
            resolve(photoKey);
        }
      });
    });
}