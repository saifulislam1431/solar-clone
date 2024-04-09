'use client'
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import proImg from "../../../public/banner/our_prod.png"
import checkPurple from "../../../public/icons/checkmark_purple.png";
import checkOrange from "../../../public/icons/checkmark_orange.png";
import checkMint from "../../../public/icons/checkmark_mint.png";
import heroImg from "../../../public/banner/hero_img2.jpg";
import { FaArrowRight } from 'react-icons/fa6';
import { ceraBold, ceraMedium } from '../fonts';
import Testimonials from '@/components/Home/Testimonials/Testimonials';

const HowItWorks = () => {
    const [processData, setData] = useState([]);

    useEffect(() => {
        fetch("/jsons/process.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <section className='relative'>

            <div className='bg-[#F6F9FE] py-14 h-[400px] flex flex-col items-center justify-center relative -top-[82px] -z-10'>
                <div className='max-w-3xl mx-auto'>
                    <SectionTitle title="A Straightforward Approach to
Small Business Financing" />
                </div>
            </div>

            {/* Our Product */}
            <div>
                <div>
                    <SectionTitle title="Our Product" />
                </div>
                <div className='mt-8 flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto px-5 gap-5'>

                    <div className='w-full'>
                        <Image src={proImg} alt='Our Product' />
                    </div>

                    <div className='text-[#505050]'>
                        <p>We offer revenue-based financing, which is a financing arrangement that provides upfront capital in exchange for a set amount of the business’ future revenue.</p>

                        <div className='my-5 flex flex-col gap-y-3'>
                            <p className='inline-flex items-center gap-2'><FaArrowRight className='text-primary h-5 w-5' /> <span>$5,000 to $300,000 in upfront capital</span></p>

                            <p className='inline-flex items-center gap-2'><FaArrowRight className='text-primary h-5 w-5' /> <span>Auto-debited daily or weekly payments</span></p>

                            <p className='inline-flex items-center gap-2'><FaArrowRight className='text-primary h-5 w-5' /> <span>3 – 12 months estimated payment period</span></p>
                        </div>

                        <p><Link href="/" className='text-primary text-sm font-medium'>Learn more</Link> about what makes our product different from traditional financing options</p>
                    </div>

                </div>
            </div>

            {/* Quick Eligibility Check */}

            <div className='py-14 bg-[#FBFBFB] my-16'>
                <div>
                    <SectionTitle title="Quick Eligibility Check" />
                    <p className='mt-2 mb-8 text-[18px] font-medium text-[#505050] text-center'>Do you meet these simple requirements? If so, your business may be eligible for funding! <Link href="/application" className='text-primary'>Apply now</Link>.</p>
                </div>

                <div className='mt-16 flex flex-col lg:flex-row max-w-6xl mx-auto items-center justify-evenly'>
                    <div className='text-center flex flex-col items-center gap-3'>
                        <div className='w-[70px]'>
                            <Image src={checkPurple} alt='Check Purple' />
                        </div>
                        <p className={`${ceraBold?.className} text-[22px] max-w-60`}>In business in the U.S.
                            for 1+ years</p>
                    </div>

                    <div className='text-center flex flex-col items-center gap-3'>
                        <div className='w-[70px]'>
                            <Image src={checkOrange} alt='Check Purple' />
                        </div>
                        <p className={`${ceraBold?.className} text-[22px] max-w-60`}>Make $10,000+ in
                            monthly revenue</p>
                    </div>

                    <div className='text-center flex flex-col items-center gap-3'>
                        <div className='w-[70px]'>
                            <Image src={checkMint} alt='Check Purple' />
                        </div>
                        <p className={`${ceraBold?.className} text-[22px] max-w-60`}>Have a 500+ personal
                            credit score</p>
                    </div>
                </div>
            </div>

            {/* Process */}
            <div className='my-20 text-center max-w-6xl mx-auto px-5'>
                <h1 className={`${ceraBold.className} text-[40px] mb-5`}>Our Process</h1>

                <div className='my-16 flex flex-col items-start justify-center lg:flex-row gap-14'>

                    <div className='flex items-center justify-center flex-col'>
                        <h1 className='text-[24px] font-bold w-[50px] h-[50px] rounded-full bg-[#9b73f5] flex items-center justify-center text-white'>1</h1>
                        <p className={`${ceraBold.className} text-[22px] my-2`}>Qualify</p>
                        <p className='text-[14px] text-[#505050]'>Meet simple requirements</p>
                    </div>

                    <div className='flex items-center justify-center flex-col'>
                        <h1 className='text-[24px] font-bold w-[50px] h-[50px] rounded-full bg-[#4ed8ae] flex items-center justify-center text-white'>2</h1>
                        <p className={`${ceraBold.className} text-[22px] my-2`}>Apply</p>
                        <p className='text-[14px] text-[#505050]'>Provide basic business info</p>
                    </div>

                    <div className='flex items-center justify-center flex-col'>
                        <h1 className='text-[24px] font-bold w-[50px] h-[50px] rounded-full bg-[#39caeb] flex items-center justify-center text-white'>3</h1>
                        <p className={`${ceraBold.className} text-[22px] my-2`}>Get Approval</p>
                        <p className='text-[14px] text-[#505050]'>Find out within hours</p>
                    </div>

                    <div className='flex items-center justify-center flex-col'>
                        <h1 className='text-[24px] font-bold w-[50px] h-[50px] rounded-full bg-[#f89b17] flex items-center justify-center text-white'>4</h1>
                        <p className={`${ceraBold.className} text-[22px] my-2`}>Receive Funding</p>
                        <p className='text-[14px] text-[#505050] max-w-40'>Have funds deposited often same-day</p>
                    </div>

                    <div className='flex items-center justify-center flex-col'>
                        <h1 className='text-[24px] font-bold w-[50px] h-[50px] rounded-full bg-[#efc811] flex items-center justify-center text-white'>5</h1>
                        <p className={`${ceraBold.className} text-[22px] my-2`}>Renew</p>
                        <p className='text-[14px] text-[#505050] max-w-40'>Consider additional funding</p>
                    </div>

                </div>

                <div className='my-10 space-y-10'>
                    {
                        processData?.map((process, indx) => <div key={indx} className='flex flex-col lg:flex-row items-center justify-center'>

                            <div className='w-full lg:w-3/6 overflow-hidden'>
                                <Image src={process?.img} alt='Process Image' width={300} height={190} className='overflow-hidden rounded-2xl' />
                            </div>

                            <div className='text-left w-full space-y-3'>
                                <h1 className={`${ceraBold?.className} text-[22px]`}>{process?.title}</h1>
                                <p className='text-[14px] text-[#505050]'>{process?.description}</p>
                            </div>

                        </div>)
                    }
                </div>

                <div className='mt-16'>
                    <p className='text-[20px] text-[#505050]'>Have specific questions about our process? Check out our <Link href="fqa" className={`${ceraMedium?.className} text-primary`}>FAQs</Link> to learn more.</p>
                </div>
            </div>

            {/* testimonial */}
            <Testimonials />

            {/* Apply for Funding */}
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
                            <h1 className={`${ceraBold.className} text-[30px] lg:text-[40px] text-left`}>Access to Technology and Real People</h1>

                            <p className='text-[14px] text-[#505050]'>As soon as you’re funded, you’ll be assigned a dedicated Account Executive who is available to help you manage your funding and notify you when you’re eligible for additional financing. You’ll also have access to our self-serve customer portal, where you can see your balance and manage your account at any time.</p>
                        </div>

                        <div className='mt-10'>
                            <Link href="/application" className={`${ceraMedium.className} myBtn px-5 py-2 text-lg`}>Apply for Funding</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* More Than Money */}

            <section className='my-20 max-w-5xl mx-auto banner-container py-14 rounded-3xl'>
                <div className='text-center'>

                    <SectionTitle title="Apply For Small Business Funding" />
                </div>

                <div className='mb-7 mt-5 max-w-4xl mx-auto text-center'>
                    <p className={`${ceraMedium.className} text-[18px] text-[#505050]`}>We’re invested in your success beyond providing financing. Our Account Executives are a phone call away to help you navigate the funding process and help your company succeed.</p>
                </div>

                <div className='text-center mt-10'>
                    <Link href="/application" className={`${ceraMedium.className} myBtn px-6 py-4 text-lg`}>
                        Apply for Funding
                    </Link>
                </div>
            </section>
        </section>
    );
};

export default HowItWorks;