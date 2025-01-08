import { motion } from "framer-motion";

/* eslint-disable react/prop-types */

const H2 = ({ children }) => {
  return (
    <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl"
    >
      {children}
    </motion.h2>
  );
};

export default H2;
