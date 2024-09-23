'use client';
import Image from 'next/image';
import banner_2 from '@/Images/banner_2.jpg';
import banner_3 from '@/Images/banner_3.jpg';
import left from '@/Images/left.svg';
import right from '@/Images/right.svg';

import React, { useState, useEffect, useRef } from 'react';
// import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

// Define the type for the slide interval
let slideInterval: NodeJS.Timeout;
let count = 0;

const featuredProducts: string[] = [banner_2.src, banner_3.src];

export default function Carousel() {
    // UseState with number type
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Define ref with HTMLDivElement or null
    const slideRef = useRef<HTMLDivElement>(null);

    const removeAnimation = () => {
        // Add a null check to avoid potential runtime errors
        if (slideRef.current) {
            slideRef.current.classList.remove('fade-anim');
        }
    };

    useEffect(() => {
        // Add event listeners
        if (slideRef.current) {
            slideRef.current.addEventListener('animationend', removeAnimation);
            slideRef.current.addEventListener('mouseenter', pauseSlider);
            slideRef.current.addEventListener('mouseleave', startSlider);
        }

        startSlider();
        return () => {
            pauseSlider();
        };
        // eslint-disable-next-line
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 3000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count);
        if (slideRef.current) {
            slideRef.current.classList.add('fade-anim');
        }
    };

    const handleOnPrevClick = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        if (slideRef.current) {
            slideRef.current.classList.add('fade-anim');
        }
    };

    return (
        <div ref={slideRef} className='w-full select-none relative -z-50'>
            <div className='aspect-w-16 aspect-h-9'>
                <img
                    src={featuredProducts[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                />
            </div>

            <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
                <button
                    className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'
                    onClick={handleOnPrevClick}
                >
                    {/* left */}
                    {/* <AiOutlineVerticalRight size={30} /> */}
                </button>
                <button
                    className='bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition'
                    onClick={handleOnNextClick}
                >
                    {/* right */}
                    {/* <AiOutlineVerticalLeft size={30} /> */}
                </button>
            </div>
        </div>
    );
}
