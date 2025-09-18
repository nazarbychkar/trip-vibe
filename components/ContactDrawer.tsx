"use client";

import { useState } from "react";

type ContactDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactDrawer({ open, onClose }: ContactDrawerProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+44");
  const [agreement, setAgreement] = useState(false);
  // const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const phonePrefix = "+44";

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // If user tries to delete the prefix, revert
    if (!input.startsWith(phonePrefix)) return;

    // Remove any non-digit characters from the rest
    const digitsOnly = input.slice(phonePrefix.length).replace(/\D/g, "");

    // Limit to 9 digits
    const limitedDigits = digitsOnly.slice(0, 10);

    setPhone(phonePrefix + limitedDigits);
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const cursorPos = input.selectionStart || 0;

    // Prevent deleting the prefix
    if (
      cursorPos <= phonePrefix.length &&
      (e.key === "Backspace" || e.key === "Delete")
    ) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !agreement) {
      alert("Please fill in all fields.");
      return;
    }
    setStatus("sending");
    // Here you would connect Bitrix24 API or backend handler
    const endpoint =
      "https://crm-tour.bitrix24.eu/rest/1/w7kn0c290mdowcry/crm.lead.add.json";

    // Build URL parameters
    const params = new URLSearchParams({
      "FIELDS[TITLE]": "Лид с сайта TripVibe UK Eng",
      "FIELDS[NAME]": name,
      "FIELDS[PHONE][0][VALUE]": phone,
      "FIELDS[PHONE][0][VALUE_TYPE]": "WORK",
    });

    try {
      const response = await fetch(`${endpoint}?${params.toString()}`);
      const data = await response.json();

      setTimeout(() => {
        setStatus("sent");
      }, 2000);

      if (!data.result) {
        console.error("API error:", data);
        alert("There was a problem submitting your data.");
        setStatus("idle"); // allow retry
      } else {
        console.log("Lead created:", data.result);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Failed to connect to the server.");
      setStatus("idle"); // allow retry
    }
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
              Fill out the form
            </h2>
            <p className="b24-form-header-description text-gray-600 mt-2">
              and we will contact you in 2 minutes! minutes!
            </p>
          </div>

          <div className="b24-form-content p-6">
            {status === "sending" && (
              <div className="flex justify-center items-center p-10">
                <p className="p-3">Sending...</p>
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="opacity-25"
                    fill="none"
                  />
                  <path
                    fill="currentColor"
                    className="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
            )}
            {status === "sent" && (
              <div className="text-center py-10">
                <div className="text-green-600 text-xl font-semibold">
                  ✅ Sent!
                </div>
                <p className="text-gray-600 mt-2">
                  We will contact you shortly.
                </p>
              </div>
            )}
            {status === "idle" && (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="given-name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    value={phone}
                    inputMode="numeric"
                    pattern="\+447\d{9}" // Optional HTML pattern for 9 digits after +447
                    required
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="mb-4 flex items-start">
                  <input
                    type="checkbox"
                    checked={agreement}
                    onChange={() => setAgreement(!agreement)}
                    className="mt-1 mr-2"
                    required
                  />
                  <span className="text-sm text-gray-600">
                    By clicking the &#34;Send&#34; button, I accept the terms of
                    the user agreement and consent to the processing of my data.
                  </span>
                </div>

                <div className="bg-terracotta rounded-lg">
                  <button
                    type="submit"
                    className="w-full text-white py-2 rounded-lg font-semibold hover:bg-mudblue transition"
                  >
                    Send
                  </button>
                </div>
              </form>
            )}
            {/* {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
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
                    Phone <span className="text-red-500">*</span>
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
                    By clicking the &#34;Send&#34; button, I accept the terms of
                    the user agreement and consent to the processing of my data.
                  </span>
                </div>

                <div className="bg-terracotta rounded-lg">
                  <button
                    type="submit"
                    className="w-full text-white py-2 rounded-lg font-semibold hover:bg-mudblue transition"
                  >
                    Send
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="text-green-600 text-xl font-semibold">
                  ✅ Sent!
                </div>
                <p className="text-gray-600 mt-2">
                  We will contact you shortly.
                </p>
              </div>
            )} */}
          </div>
        </section>
      </div>
    </>
  );
}
