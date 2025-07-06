import React, { useState, useEffect } from "react";
import "../css/addModule.css";

export default function AddModule({ setShowModal2 }) {
  const [hour, setHour] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [ampm, setAmpm] = useState("AM");

  const [professionals, setProfessionals] = useState([]);
  const [patients, setPatients] = useState([]);
  const [searchTermProf, setSearchTermProf] = useState("");
  const [searchTermPatient, setSearchTermPatient] = useState("");

  const [module, setModule] = useState({
    professional: "",
    patient: "",
    time: "",
    day: "lunes",
    assigned_by: "",
    sede: "uno",
    mode: "semanal",
  });

  useEffect(() => {
    const timeString = `${hour}:${minutes} ${ampm}`;
    setModule((prev) => ({ ...prev, time: timeString }));
  }, [hour, minutes, ampm]);

  // Cargar datos desde backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resProf, resPat] = await Promise.all([
          fetch("/api/professionals"),
          fetch("/api/patients"),
        ]);

        if (!resProf.ok || !resPat.ok) throw new Error("Error al cargar datos");

        const dataProf = await resProf.json();
        const dataPat = await resPat.json();

        setProfessionals(dataProf);
        setPatients(dataPat);
      } catch (error) {
        console.error("Error cargando datos:", error);
      }
    };

    fetchData();
  }, []);

  const handleModuleChange = (e) => {
    const { name, value } = e.target;
    setModule((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectProfessional = (prof) => {
    setModule((prev) => ({ ...prev, professional: prof._id }));
    setSearchTermProf(`${prof.name} ${prof.last_name}`);
  };

  const handleSelectPatient = (pat) => {
    setModule((prev) => ({ ...prev, patient: pat._id }));
    setSearchTermPatient(`${pat.name} ${pat.last_name}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal2(false);
  };

  return (
    <div className="modal2-container">
      <div className="modal2-window">
        <p className="modal2-title">Nuevo Módulo</p>

        <form className="modal2-form" onSubmit={handleSubmit}>
          {/* Día */}
          <select name="day" value={module.day} onChange={handleModuleChange}>
            <option value="lunes">Lunes</option>
            <option value="martes">Martes</option>
            <option value="miercoles">Miércoles</option>
            <option value="jueves">Jueves</option>
            <option value="viernes">Viernes</option>
            <option value="sabado">Sábado</option>
          </select>

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


          {/* Buscar profesional */}
          <input
            type="text"
            placeholder="Buscar profesional"
            value={searchTermProf}
            onChange={(e) => setSearchTermProf(e.target.value)}
          />
          <ul className="search-result-list">
            {professionals
              .filter((p) =>
                `${p.name} ${p.last_name}`.toLowerCase().includes(searchTermProf.toLowerCase())
              )
              .slice(0, 5)
              .map((p) => (
                <li key={p._id} onClick={() => handleSelectProfessional(p)}>
                  {p.name} {p.last_name}
                </li>
              ))}
          </ul>

          {/* Buscar paciente */}
          <input
            type="text"
            placeholder="Buscar paciente"
            value={searchTermPatient}
            onChange={(e) => setSearchTermPatient(e.target.value)}
          />
          <ul className="search-result-list">
            {patients
              .filter((p) =>
                `${p.name} ${p.last_name}`.toLowerCase().includes(searchTermPatient.toLowerCase())
              )
              .slice(0, 5)
              .map((p) => (
                <li key={p._id} onClick={() => handleSelectPatient(p)}>
                  {p.name} {p.last_name}
                </li>
              ))}
          </ul>

          {/* Sede */}
          <select name="sede" value={module.sede} onChange={handleModuleChange}>
            <option value="uno">Uno</option>
            <option value="dos">Dos</option>
          </select>

          {/* Modo */}
          <select name="mode" value={module.mode} onChange={handleModuleChange}>
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