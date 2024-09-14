import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function about() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
      <div className="container mx-auto px-4 py-8 pt-40">
          <h1 className="text-2xl text-white font-bold">
            Welcome to the about Page
          </h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
