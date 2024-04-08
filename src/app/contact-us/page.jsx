import "../partner-with-us/style.css"
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';
import { ceraBold, ceraMedium } from '../fonts';
import { FaClock, FaEnvelope, FaLocationPin, FaLocationPinLock } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link"

const ContactPage = () => {
    return (
        <section className='relative'>

            <div className='bg-[#F6F9FE] py-14 h-[400px] flex flex-col items-center justify-center relative -top-[82px] -z-10'>
                <SectionTitle title="Contact Us" />
                <p className='max-w-3xl text-center text-[#505050] text-[15px] mt-2'>We believe in empowering small business owners across the U.S. by building partnerships that are based on trust, integrity, and communication. If you have questions about small business funding or our funding options, fill out the contact form below and one of our knowledgeable Funding Specialists will reach out to you shortly.</p>
            </div>


            <div className='max-w-6xl mx-auto'>
                <div className="divider">Contact us</div>
            </div>

            <div className='max-w-6xl mx-auto shadow-primary rounded-3xl p-10 flex flex-col lg:flex-row items-start justify-center gap-10'>

                <div className="w-full">
                    <h1 className={`text-[40px] ${ceraBold.className}`}>Get in Touch</h1>

                    <div className='mt-5'>
                        <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Company Name *</label>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>
                        </div>

                        <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>First Name *</label>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>

                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Last Name *</label>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>
                        </div>


                        <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Email</label>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>

                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Phone</label>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>
                        </div>

                        <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>How did you hear about Solar Capital Group? *</label>
                                <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                                    <option value="Email Marketing">Email Marketing</option>
                                    <option value="Live Transfers">Live Transfers</option>
                                    <option value="Mailers">Mailers</option>
                                    <option value="Outbound Calling via Auto Dialer">Outbound Calling via Auto Dialer</option>
                                    <option value="Outbound Calling via manual dialing">Outbound Calling via manual dialing</option>
                                    <option value="PPC">PPC</option>
                                    <option value="Radio">Radio</option>
                                    <option value="SEO">SEO</option>
                                    <option value="Television">Television</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Requested Funding Amount *</label>
                                <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                                    <option value="">---</option>
                                    <option value="$5,000-$24,000">$5,000-$24,999</option>
                                    <option value="$25,000-$49,999">$25,000-$49,999</option>
                                    <option value="$50,000-$199,999">$50,000-$199,999</option>
                                    <option value="$200,000-$499,999">$200,000-$499,999</option>
                                    <option value="$500,000+">$500,000+</option>
                                </select>
                            </div>
                        </div>

                        <div className='checkbox-wrapper-45 mt-2'>
                            <input id="cbx-45" type="checkbox" />
                            <label class="cbx" for="cbx-45">
                                <div class="flip">
                                    <div class="front"></div>
                                    <div class="back">
                                        <svg width="16" height="14" viewBox="0 0 16 14">
                                            <path d="M2 8.5L6 12.5L14 1.5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </label>
                            <label htmlFor="" className='text-[14px] text-[#505050] ml-2'>By providing your phone number, you agree to receive text messages from Solar Capital Group LLC subject to our <Link href="/" className="text-primary">Privacy Policy & Terms and Conditions</Link>. Message & data rates may apply. Message frequency varies. Reply Stop to opt out.</label>
                        </div>

                        <div className="my-8 w-full flex justify-end">
                            <button className={`${ceraMedium.className} myBtn px-10 py-3`}>Submit</button>
                        </div>

                        <div className='border-t my-2'></div>
                    </div>
                </div>

                <div className="w-full">
                    <div>
                        <h1 className={`text-[40px] ${ceraBold.className}`}>Contact Information</h1>

                        <p className="flex gap-3 mt-4"><span><FaLocationPinLock className="text-primary" /></span> <span className="text-[14px] text-[#505050]"> 117 Wall Street <br />
                            New York NY 10001</span></p>

                        <p className="flex gap-3 mt-4"><span><FaPhoneAlt className="text-primary" /></span> <span className="text-[14px] text-[#505050]">  516-464-6300</span></p>

                        <p className="flex gap-3 mt-4"><span><FaEnvelope className="text-primary" /></span> <span className="text-[14px] text-[#505050]">  info@solarcapitalgroup.com</span></p>
                    </div>


                    <div className="mt-7">
                        <h1 className={`text-[40px] ${ceraBold.className}`}>Hours of Operation</h1>

                        <p className="flex gap-3 mt-4"><span><FaClock className="text-primary" /></span> <span className="text-[14px] text-[#505050]"> Monday – Friday 9:00 am to 8:00 pm ET</span></p>

                    </div>
                </div>

            </div>

            <div className='max-w-6xl mx-auto my-20'>
                <SectionTitle title="Why Get Funded By Solar Capital Group?" />

                <p className="text-center text-[#505050] text-[14px] mt-5 mb-3">Opportunities to expand or take on new projects come and go quickly, but applying for funding from a traditional lender like a bank, can take months with no guarantee of approval. With Solar Capital Group’s faster, streamlined application process, we can approve your company loan in as little as 24 hours.</p>

                <p className="text-center text-[#505050] text-[14px]">Our application requirements are lower than traditional lenders, but we always have your best interest at heart. We are proud to provide responsible business funding—we’ll never over-leverage your business by giving you more capital than you can manage, and our Funding Specialists will be with you every step of the way.</p>
            </div>

        </section>
    );
};

export default ContactPage;