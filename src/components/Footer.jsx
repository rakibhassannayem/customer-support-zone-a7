import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="bg-neutral">
      <footer className="container mx-auto footer sm:footer-horizontal text-neutral-content justify-between py-10 px-2">
        <nav className="max-w-xs">
          <h6 className="text-lg font-medium text-white">CS — Ticket System</h6>
          <p className="text-zinc-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </nav>
        <nav>
          <h6 className="text-lg font-medium text-white">Company</h6>
          <a className="link link-hover text-zinc-400">About Us</a>
          <a className="link link-hover text-zinc-400">Our Mission</a>
          <a className="link link-hover text-zinc-400">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="text-lg font-medium text-white">Services</h6>
          <a className="link link-hover text-zinc-400">Products & Services</a>
          <a className="link link-hover text-zinc-400">Customer Stories</a>
          <a className="link link-hover text-zinc-400">Products & Services</a>
        </nav>
        <nav>
          <h6 className="text-lg font-medium text-white">Information</h6>
          <a className="link link-hover text-zinc-400">Privacy Policy</a>
          <a className="link link-hover text-zinc-400">Terms & Conditions</a>
          <a className="link link-hover text-zinc-400">Join Us</a>
        </nav>
        <nav>
          <h6 className="text-lg font-medium text-white">Social Links</h6>
          <div className="flex items-center gap-1">
            <div className="bg-white rounded-full p-1">
              <FaXTwitter color="black" />
            </div>
            <a className="link link-hover text-zinc-400">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-white rounded-full p-1">
              <FaLinkedinIn color="black" />
            </div>
            <a className="link link-hover text-zinc-400">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-white rounded-full p-1">
              <FaFacebookF color="black" />
            </div>
            <a className="link link-hover text-zinc-400">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-white rounded-full p-1">
              <TfiEmail color="black" />
            </div>
            <a className="link link-hover text-zinc-400">support@cst.com</a>
          </div>
        </nav>
      </footer>
      <p className="py-5 border-t border-gray-600 text-zinc-400 text-sm text-center container mx-auto px-2">
        © 2025 CS — Ticket System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
