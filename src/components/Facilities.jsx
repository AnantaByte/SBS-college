// Facilities.jsx
import React from 'react';
import { FaBook, FaFlask, FaWifi, FaBed, FaFutbol, FaBus } from 'react-icons/fa';

const facilities = [
  { icon: <FaBook size={32} className="text-primary" />, title: 'Library', desc: '24/7 access to extensive collection' },
  { icon: <FaFlask size={32} className="text-success" />, title: 'Advanced Labs', desc: 'Modern research facilities' },
  { icon: <FaWifi size={32} className="text-info" />, title: 'WiFi Campus', desc: 'High-speed internet throughout campus' },
  { icon: <FaBed size={32} className="text-warning" />, title: 'Hostel Facility', desc: 'Comfortable student accommodation' },
  { icon: <FaFutbol size={32} className="text-danger" />, title: 'Sports Facilities', desc: 'Complete recreation amenities' },
  { icon: <FaBus size={32} className="text-secondary" />, title: 'Transportation', desc: 'Convenient bus services' },
];

const Facilities = () => (
  <section id="facilities" className="py-5 bg-white">
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8 text-center">
          <h2 className="fw-bold mb-3" style={{color: '#0d2b45'}}>Student Facilities</h2>
        </div>
      </div>
      <div className="row g-4">
        {facilities.map((item, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
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

export default Facilities;
