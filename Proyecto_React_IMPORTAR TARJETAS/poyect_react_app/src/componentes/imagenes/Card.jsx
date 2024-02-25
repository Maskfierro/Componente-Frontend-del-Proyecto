import React from 'react'
import { Datos } from '../Datos'

const Card = () => {
    return (
      <div className='tarjet'>
        {Datos.map((Datos) => ( //Se ejecuta el mapeo del array de "Datos" y se guarda en data
          <div className='tarjet2'>
            <p className='id'>ID: {Datos.id}</p> {/*Se muestra "id" con la palabra clave "data" en donde se guardo el array*/}
            <p className='nombre'>Nombre: {Datos.nombre}</p>
            <p className='apellido'>Apellido: {Datos.apellido}</p>
            <p className='numero'>Número: {Datos.numero}</p>
            <p className='numero'>Ciudad: {Datos.ciudad}</p>
          </div>
        ))}
      </div>
    );
  };
export default Card