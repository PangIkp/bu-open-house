'use client';
import Image from 'next/image'; // Import Image component from next/image
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import Carousel from '@/components/ui/Carousel/Carousel';
import logo_promote from '@/Images/logo_promote.png'; // Import logo_promote from images folder

export default function Home() {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex mx-auto w-full flex-grow'>
                <div className='container mx-auto py-8 pt-[6rem] w-full'>
                    <Carousel />
                    <div className='pb-20 bg-[#fff8e6]'>
                        <h1 className='text-[5rem]  md:text-[5rem] font-bold text-center text-black'>
                            LET'S PLAY LIKE A PRO
                        </h1>

                        <div className='grid grid-cols-1 md:grid-cols-2 text-black place-content-center gap-10 text-center'>
                            <div className='grid w-full place-content-center gap-4'>
                                <p className='text-xl md:text-[2rem] font-medium'>
                                    ลองคิดแหวกกรอบ
                                    <br /> (CREATIVE CLUSTER)
                                </p>
                                <Button variant={'plain'} color='bg-red-500'>
                                    ดูรายละเอียดเพิ่มเติม
                                </Button>
                            </div>
                            <div className='grid place-content-center gap-4'>
                                <p className='text-xl md:text-[2rem] font-medium'>
                                    ลองบริหารความรวย
                                    <br /> (BUSINESS CLUSTER){' '}
                                </p>
                                <Button variant={'plain'} color='bg-blue-500'>
                                    ดูรายละเอียดเพิ่มเติม
                                </Button>
                            </div>
                            <div className='grid place-content-center gap-4'>
                                <p className='text-xl md:text-[2rem] font-medium'>
                                    ลองสร้างสิ่งล้ำ
                                    <br /> (INNOVATIVE CLUSTER){' '}
                                </p>
                                <Button variant={'plain'} color='bg-green-500'>
                                    ดูรายละเอียดเพิ่มเติม
                                </Button>
                            </div>
                            <div className='grid place-content-center gap-4'>
                                <p className='text-xl md:text-[2rem] font-medium'>
                                    ลองโกอินเตอร์ <br />
                                    (BU INTERNATIONAL){' '}
                                </p>
                                <Button variant={'plain'} color='bg-pink-500'>
                                    ดูรายละเอียดเพิ่มเติม
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
