// Gestion compras y pedidos de mantenimientos hospital

// Un usuario pueda ingresar y realizar distintas operaciones:

// 1. Iniciar sesion
// 2. Registrarse


// 1. Relizar pedido.
// 2. Consultar cuales son los pedidos.
// 3. Ver pedidos ya efectuados.
// 4. Ver pedidos que estan pendientes.
// 5. Salir



class Usuario {
  constructor(hospital,contraseña) {
    this.hospital = hospital;
    this.contraseña = contraseña;
    this.cantidadPedidos=[];

    
  }
  

  agregarPedidos(pedidos){
    this.cantidadPedidos.push(pedidos);
  }
  restarPedidos(pedidos) {
    this.pedidosDelHospital -= pedidos;
  }
}


class PedidosHospital{
  constructor(pedidoARealizar, tipoDePedido, fechaDepedido) {
    this.cantidadPedidos = pedidoARealizar;
    this.tipoDePedido = tipoDePedido;
    this.fechaDepedido = fechaDepedido;
  }

}

function iniciarSesion(){
  const hospital = prompt('Cual es su hospital?');
  const contraseña = prompt('Cual es su contraseña?');

  usuarioLogIn = usuarios.find((usuario) => usuario.hospital === hospital && usuario.contraseña === contraseña );

  if(usuarioLogIn) {
    menuDeOperaciones();
  } else {
    alert('No se encuentra este hospital o su contraseña es incorrecta.');
  }
}

function registrarse() {
  const hospital = prompt('Cual es el nombre de su hopital?');
  const contraseña = prompt('elija una contraña');

  usuarios.push(new Usuario(hospital, contraseña));
}

//Funciones del cajero



const realizarPedido = () => {
  let pedidoARealizar = parseInt(prompt("cuantos pedidos quiere realizar?."));
  if(pedidoARealizar >0) {
    usuarioLogIn.cantidadPedidos += pedidoARealizar;
    const fecha = new Date();
    usuarioLogIn.agregarPedidos(new PedidosHospital(pedidoARealizar, 'Pedido', fecha));
    alert(`Su cantidad de pedidos es ${usuarioLogIn.cantidadPedidos}`)
  } else {
    alert('Se cancela la carga.')
  }
}


const consultarPedidos = () => {
  usuarioLogIn.cantidadPedidos.forEach((pedidos) => {
    alert(`Fecha: ${pedidos.fechaDepedido}.\nOperacion: ${pedidos.tipoDePedido}.\nDinero: $${pedidos.cantidadPedidos}.`);
  })
}

function seleccionarOperacionDelMenu(operacion) {
switch (operacion) {
    case '1':
      realizarPedido();
      break;
    case '2':
      consultarPedidos();
      break;
    case '3':
      pedidosPendientes();
      break;
    case '4':
      pedidosConcluidos();
      break;
    case '5':
      alert('Nos vemos.');
      break;
    default:
      alert('No existe la opcion ingresada, intente de nuevo.');
      break;

  }
}

function menuDeOperaciones() {
do {
  opcionMenu = prompt("Ingresa la operaciona a realizar. \n1. Relizar pedido. \n2. Consultar pedidos. \n3. Pedidos Pendientes. \n4. Pedidos Concluidos. \n5. Salir.")
  seleccionarOperacionDelMenu(opcionMenu);
} while( opcionMenu !== '5' );
}


let opcionInicio = 0;
let usuarios = [];
let usuarioLogIn;
let opcionMenu = 0;

do {
  opcionInicio = prompt("Bienvenido que desea hacer?\n1.Iniciar sesion.\n2.Registrarse.\n3.Salir");
  switch(opcionInicio) {
    case '1':
      iniciarSesion();
      break;
    case '2':
      registrarse();
      break;
    case '3':
      alert('Hasta luego.');
      break;
    default:
      alert('Opcion incorrecta.');
      break;
  }
} while(opcionInicio != 3);