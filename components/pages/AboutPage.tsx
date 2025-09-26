"use client";

import ContactDrawer from "@/components/ContactDrawer";
import { useState } from "react";

export default function AboutPage() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  

  return (
    <div>
      {/* <section className="relative bg-red-500 text-white h-[80vh] flex items-end ">
        <div className="container mx-auto px-4 max-w-6xl pb-12">
          <div className="max-w-xl ">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
              We create unforgettable memories
            </h1>
            <p className="text-lg md:text-xl mb-6">
              We don&#39;t just organize trips, we create unique and
              unforgettable experiences that remain in the heart of every
              traveler forever
            </p>

            <div
              className="inline-block"
              data-b24-form="click/114/he03qc"
              data-skip-moving="true"
            >
              <a
                onClick={() => setDrawerOpen(true)}
                className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-red-500 transition cursor-pointer"
              >
                Book a tour
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-red-500 uppercase tracking-wide text-sm font-semibold mb-2">
              Why choose us?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We are the best in tourism
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              TripVibe is a team of dedicated professionals working in the field
              of tourism for over 10 years. We have come together to create a
              new, 100% British brand that not only understands the needs of
              British people, but also creates trips that turn into
              unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-terracotta rounded-2xl shadow-lg p-20 ">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-white">
                We are always happy to help you!
              </h2>
              <p className="mt-3 text-white">
                Professionals will advise you in a matter of minutes!
              </p>
            </div>

            {/* Button */}
            <div>
              <a
                onClick={() => setDrawerOpen(true)}
                href="#Form"
                className="inline-block px-6 py-3 bg-mudblue text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Choose a tour
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative bg-red-500 text-white h-[80vh] flex items-end">
        <div className="container mx-auto px-4 max-w-6xl pb-12">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
              Any questions left?
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Need help? Contact our support team and we will respond to your
              request as soon as possible!
            </p>

            <div
              className="inline-block"
              data-b24-form="click/114/he03qc"
              data-skip-moving="true"
            >
              <a className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-red-500 transition cursor-pointer">
                Write
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <ContactDrawer open={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}
