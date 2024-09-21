'use client';
import React, { useRef, useEffect } from 'react';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, content }) => {
    const dialogRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dialogRef.current &&
            !dialogRef.current.contains(event.target as Node)
        ) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('mousedown', handleClickOutside);
        } else {
            window.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center '>
            <div
                ref={dialogRef}
                className='grid bg-white p-10 rounded-3xl shadow-lg relative w-[40rem] h-[20rem] gap-1'
            >
                <img
                    width='25'
                    height='25'
                    src='https://img.icons8.com/sf-black-filled/64/x.png'
                    alt='Close'
                    className='absolute top-4 right-4 cursor-pointer'
                    onClick={onClose}
                />
                <h2 className='text-3xl'>{title}</h2>
                <p className='text-lg'>{content}</p>
            </div>
        </div>
    );
};

export default Dialog;
