'use client'
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { ceraBold, ceraMedium } from '../fonts';
import { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Link from "next/link";
import "../partner-with-us/style.css";
import SignatureCanvas from 'react-signature-canvas';
import { PiRepeatBold } from "react-icons/pi";

const ApplicationPage = () => {
    const signatureRef = useRef();
    const [rent, setRent] = useState(false)
    const [credit, setCredit] = useState(false)
    const [value, onChange] = useState(null);
    const [stateData, setData] = useState([]);
    const [industryData, setIndustry] = useState([]);
    const percentages = Array.from({ length: 100 }, (_, index) => ({ number: 100 - index, id: 100 - index }));

    useEffect(() => {
        fetch("/jsons/state.json")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    useEffect(() => {
        fetch("/jsons/industries.json")
            .then((res) => res.json())
            .then((data) => setIndustry(data))
    }, [])

    const clearSignature = () => {
        signatureRef.current.clear();
    };

    // console.log(industryData);

    return (
        <section className='relative'>

            <div className='bg-[#F6F9FE] py-14 h-[300px] flex flex-col items-center justify-center relative -top-[82px] -z-10'>
                <SectionTitle title="Funding Application" />
            </div>

            <div className='mb-20 text-center'>
                <p className='text-[14px] text-[#505050]'>Fill out the application below | Upload your last 3 months business bank statements | Sign and submit the form</p>
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
                                <label htmlFor="name" className='text-[16px] font-semibold'>City *</label>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>
                                    State *</label>
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
                        <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Federal Tax ID *</label>
                                <input type="number" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Date Business Started *</label>
                                <DatePicker minDate={new Date()} onChange={onChange} value={value} className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />

                            </div>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Length of Ownership *</label>
                                <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                                    <option value="Under 1 Year">Under 1 Year</option>
                                    <option value="1-2 Year">1-2 Year</option>
                                    <option value="3-5 Year">3-5 Year</option>
                                    <option value="5+ Year">5+ Year</option>

                                </select>
                            </div>

                        </div>

                        <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Type of Entity *</label>
                                <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                                    <option value="Limited Liability Corporation (LLC)">Limited Liability Corporation (LLC)</option>
                                    <option value="Sole Proprietorship">Sole Proprietorship</option>
                                    <option value="C-Corporation">C-Corporation</option>
                                    <option value="S-Corporation">S-Corporation</option>
                                    <option value="General Partnership">General Partnership</option>
                                    <option value="Limited Liability Partnership">Limited Liability Partnership</option>
                                    <option value="Independent Contractor (1099)">Independent Contractor (1099)</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>State of Organization *</label>
                                <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                                    {
                                        stateData?.map(state => <option key={state?.name} value={state?.name}>{state?.name}</option>)
                                    }
                                </select>
                            </div>

                        </div>

                        <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Industry *</label>
                                <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                                    {
                                        industryData?.map(industry => industry?.industries?.map(ind => <option key={ind} value={ind}>{ind}</option>))
                                    }
                                </select>
                            </div>

                            <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Detailed Business Activity *</label>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>

                        </div>
                    </div>
                </div>

                {/* Owner Info */}

                <div>
                    <h1 className={`text-[40px] ${ceraBold.className} text-[#0696ba]`}>Primary Owner Information</h1>
                    <div className='border-t'></div>

                    <div className='w-full mt-3'>
                        <label htmlFor="name" className='text-[16px] font-semibold'>Corporate Officer/Owner Name *</label>

                        <div className='flex flex-col lg:flex-row items-center gap-6 mt-2'>
                            <div className='w-full'>
                                <p>First *</p>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>

                            <div className='w-full'>
                                <p>Last *</p>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Title *</label>
                            <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>
                                Ownership Percentage *</label>
                            <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                                {
                                    percentages?.map(percentage => <option key={percentage?.id} value={percentage?.number}>{percentage?.number}</option>)
                                }

                            </select>
                        </div>
                    </div>

                    <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Email</label>
                            <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Home Phone</label>
                            <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Cell Phone</label>
                            <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                        </div>
                    </div>

                    <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Consent *</label>

                            <p className='w-full p-2 border bg-transparent rounded outline-none mt-2 text-[14px] text-[#505050]'>By clicking the “Get Funded” button immediately following this notice, you are providing “written instructions” to Solar Capital Group LLC and/or its corporate affiliates under the Fair Credit Reporting Act authorizing Solar Capital Group LLC to obtain information from your personal credit profile or other information from a consumer reporting agency. You authorize Solar Capital Group LLC to obtain such information solely to conduct a pre-qualification for credit. You also understand that by clicking on the “Get Funded” button, you authorize Solar Capital Group LLC and prospective third-party funding providers to contact you at the numbers you provide (including mobile) during any step of this application, via phone (including automated telephone dialing systems, prerecorded, SMS and MMS means) even if you are on a Do Not Call Registry. You are not required to agree to be contacted in this manner to use Solar Capital Group LLC services. More information can be found in our  <Link href="/" className="text-primary">Privacy Policy & Terms and Conditions.</Link></p>
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
                        <label htmlFor="" className='text-[14px] text-[#505050] ml-2'>I agree to the terms and conditions of this application, and affirm everything is true.</label>
                    </div>

                    <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>SSN *</label>
                            <input type="number" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>
                                Date of Birth *</label>
                            <DatePicker minDate={new Date()} onChange={onChange} value={value} className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Credit Score?</label>
                            <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                        </div>
                    </div>

                    <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Home Address *</label>
                            <input type="number" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' placeholder='Enter Location' />
                            <p className='text-[15px]'>Street Address</p>
                        </div>
                    </div>

                    <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>City</label>
                            <input type="number" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                        </div>

                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>State</label>
                            <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                                {
                                    stateData?.map(state => <option key={state?.name} value={state?.name}>{state?.name}</option>)
                                }
                            </select>
                        </div>
                    </div>


                    <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Zip Code</label>
                            <input type="number" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                        </div>

                        <div className='w-full'>

                        </div>
                    </div>
                </div>

                {/* Property Information */}
                <div>
                    <h1 className={`text-[40px] ${ceraBold.className} text-[#0696ba]`}>Property Information</h1>
                    <div className='border-t'></div>

                    <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Any Open Judgements?</label>
                            <div className='mt-3'>
                                <div class="custom-radio">
                                    <input type="radio" id="radio1" name="radio" onChange={() => setRent(true)} />
                                    <label for="radio1">Rent</label>
                                </div>

                                <div class="custom-radio">
                                    <input type="radio" id="radio2" name="radio" onChange={() => setRent(false)} />
                                    <label for="radio2">Own</label>
                                </div>
                            </div>
                        </div>

                        {
                            rent && <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>How much is rent?</label>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>
                        }

                    </div>
                </div>


                {/* Business Core Information */}

                <div>
                    <h1 className={`text-[40px] ${ceraBold.className} text-[#0696ba]`}>Business Core Information</h1>
                    <div className='border-t'></div>

                    <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Any Open Judgements?</label>
                            <div className='mt-3'>
                                <div class="custom-radio">
                                    <input type="radio" id="judgements1" name="radio" />
                                    <label for="judgements1">Yes</label>
                                </div>

                                <div class="custom-radio">
                                    <input type="radio" id="judgements2" name="radio" />
                                    <label for="judgements2">No</label>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Any Bankruptcies?</label>
                            <div className='mt-3'>
                                <div class="custom-radio">
                                    <input type="radio" id="Bankruptcies1" name="radio" />
                                    <label for="Bankruptcies1">Yes</label>
                                </div>

                                <div class="custom-radio">
                                    <input type="radio" id="Bankruptcies2" name="radio" />
                                    <label for="Bankruptcies2">No</label>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Any Tax Liens?</label>
                            <div className='mt-3'>
                                <div class="custom-radio">
                                    <input type="radio" id="Liens1" name="radio" />
                                    <label for="Liens1">Yes</label>
                                </div>

                                <div class="custom-radio">
                                    <input type="radio" id="Liens2" name="radio" />
                                    <label for="Liens2">No</label>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Is Business Seasonal?</label>
                            <div className='mt-3'>
                                <div class="custom-radio">
                                    <input type="radio" id="Seasonal1" name="radio" />
                                    <label for="Seasonal1">Yes</label>
                                </div>

                                <div class="custom-radio">
                                    <input type="radio" id="Seasonal2" name="radio" />
                                    <label for="Seasonal2">No</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Financials */}
                <div>
                    <h1 className={`text-[40px] ${ceraBold.className} text-[#0696ba]`}>Financials</h1>
                    <div className='border-t'></div>

                    <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Do you accept Credit Cards?</label>
                            <div className='mt-3'>
                                <div class="custom-radio">
                                    <input type="radio" id="Credit_Cards1" name="radio" onChange={() => setCredit(true)} />
                                    <label for="Credit_Cards1">Yes</label>
                                </div>

                                <div class="custom-radio">
                                    <input type="radio" id="Credit_Cards2" name="radio" onChange={() => setCredit(false)} />
                                    <label for="Credit_Cards2">No</label>
                                </div>
                            </div>
                        </div>

                        {
                            credit && <div className='w-full'>
                                <label htmlFor="name" className='text-[16px] font-semibold'>Number of Terminals</label>
                                <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                            </div>
                        }

                    </div>

                    <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-8'>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Avg Monthly Gross Sales Volume?</label>
                            <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                        </div>

                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Requested Funding Amount</label>
                            <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                        </div>

                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>
                                What will funds be used for?</label>
                            <input type="text" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2' />
                        </div>
                    </div>

                    <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>Are you currently paying off any loans or advance(s)?</label>
                            <div className='mt-3'>
                                <div class="custom-radio">
                                    <input type="radio" id="advance1" name="radio" />
                                    <label for="advance1">Yes</label>
                                </div>

                                <div class="custom-radio">
                                    <input type="radio" id="advance2" name="radio" />
                                    <label for="advance2">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-t'></div>
                    <div className='w-full flex flex-col lg:flex-row items-center gap-6 my-4'>
                        <div className='w-full'>
                            <label htmlFor="name" className='text-[16px] font-semibold'>How did you hear about us?</label>
                            <select name="" id="" className='w-full p-2 border-2 bg-transparent rounded outline-none mt-2'>
                                <option value="Google">Google</option>
                                <option value="Email">Email</option>
                                <option value="Referral">Referral</option>
                                <option value="Linkedin">Linkedin</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Signature & Consent */}
                <div>
                    <h1 className={`text-[40px] ${ceraBold.className} text-[#0696ba]`}>
                        Signature & Consent</h1>
                    <div className='border-t'></div>

                    <div className='my-4'>
                        <label htmlFor="name" className='text-[16px] font-semibold'>Primary Owner Signature *</label>
                        <div className='rounded mt-3 flex items-end gap-2'>
                            <div className='border-2 border-dashed w-[350px] h-[200px]'>
                                <SignatureCanvas ref={signatureRef} penColor='black'
                                    canvasProps={{ width: 300, height: 200, className: 'sigCanvas' }} />
                            </div>


                            <button onClick={clearSignature}><PiRepeatBold className='h-6 w-6' /></button>
                        </div>

                    </div>

                    <div className='space-y-4'>
                        <label htmlFor="name" className='text-[16px] font-semibold'>Please upload recent bank statements.</label>

                        <label for="images" class="drop-container" id="dropcontainer">
                            <span class="drop-title">Drop files here or</span>

                            <input type="file" id="upload" hidden />
                            <label for="upload" className='uploadLabel'>Choose file</label>
                        </label>
                    </div>
                    <div className='mt-2'>
                        <span className='text-[15px]'>Accepted file types: jpg, png, pdf, Max. file size: 10 MB.</span>
                    </div>

                    <div className='mt-8 mb-20'>
                        <button className={`myBtn ${ceraMedium?.className} px-8 py-2`}>Get Funded</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplicationPage;