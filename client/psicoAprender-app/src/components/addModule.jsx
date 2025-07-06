import React, { useState, useEffect } from "react";
import "../css/addModule.css";

export default function AddModule({ 
  setShowModal2,
}) {

  // Estados propios del modal:
  const [hour, setHour] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [ampm, setAmpm] = useState("AM");

  const [module, setModule] = useState({
    professional: "",
    time: "",
    state: "disponible",
    day: "lunes",
    assigned_by: "",
    pacient: [],
    sede: "uno",
    mode: "semanal",
  });

  // Actualizar time string cuando cambian hour, minutes o ampm
  useEffect(() => {
    const timeString = `${hour}:${minutes} ${ampm}`;
    setModule(prev => ({ ...prev, time: timeString }));
  }, [hour, minutes, ampm]);

  // Manejador para inputs select/text del formulario
  const handleModuleChange = (e) => {
    const { name, value } = e.target;
    setModule(prev => ({ ...prev, [name]: value }));
  };

  // Submit del formulario
  const handleModuleSubmit = (e) => {
    e.preventDefault();    
    console.log("Enviando módulo:");
    setShowModal2(false); // cerrar modal
  };

  return (
    <div className="modal2-container">
      <div className="modal2-window">
        <p className="modal2-title">Nuevo Módulo</p>

        <form className="modal2-form" onSubmit={handleModuleSubmit}>
          <select name="day" value={module.day} onChange={handleModuleChange}>
            <option value="lunes">Lunes</option>
            <option value="martes">Martes</option>
            <option value="miercoles">Miércoles</option>
            <option value="jueves">Jueves</option>
            <option value="viernes">Viernes</option>
            <option value="sabado">Sábado</option>
          </select>

          <div className="time-input-group">
            <select name="hour" value={hour} onChange={(e) => setHour(e.target.value)}>
              {[...Array(24)].map((_, i) => (
                <option key={i} value={String(i).padStart(2, '0')}>
                  {String(i).padStart(2, '0')}
                </option>
              ))}
            </select>

            <span>:</span>

            <select name="minutes" value={minutes} onChange={(e) => setMinutes(e.target.value)}>
              {[...Array(60)].map((_, i) => (
                <option key={i} value={String(i).padStart(2, '0')}>
                  {String(i).padStart(2, '0')}
                </option>
              ))}
            </select>

            <select name="ampm" value={ampm} onChange={(e) => setAmpm(e.target.value)}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>

          <button type="submit">Crear</button>
        </form>

        <button onClick={() => setShowModal2(false)}>Cerrar</button>
      </div>
    </div>
  );
}