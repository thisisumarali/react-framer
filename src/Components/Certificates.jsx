import { motion } from "framer-motion";
import certificateImg from "../assets/certificates.jpg";

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
                <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-xl shadow-neutral-800/30">
                    <img
                        src={certificateImg}
                        alt="Certificates"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Certificates;
