import { ceraMedium } from '@/app/fonts';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';
import Link from "next/link"
import FastBusinessLones from '@/components/FastBusinessLones/FastBusinessLones';
import BusinessLineCredit from '@/components/BusinessLineCredit/BusinessLineCredit';

const fastBusinessLoansPage = ({ params }) => {
    const serviceName = params?.serviceName
    return (
        <section className='relative'>
            <div className='bg-[#F6F9FE] py-14 h-[350px] flex items-end justify-center relative -top-[82px] -z-10'>
                <div className='max-w-[700px] mx-auto'>
                    <SectionTitle title={`${serviceName === "fast-business-loans" ? "Fast Business Loans: Everything You Need to Know" : serviceName === "business-line-credit" ? "Business Line of Credit" : "Business Term Loan"}`} />
                </div>
            </div>

            <div className='hidden lg:flex items-center justify-center gap-x-8 border-b mb-6 -mt-[78px]'>
                <Link href="/service/fast-business-loans" className={`h-full py-5 text-[18px] tabBtn border-b-4 border-transparent ${ceraMedium?.className} ${serviceName === "fast-business-loans" ? "active" : ""}`}>Fast Business Loan</Link>

                <Link href="/service/business-line-credit" className={`h-full py-5 text-[18px] tabBtn border-b-4 border-transparent ${ceraMedium?.className} ${serviceName === "business-line-credit" ? "active" : ""}`}>Business Line of Credit</Link>

                <Link href="/service/business-term-loan" className={`h-full py-5 text-[18px] tabBtn border-b-4 border-transparent ${ceraMedium?.className} ${serviceName === "business-term-loan" ? "active" : ""}`}>Business Term Loan</Link>
            </div>

            {
                serviceName === "fast-business-loans" ? <FastBusinessLones /> : serviceName === "business-line-credit" ? <BusinessLineCredit /> : ""
            }
        </section>
    );
};

export default fastBusinessLoansPage;