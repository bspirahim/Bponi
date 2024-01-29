
import useProductData from '../../../utils/useProductData';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const Drinks = () => {
    const productData = useProductData();
    const productCategoryData = productData.filter(item => item.category === 'Холодные напитки');

    console.log(productCategoryData);

    return (
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
                    productCategoryData.map(item =>
                            <SwiperSlide key={item._id}>
                                <div className="card w-full bg-white cursor-pointer rounded-2xl h-full ">
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
    );
};

export default Drinks;