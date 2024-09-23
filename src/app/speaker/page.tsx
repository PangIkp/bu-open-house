import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import bu1 from "../../Images/bu1.png";
import SpeakerCard from "@/components/SpeakerCard";
import thammachad from "../../Images/thammachad.jpg";
import niky from "../../Images/niky.jpg";
import renny from "../../Images/renny.jpg";
import toptap from "../../Images/toptap.jpg";
import whawha from "../../Images/whawha.jpg";
import prompt from "../../Images/prompt.jpg";
import uno from "../../Images/uno.jpg";
import aheye from "../../Images/aheye.jpg";
import spd from "../../Images/spd.jpg";
import pleng from "../../Images/pleng.jpg";
import dream from "../../Images/dream.jpg";
import pluster from "../../Images/plus.webp";




export default function Speaker() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* กำหนด position fixed และ z-index ให้กับ Navbar */}
      <div className="fixed w-full top-0 z-50">
        <Navbar />
      </div>

      {/* เว้น padding-top ให้เพียงพอสำหรับ Navbar */}
      <div className="flex-grow pt-[60px]">
        <div className="flex mx-auto py-8">
          <Image src={bu1} alt="speakers" className="w-screen h-auto" />
        </div>

        <div className="px-20 flex justify-center items-center pt-20 pb-5">
          <div className="flex-grow h-px bg-[#BEBEBE]"></div>
          <h1 className="text-[30px] px-4 text-white">29 สิงหาคม</h1>
          <div className="flex-grow h-px bg-[#BEBEBE]"></div>
        </div>

        <p className="text-[20px] font-light flex justify-center text-white pb-10">Talk with รุ่นพี่ตัวท็อป สาขาการสื่อสาร และสื่อใหม่ เพื่อสร้างแรงบันดาลใจ และจุดประกายความฝัน</p>

        <div className="container px-4 sm:px-8 lg:px-20 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SpeakerCard
              src={thammachad}
              alt="thammachad"
              name="ธรรมชาติ"
              profile="@thammachad ครีเอเตอร์สายตลกที่สร้างความบันเทิงและรอยยิ้มให้กับผู้คน"
              locate="ห้องปองทิพย์ 3 (C3-105)"
              time="12.00 - 13.00 น."
            />
            <SpeakerCard
              src={niky}
              alt="niky"
              name="นิกี้ QRRA"
              profile="@youknowinever_ หนึ่งในไอดอลหญิงมากความสามารถของสมาชิกวงคาร์ร่า (QRRA)"
              locate="ห้องปองทิพย์ 3 (C3-105)"
              time="13.30 - 14.30 น."
            />
            <SpeakerCard
              src={renny}
              alt="renny"
              name="เรนนิโกะ"
              profile="@rennyk0 คอนเทนต์ ครีเอเตอร์ มากความสามารถประจำสาขา CNM"
              locate="ห้องปองทิพย์ 3 (C3-105)"
              time="14.30 - 15.30 น."
            />
            <SpeakerCard
              src={toptap}
              alt="toptap"
              name="ท็อปแท็ป ณภัทร"
              profile="@toptapp_nc นักแสดง และพิธีกรวัยรุ่นชื่อดัง"
              locate="เวที A3"
              time="13.00 - 14.00 น."
            />
          </div>
        </div>

        <div className="px-20 flex justify-center items-center pt-20 pb-5">
          <div className="flex-grow h-px bg-[#BEBEBE]"></div>
          <h1 className="text-[30px] px-4 text-white">30 สิงหาคม</h1>
          <div className="flex-grow h-px bg-[#BEBEBE]"></div>
        </div>

        <p className="text-[20px] font-light flex justify-center text-white pb-10">Talk with รุ่นพี่ตัวท็อป สาขาวิทยุกระจายเสียง วิทยุโทรทัศน์ และการผลิตสื่อสตรีมมิ่ง</p>


        <div className="container px-4 sm:px-8 lg:px-20 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SpeakerCard
              src={aheye}
              alt="aheye"
              name="อ๊ะอาย 4EVE"
              profile="@aheyekrn_ ไอดอลสาวน้อยเสียงสวย จากวง 4EVE"
              locate="ลานวงกลม (C3-104)"
              time="12.00 - 13.00 น."
            />
            <SpeakerCard
              src={whawha}
              alt="whawha"
              name="หว่าหวา"
              profile="@wwhawha ศิลปินสาวน้อยสุดน่ารัก เสียงดี มากเสน่ห์"
              locate="ลานวงกลม (C3-104)"
              time="13.30 - 14.30 น."
            />
            <SpeakerCard
              src={prompt}
              alt="prompt"
              name="พร้อม ราชภัทร"
              profile="@anotherboytj ศิลปินหนุ่มมาแรง แถมความกวน (แต่น่ารัก) ที่มาเต็ม"
              locate="ห้องปองทิพย์ 3 (C3-105)"
              time="14.30 - 15.30 น."
            />
            <SpeakerCard
              src={uno}
              alt="uno"
              name="อูโน่ หลาวทอง"
              profile="@moznattha ครีเอเตอร์ และนักร้องสายฉีก ที่มาพร้อมกับเสียงหัวเราะ"
              locate="C3-104"
              time="13.00 - 14.00 น."
            />
          </div>
        </div>

        <div className="px-20 flex justify-center items-center pt-20 pb-5">
          <div className="flex-grow h-px bg-[#BEBEBE]"></div>
          <h1 className="text-[30px] px-4 text-white">31 สิงหาคม</h1>
          <div className="flex-grow h-px bg-[#BEBEBE]"></div>
        </div>

        <p className="text-[20px] font-light flex justify-center text-white pb-10">Talk with รุ่นพี่ตัวท็อป สาขาการสื่อสาร และสื่อใหม่</p>

        <div className="container px-4 sm:px-8 lg:px-20 mx-auto pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SpeakerCard
              src={spd}
              alt="spd"
              name="สไปร์ท spd"
              profile="@prite_netijenn ยูทูปเบอร์หนุ่มมากความสามารถ ชื่อดัง ที่มาพร้อมกับการให้"
              locate="ห้องปองทิพย์ 3 (C3-105)"
              time="12.00 - 13.00 น."
            />
            <SpeakerCard
              src={pleng}
              alt="pleng"
              name="เพลง"
              profile="@plengsrpc รุ่นพี่ฟิล์มคนเก่ง ม.กรุงเทพ"
              locate="C3-104"
              time="13.30 - 14.30 น."
            />
            <SpeakerCard
              src={dream}
              alt="dream"
              name="ดรีม บาร์โค้ด"
              profile="@dreambarcode ไอดอลสุดฮา  เจ้าของวลี  'เหม็นแบ๊ว'"
              locate="ห้องปองทิพย์ 3 (C3-105)"
              time="14.30 - 15.30 น."
            />
            <SpeakerCard
              src={pluster}
              alt="pluster"
              name="พลัสเตอร์"
              profile="@plustor นักแสดง และนายแบบชาวไทย ที่มีผลงานที่เป็นที่รู้จักกันมากที่สุดคือ My Dear Loser"
              locate="C3-104"
              time="13.00 - 14.00 น."
            />
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
