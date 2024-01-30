const form = document.getElementById("ingresarProfesional");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    form.reset();
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
})

const form2 = document.getElementById("buscarprofesional");
form2.addEventListener("submit", (event)=>{
    event.preventDefault();
    form2.reset();
    const data = new FormData(form2);
    const formData = new URLSearchParams(data).toString() 
    fetch("/api/profesional/buscar?" + formData )
    .then(res=>res.json()).then(res =>{
        console.log(res)
    })
})