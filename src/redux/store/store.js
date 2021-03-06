import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { pokemonReducer } from "../reducers/pokemonReducer";
import { registerReducer } from "../reducers/registerReducer";


const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    pokemon: pokemonReducer
})


export const store = createStore (

    reducers, composeEnhancers(
        applyMiddleware(thunk)
    )

)

