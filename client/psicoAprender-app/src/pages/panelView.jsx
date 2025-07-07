import React from "react"
import {useState, useEffect} from "react"
import "../css/panelView.css"
import ModuleGrid from "../components/moduleGrid";
import IntroductionTable from "../components/introductionTable";
import AddNewUser from "../components/addNewUser";
import SearchAdd from "../components/searchAdd";
import TechnicalFile from "../components/technicalFile";

export default function PanelView() {
const [adminUser, setAdminUser] = useState(true);
  const [showModal, setShowModal] = useState(false);

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

        <SearchAdd setShowModal={setShowModal} showAddButton={true}/>

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
