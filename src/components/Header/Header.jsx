import React from 'react'
import "./Header.css"
import { dc_logo } from '../../assets'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
         <header class="header">
        <div class="logo_and_nav">
            <Link to={'/'}  class="logo_comp_name">
                <img class="dc_logo" src={dc_logo} alt=""/>
                <span class="portal_name">DCDIUM Recruitment Portal</span>
            </Link>
            <nav>
                <ul class="nav_list">
                    <li>
                        <Link to={'/login'} class="nav_items">Login</Link>
                    </li>
                    <li>
                        <Link to={'/register'} class="nav_items" >Register</Link>
                    </li>
                    <li>
                        <Link to={'/company-login'} class="nav_items">DCDIUM Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header