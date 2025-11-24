import { motion } from "framer-motion";
import certificateImg from "../assets/certificates.jpg";
import certificateImg2 from "../assets/ucertficate.jpg";

const Certificates = () => {
  return (
    <section className="border-b border-neutral-900 pb-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-16 text-center text-4xl font-bold tracking-wide"
      >
        Certificates
      </motion.h2>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-xl shadow-neutral-800/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={certificateImg}
              alt="Certificate 1"
              className="w-full h-64 md:h-80  object-cover rounded-lg"
            />

            <img
              src={certificateImg2}
              alt="Certificate 2"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;
