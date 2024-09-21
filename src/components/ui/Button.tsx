'use client';
import React, { forwardRef } from 'react';

export const Button = forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => {
    return (
        <button
            ref={ref}
            {...props}
            className='w-full p-3 bg-gradient-to-r from-[#666699] to-white hover:from-[#BEBEBE] hover:to-[#666699] rounded-full items-center justify-center'
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
