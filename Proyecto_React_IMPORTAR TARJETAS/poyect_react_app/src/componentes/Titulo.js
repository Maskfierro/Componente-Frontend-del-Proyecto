import React, { Component } from 'react'                    //Se agrega el componente

class Titulo extends Component {                            //Clase llamada "Cuentas" que se "extiende" desde "Component"

render (){                                              //"render" para que cada componente se muestre por pantalla 
    return(                                             //Que es lo que va a mostrar

     <div className='titulo'><p>Tarjetas de mis tareas</p></div>

    )
}

}export default Titulo

export const Tarjetas = () => {

    return (
      
      <div className='card'> {/*Agego el subtitulo llamado tarjeta*/}
        
        Tarjetas
        
      </div>
      

    )
  }