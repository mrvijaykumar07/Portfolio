import { IonIcon } from "@ionic/react";
import { logoDribbble, logoInstagram, logoSkype, logoLinkedin } from "ionicons/icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold">Get in touch</h4>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kumarbijaybehera07@gmail.com" target="_blank" className="text-blue-400 hover:underline">
            kumarbijaybehera07@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <ul className="flex gap-4 mt-4 md:mt-0">
          {[
            { icon: logoInstagram, url:"https://www.instagram.com/mrvijaykumar07/" },
            { icon: logoLinkedin, url:"https://www.linkedin.com/in/bijayakumar07" },
          ].map((social, index) => (
            <li key={index}>
              <a href={social.url} className="text-xl hover:text-blue-400 transition">
                <IonIcon icon={social.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
