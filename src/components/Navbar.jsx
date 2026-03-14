// Navbar.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
// Use public path for logo
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm" style={{background: 'linear-gradient(90deg, #0d2b45 80%, #1f9d73 100%)'}}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img src="/images/Logo.png" alt="SBS College of Pharmacy" style={{height: '52px', width: '52px', objectFit: 'contain', background: '#fff', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginRight: '0.75rem', border: '2px solid #fff'}} />
          <span className="fw-bold" style={{fontSize: '1.35rem', color: '#fff', letterSpacing: '0.5px', textShadow: '0 1px 4px rgba(0,0,0,0.12)'}}>SBS College of Pharmacy</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#program">D.Pharm</a></li>
            <li className="nav-item"><a className="nav-link" href="#faculty">Faculty</a></li>
            <li className="nav-item"><a className="nav-link" href="#infrastructure">Infrastructure</a></li>
            <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
            <li className="nav-item"><a className="nav-link" href="#admissions">Admissions</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
          <div className="d-flex gap-2 flex-column flex-lg-row mt-3 mt-lg-0 align-items-center">
            <a href="#admissions" className="btn fw-semibold w-100 w-lg-auto" style={{background: '#1f9d73', color: '#fff', border: 'none', borderRadius: '0.6rem', fontSize: '1.08rem', padding: '0.7rem 2.2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>Apply Now</a>
            <a href="#admissions" className="btn fw-semibold w-100 w-lg-auto" style={{background: '#d2a72c', color: '#fff', border: 'none', borderRadius: '0.6rem', fontSize: '1.08rem', padding: '0.7rem 2.2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>Download Prospectus</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
