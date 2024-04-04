'use client'
import { ceraMedium, ceraRegular } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const Funding = () => {
    const [fundData, setData] = useState([]);


    useEffect(() => {
        fetch("/jsons/funding.json")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    return (
        <section className='flex flex-col lg:flex-row items-start justify-center gap-7'>
            {
                fundData?.map((fund, indx) => <div key={indx} className="card w-96 bg-base-100 shadow-primary">
                    <figure className="px-5 pt-5">
                        <Image src={fund?.img} alt={fund?.title} width={310} height={155} />
                    </figure>
                    <div className="card-body">
                        <h2 className={`${ceraMedium.className} text-[22px] font-medium`}>{fund?.title}</h2>
                        <p className='text-[#505050] text-[14px]'>{fund?.content}</p>
                        <div className="card-actions">
                            <Link href={fund?.url} className={`${ceraRegular.className} inline-flex items-center gap-1 text-primary text-[20px] mt-5 font-semibold hover:gap-2 transition-all duration-700`}>Learn More <FaArrowRight /></Link>
                        </div>
                    </div>
                </div>)
            }
        </section>
    );
};

export default Funding;