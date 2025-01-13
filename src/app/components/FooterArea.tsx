import React from "react";
import facebook from "../images/logo-facebook.png";
import twitter from "../images/logo-twitter.png";
import instagram from "../images/logo-instagram.png";
import github from "../images/logo-github.png";
import Image from "next/image";

const FooterArea: React.FC = () => {
  return (
    <footer>
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* brand Section */}
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold mb-5">BrandNav.io</h2>
            <div className="mt-2 text-md text-[#212529]">
              BrandNav is an Ecom Leads Database
            </div>
            <div className="mt-2 text-md text-[#212529]">
              with tons of amazing filters.
            </div>
            <div className="mt-2 text-md text-[#212529]">
              Now you can get access to stores with just a
            </div>
            <div className="mt-2 text-md text-[#212529]">simple click.</div>
            <div className="mt-5 flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <Image src={facebook} alt="facebook" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <Image src={twitter} alt="twitter" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <Image src={instagram} alt="instagram" />
              </a>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <Image src={github} alt="github" />
              </a>
            </div>
          </div>

          {/* links Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Blogs</h3>
            <ul className="mt-2 text-md text-[#008EFF] space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-blue-800">
                  All Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-800">
                  Cold Emailing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Documentation
            </h3>
            <ul className="mt-2 text-md text-[#008EFF] space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-blue-800">
                  Getting Started
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Resources</h3>
            <ul className="mt-2 text-md text-[#008EFF] space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-blue-800">
                  Latest Updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-800">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-800">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">Legal</h3>
            <ul className="mt-2 text-md text-[#008EFF] space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-blue-800">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-800">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-800">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* footer bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-md text-[#1211278F]">
          © 2022 BrandNav. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default FooterArea;
