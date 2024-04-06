import React from 'react';
import logo from "../../../../public/logo/SCG_logo_white.png";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from 'react-icons/fa';
import { FaClock, FaLocationPin, FaLocationPinLock, FaYoutube } from 'react-icons/fa6';
import { ceraMedium } from '@/app/fonts';
const Footer = () => {
    return (
        <footer className='bg-primary'>
            <div className="flex px-12 py-8 lg:py-16 lg:px-16 items-start justify-between flex-col lg:flex-row gap-10 text-center">

                <div className="logo-container flex flex-col items-start gap-y-6">
                    <div className="logo-container flex items-center gap-2 justify-center">
                        <div className="w-48">
                            <Image
                                src={logo}
                                alt="Logo"
                            />
                        </div>
                    </div>

                    <div className='inline-flex items-center gap-3 text-[#ffffff] opacity-60 font-medium'>
                        <FaPhoneAlt /> <span>516-464-6300</span>
                    </div>

                    <div className='inline-flex items-center gap-3 text-[#ffffff] opacity-60 font-medium'>
                        <FaLocationPinLock /> <span>Mon - Fri : 10:00am to 6:00pm</span>
                    </div>

                    <div className='inline-flex items-start gap-3 text-[#ffffff] opacity-60 font-medium text-left'>
                        <FaClock /> <span>
                            117 Wall Street <br />
                            New York, NY 10001</span>
                    </div>
                </div>

                <div
                    className="flex flex-col text-start"
                >
                    <h6 className={`${ceraMedium.className} mb-4 text-white text-[20px]`}>Services</h6>
                    <div className="flex flex-col gap-2">
                        <Link href="/" className={`hover:underline text-[#ffffff] opacity-60 ${ceraMedium.className}`}>
                            Fast Business Loans
                        </Link>
                        <Link href="/" className={`hover:underline text-[#ffffff] opacity-60 ${ceraMedium.className}`}>
                            Business Line of Credit
                        </Link>
                        <Link href="/" className={`hover:underline text-[#ffffff] opacity-60 ${ceraMedium.className}`}>
                            Business Term Loan
                        </Link>
                    </div>
                </div>

                <div
                    className="flex flex-col text-start"
                >
                    <h6 className={`${ceraMedium.className} mb-4 text-white text-[20px]`}>Industries We Fund</h6>
                    <div className="flex flex-col gap-2">
                        <Link href="/" className={`hover:underline text-[#ffffff] opacity-60 ${ceraMedium.className}`}>
                            Restaurants
                        </Link>
                        <Link href="/" className={`hover:underline text-[#ffffff] opacity-60 ${ceraMedium.className}`}>
                            Convenience Stores
                        </Link>
                        <Link href="/" className={`hover:underline text-[#ffffff] opacity-60 ${ceraMedium.className}`}>
                            Medical
                        </Link>
                        <Link href="/" className={`hover:underline text-[#ffffff] opacity-60 ${ceraMedium.className}`}>
                            Retail Business
                        </Link>
                        <Link href="/" className={`hover:underline text-[#ffffff] opacity-60 ${ceraMedium.className}`}>
                            And Many More
                        </Link>
                    </div>
                </div>

                <div
                    className="flex flex-col text-start"
                >
                    <h6 className={`${ceraMedium.className} mb-4 text-white text-[20px]`}>Company</h6>
                    <div className="flex flex-col gap-2">
                        <Link href="/" className={`hover:underline text-[#ffffff] opacity-60 ${ceraMedium.className}`}>
                            FAQ’s
                        </Link>
                        <Link href="/" className={`hover:underline text-[#ffffff] opacity-60 ${ceraMedium.className}`}>
                            About Us
                        </Link>
                        <Link href="/" className={`hover:underline text-[#ffffff] opacity-60 ${ceraMedium.className}`}>
                            Medical
                        </Link>
                        <Link href="/" className={`hover:underline text-[#ffffff] opacity-60 ${ceraMedium.className}`}>
                            Partner with us
                        </Link>
                        <Link href="/" className={`hover:underline text-[#ffffff] opacity-60 ${ceraMedium.className}`}>
                            Contact us
                        </Link>
                        <Link href="/" className={`hover:underline text-[#ffffff] opacity-60 ${ceraMedium.className}`}>
                            Privacy Policy & Terms and Conditions
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#FFFFFF] opacity-60 w-[90%] mx-auto py-2">

            </div>
            <div className="flex pt-4 pb-6 px-10 lg:px-16 items-start lg:items-center gap-4 justify-between flex-col lg:flex-row  w-full mx-auto"
            >
                <p className={`text-[#ffffff] opacity-60 ${ceraMedium.className}`}>
                    Copyright © 2022 Solar Capital Group LLC. All rights reserved.
                </p>

                <p className={`text-[#ffffff] inline-flex items-center gap-3 ${ceraMedium.className}`}><span className='opacity-60'>Follow us:</span>  <Link href="/"><FaYoutube size={20} fill='#F14336' /></Link>
                </p>
            </div>
        </footer>
    )
};

export default Footer;