let  nombreCliente  =  prompt ( '¡Muchas gracias por interesarte en mi trabajo como desarrollador! Por favor, dime cuál es tu nombre: ')
alert ( '¡Un gusto conocerte' + nombreCliente + '!' )
alert ( 'A continuación se te presentarán algunas preguntas. Por favor responde utilizando el número de la opción que deseas.')

let facturaTotal = 0
let servicioSeleccionado = parseInt(prompt('Ingresa el servicio a contratar: 1.Desarrollo Web - 2.Desarrollo de Aplicaciones - 3.Diseño UI/UX - 4.Diseño Gráfico'))
let continuarComprando = true
let resolucion

while (continuarComprando === true) {
    if (servicioSeleccionado === 1) {
        facturaTotal = facturaTotal + 2500
    } else if (servicioSeleccionado === 2) {
        facturaTotal = facturaTotal + 4000
    } else if (servicioSeleccionado === 3) {
        facturaTotal = facturaTotal + 1400
    } else if (servicioSeleccionado === 4) {
        facturaTotal = facturaTotal + 1600
    } else {
        servicioSeleccionado = parseInt(prompt('Ingresa un servicio disponible: 1.Desarrollo Web - 2.Desarrollo de Aplicaciones - 3.Diseño UI/UX - 4.Diseño Gráfico'))
        continue 
    }

    resolucion = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
    if (resolucion === 1) {
        servicioSeleccionado = parseInt(prompt('Ingresa el numero del servicio que desea adquirir: 1.Desarrollo Web - 2.Desarrollo de Aplicaciones - 3.Diseño UI/UX - 4.4.Diseño Gráfico'))
    }
    else if (resolucion === 2) {
        continuarComprando = false


        alert('El valor total sin descuento ni impuestos es: ' + facturaTotal)
    }

    function PrecioConDescuento(valor) {
        let descuento = 0
        if (valor <= 1400) {
            descuento = 10
        } else if (valor > 1400 && valor <= 1600) {
            descuento = 15
        } else if (valor > 1600 && valor <= 2500) {
            descuento = 20
        } else {
            descuento = 25
        }
        let valorDescuento = valor * (descuento / 100)
        valor = valor - valorDescuento
        return valor
    }
    let valorDescuento = PrecioConDescuento(facturaTotal)
    alert('El total con descuento, sin impuestos es:' + valorDescuento)
    
    function PrecioConImpuesto(valor){
        const impuestos = valor * (21/100)
        return valor + impuestos
    }
    let PrecioFinalConRecargo = PrecioConImpuesto(valorDescuento)
    alert('El valor final con impuestos es:' + PrecioFinalConRecargo)
}

let decisionFinal = prompt('¿Deseas recibir esta cotización por mail? 1. Sí - 2. No')

while((decisionFinal !== '1') && (decisionFinal !== '2')){
    alert('No has ingresado una opción correcta. Por favor ingresa 1 o 2 según sea tu decisión');
    decisionFinal = prompt('¿Deseas recibir esta cotización por mail? 1. Sí - 2. No')
} if(decisionFinal === '1'){
    ingresoCorreo = prompt('Por favor, ingresa tu dirección de correo electrónico')
    alert('¡Muchas gracias por cotizar conmigo! Tu cotización será enviada a ' +ingresoCorreo)
} else{
    alert('Muchas gracias por cotizar conmigo ' + nombreCliente)
} alert('¡Cuídate!')

