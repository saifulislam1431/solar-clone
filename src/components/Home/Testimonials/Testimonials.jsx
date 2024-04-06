'use client'
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./testimonial.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { ceraMedium } from '@/app/fonts';

const Testimonials = () => {
    const [testimonialData, setData] = useState([]);

    useEffect(() => {
        fetch("/jsons/testimonial.json")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    const StarDrawing = (
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
    );
    const customStyles = {
        itemShapes: StarDrawing,
        activeFillColor: '#FBB632',
        inactiveFillColor: '#C8D1D7',
    };

    return (
        <section className='my-24 bg-[#FBFBFB] py-16'>

            <div className='text-center'>
                <p className='text-[20px] text-primary font-medium'>Testimonials</p>

                <SectionTitle title="What Our Customers Say" />
            </div>

            <div className='mt-8'>
                <div className="hidden lg:flex">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        loop={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={false}
                        autoplay={false}
                        pagination={false}
                        navigation={true}
                        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            testimonialData?.map((review) => <SwiperSlide key={review?.id} className='bg-[#ffffff] rounded-xl shadow-primary relative'>
                                <div className='w-full h-full p-5 relative'>
                                    <div className='w-full flex items-start justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <div>
                                                <Image src={review?.img} alt='Author image' width={66} height={66} />
                                            </div>
                                            <div>
                                                <h1 className={`${ceraMedium.className} text-[22px]`}>{review?.name}</h1>
                                                <p className='text-base text-[#727272]'>{review?.posted}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <Image src={review?.gIcon} alt='G Icon' width={34} height={34} />
                                        </div>
                                    </div>

                                    <div className='my-4'>
                                        <p className='text-[14px] text-[#505050]'>{review?.comment}</p>
                                    </div>

                                    <div className='inline-flex items-center gap-5'>
                                        <div>
                                            <Rating style={{ maxWidth: 100 }} value={review?.rating} readOnly itemStyles={customStyles} />
                                        </div>
                                        <p className='text-[14px]'>{review?.review}</p>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>

        </section>
    );
};

export default Testimonials;