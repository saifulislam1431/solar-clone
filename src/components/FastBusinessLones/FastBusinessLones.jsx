import React from 'react';
import Image from "next/image"
import heroImg from "../../../public/banner/hero_img3.jpg"
import { ceraBold, ceraMedium } from '@/app/fonts';
import SectionTitle from '../SectionTitle/SectionTitle';
import cutlery from "../../../public/icons/cutlery-1.png";
import crane from "../../../public/icons/crane.png";
import conveyor from "../../../public/icons/conveyor.png";
import family from "../../../public/icons/family.png";
import healthcare from "../../../public/icons/healthcare.png";
import customerService from "../../../public/icons/customer-service.png";
import shopping from "../../../public/icons/shopping-cart.png";

const FastBusinessLones = () => {
    return (
        <section className='my-28 px-4'>
            <section>
                <div className='max-w-6xl mx-auto py-16 flex flex-col lg:flex-row items-center justify-between gap-20'>
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
                            <h1 className={`${ceraBold.className} text-[30px] lg:text-[40px] text-left`}>Fast Business Loans: Everything You Need to Know</h1>

                            <p className='text-[14px] text-[#505050]'>Fast business loans give business the financial flexibility to respond to emergencies, cover funding shortages, and fund opportunities. Unlike a loan from a bank, rapid financing through Fast Business Financial means you can get approved and have funds deposited into your business account in as little as 24 hours.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Number of Unforeseen Events */}
            <div className='my-14 bg-[#FBFBFB] py-16'>
                <div className='text-center max-w-5xl mx-auto'>
                    <SectionTitle title="Number of Unforeseen Events" />
                    <p className='text-[18px] text-[#505050] mt-2 font-medium'>Same-day business financing isn’t just for fixing catastrophes; this type of loan is perfect for a number of unforeseen events, including:</p>
                </div>
                <div className='max-w-5xl mx-auto grid grid-cols-12 mt-16 gap-y-12 justify-items-center lg:justify-items-start'>

                    <div className='col-span-full md:col-span-6 lg:col-span-4 flex items-center gap-x-5'>
                        <div>
                            <Image src={cutlery} alt='Machinery repairs' />
                        </div>
                        <p className={`${ceraMedium.className} text-[20px]`}>Machinery repairs</p>
                    </div>

                    <div className='col-span-full md:col-span-6 lg:col-span-4 flex items-center gap-x-5'>
                        <div>
                            <Image src={crane} alt='Machinery repairs' />
                        </div>
                        <p className={`${ceraMedium.className} text-[20px]`}>
                            Tax payments</p>
                    </div>

                    <div className='col-span-full md:col-span-6 lg:col-span-4 flex items-center gap-x-5'>
                        <div>
                            <Image src={healthcare} alt='Machinery repairs' />
                        </div>
                        <p className={`${ceraMedium.className} text-[20px]`}>
                            Inventory purchases</p>
                    </div>

                    <div className='col-span-full md:col-span-6 lg:col-span-4 flex items-center gap-x-5'>
                        <div>
                            <Image src={shopping} alt='Machinery repairs' />
                        </div>
                        <p className={`${ceraMedium.className} text-[20px]`}>
                            Revenue shortages</p>
                    </div>

                    <div className='col-span-full md:col-span-6 lg:col-span-4 flex items-center gap-x-5'>
                        <div>
                            <Image src={conveyor} alt='Machinery repairs' />
                        </div>
                        <p className={`${ceraMedium.className} text-[20px]`}>
                            Equipment</p>
                    </div>

                    <div className='col-span-full md:col-span-6 lg:col-span-4 flex items-center gap-x-5'>
                        <div>
                            <Image src={customerService} alt='Machinery repairs' />
                        </div>
                        <p className={`${ceraMedium.className} text-[20px]`}>
                            Personnel hiring</p>
                    </div>

                    <div className='col-span-full md:col-span-6 lg:col-span-4 flex items-center gap-x-5'>
                        <div>
                            <Image src={cutlery} alt='Machinery repairs' />
                        </div>
                        <p className={`${ceraMedium.className} text-[20px]`}>
                            Payroll</p>
                    </div>

                </div>

                <div className='max-w-5xl mx-auto text-center mt-14'>
                    <p className='text-[14px] text-[#505050]'>Small business loans can also benefit dental practices, dry cleaners, gas stations, pharmacies… just to name a few. No matter what industry you operate in, our expert Funding Specialists will work closely with you to select the best funding option to help you achieve your business’s goals without sacrificing cash flow.</p>
                </div>
            </div>

            {/* How Do I Qualify for Rapid Business Funds? */}
            <div className='my-16 max-w-6xl mx-auto'>
                <div>
                    <SectionTitle title="How Do I Qualify for Rapid Business Funds?" />
                </div>

                <div className='mt-20'>
                    <div className='flex flex-col lg:flex-row gap-14 lg:gap-6 items-start justify-center'>
                        <div className='shadow-primary rounded-2xl px-5 py-8 flex flex-col items-center justify-center text-center w-full space-y-4'>
                            <div className='text-[24px] font-bold w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center text-white mx-auto -mt-[58px]'>
                                <h1>1</h1>
                            </div>
                            <div>
                                <p className={`${ceraMedium?.className} text-[20px]`}>FICO credit score of 450 or better</p>
                            </div>
                        </div>

                        <div className='shadow-primary rounded-2xl px-5 py-8 flex flex-col items-center justify-center text-center w-full space-y-4'>
                            <div className='text-[24px] font-bold w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center text-white mx-auto -mt-[58px]'>
                                <h1>2</h1>
                            </div>
                            <div>
                                <p className={`${ceraMedium?.className} text-[20px]`}>Documented revenue gains</p>
                            </div>
                        </div>

                        <div className='shadow-primary rounded-2xl px-5 py-8 flex flex-col items-center justify-center text-center w-full space-y-4'>
                            <div className='text-[24px] font-bold w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center text-white mx-auto -mt-[58px]'>
                                <h1>3</h1>
                            </div>
                            <div>
                                <p className={`${ceraMedium?.className} text-[20px]`}>At least 6 months in business</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-14 lg:gap-6 items-start justify-center mt-20 max-w-3xl mx-auto'>
                        <div className='shadow-primary rounded-2xl px-5 py-8 flex flex-col items-center justify-center text-center w-full space-y-4'>
                            <div className='text-[24px] font-bold w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center text-white mx-auto -mt-[58px]'>
                                <h1>4</h1>
                            </div>
                            <div>
                                <p className={`${ceraMedium?.className} text-[20px]`}>No recent bankruptcies</p>
                            </div>
                        </div>

                        <div className='shadow-primary rounded-2xl px-5 py-8 flex flex-col items-center justify-center text-center w-full space-y-4'>
                            <div className='text-[24px] font-bold w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center text-white mx-auto -mt-[58px]'>
                                <h1>5</h1>
                            </div>
                            <div>
                                <p className={`${ceraMedium?.className} text-[20px]`}>Three (3) most recent bank statements</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='max-w-5xl mx-auto text-center mt-14'>
                <p className='text-[14px] text-[#505050]'>Small business loans can also benefit dental practices, dry cleaners, gas stations, pharmacies… just to name a few. No matter what industry you operate in, our expert Funding Specialists will work closely with you to select the best funding option to help you achieve your business’s goals without sacrificing cash flow.</p>
            </div>


            {/* Working with a Direct Lender for Fast Business Funding */}
            <div className='max-w-5xl mx-auto text-center mt-20'>

                <div className='mb-6'>
                    <SectionTitle title="Working with a Direct Lender
for Fast Business Funding"/>
                </div>


                <div className='space-y-4'>
                    <p className='text-[14px] text-[#505050]'>Once a business is established for a number of years, they can seek a business loan from a full range of financial institutions. But, sometimes businesses require Solar Capital Group through a direct lender. After all, it can take weeks, sometimes months to get approved for a loan through traditional banking channels.</p>

                    <p className='text-[14px] text-[#505050]'>The truth of the matter is that sometimes working capital can’t come soon enough. An essential piece of machinery fails, a business opportunity arises, or the company needs to hire more staff to handle growing pains — all of these are instances where a business can benefit from using quick business funding through an online direct lender.</p>

                    <p className='text-[14px] text-[#505050]'>Direct lenders (such as Solar Capital Group) offer fast business loans to help businesses respond to unexpected financial challenges or opportunities. Instead of going through the weeks- or months-long process of filling out applications, signing over collateral, and then waiting to learn about whether or not they’ve been approved, businesses can see if they qualify in a matter of minutes. If the borrower agrees to the terms, rates, and conditions of the loan, these funds can then be deposited directly into business’ bank account — usually in less than 24 hours.</p>


                    <p className='text-[14px] text-[#505050]'>When you need rapid financing, Solar Capital Group is here to help. Since 2014, we have helped SMEs gain access to working capital — and quickly!</p>
                </div>

            </div>
        </section>
    );
};

export default FastBusinessLones;