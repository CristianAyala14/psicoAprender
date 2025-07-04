import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/authContext';
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
//validation regex in front
const userNameRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,15}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,16}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


export default function SingUp() {
  return (
    <div>
      
    </div>
  )
}
