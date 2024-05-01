import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import PaidBook from './componentes/courses/PaidBook'
import Register from './componentes/Register'

const App = () => {
  return (
    <>

      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<PaidBook />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>

    </>
  )
}

export default App
