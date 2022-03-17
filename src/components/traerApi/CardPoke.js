import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { db } from '../../firebase/firebaseConfig'
import { UseFecth } from './UseFecth'

export const CardPoke = ({url}) => {

    const estado = UseFecth(url)
    const {cargando, data}= estado

    // const enviarData = (data) => {
        
         console.log(data);
    //     data.forEach(poke => {
            
    //        const { id, nombre, imagen } = poke

    //        console.log(data);
    //         const pasarApi = {
    //            numero: id ,
    //            nombre: nombre ,
    //            imagen: imagen
    //         }
    //         addDoc(collection(db, "Pokemones" ),pasarApi)
    //         .then( resp => {
    //             console.log("agregado a firebase");
    //         })
    //         .catch(error => {
    //             console.log("error");
    //         })
    //     } )
    // }
    // enviarData(data)

  return (
    <div>
        {
            cargando
            ?
            <h1>cargando</h1>
            :
            <div>
                <h4>{data.id}</h4>
                <img src={data.sprites.front_default} alt='' width={150} />
                <h3>{data.forms[0].name}</h3> 
            </div>
        }
    </div>
  )
}
