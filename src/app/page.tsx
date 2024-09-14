import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// test pull
// comment
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        
        <div className="container mx-auto px-4 py-8 pt-40">
        
          <h1>การแต่งกาย</h1>
        
        </div>
      </main>
      <Footer />
    </div>
  );
}

