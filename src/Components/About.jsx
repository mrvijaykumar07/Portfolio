import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
  FaPhone,
  FaEnvelope,
  FaUniversity,
  FaBookOpen,
  FaAddressCard,
  FaPaintBrush,
  FaPen,
  FaCamera,
} from "react-icons/fa";

import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="text-center mb-6">
        <p className="text-lg text-blue-400">About</p>
        <h2 className="text-3xl font-bold my-4 items-center">
          Hi, I'm Bijaya Kumar
        </h2>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <div className="flex justify-center flex-col py-10 justify-center ">

          {/* Personal Info */}
          <p className="text-lg text-gray-300 mb-4">
            I currently pursuing a Master of Computer Application (MCA) at VSSUT
            Burla. With a strong foundation in software development and deep
            learning, I aim to leverage my skills to build impactful solutions.
            I am passionate about exploring new technologies and continuously
            enhancing my expertise in various areas of computer science.
          </p>
          {/* Hobbies */}
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2">
              <FaAddressCard className="text-xl" />
              <strong className="text-xl">Hobbies:</strong>
            </div>
            <div className="flex items-center gap-2">
              <FaPaintBrush className="text-xl" />
              <p className="text-lg">
                Painting: I enjoy expressing myself through art.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaPen className="text-xl" />
              <p className="text-lg">
                Story Writing: Writing stories is a creative outlet for me.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCamera className="text-xl" />
              <p className="text-lg">
                Photography: I have a keen interest in capturing moments.
              </p>
            </div>
          </div>
        </div>

        {/* About Info */}
        <div>
          {/* Education */}
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2">
              <FaUniversity className="text-xl" />
              <strong className="text-xl">Education:</strong>
            </div>
            <div className="flex items-center gap-2">
              <FaBookOpen className="text-xl" />
              <p className="text-lg">
                Master of Computer Applications (MCA) - VSSUT Burla
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaBookOpen className="text-xl" />
              <p className="text-lg">
                Bachelor of Science (B.Sc.) - Utkal University
              </p>
            </div>
          </div>
          {/* Contact Info */}
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2">
              <FaAddressCard className="text-xl" />
              <strong className="text-xl">Contact:</strong>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-xl" />
              <a href="tel:+919876543210" className="hover:underline">
                +91 7854001224
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-xl" />
              <a
                href="mailto:kumarbijaybehera@gmail.com"
                className="hover:underline"
              >
                kumarbijaybehera@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-2">
            <FaAddressCard className="text-xl" />
            <strong className="text-xl">Important Links:</strong>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-2xl">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kumarbijaybehera07@gmail.com"
              target="_blank"
              title="Gmail"
              className="bg-transparent text-white p-2 rounded-full hover:scale-110 transition"
            >
              <SiGmail />
            </a>
            <a
              href="https://t.me/mrvijaykumar07"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
              className="bg-transparent text-white p-2 rounded-full hover:scale-110 transition"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://github.com/mrvijaykumar07"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="bg-transparent text-white p-2 rounded-full hover:scale-110 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/bijayakumar07"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="bg-transparent text-white p-2 rounded-full hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/mrvijaykumar07/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="bg-transparent text-white p-2 rounded-full hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/bijay.kb.5"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              className="bg-transparent text-white p-2 rounded-full hover:scale-110 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
