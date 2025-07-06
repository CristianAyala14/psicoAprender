import React from "react";
import "../css/getStarted.css";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <div className='getStarted-container'>
      <div className="getStarted-1">
        second
      </div>

      <div className="getStarted-2">
        <div class="login-container">
          <div className="login-form">
            <input type="text" placeholder="Correo electrónico" class="input-field" />
            <input type="password" placeholder="Contraseña" class="input-field" />
            <button className="login-button">Iniciar sesión</button>
            <a href="#" className="forgot-password">¿Has olvidado la contraseña?</a>

          </div>
          <div className="login-image">
            some ramdom image
          </div>
          
        </div>
      </div>
    </div>
  )
}
