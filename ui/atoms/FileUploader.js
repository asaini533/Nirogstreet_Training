import React from "react";
import PropTypes from 'prop-types';

const FileUploader = ({...property}) => {
  // State to store uploaded fi
  return (
  <section class="h-full overflow-auto p-8 w-full flex flex-col">
        <header class="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
              <p class="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
              </p>
              <input id="hidden-input" type="file" multiple class="hidden" />
              <button id="button" class="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
                Upload a file
              </button>
        </header>
   </section>
  )
}

export default FileUploader;

FileUploader.propTypes = {
    className: PropTypes.string,
    imgClassName: PropTypes.string,
    children: PropTypes.string,
};