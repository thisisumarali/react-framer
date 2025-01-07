// import Logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Navbar() {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src={Logo} alt="logo" /> */}
        <h2 className="font-bold text-2xl lg:text-3xl ">Umar Khan</h2>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/umerkhandev" target="_blank">
          <FaLinkedin />
        </a>
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <FaFacebook />
        </a>
        <a href="">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
