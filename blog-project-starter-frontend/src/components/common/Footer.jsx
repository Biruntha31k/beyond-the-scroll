import React from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";

function Footer() {
  return (
    <div className='bg-gradient-to-r from-[#c57ff4] to-[#6d0077] text-white p-7 mt-8'>
      {/* Social Icons Section */}
      <div className="flex gap-6 text-3xl justify-center transition-all duration-300">
        <p className="hover:text-[#000]">
          <RiInstagramFill />
        </p>
        <p className="hover:text-[#000]">
          <FaTwitter />
        </p>
        <p className="hover:text-[#000]">
          <GrYoutube />
        </p>
      </div>

      {/* Footer Text */}
      <p className="text-center mt-6 text-lg font-light">
        @2024 Beyond the Scroll | All rights reserved
      </p>
    </div>
  );
}

export default Footer;
