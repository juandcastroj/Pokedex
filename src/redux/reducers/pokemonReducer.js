import { typesPoke } from "../types/types"


const initialState = {
    pokemons: []
}

export const pokemonReducer = ( state = initialState , action ) => {

    switch ( action.type) {
        case typesPoke.add:
        return{
            pokemons: [action.payload]
        } 

        case typesPoke.list: 
        return{
            pokemons: [...action.payload ]
        }
        
        case typesPoke.delete:
            return{
            pokemonss: state.products.filter(pok => pok.codigo !== action.payload)
            }


        default:
            return   state   
    }
}