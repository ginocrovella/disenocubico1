class mueble{
    constructor(nombre,categoria,precio,color,stock){
        this.nombre = nombre
        this.categoria = categoria
        this.precio = precio
        this.color = color
        this.stock = stock
    }
}

// DECLARO LOS MUEBLES
let mueble1 = new mueble("Rack H Puertas","racks",9000,("blanco","marron","negro"),true)
let mueble2 = new mueble("Rack H Simple","racks",7500,("blanco","marron","negro"),true)
let mueble3 = new mueble("Rack H Plus","racks", 12000,("blanco","marron","negro"), true)
let mueble4 = new mueble("Escandinava Puertas", "mesas de luz",5500,("blanco","marron","negro"), true)
let mueble5 = new mueble("High Cajones","mesas de luz", 9500,("blanco","marron","negro"), true)
let mueble6 = new mueble("Escandinava Simple","mesas de luz", 5500, ("blanco","marron","negro"), true)
let mueble7 = new mueble("Vajillero DC","cocina", 11000,("blanco","marron","negro"), true)
let mueble8 = new mueble("Combo personalizado 1","cocina", 15000, ("blanco","marron","negro"), true)
let mueble9 = new mueble("Combo personalizado 2","cocina", 20000,("blanco","marron","negro"), true)

// CREO EL ARRAY CATALOGOMUEBLE
const catalogomueble = []
catalogomueble.push(mueble1,mueble2,mueble3,mueble4,mueble5,mueble6,mueble7,mueble8,mueble9)
 
// DECLARO VARIABLES DEL CATALOGO
var racks = catalogomueble.filter(mueble=>mueble.categoria=="racks");
var cocina = catalogomueble.filter(mueble=>mueble.categoria=="cocina");
var mdl = catalogomueble.filter(mueble=>mueble.categoria=="mesas de luz");


// EVENTOS DEL MOUSE - ON.CLICK + LOCALSTORAGE 
let botonhome = document.getElementById("botonhome");
botonhome.onclick = () => {console.log("El usuario clickeó Home")
    localStorage.setItem("El usuario clickeó ", ("home"))
};

let botonrack = document.getElementById("botonracks");
botonrack.onclick = () => {console.log("El usuario clickeó la sección: Racks" , racks)
    localStorage.setItem("El usuario selecciono", " Racks " + JSON.stringify(racks))
};

let botoncocina = document.getElementById("botoncocina");
botoncocina.onclick = () => {console.log("El usuario clickeó la sección: Cocina", cocina)
    localStorage.setItem("El usuario selecciono ", " Cocina " + JSON.stringify(cocina))
}; 

let botonmdl = document.getElementById("botonmdl");
botonmdl.onclick = () => {console.log("El usuario clickeó la sección: Mesas de luz",mdl)
    localStorage.setItem("El usuario selecciono ", " Mesas de luz " + JSON.stringify(mdl))
};

let botoncontacto = document.getElementById("botoncontacto");
botoncontacto.onclick = () => {console.log("El usuario clickeó Contacto")
    localStorage.setItem("El usuario selecciono ", (" Contacto "))
};
;
// DECLARO BOTONCARTS

let botoncart1 = document.getElementById("button-cart1");
botoncart1.onclick = () => {console.log("El usuario agregó un mueble al carrito",mueble1)
    localStorage.setItem("Usuario agregó un mueble al carrito", "Rack 1 " + JSON.stringify(mueble1))
};
let botoncart2 = document.getElementById("button-cart2");
botoncart2.onclick = () => {console.log("El usuario agregó un mueble al carrito")
    localStorage.setItem("Usuario agregó un mueble al carrito", "Rack 2 " +JSON.stringify(mueble2))
};
let botoncart3 = document.getElementById("button-cart3");
botoncart3.onclick = () => {console.log("El usuario agregó un mueble al carrito")
    localStorage.setItem("Usuario agregó un mueble al carrito","Rack 3 " + JSON.stringify(mueble3))
};
let botoncart4 = document.getElementById("button-cart4");
botoncart4.onclick = () => {console.log("El usuario agregó un mueble al carrito")
    localStorage.setItem("Usuario agregó un mueble al carrito","Mesa de luz 1 " + JSON.stringify(mueble4))
};
let botoncart5 = document.getElementById("button-cart5");
botoncart5.onclick = () => {console.log("El usuario agregó un mueble al carrito")
    localStorage.setItem("Usuario agregó un mueble al carrito", "Mesa de luz 2 " + JSON.stringify(mueble5))
};
let botoncart6 = document.getElementById("button-cart6");
botoncart6.onclick = () => {console.log("El usuario agregó un mueble al carrito")
    localStorage.setItem("Usuario agregó el mueble al carrito","Mesa de luz 3 " + JSON.stringify(mueble6))
};
let botoncart7 = document.getElementById("button-cart7");
botoncart7.onclick = () => {console.log("El usuario agregó un mueble al carrito")
    localStorage.setItem("Usuario agregó un mueble al carrito","Cocina 1 " + JSON.stringify(mueble7))
};
let botoncart8 = document.getElementById("button-cart8");
botoncart8.onclick = () => {console.log("El usuario agregó un mueble al carrito")
    localStorage.setItem("Usuario agregó un mueble al carrito","Cocina 2 " + JSON.stringify(mueble8))
};
let botoncart9 = document.getElementById("button-cart9");
botoncart9.onclick = () => {console.log("El usuario agregó un mueble al carrito")
    localStorage.setItem("Usuario agregó un mueble al carrito","Cocina 3" +  JSON.stringify(mueble9))
};

// BUTTON REGISTRAR 
let buttonRegistrar = document.getElementById("btnRegistrar");
buttonRegistrar.addEventListener("click", showAlert);
function showAlert(e) {
    Swal.fire({
        title: 'Ingresa tus datos y estaremos en contacto',
        html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
        <input type="text" id="email" class="swal2-input" placeholder="Email">
        <input type="text" id="ciudad" class="swal2-input" placeholder="Ciudad">`,
        confirmButtonText: 'Enviar',
        focusConfirm: false,
        confirmButtonColor: '#000000',
        preConfirm: () => {
          const nombre = Swal.getPopup().querySelector('#nombre').value 
          const email = Swal.getPopup().querySelector('#email').value
          const ciudad = Swal.getPopup().querySelector('#ciudad').value
          if (!nombre || !email || !ciudad) {
            Swal.showValidationMessage(`Por favor, ingresa tus datos`)
          }
          return { nombre: nombre, email: email, ciudad: ciudad }
        }
      }).then((result) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tus datos han sido enviados!',
            showConfirmButton: false,
            timer: 1500
          })
        console.log("El nombre / email / ciudad del cliente: " + result.value.nombre + " - " + result.value.email + " - " + result.value.ciudad)
        localStorage.setItem("Nombre / email / ciudad del cliente: " , result.value.nombre + " - " + result.value.email + " - " + result.value.ciudad )
      })}; 


// FETCH 
fetch('https://ginocrovella.github.io/disenocubico1/view/catalogo.html')
.then((response) => {return JSON.stringify(catalogomueble);
}) .then(console.log(JSON))







