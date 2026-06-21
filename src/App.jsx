 import React from 'react'
 import Header from './Components/Header'
 import Home from './Pages/Home'
 import ProductDetails from './Pages/ProductDetails'
 import {Route, Routes} from 'react-router-dom'
 export default function App() {
   return (
     <div>
       <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes> 
     </div>
   )
 }
 