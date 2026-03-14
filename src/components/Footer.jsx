// Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer-section pt-5 pb-3" style={{background: '#0d2b45', color: '#fff'}}>
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-3 mb-3">
          <img src="/images/Logo.png" alt="SBS College of Pharmacy Logo" style={{height: '48px', marginBottom: '0.5rem'}} />
          <h5 className="fw-bold mt-2">SBS College of Pharmacy</h5>
          <div className="mb-2">sbsadmit.co.in</div>
          <div className="small">Excellence in pharmaceutical education since establishment.</div>
        </div>
        <div className="col-md-3 mb-3">
          <h6 className="fw-bold">Quick Links</h6>
          <ul className="list-unstyled">
            <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
            <li><a href="#about" className="text-white text-decoration-none">About Us</a></li>
            <li><a href="#program" className="text-white text-decoration-none">D.Pharm</a></li>
            <li><a href="#faculty" className="text-white text-decoration-none">Faculty</a></li>
            <li><a href="#infrastructure" className="text-white text-decoration-none">Infrastructure</a></li>
            <li><a href="#gallery" className="text-white text-decoration-none">Gallery</a></li>
          </ul>
        </div>
        <div className="col-md-3 mb-3">
          <h6 className="fw-bold">Admissions</h6>
          <ul className="list-unstyled">
            <li><a href="#admissions" className="text-white text-decoration-none">Apply Now</a></li>
            <li><a href="#program" className="text-white text-decoration-none">Eligibility (D.Pharm)</a></li>
            <li><a href="#" className="text-white text-decoration-none">Fee Structure</a></li>
            <li><a href="#" className="text-white text-decoration-none">Download Prospectus</a></li>
          </ul>
        </div>
        <div className="col-md-3 mb-3">
          <h6 className="fw-bold">Contact Info</h6>
          <div className="mb-1">
            <strong>SBS College of Pharmacy</strong><br />
            Sushil Nagar, Jalaun Road, Behind Janki Palace<br />
            Orai – 285001, Uttar Pradesh, India
          </div>
          <div className="mb-1">
            <strong>Phone:</strong> <a href="tel:+918887649974" className="text-white text-decoration-none">+91 8887649974</a>, <a href="tel:9839624868" className="text-white text-decoration-none">9839624868</a>
          </div>
          <div className="mb-2">
            <strong>Email:</strong> <a href="mailto:madhogarh@gmail.com" className="text-white text-decoration-none">madhogarh@gmail.com</a>
          </div>
          <div className="d-flex gap-2">
            {/* <a href="#" className="text-white"><FaFacebookF /></a> */}
          </div>
        </div>
      </div>
      <div className="text-center small" style={{color: '#d2a72c'}}>
        © 2024 SBS College of Pharmacy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
