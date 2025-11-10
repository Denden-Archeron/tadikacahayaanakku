"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import "@fontsource/fredoka";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="font-['Fredoka'] bg-[#FFF5ED] text-[#2E2E2E] overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-6 bg-[#FFF5ED] shadow-md sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src="/Logo Tadika Cahaya Anakku.png"
              alt="Logo Taska Cahaya An-Nur"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <span className="font-bold text-lg text-orange-600">
            Taska Cahaya An-Nur
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold text-[#333]">
          {["Home", "About", "Programmes", "Events", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-orange-500 cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-orange-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-[#FFF5ED] flex flex-col items-center space-y-4 py-6 font-semibold text-[#333] shadow-md md:hidden"
          >
            {["Home", "About", "Programmes", "Events", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-orange-500 cursor-pointer transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/School.jpg"
            alt="Teachers and Students"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 text-white bg-black/40 p-6 rounded-lg max-w-xl mx-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
          >
            Welcome to
            <br />
            Taska Cahaya An-Nur
          </motion.h1>
          <p className="text-sm md:text-base mb-4">
            A place where every child shines brightly through guided learning,
            creative play, and Islamic values.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition">
            More details
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl text-blue-500 font-bold mb-6">
          Taska Cahaya An-Nur
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Founded with a passion for nurturing young learners, Taska Cahaya
          An-Nur offers quality care and education for children aged 1 to 6
          years. Located in the heart of Sungai Buloh, we focus on early
          development through fun, values-based learning and Islamic guidance.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition">
          Learn More About Us
        </button>
      </section>

      {/* Our Programmes */}
      <section className="py-16 bg-[#FFF9F4] text-center">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-5xl mx-auto px-6 mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl text-blue-500 font-bold">
            Our Programmes
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-1 rounded-full font-semibold text-sm transition">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {[
            { title: "Babyland", age: "1-2 Years", img: "/babyland.jpg" },
            { title: "Playschool", age: "3-4 Years", img: "/playschool.jpg" },
            { title: "Preschool", age: "5-6 Years", img: "/preschool.jpg" },
            { title: "Transit", age: "After School Care", img: "/transit.jpg" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden bg-[#F79F35]"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-white text-center">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm mb-3">{item.age}</p>
                <button className="bg-[#E45C00] hover:bg-[#d64f00] text-white px-4 py-1 rounded-full text-sm font-semibold transition">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#FFF5ED] text-center px-6">
        <h2 className="text-3xl md:text-4xl text-blue-500 font-bold mb-2">
          Why Choose Us
        </h2>
        <p className="text-sm text-orange-500 mb-10">
          Discover what makes Taska Cahaya An-Nur the perfect choice for your
          child’s early education
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: "/Teach.png",
              title: "Experienced & Caring Teachers",
              desc: "Our dedicated team provides personalized attention to every child",
            },
            {
              icon: "/Pin.png",
              title: "Convenient Location",
              desc: "Easy access near key schools in Sungai Buloh.",
            },
            {
              icon: "/Sheild.png",
              title: "Safe & Stimulating Environment",
              desc: "Clean, secure spaces designed for optimal learning and play",
            },
            {
              icon: "/Quran.png",
              title: "Islamic & Moral Values",
              desc: "Values-based education integrated into daily activities",
            },
            {
              icon: "/Balance.png",
              title: "Balanced Learning Approach",
              desc: "Perfect blend of academic and play-based activities",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md py-6 px-4 flex flex-col items-center transition"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
                className="mb-3"
              />
              <h3 className="font-semibold text-black mb-1">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Parents Say */}
      <section className="py-16 bg-[#FFF9F4] text-center px-6">
        <h2 className="text-3xl text-blue-500 font-bold mb-10">
          What Parents Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-md transition"
            >
              <div className="h-12 w-12 rounded-full bg-orange-300 mx-auto mb-4 flex items-center justify-center text-white font-bold">
                P{i + 1}
              </div>
              <p className="italic text-gray-600 mb-2">
                “The teachers are very caring and my child enjoys every day at
                the school!”
              </p>
              <p className="font-semibold text-orange-600">Parent {i + 1}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-16 text-center max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-blue-500 font-bold mb-10">
          Visit Us Today
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-4 text-sm sm:text-base">
            <div>
              <h3 className="font-bold text-lg">Address</h3>
              <p>
                No. 2, Jalan Hasta, U19/17, Jalan Paya Jaras Tengah, Taman
                Pinggiran Sungai Buloh, 40160 Shah Alam, Selangor
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Phone & WhatsApp</h3>
              <p>+60 12-649 9611</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Email</h3>
              <p>azarina.ag@gmail.com</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Operating Hours</h3>
              <p>Monday – Saturday: 7:00 AM – 7:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps?q=Taska+Cahaya+An-Nur,+Shah+Alam&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-2xl shadow-md"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-3">
              About Taska Cahaya An-Nur
            </h3>
            <p className="text-sm leading-relaxed">
              Taska Cahaya An-Nur is a trusted early education center in Sungai
              Buloh that nurtures children through fun learning and Islamic
              values. Our goal is to provide a caring, stimulating, and safe
              environment where every child shines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About Us", "Programmes", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gray-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-3">Contact Us</h3>
            <p className="text-sm mb-1">
              📍 No. 2, Jalan Hasta, U19/17, Taman Pinggiran Sungai Buloh
            </p>
            <p className="text-sm mb-1">📞 012-649 9611</p>
            <p className="text-sm mb-1">📧 azarina.ag@gmail.com</p>
            <p className="text-sm">🕒 Mon – Sat: 7:00 AM – 7:00 PM</p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Taska Cahaya An-Nur. All rights
            reserved.
          </p>
          <p>Website crafted with ❤️ using Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
