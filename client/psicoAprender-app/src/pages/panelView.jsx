
import "../css/panelView.css"


export default function PanelView() {
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
          <div className="add-buttons">
            <button className="add-professional">
              <i class="fa-solid fa-person-circle-plus"></i>
            </button>
          </div>
        </div>

        <div className="introduction-table">
          <div className="intro-left">
              <div className="intro-date">
                <i className="fa-solid fa-calendar-days"></i>
                <span>Abr 13, 2021 2:12 pm</span>
              </div>
              <div className="intro-text">
                <h2>¡Buen día, Debora!</h2>
                <p>¡Que tengas un lindo lunes!</p>
              </div>
          </div>
          <div className="intro-image">
            {/* Podés reemplazar esto con una imagen real si querés */}
              <img src="/ruta-al-doctor.png" alt="Doctor" />
          </div>
        </div>

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

        <div className="grid-container">
          {/*columna dia y modulos */}
          {/* lunes */}
          <div className="day-column-grid">
            <div className="day-tittle">
              LUNES
            </div>
            <div className="module-column">
              <div className="module">
                <div className="module-info">
                  <p>Horario</p>
                  <p>Profesional</p>
                  <p>Paciente asignado</p>
                </div>
                <div className="buttons">
                  <button><i class="fa-solid fa-pencil"></i></button>
                  <button><i class="fa-solid fa-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
          {/* martes */}
          <div className="day-column-grid">
            <div className="day-tittle">
              MARTES
            </div>
            <div className="module-column">
              <div className="module">
                <div className="module-info">
                  <p>Horario</p>
                  <p>Profesional</p>
                  <p>Paciente asignado</p>
                </div>
                <div className="buttons">
                  <button><i class="fa-solid fa-pencil"></i></button>
                  <button><i class="fa-solid fa-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
          {/* miercoles */}
          <div className="day-column-grid">
            <div className="day-tittle">
              MIERCOLES
            </div>
            <div className="module-column">
              <div className="module">
                <div className="module-info">
                  <p>Horario</p>
                  <p>Profesional</p>
                  <p>Paciente asignado</p>
                </div>
                <div className="buttons">
                  <button><i class="fa-solid fa-pencil"></i></button>
                  <button><i class="fa-solid fa-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
          {/* jueves */}
          <div className="day-column-grid">
            <div className="day-tittle">
              JUEVES
            </div>
            <div className="module-column">
              <div className="module">
                <div className="module-info">
                  <p>Horario</p>
                  <p>Profesional</p>
                  <p>Paciente asignado</p>
                </div>
                <div className="buttons">
                  <button><i class="fa-solid fa-pencil"></i></button>
                  <button><i class="fa-solid fa-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
          {/* viernes */}
          <div className="day-column-grid">
            <div className="day-tittle">
              VIERNES
            </div>
            <div className="module-column">
              <div className="module">
                <div className="module-info">
                  <p>Horario</p>
                  <p>Profesional</p>
                  <p>Paciente asignado</p>
                </div>
                <div className="buttons">
                  <button><i class="fa-solid fa-pencil"></i></button>
                  <button><i class="fa-solid fa-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
          {/* sabado */}
          <div className="day-column-grid">
            <div className="day-tittle">
              SABADO
            </div>
            <div className="module-column">
              <div className="module">
                <div className="module-info">
                  <p>Horario</p>
                  <p>Profesional</p>
                  <p>Paciente asignado</p>
                </div>
                <div className="buttons">
                  <button><i class="fa-solid fa-pencil"></i></button>
                  <button><i class="fa-solid fa-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-2">
        second
      </div>
    </div>

  )
}
