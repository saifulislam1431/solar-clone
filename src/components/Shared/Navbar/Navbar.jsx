'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import logo from "../../../../public/logo/SCG_Logo.png"
import { ceraMedium, ceraRegular, ptSans } from '@/app/fonts';
import Link from 'next/link';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const path = usePathname();
    const [isDrawerOpen, setDrawerOpen] = useState(false);


    const closeDrawer = () => {
        const drawer = document.getElementById("my-drawer");
        drawer.checked = false;
        setDrawerOpen(false);
    };

    const drawerToggle = () => {
        setDrawerOpen(!isDrawerOpen);
    };


    const navItems = <>

        <li className="dropdown dropdown-hover w-full lg:w-fit border-b lg:border-none px-0 py-2 lg:py-0" onClick={closeDrawer}>
            <Link tabIndex={0} href="/service" className="m-1 w-full flex items-center justify-between lg:justify-center gap-1 text-[17px] font-medium">Services <FaAngleDown className='hidden lg:flex' /> <FaAngleRight className='lg:hidden' /></Link>
            {/* <div  role="button" >Hover</div> */}
            <ul tabIndex={0} className="dropdown-content z-[1] menu shadow w-52 p-0 mt-2">
                <li className='sub-menu'>
                    <Link className='' href="/fast-business-loans">Fast Business Loans</Link>
                </li>
                <li className='sub-menu'>
                    <Link className='' href="/business-line-credit">Business Line of Credit</Link>
                </li>
                <li className='sub-menu'>
                    <Link className='' href="/business-term-loan">Business Term Loan</Link>
                </li>
            </ul>
        </li>


        <li className="dropdown dropdown-hover w-full lg:w-fit border-b lg:border-none px-0 py-2 lg:py-0" onClick={closeDrawer}>
            <Link tabIndex={0} href="/who-we-serve" className="m-1 flex items-center justify-between lg:justify-center gap-1 text-[17px] font-medium w-full">Who We Serve <FaAngleDown className='hidden lg:flex' /> <FaAngleRight className='lg:hidden' /></Link>
            {/* <div  role="button" >Hover</div> */}
            <ul tabIndex={0} className="dropdown-content z-[1] menu shadow w-52 p-0 mt-2">
                <li className='sub-menu'>
                    <Link className='' href="/who-we-serve">Any Small Business</Link>
                </li>
                <li className='sub-menu'>
                    <Link className='' href="/who-we-serve">Low Credit Businesses</Link>
                </li>
                <li className='sub-menu'>
                    <Link className='' href="/who-we-serve">Minorities</Link>
                </li>
                <li className='sub-menu'>
                    <Link className='' href="/who-we-serve">Verterans</Link>
                </li>
                <li className='sub-menu'>
                    <Link className='' href="/who-we-serve">Wholesale Business</Link>
                </li>
            </ul>
        </li>


        <li className="dropdown dropdown-hover w-full lg:w-fit border-b lg:border-none px-0 py-2 lg:py-0" onClick={closeDrawer}>
            <Link tabIndex={0} href="/company" className="m-1 flex items-center justify-between lg:justify-center gap-1 text-[17px] font-medium w-full">Company <FaAngleDown className='hidden lg:flex' /> <FaAngleRight className='lg:hidden' /></Link>
            {/* <div  role="button" >Hover</div> */}
            <ul tabIndex={0} className="dropdown-content z-[1] menu shadow w-52 p-0 mt-2">
                <li className='sub-menu'>
                    <Link className='' href="/how-it-works">How it Works</Link>
                </li>
                <li className='sub-menu'>
                    <Link className='' href="/faqs">FAQ’s</Link>
                </li>
                <li className='sub-menu'>
                    <Link className='' href="/partner-with-us">Partner with us</Link>
                </li>
            </ul>
        </li>

        <li onClick={closeDrawer} className='border-b w-full lg:w-fit lg:border-none px-0 py-2 lg:py-0'>
            <Link href="/partner-with-us" className="m-1 flex items-center justify-between lg:justify-center gap-1 text-[17px] font-medium w-full">Partner with us</Link>
        </li>

        <li onClick={closeDrawer} className='border-b w-full lg:w-fit lg:border-none px-0 py-2 lg:py-0'>
            <Link href="/contact-us" className="m-1 flex items-center justify-between lg:justify-center gap-1 text-[17px] font-medium w-full">Contact us</Link>
        </li>

        <li className='border-b w-full lg:w-fit lg:border-none px-0 py-2 lg:py-0 lg:hidden'>
            <Link href="/application" className="m-1 flex items-center justify-between lg:justify-center gap-1 text-[17px] font-medium w-full">Apply Now</Link>
        </li>


    </>
    return (
        <section className='bg-transparent py-2 px-6 h-[82px] nav'>
            <div className='max-w-7xl mx-auto flex items-center justify-between gap-8 px-2 lg:px-12 py-2 z-50'>

                {/* Logo */}
                <div>
                    <Image src={logo} alt='Logo' />
                </div>

                {/* Large NavItems */}
                <ul className='hidden lg:flex items-center gap-8'>
                    {navItems}
                </ul>

                {/* Small device drawer */}
                <div className="drawer lg:hidden w-[10%]">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}

                        <label
                            htmlFor="my-drawer"
                            className={`menu-icon ${isDrawerOpen && "open"}`}
                            onClick={drawerToggle}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <div className="drawer-side mt-[120px]">
                        <label
                            htmlFor="my-drawer"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                            onClick={drawerToggle}
                        ></label>
                        <ul className="menu px-0 py-4 w-full min-h-full bg-[#ffffff] flex items-start relative">
                            {navItems}
                        </ul>
                    </div>
                </div>

                {/* Apply Btn */}

                <div className='hidden lg:flex items-center gap-3'>
                    <Link href="/application" className={`${ceraMedium.className} myBtn px-6 py-1`}>Apply Now</Link>
                </div>

            </div>
        </section>
    );
};

export default Navbar;