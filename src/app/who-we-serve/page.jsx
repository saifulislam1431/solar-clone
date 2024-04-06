import React from 'react';
import { ceraBold, ceraMedium } from '../fonts';
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../../public/banner/AutoRepairHeader.png"
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import MerchantCashAdvance from "../../../public/icons/Merchant-Cash-Advance.png"
import CollateralLon from "../../../public/icons/Collateral-Loan.png"
import BusinessLoanCredit from "../../../public/icons/Business-Line-of-Credit.png"
import SmallBusinessLoan from "../../../public/icons/Small-Business-Loan.png"
import { FaCheck } from 'react-icons/fa6';

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
                    <p className='text-[18px] text-[#505050] font-medium text-center'>Find the right option for funding your business with the help of our specialists</p>
                </div>

                <div className='max-w-6xl mx-auto flex flex-col items-center justify-center gap-y-10 mt-14 px-5'>

                    <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-10'>
                        <div className='w-full shadow-primary rounded-2xl flex items-start justify-start gap-4 p-8'>
                            <div>
                                <Image src={MerchantCashAdvance} alt='MerchantCashAdvance' className='w-[100px]' />
                            </div>

                            <div>
                                <p className={`${ceraMedium.className} text-[22px] font-medium`}>Merchant Cash Advance</p>
                                <p className={`${ceraMedium.className} text-[15px] font-medium text-primary`}>High volume of credit card sales?</p>
                                <div className='mt-3 text-[14px] text-[#505050]'>
                                    <p>Receive working capital now.</p>
                                    <p>We take a % of your credit card sales.</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full shadow-primary rounded-2xl flex items-start justify-start gap-4 p-8'>
                            <div>
                                <Image src={SmallBusinessLoan} alt='MerchantCashAdvance' className='w-[100px]' />
                            </div>

                            <div>
                                <p className={`${ceraMedium.className} text-[22px] font-medium`}>Small Business Loan</p>
                                <p className={`${ceraMedium.className} text-[15px] font-medium text-primary`}>Seeking short-term funding to grow?</p>
                                <div className='mt-3 text-[14px] text-[#505050]'>
                                    <p>$10,000 minimum loans;</p>
                                    <p>And up to $1 million.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-10'>
                        <div className='w-full shadow-primary rounded-2xl flex items-start justify-start gap-4 p-8'>
                            <div>
                                <Image src={CollateralLon} alt='CollateralLone' className='w-[100px]' />
                            </div>

                            <div>
                                <p className={`${ceraMedium.className} text-[22px] font-medium`}>Collateral Loan</p>
                                <p className={`${ceraMedium.className} text-[15px] font-medium text-primary`}>High volume of credit card sales?</p>
                                <div className='mt-3 text-[14px] text-[#505050]'>
                                    <p>Looking for longer-term funding options?</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full shadow-primary rounded-2xl flex items-start justify-start gap-4 p-8'>
                            <div>
                                <Image src={BusinessLoanCredit} alt='MerchantCashAdvance' className='w-[100px]' />
                            </div>

                            <div>
                                <p className={`${ceraMedium.className} text-[22px] font-medium`}>Business Line Of Credit</p>
                                <p className={`${ceraMedium.className} text-[15px] font-medium text-primary`}>Need flexible funding?</p>
                                <div className='mt-3 text-[14px] text-[#505050]'>
                                    <p>Borrow what you need, repay as you go.</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <div className='my-20 py-14'>

                <div className='max-w-6xl mx-auto flex items-start justify-between gap-10 flex-col lg:flex-row px-5'>

                    <div className='w-full'>
                        <h2 className={`${ceraMedium.className} text-[32px] font-bold`}>Why apply for Merchant Cash Advance Funding?</h2>
                        <p className='text-[14px] text-[#505050] mt-2'>Join the list of successful auto mechanic shops that have used their funding to:</p>

                        <ul className='mt-6 flex flex-col space-y-3'>
                            <li className='inline-flex items-center gap-3 text-[14px] text-[#505050]'>
                                <FaCheck className='text-primary h-5 w-5' /> <span>Buy materials and supplies</span>
                            </li>
                            <li className='inline-flex items-center gap-3 text-[14px] text-[#505050]'>
                                <FaCheck className='text-primary h-5 w-5' /> <span>Invest in marketing</span>
                            </li>
                            <li className='inline-flex items-center gap-3 text-[14px] text-[#505050]'>
                                <FaCheck className='text-primary h-5 w-5' /> <span>Acquire machine equipment</span>
                            </li>
                            <li className='inline-flex items-center gap-3 text-[14px] text-[#505050]'>
                                <FaCheck className='text-primary h-5 w-5' /> <span>Hire and train new employees</span>
                            </li>
                            <li className='inline-flex items-center gap-3 text-[14px] text-[#505050]'>
                                <FaCheck className='text-primary h-5 w-5' /> <span>Manage demand</span>
                            </li>
                            <li className='inline-flex items-center gap-3 text-[14px] text-[#505050]'>
                                <FaCheck className='text-primary h-5 w-5' /> <span>Upgrade technology</span>
                            </li>
                            <li className='inline-flex items-center gap-3 text-[14px] text-[#505050]'>
                                <FaCheck className='text-primary h-5 w-5' /> <span>…and more!</span>
                            </li>
                        </ul>
                    </div>

                    <div className='w-full'>
                        <h2 className={`${ceraMedium.className} text-[32px] font-bold`}>Apply For Business Funding And Take Your Company To The Next Level!</h2>
                        <p className={`${ceraMedium.className} text-[20px] mt-3`}>No Cost To Apply. No Obligation To Accept.</p>

                        <div className='text-start mt-10'>
                            <Link href="/application" className={`${ceraMedium.className} myBtn px-6 py-4 text-lg`}>
                                Apply Now
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhoWeHavePage;