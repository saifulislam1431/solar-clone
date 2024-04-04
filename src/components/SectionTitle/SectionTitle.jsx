import { ceraBold } from '@/app/fonts';
import React from 'react';

const SectionTitle = ({ title, textStyle, textColor }) => {
    return (
        <div>
            <h1 className={`${ceraBold.className} text-[30px] lg:text-[48px] ${textStyle ? textStyle : "text-center"} ${textColor ? textColor : ""}`}>{title}</h1>
        </div>
    );
};

export default SectionTitle;