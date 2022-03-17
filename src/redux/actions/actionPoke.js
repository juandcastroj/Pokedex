import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesPoke } from "../types/types"



//delete


export const deleteAsync = (nombre) => {
    return async (dispatch) => {

        const estCollection = collection(db, "Pokemones");
        const q = query(estCollection, where("nombre", "==", nombre))
        alert("¿ESTÁS SEGURO DE ELIMINAR ÉSTE POKEMON?")
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db, "Pokemones", docu.id));
        })
        dispatch(deleteSinc(nombre));
    }
}



export const deleteSinc = (nombre) => {
    return {
        type: typesPoke.delete,
        payload: nombre
    }
}



//list 

export const listPokeAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "Pokemones"));
        const pokemons = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());
            pokemons.push({
                ...doc.data()
            })
        })
        dispatch(listSinc(pokemons));
    }
}


export const listSinc = (pokemons) => {

    return {
        type: typesPoke.list,
        payload: pokemons
    }
}





//ADD

export const addAsync = (newPoke) => {

    return (dispatch) => {
        addDoc(collection(db, "Pokemones"), newPoke)
            .then(resp => {
                dispatch(addsinc(newPoke))
                console.log("Pokemon agregado");
            })
            .catch(error => {
                console.log(error);
            })

    }
}


export const addsinc = (pokemons) => {

    return {
        type: typesPoke.add,
        payload: pokemons
    }
}