// Admissions.jsx
import React from 'react';

const Admissions = () => (
  <section id="admissions" className="py-5" style={{background: 'linear-gradient(120deg, #0d2b45 80%, #1f9d73 100%)', color: '#fff'}}>
    <div className="container text-center">
      <h2 className="fw-bold mb-3">Admissions Open</h2>
      <h4 className="mb-4">D.Pharmacy 2026–27</h4>
      <div className="d-flex justify-content-center gap-3 mb-3 flex-wrap">
        <a href="#contact" className="btn btn-success px-4 fw-semibold" style={{background: '#1f9d73', border: 'none'}}>Apply for Admission</a>
        <a href="#admissions" className="btn px-4 fw-semibold" style={{background: '#d2a72c', color: '#fff', border: 'none'}}>Download Prospectus</a>
      </div>
    </div>
  </section>
);

export default Admissions;
