const obtenerHorariosDisponibles = (profesional, dia) => {
    const disponibilidadDia = profesional.disponibilidad.find(item => item.dia === dia);

    if (!disponibilidadDia) {
        return [];  // No hay disponibilidad para el día especificado
    }

    const { horadeInicio, horas } = disponibilidadDia;
    const duracionSesionEnMinutos = profesional.duracionSesion;
    const horariosDisponibles = [];

    for (let hora = horadeInicio; hora < horadeInicio + horas; hora++) {
        for (let minuto = 0; minuto < 60; minuto += duracionSesionEnMinutos) {
            const horaInicio = new Date(0, 0, 0, hora, minuto);
            const horaFin = new Date(horaInicio.getTime() + duracionSesionEnMinutos * 60000);

            horariosDisponibles.push({
                horaInicio: horaInicio.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                horaFin: horaFin.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
        }
    }

    return horariosDisponibles;
};

// Ejemplo de uso con un profesional ficticio
const profesionalEjemplo = {
    duracionSesion: 45,
    disponibilidad: [
        { dia: "Lunes", horadeInicio: 9, horas: 4 },
        { dia: "Martes", horadeInicio: 10, horas: 3 }
    ]
};

const horariosDisponiblesLunes = obtenerHorariosDisponibles(profesionalEjemplo, "Lunes");
console.log("Horarios Disponibles para el Lunes:", horariosDisponiblesLunes);



((vista para asignar al consultorio))
<form>
    <h2>Ingresar nuevo profesional</h2>

    <label for="nombre">Nombre:</label>
    <input name="nombre" required>
    <label for="apellido">Apellido:</label>
    <input name="apellido" required>
    <label for="especialidad">Especialidad:</label>
    <input name="especialidad" required>
    <label for="duracionSesion">Duración de Sesión (minutos):</label>
    <input name="duracionSesion" required>

    
    <h2>Disponibilidad</h2>
    <button>Buscar disponibilidad en consultorios.</button>
    <h3>Disponibilidad en consultorios:</h3>
    <p>Consultorio:</p> <p>Horarios disponibles:</p>
    
    
    <label for="dia">Cantidad de dias:</label>
    <input type="number" id="cantDias" name="cantDias" required>
    {{!-- //for each por cantDias se renderisa:  --}}
    <div>
        <label for="dia">Dia:</label>
        <select id="dias" name="dia">
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miercoles">Miércoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sabado">Sábado</option>
        </select>
        <label for="horas">Horas:</label>
        <select type="number" id="horas" name="horas" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">3</option>
            <option value="2">4</option>
            <option value="2">5</option>
            <option value="2">6</option>
            <option value="2">7</option>
            <option value="2">8</option>
            <option value="2">9</option>
            <option value="2">10</option>
            <option value="2">11</option>
            <option value="2">12</option>
        </select>  
        <label for="horaDeInicio">Hora de Inicio:</label>
        <input type="number" id="horaDeInicio" name="horaDeInicio" required>
        <button>Asignar al consultorio</button>

    </div>
    


    <button type="submit">Ingresar Profesional</button>
</form>