'use client'
import React, { createContext, useEffect, useState } from 'react';


const WrapperContext = createContext(null)
const Provider = ({ children }) => {
    const [isScrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY >= 250;
            setScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const value = {
        setScrolled,
        isScrolled
    }

    return (
        <WrapperContext.Provider value={value}>
            {children}
        </WrapperContext.Provider>
    );
};

export { Provider, WrapperContext };