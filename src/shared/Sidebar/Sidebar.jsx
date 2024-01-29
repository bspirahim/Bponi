import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
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


    return (
        <div>

            {
                category.map(ct =>
                    <Link to={`/category/${ct.name}`} className='md:px-2 ms-[-15px] flex items-center hover:bg-[#E7E6E4] p-1  rounded-xl
                active:text-black focus:font-bold
               '>
                        <img className='w-6 h-6 md:w-11 md:h-11' src={ct.img} alt="" />
                        {ct.name}
                    </Link>
                )
            }
        </div>
    );
};

export default Sidebar;