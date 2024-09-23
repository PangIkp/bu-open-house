// 1640706956 Ruethaimata Kwangate
'use client';
import React, { forwardRef } from 'react';

export const Input = forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(({ ...props }, ref) => {
    return (
        <input
            className='w-full p-3 border rounded-lg text-black bg-gray-200 focus:outline-none focus:border-[#666699]'
            ref={ref}
            {...props}
        />
    );
});

Input.displayName = 'Input';
