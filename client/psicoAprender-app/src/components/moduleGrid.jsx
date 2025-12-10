import React from "react";
import Module from "./module";
import "../css/moduleGrid.css";

export default function ModuleGrid({
  modules = [],
  showAddButton,
  onEditModule,
  onDeleteModule,
  setShowModal2, 
  setSelectedDay,
  panelview
}) {

//clicked day send to father componnet professionalPanel.jsx
  const handleClickedDay = (day) =>{
    setShowModal2(true)
    setSelectedDay(day)
  }
  
  const daysOfWeek = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];

  // Agrupamos los módulos por día
  const modulesByDay = daysOfWeek.reduce((acumulador, dia) => {
    acumulador[dia] = modules.filter((module) => module.day === dia);
    return acumulador;
  }, {});

 
  return (
    <div className="grid-container">
      {daysOfWeek.map((day) => (
        <div key={day} className="day-column-grid">
          <div className="day-tittle">{day.toUpperCase()}</div>
          <div className="module-column">
            <div className="module-section">
              {(modulesByDay[day] || []).map((module, idx) => (
                <Module
                  key={idx}
                  module={module}
                  onEditModule={onEditModule}
                  onDeleteModule={onDeleteModule}
                />
              ))}
            </div>

            {showAddButton && (
              <div className="add-module">
                <button onClick={() => handleClickedDay(day)}>
                  <i className="fa-solid fa-circle-plus"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}