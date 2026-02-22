"use client";

import AboutSlider from "@/app/ui/AboutSlider/AboutSlider";
import { motion } from "framer-motion";
import "./About.css";
const About = () => {
  return (
    <section className='about-section'>
      <div className='container'>
        <div className='about-wrapper'>
          <div className='about-text'>
            <h2>Why choose Dreame Balloons</h2>
            <p>
              We’re a creative team dedicated to turning your vision into reality—with balloon décor that’s unique, stylish, and unforgettable.
            </p>
          </div>

          <ul className='about-list'>
            <motion.li className='about-item'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h3>Creative approach and attention to detail</h3>
              <p>
                Specialists provide advice and creativity when choosing balloon decorations, with attention to detail
              </p>
            </motion.li>
            <motion.li className='about-item'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h3>Materials friendly to the environment</h3>
              <p>
                High-quality materials are used, including biodegradable balloon materials, to leave the smallest possible footprint on the environment.
              </p>
            </motion.li>
            <motion.li className='about-item'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h3>Wide range of colors for personalization</h3>
              <p>
                Balloons and decorations are chosen from a wide range of colors, allowing you to personalize the decoration for any occasion.
              </p>
            </motion.li>
            <motion.li className='about-item'
            initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              >
              <h3>Delivery and installation guarantee</h3>
              <p>
                The company guarantees not only high-quality delivery of orders, but also their installation, providing comprehensive customer service.
              </p>
            </motion.li>
          </ul>
          <AboutSlider />
        </div>
      </div>
    </section>
  );
};

export default About;
