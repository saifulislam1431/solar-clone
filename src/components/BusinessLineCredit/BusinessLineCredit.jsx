import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Link from "next/link";
import Image from "next/image";
import { ceraBold, ceraMedium } from '@/app/fonts';
import heroImg from "../../../public/banner/Business-Line-of-Credit.jpg";
import heroImg2 from "../../../public/banner/Photo-9.jpg";
import { FaCheckCircle } from 'react-icons/fa';

const BusinessLineCredit = () => {
    return (
        <section className='lg:my-28 px-4'>

            {/* Getting the Best Rates and Terms */}
            <div>
                <SectionTitle title="Getting the Best Rates and Terms" />

                <div className='mt-16 flex flex-col lg:flex-row items-start justify-center gap-10 max-w-6xl mx-auto'>

                    <div className='space-y-4 text-[#505050] w-full'>
                        <p><strong>Are your business plans stalled due to a lack of funds?</strong> A business line of credit can help cover unexpected payroll and unexpected financial hurdles. You may never need it, but having a financial cushion in place will give you the peace of mind in knowing unexpected costs will be covered.</p>

                        <p>At <Link href="/" className='text-primary'>Solar Capital Group</Link>, we understand the importance of small businesses having reliable access to working capital. In fact, by Small Business Administration estimates, over three-quarters of small businesses rely on credit to grow their business.</p>

                        <p>Before you shop credit lines for your business, read this guide. <Link href="/" className='text-primary'>Solar Capital Group</Link> puts it all into perspective, and this guide will help you to qualify, apply for, and get the best terms and rates on a business line of credit.</p>
                    </div>

                    <div className='text-[#505050] w-full'>
                        <div className='space-y-7'>
                            <p className={`${ceraBold?.className} text-[34px] text-primary mb-3`}>Current Rates and Terms</p>

                            <p><Link href="/" className='text-primary'>Solar Capital Group</Link> skips the brokers, banks, and boards to offer some of the best rates on business lines of credit.</p>
                        </div>

                        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-5 my-7'>
                            <div className='space-y-2'>
                                <p className='text-primary font-semibold'>
                                    Borrow from</p>
                                <p>$10,000 to $1,000,000+</p>
                            </div>

                            <div className='space-y-2'>
                                <p className='text-primary font-semibold'>Term lengths</p>
                                <p>	26 weeks to 5 years</p>
                            </div>

                            <div className='space-y-2'>
                                <p className='text-primary font-semibold'>	APR</p>
                                <p>	7% to 25%</p>
                            </div>
                        </div>

                        <div className='mt-8'>
                            <Link href="/application" className={`myBtn ${ceraMedium?.className} px-6 py-4 text-lg`}>Apply Now</Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* What are Small Business Lines of Credit? */}
            <div className='my-16'>
                <div className='max-w-5xl mx-auto'>
                    <SectionTitle title="What are Small Business Lines of Credit?" />
                    <p className='text-[18px] text-[#505050]'>Think you don’t know anything about small business lines of credit? There’s a good chance you already have something similar to this borrowing tool in your purse or wallet. A business line of credit operates along the same lines as a credit card — albeit one with better rates, terms, and a higher spending limit.</p>
                </div>

                <div className='mt-16 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-7'>

                    <div className='shadow-primary rounded-2xl px-5 py-8 flex flex-col items-center justify-center text-center w-full space-y-4 h-[350px]'>
                        <div className='text-[24px] font-bold w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center text-white mx-auto -mt-[58px]'>
                            <h1>1</h1>
                        </div>
                        <div>
                            <p className={`${ceraMedium?.className} text-[20px]`}>Only pay interest on withdrawals.</p>
                            <p className='text-[14px] text-[#505050] my-2'>Once you’re approved for this type of business financing, the lender will provide you with a credit line. Just like credit cards, the amount you are allowed to borrow and interest rate rely heavily on your credit score, time in business, revenue, and other factors.</p>
                        </div>
                    </div>

                    <div className='shadow-primary rounded-2xl px-5 py-8 flex flex-col items-center justify-center text-center w-full space-y-4 h-[350px]'>
                        <div className='text-[24px] font-bold w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center text-white mx-auto -mt-[58px]'>
                            <h1>2</h1>
                        </div>
                        <div>
                            <p className={`${ceraMedium?.className} text-[20px]`}>Borrow as much (or as little) as you like.</p>
                            <p className='text-[14px] text-[#505050] my-2'>With a credit line, you can choose to borrow as much or as little as you need, up to your credit limit. Most credit lines for small businesses are somewhere in the range of $50,000 to $500,000. At Solar Capital Group, we can approve lines of credit up to $1,000,000.</p>
                        </div>
                    </div>


                    <div className='shadow-primary rounded-2xl px-5 py-8 flex flex-col items-center justify-center text-center w-full space-y-4 h-[350px]'>
                        <div className='text-[24px] font-bold w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center text-white mx-auto -mt-[58px]'>
                            <h1>3</h1>
                        </div>
                        <div>
                            <p className={`${ceraMedium?.className} text-[20px]`}>Give your business financial flexibility.</p>
                            <p className='text-[14px] text-[#505050] my-2'>Many small business owners prefer lines of credit over receiving a lump sum as it allows them flexibility and discretion in terms of how and when the working capital will be applied.</p>
                        </div>
                    </div>

                    <div className='shadow-primary rounded-2xl px-5 py-8 flex flex-col items-center justify-center text-center w-full space-y-4 h-[350px]'>
                        <div className='text-[24px] font-bold w-[50px] h-[50px] rounded-full bg-primary flex items-center justify-center text-white mx-auto -mt-[58px]'>
                            <h1>4</h1>
                        </div>
                        <div>
                            <p className={`${ceraMedium?.className} text-[20px]`}>How to Qualify</p>
                            <p className='text-[14px] text-[#505050] my-2'>Generally speaking, most financial lenders only offer their best rates and terms to those with FICO® scores of 680 or better. If you are looking to take out a business line of credit but bad credit is giving you second thoughts, we have some great news for you.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Credit Lines up to $1 Million */}
            <div className='my-16 bg-white py-14'>

                <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-14'>

                    <div className='w-full'>
                        <Image src={heroImg} alt='Credit Lines up to $1 Million' />
                    </div>

                    <div className='lg:w-[150%]'>
                        <SectionTitle title="Credit Lines up to $1 Million" />

                        <div className='mt-5 text-[#505050]'>
                            <p><Link href="/">Solar Capital Group</Link> isn’t just a clever name. Most businesses can apply for and receive working capital within 24 hours. This is just one of the many perks in choosing Solar Capital Group. You can use your small business line of credit to:</p>

                            <div className='mt-4 flex flex-col space-y-2'>
                                <p className='inline-flex items-center gap-2'><FaCheckCircle className='text-primary' /> <span>Cover unexpected expenses</span></p>

                                <p className='inline-flex items-center gap-2'><FaCheckCircle className='text-primary' /> <span>Build a financial buffer</span></p>

                                <p className='inline-flex items-center gap-2'><FaCheckCircle className='text-primary' /> <span>Finance business opportunities</span></p>

                                <p className='inline-flex items-center gap-2'><FaCheckCircle className='text-primary' /> <span>…and more</span></p>
                            </div>

                            <div className='mt-4 space-y-2'>
                                <p>Working with Solar Capital Group, small business owners can qualify for lines of credit ranging from $10,000 to over $1,000,000.</p>

                                <p>To discuss your business’ needs, call <Link className='text-primary' href="/">Solar Capital Group</Link> at <Link href="tel:888-401-5199" className='text-primary'>888-401-5199</Link> to speak with a lending specialist. When you are ready to apply, simply <Link href="/application" className='text-primary'>use our online loan application</Link>. A few minutes of your time might get you some of the best rates and terms on a small business line of credit.</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {/* The Pros and Cons of Business Credit Lines */}
            <div className='my-16 max-w-6xl mx-auto'>

                <div className='flex flex-col lg:flex-row items-center justify-center gap-14'>
                    <div className='w-full'>
                        <h1 className={`${ceraBold?.className} text-[36px]`}>The Pros and Cons of Business Credit Lines</h1>

                        <div className='mt-4 space-y-3 text-[#505050]'>
                            <p>For the convenience, flexibility, and manageable repayment terms, many small business owners see business credit lines as the preferred means of borrowing. That isn’t to say that this type of working capital doesn’t have its drawbacks — all loans do.</p>

                            <p>Before you apply for working capital or a business credit line, keep the following in mind:</p>
                        </div>
                    </div>

                    <div className='w-full'>
                        <Image src={heroImg2} alt='Hero Image' className='lg:w-5/6' />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-start justify-center gap-14 mt-14'>
                    <div className='w-full'>
                        <p className={`${ceraBold?.className} text-[20px]`}>The Pros</p>

                        <div className='mt-4 flex flex-col space-y-2'>
                            <p className='inline-flex items-center gap-2'><FaCheckCircle className='text-primary' /> <span>Only pay interest on the amount withdrawn.</span></p>

                            <p className='inline-flex items-center gap-2'><FaCheckCircle className='text-primary' /> <span>Those with bad credit can qualify.</span></p>

                            <p className='inline-flex items-center gap-2'><FaCheckCircle className='text-primary' /> <span>Steady access to working capital.</span></p>

                            <p className='inline-flex items-center gap-2'><FaCheckCircle className='text-primary' /> <span>Cover most types of business expenses.</span></p>
                        </div>
                    </div>


                    <div className='w-full'>
                        <p className={`${ceraBold?.className} text-[20px]`}>The Cons</p>

                        <div className='mt-4 flex flex-col space-y-2'>
                            <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span>Your lender may ask for updated financial information before releasing sizable withdrawals.</span></p>

                            <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span>Those with poor credit scores may have to settle for higher interest rates compared to other loans.</span></p>

                            <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span>Steady access to working capital.</span></p>

                            <p className='flex items-center gap-2'><span><FaCheckCircle className='text-primary' /></span> <span>Collateral may be required for businesses with high debt-to-revenue ratios.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessLineCredit;