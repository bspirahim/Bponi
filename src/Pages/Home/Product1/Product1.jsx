
import { useState } from 'react';
import useProductData from '../../../utils/useProductData';
import Modal from '../../../shared/Modal/Modal';
import { Link, useParams } from 'react-router-dom';
import Dropdown from '../../../components/Dropdown';


const Product1 = () => {
    const { id } = useParams();
    const [modalData, setmodalData] = useState([])
    const productData = useProductData();
    const productCategoryData = productData.filter(item => item.category == id);

    const loadModal = (id) => {
        console.log(id);
        const found = productCategoryData.find(element => element._id == id);
        setmodalData(found);
        window.my_modal_4.showModal(id)
    }

    return (
        <div className='col-span-3 pe-6'>
            <div className='mt-8 mb-6 md:space-y-1'>
                <Link to='/' className=' text-black opacity-50  hover:opacity-100 cursor-pointer mb-3.5 block'>Helios <span className='ps-4'>/</span></Link>

                <h2 className='font-bold text-[40px] leading-9 text-[#21201f]'>{id}</h2>

            </div>

            <div className='mb-8'>
                <Dropdown></Dropdown>
            </div>

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
                <Modal modalData={modalData}></Modal>
            </div>
            <p className='md:pt-8 leading-9 text-[#9E9B98]'>Contractor (seller) ТОО "Гелиос", 050000, 050000, Алматы, ул. Карасай батыра, 69, BIN 990940004405
                <br />
                Business hours: from 00:00 to 05:00; from 07:00 to 24:00</p>
        </div>
    );
};

export default Product1;