
import "../css/professionalView.css"


export default function ProfessionalView() {
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
          <div className="introduction">
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
        </div>

        <div className="filters-table">
          <div className="filters">
              gegege
          </div>
        </div>
        <div></div>
      </div>
      <div className="dashboard-2">
        second
      </div>
    </div>

  )
}
