import Paragraph from "./Paragraph"

const UploadDrag = ({label, onclick, ...property}) => {

 return (
     <>
        {label && <label className="mt-10">{label}</label>}
        <div className="border border-dotted border-trueGray-400 rounded-lg p-5 mt-2 text-center">
            <Paragraph content={
                <p>Drop your file(s) here or <span className="text-yellow-500">browse</span></p>
            } className="font-inter" />
            <Paragraph content="Max File Size: 20MB"  className="text-trueGray-400 text-sm p-1"/>
            <input class="cursor-pointer absolute block opacity-0 pin-r pin-t top-5" type="file" name={property.name} id={property.id} onClick={onclick}  multiple />
        </div>
    </>
 )

}

export default UploadDrag