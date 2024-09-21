'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/Button';
import Dialog from '@/components/ui/Dialog';
// import Dialog from '@/components/ui/Dialog';
import React, { useState } from 'react';

export default function FAQ() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedFAQ, setSelectedFAQ] = useState<{
        question: string;
        answer: string;
    } | null>(null);

    const faqs = [
        {
            question: 'งาน BU Open House 2024 จัดขึ้นเมื่อไหร่ และจัดที่ไหน?',
            answer: 'มารวมตัวพร้อมกันได้ในวันที่ 29-31 สิงหาคม 2567 ณ มหาวิทยาลัยกรุงเทพ Main campus (รังสิต)',
            color: 'bg-green-600',
        },
        {
            question: 'เข้าร่วมงานต้องลงทะเบียนไหม?',
            answer: 'สามารถลงทะเบียนเพื่อร่วมงาน BU OPEN HOUSE ล่วงหน้าได้ที่ https://openhouse.bu.ac.th/register หรือลงทะเบียนหน้างานได้ที่ PRO-CENTER บริเวณใต้ตึก A3',
            color: 'bg-blue-600',
        },
        {
            question: 'เลือกลงทะเบียนเข้าร่วมกิจกรรมได้กี่คณะ?',
            answer: 'ลงทะเบียนครั้งเดียวสําหรับเข้าร่วมงาน BU OPEN HOUSE แล้วสามารถดูตารางกิจกรรมของคณะในคลัสเตอร์ต่าง ๆ ได้ที่หน้าเว็บไซต์หากสนใจกิจกรรมไหนก็ สามารถไปสแกน QR Code เข้าร่วมที่หน้ากิจกรรมของแต่ละคณะ/สาขาได้เลย',
            color: 'bg-pink-600',
        },
        {
            question: 'การแต่งกาย ใส่ชุดอะไรไปดี?',
            answer: 'มหาวิทยาลัยกรุงเทพเราเปิดรับความหลากหลาย ทุกคนสามารถแต่งกายได้ทั้งเครื่องแบบสถาบัน หรือชุดฟรีสไตล์ของตัวเอง แต่ยังสุภาพเหมาะสมกับสถานศึกษาได้เลย',
            color: 'bg-red-600',
        },
        {
            question:
                'กิจกรรมคณะต่าง ๆ เริ่มตั้งแต่กี่โมง และสิ้นสุดเมื่อไหร่?',
            answer: 'สําหรับกิจกรรมทุกคณะ จะเริ่มตั้งแต่เวลา 9.00-16.30 น. และมีต่อกับกิจกรรมสุดพิเศษช่วงเย็นสําหรับคอนเสิร์ตและโชว์วงดนตรีที่เวทีกลางบริเวณโถงอาคาร C6 หอสมุดสุรัตน์ โอสถานุเคราะห์ ตั้งแต่เวลา 17.00-20.00 น.',
            color: 'bg-orange-600',
        },
        {
            question:
                'ทุกคณะมีเปิดบ้านทุกวันไหม? และทั้ง 3 วัน มีกิจกรรมเหมือนกันไหม?',
            answer: 'ทุกคณะจะมีกิจกรรมเปิดบ้านให้เข้าร่วมทั้ง 3 วัน สามารถเช็กตารางกิจกรรมได้ที่หน้าแรกตามแต่ละคลัสเตอร์ซึ่งบางคณะจะมีกิจกรรมไฮไลต์แต่ละวันไม่เหมือนกันอย่าลืมวางแผนเพื่อไม่ให้พลาดกิจกรรมที่ชอบนะคะ',
            color: 'bg-gray-600',
        },
    ];

    const handleOpenDialog = (faq: { question: string; answer: string }) => {
        setSelectedFAQ(faq);
        setDialogOpen(true);
    };

    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-grow'>
                <div className='container mx-auto px-4 py-8 pt-40 text-white'>
                    <h1 className='text-3xl font-bold text-center mb-8'>
                        คำถามที่พบบ่อย (FAQ)
                    </h1>
                    <div className='grid w-full grid-cols-2'>
                        {faqs.map((faq, index) => (
                            <div key={index} className='p-4'>
                                <Button
                                    onClick={() => handleOpenDialog(faq)}
                                    variant='plain'
                                    size='lg'
                                    color={faq.color}
                                >
                                    {faq.question}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
                {selectedFAQ && (
                    <Dialog
                        isOpen={dialogOpen}
                        onClose={() => setDialogOpen(false)}
                        title={selectedFAQ.question}
                        content={selectedFAQ.answer}
                    />
                )}
            </main>
            <Footer />
        </div>
    );
}
