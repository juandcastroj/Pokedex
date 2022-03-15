import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import List from '../components/crud/List'
import { listProductsAsync } from '../redux/actions/actionProducts'
import '../components/style/style.css'


const Container = () => {


  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProductsAsync())
     }, [dispatch])

  return (
    <div>  
        <Link to='/login' > Login </Link>
        <List/>
    </div>
  )
}

export default Container