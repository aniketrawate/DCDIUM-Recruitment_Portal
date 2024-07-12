import React from 'react'
import "./Login.css"
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div class="login_body">
            <div class="login_wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div class="login_input-box">
                        <input type="text" placeholder="Email" required></input>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="login_input-box">
                        <input type="password" placeholder="Password" required></input>
                        <i class='bx bxs-lock-alt'></i>
                    </div>
                    <div class="login_remember">
                        <label><input type="checkbox"></input>Remember me</label>
                    </div>
                    <div class="login_buttons">
                        <button type="submit" class="login_btn">Login</button>
                        <Link to={'/to_regester_from_login'} ><button class="login_btn">Register</button></Link>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login