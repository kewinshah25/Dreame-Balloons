"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./SubmitForm.css";

const SubmitForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showBalloon1, setShowBalloon1] = useState(true);
  const [showBalloon2, setShowBalloon2] = useState(true);

  
  useEffect(() => {
  const savedData = JSON.parse(localStorage.getItem("formData"));
  if (savedData) {
    setName(savedData.name || "");
    setEmail(savedData.email || "");
    setMessage(savedData.message || "");
  }
}, []);

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);

    if (!newName || /\d/.test(newName) || !/^[a-zA-Z\s]+$/.test(newName)) {
      setNameError("Please enter a valid name");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newEmail || !emailRegex.test(newEmail)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const handleMessageChange = (event) => {
    const newMessage = event.target.value;
    setMessage(newMessage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || nameError || emailError) {
      if (!name) setNameError("Please enter your name");
      if (!email) setEmailError("Please enter your email");
      setFormSubmitted(true);
      return;
    }
    const formData = { name, email, message };
    localStorage.setItem("formData", JSON.stringify(formData));

    setName("");
    setEmail("");
    setMessage("");
    setFormSubmitted(true);
    toast.success("Message sent successfully! We'll be in touch soon.", {
      position: "bottom-right",
    });
  };


  return (
    <div className='wrapper'>
      {showBalloon1 && (
        <Image
          src="/assets/images/balloon1.png"
          alt=""
          width={398}
          height={404}
          className='img-baloon first'
          onError={() => setShowBalloon1(false)}
        />
      )}
      {showBalloon2 && (
        <Image
          src="/assets/images/balloon2.png"
          alt=""
          width={460}
          height={469}
          className='img-baloon second'
          onError={() => setShowBalloon2(false)}
        />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div className='container'>
          <div className='form-group'>
            <p>Name *</p>
            <input
              type='text'
              id='name'
              value={name}
              onChange={handleNameChange}
              placeholder='Your name'
              autoComplete='off'
              className={
                nameError || (formSubmitted && !name) ? "errorBcg" : ""
              }
            />
            {(nameError || (formSubmitted && !name)) && (
              <span className='error'>{nameError}</span>
            )}
          </div>
          <div className='form-group'>
            <p>Email *</p>
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleEmailChange}
              placeholder='you@example.com'
              autoComplete='off'
              className={
                emailError || (formSubmitted && !email) ? "errorBcg" : ""
              }
            />
            {(emailError || (formSubmitted && !email)) && (
              <span className='error'>{emailError}</span>
            )}
          </div>

          <div className='form-textarea'>
            <p>Message</p>
            <textarea
              id='message'
              value={message}
              onChange={handleMessageChange}
              placeholder='Tell us about your event...'
            />
          </div>

          <button
            type='submit'
            disabled={nameError || emailError}
            className='form-btn'
          >
            Send message
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
    
  );
};

export default SubmitForm;
