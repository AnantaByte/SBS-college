// Highlights.jsx
import React from 'react';
import { FaCertificate, FaFlask, FaUserGraduate, FaChalkboardTeacher, FaBookOpen } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaCertificate size={36} className="text-primary" />,
    title: 'PCI Approved Institution',
    desc: 'Recognized by Pharmacy Council of India',
  },
  {
    icon: <FaBookOpen size={36} className="text-success" />,
    title: 'Diploma in pharmacy',
    desc: 'Comprehensive pharmaceutical education',
  },
  {
    icon: <FaFlask size={36} className="text-warning" />,
    title: 'Advanced Laboratories',
    desc: 'State-of-the-art pharmaceutical labs',
  },
  {
    icon: <FaChalkboardTeacher size={36} className="text-info" />,
    title: 'Experienced Faculty',
    desc: 'Expert professors and researchers',
  },
  {
    icon: <FaUserGraduate size={36} className="text-secondary" />,
    title: 'Industry-Oriented Curriculum',
    desc: 'Practical and career-focused learning',
  },
];

const Highlights = () => (
  <section className="py-5 bg-light" id="highlights">
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8 text-center">
          <h2 className="fw-bold mb-3" style={{color: '#0d2b45'}}>College Highlights</h2>
        </div>
      </div>
      <div className="row g-4">
        {highlights.map((item, idx) => (
          <div className="col-md-6 col-lg-4 col-xl-2 mx-auto" key={idx}>
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <div className="mb-2">{item.icon}</div>
              <h5 className="fw-semibold mb-1">{item.title}</h5>
              <p className="mb-0 small text-muted">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Highlights;
