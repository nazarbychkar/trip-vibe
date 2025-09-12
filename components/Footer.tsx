"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-mudblue text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={180}
              height={60}
              className="h-auto"
            />
          </Link>

          {/* Social icons */}
          <div className="flex gap-6">
            <Link href="https://t.me/+SmTyR-SXMzk5NThi" target="_blank">
              <Image
                src="icons/telegram.svg"
                alt="Telegram"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61557387382751"
              target="_blank"
            >
              <Image
                src="icons/facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="https://www.instagram.com/tripvibe.travel?igsh=ZjF5N2dwODVjZm52"
              target="_blank"
            >
              <Image
                src="icons/instagram.svg"
                alt="Instagram"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom section */}
        <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed">
          {/* Contact info */}
          <div>
            <p>
              12 SAXBY COURT
              <br />
              SAXBY CLOSE
              <br />
              BARNHAM
            </p>
            <p>PO22 0GW</p>
            <p className="mt-2">
              <strong>Phone:</strong>{" "}
              <Link href="tel:+447520665098" className="hover:underline">
                +44 7520 665098
              </Link>
            </p>
            <p>
              <strong>Work schedule</strong> Mon-Sun from 10:00 to 21:00
            </p>
          </div>

          {/* Extra info */}
          <div>
            <p>
              <strong>Work with us:</strong> info.uk@tripvibe.travel
            </p>
            <p>
              <strong>Partnership:</strong> info.uk@tripvibe.travel
            </p>
          </div>

          <div>
            <p>Payments:</p>
            <div className="flex flex-row gap-2">
              <Image
                src="/payments/American_Express_logo_(2018).svg.png"
                alt="american express"
                width={50}
                height={50}
              />
              <Image
                src="/payments/Maestro_Logo.svg.webp"
                alt="maestro"
                width={75}
                height={50}
              />
              <Image
                src="/payments/MasterCard_Logo.svg.png"
                alt="mastercard"
                width={75}
                height={50}
              />
              <Image
                className="bg-white rounded-xl"
                src="/payments/Visa_Inc._logo.svg"
                alt="visa"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
