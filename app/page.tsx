"use client";

import { motion } from "framer-motion";
import Scene from "./Scene"; // Importing the 3D component we just made
import { ArrowRight, CheckCircle, Play } from "lucide-react";

export default function Home() {
  // Animation settings for text fading in
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
      {/* 1. Navigation Bar (Glass effect) */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">
            NEXUS<span className="text-indigo-500">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-white transition-colors">
              Product
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Pricing
            </a>
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* 2. Left Side: Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              variants={fadeIn}
              className="flex items-center gap-2 mb-6"
            >
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-medium border border-indigo-500/20">
                v2.0 is now live
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Build the future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                without limits.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed"
            >
              Experience the next generation of digital infrastructure.
              Seamlessly scalable, incredibly fast, and designed for those who
              demand excellence.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105">
                Start Building
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/5 transition-colors">
                <Play className="w-4 h-4 fill-current" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="mt-12 flex items-center gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-500" /> No credit
                card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-500" /> 14-day free
                trial
              </div>
            </motion.div>
          </motion.div>

          {/* 3. Right Side: 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] w-full"
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-[100px] rounded-full" />

            {/* The 3D Component */}
            <Scene />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
