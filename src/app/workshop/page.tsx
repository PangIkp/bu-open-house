"use client"; // Ensure this component is a Client Component
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import WorkshopCard from "@/components/WorkshopCard";
import Footer from "@/components/Footer";
import thammachad from "../../Images/thammachad.jpg";

export default function workshop() {
  const [displayedText, setDisplayedText] = useState(""); // State สำหรับข้อความที่จะแสดง
  const fullText = "WORKSHOP BU OPEN HOUSE 2024"; // ข้อความเต็ม

  const [filterFac, setFilterFac] = useState<string | null>(null);

  const workshops = [
    {
      src: "https://media.istockphoto.com/id/1916729901/photo/meeting-success-two-business-persons-shaking-hands-standing-outside.webp?a=1&b=1&s=612x612&w=0&k=20&c=y4D1ZzsXc_scJc7INNxewaDHElBqQFib_WLBMq-ZkUM=",
      alt: "workshop",
      name: "BU Billionaire Board Game วางแผนการเงินเพื่อความมั่งคั่ง",
      detail:
        "เรียนรู้การวางแผนการเงินสำหรับช่วงอายุต่างๆผ่านสถานการณ์ที่ไม่คาดฝันในรูปแบบของการเล่น Board Game ผู้เข้าร่วมจะทำกิจกรรมวางแผนการเงินในแต่ละช่วงอายุในรูปแบบของการเล่นเกมส์ที่จะสอนให้รู้จักสินทรัพย์ทางการเงินและกระบวนการวางแผนการเงินผ่านช่วงอายุตั้งแต่เริ่มทำงานจนกระทั่งเกษียณ",
      locate: "Diamond Hall",
      time: "09.00, 10.00, 11.00, 13.00, 14.00, 15.00 (รอบละ 45 นาที จำนวนผู้เข้าร่วมต่อรอบ 30 คน)",
      major: "สาขาวิชาการวางแผนการเงินและการลงทุน",
      fac: "คณะบริหารธุรกิจ",
    },
    {
      src: "https://media.istockphoto.com/id/1686497935/photo/business-man-running-on-arrow-shaped-bridge-to-the-light.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZptNdZTfzPsm_wNJAZvrlaPRSP5fEqiHEBDXT1x45LY=",
      alt: "workshop",
      name: "WHO IS YOUR TARGET?",
      detail:
        "หลักการพื้นฐานสำคัญของการทำธุรกิจไม่ว่าเล็กใหญ่คือกลุ่มเป้าหมาย น้อง ๆ คนไหนที่สนใจอยากต่อยอดเรื่องการหากลุ่มเป้าหมายเพื่อพัฒนาความชอบของตัวเองให้ไกลมากขึ้น มาลอง target persona ได้ที่นี่ ทําการระบุรายละเอียดของกลุ่มลูกค้า เช่น เพศอายุ lifestyle การแต่งตัว เป็นต้น เสร็จแล้วสามารถนำภาพนี้ไปเป็นผลงานส่วนตัวต่อไปได้เลย",
      locate: "A3-202",
      time: "10.00, 11.00, 13.00, 14.00, 15.00 (รอบละ 20 นาที จำนวนผู้เข้าร่วมต่อรอบ 15 - 20 คน)",
      major: "สาขาวิชาการตลาดดิจิทัล",
      fac: "คณะบริหารธุรกิจ",
    },
    {
      src: "https://media.istockphoto.com/id/1515913422/photo/a-data-analyst-using-technology-ai-for-working-tool-for-data-analysis-chatbot-chat-with-ai.webp?a=1&b=1&s=612x612&w=0&k=20&c=XIonETkCfY0bm7016-_98njp9mGXIA_NpsqVTOpVaWY=",
      alt: "workshop",
      name: "ESSENTIALS OF DIGITAL MARKETING: INTEGRATING AI",
      detail:
        "มาลองดูว่า AI ช่วยให้เราทำ Marketing ดีขึ้นได้อย่างไร ไม่ว่าจะช่วยสร้าง content ให้ตรงกลุ่มเป้าหมาย วางแผนยิงแอดบน social media และใครที่ยังไม่รู้จักเรื่อง Re-Marketing ก็จะได้รู้กันแน่นอน",
      locate: "สถานที่ A3-202",
      time: "10.00, 11.00, 13.00, 14.00, 15.00 (รอบละ 20 นาที จำนวนผู้เข้าร่วมต่อรอบ 15 - 20 คน)",
      major: "สาขาวิชาการตลาดดิจิทัล",
      fac: "คณะบริหารธุรกิจ",
    },
    {
      src: "https://media.istockphoto.com/id/2035571068/photo/dynamic-digital-world-map-emphasize-western-europe-continental-for-ai-powered-global-network.webp?a=1&b=1&s=612x612&w=0&k=20&c=lcfe8tk1y6QRM_lRxG3-r_4zFFqrEi7ngCdYuxSdC4o=",
      alt: "workshop",
      name: "CONTENT WITH AI",
      detail:
        "มีกลุ่มเป้าหมาย แล้วก็ต้องมี content มาลองดูกันว่าเราจะสื่อสารเรื่องอะไรให้โดนใจกลุ่มลูกค้าของเรากันนะ ด้วยการใช้ chatGPT ช่วยสร้างรูปในการทํา content ตามโจทย์ที่ได้รับ",
      locate: "A3-202",
      time: "10.00, 11.00, 13.00, 14.00, 15.00 (รอบละ 20 นาที จำนวนผู้เข้าร่วมต่อรอบ 15 - 20 คน)",
      major: "สาขาวิชาการตลาดดิจิทัล",
      fac: "คณะบริหารธุรกิจ",
    },
    {
      src: "https://media.istockphoto.com/id/1319565513/photo/young-attractive-beautiful-female-entrepreneur-fund-borrower-crazy-joyful-ecstatic-face.webp?a=1&b=1&s=612x612&w=0&k=20&c=MWqWTcMJa9D8bjXrD1xmf_mBPy0jMCJJjI-bVdsNZkI=",
      alt: "workshop",
      name: "ปรึกษาธุรกิจกับโค้ช​",
      detail:"ปรึกษาธุรกิจแบบตัวต่อตัว ถามตอบเกี่ยวกับคณะและธุรกิจ กับอาจารย์ BUSEM และเจ้าของธุรกิจตัวจริงแบบตัวต่อตัว ร่วมวิเคราะห์ทุกสถานการณ์ธุรกิจครอบครัว สอนให้น้อง ๆ ได้เรียนรู้กระบวนการสร้างธุรกิจ ตั้งแต่การคิดไอเดีย วางแผน และลงมือทำธุรกิจให้เกิดขึ้นจริงได้ทุกรูปแบบธุรกิจ ถามตอบเกี่ยวกับคณะและหลักสูตรของคณะ​",
      locate: "บูธ BUSEM ด้านใน (Diamond hall)",
      time: "ตลอดทั้งวัน (จำนวนคนต่อรอบ 4 คน)",
      major: "สาขาวิชาการเป็นเจ้าของธุรกิจ",
      fac: "คณะการสร้างเจ้าของธุรกิจและการบริหารกิจการ",
    },
    {
      src: "https://media.istockphoto.com/id/2164221538/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%84%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%AB%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B9%81%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B9%84%E0%B8%94%E0%B8%AD%E0%B8%B0%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%9F%E0%B8%B4%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%A3%E0%B9%88%E0%B8%A7%E0%B8%A1%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88-%E0%B8%9E%E0%B8%B9%E0%B8%94%E0%B8%84%E0%B8%B8%E0%B8%A2%E0%B9%80.jpg?s=612x612&w=0&k=20&c=kXNHM9kppCJ3krgjIPz7cNu_uHBi1UQWKbW0AS-lttc=",
      alt: "workshop",
      name: "WORKSHOP เพ้นท์กางเกงยีนส์",
      detail:
        "มีกลุ่มเป้าหมาย แล้วก็ต้องมี content มาลองดูกันว่าเราจะสื่อสารเรื่องอะไรให้โดนใจกลุ่มลูกค้าของเรากันนะ ด้วยการใช้ chatGPT ช่วยสร้างรูปในการทํา content ตามโจทย์ที่ได้รับ",
      locate: "บูธ BUSEM ด้านใน (Diamond hall)",
      time: "ตลอดทั้งวัน จำนวนคนต่อรอบ 20 คน",
      fac: "คณะการสร้างเจ้าของธุรกิจและการบริหารกิจการ",
      major: "สาขาวิชาการเป็นเจ้าของธุรกิจ",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661769577787-9811af17f98d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGF3fGVufDB8fDB8fHww",
      alt: "workshop",
      name: "การแข่งขันวัดความรู้พื้นฐานทางกฎหมาย",
      detail:
        "ฝึกสมอง ประลองความรู้ทางกฎหมาย ท้าทายความสามารถ ตอบปัญหากฎหมายหลากหลายสาขา ทั้งกฎหมายแพ่ง กฎหมายอาญา และกฎหมายพิเศษที่ทันสมัย ชิงเกียรติบัตรสำหรับผู้ชนะเลิศคะแนนรวมสูงสุด ตลอดกิจกรรม OPEN HOUSEอ่านรายละเอียดและกติกาการแข่งขันได้",
      locate: "A3-305",
      time: "13.00-14.00 น. (จํานวน 50 ข้อ ระยะเวลา 60 นาที) และเวลา 16.00 น. ประกาศผลการสอบ",
      fac: "คณะนิติศาสตร์",
      major: "หลักสูตรนิติศาสตรบัณฑิต",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661394715096-46bb7027fc27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhd3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "workshop",
      name: "Mystery of Law",
      detail:
        "ค้นหาตัวตนคนกฎหมายในตัวคุณ ร่วมกิจกรรมกับองค์กรทางกฎหมายชั้นนำเพื่อค้นพบความต้องการที่แท้จริง ผ่าน Workshop และ Board Games สนุกๆ มากมายตลอดทั้งกิจกรรม พร้อมทั้ง Career Path ที่น่าสนใจของวิชาชีพทางกฎหมาย",
      locate: "A3-501",
      time: "ตั้งแต่เวลา 09.00 - 16.00 น.",
      fac: "คณะนิติศาสตร์",
      major: "หลักสูตรนิติศาสตรบัณฑิต",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "workshop",
      name: "บัญชี... เพื่อนคู่คิดของธุรกิจ",
      detail:
        "กิจกรรมสนุกๆ เรื่องใกล้ตัวง่ายๆ ทำความรู้จักกับหลักการบัญชี ฝึกบันทึกบัญชีรายรับ-รายจ่าย ฝึกหากำไร/ขาดทุนของกิจการ จากการเล่นบอร์ดเกม",
      locate: "A3-501 (Diamond hall)​",
      time: "ตลอดทั้งวัน",
      fac: "คณะบัญชี",
      major: "หลักสูตรบัญชีบัณฑิต",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "workshop",
      name: "Audit ใครก็คิดว่ายาก",
      detail:
        "ใครอยากเป็นผู้สอบบัญชี ต้องมาลองเล่นเกมนี้ เรียนรู้จากงบการเงิน ฝึกการเป็นคนช่างสังเกต ซึ่งเป็นทักษะสำคัญของอาชีพ Audit",
      locate: "A3-501 (Diamond hall)",
      time: "ตลอดทั้งวัน​",
      fac: "คณะบัญชี",
      major: "หลักสูตรบัญชีบัณฑิต",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661774987792-17a95638d874?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D",
      alt: "workshop",
      name: "Accounting Software / Data Analytics",
      detail:
        "บัญชียุคใหม่ ไม่ใช่เรื่องยากอีกต่อไป มีเทคโนโลยีและโปรแกรมเจ๋งๆ ที่จะช่วยให้การทำงานง่ายขึ้น ได้เรียนรู้ด้าน IT ได้ฝึกการใช้โปรแกรมสำเร็จรูป หรือการวิเคราะห์ข้อมูลทางการบัญชีโดยใช้โปรแกรมต่างๆ เช่น Excel Power BI Data mining เพื่อสนับสนุนการทำงานในวิชาชีพให้มีประสิทธิภาพมากยิ่งขึ้น",
      locate: "A3-501 (Diamond hall)",
      time: "ตลอดทั้งวัน",
      fac: "คณะบัญชี",
      major: "หลักสูตรบัญชีบัณฑิต",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1679429321023-dff2ea455b0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SHVtYW5pdGllc3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "workshop",
      name: "การอบรมเชิงปฏิบัติการทักษะการแปลบทซีรีส์",
      detail:
        "ห้องเรียนจำลอง แนะนำหลักการการแปลเบื้องต้น เทคนิคการแปลบทซีรีส์ การเลือกใช้ภาษาสำหรับการแปล และฝึกแปลจริง",
      locate: "อาคารปฏิบัติการ Tourism Tower ห้อง A5-703",
      time: "13.30 - 14.30 น. (รอบละ 50 นาที จำนวนผู้เข้าร่วมต่อรอบ 40 คน)",
      fac: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว",
      major: "สาขาวิชาภาษาอังกฤษ",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1664300347812-00e2b09646c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SHVtYW5pdGllc3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "workshop",
      name: "Taste of BU​: Gourmet & Glow",
      detail:
        "รับฟังข้อมูลเกี่ยวกับหลักสูตรการจัดการการโรงแรม และ 4 Tracks ความสนใจเฉพาะด้าน เลือกเข้าร่วมกิจกรรม 1 ใน 3 กิจกรรม",
      locate: "The Kitchen ชั้น 8 อาคาร Tourism Tower",
      time: "09.00, 10.00, 11.00, 13.00, 14.00, 15.00 (​รอบละ 60 นาที จำนวนคนต่อรอบ 80 คน)",
      fac: "คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว",
      major: "สาขาวิชาการจัดการการโรงแรม",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661604346220-5208d18cb34e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbm9taWNzfGVufDB8fDB8fHww",
      alt: "workshop",
      name: "BU STOCK DETECTOR วิเคราะห์เศรษฐกิจพิชิตหุ้น",
      detail:
        "การจำลองการซื้อ/ขายในตลาดหุ้นโดยใช้ข้อมูลข่าวสารมาวิเคราะห์เพื่อใช้ประกอบการตัดสินใจ ผู้เข้าร่วมจะรับทราบสถานการณ์หรือข่าวสารข้อมูลเพื่อใช้ประกอบในการตัดสินใจซื้อ",
      locate: "Diamond Hall",
      time: "09.00 10.00 11.00 13.00 14.00 15.00 (รอบละ 45 นาที จำนวนคนต่อรอบ 40 คน)",
      fac: "คณะเศรษฐศาสตร์และการลงทุน",
      major: "หลักสูตรเศรษฐศาสตรบัณฑิต",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661369836280-69a59168e9a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVjb25vbWljc3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "workshop",
      name: "FinQuiz by SET",
      detail: "FinQuiz by SET",
      locate: "Diamond Hall",
      time: "09.00, 10.00, 11.00, 13.00, 14.00, 15.00 (​รอบละ 60 นาที จำนวนคนต่อรอบ 80 คน)",
      fac: "คณะเศรษฐศาสตร์และการลงทุน",
      major: "หลักสูตรเศรษฐศาสตรบัณฑิต",
    },
    {
      src: "https://images.unsplash.com/photo-1517309230475-6736d926b979?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaW5hfGVufDB8fDB8fHww",
      alt: "workshop",
      name: "จ้อจีนจับโลก ลองเล่นเป็นนักสื่อสารการตลาดจีน",
      detail:
        "ภายใต้ซุ้มประตูจีนจะมีฉากหลังเป็นเยาวราชที่ Lisa ได้สร้างชื่อเสียงว่าเยาวราชเป็น destination ชื่อดังของโลก เราจะให้นักศึกษาที่โดดเด่นด้านการทำ content นั่งเรียงกัน Live สดผ่าน tiktok เพื่อสร้าง content ต่างๆ ที่เกี่ยวข้องกับจีนโดยยึดความสนใจของนักศึกษาเป็นหลัก",
      locate: "Diamond Hall",
      time: "ไม่มีเวลาเป็นรอบ นักเรียนสามารถ walk in และมาพูดคุยกับพี่ๆ tiktoker ได้เลย (รำนวนคนต่อรอบ 6 คน)",
      fac: "หลักสูตรนานาชาติจีน",
      major: "สาขาวิชาภาษาจีนธุรกิจ",
    },
    {
      src: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaW5hfGVufDB8fDB8fHww",
      alt: "workshop",
      name: "โต๊ะให้คำปรึกษาหลักสูตร",
      detail:
        "แน่นอนว่าอาจเกิดความสับสนในความแตกต่างระหว่างหลักสูตรนานาชาติจีน และสาขาการจัดการระหว่างประเทศ มุ่งเน้นธุรกิจจีน ทางเราจึงมีโต๊ะให้คำปรึกษาหลักสูตรเพื่อช่วยนักเรียนให้สามารถเลือกเส้นทางที่ตนเองสนใจและเหมาะสมกับแต่ละคนได้",
      locate: "Daimond Hall",
      time: "ตลอดทั้งวัน (รอบละ 30 นาที จำนวนคนต่อรอบ 8 คน)",
      fac: "หลักสูตรนานาชาติจีน",
      major: "สาขาวิชาภาษาจีนธุรกิจ",
    },
    {
      src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhlJTIwbW92aWV8ZW58MHx8MHx8fDA%3D",
      alt: "workshop",
      name: "ทักษะการแสดงภาพยนตร์ขั้นพื้นฐาน",
      detail:
        "Workshop นี้ น้องๆ จะได้เรียนรู้หลักการพื้นฐานการแสดงภาพยนตร์อย่างเต็มที่ ไม่ว่าจะซีนอารมณ์ไหนหลังจากนี้ก็เข้าใจได้หมด ได้ลองแสดงอารมณ์เหมือนนักแสดงคนหนึ่ง เป็นประสบการณ์ดีๆ ที่ทำให้เราซึมซับการแสดงได้ลึกซึ้งมากยิ่งขึ้น",
      locate: "C10-201",
      time: "10:00, 13:00 (จำนวน 25 คนต่อรอบ รอบละ 120 นาที)",
      fac: "คณะดิจิทัลมีเดียและศิลปะภาพยนตร์",
      major: "สาขาวิชาภาพยนตร์",
    },
    {
      src: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VGhlJTIwbW92aWV8ZW58MHx8MHx8fDA%3D",
      alt: "workshop",
      name: "สาธิตการผลิตรายการ 'วาไรตี้ผีบอก'",
      detail:
        "แฟนคลับรายการผีๆ  ต้องมาลอง Workshop นี้ สาธิตการผลิตรายการประเภทวาไรตี้ โดยแบ่งรายการออกเป็น 3 ช่วง 1. ช่วงแรก คือ ช่วงรายการวิทยุที่ผู้ฟังทางบ้านโทรเข้ามาเล่าเรื่องผี 2. ช่วงสอง คือ ละครที่ทำจากเรื่องเล่า 3. ช่วงสาม คือ ช่วงสัมภาษณ์แขกรับเชิญเป็นบุคคลที่นิยมในหมู่วัยรุ่น และได้ทดลองฝึกปฏิบัติในทักษะการผลิตรายการที่ตนเองสนใจ",
      locate: "C3-104 (Studio 3)",
      time: "9.00, 10.00, 11.00, 13.00, 14.00, 15.00 น. (รอบละ 50 นาที จำนวนคนต่อรอบ 150 คน)",
      fac: "คณะนิเทศศาสตร์",
      major: "สาขาวิชาวิทยุกระจายเสียง วิทยุโทรทัศน์ และการผลิตสื่อสตรีมมิ่ง",
    },
    {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29tbXVuaWNhdGlvbiUyMEFydHN8ZW58MHx8MHx8fDA%3D",
      alt: "workshop",
      name: "CNM Acadream To be pro, to be shine ​(Seminar)",
      detail:
        "การสัมภาษณ์พูดคุยกับ Influencer ทั้งที่เป็นศิษย์เก่าและศิษย์ปัจจุบัน เช่น พี่ธรรมชาติ, Rennyko, แก้งนางฟ้า, สไปร์ท SPD, พร้อม ราชภัทร etc.​ เพื่อสร้างแรงบันดาลใจ จุดประกายความฝันให้กับเหล่า Dreamers ทั้งหลาย ได้รับรู้เรื่องราว ประสบการณ์เกี่ยวกับการเรียนในรั้วมหาวิทยาลัยกรุงเทพ รวมถึงมุมมองการทำงานที่หลากหลาย",
      locate: "ห้องปองทิพย์ 3",
      time: "9.00, 11.00, 13.00, 15.00 น. (รอบละ 50 นาที จำนวนคนต่อรอบ 200 คน)",
      fac: "คณะนิเทศศาสตร์",
      major: "สาขาการสื่อสารและสื่อใหม่",
    },
    {
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENvbW11bmljYXRpb24lMjBBcnRzfGVufDB8fDB8fHww",
      alt: "workshop",
      name: "Fashion collage",
      detail:
        "เพราะ Fashion ไม่ได้มีแค่เสื้อผ้า เตรียมพบกับ Workshop Shoe Sculpture สำหรับการทำรองเท้าในสไตล์ของตัวเอง เป็นรองเท้าหนึ่งเดียวในโลก เปิดประสบการณ์ให้น้อง ๆ ได้ลองสร้างสรรค์ชิ้นงานเป็นของตัวเอง ด้วยการขึ้นทรงรองเท้าจากกระดาษด้วยวิธี Collage",
      locate: "ห้อง RB1-209",
      time: "10.00, 11.00, 13.00, 14.00 น. (รอบละ 60 นาที จำนวนคนต่อรอบ 30 คน)",
      fac: "คณะศิลปกรรมศาสตร์",
      major: "สาขาวิชาการออกแบบแฟชั่น",
    },
    {
      src: "https://images.unsplash.com/photo-1600693437693-e3eb10df2677?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "workshop",
      name: "2D Composition Design",
      detail:
        "workshop ที่ได้เรียนรู้ทักษะพื้นฐานทางการออกแบบนิเทศศิลป์ การจัด 2D Composition ในโจทย์ที่เปิดกว้าง ให้น้อง ๆ ได้ทดลองสัมผัสประสบการณ์ในการสร้างสรรค์ผลงานจริง เป็นโอกาสได้ฝึกทดลองจัดองค์ประกอบของงานออกแบบ ที่ถือเป็นพื้นฐานทางการออกแบบของสาขา Communication Design",
      locate: "ห้อง RB1-103",
      time: "10.00, 10.30, 11.30, 13.00, 13.30, 14.00, 14.30 น. (รอบละ 30 นาที)",
      fac: "คณะศิลปกรรมศาสตร์",
      major: "สาขาวิชาการออกแบบนิเทศศิลป์",
    },
    {
      src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "workshop",
      name: "Architectural Exhibition",
      detail:
        "การจัดนิทรรศการผลงานนักศึกษาคณะสถาปัตยกรรมศาสตร์  ทั้ง Architecture และ Interior ตั้งแต่ชั้นปีที่ 1 จนถึงจบการศึกษา แสดงให้เห็นถึงการเดินทางของนักศึกษาจากความหลงใหลสู่ความเป็น Professional",
      locate: "B5",
      time: "9.30-16.00 น. (รอบละ 15 นาที)",
      fac: "คณะสถาปัตยกรรมศาสตร์",
      major: "",
    },
    {
      src: "https://images.unsplash.com/photo-1520587393050-c5298e1a8486?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D",
      alt: "workshop",
      name: "การนำเสนอแนวความคิดการออกแบบด้วยเทคนิค Collage",
      detail:
        "Workshop ที่จะมาช่วยเสริมจินตนาการของน้องๆ ให้กว้างมากยิ่งขึ้น ด้วยการใช้เทคนิคการปะติด (collage) เพื่อเสนอแนวความคิดเกี่ยวกับมุมมองทางสถาปัตยกรรม ผ่านการตัดภาพจากนิตยสาร เพื่อนำมาประกอบรวมเป็นไอเดียใหม่ ตามแนวคิดของตนเอง",
      locate: "B5 ชั้น 2",
      time: "11.00, 14.00 น. (รอบละ 40 นาที จำนวนคนต่อรอบ 20 คน)",
      fac: "คณะสถาปัตยกรรมศาสตร์",
      major: "สาขาวิชาสถาปัตยกรรม (หลักสูตร 5 ปี)",
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "workshop",
      name: "การพัฒนาเกมด้วย Unreal Engine",
      detail:
        "ชวนน้องเกมเมอร์ตัวจริง ที่อยากไปได้ไกลกว่าแค่เป็นผู้เล่น แต่อยากเป็นผู้สร้าง มาร่วมสัมผัสประสบการณ์ในการพัฒนาเกมของจริง ด้วยโปรแกรม Unreal Engine พร้อมทั้งรับฟังคำแนะนำจากผู้เชี่ยวชาญในอุตสาหกรรมเกี่ยวกับเส้นทางอาชีพในสายงานด้านการพัฒนาเกม​โดยตรง",
      locate: "A1-405",
      time: "ตลอดทั้งวัน (รอบละ 90 นาที จำนวนคนต่อรอบ 80 คน)",
      fac: "คณะเทคโนโลยีสารสนเทศและนวัตกรรม",
      major: "สาขาวิชาเกมและสื่อเชิงโต้ตอบ",
    },
    {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "workshop",
      name: "การพัฒนาแอปพลิเคชัน ด้วย Low-Code Application Platform",
      detail:
        "อยากสร้างแอปเป็นของตัวเองให้หันมาทางนี้ ชวนน้อง ๆ มาเข้าร่วมกิจกรรมที่จะได้รับประสบการณ์ของจริงในการพัฒนาแอปพลิเคชันอย่างง่าย และรวดเร็ว ด้วย Oracle APEX",
      locate: "A1-406",
      time: "11.00, 14.00 (รอบละ 60 นาที จำนวนคนต่อรอบ 40 คน)",
      fac: "คณะเทคโนโลยีสารสนเทศและนวัตกรรม",
      major: "สาขาวิชาเทคโนโลยีสารสนเทศ",
    },
    {
      src: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "workshop",
      name: "การเขียนโปรแกรมปัญญาประดิษฐ์เพื่อตรวจจับวัตถุ",
      detail:
        "ไหนใครชอบโบกมือตามจอตรวจจับอุณหภูมิตามห้าง? อยากรู้กันไหมว่าโปรแกรมเหล่านั้นมีที่มาการทำงานยังไง มาเรียนรู้ของจริงได้ที่ Workshop ที่จะพาทุกคนรู้จักการเขียนโปรแกรม image processing และ object detection โดยใช้ AI พาทุกคนได้ลองเขียนโปรแกรมของจริง มีผลงาน AI เป็นของตัวเอง",
      locate: "B4-102",
      time: "11.30, 14.30 (รอบละ 60 นาที จำนวนผู้เข้าร่วมต่อรอบ 40 คน)",
      fac: "คณะวิศวกรรมศาสตร์",
      major: "สาขาวิชาวิศวกรรมปัญญาประดิษฐ์และวิทยาการข้อมูล",
    },
    {
      src: "https://images.unsplash.com/photo-1580983703451-bf6bb44a9917?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "workshop",
      name: "การสร้างตัวละครด้วย Generative AI",
      detail:
        "ใครอยากที่อยากสร้างตัวละครเกม ตัวการ์ตูนเป็นของตัวเองโดยเฉพาะ แต่ฝีมือทางศิลปะอาจจะไปไม่ถึง อย่าเพิ่งท้อไป เพราะ Workshop นี้ จะเปิดโอกาสให้น้อง ๆ ที่สนใจการปั้นตัวละคร มาใช้วิธีเทคโนโลยี AI ฝึกสร้างตัวละครขึ้นมาด้วยตัวเอง ไม่ว่าจะภาพกราฟิกก็สามารถทำได้ ให้น้อง ๆ ได้ของพิเศษสำหรับประกอบใน Portfolio การสร้างเกม การ์ตูน ของตัวเองได้เลย",
      locate: "B4-102",
      time: "10.00, 13.00 น. (รอบละ 60 นาที จำนวนผู้เข้าร่วมต่อรอบ 40 คน)",
      fac: "คณะวิศวกรรมศาสตร์",
      major: "สาขาวิชาวิศวกรรมมัลติมีเดียและเอ็นเตอร์เทนเมนต์",
    },
    {
      src: "https://images.unsplash.com/photo-1501514799070-290ae1c889fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJuYXRpb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "workshop",
      name: "Business Idea Creation",
      detail:
        "Step up to the Entrepreneurial Challenge and work with designated existing products from current BUSEM students. This challenge will cover the four crucial components of a basic business plan: Who, What, How, and USP (Unique Selling Proposition)",
      locate: "C6, Theater room",
      time: "10:00, 11:30, 13:00, 14:30 (30 Min. 20 Persons/round)",
      fac: "หลักสูตรนานาชาติ",
      major: "Entrepreneurship",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1670517734231-0c48ccbaf179?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "workshop",
      name: "Design Your Own Event",
      detail:
        "Experience a dynamic activity. Students will be organized into teams of 3-4 to collaboratively plan an exciting event of their choice. Following the planning phase, each team will draw a card that will serve as inspiration for creating and delivering a captivating story that effectively advertises their event",
      locate: "Galaxy room, 3rd-floor, Library building",
      time: "10.00, 11.00, 13.30 and 14.30 (30 Min, 20 Persons/round)",
      fac: "หลักสูตรนานาชาติ",
      major: "Media and Communication",
    },
  ];

  const filteredWorkshops = workshops.filter(
    (workshop) => !filterFac || workshop.fac === filterFac
  );

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
    <div>
      <div className="fixed w-full top-0 z-50">
        <Navbar />
      </div>
      {/* การแสดงข้อความ */}
      <h1>{displayedText}</h1>

      <div className="flex-grow">
        <div className="container mx-auto px-4 py-8 pt-40">
          <h1 className="text-4xl text-white font-semibold">{displayedText}</h1>{" "}
          {/* แสดงข้อความ */}
          <p className="text-white mt-5 mb-2 text-[14px]">
            เตรียมมาล่าใบเซอร์กันได้เลย! BU Open House 2024 ไฮไลท์พิเศษในปีนี้
            มาพร้อมกับกิจกรรมการอบรมเชิงปฏิบัติการ อัปสกิลและจุดประกายความชอบ
            การันตีความโปรครบทุกด้าน พร้อมรับเกียรติบัตรไว้ใส่ในแฟ้มสะสมผลงาน
            Portfolio จาก ม.กรุงเทพ และพันธมิตรที่ร่วมจัด Workshop
          </p>
        </div>

        {/* ปุ่มกรองคณะ */}
        <div className="flex flex-wrap px-20 gap-4 mb-10">
          <button
            className="bg-gray-800 border border-gray-200 hover:bg-gray-200 h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4"
            onClick={() => setFilterFac(null)} // หรือใช้ค่าอื่นที่บ่งบอกว่าแสดงทั้งหมด
          >
            <h1 className="text-white hover:text-black text-[13px] font-light">
              ทั้งหมด
            </h1>
          </button>

          <button
            className="bg-gray-800 border border-gray-200 hover:bg-gray-200 h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4"
            onClick={() => setFilterFac("คณะดิจิทัลมีเดียและศิลปะภาพยนตร์")}
          >
            <h1 className="text-white hover:text-black text-[13px] font-light">
              คณะดิจิทัลมีเดียและศิลปะภาพยนตร์
            </h1>
          </button>

          <button
            className="bg-gray-800 border border-white hover:bg-gray-200 h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4"
            onClick={() => setFilterFac("คณะศิลปกรรมศาสตร์")}
          >
            <h1 className="text-white hover:text-black text-[13px] font-light">
              คณะศิลปกรรมศาสตร์
            </h1>
          </button>

          <button
            className="bg-gray-800 border border-white hover:bg-gray-200 h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4"
            onClick={() => setFilterFac("คณะสถาปัตยกรรมศาสตร์")}
          >
            <h1 className="text-white hover:text-black text-[13px] font-light">
              คณะสถาปัตยกรรมศาสตร์
            </h1>
          </button>

          <button
            className="bg-gray-800 border border-white hover:bg-gray-200 h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4"
            onClick={() =>
              setFilterFac("คณะการสร้างเจ้าของธุรกิจและการบริหารกิจการ")
            }
          >
            <h1 className="text-white hover:text-black text-[13px] font-light">
              คณะการสร้างเจ้าของธุรกิจและการบริหารกิจการ
            </h1>
          </button>

          <button
            className="bg-gray-800 border border-white hover:bg-gray-200 h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4"
            onClick={() => setFilterFac("คณะนิติศาสตร์")}
          >
            <h1 className="text-white hover:text-black text-[13px] font-light">
              คณะนิติศาสตร์
            </h1>
          </button>

          <button
            className="bg-gray-800 border border-white hover:bg-gray-200 h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4"
            onClick={() => setFilterFac("คณะบัญชี")}
          >
            <h1 className="text-white hover:text-black text-[13px] font-light">
              คณะบัญชี
            </h1>
          </button>

          <button
            className="bg-gray-800 border border-white hover:bg-gray-200 h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4"
            onClick={() => setFilterFac("คณะบริหารธุรกิจ")}
          >
            <h1 className="text-white hover:text-black text-[13px] font-light">
              คณะบริหารธุรกิจ
            </h1>
          </button>

          <button
            className="bg-gray-800 border border-white hover:bg-gray-200 h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4"
            onClick={() => setFilterFac("คณะเศรษฐศาสตร์และการลงทุน")}
          >
            <h1 className="text-white hover:text-black text-[13px] font-light">
              คณะเศรษฐศาสตร์และการลงทุน
            </h1>
          </button>

          <button
            className="bg-gray-800 border border-white hover:bg-gray-200 h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4"
            onClick={() =>
              setFilterFac("คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว")
            }
          >
            <h1 className="text-white hover:text-black text-[13px] font-light">
              คณะมนุษยศาสตร์และการจัดการการท่องเที่ยว
            </h1>
          </button>

          <button
            className="bg-gray-800 border border-white hover:bg-gray-200 h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4"
            onClick={() => setFilterFac("หลักสูตรนานาชาติจีน")}
          >
            <h1 className="text-white hover:text-black text-[13px] font-light">
              หลักสูตรนานาชาติจีน
            </h1>
          </button>

          <button
            className="bg-gray-800 border border-white hover:bg-gray-200 h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4"
            onClick={() => setFilterFac("คณะเทคโนโลยีสารสนเทศและนวัตกรรม")}
          >
            <h1 className="text-white hover:text-black text-[13px] font-light">
              คณะเทคโนโลยีสารสนเทศและนวัตกรรม
            </h1>
          </button>

          <button
            className="bg-gray-800 border border-white hover:bg-gray-200 h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4"
            onClick={() => setFilterFac("คณะวิศวกรรมศาสตร์")}
          >
            <h1 className="text-white hover:text-black text-[13px] font-light">
              คณะวิศวกรรมศาสตร์
            </h1>
          </button>

          <button
            className="bg-gray-800 border border-white hover:bg-gray-200 h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4"
            onClick={() => setFilterFac("คณะนิเทศศาสตร์")}
          >
            <h1 className="text-white hover:text-black text-[13px] font-light">
              คณะนิเทศศาสตร์
            </h1>
          </button>

          <button
            className="bg-gray-800 border border-white hover:bg-gray-200 h-[35px] w-auto rounded-[20px] flex items-center justify-center p-4"
            onClick={() => setFilterFac("หลักสูตรนานาชาติ")}
          >
            <h1 className="text-white hover:text-black text-[13px] font-light">
              หลักสูตรนานาชาติ
            </h1>
          </button>
        </div>

        {/* Display filtered workshops */}
        <div className="container sm:px-8 lg:px-0 mx-auto mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop, index) => (
              <WorkshopCard
                key={index}
                src={workshop.src}
                alt={workshop.alt}
                name={workshop.name}
                detail={workshop.detail}
                fac={workshop.fac}
                major={workshop.major}
                locate={workshop.locate}
                time={workshop.time}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
