import React from 'react'
import { Datos } from './Datos' // Se importa el componente de la base de datos improvisada
import Card from './imagenes/Card' // Se importa el componente Card el cual guarda los datos como en una "tarjeta"

const Tarjeta = () => { //Componente llamado tarjeta (Const = Declarar una variable)

    const products = Datos.map (product  =>( /*Se declara una variable llamada "products" en donde sera igual a al mapeo (map()) de "Datos.js"
                                                y se ejecuta una funcion con el parametro "product =>" */
        <Card /> // Aqui llama al componente

    ))

  return (
    <div>
        {products} {/* Esta devolviendo los elementos del array dentro de un <div> */}
    </div>
  )
}

export default Tarjeta