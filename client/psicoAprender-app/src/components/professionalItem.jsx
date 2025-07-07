import React from 'react';
import "../css/professionalItem.css";

export default function ProfessionalItem({ professionalItem }) {
  const {
    name,
    last_name,
    profession_1,
    profession_2,
    profileImage,
    days_avadible,
  } = professionalItem;

  const showProfession2 = profession_2 && profession_2 !== "NONE";

  return (
    <div className="professional-item-card">
      <div className="professional-info">
        <img
          src={profileImage}
          alt={`${name} ${last_name}`}
          className="professional-img"
        />

        <div className="professional-text">
          <h3 className="professional-name">{name} {last_name}</h3>
          <p className="professional-main">{profession_1}</p>
          {showProfession2 && (
            <p className="professional-type">{profession_2}</p>
          )}
          <p className="professional-days">
            <i className="fa-solid fa-calendar-days"></i> {days_avadible}
          </p>
        </div>
      </div>
    </div>
  );
}