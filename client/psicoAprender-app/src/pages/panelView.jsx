import React from "react"
import {useState, useEffect} from "react"
import "../css/panelView.css"
import ModuleGrid from "../components/moduleGrid";
import IntroductionTable from "../components/introductionTable";
import AddNewUser from "../components/addNewUser";
import SearchAdd from "../components/searchAdd";
import TechnicalFile from "../components/technicalFile";
import FilterTable from "../components/filtersTable";

export default function PanelView() {
const [adminUser, setAdminUser] = useState(true);
const [showModal, setShowModal] = useState(false);
//filtertable filters saved
  const [filters, setFilters] = useState(null);
  
  const handleFiltersChange = (newFilters) => {
    console.log("Filtros en panelView.jsx:", newFilters);
    setFilters(newFilters);
  };
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


  


  return (
    <div className='panel-view-container'>

      <div className="dashboard-1">

        <SearchAdd setShowModal={setShowModal}/>

        <IntroductionTable
          name="Cristian"
          day="lunes"
          dateTime="10:00 AM"
        />

        {adminUser && (
          <FilterTable filtersToShow={["sede", "disponibilidad", "profesion", "tipo"]} onFiltersChange={handleFiltersChange}/>
        )}

        <ModuleGrid 
          modulesByDay={modulesByDay}
          onEditModule={(mod) => console.log("editar modulo:",mod)}
          onDeleteModule={(mod) => console.log("eliminar modulo:",mod)}
          showAddButton={false}
        />

      </div>

      <div className="dashboard-2">
        <TechnicalFile/>
        <div className="part-2">
            caca
        </div>
      </div>

      {showModal && <AddNewUser setShowModal={setShowModal} />}
      


    </div>

  )
}
