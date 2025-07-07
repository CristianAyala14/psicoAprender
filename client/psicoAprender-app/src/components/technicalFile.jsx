import React from 'react';
import '../css/technicalFile.css';

export default function TechnicalFile() {

  const professional = {name: "Carlos", last_name: "Perez", profession1: "Psicologo", profession2: "TCC",description: "asdasd asdasd asdasda sdasa sdasdas dasdasda sdasdasasdasdasdasdasdasdasdasasdas dasdasdasd asdasdasd asdasd asdasda sdasa sdasdas dasdasda sdasdasasdasdasdasdasdasdasdasasdas dasdasd asdasd asdasda sdasa sdasdas dasdasda sdasdasasdasddas dasdas", days_avadible: ["Lunes ", "y Martes"]}



  return (
    <div className="technical-file-container">
      <div className="profile-card">
        <div className="profile-header">
          <p>PROFILE</p>
          <button className="edit-btn">
            <i className="fa-solid fa-pen"></i>
          </button>
        </div>

        <div className="profile-info">
          <img
            src="*"
            alt="profile" 
            className="profile-img"
          />
          <div className="profile-text">
            <h3>{professional.name}</h3>
            <p className="profession">{professional.profession1}</p>
            <p className="location">
              <i className="fa-solid fa-location-dot"></i>{professional.days_avadible}
            </p>
          </div>
        </div>

        <div className="profile-description">
          <p className="profession">{professional.description}</p> 
        </div>

        <div className="profile-details">
          <div className="detail-block">
            <span className="label">{professional.profession2}</span>
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