
import React, { useState } from 'react';
import useProductData from '../../../../utils/useProductData';

const Product3 = () => {
    const [modalData, setmodalData] = useState([])
    const productData = useProductData();
    const productCategoryData = productData.filter(item => item.category === 'Красота и гигиена');

    const loadModal = (id) => {
        console.log(id);
        const found = productCategoryData.find(element => element._id == id);
        setmodalData(found);
        window.my_modal_4.showModal(id)
    }
    return (
        <div>
            <div className='grid grid-cols-4 gap-3'>
                {
                    productCategoryData.map(item =>
                        <>
                            <div onClick={() => loadModal(item._id)} className="card w-auto bg-white cursor-pointer rounded-2xl">
                                <figure><img className='cursor-pointer p-3 pb-0 rounded-2xl' src={item.image} alt="Shoes" /></figure>
                                <div className="card-body p-4">
                                    <h2 className="card-title text-[24px]  leading-7 font-medium">{item.price} ₸</h2>


                                    <p className='cursor-pointer leading-5'>
                                        {item.name}
                                    </p>
                                    <p className='cursor-pointer leading-5 text-[#9e9b98]'>1.2</p>
                                    <div className="card-actions p-0 w-full">
                                        <button className="btn w-full font-bold text-2xl rounded-2xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="UiKitUiKitIcon_m UiKitUiKitIcon_root UiKitCounter_icon" width="24" height="24"><defs><symbol id="plus-mini-d7551" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 6a1 1 0 0 0-1 1v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7a1 1 0 0 0-1-1" clipRule="evenodd" /></symbol></defs><g><path fill="currentColor" fillRule="evenodd" d="M12 6a1 1 0 0 0-1 1v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7a1 1 0 0 0-1-1" clipRule="evenodd" /></g></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }

            </div>
            <dialog id="my_modal_4" className="modal">
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
        </div>
    );
};

export default Product3;