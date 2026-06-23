'use client'
import { Sidebar, Menu, MenuItem, SubMenu, Icon, collapsed } from 'react-pro-sidebar'
import Link from 'next/link'
import { useState } from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdHome, MdAccountCircle } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { FaWallet } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { MdFlashOn } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { FaBug } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { useTranslation } from 'react-i18next'
import { RiMenuUnfold2Fill } from 'react-icons/ri'
import { ImProfile } from "react-icons/im";
import { GrOrganization } from "react-icons/gr";
import { RiNotification4Fill } from "react-icons/ri";
import { MdGeneratingTokens } from "react-icons/md";
import { LuKeySquare } from "react-icons/lu";
import { HiCurrencyDollar } from "react-icons/hi2";
import { RiAlarmWarningFill } from "react-icons/ri";
import { RiTaskFill } from "react-icons/ri";
import i18n from '@/i18n'
import Header from '../header/Header'
import { FaNetworkWired } from "react-icons/fa6";


const Sidebars = ({ children }) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);


    return (
        <div className="flex w-full" style={{ height: '100%', minHeight: '900px', direction: i18n.language === 'fa' ? "rtl" : null }}>
            <Sidebar
                rtl={i18n.language === 'fa'}
                collapsed={collapsed}
                transitionDuration={1000}
                className="bg-white"
            >
                <Menu
                    menuItemStyles={{
                        button: ({ level, active, disabled }) => {
                            // only apply styles on first level elements of the tree
                            if (level === 0)
                                return {
                                    color: disabled ? '#f5d9ff' : '#d359ff',
                                    backgroundColor: active ? '#eecef9'  : undefined,
                                };
                        },
                    }}
                    >

                    <div className="h-[70px] bg-purple-400 flex justify-between items-center">

                        {/* Sidebar site Name */}
                        <h1 className="font-semibold text-xl flex justify-center pr-5  items-center text-white" >{t('pouyaverse')}</h1>

                        {/* sidebar toggle Section */}
                        <div className="flex ">
                            <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
                                <RiMenuUnfold2Fill className="w-[20px] h-[20px] text-white" />
                            </button>
                        </div>
                    </div>


                    {/* start menu item */}
                    <MenuItem icon={<MdHome />} component={<Link href='/p-admin' />} >
                        {t('home')}
                    </MenuItem>

                    <SubMenu defaultOpen label={t('account')}  icon={<ImProfile />} >
                        <MenuItem icon={<MdAccountCircle />} component={<Link href='/p-admin/profile' />}> {t('profile')}</MenuItem>
                        <MenuItem icon={<GrOrganization />} component={<Link href='/p-admin/organizations' />}> {t('organizations')}</MenuItem>
                        <MenuItem icon={<RiNotification4Fill />} component={<Link href='/p-admin/notificationSetting' />}> {t('notificationSetting')}</MenuItem>
                        <MenuItem icon={<MdGeneratingTokens />} component={<Link href='/p-admin/tokens' />}>{t('tokens')}</MenuItem>
                        <MenuItem icon={<LuKeySquare />} component={<Link href='/p-admin/keys' />}> {t('keys')}</MenuItem>
                    </SubMenu>

                    <MenuItem label={t('users')} icon={<HiUsers />} component={<Link href="/p-admin/users" />}>
                        {t('users')}
                    </MenuItem>

                    <SubMenu defaultOpen label={t('assets')} icon={<FaWallet />} >
                        <MenuItem icon={<HiCurrencyDollar />}>{t('financialAssets')}</MenuItem>
                        <MenuItem icon={<HiCurrencyDollar />} component={<Link href='/p-admin/assets/equipments' />} >{t('equipment')}</MenuItem>

                    </SubMenu>

                    <MenuItem icon={<MdPolicy />} component={<Link href="/p-admin/policies" />}>
                        {t('policies')}
                    </MenuItem>

                    <MenuItem icon={<MdFlashOn />} component={<Link href="/p-admin/accessibility" />} >
                        {t("accessibility")}
                    </MenuItem>

                    <SubMenu label={t("dashboards")} icon={<FaBug />}>
                        <MenuItem icon={<FaNetworkWired />} component={<Link href="/p-admin/network" />}>{t('network')}</MenuItem>
                    </SubMenu>

                    <SubMenu label={t("troubleshooting")} icon={<FaBug />}>
                        <MenuItem icon={<RiAlarmWarningFill />} component={<Link href="/p-admin/dashboards" />}>{t("notifications")}</MenuItem>
                        <MenuItem icon={<RiTaskFill />} component={<Link href="/p-admin/dashboards" />}>{t("operations")}</MenuItem>
                    </SubMenu>

                    <MenuItem icon={<FaCog />} component={<Link href="/p-admin/dashboards" />}>
                        {t('globalSettings')}
                    </MenuItem>

                    <MenuItem icon={<FaInfoCircle />} component={<Link href="/p-admin/dashboards" />}>
                        {t('aboutUs')}
                    </MenuItem>
                </Menu>
                {/* end menu item */}

            </Sidebar>




            {/* Main Content */}
            <div className="w-full">
                <Header />
                {children}
            </div>
        </div>
    );
};

export default Sidebars;
