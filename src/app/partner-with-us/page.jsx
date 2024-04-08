import "./style.css"
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';
import satisfactionImg from "../../../public/icons/satisfaction-guaranteed.png"
import Image from "next/image";
import { ceraBold, ceraMedium } from '../fonts';

const PartnerWith = () => {

    const percentages = Array.from({ length: 100 }, (_, index) => ({ number: 100 - index, id: 100 - index }));


    return (
        <section className='relative'>

            <div className='bg-[#F6F9FE] py-14 h-[300px] flex items-end justify-center relative -top-[82px] -z-10'>
                <SectionTitle title="Partner With Us" />
            </div>

            <div className='mb-28 max-w-6xl mx-auto px-5 flex flex-col lg:flex-row items-center justify-start gap-5'>

                <div className='max-w-3xl'>
                    <ul className='list-disc text-[#505050] text-[14px]'>
                        <li>Up to 1 Million in Funding – 2nd-6th Position.</li>
                        <li>Top Commissions – Solar Capital Group pays among the highest ISO commissions in the industry, up to 15%</li>
                        <li>Flexible Repayment Schedules – Daily and Weekly Payment Options – 10-12 Month Terms.</li>
                        <li>Dedicated Broker Support – Our ISO Managers are always available for any questions or revisions needed on a deal.</li>
                        <li>No Sales Team! – The relief of not having to worry about your hard earned deals being taken away from you is priceless.</li>
                    </ul>
                </div>

                <div>
                    <Image src={satisfactionImg} alt='satisfaction' />
                </div>

            </div>

            <div className='max-w-6xl mx-auto shadow-primary rounded-3xl p-10'>
                {/* Company Information */}
                <div>
                    <h1 className={`text-[40px] ${ceraBold.className} text-[#0696ba]`}>Company Information</h1>
                    <div className='border-t'></div>
                    <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Legal/Corporate Name</label>
                            <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>DBA (if any)</label>
                            <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                        </div>
                    </div>

                    <div className='w-full'>
                        <div>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Business Address *</label>
                            <p>Physical Address</p>
                            <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' placeholder='Enter Location' />
                        </div>

                        <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>City</label>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>
                                    State</label>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>
                        </div>

                        <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Zip Code</label>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>
                            <div className='w-full'>
                            </div>
                        </div>

                        <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Business Email*</label>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Business Phone*</label>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Business Website</label>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' placeholder='https://' />
                            </div>

                        </div>
                    </div>
                </div>

                {/* Owners info */}
                <h1 className={`text-[40px] ${ceraBold.className} text-[#0696ba]`}>Owners Information</h1>
                <div className='border-t my-2'></div>
                <h1 className={`text-[40px] ${ceraBold.className} text-[#0696ba]`}>Total Ownership Must Equal To 100%</h1>
                <div className='border-t'></div>
                <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                    <div className='w-full'>
                        <label htmlFor="name" className='text-[16px] font-semibold'>First Name *</label>
                        <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="name" className='text-[16px] font-semibold'>
                            Last Name *</label>
                        <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                    </div>
                </div>

                <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                    <div className='w-full'>
                        <label htmlFor="name" className='text-[16px] font-semibold'>Mobile Phone *</label>
                        <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="name" className='text-[16px] font-semibold'>
                            Email *</label>
                        <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                    </div>
                </div>

                <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                    <div className='w-full'>
                        <label htmlFor="name" className='text-[16px] font-semibold'>Role Type *</label>
                        <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                            <option value="owner">Owner</option>
                            <option value="director">Director</option>
                            <option value="manager">Manager</option>
                            <option value="representative">Representative</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="name" className='text-[16px] font-semibold'>Owner Percentage</label>
                        <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                            {
                                percentages?.map(percentage => <option key={percentage?.id} value={percentage?.number}>{percentage?.number}</option>)
                            }

                        </select>
                    </div>
                </div>


                {/* Qualification Questions */}
                <h1 className={`text-[40px] ${ceraBold.className} text-[#0696ba]`}>Qualification Questions</h1>
                <div className='border-t my-2'></div>

                <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                    <div className='w-full'>
                        <label htmlFor="name" className='text-[16px] font-semibold'>How does your company market to small business owners? *</label>
                        <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                            <option value="Debanked">Debanked</option>
                            <option value="Daily Funder">Daily Funder</option>
                            <option value="Seen in Bank Statement">Seen in Bank Statement</option>
                            <option value="Another Brokerage">Another Brokerage</option>
                            <option value="Google">Google</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="name" className='text-[16px] font-semibold'>Do you fund your own deals? *</label>
                        <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>

                        </select>
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
                        <label htmlFor="name" className='text-[16px] font-semibold'>Number of monthly funded deals we should expect each month? *</label>
                        <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                            <option value="0-5">0-5</option>
                            <option value="6-15">6-15</option>
                            <option value="15+">15+</option>

                        </select>
                    </div>

                    <div className='w-full'>
                        <label htmlFor="name" className='text-[16px] font-semibold'>Do you charge a broker/application fee? *</label>
                        <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>

                <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                    <div className='w-full'>
                        <label htmlFor="name" className='text-[16px] font-semibold'>Do you have a contact that you want copied on all correspondence? If so, please provide a name, email address and telephone: *</label>
                        <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="name" className='text-[16px] font-semibold'>Please enter the email you would like to use for confirmation of funding and commission information.*</label>
                        <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                    </div>
                </div>


                {/* Legend */}
                <p className='mt-1 mb-3 font-medium'>Consent</p>

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
                    <label htmlFor="">I agree to the terms and conditions of this application, and affirm everything is true.</label>
                </div>


                <div className="my-8">
                    <button className={`${ceraMedium.className} myBtn px-4 py-2`}>Become a Partner</button>
                </div>
            </div>
        </section>
    );
};

export default PartnerWith;