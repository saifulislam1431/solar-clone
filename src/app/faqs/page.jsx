'use client'
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React, { useEffect, useState } from 'react';
import { ceraBold } from '../fonts';

const FAQsPage = () => {
    const [faqData, setData] = useState([]);

    useEffect(() => {
        fetch("/jsons/fqas.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <section className='relative'>

            <div className='bg-[#F6F9FE] py-14 h-[400px] flex flex-col items-center justify-center relative -top-[82px] -z-10'>
                <div className='max-w-3xl mx-auto'>
                    <SectionTitle title="FAQ’s" />
                    <p className='text-[#505050] text-center mt-4'>Get answers to the most frequently asked questions about our small business funding options and ISO program below. If you still have questions, contact us for more information. We’re dedicated to providing exceptional customer service, and will respond to all voicemails and emails within an hour (during regular business hours).</p>
                </div>
            </div>

            <div className='max-w-6xl mx-auto shadow-primary rounded-3xl p-12'>

                {
                    faqData?.map((faq, indx) => <div className="collapse collapse-arrow border-b rounded-none py-2" key={indx}>
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className={`collapse-title ${ceraBold?.className} text-[22px]`}>
                            {faq?.title}
                        </div>
                        <div className="collapse-content text-[14px] text-[#505050]">
                            <p className='pl-4'>{faq?.content}</p>
                            {
                                faq?.contentSec && <p className='pl-4 mt-3'>{faq?.contentSec}</p>
                            }
                            {
                                faq?.listItems && <ul className='list-disc pl-12 mt-3'>
                                    {
                                        faq?.listItems?.map((item, indx) => <li key={indx}>{item}</li>)
                                    }
                                </ul>
                            }
                        </div>
                    </div>)
                }

            </div>
        </section>
    );
};

export default FAQsPage;