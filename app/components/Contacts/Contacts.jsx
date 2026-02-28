"use client";

import SubmitForm from "@/app/ui/SubmitForm/SubmitForm";
import { motion } from "framer-motion";
import Mail from "../../../public/Dreame-Balloons/assets/icons/mail.svg";
import Phone from "../../../public/Dreame-Balloons/assets/icons/phone.svg";
import "./Contacts.css";

const Contacts = () => {
  return (
    <section id='contacts' className='contacts-section'>
      <div className='container'>
        <div className='contacts-wrapper'>
          <motion.div className='contacts-content'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h2 className='contacts-title'>Contacts</h2>
            <p>Dreame Balloons — Balloon decor studio</p>
            <div className='contacts'>
              <a href='tel:+48793351407 ' className='contact-link'>
                <Phone aria-label='phone' />
                +123 456 7890
              </a>
              <a
                href='mailto:dreameballoons@gmail.com'
                className='contact-link'
              >
                <Mail aria-label='mail' />
                dreameballoons@gmail.com
              </a>
            </div>
          </motion.div>
          <SubmitForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
