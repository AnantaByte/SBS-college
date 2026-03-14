// Infrastructure.jsx
import React from 'react';


const infraData = [
  { img: '/images/campus.png', title: 'Campus Building', desc: 'Modern and spacious campus infrastructure' },
  { img: '/images/Pharmacy Laboratories.jpg', title: 'Pharmacy Laboratories', desc: 'Well-equipped pharmaceutical research labs' },
  { img: '/images/Library.jpg', title: 'Library', desc: 'Comprehensive collection of pharmaceutical literature' },
  { img: '/images/Computer Lab.jpg', title: 'Computer Lab', desc: 'Advanced computing facilities for research' },
  { img: '/images/Seminar Hall.png', title: 'Seminar Hall', desc: 'State-of-the-art presentation facilities' },
];

const Infrastructure = () => (
  <section id="infrastructure" className="py-5 bg-white">
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8 text-center">
          <h2 className="fw-bold mb-3" style={{color: '#0d2b45'}}>Infrastructure</h2>
        </div>
      </div>
      <div className="row g-4">
        {infraData.map((item, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className="card h-100 shadow-sm border-0">
              <img src={item.img} alt={item.title} className="card-img-top rounded" style={{height: '220px', objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="fw-semibold mb-1">{item.title}</h5>
                <p className="mb-0 small text-muted">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Infrastructure;
