import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>

            <Link to='/category/Холодные напитки' className='md:px-2 ms-[-15px] flex items-center hover:bg-[#E7E6E4] p-1  rounded-xl
                         active:text-black focus:font-bold
                        '>
                <img className='w-6 h-6 md:w-11 md:h-11' src='/icon/icon1.png' alt="" />
                Холодные напитки
            </Link>
            <Link to='/category/Выпечка' className='md:px-2 ms-[-15px] flex items-center hover:bg-[#E7E6E4] p-1  rounded-xl active:text-black active:font-bold focus:font-bold'>
                <img className='w-6 h-6 md:w-11 md:h-11' src='/icon/menu-2.png' alt="" />
                Выпечка
            </Link>

            <Link to='/category/Красота и гигиена' className='md:px-2 ms-[-15px] flex items-center hover:bg-[#E7E6E4] p-1  rounded-xl active:text-black active:font-bold focus:font-bold'>
                <img className='w-6 h-6 md:w-11 md:h-11' src='/icon/menu-3.png' alt="" />
                Красота и гигиена
            </Link>

            <Link to='/category/Горячие напитки' className='md:px-2 ms-[-15px] flex items-center hover:bg-[#E7E6E4] p-1  rounded-xl active:text-black active:font-bold focus:font-bold'>
                <img className='w-6 h-6 md:w-11 md:h-11' src='/icon/menu-4.png' alt="" />
                Горячие напитки
            </Link>

            <Link to='/category/Десерты' className='md:px-2 ms-[-15px] flex items-center hover:bg-[#E7E6E4] p-1  rounded-xl active:text-black active:font-bold focus:font-bold'>
                <img className='w-6 h-6 md:w-11 md:h-11' src='/icon/menu-5.png' alt="" />
                Десерты
            </Link>
        </div>
    );
};

export default Sidebar;