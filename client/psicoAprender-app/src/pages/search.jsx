import "../css/search.css";
import FilterTable from "../components/filtersTable";
import {useState, useEffect} from "react"
import AddNewUser from "../components/addNewUser";
import SearchAdd from "../components/searchAdd";

export default function Search() {
  const [showModal, setShowModal] = useState(false);
  //filtertable filters saved
  const [filters, setFilters] = useState(null);

  const handleFiltersChange = (newFilters) => {
    console.log("Filtros en Search.jsx:", newFilters);
    setFilters(newFilters);
  };


  return (
    <div className='search-view-container'>
      <div className="search-view-1">

        <SearchAdd setShowModal={setShowModal} showAddButton={true}/>

        <FilterTable panelView={false} onFiltersChange={handleFiltersChange}/>

        <div className="professional-results">
            asa
        </div>
      </div>

      <div className="search-view-2">
        <div className="search-1">
          asa
        </div>
        <div className="search-2">
            dsd
        </div>
      </div>

      {showModal && <AddNewUser setShowModal={setShowModal} />}

    </div>
  )
}
