// 1640705727 Itsara Klongklaew
import Image from "next/image";

export default function SpeakerCard({ src, alt, name, profile, locate, time}:{ src:any, alt:string, name:string, profile:string, locate:string, time:string}) {
  return (
    
    <div className="relative bg-black border border-[#BEBEBE] inline-block w-[250px] h-[350px] rounded-[20px]">
    {/* รูปภาพ */}
    <Image
      className="rounded-t-[20px] object-cover w-full h-5/6"
      src={src}
      alt={alt}
    />
  
    {/* ข้อความ */}
    <p className="text-white text-[20px] flex justify-center mt-3">{name}</p>
  
    {/* Popup ที่จะเด้งขึ้นมาเมื่อ hover */}
    <div className="absolute top-0 left-0 h-full bg-black bg-opacity-70 flex flex-col justify-center p-5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[20px]">
      <p className="text-white text-[16px] font-light mb-10">{profile}</p>
      <p className="text-white text-[16px] font-light">
        <span className="font-medium">เวลา : </span>{time}
      </p>
      <p className="text-white text-[16px] font-light">
        <span className="font-medium">สถานที่ : </span>{locate}
      </p>
    </div>
  </div>
  
  );
}
