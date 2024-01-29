import React from 'react';

const Modal = ({ modalData }) => {
    return (<dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
            <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.6464 6.75355C18.8417 6.55829 18.8417 6.24171 18.6464 6.04645L17.9536 5.35355C17.7583 5.15829 17.4417 5.15829 17.2464 5.35355L12 10.6L6.75355 5.35355C6.55829 5.15829 6.24171 5.15829 6.04645 5.35355L5.35355 6.04645C5.15829 6.24171 5.15829 6.55829 5.35355 6.75355L10.6 12L5.35355 17.2464C5.15829 17.4417 5.15829 17.7583 5.35355 17.9536L6.04645 18.6464C6.24171 18.8417 6.55829 18.8417 6.75355 18.6464L12 13.4L17.2464 18.6464C17.4417 18.8417 17.7583 18.8417 17.9536 18.6464L18.6464 17.9536C18.8417 17.7583 18.8417 17.4417 18.6464 17.2464L13.4 12L18.6464 6.75355Z" fill="#9E9B98" />
                        </svg>
                    </button>
                </form>
            </div>

            <div className="grid md:grid-cols-2 items-center md:pb-16 md:px-10">
                <div>
                    <img className='rounded-xl' src={modalData.image} alt="" />
                </div>
                <div>
                    <h3 className="font-bold text-2xl">{modalData.name}</h3>
                    <p className="text-gray-500 text-lg">1.2</p>
                    <div className='flex items-center md:space-x-5'>
                        <p className="text-2xl font-bold">{modalData.price} ₸</p>
                        <button className='btn bg-[#FCE000] px-12 text-lg hover:bg-[#e9d434]'>Add</button>
                    </div>
                </div>

            </div>


        </div>
    </dialog>
    );
};

export default Modal;