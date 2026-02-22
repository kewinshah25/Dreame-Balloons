"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Baloon1 from "../../../public/assets/images/balloon1.png";
import Baloon2 from "../../../public/assets/images/balloon2.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className='hero-section'>
      <Image
        src={Baloon1}
        alt='air baloon'
        width={398}
        height={404}
        className='baloon-img first'
        priority
      />
      <motion.div className='hero-content'
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
      <Image
        src={Baloon2}
        alt='air baloon'
        width={460}
        height={469}
        className='baloon-img second'
        priority
      />
    </section>
  );
};

export default Hero;
