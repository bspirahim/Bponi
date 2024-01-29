import React, { useEffect, useState } from 'react';
import Header from '../../shared/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Routes/Footer/Footer';
import icon1 from '../../assets/icon/icon1.png'
import Dropdown from '../../components/dropdown';
import useProductData from '../../utils/useProductData';

const Main = () => {
    const productData = useProductData();
    const productCategoryData = productData.filter(item => item.category === 'Холодные напитки');
    return (
        <div>
            <Header></Header>

            <div className='grid grid-flow-row-dense grid-cols-4 grid-rows-1 bg-[#F5F4F2] max-w-screen-xl mx-auto pb-16 mt-20'>
                <aside className=' md:px-10 sticky top-0'>
                    <div className='my-4 md:my-8 cursor-pointer'>
                        <h3 className='font-bold text-xs md:text-xl'>Доставка</h3>
                        <p className='flex items-center text-start mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="UiKitUiKitIcon_m UiKitUiKitIcon_root" width="24" height="24"><defs><symbol id="native-delivery-cce6b" fill="none" viewBox="0 0 24 24"><path fill="#3F3F3F" d="M13.453 2.4a1.849 1.849 0 1 0 0 3.698 1.849 1.849 0 0 0 0-3.698" /><path fill="#FAC220" d="M8.184 4.8H6.813a1.2 1.2 0 0 0-1.115.755L4.002 9.797a1.2 1.2 0 0 0 .554 1.508L9.6 13.8l1.8-6 .287-.963 1.513.963V6.6l-2.333-1.167a6 6 0 0 0-2.683-.633" /><path fill="#3F3F3F" d="M15.024 10.797s2.299 1.351 2.657 1.515c.33.151.695.449.476.837-.22.388-.766.313-1.204.117-.495-.221-2.125-.96-2.46-1.146-.285-.157-.392-.22-.497-.381-.218-.34-.64-.94-.64-.94L12.6 13.8s1.184 1.427 2.16 3.085L16.2 19.8c.309.524.89 1.306.335 1.614-.665.37-1.096.064-1.572-.555L12.6 17.044c-.912-1.443-2.265-1.838-2.4-2.043-.304-.46-.287-1.91-.135-2.687.088-.452.355-1.79.617-3.01L9.09 10.527s-.622 2.35-.689 2.674c-.08.394-.362 1.056-.633 1-.335-.07-.63-.307-.555-.868l.522-3.515c.084-.26.22-.443.436-.567l2.44-2.077c.289-.162.462-.335.936-.335h.902c.586 0 .883.241 1.293 1.17.436.987 1.283 2.789 1.283 2.789" /><path fill="#3F3F3F" d="m9.66 14.4-.593 2.731s-1.536 2.224-1.964 2.847c-.32.467-.562 1.038-.012 1.453.616.466.99-.071 1.309-.43.338-.432 1.093-1.421 1.94-2.488a2.91 2.91 0 0 0 .443-.759c.064-.159 1.063-2.93 1.217-3.354z" /><path fill="#FCDA30" d="M14.808 9.24c-.228-.584-.614-1.489-1.008-2.04-.246 1.11-.93 3.484-.634 4.075.256.512 1.041-.39 1.502-.996.227-.298.276-.69.14-1.04" /><path fill="#FCDA30" d="m9.468 13.124 1.11-3.698L11.4 6.6c.247-.123 1.208-.296 1.8 0 .592.296.934 1.061.706 2.087-.247 1.11-.74 3.476-.74 4.068 0 .494.034.37.208 1.03.115.154.018.6-.174.615h-3c-1.2 0-1.102-.627-1.102-.627z" /><path fill="#FCDA30" d="M10.208 9.796C9.615 9.796 9.247 8.663 9 7.8c.493-.247 1.43-1.332 2.317-1.332.342 0 .327 0 .683.132.188.415.132 1.338.056 1.717-.37.493-1.257 1.479-1.848 1.479" /></symbol></defs><g><path fill="#3F3F3F" d="M13.453 2.4a1.849 1.849 0 1 0 0 3.698 1.849 1.849 0 0 0 0-3.698" /><path fill="#FAC220" d="M8.184 4.8H6.813a1.2 1.2 0 0 0-1.115.755L4.002 9.797a1.2 1.2 0 0 0 .554 1.508L9.6 13.8l1.8-6 .287-.963 1.513.963V6.6l-2.333-1.167a6 6 0 0 0-2.683-.633" /><path fill="#3F3F3F" d="M15.024 10.797s2.299 1.351 2.657 1.515c.33.151.695.449.476.837-.22.388-.766.313-1.204.117-.495-.221-2.125-.96-2.46-1.146-.285-.157-.392-.22-.497-.381-.218-.34-.64-.94-.64-.94L12.6 13.8s1.184 1.427 2.16 3.085L16.2 19.8c.309.524.89 1.306.335 1.614-.665.37-1.096.064-1.572-.555L12.6 17.044c-.912-1.443-2.265-1.838-2.4-2.043-.304-.46-.287-1.91-.135-2.687.088-.452.355-1.79.617-3.01L9.09 10.527s-.622 2.35-.689 2.674c-.08.394-.362 1.056-.633 1-.335-.07-.63-.307-.555-.868l.522-3.515c.084-.26.22-.443.436-.567l2.44-2.077c.289-.162.462-.335.936-.335h.902c.586 0 .883.241 1.293 1.17.436.987 1.283 2.789 1.283 2.789" /><path fill="#3F3F3F" d="m9.66 14.4-.593 2.731s-1.536 2.224-1.964 2.847c-.32.467-.562 1.038-.012 1.453.616.466.99-.071 1.309-.43.338-.432 1.093-1.421 1.94-2.488a2.91 2.91 0 0 0 .443-.759c.064-.159 1.063-2.93 1.217-3.354z" /><path fill="#FCDA30" d="M14.808 9.24c-.228-.584-.614-1.489-1.008-2.04-.246 1.11-.93 3.484-.634 4.075.256.512 1.041-.39 1.502-.996.227-.298.276-.69.14-1.04" /><path fill="#FCDA30" d="m9.468 13.124 1.11-3.698L11.4 6.6c.247-.123 1.208-.296 1.8 0 .592.296.934 1.061.706 2.087-.247 1.11-.74 3.476-.74 4.068 0 .494.034.37.208 1.03.115.154.018.6-.174.615h-3c-1.2 0-1.102-.627-1.102-.627z" /><path fill="#FCDA30" d="M10.208 9.796C9.615 9.796 9.247 8.663 9 7.8c.493-.247 1.43-1.332 2.317-1.332.342 0 .327 0 .683.132.188.415.132 1.338.056 1.717-.37.493-1.257 1.479-1.848 1.479" /></g></svg>
                            delivery unavailable</p>
                    </div>

                    <div className='flex flex-col'>
                        <h1 className='font-bold text-xs md:text-xl mb-1'>Catalog</h1>

                        <Link to='/' className='md:px-2 ms-[-15px] flex items-center hover:bg-[#E7E6E4] p-1  rounded-xl
                         active:text-black focus:font-bold
                        '>
                            <img className='w-6 h-6 md:w-11 md:h-11' src={icon1} alt="" />
                            Холодные напитки
                        </Link>
                        <Link to='/product2' className='md:px-2 ms-[-15px] flex items-center hover:bg-[#E7E6E4] p-1  rounded-xl active:text-black active:font-bold focus:font-bold'>
                            <img className='w-6 h-6 md:w-11 md:h-11' src='/icon/menu-2.png' alt="" />
                            Выпечка
                        </Link>

                        <Link to='/product3' className='md:px-2 ms-[-15px] flex items-center hover:bg-[#E7E6E4] p-1  rounded-xl active:text-black active:font-bold focus:font-bold'>
                            <img className='w-6 h-6 md:w-11 md:h-11' src='/icon/menu-3.png' alt="" />
                            Красота и гигиена
                        </Link>

                        <Link to='/product4' className='md:px-2 ms-[-15px] flex items-center hover:bg-[#E7E6E4] p-1  rounded-xl active:text-black active:font-bold focus:font-bold'>
                            <img className='w-6 h-6 md:w-11 md:h-11' src='/icon/menu-4.png' alt="" />
                            Горячие напитки
                        </Link>

                        <Link to='/product5' className='md:px-2 ms-[-15px] flex items-center hover:bg-[#E7E6E4] p-1  rounded-xl active:text-black active:font-bold focus:font-bold'>
                            <img className='w-6 h-6 md:w-11 md:h-11' src='/icon/menu-5.png' alt="" />
                            Десерты
                        </Link>



                    </div>

                </aside>

                <div className='col-span-3 pe-6'>
                    <div className='mt-8 mb-6 md:space-y-1'>
                        <p className=' text-black opacity-50  hover:opacity-100 cursor-pointer mb-3.5'>Helios <span className='ps-4'>/</span></p>

                        <h2 className='font-bold text-[40px] leading-9 text-[#21201f]'>Холодные напитки</h2>

                    </div>

                    <div className='mb-8'>
                        <Dropdown></Dropdown>
                    </div>

                    <Outlet></Outlet>

                    <p className='md:pt-8 leading-9 text-[#9E9B98]'>Contractor (seller) ТОО "Гелиос", 050000, 050000, Алматы, ул. Карасай батыра, 69, BIN 990940004405
                        <br />
                        Business hours: from 00:00 to 05:00; from 07:00 to 24:00</p>
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Main;