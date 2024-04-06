import React from 'react';
import { ceraBold } from '../fonts';
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../../public/banner/AutoRepairHeader.png"
import SectionTitle from '@/components/SectionTitle/SectionTitle';

const WhoWeHavePage = () => {
    return (
        <section>
            <section className='banner-container relative lg:-top-[82px] -z-10'>

                <div className='max-w-7xl h-full mx-auto flex items-center justify-between z-40'>
                    <div className='mt-4 gap-y-10 lg:gap-y-0 lg:mt-[90px] w-full h-full flex flex-col lg:flex-row items-center justify-between px-4 lg:px-16'>
                        <div className='text-center lg:text-start'>
                            <p className={`${ceraBold.className} text-[30px] lg:text-[48px] font-bold mb-3 max-w-[600px] lg:leading-[55px]`}
                            >Who We Serve</p>
                            <p className='text-[18px font-medium text-[#505050] max-w-lg'>Get The Loan Solution Suited To Your Needs, Approved In Record Time.</p>
                        </div>

                        <div>
                            <Image src={heroImg} alt='Hero Img' className='w-96' />
                        </div>
                    </div>

                </div>

            </section>


            <div className='max-w-5xl mx-auto text-[18px] text-[#505050] font-medium space-y-4'>
                <p>Getting the funding you need from a traditional lender like a bank can be difficult, especially for Car Repair Service providers.</p>
                <p>Lengthy approval processes, denials due to demand instability, cash flow fluctuations, and long account receivable periods…</p>
                <p>Access to a reliable source of capital is a challenge.</p>
                <p>At <Link href="/company" className="text-primary">Solar Capital Group</Link>, we pride ourselves on approving more loans than traditional lenders and other business funding companies. Often in just 24 hours.</p>
            </div>

            <div className='mt-24 bg-[#FBFBFB] py-16'>

                <div className='max-w-5xl mx-auto'>
                    <SectionTitle title="Which Loan Solutions Are Available for Automotive Shops?" />
                    <p className='text-[18px] text-[#505050] font-medium'>Find the right option for funding your business with the help of our specialists</p>
                </div>

                <div className='max-w-6xl mx-auto mt-4'>

                    <div className='w-full flex items-center justify-center gap-5'>

                    </div>


                </div>

            </div>
        </section>
    );
};

export default WhoWeHavePage;