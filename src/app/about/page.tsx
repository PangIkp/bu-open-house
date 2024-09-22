'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image'; // Import Image component from next/image
import logo_promote from '@/Images/logo_promote.png'; // Import logo_promote from images folder
import { Button } from '@/components/ui/Button';

export default function About() {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />

            <main className='flex-grow bg-[#fff8e6]'>
                <div className='container grid w-full mx-auto py-8 pt-40 text-white'>
                    <h1 className='text-[5rem]  md:text-[5rem] font-bold text-center text-black'>
                        IT'S TIME{' '}
                        <span className='text-[#ff3000]'>TO BE A PRO</span>
                    </h1>
                    <div className='grid w-full my-20 items-center justify-center'>
                        <div className='flex flex-col lg:flex-row w-full items-center justify-center gap-10 p-4'>
                            <Image
                                src={logo_promote.src}
                                alt={''}
                                width={500}
                                height={500}
                            />
                            <h1 className='max-lg:hidden text-3xl  md:text-[2rem] font-bold  text-black text-left leading-[4rem]'>
                                ปรากฏการณ์สำคัญที่พาทุกคนมาลองให้ตาแตก!
                                <br />
                                มาลองตอบคำถามให้ทุกแพชชัน ได้ลองฟังของจริง
                                <br />
                                ได้ลองคิดครีเอท ได้ลองสนุกทุกคณะ
                                <br />
                                แล้วมาลองเล่นให้เป็นโปรกันโดยพร้อมเพรียง! มาค่ะ
                                <br />
                                มาครับ มาค่า มาฮะ มาฮ้าฟฟู่ว!
                            </h1>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 text-black place-content-center gap-10'>
                        <div className='grid place-content-center'>
                            <p className='text-[2rem] font-medium'>
                                ลองคิดแหวกกรอบ (CREATIVE CLUSTER)
                            </p>
                            <Button variant={'plain'} color='bg-red-500'>
                                ดูรายละเอียดเพิ่มเติม
                            </Button>
                        </div>
                        <div className='grid place-content-center'>
                            <p className='text-[2rem] font-medium'>
                                ลองบริหารความรวย (BUSINESS CLUSTER){' '}
                            </p>
                            <Button variant={'plain'} color='bg-blue-500'>
                                ดูรายละเอียดเพิ่มเติม
                            </Button>
                        </div>
                        <div className='grid place-content-center'>
                            <p className='text-[2rem] font-medium'>
                                ลองสร้างสิ่งล้ำ (INNOVATIVE CLUSTER){' '}
                            </p>
                            <Button variant={'plain'} color='bg-green-500'>
                                ดูรายละเอียดเพิ่มเติม
                            </Button>
                        </div>
                        <div className='grid place-content-center'>
                            <p className='text-[2rem] font-medium'>
                                ลองโกอินเตอร์ (BU INTERNATIONAL){' '}
                            </p>
                            <Button variant={'plain'} color='bg-pink-500'>
                                ดูรายละเอียดเพิ่มเติม
                            </Button>
                        </div>
                    </div>
                </div>

                {/* <div className='body'>
                    <p>{` WHAT TIME IS IT?`}</p>
                </div>{' '} */}
            </main>

            <Footer />
        </div>
    );
}
