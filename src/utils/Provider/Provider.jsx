'use client'
import React, { createContext } from 'react';


const WrapperContext = createContext(null)
const Provider = ({ children }) => {
    return (
        <WrapperContext.Provider>
            {children}
        </WrapperContext.Provider>
    );
};

export { Provider, WrapperContext };