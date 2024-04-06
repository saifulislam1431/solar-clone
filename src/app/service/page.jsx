import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import icons from "../../../public/icons/service-icon.png"
import { ceraMedium } from '../fonts';
import GetStarted from '@/components/Home/GetStarted/GetStarted';

const ServicePage = () => {
    return (
        <section className='relative'>

            <div className='bg-[#F6F9FE] py-14 h-[300px] flex items-end justify-center relative -top-[82px] -z-10'>
                <SectionTitle title="Service" />
            </div>

            <div className='max-w-6xl mx-auto  my-16 flex items-center justify-center gap-7 flex-col lg:flex-row px-5'>

                <Link href="/service/fast-business-loans" className='w-full shadow-primary rounded-2xl flex items-center justify-center flex-col gap-y-3 py-5'>
                    <Image src={icons} alt='Service icon' className='w-[55px] h-[60px]' />
                    <p className={`${ceraMedium.className} text-[20px] hover:text-primary transition-all duration-500`}>Fast Business Loan</p>
                </Link>

                <Link href="/service/business-line-credit" className='w-full shadow-primary rounded-2xl flex items-center justify-center flex-col gap-y-3 py-5'>
                    <Image src={icons} alt='Service icon' className='w-[55px] h-[60px]' />
                    <p className={`${ceraMedium.className} text-[20px] hover:text-primary transition-all duration-500`}>Business Line of Credit</p>
                </Link>



                <Link href="/service/business-Term-Loan" className='w-full shadow-primary rounded-2xl flex items-center justify-center flex-col gap-y-3 py-5'>
                    <Image src={icons} alt='Service icon' className='w-[55px] h-[60px]' />
                    <p className={`${ceraMedium.className} text-[20px] hover:text-primary transition-all duration-500`}>Business Term Loan</p>
                </Link>

            </div>

            <div className='my-20 max-w-6xl mx-auto px-5'>
                <SectionTitle title="Why Get Funded by Solar Capital Group?" />
                <p className='text-[18px] text-[#505050] text-center font-medium mt-2'>At Solar Capital Group, we actually care about the success of your business. We’ll never over-leverage your business by giving you more funding than you can handle. We offer a number of small business financing options, and with our fast approval process and streamlined application, you can get the alternative business financing you need in as little as 24 hours. If you have any questions about small business lending on the way, and our knowledgeable Funding Specialists will be there to help.</p>
            </div>

            <GetStarted />

        </section>
    );
};

export default ServicePage;