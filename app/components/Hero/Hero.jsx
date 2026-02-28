"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./Hero.css";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Hero = () => {
  const [showBalloon1, setShowBalloon1] = useState(true);
  const [showBalloon2, setShowBalloon2] = useState(true);

  return (
    <section
      className='hero-section'
      style={{ backgroundImage: `url(${base}/assets/images/hero.jpg)` }}
    >
      {showBalloon1 && (
        <Image
          src="/assets/images/balloon1.png"
          alt=""
          width={398}
          height={404}
          className='baloon-img first'
          priority
          onError={() => setShowBalloon1(false)}
        />
      )}
      <motion.div
        className='hero-content'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className='hero-tagline'>Balloon decor & event styling</p>
        <h1 className='title'>
          Turn Your Events Into <span>Dreams</span>
        </h1>
        <p className='hero-subtitle'>
          Stunning balloon walls, arches, and installations for weddings, parties, and celebrations. Designed and installed with care.
        </p>
        <motion.a
          href='#contacts'
          className='hero-cta'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get a quote
        </motion.a>
      </motion.div>
      {showBalloon2 && (
        <Image
          src="/assets/images/balloon2.png"
          alt=""
          width={460}
          height={469}
          className='baloon-img second'
          priority
          onError={() => setShowBalloon2(false)}
        />
      )}
    </section>
  );
};

export default Hero;
