import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';
import Funding from './Fundings';

const AlternativeFunding = () => {
    return (
        <section className='max-w-6xl mx-auto my-10 px-4'>

            <div>
                <SectionTitle title="Alternative Business Funding" />
                <p className='max-w-5xl mx-auto text-center text-lg text-[#505050] font-medium mt-2'>Solar Capital Group is a direct lending firm that offers uncommonly flexible options for working capital to small and mid-sized businesses in need of financing to improve or grow their well earned place on the street.</p>
            </div>

            <div className='my-20'>
                <Funding />
            </div>

        </section>
    );
};

export default AlternativeFunding;