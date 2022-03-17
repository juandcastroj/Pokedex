import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import List from '../components/crud/List'
import { listPokeAsync } from '../redux/actions/actionPoke'
import '../components/style/style.css'


const Container = () => {

  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listPokeAsync())
     }, [dispatch])

  return (
    <div>  
      <Link to='/add' style={{float: 'right'}}  > Agregar nuevo Pokemon </Link>
        <hr></hr>
        <List/>
    </div>
  )
}

export default Container