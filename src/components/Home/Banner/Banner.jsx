import { ptSans } from '@/app/fonts';
import Link from 'next/link';
import React from 'react';
import heroImg from "../../../../public/banner/hero_img.png"
import Image from 'next/image';

const Banner = () => {
    return (
        <section className='min-h-screen banner-container relative -top-[82px] nav'>

            <div className='max-w-7xl h-full mx-auto flex items-center justify-between '>
                <div className='mt-[90px] w-full h-full flex flex-col lg:flex-row items-center justify-between px-2 lg:px-16'>
                    <div>
                        <p className={`${ptSans.className} text-[48px] font-bold mb-10 max-w-[600px]`}
                            style={{
                                lineHeight: "55px"
                            }}>A Trusted Source of Fast, Flexible Financing for Small Businesses</p>

                        <Link href="/company" className={`${ptSans.className} myBtn py-3 px-8 mt-6`}>Learn More</Link>
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