import React from 'react'
import './Job_info.css'
import { date_logo, wfh1_logo, salary1_logo } from '../../assets/Images'
import { duration0 } from '../../assets/logoes'
import { Link } from 'react-router-dom'



const Job_info = () => {
  return (
    <>
        <div class="job_info_body">

            <section class="job_info_jobInfoContainer">
                <div class="job_info_jobInfo">
                    <h2 class="job_info_h2" >Software Developer</h2>
                    <p class="job_info_company">by DCDIUM Technologies</p>
                    <p class="job_info_location">Pune, INDIA</p>

                    <div class="job_info_logo-container">
                        <img src={wfh1_logo}   alt="Logo"/>
                        <p>Work From Home</p>
                    </div>

                    <div class="job_info_duration">
                        <img src={duration0}   alt="Logo"/>
                        <p>Duration</p>
                    </div>

                    <div class="job_info_end-date">
                        <img src={date_logo}   alt="Logo"/>
                        <p>End Date</p>
                    </div>

                    <div class="job_info_salary">
                        <img src={salary1_logo}   alt="Logo"/>
                        <p>Salary</p>
                    </div>
                    <br></br>
                    <legend><strong>About:</strong></legend>
                    <br/>
                    <p class="job_info_description">
                    A Software Engineer's role is dynamic and requires a combination of
                    technical expertise, analytical thinking, and effective communication.
                    Whether working on new development projects, maintaining existing
                    systems, or optimizing performance, a software engineer plays a
                    crucial role in the software development life cycle, contributing to
                    the creation of reliable and efficient software solutions.
                    </p>
                    <br />

                    <legend><strong>About the work from home job/internship</strong></legend>
                    <br />
                    <p class="job_info_description">
                        Selected intern's day-to-day responsibilities include: <br/>
                        <br/>

                        1. Work on developing web applications <br/>
                        2. Work on SaaS-based application development <br/>
                        3. Work on web technologies such as React.js, Node.js, etc. <br/>
                        4. Work on NoSQL databases on the back-end such as MongoDB, PostgreSQL <br/>
                        5. Work on real-time dashboard development <br/>
                        6. Work on admin dashboard development <br/>
                        7. Work on front-end and back-end parts of the products <br/>
                        8. Work on product development <br/>
                        9. Work on API development <br/>
                    10. Work on cloud platforms like GCP, AWS, Azure, Linode, and Heroku <br/>
                    11. Work on tech stacks such as React, Node.js, Python, and Angular.js

                    </p>
                    <br />

                    <legend><strong>Who can apply?</strong></legend>
                    <br />
                    <p class="job_info_description">
                        Only those candidates can apply who: <br/>
                        <br/>
                        1. are available for the work from home job/internship <br/>
                        2. can start the work from home job/internship between 18th Dec'23 and 31st Jan'24 <br/>
                        3. are available for duration of 1.5 months <br/>
                        4. have relevant skills and interests <br/>

                    </p>
                    <br />

                    <legend><strong>Skills required</strong></legend>
                    <br />
                    <p class="job_info_description">
                        <ul class="job_info_description">
                            <li>Amazon Web Services</li> <li>React.JS</li> <li>Node.JS</li> <li>MongoDB</li> <li>React native</li>
                        </ul>
                    </p>
                    <br />

                    <legend><strong>Number of Vacancies</strong></legend>
                    <p class="job_info_description">
                        10
                    </p>


                    <div class="job_info_applyButton">
                        <Link to={'/apply_form'} ><button>Apply Now</button></Link>
                    
                    </div>
                    
                </div>
            </section>
        </div>
    </>
  )
}

export default Job_info