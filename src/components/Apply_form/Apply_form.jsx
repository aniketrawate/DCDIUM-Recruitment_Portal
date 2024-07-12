import React from 'react'
import "./Apply_form.css"

const Apply_form = () => {
  return (
    <>
        <div class="apply_form_main_div" >
            <form class="apply_form_wrapper">
                <h1 class="apply_form_h1" >Application form</h1>
                <div class="apply_form_rl_elements">
                    <div class="apply_form_left">
                        <h2 class="apply_form_element_title">First name</h2>
                        <input class="apply_form_inp" type="text" placeholder="First Name" required></input>
                        <h2 class="apply_form_element_title">Gender</h2>
                        <div class="apply_form_gender_div">
                            <input class="apply_form_gender" type="radio" name="Gender"></input><span class="apply_form_span" >Male</span>
                            <input class="apply_form_gender" type="radio" name="Gender"></input><span class="apply_form_span" >Female</span>
                        </div>
                        <h2 class="apply_form_element_title">Email</h2>
                        <input class="apply_form_inp" type="text" placeholder="Email" required></input>
                        <h2 class="apply_form_element_title">Working Status</h2>
                        <input class="apply_form_inp" type="text" placeholder="employed" required></input>
                        <h2 class="apply_form_element_title">Education</h2>
                        <input class="apply_form_inp" type="text" placeholder="B.Tech" required></input>
                        <h2 class="apply_form_element_title">Experiance</h2>
                        <input class="apply_form_inp" type="text" placeholder="5 years" required></input>
                    </div>
                    <div class="apply_form_right">
                        <h2 class="apply_form_element_title">Last name</h2>
                        <input class="apply_form_inp apply_form_r_inp" type="text" placeholder="Last Name" required></input>
                        <h2 class="apply_form_element_title">DoB</h2>
                        <input class="apply_form_dob apply_form_r_inp" type="date" required></input>
                        <h2 class="apply_form_element_title">Phone</h2>
                        <input class="apply_form_inp r_inp" type="text" placeholder="Phone No." required></input>
                        <h2 class="apply_form_element_title">Currently Located at</h2>
                        <input class="apply_form_inp r_inp" type="text" placeholder="eg:Pune" required></input>
                        <h2 class="apply_form_element_title">Job Domain</h2>
                        <input class="apply_form_inp r_inp" type="text" placeholder="ML engineer" required></input>
                        <h2 class="apply_form_element_title">Resume</h2>
                        <input type="file"></input>
                    </div>
                </div>
                <div class="apply_form_emp_discription">
                    <h2 id="apply_form_yout_discription">Enter your Description</h2>
                    <textarea class="apply_form_textarea" name="emp_discription" id="" cols="80" rows="5"></textarea>
                </div>
                <button type="submit" class="apply_form_submit">Submit</button>
            </form>
        </div>
    </>
  )
}

export default Apply_form