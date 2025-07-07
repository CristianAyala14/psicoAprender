import "../css/professionalProfile.css"
import IntroductionTable from "../components/introductionTable"
import ModuleGrid from "../components/moduleGrid"
import React from "react"
import {useState, useEffect} from "react"
import "../css/panelView.css"
import AddModule from "../components/addModule";
import SearchAdd from "../components/searchAdd"
import TechnicalFile from "../components/technicalFile";


export default function ProfileView() {
  const [showModal2, setShowModal2] = useState(false);

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



        <SearchAdd showAddButton={false} />

        <IntroductionTable
        name="Cristian"
        day="lunes"
        dateTime="10:00 AM"
        />

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
          <div className="part-2">

          </div>
      </div>

      {showModal2 && (
           <AddModule
             setShowModal2={setShowModal2}
           />
      )}

    </div>

    

  )
}
