// Copyright (c) 2025 Kaif Azmi
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const EMAILJS_SERVICE_ID = "service_moir4qf";
  const EMAILJS_TEMPLATE_ID = "template_uce3ujm";
  const EMAILJS_PUBLIC_KEY = "NX3AHTMye0V8r4qQs";

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Kaif-Azmi",
      icon: "./images/github.svg",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kaifazmi",
      icon: "./images/linkedin.svg",
    },
    {
      name: "Twitter / X",
      url: "https://x.com/kaif_azmi0",
      icon: "./images/x.svg",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error(
          "EmailJS is not configured. Please set up your EmailJS credentials."
        );
      }

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "kaifazmi8573@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200 && result.text === "OK") {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(`Unexpected response: ${JSON.stringify(result)}`);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      
      // Build user-friendly error message based on error type
      let errorMessage = "Failed to send message. ";
      
      if (error.status) {
        if (error.status === 400) {
          errorMessage += "Bad Request (400). Please check your EmailJS template variables match: {{from_name}}, {{from_email}}, {{message}}. ";
        } else if (error.status === 401) {
          errorMessage += "Unauthorized (401). Invalid Public Key. ";
        } else if (error.status === 404) {
          errorMessage += "Not Found (404). Service or Template not found. ";
        } else {
          errorMessage += `Status: ${error.status}. `;
        }
      }
      
      if (error.text) {
        errorMessage += `Details: ${error.text}`;
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += "Please check your EmailJS configuration or contact me directly at kaifazmi8573@gmail.com";
      }
      
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding-regular">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-50 mb-4">
                Contact me for collaboration
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                Reach out today to discuss your project needs and start collaborating on something amazing!
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-zinc-800/50 rounded-xl border border-zinc-700/50 backdrop-blur-sm flex items-center justify-center hover:bg-zinc-800/70 transition-all hover:border-zinc-600/50"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-7 h-7 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-zinc-50 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-zinc-50 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-zinc-50 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-zinc-50 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-zinc-50 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-zinc-50 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 border border-green-500/50 text-green-400"
                      : "bg-red-500/20 border border-red-500/50 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[#229cef] text-white font-semibold rounded-lg hover:bg-[#1a7bc7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

