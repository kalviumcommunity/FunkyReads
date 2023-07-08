import React from 'react'
import {Routes,Route} from "react-router-dom"
import LandingPage1 from '../Pages/LandingPage1'
import LandingPage2 from '../Pages/LandingPage2'
import CategoryPage from '../Pages/CategoryPage'
import Signin from '../Pages/AUTHENTICATION/Signin'
import Signup from '../Pages/AUTHENTICATION/Signup'
import ProductListingPage from '../Pages/ProductListingPage'
import ToBeRead from '../Pages/ToBeRead'
import SingleProductPage from '../Pages/SingleProductPage'
import Animations from '../Pages/Animations'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Animations/>}></Route>
            <Route path='/register' element={<Signup/>}></Route>
            <Route path='/signin' element={<Signin/>}></Route>
            <Route path='/category' element={<CategoryPage/>}></Route>
            <Route path='/products' element={<ProductListingPage/>}></Route>
            <Route path='/products/:id' element={<SingleProductPage/>}></Route>
            <Route path='/tbr' element={<ToBeRead/>}></Route>

        </Routes>
    </div>
  )
}

export default AllRoutes;