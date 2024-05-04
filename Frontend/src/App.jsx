import React, { useContext } from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import PaidBook from './componentes/courses/PaidBook'
import Register from './componentes/Register'
import Contact from './componentes/Contact'
import { Toaster } from 'react-hot-toast';
import { useauth } from './context/Authprovider'

const App = () => {
  const [authuser, setauthuser] = useauth()
  console.log(authuser)
  return (
    <>

      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={authuser ? <PaidBook /> : <Navigate to="/register" />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={authuser ? <Contact /> : <Navigate to="/register" />} />
        </Routes>
        <Toaster />
      </div>

    </>
  )
}

export default App
