import React, { useEffect, useState } from 'react';
import logo2 from '../../assets/nav-img.png'
import { Link } from 'react-router-dom';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    const navclassProp = 'fixed z-10 w-[100%] top-0 bg-[#F5F4F2]  '

    return (
        <div className={scroll ? navclassProp + ' drop-shadow-lg'  : navclassProp + ' border-b border-slate-300' }>
            <nav className=' py-2 mx-2 md:mx-6'>
                <div className='grid grid-cols-2 gap-10'>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center'>
                            <Link to='/'>
                                <svg className='mr-2' width="39" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.748 33.237c-3.448 3.053-7.946 4.895-12.854 4.895-10.294 0-18.009-8-18.009-17.144 0-8.599 6.834-15.62 15.306-15.62 7.996 0 13.765 6.22 13.765 12.954 0 6.313-4.964 11.434-11.062 11.434-5.579 0-9.517-4.24-9.517-8.768 0-4.063 3.133-7.244 6.817-7.244 3.26 0 5.273 2.385 5.273 4.578 0 1.904-1.335 3.054-2.573 3.054-.437 0-.604-.093-.78-.203a2.484 2.484 0 0 0 .496-1.88 2.448 2.448 0 0 0-2.776-2.079c-1.145.172-1.872.954-2.232 1.533a4.228 4.228 0 0 0-.624 2.24c0 3.232 3.001 5.321 5.916 5.321 4.259.003 7.461-3.729 7.461-7.986 0-5.21-4.5-9.51-10.161-9.51-6.574 0-11.705 5.585-11.705 12.176 0 7.468 6.346 13.697 14.408 13.697 8.913 0 15.95-7.446 15.95-16.366 0-9.588-8.09-17.883-18.653-17.883C8.957.436 0 9.732 0 20.988c0 12.018 10.055 22.076 22.897 22.076 6.143 0 11.778-2.314 16.078-6.121l-3.227-3.706ZM21.86 20.934c0-.005-.003-.002 0 0Z" fill="#000" /></svg>
                            </Link>
                            <div className='border border-black h-6 md:h-12 mx-2'></div>
                            <img className='w-16 md:w-44 md:p-2 ' src={logo2} alt="" />
                        </div>


                        <div className='ps-10 flex-auto w-48'>
                            <form>
                                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="UiKitUiKitIcon_m UiKitUiKitIcon_root UiKitSearchInput_icon" width="24" height="24"><defs><symbol id="search-bb6ac" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M4 11c0-3.859 3.141-7 7-7s7 3.141 7 7-3.141 7-7 7-7-3.141-7-7m18 11a1 1 0 0 0 0-1.414l-3.975-3.975A8.948 8.948 0 0 0 20 11c0-4.963-4.037-9-9-9s-9 4.037-9 9 4.037 9 9 9a8.948 8.948 0 0 0 5.611-1.975L20.586 22A1 1 0 0 0 22 22" clipRule="evenodd" /></symbol></defs><g><path fill="currentColor" fillRule="evenodd" d="M4 11c0-3.859 3.141-7 7-7s7 3.141 7 7-3.141 7-7 7-7-3.141-7-7m18 11a1 1 0 0 0 0-1.414l-3.975-3.975A8.948 8.948 0 0 0 20 11c0-4.963-4.037-9-9-9s-9 4.037-9 9 4.037 9 9 9a8.948 8.948 0 0 0 5.611-1.975L20.586 22A1 1 0 0 0 22 22" clipRule="evenodd" /></g></svg>
                                    </div>
                                    <input type="search" id="search" className="block w-full md:p-3 ps-6 md:ps-10  rounded-2xl text-gray-900 bg-gray-50 focus-visible:border-2 border-2
                                    border-[#8a878466] focus:outline-none dark:bg-white dark:placeholder-gray-400 dark:text-gray" placeholder="Найти в Helios" required />

                                </div>
                            </form>
                        </div>

                    </div>
                    <div className='flex justify-between items-center'>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="UiKitUiKitIcon_m UiKitUiKitIcon_root DesktopAddressButton_icon" aria-hidden="true" width="24" height="24"><defs><symbol id="location-0e981" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M18.529 6.125a.5.5 0 0 0-.654-.654L3.307 11.565a.5.5 0 0 0-.307.461v.196a.5.5 0 0 0 .32.466l5.76 2.232 2.223 5.76a.5.5 0 0 0 .467.32h.195a.5.5 0 0 0 .461-.307z" /></symbol></defs><use href="#location-0e981" /></svg>
                            </div>
                            <button className='border-2 border-gray-400 p-3 rounded-2xl border-[#8a878466]  ps-9 font-medium'>Enter Delivary Address</button>

                        </div>
                        <div>
                            <button className='bg-[#E5E4E2] text-[#21201F] px-6 py-4 rounded-2xl font-medium'>Log in</button>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;