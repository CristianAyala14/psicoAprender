//buscar profesionales
const form2 = document.getElementById("buscarprofesional");
const visor = document.getElementById("visorProfesionales");
function actualizarVista (res) {
    visor.innerHTML = "";
    if (res) {
        let ul = document.createElement("ul");
        res.profesionales.docs.forEach((profesional) => {
            let li = document.createElement("li");
            li.textContent = `${profesional.nombre} ${profesional.apellido},${profesional.especialidad}`;
            ul.appendChild(li);
        });
        // Agrega la lista al contenedor
        visor.appendChild(ul);
        // Agrega los enlaces de paginación si es necesario
        let paginationDiv = document.createElement("div");
        let span = document.createElement("span");
        //boton prev
        if (res.profesionales.hasPrevPage) {
            let prevLink = document.createElement("a");
            prevLink.href = `/api/profesional/buscar?page=${res.profesionales.prevPage}`;
            prevLink.textContent = "Anterior";
            paginationDiv.appendChild(prevLink);
            prevLink.addEventListener("click", function(event) {
                event.preventDefault();
                fetch(prevLink.href)
                    .then(res => res.json())
                    .then(res => {
                        actualizarVista(res);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            });
        }
        span.textContent = `Página ${res.profesionales.page} de ${res.profesionales.totalPages}`;
        paginationDiv.appendChild(span);
        //boton next
        if (res.profesionales.hasNextPage) {
            let nextLink = document.createElement("a");
            nextLink.href = `/api/profesional/buscar?page=${res.profesionales.nextPage}`;
            nextLink.textContent = "Siguiente";
            paginationDiv.appendChild(nextLink);
            nextLink.addEventListener("click", function(event) {
                event.preventDefault();
                fetch(nextLink.href)
                    .then(res => res.json())
                    .then(res => {
                        actualizarVista(res);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            });
        }
        visor.appendChild(paginationDiv);
    } else {
        // Si no hay productos, muestra un mensaje
        visor.innerHTML = "<p>No se encontraron productos.</p>";
    }
}
form2.addEventListener("submit", (event)=>{
    event.preventDefault();
    const data = new FormData(form2);
    const formData = new URLSearchParams(data).toString()
    fetch("/api/profesional/buscar?" + formData )
    .then(res=>res.json()).then(res =>{
        actualizarVista(res)
    })
})