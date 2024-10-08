// 1640706956 Ruethaimata Kwangate
'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
    const handleSubmit = (formData: FormData) => {
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        alert(
            `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
        );
    };
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-grow'>
                <div className='container mx-auto px-4 py-8 pt-40 text-white'>
                    <div className='grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-black/75 rounded-lg'>
                        <div>
                            <h1 className='text-3xl font-extrabold'>
                                Let's Talk
                            </h1>
                            <p className='text-lg text-gray-400 mt-4'>
                                Have some question and need help? Then reach out
                                we'd love to hear about your curiosity.
                            </p>

                            <div className='mt-12'>
                                <h2 className='font-bold'>Email</h2>
                                <ul className='mt-4'>
                                    <a
                                        href='mailto:'
                                        className='flex items-center text-[#6c6cb8] '
                                    >
                                        <li className='flex items-center gap-4'>
                                            <div className='bg-[#BEBEBE] h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='20px'
                                                    height='20px'
                                                    viewBox='0 0 479.058 479.058'
                                                >
                                                    <path d='M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z' />
                                                </svg>
                                            </div>

                                            <strong>info@example.com</strong>
                                        </li>
                                    </a>
                                </ul>
                            </div>

                            <div className='mt-12'>
                                <h2 className='font-bold'>Socials</h2>

                                <ul className='flex mt-4 space-x-4'>
                                    <li className='bg-[#BEBEBE] h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                                        <a
                                            href='https://www.facebook.com/bangkokuniversity'
                                            target='_blank'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='20'
                                                height='20'
                                                viewBox='0 0 24 24'
                                            >
                                                <path
                                                    d='M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z'
                                                    data-original='#000000'
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className='bg-[#BEBEBE] h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                                        <a
                                            href='https://www.bu.ac.th/th'
                                            target='_blank'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='20'
                                                height='20'
                                                viewBox='0 0 16 16'
                                            >
                                                <path d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z' />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className='bg-[#BEBEBE] h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                                        <a
                                            href='https://www.instagram.com/bangkok_bu/'
                                            target='_blank'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='20'
                                                height='20'
                                                viewBox='0 0 24 24'
                                            >
                                                <path d='M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z'></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <form className='ml-auto space-y-4'>
                            <Input
                                type='text'
                                placeholder='John Doe'
                                name='name'
                                required
                            />
                            <Input
                                type='email'
                                placeholder='mail@example.com'
                                name='email'
                                required
                            />
                            <Input
                                type='text'
                                placeholder='Tell us the subject'
                                name='subject'
                                required
                                // className='w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent'
                            />
                            <Textarea
                                placeholder='Leave your message here'
                                rows={5}
                                name='message'
                                required // className='w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent'
                            ></Textarea>
                            <Button formAction={handleSubmit}>Send</Button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
