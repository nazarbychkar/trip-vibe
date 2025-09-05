"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    agreement: false,
  });
  type Errors = {
    name?: string;
    phone?: string;
    agreement?: string;
  };
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const handleInputChange = (e: {
    target: { name: any; value: any; type: any; checked: any };
  }) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Ім'я обов'язкове";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Телефон обов'язковий";
    } else if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Введіть коректний номер";
    }

    if (!formData.agreement) {
      newErrors.agreement = "Потрібна згода";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccessful(true);
    }, 1500);
  };

  return (
    <div id="contact" className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left section - Offline Store Info */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Офлайн точка
            </h2>
            <div className="text-gray-600 space-y-3 text-lg leading-relaxed">
              <div>
                <p className="font-medium">м. Київ, метро Позняки</p>
                <p className="font-medium">ТРЦ Алладін, -1 поверх</p>
              </div>
              <p className="text-gray-500">(біля клубу Appollo)</p>

              <div className="mt-8 space-y-2">
                <div>
                  <span className="font-semibold text-gray-700">Телефон:</span>{" "}
                  <a
                    href="tel:+380444999722"
                    className="text-red-500 hover:text-red-600 font-medium transition-colors"
                  >
                    +38 044 499 97 22
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    Режим роботи:
                  </span>{" "}
                  <span className="text-gray-600">ПН-НД з 10:00 до 21:00</span>
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
                {isSubmitSuccessful ? (
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
                        placeholder="Ім'я"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border-0 rounded-lg px-4 py-4 text-gray-800 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border-0 rounded-lg px-4 py-4 text-gray-800 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="flex items-start space-x-3 py-2">
                      <input
                        type="checkbox"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <label className="text-gray-600 text-sm leading-relaxed">
                        Натискаючи на кнопку «Відправити», я приймаю умови угоди
                        користувача і даю згоду на обробку моїх даних.
                      </label>
                    </div>
                    {errors.agreement && (
                      <p className="text-red-500 text-sm">{errors.agreement}</p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <svg
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
                          </svg>
                          <span>Відправка...</span>
                        </div>
                      ) : (
                        "Відправити"
                      )}
                    </button>

                    {/* Terms Link */}
                    <div className="text-center pt-4">
                      <button
                        type="button"
                        className="text-gray-400 text-sm hover:text-gray-600 transition-colors border-b border-dotted border-gray-300 hover:border-gray-600"
                      >
                        Повідомити про порушення
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
