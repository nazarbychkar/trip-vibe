import Image from "next/image";

export default function Home() {
  const features = [
    {
      img: "https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65afd5f52cb2e02b00c0ba68_verified.svg",
      alt: "Warranty Icon",
      title: "Professionalism and Experience",
      text: "Our team has over 10 years of experience in tourism. We are experts who know how to make your trip the best it can be.",
    },
    {
      img: "https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65afd5f52cb2e02b00c0ba69_cart.svg",
      alt: "Shopping Cart Icon",
      title: "Digitalization and Convenience",
      text: "We use modern technologies to ensure maximum convenience in booking and tracking trips. TripVibe is not just a trip, it is an efficient and convenient service at every stage of your vacation.",
    },
    {
      img: "https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65afd5f52cb2e02b00c0ba6a_transport.svg",
      alt: "Delivery Icon",
      title: "Comprehensive Support",
      text: "TripVibe is always available 24/7. Our team is ready to provide you with full support and resolve all your questions or misunderstandings at any time of the day.",
    },
    {
      img: "https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65afd5f52cb2e02b00c0ba6b_chat-alt.svg",
      alt: "Service Icon",
      title: "Personal Approach",
      text: "We understand that every traveler is unique. TripVibe offers flexible approaches and personalized itineraries, taking into account your needs and desires.",
    },
  ];

  return (
    <main>
      <section className="relative bg-red-500 text-white h-[80vh] flex items-end">
        <div className="container mx-auto px-40 pb-12">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
              We create unforgettable memories
            </h1>
            <p className="text-lg md:text-xl mb-6">
              We don't just organize trips, we create unique and unforgettable
              experiences that remain in the heart of every traveler forever
            </p>

            {/* Bitrix24 button */}
            <div
              className="inline-block"
              data-b24-form="click/114/he03qc"
              data-skip-moving="true"
            >
              <a className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-red-500 transition cursor-pointer">
                Book a tour
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
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
              new, 100% Ukrainian brand that not only understands the needs of
              Ukrainians, but also creates trips that turn into unforgettable
              memories.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <Image src={f.img} alt={f.alt} width={60} height={60} />
                <h3 className="text-lg font-bold mt-4 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto px-45">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-terracotta rounded-2xl shadow-lg p-20 ">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-white">
                Ми завжди раді допомогти вам!
              </h2>
              <p className="mt-3 text-white">
                Професіонали проконсультують вас за лічені хвилини!
              </p>
            </div>

            {/* Button */}
            <div>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-mudblue text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Підібрати тур
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-red-500 text-white h-[80vh] flex items-end">
        <div className="container mx-auto px-40 pb-12">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
              Any questions left?
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Need help? Contact our support team and we will respond to your
              request as soon as possible!
            </p>

            {/* Bitrix24 button */}
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
      </section>
    </main>
  );
}
