// Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert('Message sent! (Form submission is a placeholder)');
    setForm({ name: '', email: '', phone: '', message: '' });
  };
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{color: '#0d2b45'}}>Get in Touch</h2>
            <div className="mb-3">
              <strong>Address:</strong><br />
              SBS College of Pharmacy<br />
        
              Sushil Nagar jalaun road behind janki palace Orai  – 285001 Uttar Pradesh<br />
              India
            </div>
            <div className="mb-2"><strong>Phone:</strong> <a href="tel:+918887649974" className="text-decoration-none">+91 8887649974</a>, <a href="tel:9839624868" className="text-decoration-none">9839624868</a></div>
            <div className="mb-3"><strong>Email:</strong> <a href="mailto:madhogarh@gmail.com" className="text-decoration-none">madhogarh@gmail.com</a></div>
            <div className="ratio ratio-16x9 rounded shadow">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.003073964479!2d79.4479213154316!3d25.99350008352745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU5JzM2LjYiTiA3OcKwMjcnMDIuMiJF!5e0!3m2!1sen!2sin!4v1710240000000!5m2!1sen!2sin" title="Google Map" allowFullScreen loading="lazy" style={{border:0}}></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 p-4">
              <h4 className="mb-3">Contact Form</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" className="form-control" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" name="message" rows="4" placeholder="Message" value={form.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary px-4 fw-semibold" style={{background: '#0d2b45', border: 'none'}}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
