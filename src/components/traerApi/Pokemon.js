import React, { useState } from 'react'
import { CardsCont } from './CardsCont'
import { UseFecth } from './UseFecth'



const Pokemon = () => {

    const [url] = useState('https://pokeapi.co/api/v2/pokemon')
    const estado = UseFecth(url)
    const {cargando,data}=estado
    //cargando? console.log('cargando'):console.log(data.results)

  return (
    <div>
        {
          cargando
          ?
          <h1>cargando...</h1>
          :
          <CardsCont results={data.results} />
        }
    </div>
  )
}

export default Pokemon