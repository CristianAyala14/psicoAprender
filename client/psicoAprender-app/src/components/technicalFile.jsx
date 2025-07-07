import React from 'react';
import '../css/technicalFile.css';

export default function TechnicalFile() {
  return (
    <div className="technical-file-container">
      <div className="profile-card">
        <div className="profile-header">
          <p>MY PROFILE</p>
          <button className="edit-btn">
            <i className="fa-solid fa-pen"></i>
          </button>
        </div>

        <div className="profile-info">
          <img
            src="https://via.placeholder.com/80"
            alt="profile" 
            className="profile-img"
          />
          <div className="profile-text">
            <h3>Dr. Alisha Nicholls</h3>
            <p className="profession">DERMATOLOGIST</p>
            <p className="location">
              <i className="fa-solid fa-location-dot"></i> Bottrop, Germany
            </p>
          </div>
        </div>

        <div className="profile-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            tincidunt justo. Suspendisse id commodo est.
          </p>
        </div>

        <div className="profile-details">
          <div className="detail-block">
            <span className="label">Date Birth</span>
            <span className="value">17.07.86</span>
          </div>
          <div className="detail-block">
            <span className="label">Blood</span>
            <span className="value">A(II) Rh+</span>
          </div>
          <div className="detail-block">
            <span className="label">Working Hours</span>
            <span className="value">9pm - 5am</span>
          </div>
        </div>
      </div>
    </div>
  );
}