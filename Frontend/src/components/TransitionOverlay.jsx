import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const TransitionOverlay = ({ trigger }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (trigger) {
      setShow(true);
      const timeout = setTimeout(() => setShow(false), 2500); // animation duration
      return () => clearTimeout(timeout);
    }
  }, [trigger]);

  // Parent container animation (controls child staggering)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between bars
      },
    },
  };

  // Each bar animation
  const barVariants = {
    hidden: { y: 0 },
    visible: {
      y: ["100",  "-100%"], // move halfway, then off screen
      transition: {
        duration: 1.5,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-[9999] flex justify-between "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        //   exit="visible"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              variants={barVariants}
              className="xl:w-[18%] w-[55%] h-full bg-black"
             
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransitionOverlay;
