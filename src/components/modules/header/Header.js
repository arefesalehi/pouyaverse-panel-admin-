import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import i18n from '@/i18n';
import { MdLogout } from "react-icons/md";


const Header = () => {
    const { t } = useTranslation();



    return (
        <div className="w-full h-[70px] flex justify-between bg-purple-400">
            {/* Profile Section */}
            <div className=" flex items-center mr-[15px] ">
                <div className="w-[60px] h-[60px] rounded-full bg-red-400 overflow-hidden mx-3">
                    <Image
                        width={100}
                        height={100}
                        className="rounded-full"
                        src="/images/author-12_70x70.jpg"
                        alt="Profile"
                    />
                </div>
                <div className="flex flex-col justify-center ml-[33px] text-white">
                    <p>{t('myName')}</p>
                    <p>{t('role')}</p>
                </div>
                {/*switch language  Section */}
                <div className="switch ">
                    <input
                        id="language-toggle"
                        className="check-toggle check-toggle-round-flat"
                        type="checkbox"
                        onChange={(event) => {
                            if (event.target.checked) {
                                i18n.changeLanguage("en");
                            } else {
                                i18n.changeLanguage("fa");
                            }
                        }}
                    />
                    <label htmlFor="language-toggle" className='bg-purple-900' ></label>
                    <span className="on ">FA</span>
                    <span className="off">EN</span>
                </div>
            </div>



            {/* Notifications section */}
            <div className="w-1/2 flex justify-end items-center pr-4 ml-[20px]">
                <button type="button" className="relative ml-2 inline-flex items-center p-3 text-sm font-medium text-center text-white bg-purple-300 rounded-lg hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    <span className="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">20</div>
                </button>

                {/* logout Section */}
                <button type="button" className=" hover:bg-purple-500 text-white ml-2 bg-purple-300 hover:bgpurple-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center justify-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <MdLogout />
                    <p className='p-1  flex justify-center items-center'>{t('logout')}</p>
                </button>

            </div>
        </div>
    );
};

export default Header;
