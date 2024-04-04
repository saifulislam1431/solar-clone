import Image from 'next/image';
import React from 'react';
import googleLogo from "../../../../public/partner/Google-Logo.svg";
import airbnb from "../../../../public/partner/airbnb-Logo.svg";
import creative from "../../../../public/partner/CreatureLogo.svg";
import shopify from "../../../../public/partner/Shopify-Logo.svg";
import Amazon from "../../../../public/partner/Amazon-Logo.svg";

const PartnerContainer = () => {
    return (
        <section className='relative bg-primary px-10 py-10  -top-[100px] lg:-top-[140px] max-w-6xl mx-auto'>

            <div className='flex items-center justify-evenly gap-5'>
                <div>
                    <Image src={googleLogo} alt='Google' />
                </div>
                <div>
                    <Image src={airbnb} alt='airbnb' />
                </div>
                <div>
                    <Image src={creative} alt='creative' />
                </div>
                <div>
                    <Image src={shopify} alt='shopify' />
                </div>
                <div>
                    <Image src={Amazon} alt='Amazon' />
                </div>
            </div>

        </section>
    );
};

export default PartnerContainer;