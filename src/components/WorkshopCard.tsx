import Image from "next/image";

export default function SpeakerCard({ src, alt, name, detail, fac, major, locate, time}:{ src:any, alt:string, detail:string, fac:string, major:string, name:string, locate:string, time:string}) {
  return (

    <div className="relative bg-black border border-[#BEBEBE] inline-block w-[398px] h-[260px] rounded-[20px]">
    {/* รูปภาพ */}

    <Image
        className="object-cover w-full h-5/6 rounded-t-[20px]"
        src={src}
        alt={alt}
        width={398} // Specify the width
        height={260} // Specify the height
      />
  
    {/* ข้อความ */}
    <p className="mx-2 text-white text-[14px] flex justify-center mt-3">{name}</p>
  
    {/* Popup ที่จะเด้งขึ้นมาเมื่อ hover */}
    <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-100 flex flex-col justify-center p-5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[20px]">
      <p className="text-white text-[14px]">{fac}</p>
      <p className="text-white text-[12px] mb-2">{major}</p>  
      <div className="h-[0.5px] bg-[#BEBEBE] mb-2"></div>

      <p className="text-white text-[12px] font-light mb-3">{detail}</p>

      <p className="text-white text-[12px] font-light">
        <span className="font-medium">เวลา : </span>{time}
      </p>
      
      <p className="text-white text-[12px] font-light">
        <span className="font-medium mb-3">สถานที่ : </span>{locate}
      </p>
    </div>


    {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10"> */}
         
              

  </div>
  );
}
