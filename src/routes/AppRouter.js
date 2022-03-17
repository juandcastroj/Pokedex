import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Add from '../components/crud/Add'
import LogIn from '../components/LogIn'
import Naveg from '../components/Naveg'
import Register from '../components/Register'
import Container from '../container/Container'
import { LoginEmailPassword } from '../redux/actions/actionLogin'
import { PublicRoute } from './PublicRoute'


const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                console.log(user)
                dispatch(LoginEmailPassword(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <BrowserRouter>
            <Naveg />
               <Routes>
                <Route path="/" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Container />
                    </PublicRoute>
                } />
                 <Route path="/login" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <LogIn />
                    </PublicRoute>
                } />

                <Route path="/register" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Register />
                    </PublicRoute>
                } />

                <Route path="/add" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Add />
                    </PublicRoute>
                } />
                 <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter