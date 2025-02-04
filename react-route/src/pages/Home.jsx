import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";
import heroImage from "../images/pfp.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hello
      </motion.h1>
      <motion.img
        src={heroImage}
        alt="Hero"
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />
      <motion.button
        onClick={() => navigate("/gallery")}
        whileHover={{ scale: 1.2, backgroundColor: "#ff4081" }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        Explore Gallery
      </motion.button>
    </div>
  );
};

export default Home;
