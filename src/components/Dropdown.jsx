import React from 'react';
import { FaAngleDown } from "react-icons/fa";


const Dropdown = () => {
    return (
        <div className='flex items-center justify-between'>
            <div>
                <details className="dropdown rounded-xl">
                    <summary className=" btn text-[16px] rounded-2xl font-medium bg-[#c9ae9f4a]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="UiKitUiKitIcon_s UiKitUiKitIcon_root UiKitButton_icon UiKitButton_iconLeft" width="24" height="24"><defs><symbol id="arrow-sorting-a80b3" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M3.932 16a.75.75 0 0 0-.617 1.176l3.069 4.432a.75.75 0 0 0 1.233 0l3.069-4.432A.75.75 0 0 0 10.069 16H8.002V3.5a.5.5 0 0 0-.5-.5A768.426 768.426 0 0 0 6.5 3a.5.5 0 0 0-.5.502v12.498zm9.383-9.178A.75.75 0 0 0 13.932 8h2.07v12.5a.5.5 0 0 0 .5.5 535.927 535.927 0 0 1 .999 0 .5.5 0 0 0 .5-.498V7.999h2.068a.75.75 0 0 0 .617-1.177l-3.07-4.432a.75.75 0 0 0-1.232 0z" clipRule="evenodd" /></symbol></defs><g><path fill="currentColor" fillRule="evenodd" d="M3.932 16a.75.75 0 0 0-.617 1.176l3.069 4.432a.75.75 0 0 0 1.233 0l3.069-4.432A.75.75 0 0 0 10.069 16H8.002V3.5a.5.5 0 0 0-.5-.5A768.426 768.426 0 0 0 6.5 3a.5.5 0 0 0-.5.502v12.498zm9.383-9.178A.75.75 0 0 0 13.932 8h2.07v12.5a.5.5 0 0 0 .5.5 535.927 535.927 0 0 1 .999 0 .5.5 0 0 0 .5-.498V7.999h2.068a.75.75 0 0 0 .617-1.177l-3.07-4.432a.75.75 0 0 0-1.232 0z" clipRule="evenodd" /></g></svg>
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
            <button className="btn  text-[16px] rounded-2xl font-medium bg-[#c9ae9f4a]">All filters
            <svg xmlns="http://www.w3.org/2000/svg" className="UiKitUiKitIcon_xs UiKitUiKitIcon_root DesktopRetailCatalogPageFiltersButton_buttonIcon" width="24" height="24"><defs><symbol id="options-aa621" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M6 11.25c1.953 0 3.579-1.4 3.93-3.25H22.5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5H9.93a4.001 4.001 0 0 0-7.86 0H1.5A.5.5 0 0 0 1 7v.5a.5.5 0 0 0 .5.5h.57A4.001 4.001 0 0 0 6 11.25M1.5 16a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5h12.57a4.001 4.001 0 0 0 7.86 0h.57a.5.5 0 0 0 .5-.5v-.5a.5.5 0 0 0-.5-.5h-.57a4.001 4.001 0 0 0-7.86 0zM18 19.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-9.5-12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" clipRule="evenodd" /></symbol></defs><g><path fill="currentColor" fillRule="evenodd" d="M6 11.25c1.953 0 3.579-1.4 3.93-3.25H22.5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5H9.93a4.001 4.001 0 0 0-7.86 0H1.5A.5.5 0 0 0 1 7v.5a.5.5 0 0 0 .5.5h.57A4.001 4.001 0 0 0 6 11.25M1.5 16a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5h12.57a4.001 4.001 0 0 0 7.86 0h.57a.5.5 0 0 0 .5-.5v-.5a.5.5 0 0 0-.5-.5h-.57a4.001 4.001 0 0 0-7.86 0zM18 19.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-9.5-12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" clipRule="evenodd" /></g></svg>
            </button>
            </div>
        </div>
    );
};

export default Dropdown;