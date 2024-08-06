let contenidoEspecialidad = document.getElementById('contenidoEspecialidad')
let contenidoAcompaniantes = document.getElementById('contenidoAcompaniantes')
let contenidoBebidas = document.getElementById('contenidoBebidas')
let showTotal = document.getElementById('showTotal')

for(let element in inventario.especialidades){
    contenidoEspecialidad.innerHTML += card(inventario.especialidades[element].nombre, inventario.especialidades[element].img, element, 'especialidades', inventario.especialidades[element].precio)    

}

for(let element in inventario.extra){
    contenidoAcompaniantes.innerHTML += card(inventario.extra[element].nombre, inventario.extra[element].img, element, 'extra', inventario.extra[element].precio)    

}

for(let element in inventario.bebidas){
    contenidoBebidas.innerHTML += card(inventario.bebidas[element].nombre, inventario.bebidas[element].img, element, 'bebidas', inventario.bebidas[element].precio)    

}


function card(title, urlImage, id, type, precio){

    return `
<div class="card" style="width: 18rem;">
  <img src="assets/img/${urlImage}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <h6 class="card-precio">$${precio}</h6>
        <span>Cantidad: <input id="cardCantidad_${type}_${id}" class="form-control card-cantidad" type="number"><span><br>
    <a href="#" class="btn btn-primary form-control" onclick="almacenar(${id}, '${type}')" >Pedir!</a>
  </div>
</div>
    `
}
function almacenar(id, tipo){
    let selectedInput = document.getElementById('cardCantidad_'+tipo+'_'+id)
    switch (tipo) {
        case 'especialidades':
            total.especialidades.tprecio += inventario.especialidades[id].precio
            total.especialidades.cantidad += selectedInput.value > 0? parseInt(selectedInput.value) : 1
            total.total += inventario.especialidades[id].precio
        break;

        case 'extra':
            total.extra.tprecio += inventario.extra[id].precio
            total.extra.cantidad += selectedInput.value > 0? parseInt(selectedInput.value) : 1
            total.total += inventario.extra[id].precio
        break;

        case 'bebidas':
            total.bebidas.tprecio += inventario.bebidas[id].precio
            total.bebidas.cantidad += selectedInput.value > 0? parseInt(selectedInput.value) : 1
            total.total += inventario.bebidas[id].precio
        break;
    
        default:
        break;
    }

    console.log(total)
    showTotal.innerHTML = `
    <p>Cantidad de Especialidades: ${total.especialidades.cantidad}</p>
    <p>Total Especialidades: <b>$${total.especialidades.tprecio}</b></p>
    <p>Cantidad de Acompañantes: ${total.extra.cantidad}</p>
    <p>Total Acompañantes: <b>$${total.extra.tprecio}</b></p>
    
    <p>Cantidad de Bebidas: ${total.bebidas.cantidad}</p>
    <p>Total Bebidas: <b>$${total.bebidas.tprecio}</b></p>
    `
}
