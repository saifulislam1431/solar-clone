import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TopHeader = () => {
    return (
        <section className='text-xs text-base-100 bg-primary font-normal px-6 py-3'>


            <div className='max-w-7xl mx-auto flex items-center justify-between px-2 lg:px-10'>

                <div className='flex items-center gap-10'>
                    <p className='flex items-center gap-5'><Link href="tel:516-464-6300"><FaPhoneAlt size={14} /></Link> <Link href="tel:516-464-6300" className='hidden lg:flex' >516-464-6300</Link></p>

                    <p className='h-6 border-l border-white hidden lg:flex'></p>

                    <p className='flex items-center gap-5'><Link href="mailto:info@solarcapitalgroup.com"><FaEnvelope size={14} /></Link> <Link href="mailto:info@solarcapitalgroup.com" className='hidden lg:flex'>info@solarcapitalgroup.com</Link></p>
                </div>


                <div className='flex items-center gap-5'>
                    <p className='hidden lg:flex items-center gap-5'>Follows:</p>

                    <div className='flex items-center gap-7'>
                        <Link href="/"><FaFacebookF size={16} /></Link>
                        <Link href="/"><FaInstagram size={16} /></Link>
                        <Link href="/"><FaTwitter size={16} /></Link>
                        <Link href="/"><FaLinkedinIn size={16} /></Link>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default TopHeader;