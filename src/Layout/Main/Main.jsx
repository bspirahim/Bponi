import React from 'react';
import Header from '../../shared/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Routes/Footer/Footer';
import icon1 from '../../assets/icon/icon1.png'
import Dropdown from '../../components/dropdown';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <div className='grid grid-flow-row-dense grid-cols-4 grid-rows-1 bg-[#F5F4F2] max-w-screen-xl mx-auto'>
                <aside className=' md:px-10'>
                    <div className='my-4 md:my-8 cursor-pointer'>
                        <h3 className='font-bold text-xs md:text-xl'>Доставка</h3>
                        <p className='md:font-semibold text-xs md:text-lg'>delivery unavailable</p>
                    </div>

                    <div className='flex flex-col'>
                        <h1 className='font-bold md:text-xl mb-2'>Catalog</h1>

                        <Link to='/' className='md:text-base text-xs md:px-4 flex items-center hover:bg-[#E7E6E4] p-1  rounded-xl '>
                            <img className='w-6 h-6 md:w-11 md:h-11' src={icon1} alt="" />
                            Холодные напитки
                        </Link>
                        <Link to='/product2' className='md:text-base text-xs md:px-4 flex items-center hover:bg-[#E7E6E4] p-1  rounded-xl '>
                            <img className='w-6 h-6 md:w-11 md:h-11' src={icon1} alt="" />
                            Выпечка
                        </Link>


                    </div>

                </aside>

                <div className='col-span-3 px-4'>
                    <div className='my-4 md:my-8 md:space-y-1'>
                        <p className='text-xs md:text-lg'>Helios /</p>
                        <p className='font-bold md:text-4xl'>Хот-доги</p>
                    </div>

                    <div className='md:mb-4'>
                        <Dropdown></Dropdown>
                    </div>

                    <Outlet></Outlet>

                    <p></p>
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Main;