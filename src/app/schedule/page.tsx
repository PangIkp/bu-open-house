"use client"; // Ensure this component is a Client Component
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import schedule1 from "../../Images/schedule1.jpg";
import schedule3 from "../../Images/schedule3.jpg";

export default function schedule() {
  const [displayedText, setDisplayedText] = useState(""); // State สำหรับข้อความที่จะแสดง
  const fullText = "กำหนดการ BU Open house 2024"; // ข้อความเต็ม

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>; // กำหนดประเภทของ timeoutId

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeText, 100);
      }
    };

    typeText(); // เรียกใช้ฟังก์ชันครั้งแรกเมื่อ component โหลด

    return () => clearTimeout(timeoutId); // เคลียร์ timeout เมื่อ component ถูก unmount
  }, [fullText]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-8 pt-40">
          <h1 className="text-[45px] text-center">{displayedText}</h1>
          <h1 className="text-[35px] text-center">วันที่ 29-31 สิงหาคม 2567</h1>

          <div className="flex justify-center p-6 space-x-4">
            <Link href="https://www.facebook.com/bangkokuniversity">
              <div className="w-[240px]">
                <p className="bg-gray-800 border text-white border-gray-200 hover:bg-gray-200 hover:text-black h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4">
                  Facebook Live : Bangkok University
                </p>
              </div>
            </Link>

            <Link href="https://www.google.co.th/maps/place/%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E/@14.0395107,100.610601,17z/data=!4m10!1m2!2m1!1z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LiB4Lij4Li44LiH4LmA4LiX4Lie!3m6!1s0x30e2801cc4ec2aff:0xbfec6d0816ab0b14!8m2!3d14.0395107!4d100.6153646!15sCjbguKHguKvguLLguKfguLTguJfguKLguLLguKXguLHguKLguIHguKPguLjguIfguYDguJfguJ5aOSI34Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4LiiIOC4geC4o-C4uOC4h-C5gOC4l-C4npIBEnByaXZhdGVfdW5pdmVyc2l0eeABAA!16zL20vMGI3MzFo?hl=th&entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D">
              <div className="w-[240px]">
                <p className="bg-gray-800 border text-white border-gray-200 hover:bg-gray-200 hover:text-black h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4">
                  Onsite : มหาวิทยาลัยกรุงเทพ
                </p>
              </div>
            </Link>
          </div>

          {/* Schedule */}
          <div className="mt-5 flex flex-col items-center border border-black shadow-md">
            <div className="flex w-full">
              <div className="bg-[#666699] w-[130px] text-white text-sm font-semibold px-4 py-2 rounded-l-[10px]">
                08.40-09.00 น
              </div>

              <div className="flex-1 bg-neutral-100 text-black text-sm font-medium px-4 py-2 rounded-r-[10px]">
                แนะนำมหาวิทยาลัยกรุงเทพ และกิจกรรม{" "}
                <span className="font-bold">BU Open House 2024</span>
              </div>
            </div>

            <div className="flex w-full mt-2">
              <div className="bg-[#666699] w-[130px] flex items-center text-white text-sm font-semibold px-4 py-2 rounded-l-[10px]">
                09.00 - 09.15 น
              </div>

              <div className="flex-1 bg-neutral-100 text-black text-sm font-bold px-4 py-2 rounded-r-[10px]">
                Welcome to BU Open House 2024
                <p className="font-medium">- อธิการบดีมหาวิทยาลัยกรุงเทพ</p>
              </div>
            </div>

            <div className="flex w-full mt-2">
              <div className="bg-[#666699] w-[130px]  flex items-center text-white text-sm font-semibold px-4 py-2 rounded-l-[10px]">
                09.15 - 09.30 น
              </div>

              <div className="flex-1 bg-neutral-100 text-black text-sm font-bold px-4 py-2 rounded-r-[10px]">
                Next You, Next BU : BU Student
                <p className="font-medium">- รองอธิการบดีหาวิทยาลัยกรุงเทพ</p>
              </div>
            </div>

            <div className="flex w-full mt-2">
              <div className="bg-[#666699] w-[130px]  flex items-center text-white text-sm font-semibold px-4 py-2 rounded-l-[10px]">
                09.30 - 09.40 น
              </div>

              <div className="flex-1 bg-neutral-100 text-black text-sm font-bold px-4 py-2 rounded-r-[10px]">
                BU : Make Innovation Simple
                <p className="font-medium">- รองอธิการบดีหาวิทยาลัยกรุงเทพ</p>
              </div>
            </div>

            <div className="flex w-full mt-2">
              <div className="bg-[#666699] w-[130px] flex items-center text-white text-sm font-semibold px-4 py-2 rounded-l-[10px]">
                09.40 - 11.00 น
              </div>

              <div className="flex-1 bg-neutral-100 text-black text-sm font-bold px-4 py-2 rounded-r-[10px]">
                BU Talks : ลองเล่นให้เป็นโปร
                <p className="font-medium">- คณะศิษย์เก่ามหาวิทยาลัยกรุงเทพ</p>
              </div>
            </div>

            <div className="flex w-full mt-2">
              <div className="bg-[#666699] w-[130px]  flex items-center text-white text-sm font-semibold px-4 py-2 rounded-l-[10px]">
                11.00 - 11.30 น
              </div>

              <div className="flex-1 bg-neutral-100 text-black text-sm font-bold px-4 py-2 rounded-r-[10px]">
                Cheerleader Of Bangkok University
                <p className="font-medium">
                  - การแสดงจากผู้นำเชียร์มหาวิทยาลัยกรุงเทพ
                </p>
              </div>
            </div>

            <div className="flex w-full mt-2">
              <div className="bg-[#666699] w-[130px] flex items-center text-white text-sm font-semibold px-4 py-2 rounded-l-[10px]">
                11.30 - 12.30 น
              </div>

              <div className="flex-1 bg-neutral-100 text-black text-sm font-bold px-4 py-2 rounded-r-[10px]">
                Talk with current students
                <p className="font-medium">
                  - พูดคุยกับศิษย์ปัจจุบันจากคณะต่าง ๆ ของมหาวิทยาลัยกรุงเทพ
                  และร่วมสนุกตอบคำถามชิงรางวัล
                </p>
              </div>
            </div>

            <div className="flex w-full mt-2">
              <div className="bg-[#666699] w-[130px] flex items-center text-white text-sm font-semibold px-4 py-2 rounded-l-[10px]">
                12.30 - 14.30 น
              </div>

              <div className="flex-1 bg-neutral-100 text-black text-sm font-bold px-4 py-2 rounded-r-[10px]">
                Faculty introduction
                <p className="font-medium">- แนะนำกิจกรรมของแต่ละคณะ</p>
              </div>
            </div>

            <div className="flex w-full mt-2">
              <div className="bg-[#666699] w-[130px] flex items-center text-white text-sm font-semibold px-4 py-2 rounded-l-[10px]">
                14.30 - 15.30 น
              </div>

              <div className="flex-1 bg-neutral-100 text-black text-sm font-bold px-4 py-2 rounded-r-[10px]">
                BU BAND
                <p className="font-medium">- การแสดงจากวง BU BAND</p>
              </div>
            </div>

            <div className="flex w-full mt-2">
              <div className="bg-[#666699] w-[130px] flex items-center text-white text-sm font-semibold px-4 py-2 rounded-l-[10px]">
                15.30 - 16.30 น
              </div>

              <div className="flex-1 bg-neutral-100 text-black text-sm font-bold px-4 py-2 rounded-r-[10px]">
                Talk with current students
                <p className="font-medium">
                  - พูดคุยกับศิษย์ปัจจุบันจากคณะต่าง ๆ ของมหาวิทยาลัยกรุงเทพ
                  และร่วมสนุกตอบคำถามชิงรางวัล
                </p>
              </div>
            </div>

            <div className="flex w-full mt-2">
              <div className="bg-[#666699] w-[130px] flex items-center text-white text-sm font-semibold px-4 py-2 rounded-l-[10px]">
                16.30 - 18.30 น
              </div>

              <div className="flex-1 bg-neutral-100 text-black text-sm font-bold px-4 py-2 rounded-r-[10px]">
                Faculty introduction
                <p className="font-medium">- แนะนำกิจกรรมของแต่ละคณะ</p>
              </div>
            </div>

            <div className="flex w-full mt-2">
              <div className="bg-[#666699] w-[130px] flex items-center text-white text-sm font-semibold px-4 py-2 rounded-l-[10px]">
                18.30 - 20.00 น
              </div>

              <div className="flex-1 bg-neutral-100 text-black text-sm font-bold px-4 py-2 rounded-r-[10px]">
                Fancy Night
                <p className="font-medium">- คอนเสิรต์จากศิลปินสุด PRO</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-20 mb-20">
            <Image
              className="w-full sm:w-[250px] lg:w-[500px] rounded-l-[10px]"
              src={schedule1}
              alt="schedule"
            ></Image>

            <Link href="/registration">
              <Image
                className="w-full sm:w-[700px] lg:w-[800px] rounded-r-[10px]"
                src={schedule3}
                alt="schedule"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
