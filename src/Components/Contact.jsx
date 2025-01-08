import { CONTACT } from "../constants";
import H2 from "./H2";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <H2>Get In Touch</H2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a
          href="umeralikhan7864@gmail.com"
          target="_blank"
          className="border-b"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
