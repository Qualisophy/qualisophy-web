import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { ContactForm } from "@/components/react/contact/ContactForm";

export const ContactContent: React.FC = () => {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Page Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl font-heading sm:text-5xl font-black leading-tight tracking-tighter text-secondary">
          {t("contact.hero.title")}
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          {t("contact.hero.subtitle")}
        </p>
      </div>

      {/* Form + Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start max-w-6xl mx-auto mb-12">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        {/* Contact Info (Without Map) */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold text-secondary">
            {t("contact.sidebar.title")}
          </h3>

          <div className="space-y-5">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-1">
                  {t("contact.sidebar.address")}
                </h4>
                <a
                  href="https://maps.app.goo.gl/VStbnoiDd58fEe8m9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  Calle Esteban Salazar Chapela 11, Málaga
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-1">
                  {t("contact.sidebar.phone")}
                </h4>
                <a
                  href="tel:+34951768789"
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  (+34) 951 768 789
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-1">
                  {t("contact.sidebar.email")}
                </h4>
                <a
                  href="mailto:hello@qualisophy.com"
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  hello@qualisophy.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section - Full Width */}
      <div className="max-w-6xl mx-auto mb-1">
        <h3 className="text-2xl font-heading font-bold text-center text-secondary mb-4">
          {t("contact.map.title")}
        </h3>
        <div className="rounded-xl overflow-hidden aspect-[3/1] border border-gray-200 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.3530230538527!2d-4.4737703240147315!3d36.690053873900446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f9e53484b7f1%3A0x1c89c125f2013c66!2sC.%20Esteban%20Salazar%20Chapela%2C%2011%2C%20Churriana%2C%2029004%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1771255187864!5m2!1ses!2ses"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
