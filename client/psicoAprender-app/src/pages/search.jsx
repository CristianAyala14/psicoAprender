import "../css/search.css";
import FilterTable from "../components/filtersTable";
import {useState, useEffect} from "react"
import AddNewUser from "../components/addNewUser";
import SearchAdd from "../components/searchAdd";
import ProfessionalItem from "../components/professionalItem"

export default function Search() {
  const [showModal, setShowModal] = useState(false);
  //filtertable filters saved
  const [filters, setFilters] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleFiltersChange = (newFilters) => {
    console.log("Filtros en Search.jsx:", newFilters);
    setFilters(newFilters);
  };

const professionals_items = [
  {
    _id: "1",
    name: "Laura",
    last_name: "Pérez",
    email: "laura.perez@gmail.com",
    contact: "1155555555",
    description: "Especialista en terapia cognitivo conductual para adolescentes.",
    password: "hashed-password",
    profession_1: "psicologia",
    profession_2: "TCC",
    profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
    days_avadible: "lunes",
    sede: "uno",
    patients: [],
  },
  {
    _id: "2",
    name: "Javier",
    last_name: "Lopez",
    email: "javier.lopez@gmail.com",
    contact: "1144444444",
    description: "Fonoaudiólogo con experiencia en trastornos del habla en niños.",
    password: "hashed-password",
    profession_1: "fonoaudiologia",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    days_avadible: "miercoles",
    sede: "dos",
    patients: [],
  },
  {
    _id: "3",
    name: "Lucía",
    last_name: "Martínez",
    email: "lucia.martinez@gmail.com",
    contact: "1133333333",
    description: "Psicopedagoga enfocada en dificultades de aprendizaje.",
    password: "hashed-password",
    profession_1: "psicopedagogia",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
    days_avadible: "jueves",
    sede: "uno",
    patients: [],
  },
  {
    _id: "4",
    name: "Diego",
    last_name: "Fernández",
    email: "diego.fernandez@gmail.com",
    contact: "1122222222",
    description: "Especialista en estimulación temprana para niños de 0 a 3 años.",
    password: "hashed-password",
    profession_1: "estimulacion_temprana",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
    days_avadible: "viernes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "5",
    name: "Camila",
    last_name: "Gómez",
    email: "camila.gomez@gmail.com",
    contact: "1166666666",
    description: "Terapista ocupacional con enfoque en adultos mayores.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
    days_avadible: "martes",
    sede: "uno",
    patients: [],
  },
  {
    _id: "6",
    name: "Mateo",
    last_name: "Sánchez",
    email: "mateo.sanchez@gmail.com",
    contact: "1177777777",
    description: "Psicólogo infantil especializado en técnicas de juego.",
    password: "hashed-password",
    profession_1: "psicologia_infantil",
    profession_2: "INT",
    profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
    days_avadible: "miercoles",
    sede: "dos",
    patients: [],
  },
  {
    _id: "7",
    name: "Valentina",
    last_name: "Torres",
    email: "valentina.torres@gmail.com",
    contact: "1188888888",
    description: "Fonoaudióloga con especialidad en deglución y lenguaje.",
    password: "hashed-password",
    profession_1: "fonoaudiologia",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
    days_avadible: "jueves",
    sede: "uno",
    patients: [],
  },
  {
    _id: "8",
    name: "Tomás",
    last_name: "Ramírez",
    email: "tomas.ramirez@gmail.com",
    contact: "1199999999",
    description: "Psicólogo con experiencia en DBT para adultos.",
    password: "hashed-password",
    profession_1: "psicologia",
    profession_2: "DBT",
    profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
    days_avadible: "viernes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "9",
    name: "Sofía",
    last_name: "Ruiz",
    email: "sofia.ruiz@gmail.com",
    contact: "1100000000",
    description: "Psicopedagoga con orientación en escuelas primarias.",
    password: "hashed-password",
    profession_1: "psicopedagogia",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
    days_avadible: "lunes",
    sede: "uno",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  //dasdad
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  {
    _id: "10",
    name: "Federico",
    last_name: "Molina",
    email: "federico.molina@gmail.com",
    contact: "1111111111",
    description: "Terapista ocupacional con formación en neurodesarrollo.",
    password: "hashed-password",
    profession_1: "terapia_ocupacional",
    profession_2: "NONE",
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    days_avadible: "martes",
    sede: "dos",
    patients: [],
  },
  
];
 





  return (
    <div className='search-view-container'>
      <div className="search-view-1">

        <SearchAdd setShowModal={setShowModal} showAddButton={true}/>

        <FilterTable filtersToShow={["sede", "profesion", "tipo"]} onFiltersChange={handleFiltersChange}/>

        <div className="professional-results">
          {loading ? 
              (<p className="loading-advise">Loading...</p>) 
              : professionals_items.length === 0 ? 
              (<p className="not-found-advise">No listing found!</p>) 
              :(professionals_items.map((el) => (
                  <ProfessionalItem key={el._id} professionalItem={el} />
                )) 
              )}
          
           

        </div>
      </div>

      {/* <div className="search-view-2">
        <div className="search-1">
          asa
        </div>
        <div className="search-2">
            dsd
        </div>
      </div> */}

      {showModal && <AddNewUser setShowModal={setShowModal} />}

    </div>
  )
}
