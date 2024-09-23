// 1640705727 Itsara Klongklaew
"use client"; // บอก Next.js ว่านี่คือ Client-side Component
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Gallery() {
  const [displayedText, setDisplayedText] = useState(""); // State สำหรับข้อความที่จะแสดง
  const fullText = "WELCOME TO GALLERY BU OPEN HOUSE 2024"; // ข้อความเต็ม

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout | undefined; // ระบุประเภทของ timeoutId

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1)); // เพิ่มข้อความทีละตัวจาก fullText โดยตรง
        currentIndex++;
        timeoutId = setTimeout(typeText, 100); // ตั้งเวลาเพื่อเพิ่มตัวอักษรถัดไป
      }
    };

    typeText(); // เรียกใช้ฟังก์ชันครั้งแรกเมื่อ component โหลด

    return () => clearTimeout(timeoutId); // เคลียร์ setTimeout เมื่อ component ถูก unmount
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div className="container mx-auto px-4 py-8 pt-40">
          <h1 className="text-4xl text-white font-semibold">{displayedText}</h1> {/* แสดงข้อความ */}
          <p className="text-white mt-5 mb-5 text-[14px]">มหาวิทยาลัยกรุงเทพ จัดงาน BU OPEN HOUSE 2024 ลองเล่นให้เป็นโปร กับ 14 คณะ 52 สาขา 120 กิจกรรม 55 เวิร์กชอป 39 กิจกรรมล่าใบ e-Certificate 10 สัมมนา 10 โชว์เคส และ 6 กิจกรรมกลางที่มีสาระ และความบันเทิง พร้อมเปิดโอกาสให้นักเรียนชั้นมัธยมศึกษาตอนปลายได้ลองคิดจริง ลองจับอุปกรณ์จริง ลองลงมือทําจริง ได้ความรู้จากอาจารย์ตัวจริง </p>
 
          {/* all Image */}
          <div className="flex justify-between mb-10">
            <Image className="w-full rounded-l-[10px]" src="https://contents.bu.ac.th/contents/images/news/83557c75-24bd-4faf-a4cb-af15a0c0f393.webp" alt="allImage" width={200} height={50}/>
            <Image className="w-full rounded-r-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/9e2c6ee1-c994-4c9d-a9f2-040ba969ce11.webp" alt="allImage" width={200} height={50}/>
          </div>
          
             {/* คณะบริหารธุรกิจ */}
             <div className="flex justify-center items-center pt-20 pb-5">
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
              <h1 className="text-[30px] px-4 text-white">คณะบริหารธุรกิจ</h1>
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
            </div>

             <div className="grid grid-cols-3 gap-4">
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/c8d4328e-e533-4901-8e9b-9405e3c50e56.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/2cfa3296-9349-405c-805f-fcf4f0fac14d.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/3c65fb79-9b0f-451b-a143-633c641b0a1c.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/00ac65ce-b1c4-4c80-b32f-c82d5b1f8f28.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/4e5e264e-5925-4582-8198-084e4edfcf4b.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/dc5a235d-4820-4be8-9cae-93aa452f2958.webp" alt="allImage" width={500} height={50} />
            </div>

             {/* คณะนิติศาสตร์ */}
            <div className="flex justify-center items-center pt-20 pb-5">
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
              <h1 className="text-[30px] px-4 text-white">คณะนิติศาสตร์</h1>
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/737b4bbb-9b9d-40b2-9e1d-e23d02b655b9.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/6193d823-cca8-421b-a324-bc7c0580f3ae.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/7e699f89-5dd5-463d-90a0-966771c0b7e9.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/8f53ebc2-d144-472b-a0b7-111361355b98.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/cddfe8c0-22ef-4a74-8f18-385e3eb619a6.webp" alt="allImage" width={500} height={50} />
            </div>

             {/* วิศวะกรรมศาสตร์ */}
            <div className="flex justify-center items-center pt-20 pb-5">
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
              <h1 className="text-[30px] px-4 text-white">คณะวิศวะกรรมศาสตร์</h1>
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/0c67e5d7-b7dd-4e84-bf8b-e19db4a5847c.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/9cfa14c8-8211-48f9-b8de-40f1f99c3ca8.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/78268653-2100-4e8d-a965-14da19ea6464.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/5f28b4cc-5bfc-44c7-abc6-183b1c65629a.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/b54cc60d-7f01-48f3-82d3-1e8d14a34dcd.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/06c93bfc-d23b-4a23-ad87-22c43e19b9e7.webp" alt="allImage" width={500} height={50} />
            </div>

            {/* บัญขี */}
            <div className="flex justify-center items-center pt-20 pb-5">
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
              <h1 className="text-[30px] px-4 text-white">คณะบัญชี</h1>
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/18d198c9-e324-4415-926e-3183f9ba4f74.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/9cfa14c8-8211-48f9-b8de-40f1f99c3ca8.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/48807b28-d52f-4966-bbe9-2adbb59343cc.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/d0516a2b-e41f-47df-8431-5f3f72bf7164.webp" alt="allImage" width={500} height={50} />
            </div>

            {/* นิเทศน์ศาสตร์ */}
            <div className="flex justify-center items-center pt-20 pb-5">
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
              <h1 className="text-[30px] px-4 text-white">คณะนิติศาสตร์</h1>
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/f2806413-5b0b-4da5-80de-a83d08758a80.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/d24f4725-9218-4bac-bcfe-66d590ed4228.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/788b2333-9504-4798-bdd7-fd40c8c4283e.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/05832205-f330-47e4-aeec-7b6f8d8aa057.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/94eb7493-2e72-4b60-9e49-8953e332ce36.webp" alt="allImage" width={500} height={50} />
            </div>

             {/* เทคโนโลยีสารสนเทศและนวัตกรรม */}
             <div className="flex justify-center items-center pt-20 pb-5">
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
              <h1 className="text-[30px] px-4 text-white">คณะเทคโนโลยีสารสนเทศและนวัตกรรม</h1>
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/0333524e-20ee-4dee-ba20-fdf9da363821.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/984a77f7-6bc9-4791-9d18-b1acffe66241.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/bf45c108-2239-42a4-a61d-6f38b606b8b7.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/542e7729-792d-4ac4-b5df-42573e1bda29.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/4c21a020-41a3-495b-88d9-1d0f21bbea84.webp" alt="allImage" width={500} height={50} />
            </div>

            {/* มนุษยศาสตร์และการจัดการการท่องเที่ยว */}
            <div className="flex justify-center items-center pt-20 pb-5">
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
              <h1 className="text-[30px] px-4 text-white">คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว</h1>
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/f78c6ce6-6806-4c0f-8615-72c000fa191d.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/78295f5c-1b18-48b7-a88c-014810534359.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/da332585-e93a-498f-8f7f-16c9b2d2d00c.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/9f4cc9c5-2f62-4f3b-a949-aa6d0bc62a04.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/36c2fdce-55ec-4d69-bdd1-fd1d0d777d29.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/744b4756-9d70-4ac6-a612-dfcb87661e2c.webp" alt="allImage" width={500} height={50} />
            </div>

             {/* ศิลปะกรรมศาสตร์ */}
             <div className="flex justify-center items-center pt-20 pb-5">
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
              <h1 className="text-[30px] px-4 text-white">คณะศิลปะกรรมศาสตร์</h1>
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/442e2eeb-6236-4325-ae76-06064f0e2a04.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/40ee8193-4773-4761-8c7b-b82c079a073f.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/9056ed76-1f5d-496a-8e2d-1a70632b1bd7.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/6ae5f348-f32b-4ffd-82c1-a2278d8b3eac.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/6f5f5110-9b22-434d-abe1-2d6d5ac59647.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/db8eca15-ada0-4228-9198-3e2bf30d4c03.webp" alt="allImage" width={500} height={50} />
            </div>

            {/* เศรษฐศาสตร์และการลงทุน */}
            <div className="flex justify-center items-center pt-20 pb-5">
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
              <h1 className="text-[30px] px-4 text-white">คณะเศรษฐศาสตร์และการลงทุน</h1>
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/b371c560-040e-416d-a76b-2d4589da61ab.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/2a33c7a7-9899-4a8b-963d-779c4d6c1388.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/0541412d-f822-4cbf-9ffd-f17f77427bdf.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/a5c6aeb6-2ee1-4b9f-9a60-3f1d6e276bc6.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/358fa73b-6bd9-4ca2-aeed-4d495c09ede5.webp" alt="allImage" width={500} height={50} />
            </div>

            {/* สถาปัตยกรรมศาสตร์ */}
            <div className="flex justify-center items-center pt-20 pb-5">
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
              <h1 className="text-[30px] px-4 text-white">คณะสถาปัตยกรรมศาสตร์</h1>
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/28018f15-a824-4d7e-ac8a-e1aa6b7e9088.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/96e4db34-d1c6-436c-ad81-894291af455b.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/e61a72e1-dd9a-4ffb-b951-40e40d0bb1fb.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/dbefe2dc-153f-4287-94e4-3081fd1d1e09.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/c4218636-2991-48a7-b948-f9ad291226b7.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/9b50088b-9537-40ca-93b8-6b89e2df1d4d.webp" alt="allImage" width={500} height={50} />
            </div>

            {/* ดิจิทัลมีเดียและศิลปะภาพยนตร์ */}
            <div className="flex justify-center items-center pt-20 pb-5">
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
              <h1 className="text-[30px] px-4 text-white">คณะดิจิทัลมีเดียและศิลปะภาพยนตร์</h1>
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/ecb6b68f-71b2-404a-af36-53cfc9a7a049.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/f367acf8-711e-4e7b-b992-464b077b54a7.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/5db428c0-36b1-450d-ac4d-227c9f4ff152.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/48271f6b-b378-43da-8038-362ea6819723.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/054223c1-b197-4ab4-bf03-33a11a7948e3.webp" alt="allImage" width={500} height={50} />            
            </div>

            {/* การสร้างเจ้าของธุรกิจและการบริหารกิจการ */}
             <div className="flex justify-center items-center pt-20 pb-5">
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
              <h1 className="text-[30px] px-4 text-white">คณะการสร้างเจ้าของธุรกิจและการบริหารกิจการ</h1>
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/a5489219-c497-4d8b-b5be-704a7586d80e.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/a4c6ad9b-0e2a-401a-be31-dc1b84aa32cc.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/cc6d8f0d-ec67-4b76-98c6-382c07950c37.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/4985bff3-2cd2-410b-86fc-b05979316f06.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/3d248e6d-9410-4b9f-9819-af0a936cc712.webp" alt="allImage" width={500} height={50} />            
            </div>

            {/* วิทยาลัยนานาชาติจีน */}
            <div className="flex justify-center items-center pt-20 pb-5">
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
              <h1 className="text-[30px] px-4 text-white">วิทยาลัยนานาชาติจีน</h1>
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/5981ac1f-c56d-4678-bc26-9a23b5ee8410.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/5ac18a06-8495-4384-99e1-fae35a624bbc.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/0027b9cc-4ed9-4fa0-8466-f2913d21ec01.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/f480c329-df26-4309-89a7-3815e86fd4c5.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/96a1232f-15ae-48e2-9c88-0ef415691391.webp" alt="allImage" width={500} height={50} />            
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/2f550f4a-d554-4d13-ae5c-2c17e8882f68.webp" alt="allImage" width={500} height={50} />            
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/9539a183-a4d0-4f7c-9e10-06e69c0143aa.webp" alt="allImage" width={500} height={50} />            
            </div>

            {/* วิทยาลัยนานาชาติ */}
            <div className="flex justify-center items-center pt-20 pb-5">
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
              <h1 className="text-[30px] px-4 text-white">วิทยาลัยนานาชาติ</h1>
              <div className="flex-grow h-px bg-[#BEBEBE]"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/79a02f29-1c94-473e-899d-658beb8a1c23.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/ba1f6b23-b65a-43ae-8381-a7ebf64318d8.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/50a68d52-1f70-41b5-8f0a-cdf6a905aa62.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/fb3a0999-9e37-4045-9ea6-9a71b8f9c8ba.webp" alt="allImage" width={500} height={50} />
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/37d66786-516e-4b55-bf0d-201bd5105fed.webp" alt="allImage" width={500} height={50} />            
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/95d8bd10-b8fe-470f-93e0-74607baaebf2.webp" alt="allImage" width={500} height={50} />            
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/3b87e228-a571-4608-85d7-509a588d7e1c.webp" alt="allImage" width={500} height={50} />            
              <Image className="rounded-[10px]" src="https://contents.bu.ac.th/contents/files/uploads/749affc7-84f6-4149-a137-fc285c5c8d9f.webp" alt="allImage" width={500} height={50} />            

            </div>



        </div>
      </div>
      <Footer />
    </div>
  );
}
