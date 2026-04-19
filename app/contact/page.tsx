'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you soon!');
  };

  return (
    <div className="cq-section min-h-screen bg-gray-50">
      <div className="cq-section bg-blue-900 py-20 text-white">
        <div className="container-shell">
          <h1 className="contact-hero-title mb-4 text-center font-bold">Contact Us</h1>
          <p className="contact-hero-subtitle mx-auto max-w-3xl text-center text-blue-100">
            Get in touch with our team to discuss your logistics needs and request a quote
          </p>
        </div>
      </div>

      <div className="cq-section">
        <div className="container-shell py-16">
          <div className="contact-main-grid">
            <div className="cq-form min-w-0 rounded-lg bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-blue-900">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="cq-field-grid gap-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div className="cq-field-grid gap-6">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-700">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="">Select a service</option>
                    <option value="freight">Freight Transportation</option>
                    <option value="warehousing">Warehousing & Storage</option>
                    <option value="express">Express Delivery</option>
                    <option value="customs">Customs Clearance</option>
                    <option value="supply-chain">Supply Chain Solutions</option>
                    <option value="specialized">Specialized Transport</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-900"
                    placeholder="Tell us about your logistics needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-900 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
                >
                  Submit Request
                </button>
              </form>
            </div>

            <div className="contact-info-stack min-w-0 space-y-8">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-blue-900">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-6 w-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold">Office Address</h3>
                      <p className="text-gray-600">
                        1234 Business Avenue
                        <br />
                        Riyadh, Saudi Arabia
                        <br />
                        Postal Code: 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-6 w-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold">Phone Numbers</h3>
                      <p className="text-gray-600">
                        Main: +966 12 345 6789
                        <br />
                        Toll Free: 800 123 4567
                        <br />
                        Fax: +966 12 345 6780
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-6 w-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold">Email Addresses</h3>
                      <p className="text-gray-600">
                        General: info@ksamdaylogistics.com
                        <br />
                        Sales: sales@ksamdaylogistics.com
                        <br />
                        Support: support@ksamdaylogistics.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-blue-50 p-8">
                <h3 className="mb-4 text-xl font-bold text-blue-900">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="contact-hours-row">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="contact-hours-row">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="contact-hours-row">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="contact-hours-row">
                    <span>Emergency Support:</span>
                    <span className="font-semibold">24/7 Available</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-blue-900">Follow Us</h3>
                <div className="contact-social-row">
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 transition-colors hover:bg-blue-200"
                  >
                    <svg className="h-5 w-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 transition-colors hover:bg-blue-200"
                  >
                    <svg className="h-5 w-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 transition-colors hover:bg-blue-200"
                  >
                    <svg className="h-5 w-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
