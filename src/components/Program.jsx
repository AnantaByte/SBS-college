// Program.jsx
import React from 'react';
import { FaClock, FaUserCheck, FaUsers, FaUniversity } from 'react-icons/fa';

const programInfo = [
  {
    icon: <FaClock size={32} className="text-primary" />,
    title: 'Course Duration',
    desc: '2 Years',
  },
  {
    icon: <FaUserCheck size={32} className="text-success" />,
    title: 'Eligibility',
    desc: '12th Science (PCB/PCM)',
  },
  {
    icon: <FaUsers size={32} className="text-warning" />,
    title: 'Seats Available',
    desc: '60 Seats',
  },
  {
    icon: <FaUniversity size={32} className="text-info" />,
    title: 'University Affiliation',
    desc: 'Board of technical education uttar pradesh lucknow',
  },
];

const Program = () => (
  <section id="program" className="py-5 bg-light">
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8 text-center">
          <h2 className="fw-bold mb-3" style={{color: '#0d2b45'}}>D.Pharmacy Program</h2>
        </div>
      </div>
      <div className="row g-4 mb-4">
        {programInfo.map((item, idx) => (
          <div className="col-md-6 col-lg-3" key={idx}>
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <div className="mb-2">{item.icon}</div>
              <h5 className="fw-semibold mb-1">{item.title}</h5>
              <p className="mb-0 small text-muted">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a href="#admissions" className="btn btn-success px-4 fw-semibold" style={{background: '#1f9d73', border: 'none'}}>Apply Now</a>
      </div>
    </div>
  </section>
);

export default Program;
