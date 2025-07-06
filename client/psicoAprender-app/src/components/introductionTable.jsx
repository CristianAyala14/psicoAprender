import React from 'react'
import "../css/introductionTable.css"; 


export default function IntroductionTable({ name, day, dateTime}) {
  return (
    <div className="introduction-table">
      <div className="intro-left">
        <div className="intro-date">
          <i className="fa-solid fa-calendar-days"></i>
          <span>{dateTime}</span>
        </div>
        <div className="intro-text">
          <h2>¡Buen día, {name}!</h2>
          <p>¡Que tengas un lindo {day}!</p>
        </div>
      </div>
      <div className="intro-image">
        <img src="*" alt="Imagen profesional" />
      </div>
    </div>
  );
}
