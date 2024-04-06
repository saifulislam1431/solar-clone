import { ceraMedium } from '@/app/fonts';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';
import Link from "next/link"

const GetStarted = () => {
    return (
        <section className='my-20 max-w-5xl mx-auto banner-container py-14 rounded-3xl'>
            <div className='text-center'>
                <p className='text-[20px] text-primary font-medium'>Let’s get started</p>

                <SectionTitle title="Apply For Small Business Funding" />
            </div>

            <div className='mb-7 mt-5 max-w-4xl mx-auto text-center'>
                <p className={`${ceraMedium.className} text-[18px] text-[#505050]`}>After you fill out our quick online application, you’ll speak to a real person who will take the time to get to know your business and help you understand your small business funding and repayment options.</p>
            </div>

            <div className='text-center mt-10'>
                <Link href="/application" className={`${ceraMedium.className} myBtn px-6 py-4 text-lg`}>
                    Apply Now
                </Link>
            </div>
        </section>
    );
};

export default GetStarted;