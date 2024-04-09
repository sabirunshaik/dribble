import React from 'react'
import Frontpage from './pages/Frontpage'
import {Routes,Route} from "react-router-dom"
import Signin from './pages/Signinpg'
import Starter from './pages/Frontpage'
import Selection from './pages/Selection'
import Successful from './pages/Successful'
const App = () => {
  return (
    <>
    <Routes >
      <Route path='/' element={<Starter/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/starter' element={<Starter/>}/>
      <Route path='/selection'element={<Selection/>}/>
      <Route path='/successful'element={<Successful/>}/>
    </Routes>
 
    </>
  )
}

export default App