// Faculty.jsx
import React from 'react';


const faculty = [
  {
    name: 'Mr. Sudhir Awasthi',
    degree: '',
    position: 'Manager',
    experience: '',
    image: '/images/Shudir-removebg-preview.png'
  },
  {
    name: 'Mr. Rohit Awasthi',
    degree: '',
    position: 'Director',
    experience: '',
    image: '/images/Rohit-removebg-preview.png'
  },
  {
    name: 'Mr. Mukesh Gupta',
    degree: '',
    position: 'Co-Director',
    experience: '',
    image: '/images/Mukesh.png'
  },
  {
    name: 'Mr. Gyandev Chaturvedi',
    degree: '',
    position: 'Executive Director',
    experience: '',
    image: '/images/Gyandev-removebg-preview.png'
  },
  {
    name: 'Dr. Himanshu Pratap Singh Gurjar',
    degree: 'M.Pharm, PhD',
    position: 'Principal',
    experience: '15 Years Experience',
    image: '/images/Himashu-removebg-preview.png'
  },
  {
    name: 'Mr. Shivam Kumar',
    degree: 'M.Pharm',
    position: 'HOD',
    experience: '6 Years Experience',
    image: '/images/Shivam.png'
  },
  {
    name: 'Ms. Monisha Gupta',
    degree: 'M.Pharm',
    position: 'Assistant Professor',
    experience: '3 Years Experience',
    image: '/images/default-faculty.jpg'
  },
  {
    name: 'Mr. Mohit Pal',
    degree: 'M.Sc',
    position: 'Computer Operater',
    experience: '5 year Experience',
    image: '/images/Mohit-removebg-preview.png'
  }
];
const Faculty = () => (
  <section id="faculty" className="py-5 bg-light">
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8 text-center">
          <h2 className="fw-bold mb-3" style={{color: '#0d2b45'}}>Our Faculty</h2>
        </div>
      </div>
      <div className="row g-4">
        {faculty.map((f, idx) => (
          <div className="col-md-6 col-lg-3" key={idx}>
            <div className="card h-100 shadow-lg border-0 text-center p-4" style={{borderRadius: '1.5rem', background: '#f8f9fa'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img
                  src={f.image}
                  alt={f.name}
                  className="mb-3 shadow"
                  style={{width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%', border: '4px solid #0d2b45', background: '#fff'}}
                />
                <h5 className="fw-bold mb-1" style={{fontSize: '1.15rem', color: '#0d2b45'}}>{f.name}</h5>
                <div className="mb-1" style={{fontWeight: 500, color: '#1f9d73'}}>{f.position}</div>
                <div className="small text-muted mb-1">{f.degree}</div>
                <div className="text-success small">{f.experience}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Faculty;
