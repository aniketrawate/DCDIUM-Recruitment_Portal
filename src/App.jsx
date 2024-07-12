import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Apply_form from './components/Apply_form/Apply_form'
import Login from './components/Login/Login'
import Company_login from './components/Company_login/Company_login'
import Regester from './components/Regester/Regester'
import Vacancy_form from './components/Vacancy_form/Vacancy_form'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home/Home'
import Company_page from './components/Company_page/Company_page'
import Job_info from './components/Job_info/Job_info'


const App = () => {
  const locPath = useLocation();
  const actualPath = locPath.pathname;
  return (
    <>
      {/* <Header/>
      <Home/>
      <Login/>
      <Company_login/>
      <Company_page/>
      <Regester/>
      <Apply_form/>
      <Vacancy_form/>
      <Footer/> */}
      {
        (actualPath != '/login' && actualPath != '/register' && actualPath != '/company-login' && actualPath != '/to_regester_from_login' && actualPath != '/to_login_from_regester' ) &&
        <Header/>
      }
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path='/register' element={<Regester/>} />
        <Route path='/company-login' element={<Company_login/>} />
        <Route path='/to_regester_from_login' element={<Regester/>} />
        <Route path='/to_login_from_regester' element={<Login/>} />
        <Route path='/company_page' element={<Company_page/>} />
        <Route path='/vacancy_form' element={<Vacancy_form/>} />
        <Route path='/job_info_page' element={<Job_info/>} /> 
        <Route path='/apply_form' element={<Apply_form/>} />
      </Routes>
      {
        (actualPath != '/login' && actualPath != '/register' && actualPath != '/company-login' && actualPath != '/to_regester_from_login' && actualPath != '/to_login_from_regester') &&
        <Footer/>
      }
    </>
  )
}

export default App