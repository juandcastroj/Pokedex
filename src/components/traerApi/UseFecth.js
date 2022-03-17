import { useEffect, useState } from "react"

export const UseFecth = (url) => {

    const [resultado,setResultado] = useState({cargando: true, data: null})

    useEffect(() => {
        getData(url)
    }, [url])
    
     async function getData (url) {
       try{
        setResultado({cargando: true, data:null})
        const resp = await fetch(url)
        const data = await resp.json()
        setResultado({cargando: false, data})
       }
       catch(error){
           console.log(error);
       }       
    } 
    return resultado
}
