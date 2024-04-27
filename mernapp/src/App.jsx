import { useState } from 'react'
import './App.css'
import Home from './screens/Home'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Cart from './screens/Cart'
import Myorders from './components/Myorders'
import { CardProvider } from './components/ContextReducer'

function App() {


  return (
        <CardProvider>

         <Router>
          <Routes>
            <Route  exact path='/' element = {<Home></Home>}></Route>
            <Route exact path = '/login' element = {<Login></Login>}></Route>
            <Route exact path='/createuser' element = {<Signup></Signup>}></Route>
            <Route exact path='/orders' element = {<Myorders></Myorders>}></Route>            
          </Routes>
         
      </Router>
        </CardProvider>
      
       
        
  )
}

export default App
