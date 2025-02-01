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
        <h1 className="font-bold text-2xl lg:text-3xl ">Umar Khan</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/umerkhandev" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/thisisumarali/" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/umarkhandev" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/umarkhaan._/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
