import "../css/getStarted.css";

export default function GetStarted() {
  return (
    <div className='getStarted-container'>
      <div className="dashboard-1">
        second
      </div>

      <div className="dashboard-2">
        <div class="login-container">
          <div className="login-form">
            <input type="text" placeholder="Correo electrónico" class="input-field" />
            <input type="password" placeholder="Contraseña" class="input-field" />
            <button class="login-button">Iniciar sesión</button>
            <a href="#" class="forgot-password">¿Has olvidado la contraseña?</a>
            <button class="create-button">Crear una cuenta</button>
          </div>
          <div className="login-image">
            some ramdom image
          </div>
          
        </div>
      </div>
    </div>
  )
}
