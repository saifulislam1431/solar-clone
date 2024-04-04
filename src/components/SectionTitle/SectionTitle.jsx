import { ceraBold } from '@/app/fonts';
import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div>
            <h1 className={`${ceraBold.className} text-[30px] lg:text-[48px] text-center`}>{title}</h1>
        </div>
    );
};

export default SectionTitle;