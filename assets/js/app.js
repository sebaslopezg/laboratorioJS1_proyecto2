let contenidoEspecialidad = document.getElementById('contenidoEspecialidad')
let contenidoAcompaniantes = document.getElementById('contenidoAcompaniantes')
let contenidoBebidas = document.getElementById('contenidoBebidas')

for(let element in inventario.especialidades){
    console.log(element)
    contenidoEspecialidad.innerHTML += card(inventario.especialidades[element].nombre, inventario.especialidades[element].img)    

}

for(let element in inventario.extra){
    console.log(element)
    contenidoAcompaniantes.innerHTML += card(inventario.extra[element].nombre, inventario.extra[element].img)    

}

for(let element in inventario.bebidas){
    console.log(element)
    contenidoBebidas.innerHTML += card(inventario.bebidas[element].nombre, inventario.bebidas[element].img)    

}


function card(title, urlImage){

    return `
<div class="card" style="width: 18rem;">
  <img src="assets/img/${urlImage}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <a href="#" class="btn btn-primary">Pedir!</a>
  </div>
</div>
    `
}