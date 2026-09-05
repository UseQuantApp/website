import {
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import FadeUp from "./FadeUp";

export default function Footer() {
  const socialIcons = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/getquant.app?igsh=NHFwb29uY3IwajYz",
    },
    {
      icon: FaFacebook,
      href: "https://web.facebook.com/profile.php?id=61590693425384",
    },
    { icon: FaTwitter, href: "https://twitter.com/getquant_app" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/getquant-app/",
    },
  ];

  return (
    <FadeUp>
      <footer className=" w-full overflow-hidden bg-[#FF6600] px-4 text-white sm:px-6 lg:px-8">
        <div className=" mx-auto flex w-full max-w-7xl flex-col gap-10 pt-12 sm:gap-12 sm:pt-16 lg:pt-20">
          <div className="flex flex-col gap-6">
            <div className="lg:flex lg:items-start lg:justify-between">
              <div className="w-[90%] max-w-136">
                <h3 className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-[42px]">
                  Ready To Take Control Of Your
                  <br className="hidden sm:block" /> Academic Goals?
                </h3>

                <p className="mt-4 max-w-xl text-sm text-white sm:text-base lg:text-lg">
                  Get summaries, deadlines, PDFs, timetable access, and CGPA
                  tracking directly inside WhatsApp.
                </p>

                <a
                  href=" https://wa.me/2349135622583"
                  className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-white px-4 py-2 text-base font-medium text-[#FF6600] transition-opacity hover:cursor-pointer hover:opacity-90 "
                >
                  <FaWhatsapp className="-mt-0.5 text-lg sm:text-xl" />
                  Get Started
                </a>
              </div>

              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12.5">
                <div>
                  <h4 className="mb-2 text-lg font-bold sm:text-xl">Product</h4>
                  <div className="flex flex-col gap-2 text-sm text-white sm:text-base lg:text-lg">
                    <a
                      href="#features"
                      className="transition-opacity hover:opacity-80"
                    >
                      Features
                    </a>
                    <a
                      href="#how-it-works"
                      className="transition-opacity hover:opacity-80"
                    >
                      How It Works
                    </a>
                    <a
                      href="#faqs"
                      className="transition-opacity hover:opacity-80"
                    >
                      FAQs
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 text-lg font-bold sm:text-xl">
                    Resources
                  </h4>
                  <div className="flex flex-col gap-2 text-sm text-white sm:text-base lg:text-lg">
                    <a
                      href="#"
                      className="transition-opacity hover:opacity-80"
                      target="_blank"
                    >
                      Student Guide
                    </a>
                    <a
                      href="#"
                      className="transition-opacity hover:opacity-80"
                      target="_blank"
                    >
                      Help Center
                    </a>
                    <Link
                      to="/privacy"
                      className="transition-opacity hover:opacity-80"
                    >
                      Privacy Policy
                    </Link>
                    <a
                      href="#"
                      className="transition-opacity hover:opacity-80"
                      target="_blank"
                    >
                      Terms of Service
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 sm:gap-10 md:grid md:grid-cols-3 md:items-start md:gap-8 lg:hidden">
              <div>
                <h4 className="mb-2 text-lg font-bold sm:text-xl">Product</h4>
                <div className="flex flex-col gap-2 text-sm text-white sm:text-base lg:text-lg">
                  <a
                    href="#features"
                    className="transition-opacity hover:opacity-80"
                  >
                    Features
                  </a>
                  <a
                    href="#how-it-works"
                    className="transition-opacity hover:opacity-80"
                  >
                    How It Works
                  </a>
                  <a
                    href="#faq"
                    className="transition-opacity hover:opacity-80"
                  >
                    FAQs
                  </a>
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-lg font-bold sm:text-xl">Resources</h4>
                <div className="flex flex-col gap-2 text-sm text-white sm:text-base lg:text-lg">
                  <a
                    href="#"
                    className="transition-opacity hover:opacity-80"
                    target="_blank"
                  >
                    Student Guide
                  </a>
                  <a
                    href="#"
                    className="transition-opacity hover:opacity-80"
                    target="_blank"
                  >
                    Help Center
                  </a>
                  <Link
                    to="/privacy"
                    className="transition-opacity hover:opacity-80"
                  >
                    Privacy Policy
                  </Link>
                  <a
                    href="#"
                    className="transition-opacity hover:opacity-80"
                    target="_blank"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>

              <div>
                <div className="flex flex-row gap-3 md:flex-col md:items-start">
                  {socialIcons.map((socialIcon, i) => (
                    <a
                      key={i}
                      href={socialIcon.href}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#FF6600] transition-opacity hover:opacity-90"
                    >
                      <socialIcon.icon className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:justify-end lg:-mt-28">
              <div className="flex flex-col items-start gap-3">
                {socialIcons.map((socialIcon, i) => (
                  <a
                    key={i}
                    href={socialIcon.href}
                    target="_blank"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#FF6600] transition-opacity hover:opacity-90"
                  >
                    <socialIcon.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 pt-2 lg:flex-row lg:items-end lg:justify-between lg:-mt-16">
            <div className="flex flex-col text-sm sm:text-base gap-1">
              <h4 className=" text-xl font-semibold sm:text-2xl">Contact</h4>
              <div className="flex flex-col gap-3 md:flex-row md:gap-6 lg:gap-8">
                <p className="flex items-center gap-2 text-sm sm:text-base lg:text-lg">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#FF6600]">
                    <MdEmail className="text-[14px]" />
                  </span>
                  support@quantapp.com
                </p>

                <p className="flex items-center gap-2 text-sm sm:text-base lg:text-lg">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#FF6600]">
                    <FaPhoneAlt className="text-[12px]" />
                  </span>
                  +234 805 1597 331
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold text-white sm:text-base lg:text-lg ">
              © 2026 Quant. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pointer-events-none relative select-none -bottom-6">
          <h3 className="whitespace-nowrap text-[30vw] font-bold leading-none tracking-[0.02em] text-white text-center sm:text-[20vw] md:text-[22vw] lg:text-[18vw] ">
            QUANT
          </h3>
        </div>
      </footer>
    </FadeUp>
  );
}
