import React from "react";
import "./education.css";

const EducationContent = () => {
  return (
    <div className="education-container">

      {/* Hero Section */}
      <section className="education-hero">
        <h1>🏥 Hospital Education & Knowledge Hub</h1>
        <p>Empowering Healthcare Through Knowledge, Innovation & Excellence</p>
        <button>Explore Programs</button>
      </section>

      {/* Doctor Qualification Section */}
      <section className="education-section">
        <h2>👨‍⚕️ Our Medical Experts</h2>
        <div className="education-card-container">
          <div className="education-card">
            <h3>Dr. Ahmed Khan</h3>
            <p><strong>Specialization:</strong> Cardiology</p>
            <p><strong>Degree:</strong> MBBS, MD</p>
            <p><strong>Experience:</strong> 12 Years</p>
          </div>

          <div className="education-card">
            <h3>Dr. Sara Ali</h3>
            <p><strong>Specialization:</strong> Neurology</p>
            <p><strong>Degree:</strong> MBBS, DM</p>
            <p><strong>Experience:</strong> 10 Years</p>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="education-section light-bg">
        <h2>🏢 Medical Departments</h2>
        <div className="education-card-container">
          <div className="education-card">
            <h3>Cardiology</h3>
            <p>Advanced heart care and diagnostic services.</p>
          </div>

          <div className="education-card">
            <h3>Neurology</h3>
            <p>Brain & nervous system treatments.</p>
          </div>

          <div className="education-card">
            <h3>Orthopedics</h3>
            <p>Bone, joint and muscle treatments.</p>
          </div>
        </div>
      </section>

      {/* Health Articles */}
      <section className="education-section">
        <h2>📚 Health Awareness</h2>
        <div className="education-card-container">
          <div className="education-card">
            <h3>Prevent Heart Disease</h3>
            <p>Learn lifestyle changes to protect your heart.</p>
            <button className="small-btn">Read More</button>
          </div>

          <div className="education-card">
            <h3>Mental Health Awareness</h3>
            <p>Understanding stress and anxiety management.</p>
            <button className="small-btn">Read More</button>
          </div>
        </div>
      </section>

      {/* Career Roadmap */}
      <section className="education-section light-bg">
        <h2>🎓 Medical Career Roadmap</h2>
        <ul className="roadmap">
          <li>MBBS</li>
          <li>Internship</li>
          <li>MD / MS</li>
          <li>Super Specialization</li>
          <li>Fellowship</li>
        </ul>
      </section>

      {/* Training Programs */}
      <section className="education-section">
        <h2>📅 Training & Internship Programs</h2>
        <div className="education-card-container">
          <div className="education-card">
            <h3>Hospital Internship Program</h3>
            <p>6 Months Practical Clinical Training</p>
            <button>Apply Now</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EducationContent;