// src/components/AddNewUser.jsx
import React, { useState } from 'react';
import '../css/addNewUser.css';
import { createProfessionalReq } from '../apiCalls/professionalCalls';
import { createPatientReq } from '../apiCalls/patientCalls';


export default function AddNewUser({ setShowModal }) {
  const [type, setType] = useState("paciente");

  // OBJETO PACIENTE
  const newPatient = {
    name: "",
    last_name: "",
    email: "",
    contact: "",
    reason_for_consultation: "",
  };

  // OBJETO PROFESIONAL
  const newProfessional = {
    name: "",
    last_name: "",
    email: "",
    contact: "",
    description: "",
    password: "",
    profession_1: "psicologia",
    profession_2: "NONE",
    days_avadible: [],
    sede: "uno"
  };

  const [newUser, setNewUser] = useState(newPatient);


  const handleAddUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleDaysChange = (e) => {
    const { value, checked } = e.target;
    setNewUser((prev) => ({
      ...prev,
      days_avadible: checked? [...prev.days_avadible, value]
        : prev.days_avadible.filter((day) => day !== value),
    }));
  };

  const handleTypeChange = (selectedType) => {
    setType(selectedType);
    setNewUser(selectedType === "paciente" ? newPatient : newProfessional);
  };

  // SUBMIT
  const handleAddNewUserSubmit = async (e) => {
    e.preventDefault();
    let body = {};

    if (type === "professional") {
      body = { ...newUser };
        try {
        const res = await createProfessionalReq(body)
        } catch (error) {
          console.log("algo paso")
        }
    } else {
      body = { ...newUser };
      try {
        const res = await createPatientReq(body)
        } catch (error) {
          console.log("algo paso")
        }
    }

    


    console.log("BODY A ENVIAR:", body);
    setShowModal(false);
    setNewUser(type === "paciente" ? newPatient : newProfessional);
  };

  return (
    <div className="modal-container">
      <div className="modal-window">
        <p className="modal-title">Nuevo {type === "paciente" ? "Paciente" : "Profesional"}</p>
        <div className="toggle-buttons">
          <button
            onClick={() => handleTypeChange("paciente")}
            className={type === "paciente" ? "active" : ""}
          >
            Paciente
          </button>
          <button
            onClick={() => handleTypeChange("profesional")}
            className={type === "profesional" ? "active" : ""}
          >
            Profesional
          </button>
        </div>

        <form onSubmit={handleAddNewUserSubmit} className="add-user-form">
          <input type="text" name="name" placeholder="Nombre" value={newUser.name} onChange={handleAddUserChange}  />
          <input type="text" name="last_name" placeholder="Apellido" value={newUser.last_name} onChange={handleAddUserChange}  />
          <input type="text" name="email" placeholder="E-mail" value={newUser.email} onChange={handleAddUserChange}  />
          <input type="text" name="contact" placeholder="Contacto" value={newUser.contact} onChange={handleAddUserChange}  />

          {type === "paciente" ? (
            <textarea
              name="reason_for_consultation"
              placeholder="Motivo de consulta..."
              value={newUser.reason_for_consultation}
              onChange={handleAddUserChange}
              rows={4}
            />
          ) : (
            <>
              <label>Especialidad principal:</label>
              <select name="profession_1" value={newUser.profession_1} onChange={handleAddUserChange} >
                <option value="fonoaudiologia">Fonoaudiología</option>
                <option value="psicologia">Psicología</option>
                <option value="terapia_ocupacional">Terapia Ocupacional</option>
                <option value="estimulacion_temprana">Estimulación Temprana</option>
                <option value="psicopedagogia">Psicopedagogía</option>
                <option value="psicologia_infantil">Psicología Infantil</option>
              </select>

              {newUser.profession_1 === "psicologia" && (
                <>
                  <label>Tipo de psicólogo:</label>
                  <select name="profession_2" value={newUser.profession_2} onChange={handleAddUserChange} >
                    <option value="PS">PS</option>
                    <option value="TCC">TCC</option>
                    <option value="INT">INT</option>
                    <option value="DBT">DBT</option>
                    <option value="NONE">Ninguno</option>
                  </select>
                </>
              )}

              <label>Descripción profesional:</label>
              <textarea
                name="description"
                placeholder="Acerca de la profesión..."
                value={newUser.description}
                onChange={handleAddUserChange}
                rows={4}
              />

              <label>Días disponibles:</label>
              <div className="days-checkbox-group">
                {["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"].map((day) => (
                  <label key={day} className="checkbox-day">
                    <input
                      type="checkbox"
                      name="days_avadible"
                      value={day}
                      checked={newUser.days_avadible.includes(day)}
                      onChange={handleDaysChange}
                    />
                    <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                  </label>
                ))}
              </div>

              <label>Sede:</label>
              <select name="sede" value={newUser.sede} onChange={handleAddUserChange} >
                <option value="uno">Uno</option>
                <option value="dos">Dos</option>
              </select>

              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={newUser.password}
                onChange={handleAddUserChange}
                
              />
            </>
          )}

          <button type="submit">Crear</button>
        </form>

        <button onClick={() => setShowModal(false)}>Cerrar</button>
      </div>
    </div>
  );
}