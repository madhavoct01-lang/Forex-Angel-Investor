/*
ForexAngelLanding.jsx
Refactored version with full-width sections and no gaps.
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FullLogo from './assets/Print_Transparent.svg'; // <-- Put your FullLogo.png here


const testimonials = [
  {
    text: "Consistent returns and timely reports — team is responsive and data-driven.",
    name: "A. Singh",
    designation: "Family Office",
    rating: 5,
  },
  {
    text: "High conviction trades executed with discipline — excellent risk controls.",
    name: "M. Carter",
    designation: "HNWI",
    rating: 4.5,
  },
  {
    text: "The best forex exposure I've had in years. Clear communication and transparency.",
    name: "L. Zhao",
    designation: "LP",
    rating: 5,
  },
  {
    text: "Very professional team, transparent strategy, and excellent returns consistently.",
    name: "R. Fernandez",
    designation: "Family Office",
    rating: 4,
  },
];

export default function ForexAngelLanding() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  function submitForm(e) {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Thanks — we\'ll be in touch!');
      setEmail('');
    }, 900);
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0C3A] text-[#EAEAEA] font-poppins w-full">
        {/* HEADER */}
        <header className="w-full bg-[#0B0C3A]">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
        <img 
            src={FullLogo} 
            alt="Forex Angel Investors" 
            className="h-40 w-auto object-contain"
        />
        </div>

    {/* Navigation */}
    <nav className="hidden md:flex items-center gap-7 text-mm font-semibold">
      <a href="#plans" className="font-semibold hover:text-[#F5B23E] transition">Plans</a>
      <a href="#why" className="font-semibold hover:text-[#F5B23E] transition">Why Us</a>
      <a href="#testimonials" className="font-semibold hover:text-[#F5B23E] transition">Testimonials</a>
      <a 
  
  href="https://t.me/+UVM95WpWO0AyNTRl"
          target="_blank"
          rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F5B23E] to-[#D9A53C] 
             text-[#0B0C3A] font-semibold px-4 py-2 rounded-lg shadow-lg
             hover:from-[#D9A53C] hover:to-[#B8852F] transition-all duration-200"
>
  Join
</a>
    </nav>
  </div>
</header>



<main className="flex-grow w-full bg-[#0B0C3A]">
  <div className="max-w-6xl mx-auto px-6 py-1 flex flex-col items-center gap-10">
    {/* HERO TEXT */}
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full flex flex-col items-center text-center"
    >
   <h1 className="mt-2 text-6xl md:text-8xl text-gray-300 font-inter" style={{ fontWeight: 500 }}>
  Professional Forex Investment
</h1>
<h2 className=" mt-6 text-3xl md:text-3xl text-gray-400 font-medium mt-2">
  Backed by Experience
</h2>

      <p className="mt-6 max-w-xl text-gray-400 leading-relaxed font-inter">
We are a team of former J.P. Morgan traders and quantitative analysts dedicated to delivering transparent, data-driven forex investment strategies. Select a plan tailored to your risk appetite. All market analysis and trades are conducted by our experts—no automated systems or EAs involved.
      </p>

     <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center font-semibold">
  <a 
    
      href="https://t.me/+UVM95WpWO0AyNTRl"
          target="_blank"
          rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F5B23E] to-[#D9A53C] text-[#0B0C3A] font-semibold px-6 py-3 rounded-lg shadow-lg
           hover:from-[#D9A53C] hover:to-[#B8852F] transition-[background] duration-200"
  >
    Join the Network
  </a>
  <a
    href="#plans"
    className="inline-flex items-center gap-2 border border-[#F5B23E] px-5 py-3 rounded-lg
           text-[#F5B23E] bg-transparent font-semibold text-sm
           hover:bg-[#F5B23E] hover:text-[#0B0C3A] transition-colors duration-200"
  >
    View Plans
  </a>
</div>

<section id="why" className="mt-20 flex flex-col items-center w-full px-4">
  {/* Heading */}
  <h4 className="text-3xl md:text-4xl font-normal text-gray-200 mb-8 text-center font-inter">
  Why Choose Us?
</h4>
  {/* Existing Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-sm text-gray-300">

  <div className="flex flex-col items-center justify-center rounded-2xl px-6 py-8 bg-[#0E0F2A] border border-[#202046] shadow-2xl transition-all duration-300 text-center">
    <div className="font-bold text-lg mb-3 text-white">Regulated Partners</div>
    <div className="text-gray-400 leading-relaxed">
     We collaborate with licensed and regulated financial institutions to guarantee transparency, security, and full compliance with industry standards, ensuring your investments are safe and reliable.

    </div>
  </div>

  <div className="flex flex-col items-center justify-center rounded-2xl px-6 py-8 bg-[#0E0F2A] border border-[#202046] shadow-2xl transition-all duration-300 text-center">
    <div className="font-bold text-lg mb-3 text-white">Daily Reporting</div>
    <div className="text-gray-400 leading-relaxed">
     Stay informed with clear, concise daily updates on your portfolio performance and executed trades. Our reports provide actionable insights, giving you confidence and control over your investments at all times.
    </div>
  </div>

  <div className="flex flex-col items-center justify-center rounded-2xl px-6 py-8 bg-[#0E0F2A] border border-[#202046] shadow-2xl transition-all duration-300 text-center">
    <div className="font-bold text-lg mb-3 text-white">Custody & 24/7 Support</div>
    <div className="text-gray-400 leading-relaxed">
      All assets are securely managed, and our dedicated support team is available around the clock. We ensure your investments are protected, giving you peace of mind and confidence in every decision.
    </div>
  </div>

</div>




</section>




    </motion.section>


    {/* INVESTMENT OPTIONS BELOW */}
{/* INVESTMENT OPTIONS SECTION */}
<section id="plans" className="mt-20 flex flex-col items-center w-full">

    {/* Heading */}
  <h4 className="text-3xl md:text-4xl font-normal text-gray-200 mb-8 text-center font-inter">
 Investment Options
</h4>

  <motion.aside
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.12 }}
    className="w-full flex flex-col gap-4 items-center"
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      

    {/* Group A */}
<div className="flex flex-col items-start rounded-2xl bg-[#0E0F2A] shadow-2xl hover:bg-[#181945] transition-all duration-300 text-left border-t-4 border-[#FFD166] p-6 font-inter">
  {/* Plan Label */}
  <div className="text-sm text-[#FFD166] font-semibold">Featured Plan</div>

  {/* Title */}
  <h3 className="mt-2 font-bold text-xl text-gray-100">Group A — High Returns</h3>

  {/* Description */}
  <p className="mt-2 text-sm text-gray-400">
    Intensive 8-day trading strategy for ambitious investors, led by experienced professionals with a proven track record.
  </p>

  {/* Features List */}
  <ul className="mt-4 space-y-2 text-gray-400 list-none">
  <li className="flex items-start">
    <span className="mr-2 mt-1 text-[#FFD166]">✔</span>
    Dynamic hedging with leveraged opportunities
  </li>
  <li className="flex items-start">
    <span className="mr-2 mt-1 text-[#FFD166]">✔</span>
    Actionable, high-probability trade strategies
  </li>
  <li className="flex items-start">
    <span className="mr-2 mt-1 text-[#FFD166]">✔</span>
    Comprehensive risk management strategies
  </li>
</ul>


  {/* Stats Section */}
  <div className="mt-6 space-y-3">
    <div>
      <div className="text-gray-400 text-sm">Minimum Investment</div>
      <div className="text-gray-250 font-semibold text-lg">$1,000</div>
    </div>
    <div>
      <div className="text-gray-400 text-sm">Target</div>
      <div className="text-gray-250 font-semibold text-lg">200%</div>
    </div>
    <div>
      <div className="text-gray-400 text-sm">Tenure</div>
      <div className="text-gray-250 font-semibold text-lg">8 days</div>
    </div>
    <div>
      <div className="text-gray-400 text-sm">Win-rate</div>
      <div className="text-gray-250 font-semibold text-lg">80%</div>
    </div>
  </div>
</div>



     {/* Group B */}
<div className="flex flex-col items-start rounded-2xl bg-[#0E0F2A] shadow-2xl hover:bg-[#181945] transition-all duration-300 text-left border-t-4 border-[#22C55E] p-6 font-inter">
  {/* Plan Label */}
  <div className="text-sm text-[#22C55E] font-semibold">Stable Plan</div>
  
  {/* Title */}
  <h3 className="mt-2 font-bold text-xl text-gray-100">Group B — Longterm Returns</h3>
  
  {/* Description */}
  <p className="mt-2 text-sm text-gray-400">
    Strategic, long-term forex investment designed for steady growth. Operated by skilled traders focused on long-term returns.
  </p>
  
  {/* Features List */}
<ul className="mt-4 space-y-2 text-gray-400 list-none">
  <li className="flex items-center"><span className="mr-2 text-green-500">✔</span>Diversified portfolio with gradual position scaling</li>
  <li className="flex items-center"><span className="mr-2 text-green-500">✔</span>Continuous trader oversight and performance monitoring</li>
  <li className="flex items-center"><span className="mr-2 text-green-500">✔</span>Robust risk management to protect capital</li>
</ul>
  
  {/* Stats Section */}
  <div className="mt-6 space-y-3">
    <div>
      <div className="text-gray-400 text-sm">Minimum Investment</div>
      <div className="text-gray-250 font-semibold text-lg">$5,000</div>
    </div>
    <div>
      <div className="text-gray-400 text-sm">Target</div>
      <div className="text-gray-250 font-semibold text-lg">20% p.m</div>
    </div>
    <div>
      <div className="text-gray-400 text-sm">Tenure</div>
      <div className="text-gray-250 font-semibold text-lg">30 days</div>
    </div>
    <div>
      <div className="text-gray-400 text-sm">Win-rate</div>
      <div className="text-gray-250 font-semibold text-lg">100%</div>
    </div>
  </div>
</div>




      {/* Group C */}
      <div className="flex flex-col items-start rounded-2xl bg-[#0E0F2A] shadow-2xl hover:bg-[#181945] transition-all duration-300 text-left border-t-4 border-[#7332a8] p-6 font-inter">
  {/* Plan Label */}
  <div className="text-sm text-[#7332a8] font-semibold">Only Signals</div>

  {/* Title */}
  <h3 className="mt-2 font-bold text-xl text-gray-100">Group C — Signals Only</h3>

  {/* Description */}
  <p className="mt-2 text-sm text-gray-400">
    Receive curated forex signals designed for informed traders seeking guidance without full management.
  </p>

  {/* Features List */}
  <ul className="mt-4 space-y-2 text-gray-400 list-none">
  <li className="flex items-start">
    <span className="mr-2 mt-1 text-[#7332A8]">✔</span>
    Precise and easy-to-follow trade signals
  </li>
  <li className="flex items-start">
    <span className="mr-2 mt-1 text-[#7332A8]">✔</span>
    Instant notifications for timely market moves
  </li>
  <li className="flex items-start">
    <span className="mr-2 mt-1 text-[#7332A8]">✔</span>
    Integrated risk guidance for every trade for trade optimisations
  </li>
</ul>

  {/* Stats Section */}
  <div className="mt-6 space-y-3">
    <div>
      <div className="text-gray-400 text-sm">Plan Type</div>
      <div className="text-gray-250 font-semibold text-lg">Signals Only</div>
    </div>
    <div>
      <div className="text-gray-400 text-sm">Win-rate</div>
      <div className="text-gray-250 font-semibold text-lg">90%</div>
    </div>
  </div>
</div>


    </div>
  </motion.aside>
</section>


  </div>
</main>


{/* TESTIMONIALS */}
 <section id="testimonials" className="w-full bg-[#0B0C3A] py-24 relative overflow-hidden">
    
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-12">
         <h4 className="text-3xl md:text-4xl font-normal text-gray-200 text-center font-inter">
 Trusted by Investors
</h4>
        <p className="text-gray-400 text-center">
          Real feedback from our limited partners and accredited investors.
        </p>

        <div className="flex flex-col gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className={`relative bg-[#0E0F2A]/60 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg max-w-3xl ${
                idx % 2 === 0 ? "self-start" : "self-end"
              }`}
            >
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">{t.text}</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">— {t.name}</div>
                  <div className="text-gray-400 italic text-sm">{t.designation}</div>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => {
                    if (i + 0.5 === t.rating) {
                      return (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      );
                    } else if (i < t.rating) {
                      return (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      );
                    } else {
                      return (
                        <span key={i} className="text-gray-600 text-sm">★</span>
                      );
                    }
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


     {/* JOIN / CONTACT */}
<section id="join" className="w-full bg-[#0B0C3A] py-12">
  <div className="max-w-4xl mx-auto px-6">
    <div className="bg-gradient-to-r from-[#0B0C3A]/60 to-[#0E0F2A]/60 rounded-3xl p-8 border border-[#1b1c38]">
      
      <h3 className="text-2xl font-bold text-gray-100">Join the Forex Angel Network</h3>
      <p className="mt-2 text-gray-400">
        Apply for a plan or get a bespoke allocation. Click below to join our Telegram channel and connect directly with our team.
      </p>

      <div className="mt-6">
        <a
          href="https://t.me/+UVM95WpWO0AyNTRl"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#F5B23E] text-[#0B0C3A] font-semibold rounded-md hover:bg-[#FFD166] transition"
        >
          Join Telegram
        </a>
      </div>

    </div>
  </div>
</section>



      {/* FOOTER */}
      <footer className="w-full bg-[#0B0C3A] py-8 text-sm text-gray-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Forex Angel Investors — All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#F5B23E]">Privacy</a>
            <a href="#" className="hover:text-[#F5B23E]">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
