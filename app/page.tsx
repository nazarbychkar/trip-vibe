import Image from "next/image";

export default function Home() {
  const testimonials = [
    {
      text: `3 лютого 2024 року відпочивали в Шармі в готелі Гранд Оазіс Резорт, готель і харчування хороше, розташування відмінне, тільки номерам звичайно потрібен ремонт) але як кажуть відпочивати потрібно з гарним настроєм))).`,
      author: "Патенко Яна та Єва",
      avatar:
        "https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65d76f8d9d346d4e460e33e7_photo_2024-02-22_17-35-15.jpg",
      rating: 5,
    },
    {
      text: `Вітаю! Все було супер, хороший готель вибрали, відповідав очікуванням, навіть у деяких моментах їх перевищив. Готель: Domina Coral Вау Aquamrine 5*, летіли з компанією тріп вайб, окреме спасибі менеджеру Михайлової Оксани, що була на зв'язку з нами!) Вже плануємо наступну поїздку!)`,
      author: "Шевченко Катерина",
      avatar:
        "https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65d26b889cb7c96fa58a7bef_Avatar%2005.png",
      rating: 5,
    },
    {
      text: `Дякую агентству тріпвайб та менеджеру Дар'ї. Ваша робота взагалі дуже сподобалась. Вам дійсно окреме дякую за все, що ви для нас робили під час відпочинку. Ви повністю задовольнили всі наші бажання. Готель як для 3-х зірок напевно один з найкращих, все сподобалось, дякуємо.`,
      author: "Ясненко Олександр",
      avatar:
        "https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e09e9e1a1c7036c3b81456_images.jpg",
      rating: 5,
    },
  ];

  return (
    <main>
      <section className="hero-section bg-red-500 py-20">
        <div className="container px-6 w-[80%] mx-auto">
          <div className="hero-wrapper flex justify-between items-end ">
            {/* Left: Heading & Text */}
            <div className="w-[30%] px-10">
              <h1 className="hero-heading text-3xl md:text-5xl font-bold text-white">
                TripVibe - modern Ukrainian travel agency
              </h1>
              <p className="hero-paragraph mt-4 text-lg text-white">
                Your trip is our care. We will organize your vacation from the
                doorstep of your home to the hotel beach. We are in touch 24/7!
              </p>
            </div>

            <div className="flex flex-col w-[25%]">
              {/* Right: Form */}
              <div className="form-wrapper bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Fill out the form now
                </h2>
                <p className="text-gray-600 mb-6">
                  and get 5 relaxation options in just 1 hour!
                </p>

                <form className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Agreement */}
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" required />
                    <span className="text-sm text-gray-600">
                      By clicking the button, I accept the terms of the
                      agreement
                    </span>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-terracotta text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Choose a tour
                  </button>
                </form>
              </div>

              {/* Divider */}
              <div className="text-center my-4 text-gray-500">або</div>
              {/* Phone link */}
              <div className="text-center">
                <a
                  href="tel:+380444999722"
                  className="inline-block bg-terracotta text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Call (044) 499 97 22
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="propozicii" className="wbs-section py-20">
        <div className="wbs-container-2 mx- px-6 w-[80%] mx-auto">
          {/* Section Header */}
          <div className="f-margin-bottom-49 text-center">
            <div className="f-title-wrapper-center-2">
              <div className="f-margin-bottom-16">
                <div className="f-heading-detail-small-2 text-sm font-semibold uppercase">
                  обери відпочинок мрії
                </div>
              </div>
              <h3 className="f-h3-heading-2 text-3xl font-bold">
                Найкращі пропозиції
              </h3>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="wbs-blog-component">
            <div className="wbs-blog-grid grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Blog Item 1 */}
              <a
                href="#Form"
                className="wbs-blog-item w-inline-block block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="wbs-blog-image-wrap">
                  <div className="div-block p-4 bg-blue-100">
                    <h3 className="wbs-blog-title font-bold text-lg">
                      Amphoras Aqua 4
                    </h3>
                    <h3 className="wbs-blog-title _2 text-gray-600">
                      Египет, Шарм-ель-Шейх
                    </h3>
                  </div>
                </div>
                <div className="wbs-blog-info p-4">
                  <div className="html-embed w-embed mb-2">
                    <div className="WBS BlogContentData">
                      ✈️ Виліт:{" "}
                      <span id="departureDate1">12.09.2025 з Кишенева</span>
                    </div>
                  </div>
                  <p className="wbs-blog-content">📅 7 днів, 6 ночей</p>
                  <p className="wbs-blog-content">🍹ALL INCLUSIVE!</p>
                  <p className="wbs-blog-content">
                    Супер-ціна на економічний, але якісний готель у безвітряній
                    бухті.
                  </p>
                  <h3 className="wbs-blog-title _3 font-bold text-xl mt-2">
                    24 780 грн
                  </h3>
                  <div className="wbs-button-link-icon flex items-center mt-4 gap-2 cursor-pointer">
                    <div>Дізнатися більше</div>
                    <img
                      src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65d26c9be138b91fc3495da8_arrow-right.svg"
                      alt="More"
                      className="wbs-button-link-icon-image w-4 h-4"
                    />
                  </div>
                </div>
              </a>

              {/* Blog Item 2 */}
              <a
                href="#Form"
                className="wbs-blog-item w-inline-block block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="wbs-blog-image-wrap _2">
                  <div className="div-block p-4 bg-green-100">
                    <h3 className="wbs-blog-title font-bold text-lg">
                      Cesars Belek 5
                    </h3>
                    <h3 className="wbs-blog-title _2 text-gray-600">
                      Туреччина, Анталія
                    </h3>
                  </div>
                </div>
                <div className="wbs-blog-info p-4">
                  <div className="html-embed w-embed mb-2">
                    <div className="WBS BlogContentData">
                      ✈️ Виліт:{" "}
                      <span id="departureDate2">19.09.2025 з Кишенева</span>
                    </div>
                  </div>
                  <p className="wbs-blog-content">📅 7 днів, 6 ночей</p>
                  <p className="wbs-blog-content">🍹ALL INCLUSIVE!</p>
                  <p className="wbs-blog-content">
                    Кращий варіант за принципом ціна/якість!
                  </p>
                  <h3 className="wbs-blog-title _3 font-bold text-xl mt-2">
                    29 860 грн
                  </h3>
                  <div className="wbs-button-link-icon flex items-center mt-4 gap-2 cursor-pointer">
                    <div>Дізнатися більше</div>
                    <img
                      src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65d26c9be138b91fc3495da8_arrow-right.svg"
                      alt="More"
                      className="wbs-button-link-icon-image w-4 h-4"
                    />
                  </div>
                </div>
              </a>

              {/* Blog Item 3 */}
              <a
                href="#Form"
                className="wbs-blog-item w-inline-block block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="wbs-blog-image-wrap _3">
                  <div className="div-block p-4 bg-yellow-100">
                    <h3 className="wbs-blog-title font-bold text-lg">
                      Semiramis Village 4
                    </h3>
                    <h3 className="wbs-blog-title _2 text-gray-600">
                      Греція, Крит
                    </h3>
                  </div>
                </div>
                <div className="wbs-blog-info p-4">
                  <div className="html-embed w-embed mb-2">
                    <div className="WBS BlogContentData">
                      ✈️ Виліт:{" "}
                      <span id="departureDate3">25.09.2025 з Кишенева</span>
                    </div>
                  </div>
                  <p className="wbs-blog-content">📅 7 днів, 6 ночей</p>
                  <p className="wbs-blog-content">🍹ALL INCLUSIVE!</p>
                  <p className="wbs-blog-content">
                    Власний піщано-гальковий пляж, перша берегова лінія -
                    найкраща ціна!
                  </p>
                  <h3 className="wbs-blog-title _3 font-bold text-xl mt-2">
                    40 190 грн
                  </h3>
                  <div className="wbs-button-link-icon flex items-center mt-4 gap-2 cursor-pointer">
                    <div>Дізнатися більше</div>
                    <img
                      src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65d26c9be138b91fc3495da8_arrow-right.svg"
                      alt="More"
                      className="wbs-button-link-icon-image w-4 h-4"
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Bitrix24 Form Script Placeholder */}
            <div className="w-embed w-script mt-8">
              {/* Here you can add the Bitrix24 form script if needed */}
            </div>
          </div>
        </div>
      </section>

      <section className="support-section py-20 bg-gray-50">
        <div className="container _2 mx-auto px-6">
          {/* Top Wrapper */}
          <div className="support-top-wrapper flex flex-col md:flex-row md:justify-between md:items-start mb-12 gap-6">
            {/* Left: Heading */}
            <div className="support-top-left md:w-1/2">
              <div className="f-heading-detail-small-2 text-sm font-semibold uppercase mb-2">
                ПРО нас
              </div>
              <h2 className="support-top-heading text-3xl md:text-4xl font-bold">
                Досвідчені професіонали
              </h2>
            </div>

            {/* Right: Paragraph */}
            <div className="support-top-right md:w-1/2">
              <p className="text-gray-700">
                Ми - ТріпВайб, команда досвідчених професіоналів у сфері
                туризму, які вже більше 10 років дарують українцям найяскравіші
                моменти у житті! Ми об'єдналися, щоб створити не просто
                тур-агентство, а національний бренд, що вражає своєю
                організованістю, індивідуальним підходом та сервісом!
              </p>
            </div>
          </div>

          {/* Support Squares */}
          <div className="support-wrapper grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="support-column text-center md:text-left">
              <div className="support-square relative p-6 bg-white rounded-lg shadow-lg mb-4">
                <div className="support-square-number text-2xl font-bold mb-2">
                  01
                </div>
                <div className="support-square-text text-lg font-semibold mb-4">
                  10 років
                  <br />
                  досвіду
                </div>
                <img
                  src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0ba3d_Circle.svg"
                  alt="Circle Decoration"
                  className="support-square-image absolute top-2 right-2 w-12 h-12 opacity-50"
                />
              </div>
              <p className="text-gray-700">
                Наш досвід дозволяє нам надавати якісні консультації,
                оптимізувати маршрути та гарантувати вам незабутні та безпечні
                пригоди в усіх куточках світу.
              </p>
            </div>

            {/* Column 2 */}
            <div className="support-column text-center md:text-left">
              <div className="support-square relative p-6 bg-white rounded-lg shadow-lg mb-4">
                <div className="support-square-number text-2xl font-bold mb-2">
                  02
                </div>
                <div className="support-square-text text-lg font-semibold mb-4">
                  Розуміння
                  <br />
                  потреб
                </div>
                <img
                  src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0ba4a_Triangle.svg"
                  alt="Triangle Decoration"
                  className="support-square-image triangle absolute top-2 right-2 w-12 h-12 opacity-50"
                />
              </div>
              <p className="text-gray-700">
                TripVibe - це 100% український бренд, який глибоко розуміє
                потреби наших громадян як у середені країни, так і за кордоном.
              </p>
            </div>

            {/* Column 3 */}
            <div className="support-column text-center md:text-left">
              <div className="support-square relative p-6 bg-white rounded-lg shadow-lg mb-4">
                <div className="support-square-number text-2xl font-bold mb-2">
                  03
                </div>
                <div className="support-square-text text-lg font-semibold mb-4">
                  Онлайн
                  <br />
                  доступ
                </div>
                <img
                  src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0ba4b_Rectangle.svg"
                  alt="Rectangle Decoration"
                  className="support-square-image rectangle absolute top-2 right-2 w-12 h-12 opacity-50"
                />
              </div>
              <p className="text-gray-700">
                Команда TripVibe завжди на зв'язку 24/7, готова організувати
                гнучкі подорожі, як індивідуальні тури, так і пакетні,
                враховуємо будь-які побажання.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wbs-section-overflow py-20 bg-gray-50">
        <div className="wbs-container mx-auto px-6">
          {/* Section Header */}
          <div className="f-section-small">
            <div className="f-container-regular text-center mb-12">
              <div className="f-title-wrapper-center margin-bottom-48">
                <h6 className="f-h6-heading text-sm font-semibold uppercase tracking-wide">
                  Наші партнери
                </h6>
              </div>
            </div>

            {/* Partners Grid */}
            <div className="w-layout-grid f-grid-four-column grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
              <div className="f-logo-block">
                <img
                  src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65d22f9e09a7384187fc0443_joinup.png"
                  alt="JoinUp"
                  width={127}
                />
              </div>

              <div className="f-logo-block">
                <img
                  src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65d230d871047512b6bfaf26_ANEX_Tour_Germanny_Logo_2022.svg.png"
                  alt="ANEX Tour"
                  width={117}
                />
              </div>

              <div className="f-logo-block">
                <img
                  src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65d23114f17f19b1fb8a9bab_logo-coral-travel.png"
                  alt="Coral Travel"
                  width={138}
                />
              </div>

              <div className="f-logo-block">
                <img
                  src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65d2341fea63792f42fa6d15_kompas-removebg-preview.png"
                  alt="Kompas"
                  width={134}
                />
              </div>

              <div className="f-logo-block">
                <img
                  src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e3162511db9df4ad285ab5_JU-poland.png"
                  alt="JU Poland"
                  width={99}
                />
              </div>

              <div className="f-logo-block">
                <img
                  src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65d23c6e2a00d47c33b21ed8_tpg-logo.png"
                  alt="TPG"
                  width={131}
                />
              </div>

              <div className="f-logo-block">
                <img
                  src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65d259e2c71e84a616bdc828_IMG_3043__1_-removebg-preview%20(1).png"
                  alt="Partner Logo"
                  width={79}
                />
              </div>

              <div className="f-logo-block">
                <img
                  src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e5de498ee1e97b42422233_%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpg"
                  alt="Partner Logo"
                  width={101}
                />
              </div>

              <div className="f-logo-block">
                <img
                  src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e3138bc91cdddacc717ce2_%D0%9F%D1%80%D0%B8%D0%B2%D0%B0%D1%82%D0%91%D0%B0%D0%BD%D0%BA.png"
                  alt="PrivatBank"
                  width={152}
                />
              </div>

              <div className="f-logo-block">
                <img
                  src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e31770683fe19430cf0c12_%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-03-02%20%D0%B2%2013.42.04.png"
                  alt="Partner Logo"
                  width={120}
                />
              </div>

              <div className="f-logo-block">
                <img
                  src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e317b4386e84fece409230_accord_LE_auto_x2_no_background%20(1).jpg"
                  alt="Accord"
                  width={129}
                />
              </div>

              <div className="f-logo-block">
                <img
                  src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e318ad76da45aae75aba4a_asvio.png"
                  alt="Asvio"
                  width={114}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="napriamki" className="f-section-large py-20 bg-gray-50">
        <div className="f-container-regular mx-auto px-6">
          {/* Section Header */}
          <section className="f-margin-bottom-48 text-center mb-12">
            <div className="f-title-wrapper-center">
              <div className="f-margin-bottom-2">
                <div className="f-heading-detail-small text-sm font-semibold uppercase tracking-wide">
                  обери свій тур
                </div>
              </div>
              <h3 className="f-h3-heading text-3xl md:text-4xl font-bold">
                Гарячі напрямки для подорожі
              </h3>
            </div>
          </section>

          {/* Large Gallery Items */}
          <div className="w-layout-grid f-gallery-two-column-s grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a href="#" className="f-gallery-lightbox w-inline-block">
              <div className="f-gallery-image-x-tall grid grid-cols-2 gap-4">
                <div
                  className="f-gallery-box _1 bg-cover bg-center h-64 rounded-lg relative"
                  style={{ backgroundImage: "url('/images/turkey.jpg')" }}
                >
                  <div className="naikrashi-napriamki absolute bottom-4 left-4 text-white">
                    <div className="support-top-details-text _2 text-lg font-medium">
                      від 25 000 грн
                    </div>
                    <h2 className="support-top-heading text-2xl font-bold">
                      Туреччина
                    </h2>
                  </div>
                </div>
                <div
                  className="f-gallery-box _2 bg-cover bg-center h-64 rounded-lg relative"
                  style={{ backgroundImage: "url('/images/greece.jpg')" }}
                >
                  <div className="naikrashi-napriamki absolute bottom-4 left-4 text-white">
                    <div className="support-top-details-text _2 text-lg font-medium">
                      від 18 000 грн
                    </div>
                    <h2 className="support-top-heading text-2xl font-bold">
                      Греція
                    </h2>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Small Gallery Items */}
          <div className="w-layout-grid f-gallery-two-column grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#" className="f-gallery-lightbox w-inline-block">
              <div
                className="f-gallery-image-x-small-square bg-cover bg-center h-48 rounded-lg relative"
                style={{ backgroundImage: "url('/images/egypt.jpg')" }}
              >
                <div className="naikrashi-napriamki absolute bottom-4 left-4 text-white">
                  <div className="support-top-details-text _2 text-lg font-medium">
                    від 21 000 грн
                  </div>
                  <h2 className="support-top-heading text-2xl font-bold shadow">
                    Египет
                  </h2>
                </div>
              </div>
            </a>
            <a href="#" className="f-gallery-lightbox w-inline-block">
              <div
                className="f-gallery-image-x-small-square _2 bg-cover bg-center h-48 rounded-lg relative"
                style={{ backgroundImage: "url('/images/uae.jpg')" }}
              >
                <div className="naikrashi-napriamki absolute bottom-4 left-4 text-white">
                  <div className="support-top-details-text _2 text-lg font-medium">
                    від 35 000 грн
                  </div>
                  <h2 className="support-top-heading text-2xl font-bold">
                    ОАЕ
                  </h2>
                </div>
              </div>
            </a>
            <a href="#" className="f-gallery-lightbox w-inline-block">
              <div
                className="f-gallery-image-x-small-square _3 bg-cover bg-center h-48 rounded-lg relative"
                style={{ backgroundImage: "url('/images/spain.jpg')" }}
              >
                <div className="naikrashi-napriamki absolute bottom-4 left-4 text-white">
                  <div className="support-top-details-text _2 text-lg font-medium">
                    від 41 000 грн
                  </div>
                  <h2 className="support-top-heading text-2xl font-bold">
                    Іспанія
                  </h2>
                </div>
              </div>
            </a>
            <a href="#" className="f-gallery-lightbox w-inline-block">
              <div
                className="f-gallery-image-x-small-square _4 bg-cover bg-center h-48 rounded-lg relative"
                style={{ backgroundImage: "url('/images/thailand.jpg')" }}
              >
                <div className="naikrashi-napriamki absolute bottom-4 left-4 text-white">
                  <div className="support-top-details-text _2 text-lg font-medium">
                    від 49 000 грн
                  </div>
                  <h2 className="support-top-heading text-2xl font-bold">
                    Тайланд
                  </h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="safe-section py-20 bg-gray-50 ">
        <div className="container mx-auto px-6 ">
          <div className="flex flex-col items-end max-w-4xl mx-auto text-right ">
            {/* Heading */}
            <h2 className="safe-heading text-3xl md:text-4xl font-bold mb-6">
              Як спланувати унікальну подорож, не схожу на інші?
            </h2>

            {/* Paragraph */}
            <p className="safe-paragraph text-lg text-gray-700 mb-8">
              Команда професійних менеджерів TripVibe може спланувати подорож у
              будь-який куточок світу. Від корпоративу у Карпатах, до мандрівки
              у Кенію!
            </p>

            {/* Buttons */}
            <div className="safe-button-wrapper flex flex-col sm:flex-row justify-center gap-4">
              {/* Bitrix24 form button */}
              <div className="w-embed w-script">
                <script
                  data-b24-form="click/114/he03qc"
                  data-skip-moving="true"
                  data-b24-loaded="true"
                  dangerouslySetInnerHTML={{
                    __html: `(function(w,d,u){
                    var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
                    var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
                  })(window,document,'https://cdn.bitrix24.eu/b3926221/crm/form/loader_114.js');`,
                  }}
                ></script>
                <a
                  href="#"
                  className="btn light hero safe w-button px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  Зробити подорож
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-local-section py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="shop-local-wrapper flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Left side (could be image or illustration) */}
            <div className="shop-local-left flex-1 bg-mudblue rounded-xl h-64 lg:h-auto">
              {/* Placeholder for image or illustration */}
            </div>

            {/* Right side: content */}
            <div className="shop-local-right flex-1">
              <div className="shop-local-content-wrapper space-y-6">
                <h2 className="shop-local-heading text-3xl md:text-4xl font-bold">
                  Завжди на зв'язку
                </h2>

                <p className="text-gray-700 text-lg">
                  TripVibe завжди на зв'язку 24/7, готовий організувати гнучкі
                  подорожі, які відповідають вашим потребам. Чи ви мама, яка
                  шукає спокій, студент, що прагне пригод, пенсіонер, що хоче
                  відкрити нові країни, або людина з інвалідністю - ми зробимо
                  ваш відпочинок незабутнім!
                </p>

                <p className="text-gray-700 text-lg">
                  У цей важкий час ми вистояли, залишаючись на зв'язку та
                  надаючи високоякісні послуги. Ми розвиваємося разом з вами,
                  підлаштовуючись під ваші потреби, адже ваші історії та спогади
                  - це наша мотивація. Приєднуйтеся до TripVibe, де подорожі
                  стають не лише маршрутами, але і невичерпним джерелом
                  натхнення. Ваша пригода чекає на вас!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="f-section-regular relative py-20 bg-gray-50">
        <div className="f-testimonial-background absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 -z-10"></div>

        <div className="f-container-regular-2 max-w-6xl mx-auto px-6">
          {/* Section header */}
          <div className="f-margin-bottom-12 text-center">
            <div className="f-heading-detail-small-2 mb-4 text-sm font-medium text-blue-500 uppercase">
              що про нас говорять?
            </div>
            <h3 className="f-h3-heading-2 text-3xl md:text-4xl font-bold">
              Відгуки наших клієнтів
            </h3>
          </div>

          {/* Testimonials grid */}
          <div className="w-layout-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="f-testimonial-card bg-white rounded-xl p-6 shadow-md flex flex-col"
              >
                {/* Stars */}
                <div className="f-testimonial-star-wrapper flex mb-4 text-yellow-400">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-1"
                    >
                      <path d="M11.999 15.8196L7.50882 18.562L8.72951 13.4439L4.73438 10.0217L9.97847 9.60156L11.999 4.74323L14.0194 9.60156L19.2643 10.0217L15.2684 13.4439L16.4891 18.562L11.999 15.8196Z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="f-paragraph-small text-gray-700 mb-6">{t.text}</p>

                {/* Author */}
                <div className="f-testimonial-author flex items-center gap-4 mt-auto">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="f-testimonial-avatar-small w-12 h-12 rounded-full object-cover"
                  />
                  <p className="f-paragraph-regular f-text-weight-medium font-medium">
                    {t.author}
                  </p>
                </div>
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
                We are always happy to help you!
              </h2>
              <p className="mt-3 text-white">
                Professionals will advise you in a matter of minutes!
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

      <section className="f-section-large-4 py-20 bg-gray-50">
        <div className="f-container-regular-5 max-w-6xl mx-auto px-6">
          <div className="w-layout-grid grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <div className="f-margin-bottom-14 mb-4">
                <div className="f-heading-detail-small-5 text-sm font-medium text-blue-500 uppercase">
                  Партнерство
                </div>
              </div>

              <div className="f-margin-bottom-14 mb-4">
                <h2 className="f-h2-heading text-3xl md:text-4xl font-bold">
                  Відкрий бізнес з нами
                </h2>
              </div>

              <p className="f-paragraph-large-3 text-gray-700 mb-6">
                Партнерство TripVibe – це не тільки вигідний бізнес, але і
                можливість реалізувати себе як професіонала турбізнесу. Ми
                пропонуємо найкращі умови співпраці, щоб ваша компанія
                розвивалася та процвітала. Розкрийте потенціал туристичного
                бізнесу разом з нами – обговоримо можливості партнерства, щоб ви
                відчули переваги співпраці з TripVibe!
              </p>

              {/* List with icon */}
              <div className="f-content-list-wrapper mt-6">
                <div className="f-content-list-item flex items-start gap-3">
                  {/* Check icon */}
                  <div className="f-icon-regular-4 w-6 h-6 text-blue-500 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.0002 19.6386C7.78126 19.6386 4.36133 16.2187 4.36133 11.9997C4.36133 7.78077 7.78126 4.36084 12.0002 4.36084C16.2192 4.36084 19.6391 7.78077 19.6391 11.9997C19.6391 16.2187 16.2192 19.6386 12.0002 19.6386ZM11.2386 15.0553L16.6393 9.65383L15.5592 8.57369L11.2386 12.895L9.07758 10.734L7.99744 11.8141L11.2386 15.0553Z" />
                    </svg>
                  </div>
                  <div className="f-paragraph-regular-3 text-gray-700">
                    Напишіть лист на пошту{" "}
                    <span className="font-medium">tripvibe@ukr.net</span> аби
                    почати співпрацю!
                  </div>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="f-content-image-wrapper-large">
              <img
                src="https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e30d8192a2687a5ea9a944_partnership2.jpg"
                loading="lazy"
                srcSet="
                https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e30d8192a2687a5ea9a944_partnership2-p-500.jpg 500w,
                https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e30d8192a2687a5ea9a944_partnership2-p-800.jpg 800w,
                https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e30d8192a2687a5ea9a944_partnership2-p-1080.jpg 1080w,
                https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e30d8192a2687a5ea9a944_partnership2-p-1600.jpg 1600w,
                https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e30d8192a2687a5ea9a944_partnership2-p-2000.jpg 2000w,
                https://cdn.prod.website-files.com/65afd5f42cb2e02b00c0b9bb/65e30d8192a2687a5ea9a944_partnership2.jpg 2078w
              "
                sizes="(max-width: 2078px) 100vw, 2078px"
                alt="Партнерство TripVibe"
                className="f-image-cover-4 w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="Foto-section" className="flex flex-wrap">
        <Image
          src="/default.png"
          width={400}
          height={400}
          alt="Picture of the author"
          className="flex-1 min-w-[200px] object-cover"
        ></Image>
        <Image
          src="/default.png"
          width={400}
          height={400}
          alt="Picture of the author"
          className="flex-1 min-w-[200px] object-cover"
        ></Image>
        <Image
          src="/default.png"
          width={400}
          height={400}
          alt="Picture of the author"
          className="flex-1 min-w-[200px] object-cover"
        ></Image>
      </section>
    </main>
  );
}
