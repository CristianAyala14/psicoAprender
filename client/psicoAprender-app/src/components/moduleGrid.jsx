// src/components/ModuleGrid.jsx
import React from "react";
import "../css/moduleGrid.css"; // Import the CSS file for styling

export default function ModuleGrid({
    modulesByDay={},
    showAddButton,
    onEditModule,
    onDeleteModule,
    setShowModal2
}) {

  
  const daysOfWeek = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

  return (
    <div className="grid-container">
      {daysOfWeek.map((day) => (
        <div key={day} className="day-column-grid">
          <div className="day-tittle">{day.toUpperCase()}</div>
          <div className="module-column">
            <div className="module-section">
              {(modulesByDay[day] || []).map((module, idx) => (
                <div key={idx} className="module">
                  <div className="module-info">
                    <p>{module.time}</p>
                    <p>{module.professional}</p>
                    <p>{module.pacientName || "Sin paciente"}</p>
                  </div>
                  <div className="buttons">
                    <button onClick={() => onEditModule(module)}>
                      <i className="fa-solid fa-pencil"></i>
                    </button>
                    <button onClick={() => onDeleteModule(module)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {showAddButton && (
              <div className="add-module">
                <button onClick={() => setShowModal2(true)}>
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