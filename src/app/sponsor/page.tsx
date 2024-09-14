import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";

export default function sponsor() {
  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      
    <div className="container mx-auto px-4 py-8 pt-40">      
        <h1 className="text-white font-bold">Welcome to the sponsor page</h1>
      </div>
    </main>
    <Footer/>
  </div>
  );
}
