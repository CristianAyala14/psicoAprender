import React from "react";
import "../css/module.css"

export default function Module({ module, onEditModule, onDeleteModule }) {
  return (
    <div className="module">
      <div className="module-info">
        <p>{module.time}</p>
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
  );
}