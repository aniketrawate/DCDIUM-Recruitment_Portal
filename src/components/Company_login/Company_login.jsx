import React from 'react'
import "./Company_login.css"
import { Link } from 'react-router-dom'

const Company_login = () => {
  return (
    <>
        <div class="company_login_body">
        <div class="company_login_wrapper">
            <form action="">
                <h1>Company Login</h1>
                <div class="company_login_input-box">
                    <input type="text" placeholder="Email" required></input>
                    <i class='bx bxs-user'></i>
                </div>
                <div class="company_login_input-box">
                    <input type="password" placeholder="Password" required></input>
                    <i class='bx bxs-lock-alt'></i>
                </div>
                <div class="company_login_buttons">
                <Link to={'/company_page'} ><button type="submit" class="company_login_btn">Login</button></Link>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Company_login