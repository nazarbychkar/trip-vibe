"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkStyle =
    "text-white text-xl px-4 py-2 rounded-md hover:bg-mudblue transition";

  return (
    <header className="shadow-md bg-terracotta">
      <nav className="flex justify-center items-center gap-8  py-5">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 mx-20">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={25}
            className="max-w-[150px]"
            priority
          ></Image>
        </Link>

        {/* Phone */}
        <Link href="tel:+380444999722" className="block text-xl md:hidden">
          📞
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex gap-6">
          <Link href="/" className={linkStyle}>
            Home
          </Link>
          <Link href="/about" className={linkStyle}>
            About
          </Link>
          <Link href="/#offers" className={linkStyle}>
            Offers
          </Link>
          <Link href="/#destinations" className={linkStyle}>
            Destinations
          </Link>
          <Link href="/contacts" className={linkStyle}>
            Contacts
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:block lg:hidden text-2xl"
        >
          ☰
        </button>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg p-4 flex flex-col gap-4">
            <Link
              className={linkStyle}
              href="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className={linkStyle}
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              className={linkStyle}
              href="/#offers"
              onClick={() => setMobileMenuOpen(false)}
            >
              Offers
            </Link>
            {/* FIX: how to redirect to home and then to anchor */}
            <Link
              className={linkStyle}
              href="/#destinations"
              onClick={() => setMobileMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link
              className={linkStyle}
              href="/contacts"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacts
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
