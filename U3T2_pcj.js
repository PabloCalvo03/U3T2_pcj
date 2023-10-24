const socios = [];

const crearSocio = () => {
    const numSocio = prompt("Introduce el numero de socio")
    const dni = prompt("Introduce el dni del socio");
    const nombre = prompt("Introduce el nombre del socio");
    const apellidos = prompt("Introduce los apellidos del socio");
    const fechaNacimiento = prompt("Introduce la fecha de nacimiento del socio");
    const localidad = prompt("Introduce la localidad del socio");
    const nuevoSocio = new Socio(numSocio, dni, nombre, apellidos, fechaNacimiento, localidad);
    socios.push(nuevoSocio);
}

const mostrarSocios = () => {
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
            ${socios.map(socio => {
                return ( 
                `<tr>
                    <td>${socio.numSocio}</td>
                    <td>${socio.dni}</td>
                    <td>${socio.nombre}</td>
                    <td>${socio.apellidos}</td>
                    <td>${socio.fechaNacimiento}</td>
                    <td>${socio.localidad}</td>
                </tr>`
                )
            })}
        </tbody>
    </table>`)
}

const darDeBajaSocio = () => {
    const eleccion = prompt("1 - Eliminar por DNI\n2 - Eliminar por numero de socio");
    switch(eleccion){
        case "1":
            const dni = prompt("Introduce el dni del socio")
            socios.forEach((socio, index)=> {
                if(socio.dni = dni){
                    delete(socios[index])
                }
            })
        break;
        case "2":
            const numSocio = prompt("Introduce el numero de socio")
            socios.forEach((socio, index)=> {
                if(socio.numSocio = numSocio){
                    delete(socios[index])
                }
            })
        break;
    }
}

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
            mostrarSocios();
            terminado = true
        break;
    }

}

