// About.jsx
import React from 'react';


const About = () => (
  <section id="about" className="py-5 bg-white">
    <div className="container">
      <div className="row align-items-start">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img src="/images/campus.png" alt="Campus" className="img-fluid rounded shadow" />
        </div>
        <div className="col-lg-6">
          <h2 className="fw-bold mb-3" style={{color: '#0d2b45'}}>About SBS College of Pharmacy</h2>
          <p className="mb-3">Shaheed Bhagat Singh (SBS) College of Pharmacy is a dedicated institution committed to providing quality education in the field of pharmaceutical sciences. The college aims to develop skilled pharmacists who can contribute effectively to the healthcare system and pharmaceutical industry. With a strong focus on academic excellence, practical knowledge, and professional ethics, SBS College of Pharmacy prepares students to meet the growing demands of the healthcare sector.</p>
          <p className="mb-3">The college offers a well-structured curriculum supported by modern laboratories, well-equipped classrooms, and a resourceful library that encourages research and innovation. Our experienced faculty members guide students through both theoretical learning and hands-on practical training, ensuring they gain a comprehensive understanding of pharmaceutical practices.</p>
          <p className="mb-3">At SBS College of Pharmacy, we emphasize holistic development by encouraging students to participate in seminars, workshops, research activities, and industry exposure programs. Our mission is to create competent healthcare professionals who uphold the values of integrity, responsibility, and service to society.</p>
          <p className="mb-4">Through quality education and continuous learning, SBS College of Pharmacy strives to become a center of excellence in pharmaceutical education and contribute positively to the advancement of healthcare and medicine.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
