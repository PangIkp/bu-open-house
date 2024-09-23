import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        
      <div className="container mx-auto px-4 py-8 pt-40">        
          <h1 className="text-2xl text-white font-bold">Welcome to the contact Page</h1>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
