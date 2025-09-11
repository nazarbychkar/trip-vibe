"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // base styles
import Image from "next/image";

export default function HeroCarousel({
  onSlideClick,
}: {
  onSlideClick?: () => void;
}) {
  const slides = [
    {
      img: "/mediaLocal/vueaxnlv/easyjet-2026-web-desktop-1920x480.png",
      alt: "EJND",
      link: "https://www.haystravel.co.uk/holidays/offers/easyjet-holidays/",
    },
    {
      img: "/mediaLocal/ewff1npx/pre-lates-web-1920x48012.webp",
      alt: "Last Minute Holidays",
      link: "https://www.haystravel.co.uk/holidays/last-minute-holidays/",
    },
    {
      img: "/mediaLocal/4yip5cfc/54762900588_0a78e48076_o.webp",
      alt: "Jet2holidays",
      link: "https://www.haystravel.co.uk/holidays/offers/jet2holidays/",
    },
    {
      img: "/mediaLocal/thujrn2u/fx-card_summer-25-1920x480-1.webp",
      alt: "Travel Money Card",
      link: "https://www.haystravel.co.uk/travel-products/travel-money-card/",
    },
    {
      img: "/mediaLocal/t0bjke2g/web-1920x480-3.webp",
      alt: "HTMC Rate Sale",
      link: "https://www.haystravel.co.uk/travel-products/travel-money-card/",
    },
    {
      img: "/mediaLocal/nl3fnbj4/ntc1920x480-banner-1.webp",
      alt: "New to Cruise",
      link: "https://hayscruise.co.uk/new-to-cruise-2025",
    },
  ];

  return (
    <section className="relative">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 4000,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
          speed: 800,
        }}
        aria-label="Hero Carousel"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <a
              href="#Form"
              className="block relative"
              onClick={(e) => {
                e.preventDefault(); // prevent navigation
                onSlideClick?.(); // open the drawer
              }}
            >
              <Image
                src={slide.img}
                alt={slide.alt}
                width={1920}
                height={480}
                className="w-full h-[480px] object-cover object-center"
                priority={index === 0}
              />
              {/* Overlay (optional, for captions) */}
              <div className="absolute bottom-0 w-full bg-black/30 p-4 text-white">
                <p className="text-lg font-semibold">{slide.alt}</p>
              </div>
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
