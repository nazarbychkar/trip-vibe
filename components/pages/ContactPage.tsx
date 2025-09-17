"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !agreement) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
    // Here you would connect Bitrix24 API or backend handler
    const endpoint =
      "https://crm-tour.bitrix24.eu/rest/1/w7kn0c290mdowcry/crm.lead.add.json";

    // Build URL parameters
    const params = new URLSearchParams({
      "FIELDS[TITLE]": "New Lead",
      "FIELDS[NAME]": name,
      "FIELDS[PHONE][0][VALUE]": phone,
      "FIELDS[PHONE][0][VALUE_TYPE]": "WORK",
    });

    try {
      const response = await fetch(`${endpoint}?${params.toString()}`);
      const data = await response.json();

      if (!data.result) {
        console.error("API error:", data);
        alert("There was a problem submitting your data.");
        setSubmitted(false); // allow retry
      } else {
        console.log("Lead created:", data.result);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Failed to connect to the server.");
      setSubmitted(false); // allow retry
    }
  };

  return (
    <div id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left section - Offline Store Info */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Offline point
            </h2>
            <div className="text-gray-600 space-y-3 text-lg leading-relaxed">
              <div>
                <p className="font-medium">12 SAXBY COURT</p>
                <p className="font-medium">SAXBY CLOSE</p>
                <p className="font-medium">BARNHAM</p>
              </div>
              <p className="text-gray-500">PO22 0GW</p>

              <div className="mt-8 space-y-2">
                <div>
                  <span className="font-semibold text-gray-700">Phone:</span>{" "}
                  <a
                    href="tel:+447520665098"
                    className="text-red-500 hover:text-red-600 font-medium transition-colors"
                  >
                    +44 7520 665098
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    Work schedule:
                  </span>{" "}
                  <span className="text-gray-600">
                    Mon-Sun from 10:00 to 21:00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right section - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-gray-50 to-white px-8 py-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Contact form
                </h2>
                <p className="text-gray-600 text-sm">
                  and we will contact you in 2 minutes!
                </p>
              </div>

              {/* Form Content */}
              <div className="px-8 py-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-green-600 font-medium text-lg">
                      Sent successfully!
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      We will contact you shortly.
                    </p>
                  </div>
                ) : (
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-50 border-0 rounded-lg px-4 py-4 text-gray-800 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
                    />
                    {/* {errors.name && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.name}
                        </p>
                      )} */}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-gray-50 border-0 rounded-lg px-4 py-4 text-gray-800 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
                    />
                    {/* {errors.phone && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.phone}
                        </p>
                      )} */}
                  </div>

                  {/* Agreement Checkbox */}
                  <div className="flex items-start space-x-3 py-2">
                    <input
                      type="checkbox"
                      name="agreement"
                      checked={agreement}
                      onChange={() => setAgreement(!agreement)}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label className="text-gray-600 text-sm leading-relaxed">
                      By clicking the &#34;Send&#34; button, I accept the terms
                      of the user agreement and consent to the processing of my
                      data.
                    </label>
                  </div>
                  {/* {errors.agreement && (
                      <p className="text-red-500 text-sm">{errors.agreement}</p>
                    )} */}

                  {/* Submit Button */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitted}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    { submitted ? (
                        <div className="flex items-center justify-center space-x-2">
                          {/* <svg
                            className="animate-spin w-5 h-5"
                            viewBox="0 0 24 24"
                          >
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
                          </svg> */}
                          <span>Sent</span>
                        </div>
                      ) : (
                        "Send"
                      )}
                        

                  </button>

                  {/* Terms Link */}
                  <div className="text-center pt-4">
                    <button
                      type="button"
                      className="text-gray-400 text-sm hover:text-gray-600 transition-colors border-b border-dotted border-gray-300 hover:border-gray-600"
                    >
                      Report a violation
                    </button>
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
