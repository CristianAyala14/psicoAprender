import React from 'react'
import "../css/searchAdd.css"

export default function SearchAdd({ setShowModal }) {
  return (
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
  )
}
      