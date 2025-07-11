import "../css/professionalPanel.css"
import IntroductionTable from "../components/introductionTable"
import ModuleGrid from "../components/moduleGrid"
import React from "react"
import {useState, useEffect} from "react"
import "../css/panelView.css"
import AddModule from "../components/addModule";
import SearchAdd from "../components/searchAdd"
import TechnicalFile from "../components/technicalFile";
import AddNewUser from "../components/addNewUser"
import FilterTable from "../components/filtersTable"

export default function ProfessionalPanel() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [professionalnUser, setProfessionalnUser] = useState(true);

  const handleFiltersChange = (newFilters) => {
    console.log("Filtros en professioanlView.jsx:", newFilters);
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
    <div className='profile-view-container'>
      
      <div className="profileView-1">



        <SearchAdd setShowModal={setShowModal}/>

        <IntroductionTable
        name="Cristian"
        day="lunes"
        dateTime="10:00 AM"
        />

        {professionalnUser && (
          <FilterTable filtersToShow={["disponibilidad"]} onFiltersChange={handleFiltersChange}/>
          )}

        <ModuleGrid 
          modulesByDay={modulesByDay}
          onEditModule={(mod) => console.log("editar modulo:",mod)}
          onDeleteModule={(mod) => console.log("eliminar modulo:",mod)}
          showAddButton={true}
          setShowModal2={setShowModal2}
        />
      


      </div>


      <div className="profileView-2">
        <TechnicalFile/>
          <div className="profileView-part-2">

          </div>
      </div>

      {showModal && <AddNewUser setShowModal={setShowModal} />}


      {showModal2 && (
           <AddModule
             setShowModal2={setShowModal2}
           />
      )}

    </div>

    

  )
}
