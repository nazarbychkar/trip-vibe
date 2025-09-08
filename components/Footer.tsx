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
              c. Kyiv, metro station Poznyaky
              <br />
              Aladdin Shopping Center, -1 floor
            </p>
            <p>(near the Appollo club)</p>
            <p className="mt-2">
              <strong>Phone:</strong>{" "}
              <Link href="tel:+380444999722" className="hover:underline">
                +38 044 499 97 22
              </Link>
            </p>
            <p>
              <strong>Work schedule</strong> Mon-Sun from 10:00 to 21:00
            </p>
          </div>

          {/* Extra info */}
          <div>
            <p>
              <strong>Work with us:</strong> tripvibe@ukr.net
            </p>
            <p>
              <strong>Partnership:</strong> tripvibe@ukr.net
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
