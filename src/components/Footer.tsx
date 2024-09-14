import Link from "next/link";
import React from "react";
import Image from "next/image";
import facebook from "../Images/facebook.webp";
import instagram from "../Images/instagram.png";
import website from "../Images/website.png";
import sponsor from "../Images/sponsor.png";
import image from "../Images/image.png";
import phone from "../Images/phone.png";
import speaker from "../Images/speaker.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 text-[14px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ข้อมูลที่อยู่ */}
          <div className="text-[12px]">
            <p>9, 1 Phahonyothin Rd, Khlong Nueng,</p>
            <p className="mb-5">Khlong Luang, Pathum Thani 12120</p>
            <p className="text-[10px] text-gray-300 mt-11">
              Copyright © 2024 Bangkok University. All rights reserved.
            </p>
          </div>

          {/* ลิงก์ Speaker, Schedule, Sponsor, Contact */}
          <div className="flex flex-col md:flex-row md:justify-end gap-16 text-[12px]">
            <div className="flex flex-col  space-y-2 w-full md:w-auto">
              <div className="flex items-center gap-3">
                <Image src={speaker} alt="speaker" width={15} />
                <Link
                  href="/speaker"
                  className="text-white hover:text-gray-400"
                >
                  Speaker
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <Image src={image} alt="image" width={15} />
                <Link
                  href="/gallery"
                  className="text-white hover:text-gray-400"
                >
                  Gallery
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <Image src={sponsor} alt="sponsor" width={16} />

                <Link
                  href="/sponsor"
                  className="text-white hover:text-gray-400"
                >
                  Sponsor
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <Image src={phone} alt="contact" width={15} />
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-400"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:w-auto space-y-2 text-[12px]">
              <div className="flex items-center gap-3">
                <Image src={facebook} alt="facebook" width={18} />
                <Link
                  href="https://www.facebook.com/bangkokuniversity"
                  className="text-white hover:text-gray-400"
                >
                  Bangkok University
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <Image src={instagram} alt="instagram" width={18} />
                <Link
                  href="https://www.instagram.com/bangkok_bu/"
                  className="text-white hover:text-gray-400"
                >
                  @Bangkok_BU
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <Image src={website} alt="website" width={18} />
                <Link
                  href="https://www.bu.ac.th/th"
                  className="text-white hover:text-gray-400"
                >
                  Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
