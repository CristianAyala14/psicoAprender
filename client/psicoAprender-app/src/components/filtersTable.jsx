import React, { useState, useEffect } from "react";
import "../css/filtersTable.css";

export default function FilterTable({ panelView, onFiltersChange }) {
  const [selectedProfession, setSelectedProfession] = useState("");

  const [filters, setFilters] = useState({
    sede: "all",
    disponibilidad: "all",
    profesion: "all",
    tipo: "NONE",
  });

    const handleProfessionChange = (e) => {
    const value = e.target.value;
    setSelectedProfession(value);
    const updatedFilters = { ...filters, profesion: value };
    setFilters(updatedFilters);

  };

  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    const updatedFilters = { ...filters, [id]: value };
    setFilters(updatedFilters);
  };

  const applyFilters = () => {
    onFiltersChange(filters);
  };


  return (
    <div className="filters-table">
      <div className="just-filters">
        <div className="filter-group">
          <select
            id="sede"
            className="filter-select"
            onChange={handleFilterChange}
            defaultValue={"all"}
          >
            <option value="uno">Sede 1</option>
            <option value="dos">Sede 2</option>
            <option value="all">Todo</option>
          </select>
        </div>

        {panelView && (
          <div className="filter-group">
            <select
              id="disponibilidad"
              className="filter-select"
              onChange={handleFilterChange}
              defaultValue={"all"}
            >
              <option value="avadible">Disponible</option>
              <option value="unavadible">Ocupado</option>
              <option value="all">Todo</option>
            </select>
          </div>
        )}

        <div className="filter-group">
          <select
            id="profesion"
            className="filter-select"
            value={selectedProfession}
            onChange={handleProfessionChange}
          >
            <option value="all">Todo</option>
            <option value="fonoaudiologia">Fonoaudiología</option>
            <option value="terapia_ocupacional">Terapia Ocupacional</option>
            <option value="estimulacion_temprana">Estimulación Temprana</option>
            <option value="psicologia">Psicología</option>
            <option value="psicopedagogia">Psicopedagogía</option>
            <option value="psicologia_infantil">Psicología Infantil</option>
          </select>
        </div>

        {selectedProfession === "psicologia" && (
          <div className="filter-group">
            <select
              id="tipo"
              className="filter-select"
              onChange={handleFilterChange}
              defaultValue={"PS"}
            >
              <option value="PS">PS</option>
              <option value="TCC">TCC</option>
              <option value="INT">INT</option>
              <option value="DBT">DBT</option>
            </select>
          </div>
          )}

      </div>
      <div className="apply-filters-btn">
        <button onClick={applyFilters} className="search-button">
          <i className="fa-solid fa-arrows-rotate"></i>
        </button>
      </div>
      

    </div>
  );
}