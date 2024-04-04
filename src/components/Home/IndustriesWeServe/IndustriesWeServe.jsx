import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';

const IndustriesWeServe = () => {
    return (
        <section className="my-20 bg-primary py-16">
            <div className='max-w-6xl mx-auto'>
                <p className='text-center text-white text-[20px]'>Industries We Serve</p>

                <div className='mt-0 mb-8'>
                    <SectionTitle title="We Fund Businesses In Most Industries" textColor="text-white" />
                </div>

                <div className='flex items-center justify-center flex-row gap-20'>
                    <ul className='flex flex-col lg:flex-row items-center text-[22px] text-white gap-x-20 justify-center list-disc lg:[&>*:nth-child(1)]:list-none'>
                        <li>Restaurants</li>
                        <li>Daycare</li>
                        <li>Dentists</li>
                    </ul>
                    <ul className='flex flex-col lg:flex-row items-center text-[22px] text-white gap-x-20 justify-center list-disc'>
                        <li>Retailes</li>
                        <li>Doctors</li>
                        <li>Logistics</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default IndustriesWeServe;