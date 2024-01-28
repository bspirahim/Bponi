import React from 'react';
import { FaAngleDown } from "react-icons/fa";


const Dropdown = () => {
    return (
        <div className='flex items-center justify-between'>
            <div>
                <details className="dropdown rounded-xl">
                    <summary className=" btn md:text-lg bg-[#DCD4CF]">
                        Popular First
                        <FaAngleDown className='md:text-lg'></FaAngleDown>
                    </summary>
                    <ul className="md:p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box md:w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </div>
            <div className='shrink  '>
            <button className="btn bg-[#DCD4CF] text-lg">All filters</button>
            </div>
        </div>
    );
};

export default Dropdown;