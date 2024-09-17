import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";

export default function sponsor() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow space-y-20">
        <div className="container mx-auto pt-40">
          <p className="flex justify-center text-white font-medium text-[25px]">
            ขอขอบคุณผู้สนับสนุน
          </p>

          <p className="flex justify-center text-white font-medium text-[25px]">
            Thank you for your support
          </p>
        </div>
         
        <div className="px-20 flex items-center flex-wrap gap-x-[159px] gap-y-20 pb-20">
          <Image className="transition-transform duration-300 hover:scale-110" src="https://companieslogo.com/img/orig/TRUE.BK.D-b90178f3.png?t=1720244494" alt="true corporation" width={200} height={50}/>
          <Image className="bg-white rounded-[10px] p-6 transition-transform duration-300 hover:scale-110" src="https://www.coca-cola.com/content/dam/onexp/th/th/home-images/thainamthip.png" alt="true corporation" width={200} height={50}/>
          <Image className="transition-transform duration-300 hover:scale-110" src="https://muzikmoverecords.com/wp-content/uploads/2018/01/Muzik-Move-Rec.png" alt="true corporation" width={200} height={50}/>
          <Image className="rounded-[10px] transition-transform duration-300 hover:scale-110" src="https://companieslogo.com/img/orig/PTT-R.BK_BIG.D-31248439.png?t=1720244493" alt="ptt" width={200} height={50}/>
          <Image className="transition-transform duration-300 hover:scale-110" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtS1USAytjB_37LA0tUaUB5k9Jyg5Hk8v3bC0VjxFQ4ecQYmsmWoXTAt-j0rye1MzYOPs&usqp=CAU" alt="ptt" width={200} height={50}/>
          <Image className="rounded-[10px] transition-transform duration-300 hover:scale-110" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVS8O24Mtkf_GJwvGQMLZMKPMBcuSdBH1H1Q&s" alt="ptt" width={200} height={50}/>
          <Image className="rounded-[10px] transition-transform duration-300 hover:scale-110" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQklTxikBkF2LRNlfft18rYP_3S9AxRZA1-TQ&s" alt="ptt" width={200} height={50}/>
          <Image className="bg-white p-10 rounded-[10px] transition-transform duration-300 hover:scale-110" src="https://img.wongnai.com/p/1920x0/2019/12/26/9ceb4793cb684b1595d25866d581e145.jpg" alt="ptt" width={200} height={120}/>
          <Image className="rounded-[10px] p-2 transition-transform duration-300 hover:scale-110" src="https://images.seeklogo.com/logo-png/52/1/lactasoy-logo-png_seeklogo-527322.png" alt="ptt" width={200} height={50}/>
          <Image className="transition-tr transform duration-300 hover:scale-110" src="https://www.totalbeveragesolution.com/wp-content/uploads/Singha-NoSubline_400x400_white.png" alt="singha" width={200} height={50}/>
          <Image className="bg-white p-8 rounded-[10px] transition-tr transform duration-300 hover:scale-110" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/%E0%B9%81%E0%B8%AA%E0%B8%99%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B8%B4-%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94-%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%8A%E0%B8%99-logo-th.jpg" alt="ptt" width={200} height={50}/>
          <Image className="bg-white rounded-[10px] p-4 transition-transform duration-300 hover:scale-110" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfg9qiJvWMs5_F2h1CCt0y1SLwyL0QLwuPQ&s" alt="ptt" width={200} height={20}/>
          <Image className="rounded-[10px] transition-tr transform duration-300 hover:scale-110" src="https://store-speedtree-com.exactdn.com/site-assets/uploads/Unity-Logo-White.png?strip=all&lossy=1&quality=73&w=2560&ssl=1" alt="ptt" width={200} height={50}/>
          <Image className="transition-tr transform duration-300 hover:scale-110" src="https://www.pngkey.com/png/full/881-8818836_shop-now-vans-logo-white-png.png" alt="ptt" width={200} height={20}/>
          <Image className="rounded-[10px] transition-tr transform duration-300 hover:scale-110" src="https://pngimg.com/d/gopro_logo_PNG12.png" alt="ptt" width={200} height={50}/>
          <Image className="rounded-[10px] transition-tr transform duration-300 hover:scale-110" src="https://www.depa.or.th/storage/app/media/Image%20File/depa%20Logo%20web-011.png" alt="ptt" width={200} height={50}/>
        </div>


      </main>
      <Footer />
    </div>
  );
}
