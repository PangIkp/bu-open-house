'use client';
import React, { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'ghost' | 'plain'; // Define your variants here
    color?: string; // New prop for custom color
    size?: 'sm' | 'md' | 'lg'; // Add size prop
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant = 'primary', color, size = 'md', ...props }, ref) => {
        // Define base styles for all button variants
        const baseStyles =
            'p-2 inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';

        let variantStyles = '';

        switch (variant) {
            case 'primary':
                variantStyles = `${baseStyles} bg-gradient-to-r from-[#666699] to-white hover:from-[#BEBEBE] hover:to-[#666699]`;
                break;
            case 'ghost':
                variantStyles = `${baseStyles} focus-visible:ring-none`;
                break;
            case 'plain':
                variantStyles = `${color} text-white h-20 w-full transition duration-300 ease-in-out hover:scale-110 hover:rotate-2`; // Use the custom color
                break;
        }

        // Add size classes using Tailwind CSS
        let sizeClasses = '';
        switch (size) {
            case 'sm':
                sizeClasses = 'py-1 px-2 text-xs';
                break;
            case 'lg':
                sizeClasses = 'py-3 px-4 text-lg';
                break;
            default: // md
                sizeClasses = 'py-2 px-3 text-sm';
                break;
        }

        return (
            <button
                ref={ref}
                {...props}
                className={`${baseStyles} ${variantStyles} ${sizeClasses}`}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
