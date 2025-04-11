/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

// Predefined values for particles to ensure consistency between server and client
const particlesConfig = Array(20).fill(undefined).map((_, i) => ({
  width: 30 + (i % 5) * 10,
  height: 30 + (i % 6) * 8,
  left: `${(i * 5) % 100}%`,
  top: `${(i * 7) % 100}%`,
  animY: [(i * 5) % 100, ((i * 5) % 100) - 100],
  animX: [(i * 7) % 100, ((i * 7) % 100) - 100],
  duration: 10 + i,
}));

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const heroTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.8 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-950 overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particlesConfig.map((config, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500 opacity-10"
            style={{
              width: config.width,
              height: config.height,
              left: config.left,
              top: config.top,
            }}
            animate={{
              y: config.animY,
              x: config.animX,
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: config.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Glow effects */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20"
        animate={pulseAnimation}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl opacity-10"
        animate={{
          ...pulseAnimation,
          transition: { ...pulseAnimation.transition, delay: 1 },
        }}
      />

      {/* Navbar */}
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo */}
            <div className="w-10 h-10 mr-2">
              <img
                src="../public/pearl-github.png"
                alt="PEARL Labs Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-bold text-xl">PEARL Labs</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="px-4 py-2 text-white hover:text-purple-300 transition-colors"
                    href="#"
                  >
                    Products
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="px-4 py-2 text-white hover:text-purple-300 transition-colors"
                    href="#"
                  >
                    Technology
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="px-4 py-2 text-white hover:text-purple-300 transition-colors"
                    href="#"
                  >
                    Research
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="px-4 py-2 text-white hover:text-purple-300 transition-colors"
                    href="#"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button
                    variant="outline"
                    className="ml-4 bg-transparent border-purple-400 text-purple-100 hover:bg-purple-900 hover:text-white transition-all"
                  >
                    Get Started
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md mt-4 rounded-lg shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col p-4">
              <a
                href="#"
                className="py-3 px-4 text-white hover:bg-purple-900/30 rounded-md"
              >
                Products
              </a>
              <a
                href="#"
                className="py-3 px-4 text-white hover:bg-purple-900/30 rounded-md"
              >
                Technology
              </a>
              <a
                href="#"
                className="py-3 px-4 text-white hover:bg-purple-900/30 rounded-md"
              >
                Research
              </a>
              <a
                href="#"
                className="py-3 px-4 text-white hover:bg-purple-900/30 rounded-md"
              >
                About
              </a>
              <Button className="mt-4 bg-purple-700 hover:bg-purple-600 text-white">
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              variants={heroTextVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Securing the Future of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                  Digital Identity
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-300">
                Pioneering AI & blockchain solutions with cutting-edge
                cryptographic techniques to safeguard user data and verify
                credentials.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-400">
                <span className="px-3 py-1 bg-gray-800/60 rounded-full">DLT</span>
                <span className="px-3 py-1 bg-gray-800/60 rounded-full">ZKP</span>
                <span className="px-3 py-1 bg-gray-800/60 rounded-full">FHE</span>
                <span className="px-3 py-1 bg-gray-800/60 rounded-full">MCP</span>
                <span className="px-3 py-1 bg-gray-800/60 rounded-full">TEE</span>
              </div>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Button className="bg-purple-600 hover:bg-purple-500 text-white font-medium px-6 py-3 rounded-md flex items-center gap-2">
                Explore Our SDK
                <ChevronRight size={18} />
              </Button>
              <Button
                variant="outline"
                className="border-purple-400/30 bg-transparent text-purple-200 hover:bg-purple-900/30 hover:text-white"
              >
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Purple pearl-like sphere with glow effect */}
              <div className="relative aspect-square w-full max-w-md">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300 via-purple-500 to-indigo-700 shadow-2xl opacity-90"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gray-900/80 via-transparent to-transparent"></div>
                
                {/* Reflection effect */}
                <div className="absolute top-1/4 left-1/4 w-1/6 h-1/6 rounded-full bg-white opacity-40 blur-sm"></div>
                
                {/* Data protection illustration */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                >
                  <div className="relative w-3/4 h-3/4 opacity-30">
                    <div className="absolute inset-0 border-2 border-purple-200 rounded-full"></div>
                    <div className="absolute inset-4 border border-indigo-300 rounded-full"></div>
                    <div className="absolute inset-8 border border-purple-400 rounded-full"></div>
                    <div className="absolute inset-12 border border-indigo-500 rounded-full"></div>
                  </div>
                </motion.div>
                
                {/* Floating elements - using fixed positions for SSR consistency */}
                {[1, 2, 3, 4, 5].map((i) => {
                  const positions = [
                    { top: "25%", left: "15%" },
                    { top: "35%", left: "25%" },
                    { top: "50%", left: "40%" },
                    { top: "65%", left: "25%" },
                    { top: "75%", left: "15%" }
                  ];
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-6 h-6 bg-white rounded-full opacity-80"
                      style={positions[i-1]}
                      animate={{
                        y: [0, -10, 0, 10, 0],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Tech icons floating around */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-800 rounded-xl p-4 shadow-lg flex items-center justify-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="text-purple-400 text-4xl font-bold">AI</div>
            </motion.div>
            
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-gray-800 rounded-xl p-4 shadow-lg flex items-center justify-center"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <div className="text-indigo-400 text-3xl font-bold">ZKP</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-purple-300/50 flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-purple-300 rounded-full"
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;