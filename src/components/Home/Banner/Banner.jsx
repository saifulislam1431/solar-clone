import { ceraBold, ceraMedium } from '@/app/fonts';
import Link from 'next/link';
import React from 'react';
import heroImg from "../../../../public/banner/hero_img.png"
import Image from 'next/image';

const Banner = () => {
    return (
        <section className='banner-container relative lg:-top-[82px] -z-10'>

            <div className='max-w-7xl h-full mx-auto flex items-center justify-between z-40'>
                <div className='mt-4 gap-y-10 lg:gap-y-0 lg:mt-[90px] w-full h-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16'>
                    <div className='text-center lg:text-start'>
                        <p className={`${ceraBold.className} text-[30px] lg:text-[48px] font-bold mb-10 max-w-[600px] lg:leading-[55px]`}
                        >A Trusted Source of Fast, Flexible Financing for Small Businesses</p>

                        <Link href="/company" className={`${ceraMedium.className} myBtn py-4 px-8 mt-6 text-xl`}>Learn More</Link>
                    </div>

                    <div>
                        <Image src={heroImg} alt='Hero Img' />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Banner;