"use client";

import { useState } from "react";

type ContactDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactDrawer({ open, onClose }: ContactDrawerProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !agreement) {
      alert("Будь ласка, заповніть усі поля");
      return;
    }
    setSubmitted(true);
    // Here you would connect Bitrix24 API or backend handler
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <section className="b24-form-wrapper max-w-lg mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="b24-form-header p-6 border-b text-center">
            <h2 className="b24-form-header-title text-2xl font-bold text-gray-800">
              Заповніть форму
            </h2>
            <p className="b24-form-header-description text-gray-600 mt-2">
              і ми зв'яжемося з вами за 2 хвилини!
            </p>
          </div>

          <div className="b24-form-content p-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">
                    Ім'я <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="given-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="mb-4 flex items-start">
                  <input
                    type="checkbox"
                    checked={agreement}
                    onChange={() => setAgreement(!agreement)}
                    className="mt-1 mr-2"
                  />
                  <span className="text-sm text-gray-600">
                    Натискаючи на кнопку «Відправити», я приймаю умови угоди
                    користувача і даю згоду на обробку моїх даних.
                  </span>
                </div>

                <div className="b24-form-btn-block">
                  <button
                    type="submit"
                    className="b24-form-btn w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Відправити
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="text-green-600 text-xl font-semibold">
                  ✅ Відправлено!
                </div>
                <p className="text-gray-600 mt-2">
                  Ми з вами зв’яжемося найближчим часом.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
