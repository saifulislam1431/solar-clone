import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';
import { ceraBold } from '../fonts';
import Link from "next/link";
import Image from "next/image";
import support from "../../../public/icons/technical-support.png";
import medal from "../../../public/icons/medal-of-honor.png";
import family from "../../../public/icons/family.png";
import GetStarted from '@/components/Home/GetStarted/GetStarted';

const CompanyPage = () => {
    return (
        <section className='relative'>
            <div className='bg-[#F6F9FE] py-14 h-[300px] flex items-end justify-center relative -top-[82px] -z-10'>
                <SectionTitle title="Company" />
            </div>

            <div className='mb-20 text-center max-w-6xl mx-auto px-5 mt-20 lg:my-0'>
                {/* Vision */}
                <div>
                    <h1 className={`${ceraBold.className} text-[40px] mb-5`}>Our Vision</h1>
                    <p className='text-[14px] text-[#505050] mb-6'>Our vision is to transform the alternative lending space to a space of trust by <Link href="/service" className='text-primary'>helping small and mid-sized businesses grow</Link> without the stress of applying for a small business loan through a traditional lender like a bank which will take months to get you an answer and requires a mountain of paperwork. We can get your company funded in 24-hours with minimum paperwork and excellent customer service that is second to none.</p>

                    <p className='text-[14px] text-[#505050] mb-6'>Banks reject most small business loans, because they prefer to fund large corporations instead. When you work with Solar Capital Group, you can get the funding you need faster, and you can trust us to clearly explain the loan process and your funding options, as well as answer any questions you might have along the way anytime.</p>
                </div>

                {/* Process */}
                <div className='my-14'>
                    <h1 className={`${ceraBold.className} text-[40px] mb-5`}>Our Process</h1>

                    <div className='mt-16 flex flex-col items-start justify-center lg:flex-row gap-14'>

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
                </div>

                {/* Why Solar */}

                <div className='my-14 max-w-6xl mx-auto px-5'>
                    <h1 className={`${ceraBold.className} text-[40px] mb-5`}>Why Solar Capital Group?</h1>

                    <div className='mt-16 flex flex-col lg:flex-row items-center justify-center gap-10'>

                        <div className='shadow-primary rounded-3xl p-6 flex flex-col items-center justify-center'>

                            <div>
                                <Image src={support} alt='support' className='w-[92px]' />
                            </div>

                            <div className='my-5'>
                                <h1 className={`${ceraBold.className} text-[22px]`}>Quick & Simple Process</h1>
                            </div>

                            <div>
                                <p className='text-[14px] text-[#505050] text-center'>Other lenders boast speedy approvals but require merchants to complete extensive and intrusive forms. Our easy application process is built around an in-house communication center that gives our Funding Advisors and underwriters instant access to the information they need to quickly and easily provide working capital, with approval in as little as 2-5 business hours and funding in as little as 1 business day.</p>
                            </div>

                        </div>
                        <div className='shadow-primary rounded-3xl p-6 flex flex-col items-center justify-center'>

                            <div>
                                <Image src={medal} alt='medal' className='w-[92px]' />
                            </div>

                            <div className='my-5'>
                                <h1 className={`${ceraBold.className} text-[22px]`}>Responsible Funding</h1>
                            </div>

                            <div>
                                <p className='text-[14px] text-[#505050] text-center'>Our sustainable lending practices are designed to help small businesses get ahead. Traditional lenders reject most applications for small business loans, but at Solar Capital Group, approvals are based on your business’s potential—not your credit rating—so we’re able to fuel the growth of more small and mid-sized businesses. We won’t over-leverage your business, and unlike some lenders, we don’t restrict how you use your funds.</p>
                            </div>

                        </div>

                        <div className='shadow-primary rounded-3xl p-6 flex flex-col items-center justify-center'>

                            <div>
                                <Image src={family} alt='family' className='w-[92px]' />
                            </div>

                            <div className='my-5'>
                                <h1 className={`${ceraBold.className} text-[22px]`}>People First, Always</h1>
                            </div>

                            <div>
                                <p className='text-[14px] text-[#505050] text-center'>We know there’s no “one size fits all” small business lending solution. After you fill out our quick online application, you’ll speak to a real person who will take the time to get to know your business and help you understand your funding and repayment options. If you have any questions throughout the process, your Funding Specialists is there to help—we respond to all voicemails and emails within an hour.</p>
                            </div>

                        </div>


                    </div>
                </div>


                <GetStarted />
            </div>
        </section>
    );
};

export default CompanyPage;