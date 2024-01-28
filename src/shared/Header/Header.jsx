import React from 'react';
import logo from '../../assets/spiral.png'
import logo2 from '../../assets/nav-img.png'

const Header = () => {
    return (
        <div className='bg-[#F5F4F2] border-b border-slate-300 shadow'>
            <nav className=' py-2 mx-2 md:mx-6'>
                <div className='grid grid-cols-2 gap-10'>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center'>
                            <img className='w-4 h-4 md:w-12 md:h-12' src={logo} alt="" />
                            <div className='border border-black h-6 md:h-12 mx-2'></div>
                            <img className='w-16 md:w-44 md:p-2 ' src={logo2} alt="" />
                        </div>
                       

                        <div className='ps-10 flex-auto w-48'>
                            <form>
                                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-2 h-2 md:w-4 md:h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="search" className="block w-full md:p-3 ps-6 md:ps-10 text-sm rounded-xl text-gray-900 border border-gray-300 bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search" required />

                                </div>
                            </form>
                        </div> 

                    </div>
                    <div className='flex justify-between items-center'>
                     <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-2 h-2 md:w-4 md:h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <button className='border-2 border-gray-400 p-2 rounded-xl  ps-9 font-semibold'>Enter Delivary Address</button>

                        </div>
                        <div>
                            <button className='bg-[#E5E4E2] md:px-6 md:py-3 rounded-xl font-semibold'>Log in</button>
                        </div> 
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;