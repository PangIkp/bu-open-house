// 1640706956 Ruethaimata Kwangate
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
                    <hr className='border-[2px]' />
                    <div className='flex w-full my-20 items-center justify-center'>
                        <h1 className='text-[3rem] font-bold text-center text-black'>
                            จะไปยังไงอ่าาา?
                        </h1>
                    </div>
                    <div className='grid md:flex text-black place-content-center gap-10 text-center mb-10 md:mb-20 '>
                        <div className='flex w-full items-center justify-center gap-4'>
                            <img
                                width='50'
                                height='50'
                                src='https://img.icons8.com/ios-filled/50/737373/bus.png'
                                alt='bus'
                            />
                            <Button variant={'plain'} color='bg-pink-500'>
                                รถเมล์ สาย 39 ปอ.510 / ปอ.520
                            </Button>
                        </div>
                        <div className='flex w-full items-center justify-center gap-4'>
                            <img
                                width='50'
                                height='50'
                                src='https://img.icons8.com/ios-filled/50/737373/van.png'
                                alt='van'
                            />
                            <Button variant={'plain'} color='bg-yellow-500'>
                                รถตู้ สาย ต.85-93 (ฝั่งเกาะพญาไท){' '}
                            </Button>
                        </div>
                    </div>
                    <div className='grid md:flex text-black place-content-center gap-10 text-center'>
                        <div className='flex w-full items-center justify-center gap-4'>
                            <img
                                width='50'
                                height='50'
                                src='https://img.icons8.com/ios-filled/50/737373/train.png'
                                alt='train'
                            />
                            <Button variant={'plain'} color='bg-green-500'>
                                รถไฟฟ้าสายสีเขียว (BTS)
                            </Button>
                        </div>
                        <div className='flex w-full items-center justify-center gap-4'>
                            <img
                                width='50'
                                height='50'
                                src='https://img.icons8.com/ios-filled/50/737373/train.png'
                                alt='train'
                            />
                            <Button variant={'plain'} color='bg-blue-500'>
                                รถไฟฟ้าสายสีน้ำเงิน (MRT){' '}
                            </Button>
                        </div>
                        <div className='flex w-full items-center justify-center gap-4'>
                            <img
                                width='50'
                                height='50'
                                src='https://img.icons8.com/ios-filled/50/737373/train.png'
                                alt='train'
                            />
                            <Button variant={'plain'} color='bg-red-500'>
                                รถไฟฟ้าสายสีแดง (SRT) :
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
