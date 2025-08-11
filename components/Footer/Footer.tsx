import Image from "next/image";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300 mt-10">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex justify-center">
          <Image src="/logo.png" width={200} height={300} alt="logo" />
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Online Grocery. All rights reserved
          by Barış Tacirlioğlu
        </p>

        <ul className="mt-6 flex flex-wrap gap-8 justify-center">
          <li>
            <a className="text-gray-800 hover:text-gray-950 cursor-pointer">
              About
            </a>
          </li>
          <li>
            <a className="text-gray-800 hover:text-gray-950 cursor-pointer">
              Carreers
            </a>
          </li>
          <li>
            <a className="text-gray-800 hover:text-gray-950 cursor-pointer">
              History
            </a>
          </li>
          <li>
            <a className="text-gray-800 hover:text-gray-950 cursor-pointer">
              Mission
            </a>
          </li>
          <li>
            <a className="text-gray-800 hover:text-gray-950 cursor-pointer">
              Services
            </a>
          </li>
          <li>
            <a className="text-gray-800 hover:text-gray-950 cursor-pointer">
              Project
            </a>
          </li>
          <li>
            <a className="text-gray-800 hover:text-gray-950 cursor-pointer">
              Blog
            </a>
          </li>
          <li>
            <a className="text-gray-800 hover:text-gray-950 cursor-pointer">
              Contact
            </a>
          </li>
        </ul>

        <ul className="mt-6 flex flex-wrap gap-8 justify-center">
          <li>
            <a
              href="https://github.com/baristacirlioglu"
              className="cursor-pointer"
            >
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" className="cursor-pointer">
              <FaTwitter size={24} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" className="cursor-pointer">
              <FaInstagram size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/baristacirlioglu/"
              className="cursor-pointer"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
