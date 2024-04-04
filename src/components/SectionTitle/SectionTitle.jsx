import { ceraBold } from '@/app/fonts';
import React from 'react';

const SectionTitle = ({ title, textStyle, lgFontSize }) => {
    return (
        <div>
            <h1 className={`${ceraBold.className} text-[30px] lg:text-[48px] ${textStyle ? textStyle : "text-center"}`}>{title}</h1>
        </div>
    );
};

export default SectionTitle;