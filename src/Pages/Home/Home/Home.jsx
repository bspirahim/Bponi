import { useState } from 'react';
import useProductData from '../../../utils/useProductData';
import Modal from '../../../shared/Modal/Modal';
import Dropdown from '../../../components/Dropdown';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Home = () => {

    const category = [
        {
            name: 'Холодные напитки',
            img: '/icon/menu-1.png',
        },
        {
            name: 'Выпечка',
            img: '/icon/menu-2.png',
        },
        {
            name: 'Красота и гигиена',
            img: '/icon/menu-3.png',
        },
        {
            name: 'Горячие напитки',
            img: '/icon/menu-4.png',
        },
        {
            name: 'Десерты',
            img: '/icon/menu-5.png',
        },

    ]


    const [modalData, setmodalData] = useState([])
    const productData = useProductData();
    //const productCategoryData = productData.filter(item => item.category == id);

    const loadModal = (id) => {
        console.log(id);
        const found = productCategoryData.find(element => element._id == id);
        setmodalData(found);
        window.my_modal_4.showModal(id)
    }



    return (
        <div className='col-span-3 pe-6'>
            {
                category.map(ct => <>

                    <div className='mt-8 mb-6 md:space-y-1'>

                        <h2 className='font-bold text-[24px] leading-6 text-[#21201f]'>{ct.name}</h2>

                    </div>
                    <div>

                        <Swiper
                            loop={false}
                            cssMode={true}
                            navigation={true}
                            slidesPerView={5}
                            spaceBetween={20}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper"
                        >
                            {
                                productData.filter(item => item.category == ct.name).map(item =>
                                    <SwiperSlide key={item._id}>
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
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>
                </>)
            }

            <Modal modalData={modalData}></Modal>
            <p className='md:pt-8 leading-9 text-[#9E9B98]'>Contractor (seller) ТОО "Гелиос", 050000, 050000, Алматы, ул. Карасай батыра, 69, BIN 990940004405
                <br />
                Business hours: from 00:00 to 05:00; from 07:00 to 24:00</p>
        </div>
    );
};

export default Home;