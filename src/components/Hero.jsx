// Hero.jsx
import React from 'react';


const Hero = () => (
  <section id="home" className="hero-section d-flex align-items-center" style={{background: 'linear-gradient(120deg, #0d2b45 80%, #1f9d73 100%)', minHeight: '80vh', color: '#fff'}}>
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-7">
          <h1 className="display-4 fw-bold mb-3">Build Your Career in Pharmaceutical Sciences</h1>
          <p className="lead mb-4">Admissions Open for D.Pharmacy 2026–27</p>
          <div className="d-flex gap-3">
            <a href="#admissions" className="btn btn-success btn-lg px-4" style={{background: '#1f9d73', border: 'none'}}>Apply Now</a>
            <a href="#" className="btn btn-lg px-4" style={{background: '#d2a72c', color: '#fff', border: 'none'}}>Download Prospectus</a>
          </div>
        </div>
        <div className="col-lg-5 d-none d-lg-block">
          {/* <img src="/image/hero.jpg" alt="SBS Pharmacy College" className="img-fluid rounded shadow" /> */}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
