//cargar profesionales
const form = document.getElementById("ingresarProfesional");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key)=> obj[key]=value);
    fetch("/api/profesional", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res=>res.json()).then(res =>{
        console.log(res)
    })
    form.reset();
})



