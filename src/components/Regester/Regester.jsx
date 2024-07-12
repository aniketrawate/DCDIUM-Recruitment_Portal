import React from 'react'
import "./Regester.css"
import { Link } from 'react-router-dom'

const Regester = () => {
  return (
    <>
        <div class="body">
            <div class="wrapper">
                <form action="">
                    <h1>Regester</h1>
                    <div class="input_box">
                        <input type="text" placeholder="Full Name" required></input>
                    </div>
                    <div class="input_box">
                        <input type="text" placeholder="Email" required></input>
                    </div>
                    <div class="input_box">
                        <input type="text" placeholder="Password" required></input>
                    </div>
                    <div class="input_box">
                        <input type="text" placeholder="Conferm Password" required></input>
                    </div>
                    <div class="buttons">
                        <button type="submit" class="btn">Regester</button>
                        <Link to={'/to_login_from_regester'} ><button class="btn">Login</button></Link>
                    </div>

                </form>
            </div>
        </div>
    </>
  )
}

export default Regester