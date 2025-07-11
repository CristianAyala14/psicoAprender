import React, { useState, useEffect } from "react";
import "../css/addModule.css";

export default function AddModule({ setShowModal2, selectedDay, professionalId }) {
  const [hour, setHour] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [ampm, setAmpm] = useState("AM");
  const [mode, setMode] = useState("semanal");
 




  const handleSubmit = async (e) => {
    e.preventDefault();
    const timeString = `${hour}:${minutes} ${ampm}`;
    const newModule = {
        professional: professionalId,
        time: timeString,
        day: selectedDay,
        mode: mode,
        state: "disponible",  
        assigned_by: professionalId, 
      };
    console.log("Módulo listo para enviar al backend:", newModule);
    setShowModal2(false)
  };

  return (
    <div className="modal2-container">
      <div className="modal2-window">
        <p className="modal2-title">Nuevo Turno</p>

        <form className="modal2-form" onSubmit={handleSubmit}>
          {/* Hora */}
          <div className="time-input-group">
            <select value={hour} onChange={(e) => setHour(e.target.value)}>
              {[...Array(24)].map((_, i) => (
                <option key={i} value={String(i).padStart(2, "0")}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
            <span>:</span>
            <select value={minutes} onChange={(e) => setMinutes(e.target.value)}>
              {[...Array(60)].map((_, i) => (
                <option key={i} value={String(i).padStart(2, "0")}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
            <select value={ampm} onChange={(e) => setAmpm(e.target.value)}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>

          {/* Modo */}
          <select name="mode" value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="semanal">Semanal</option>
            <option value="quincenal">Quincenal</option>
          </select>

          <button type="submit">Crear</button>
        </form>

        <button onClick={() => setShowModal2(false)}>Cerrar</button>
      </div>
    </div>
  );
}