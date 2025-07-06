import React from "react"
import {useState, useEffect} from "react"
import "../css/panelView.css"
import ModuleGrid from "../components/moduleGrid";
import AddModule from "../components/addModule";
import IntroductionTable from "../components/introductionTable";

export default function PanelView() {
  const [adminUser, setAdminUser] = useState(true);
  const [showModal2, setShowModal2] = useState(false);
  const [showAddButton, setShowAddButton] = useState(true);

    //mock de prueba
    const mockModules = [
    {
      time: "10:00 AM",
      day: "lunes",
      professional: "Lic. Pérez",
      pacient: "Juan Pérez"
    },
    {
      time: "11:00 AM",
      day: "martes",
      professional: "Lic. Gómez",
      pacient: null
    },
    {
      time: "15:00 PM",
      day: "miercoles",
      professional: "Lic. Fernández",
      pacient: "Ana"
    },
  
  ];
  const groupModulesByDay = (modules) => {
    const grouped = {};
    for (const mod of modules) {
      const day = mod.day.toLowerCase();
      if (!grouped[day]) grouped[day] = [];
      grouped[day].push(mod);
    }
    return grouped;
  };
  const modulesByDay = groupModulesByDay(mockModules);




                          // MODAL WINDOW 1 LOGIC - ADD USER
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("paciente");
  const [newUser, setNewUser] = useState({
  name: "",
  last_name: "",
  email: "",
  contact: "",
  password: "",
  reason_for_consultation: "",
  profession_1: "psicologia",
  profession_2: "NONE",
  description: "",
  days_avadible: [], // ahora es un array
  sede: "uno",
  });


  const handleAddUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
    setModule(prev => ({ ...prev, [name]: value }))
  };

  const handleDaysChange = (e) => {
    const { value, checked } = e.target;
    setNewUser((prev) => ({
      ...prev,
      days_avadible: checked
        ? [...prev.days_avadible, value]
        : prev.days_avadible.filter((day) => day !== value),
    }));
  };
  //send  to backend
  const handleAddUserSubmit = async (e) => {
      e.preventDefault();
      try {
        const endpoint =
          type === "paciente" ? "/api/pacients/register" : "/api/professionals/register";
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        if (!response.ok) throw new Error("Error al registrar usuario");
        alert("Usuario registrado correctamente");
        resetForm();
        setShowModal(false);
      } catch (err) {
        alert("Hubo un error: " + err.message);
      }
    };

  //reset form new user and change state patient-professional
  const handleTypeChange = (selectedType) => {
    setType(selectedType);
    setNewUser({
      name: "",
      last_name: "",
      email: "",
      contact: "",
      password: "",
      reason_for_consultation: "",
      profession_1: "psicologia",
      profession_2: "NONE",
      description: "",
      days_avadible: [],
      sede: "uno",
    });
  };



  return (
    <div className='professional-view-container'>

      <div className="dashboard-1">

        <div className="search-bar-add-buttons">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar..."
              className="search-input"
            />
            <button className="search-button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="add-button">
            <button onClick={() => setShowModal(true)}>
              <i className="fa-solid fa-person-circle-plus"></i>
            </button>
          </div>
        </div>

        <IntroductionTable
          name="Cristian"
          day="lunes"
          dateTime="10:00 AM"
        />

        {adminUser && (
          <div className="filters-table">
          <div className="filter-group">
              <label className="filter-labels">Sede: </label>
                <select id="avadible" className="filter-select">
                  <option value="uno">Uno</option>
                  <option value="dos">Dos</option>
                  <option value="all">Todo</option>
                </select>
            </div>
          
            <div className="filter-group">
              <label className="filter-labels">Disponibilidad: </label>
                <select id="avadible" className="filter-select">
                  <option value="avadible">Disponible</option>
                  <option value="unavadible">Ocupado</option>
                  <option value="all">Todo</option>
                </select>
            </div>

            <div className="filter-group">
              <label className="filter-labels">Profesion: </label>
                <select id="profession" className="filter-select">
                  <option value="psicologia">Psicología</option>
                  <option value="fonoaudiologia">Fonoaudiología</option>
                  <option value="terapia_ocupacional">Terapia Ocupacional</option>
                  <option value="estimulacion_temprana">Estimulación Temprana</option>
                  <option value="psicopedagogia">Psicopedagogía</option>
                  <option value="psicologia_infantil">Psicologia Infantil</option>
                  <option value="all">Todo</option>
                </select>
            </div>

            <div className="filter-group">
              <label className="filter-labels">Tipo: </label>
                <select id="type" className="filter-select">
                  <option value="PS">PS</option>
                  <option value="TCC">TCC</option>
                  <option value="INT">INT</option>
                  <option value="DBT">DBT</option>
                  <option value="NONE">NONE</option>
                 
                </select>
            </div>
              
          
        </div>
        )}

        <ModuleGrid 
          modulesByDay={modulesByDay}
          onEditModule={(mod) => console.log("editar modulo:",mod)}
          onDeleteModule={(mod) => console.log("eliminar modulo:",mod)}
          showAddButton={false}
          setShowModal2={setShowModal2}
        />

      </div>

      <div className="dashboard-2">
        second
      </div>

      {showModal && (
              <div className="modal-container"> {/* float window add - user*/}
                <div className="modal-window">
                  <div>
                    <p className="modal-title">Nuevo {type === "patient" ? "Paciente" : "Profesional"}</p>
                    <div className="toggle-buttons">
                      <button onClick={() => handleTypeChange("patient")} className={type === "patient" ? "active" : ""}>Paciente</button>
                      <button onClick={() => handleTypeChange("professional")} className={type === "professional" ? "active" : ""}>Profesional</button>
                    </div>
                  </div>

                  <form onSubmit={handleAddUserSubmit} className="add-user-form">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      value={newUser.name}
                      onChange={handleAddUserChange}
                      required
                    />
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Apellido"
                      value={newUser.last_name}
                      onChange={handleAddUserChange}
                      required
                    />
                    <input
                      type="text"
                      name="email"
                      placeholder="E-mail"
                      value={newUser.email}
                      onChange={handleAddUserChange}
                      required
                    />
                    <input
                      type="text"
                      name="contact"
                      placeholder="Contacto (Teléfono o Email)" 
                      value={newUser.contact}
                      onChange={handleAddUserChange}
                      required
                    />

                    {type === "patient" ? (
                      <>
                        <textarea
                          name="reason_for_consultation"
                          placeholder="Describa brevemente el motivo de consulta..."
                          value={newUser.reason_for_consultation}
                          onChange={handleAddUserChange}
                          rows={4}
                          required
                        />
                      </>
                    ) : (
                      <>
                        <label>Especialidad principal:</label>
                        <select
                          name="profession_1"
                          value={newUser.profession_1}
                          onChange={handleAddUserChange}
                          required
                        >
                          <option value="psicologia">Psicología</option>
                          <option value="fonoaudiologia">Fonoaudiología</option>
                          <option value="terapia_ocupacional">Terapia Ocupacional</option>
                          <option value="estimulacion_temprana">Estimulación Temprana</option>
                          <option value="psicopedagogia">Psicopedagogía</option>
                          <option value="psicologia_infantil">Psicología Infantil</option>
                        </select>

                        {newUser.profession_1 === "psicologia" && (
                          <>
                            <label>Tipo de psicólogo:</label>
                            <select
                              name="profession_2"
                              value={newUser.profession_2}
                              onChange={handleAddUserChange}
                              required
                            >
                              <option value="PS">PS</option>
                              <option value="TCC">TCC</option>
                              <option value="INT">INT</option>
                              <option value="DBT">DBT</option>
                              <option value="NONE">Ninguno</option>
                            </select>
                          </>
                        )}

                        <label>Descripción profesional</label>
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
                        <select
                          name="sede"
                          value={newUser.sede}
                          onChange={handleAddUserChange}
                          required
                        >
                          <option value="uno">Uno</option>
                          <option value="dos">Dos</option>
                        </select>

                        <input
                          type="password"
                          name="password"
                          placeholder="Contraseña"
                          value={newUser.password}
                          onChange={handleAddUserChange}
                          required
                        />
                      </>
                    )}

                    <button type="submit">Crear</button>
                  </form>
                  
                  <button onClick={() => setShowModal(false)}>Cerrar</button>
                </div>
              </div>
            )}

      


    </div>

  )
}
