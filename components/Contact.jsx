"use client"
import React from 'react'
import '@/styles/Contact.css'
import Select from 'react-select';

const Contact = () => {
  const reasonOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Web development' },
    { value: 'sales', label: 'Design' },
    { value: 'feedback', label: 'Management' },
    { value: 'other', label: 'Other' }
  ];
  return (
    <div>
      <form className="contact-form">
        <h2>Contact Us</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>


        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <Select
            id="reason"
            name="reason"
            options={reasonOptions}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className='form-group-textarea' id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact