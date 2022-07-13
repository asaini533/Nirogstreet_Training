const Modal = ({ show, body }) => {
    return (
        <div className={`fixed z-10 inset-0 overflow-y-auto ${!show && "hidden"}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block h-72 bg-white text-left overflow-auto shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Modal;