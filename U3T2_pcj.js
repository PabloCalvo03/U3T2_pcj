function Socio(numSocio, dni, nombre, apellidos, fechaNacimiento, localidad){
    this.numSocio = numSocio;
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.localidad = localidad;

    this.modificarLocalidad = (localidad) => {
        this.localidad = localidad;
    }
}

let socios = [];

const crearSocio = () => {
    let existeDni = false;

    const numSocio = prompt("Introduce el numero de socio")
    const dni = prompt("Introduce el dni del socio");
    const nombre = prompt("Introduce el nombre del socio");
    const apellidos = prompt("Introduce los apellidos del socio");
    const fechaNacimiento = prompt("Introduce la fecha de nacimiento del socio");
    const localidad = prompt("Introduce la localidad del socio");
    const nuevoSocio = new Socio(numSocio, dni, nombre, apellidos, fechaNacimiento, localidad);

    for(let i = 0; i < socios.length; i++){
        if(socio[i].dni == dni){
            alert("Ya existe un usuario con ese dni");
            existeDni = true;
            return;
        }
    }

    if(existeDni){
        socios.push(nuevoSocio);
        alert(`Socio ${nuevoSocio.nombre} con dni ${nuevoSocio.dni} creado con exito`)
    }
}

const mostrarSocios = () => {
    let htmlConstruido = "";
    for(let i = 0; i < socios.length; i++){
        htmlConstruido += `<tr>
        <td>${socios[i].numSocio}</td>
        <td>${socios[i].dni}</td>
        <td>${socios[i].nombre}</td>
        <td>${socios[i].apellidos}</td>
        <td>${socios[i].fechaNacimiento}</td>
        <td>${socios[i].localidad}</td>
        </tr>`
    }
    document.write(`<table>
        <thead>
            <tr>
                <th>Numero de socio</th>
                <th>DNI del socio</th>
                <th>Nombre del socio</th>
                <th>Apellidos del socio</th>
                <th>Fecha de nacimiento del socio</th>
                <th>Localidad del socio</th>
            </tr>
        </thead>
        <tbody>
            ${htmlConstruido}
        </tbody>
    </table>`)
}

const darDeBajaSocio = () => {
    const eleccion = prompt("1 - Eliminar por DNI\n2 - Eliminar por numero de socio");
    let indiceABorrar = -1;
    switch(eleccion){
        case "1":
            const dni = prompt("Introduce el dni del socio")
            for (let i = 0; i < socios.length; i++){
                if(socios[i].dni == dni){
                    indiceABorrar = i;
                }
            }
            if(indiceABorrar != -1){
                const socioBorrado = socios.splice(indiceABorrar, 1)
                alert(`Socio ${socioBorrado[0].nombre} con dni ${socioBorrado[0].dni} borrado con exito`);
            } else {
                alert("No se ha encontrado al socio");
            }
        break;
        case "2":
            const numSocio = prompt("Introduce el numero del socio")
            for (let i = 0; i < socios.length; i++){
                if(socios[i].numSocio == numSocio){
                    indiceABorrar = i;
                }
            }
            if(indiceABorrar != -1){
                socios.splice(indiceABorrar, 1);
                alert(`Socio ${socioBorrado[0].nombre} con dni ${socioBorrado[0].dni} borrado con exito`);
            } else {
                alert("No se ha encontrado al socio");
            }
        break;
    }
}

const cambiarLocalidad = () => {
    const dni = prompt("Introduce el dni del socio: ");
    const nuevaLocalidad = prompt("Introduce la localidad del socio:");
    for(let i = 0; i < socios.length; i++){
        if(socios[i].dni == dni){
            socios[i].modificarLocalidad(nuevaLocalidad);
        }
    }
}

let terminado = false;

while(terminado == false){
    let opcion = prompt("1 - Alta de un nuevo socio\n2 - Baja de socio\n3 - Modificar localidad del socio\n4 - Categoria de edad del usuario\n5 - Mostrar datos de los usuarios almacenados\n6 - Buscar socio por DNI\n7 - Buscar socios de una categoria\n8 - Mostrar usuarios por localidad");
    mostrarDatos = false;
    switch(opcion){
        case "1": 
            crearSocio();
        break;
        case "2":
            darDeBajaSocio();
        break;
        case "3":
            cambiarLocalidad();
        break;
        case "4":
            mostrarSocios();
            terminado = true
        break;
    }

}

