import { types } from "../types/types"
import { google } from "../../firebase/firebaseConfig";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export const LoginEmailPassword = (email, password) => {


    return(dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
           // console.log("bienvenidoo  " + user.displayName)
            dispatch(ActionLogin(user.uid, user.displayName))
            //alert("bienvenido  " + user.displayName)
        })
        .catch((e) => {
           // console.log(e)
          // alert('USUARIO NO ENCONTRADO');
        })
}
}


//asincronica google
export const loginGoogle = () => {

    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(ActionLogin(user.uid, user.displayName))
                //console.log(user)
                //alert("bienvenido  " + user.displayName)
            })
            .catch(e => {
                console.log(e)
            })
    }
}


//sincronica



export const ActionLogin = (id, displayname) => {

    const navigate = useNavigate()
    alert("bienvenido  ")
    navigate('/')


    return {
        type: types.login,
        payload: {
            id,
            displayname
        }
    }
}




export const logout = () => {
    return async(dispatch) => {
        const auth = getAuth();
            await signOut(auth);
            dispatch(logoutSincrono());
            ;
    }
}

export const logoutSincrono = () => {
    alert("has cerrado sesión")
   return{
       type: types.logout,
   }
}