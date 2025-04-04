import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-sky-400 to-emerald-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
        className="bg-white bg-opacity-10 p-10 rounded-3xl shadow-2xl backdrop-blur-md text-center"
      >
        <h1 className="text-white text-7xl font-extrabold animate-pulse drop-shadow-lg mb-4">
          💰 My Finance Tracker
        </h1>
        <p className="text-white text-xl font-medium italic tracking-wide mb-6">
          Your smart path to saving & growing 🌱
        </p>

        {/* Loader */}
        <div className="flex justify-center">
          <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        </div>
      </motion.div>
    </div>
  );
}
