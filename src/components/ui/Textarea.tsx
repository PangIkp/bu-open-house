'use client';
import React, { forwardRef } from 'react';

export const Textarea = forwardRef<
    HTMLTextAreaElement,
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ ...props }, ref) => {
    return (
        <textarea
            className='resize-none w-full p-3 border rounded-lg text-black bg-gray-200 focus:outline-none focus:border-[#666699]'
            ref={ref}
            {...props}
        />
    );
});

Textarea.displayName = 'Textarea';
