import React from 'react'
import "./Vacancy_form.css"

const Vacancy_form = () => {
  return (
    <>
        <div class="vacancy_form_body">
            <form class="vacancy_form_wrapper" action="">
                <h1 class="vacancy_form_h1" >Vacancy Form</h1>
                <div class="vacancy_form_rl_elements">
                    <div class="vacancy_form_left">
                        <h2 class="vacancy_form_element_title">Job Domain</h2>
                        <input class="vacancy_form_inp" type="text" placeholder="Job Domain" required></input>
                        <h2 class="vacancy_form_element_title">Required Experiance</h2>
                        <input class="vacancy_form_inp" type="text" placeholder="5 years" required></input>
                        <h2 class="vacancy_form_element_title">Expected salary</h2>
                        <input class="vacancy_form_inp" type="text" placeholder="50,000/month" required></input>
        
                    </div>
                    <div class="vacancy_form_right">
                        <h2 class="vacancy_form_element_title">Work Mode</h2>
                        <input class="vacancy_form_inp vacancy_form_r_inp" type="text" placeholder="Offline" required></input>
                        <h2 class="vacancy_form_element_title">Working Hours</h2>
                        <input class="vacancy_form_inp vacancy_form_r_inp" type="text" placeholder="8-10 Hours/day" required></input>
                        <h2 class="vacancy_form_element_title">Last Date to Apply</h2>
                        <input class="vacancy_form_last_date vacancy_form_r_inp" type="date" required></input>
                    </div>
                </div>
                <div class="vacancy_form_down_div">
                    <h2 class="vacancy_form_element_title_below">Required Skills</h2>
                    <input class="vacancy_form_long_inp" type="text" placeholder="1st required skill"></input>
                    <input class="vacancy_form_long_inp" type="text" placeholder="2nd required skill"></input>
                    <input class="vacancy_form_long_inp" type="text" placeholder="3rd required skill"></input>
                    <input class="vacancy_form_long_inp" type="text" placeholder="4th required skill"></input>
                    <input class="vacancy_form_long_inp" type="text" placeholder="5th required skill"></input>
            
                    <h2 class="vacancy_form_element_title_below">Guidlines for Employee</h2>
                    <input class="vacancy_form_long_inp" type="text" placeholder="1st Guidlines"></input>
                    <input class="vacancy_form_long_inp" type="text" placeholder="2nd Guidlines"></input>
                    <input class="vacancy_form_long_inp" type="text" placeholder="3rd Guidlines"></input>
                    <input class="vacancy_form_long_inp" type="text" placeholder="4th Guidlines"></input>
                    <input class="vacancy_form_long_inp" type="text" placeholder="5th Guidlines"></input>
            
                    <h2 class="vacancy_form_element_title_below vacancy_h2">About the Vacancy</h2>
                    <textarea class="vacancy_form_textarea" name="about_vacancy" id="" cols="80" rows="5"></textarea>
                </div>
                <button type="submit" class="vacancy_form_submit">Submit</button>
            </form>
        </div>
    </>
  )
}

export default Vacancy_form