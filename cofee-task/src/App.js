import React from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Menu from './Page/Menu'
import Product from './Page/Product'
import Nav from './Component/Nav'
export default function App() {
  return (
    <>
      <Nav/>
      <Routes >
      <Route exact path='/' element={<Menu/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      </Routes>
    
    </>
  
  )
}

