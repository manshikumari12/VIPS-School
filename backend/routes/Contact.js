const express = require('express');
const ContactRouter = express.Router();
const { ContactModel } = require("../models/Contact");
const nodemailer = require('nodemailer');
require('dotenv').config(); 


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
       
    },
    
  });

// Function to send email
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, 
    to,
    subject,
    text
  };

  return transporter.sendMail(mailOptions);
};

// POST /api/contact
ContactRouter.post('/contact', async (req, res) => {
  try {
    const { fullName, email, phone, address, city, state, message } = req.body;

    const newContact = new ContactModel({
      fullName,
      email,
      phone,
      address,
      city,
      state,
      message
    });

    await newContact.save();

   
    await sendEmail(
      'earnmore981@gmail.com',
      'New Contact Form Submission',
      `You have a new message from ${fullName}:\n\n${message}\n\nContact: ${phone}, ${email}`
    );

    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Failed to submit contact form.', error: error.message });
  }
});

module.exports = { ContactRouter };
