import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 bg-neutral px-6 py-10 text-neutral-content sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:px-10">
      <nav className="flex w-full max-w-xs flex-col items-center gap-2 text-center sm:items-start sm:text-left">
        <a className="link link-hover" href="/about">
          About us
        </a>
        <p className="link link-hover" href="tel:0245662326">
          Contact: 0245662326 / 0240481753
        </p>
        <a
          className="link link-hover"
          href="mailto:rufai.abdulmumin@hotmail.com"
        >
          Email: rufai.abdulmumin@hotmail.com
        </a>
        <p className="link link-hover">
          Address: GM-253-1316. Kale Street, Accra, Ghana
        </p>
      </nav>
      <nav className="flex flex-col items-center">
        <div className="flex gap-4">
          <a href="https://github.com/abdul-mumin-rufai">
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href="https://www.instagram.com/rufai.abdulmumin/">
            <FaInstagramSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/abdul-mumin-rufai-4b45511b9/">
            <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href="mailto:rufai.abdulmumin@hotmail.com">
            <MdMarkEmailUnread className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </nav>
      <aside className="w-full max-w-xs text-center text-sm sm:text-right">
        <p className="">
          Copyright © {new Date().getFullYear()} - All right reserved by Rufai
          Inc.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
