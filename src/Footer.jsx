import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPhoneVolume,
} from "react-icons/fa";
import { MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Top Section */}
      <div
        className="
          max-w-[1600px] mx-auto
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4
          gap-8 md:gap-12 lg:gap-20
          px-4 sm:px-6 md:px-10 lg:px-[120px]
          pt-8 sm:pt-10 md:pt-[40px] lg:pt-[120px]
          pb-8 sm:pb-10 md:pb-[40px] lg:pb-[60px]
        "
      >
        {/* Logo + Socials */}
        <div className="md:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-bold mb-4">Business Logo</h2>
          <div className="flex space-x-4 text-gray-600 text-lg">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Plumbing</li>
            <li>Drainage</li>
            <li>Bathrooms</li>
            <li>Commercial</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Contact Us</li>
            <li>Updates</li>
            <li>About Us</li>
            <li>Rates</li>
            <li>Customer Services</li>
            <li>Locations</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-sm font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 font-bold text-gray-600 text-sm">
            <li className="flex items-center space-x-2">
              <CiLocationOn className="text-lg text-gray-500 " />
              <span>1 Sail Street, London, SE11 6NQ</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdOutlineMail className="text-lg text-gray-500" />
              <a
                href="mailto:enquiries@PlumbingPros.com"
                className="hover:underline"
              >
                enquiries@PlumbingPros.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <MdOutlinePhoneInTalk className="text-lg text-gray-500" />
              <a href="tel:02045276474" className="hover:underline">
                020 4527 6474
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="
          border-t text-gray-400 text-xs sm:text-sm
          flex flex-col md:flex-row justify-between items-center
          px-4 sm:px-6 md:px-10 lg:px-[120px]
          py-4
        "
      >
        <p>© Plumbing Pros. All Rights Reserved</p>
        <p>Website by IH Adventure And Creative</p>
      </div>
    </footer>
  );
}
