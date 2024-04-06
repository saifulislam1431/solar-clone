import Image from 'next/image';
import React from 'react';
import heroImg from "../../../../public/banner/hero_img2.jpg"
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Link from 'next/link';
import { ceraBold, ceraMedium } from '@/app/fonts';

const TrustfulFunding = () => {
    return (
        <section className='my-20 banner-container'>
            <div className='max-w-6xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-20'>
                <div className='relative flex flex-col gap-y-20 w-full'>
                    <div className='w-[190px] h-[150px] bg-primary absolute -top-2 -left-2'>
                    </div>

                    <div className='z-40'>
                        <Image src={heroImg} alt='Hero Image' />
                    </div>

                    <div className='w-full flex justify-end absolute -bottom-2 -right-2'>
                        <div className='w-[190px] h-[150px] bg-primary'>
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='w-full space-y-2'>
                        <p className='text-[20px] text-primary font-medium'>About Us</p>
                        <h1 className={`${ceraBold.className} text-[30px] lg:text-[40px] text-left`}>A Trustful Funding Option</h1>

                        <p className='text-[14px] text-[#505050]'>Solar Capital Group offers unparalleled funding solutions customized for your business. We work with you to prepare the right economic package that works for you when you need it the most. We understand how valuable your time is as a business owner, so we at Solar Capital Group take great pride in our speed and customer service. We can offer $5,000 to $1 Million. Our funding products help you maintain a positive cash flow so that you can conduct business as usual.</p>

                        <p className='text-[14px] text-[#505050]'>At this time, we are able to offer our services in all 50 states to companies that may be otherwise unable to secure funding through conventional methods or when the traditional banking process is too slow to meet your pressing needs.</p>
                    </div>

                    <div className='mt-10'>
                        <Link href="/how-it-works" className={`${ceraMedium.className} myBtn px-5 py-2 text-lg`}>Read More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustfulFunding;