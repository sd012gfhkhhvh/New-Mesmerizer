import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
  width: "4rem",
  height: "4rem",
  display: "flex",
  // backgroundColor: "black",
  justifyContent: "space-around",
  // border :"1px solid red"
};
const loadingCircle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "#FFFFFF",
  borderRadius: "0.5rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "60%",
  },
};
const loadingCircleTransition = {
  duration : 0.4,
  yoyo : Infinity,
  ease: 'easeInOut'
}

const Loading = () => {
  return (
    <div>
      <div className="fixed  w-full min-h-screen bg-[#22223b]" />
      <div className="flex fixed w-full justify-center items-center h-screen">
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;