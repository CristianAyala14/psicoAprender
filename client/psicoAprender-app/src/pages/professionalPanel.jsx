import "../css/professionalPanel.css";
import IntroductionTable from "../components/introductionTable";
import ModuleGrid from "../components/moduleGrid";
import React, { useState } from "react";
import "../css/panelView.css";
import SearchAdd from "../components/searchAdd";

import AddModule from "../components/addModule";
import TechnicalFile from "../components/technicalFile";
import AddNewUser from "../components/addNewUser";
import FilterTable from "../components/filtersTable";

// IMPORTÁ esto si usás Redux para sacar el profesional real
// import { useSelector } from "react-redux";

export default function ProfessionalPanel() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [selectedDay, setSelectedDay] = useState(false);

 // MOCK: Datos de módulos (del backend)
  const modules = [
  {
    professional: "60c72b2f9c8d4f0015b2e3c1", // Simula un ObjectId
    time: "09:00",
    state: "disponible",
    day: "lunes",
    assigned_by: "60c72b2f9c8d4f0015b2e3c2", // Simula un ObjectId
    patient: [],
    sede: "uno",
    mode: "semanal",
  },
  {
    professional: "60c72b2f9c8d4f0015b2e3c3",
    time: "10:30",
    state: "ocupado",
    day: "lunes",
    assigned_by: "60c72b2f9c8d4f0015b2e3c4",
    patient: ["60c72b2f9c8d4f0015b2e3c5"], // Simula un ObjectId de paciente
    sede: "dos",
    mode: "quincenal",
  },
  {
    professional: "60c72b2f9c8d4f0015b2e3c6",
    time: "13:00",
    state: "disponible",
    day: "miercoles",
    assigned_by: "60c72b2f9c8d4f0015b2e3c7",
    patient: [],
    sede: "uno",
    mode: "semanal",
  },
  {
    professional: "60c72b2f9c8d4f0015b2e3c8",
    time: "15:45",
    state: "cancelado",
    day: "jueves",
    assigned_by: "60c72b2f9c8d4f0015b2e3c9",
    patient: ["60c72b2f9c8d4f0015b2e3ca"],
    sede: "dos",
    mode: "semanal",
  },
  {
    professional: "60c72b2f9c8d4f0015b2e3cb",
    time: "11:15",
    state: "disponible",
    day: "viernes",
    assigned_by: "60c72b2f9c8d4f0015b2e3cc",
    patient: [],
    sede: "uno",
    mode: "quincenal",
  },
  {
    professional: "60c72b2f9c8d4f0015b2e3cd",
    time: "16:00",
    state: "ocupado",
    day: "sabado",
    assigned_by: "60c72b2f9c8d4f0015b2e3ce",
    patient: ["60c72b2f9c8d4f0015b2e3cf"],
    sede: "uno",
    mode: "semanal",
  },
  {
    professional: "60c72b2f9c8d4f0015b2e3d0",
    time: "08:30",
    state: "disponible",
    day: "lunes",
    assigned_by: "60c72b2f9c8d4f0015b2e3d1",
    patient: [],
    sede: "dos",
    mode: "semanal",
  },
  {
    professional: "60c72b2f9c8d4f0015b2e3d2",
    time: "14:00",
    state: "ocupado",
    day: "martes",
    assigned_by: "60c72b2f9c8d4f0015b2e3d3",
    patient: ["60c72b2f9c8d4f0015b2e3d4"],
    sede: "uno",
    mode: "quincenal",
  },
  {
    professional: "60c72b2f9c8d4f0015b2e3d5",
    time: "17:30",
    state: "disponible",
    day: "miercoles",
    assigned_by: "60c72b2f9c8d4f0015b2e3d6",
    patient: [],
    sede: "dos",
    mode: "semanal",
  },
  {
    professional: "60c72b2f9c8d4f0015b2e3d7",
    time: "10:00",
    state: "cancelado",
    day: "jueves",
    assigned_by: "60c72b2f9c8d4f0015b2e3d8",
    patient: ["60c72b2f9c8d4f0015b2e3d9"],
    sede: "uno",
    mode: "quincenal",
  },
];

  // MOCK: Profesional actual (reemplazalo con Redux o tu lógica real)
  const professionalId = "60c72b2f9c8d4f0015b2e3c1";
  // Filters
  const [filters, setFilters] = useState(null);
  const handleFiltersChange = (newFilters) => {
    console.log("Filtros en professionalPanel.jsx:", newFilters);
    setFilters(newFilters);
  };


  return (
    <div className="profile-view-container">
      <div className="profileView-1">

        <SearchAdd setShowModal={setShowModal}/>
        

        <IntroductionTable
          name="Cristian"
          day="lunes"
          dateTime="10:00 AM"
        />

        <FilterTable filtersToShow={["disponibilidad"]} onFiltersChange={handleFiltersChange} />

        <ModuleGrid
          modules={modules}
          onEditModule={(mod) => console.log("editar modulo:", mod)}
          onDeleteModule={(mod) => console.log("eliminar modulo:", mod)}
          showAddButton={true}
          setShowModal2={setShowModal2}
          setSelectedDay={setSelectedDay}
        />
      </div>

      <div className="profileView-2">
        <TechnicalFile />
        <div className="profileView-part-2"></div>
      </div>

      {showModal && <AddNewUser setShowModal={setShowModal} />}

      {showModal2 && (
        <AddModule
          setShowModal2={setShowModal2}  selectedDay={selectedDay} professionalId={professionalId} 
        />
      )}
    </div>
  );
}