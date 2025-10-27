import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    // Format current date as DD Month YYYY
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }));
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Patient Dashboard</h1>
        <div className="current-date">
          <Calendar size={18} className="icon" />
          <span>{currentDate}</span>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <div className="info-card">
            <div className="user-header">
              <div className="user-avatar">
                <div className="initials">JS</div>
              </div>
              <div className="user-details">
                <h2>Alice Johnson</h2>
                <p className="user-email">alice@example.com</p>
              </div>
            </div>

            <div className="details-grid">

              <div className="detail-item">
                <div className="detail-label">Pregnancies</div>
                {/* <div className="detail-value">45</div> */}
              </div>
              <div className="detail-item">
                <div className="detail-label">Glucose</div>
                {/* <div className="detail-value">Male</div> */}
              </div>
              <div className="detail-item">
                <div className="detail-label">date</div>
                {/* <div className="detail-value">Jan 2023</div> */}
              </div>

              <div className="detail-item">
                <div className="detail-label">Blood Pressure</div>
                {/* <div className="detail-value">Jan 2023</div> */}
              </div>
              
              <div className="detail-item">
                <div className="detail-label">Skin Thickness</div>
                {/* <div className="detail-value">175 cm</div> */}
              </div>

              <div className="detail-item">
                <div className="detail-label">Insulin</div>
                {/* <div className="detail-value">76 kg</div> */}
              </div>

              <div className="detail-item">
                <div className="detail-label">BMI</div>
                {/* <div className="detail-value">A+</div> */}
              </div>

              <div className="detail-item">
                <div className="detail-label">age</div>
                {/* <div className="detail-value">A+</div> */}
              </div>

            </div>
          </div>
        </div>

        <div className="profile-section">
          <div className="result-card">
            <div className="result-header">
              <h2>Diabetes Test Result</h2>
              <div className="result-date">
                <Calendar size={18} className="icon" />
                <span>15 March, 2025</span>
              </div>
            </div>

            <div className="result-content diabetic">
              <div className="result-status">
                <span className="status-badge diabetic">Diabetic</span>
              </div>
              
              <div className="result-explanation">
                Based on your latest test results, some indicators suggest you may have diabetes. 
                It's important to follow up with your healthcare provider for a complete evaluation.
              </div>
              
              <div className="chatbot-prompt">
                <p>Have questions about your results or managing diabetes?</p>
                <Link to="/chatbot" className="chatbot-link">
                  Talk to MediBot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
