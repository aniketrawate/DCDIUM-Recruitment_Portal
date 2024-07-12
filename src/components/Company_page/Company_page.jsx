import React from 'react'
import "./Company_page.css"
import { Link } from 'react-router-dom'

const Company_page = () => {
  return (
    <>
    <div class="company_page_body">
        <div class="company_page_allover">
        
        
            <h1 class="company_page_h1">Added Vacancies</h1>
            <div class="addb">

                <Link to={'/vacancy_form'} >
                <div class="addb_2">
                <button class="add">
                +ADD
                </button>
                </div>
                </Link>
            </div>
    
    
            <section class="company_page_section">
                <div class="company_page_vacancy-item">
    
                    <img class="company_page_imga"
                        src="logo1-removebg-preview.png"
                        alt=""/>
    
                    <p class="company_page_job">
                        <br/><br/>
                        <b> Job Domin: </b> Web Developer <br/>
                        <b>Work mode:</b> Remote <br/>
                        <b>Required experience:</b> 1-2 Year <br/>
                        <b>Last Date to Apply:</b> 20 Jan 2024
                    </p>
                    <button class="company_page_button1">Edit</button>
                    <button class="company_page_button" onclick="showDeleteConfirmation()">
                        Remove
                    </button>
    
                </div>
                <div class="company_page_vacancy-item">
    
                    <img class="company_page_imga"
                        src="logo1-removebg-preview.png"
                        alt=""/>
    
                    <p class="company_page_job">
                        <br/><br/>
                        <b> Job Domin: </b> Data scientists <br/>
                        <b>Work mode:</b> Remote <br/>
                        <b>Required experience:</b> 0-2 Year <br/>
                        <b>Last Date to Apply:</b> 20 Feb 2024
                    </p>
                    <button class="company_page_button1">Edit</button>
                    <button class="company_page_button" onclick="showDeleteConfirmation()">
                        Remove
                    </button>
    
                </div>
                <div class="company_page_vacancy-item">
    
                    <img class="company_page_imga"
                        src="logo1-removebg-preview.png"
                        alt=""/>
    
                    <p class="company_page_job">
                        <br/><br/>
                        <b> Job Domin: </b>Full stack developers <br/>
                        <b>Work mode:</b> Remote <br/>
                        <b>Required experience:</b> 1-10 Year <br/>
                        <b>Last Date to Apply:</b> 10 Jun 2024
                    </p>
                    <button class="company_page_button1">Edit</button>
                    <button class="company_page_button" onclick="showDeleteConfirmation()">
                        Remove
                    </button>
    
                </div>
                <div class="company_page_vacancy-item">
    
                    <img class="company_page_imga"
                        src="logo1-removebg-preview.png"
                        alt=""/>
    
                    <p class="company_page_job">
                        <br/><br/>
                        <b> Job Domin: </b> Software engineer <br/>
                        <b>Work mode:</b> Remote <br/>
                        <b>Required experience:</b> 0-6 Year <br/>
                        <b>Last Date to Apply:</b> 05 Jun 2024
                    </p>
                    <button class="company_page_button1">Edit</button>
                    <button class="company_page_button" onclick="showDeleteConfirmation()">
                        Remove
                    </button>
    
                </div>
                <div class="company_page_vacancy-item">
    
                    <img class="company_page_imga"
                        src="logo1-removebg-preview.png"
                        alt=""/>
    
                    <p class="company_page_job">
                        <br/><br/>
                        <b> Job Domin: </b>Senior software engineer <br/>
                        <b>Work mode:</b> Remote <br/>
                        <b>Required experience:</b> 1-2 Year <br/>
                        <b>Last Date to Apply:</b> 07 Oct 2024
                    </p>
                    <button class="company_page_button1">Edit</button>
                    <button class="company_page_button" onclick="showDeleteConfirmation()">
                        Remove
                    </button>
    
                </div>
                <div class="company_page_vacancy-item">
    
                    <img class="company_page_imga"
                        src="logo1-removebg-preview.png"
                        alt=""/>
    
                    <p class="company_page_job">
                        <br/><br/>
                        <b> Job Domin: </b> Cloud engineer <br/>
                        <b>Work mode:</b> Remote <br/>
                        <b>Required experience:</b> 1-2 Year <br/>
                        <b>Last Date to Apply:</b> 20 Jan 2024
                    </p>
                    <button class="company_page_button1">Edit</button>
                    <button class="company_page_button" onclick="showDeleteConfirmation()">
                        Remove
                    </button>
    
                </div>
            </section>   
                {/* <!-- Add more items as needed --> */}
        </div>
    
    
    
        
        <div class="company_page_overlay" id="overlay">
            <div class="company_page_popup">
                <p>Are you sure you want to delete?</p>
                <div class="company_page_buttons">
                    <button onclick="deleteItem()">Yes, Delete</button>
                    <button onclick="cancelDelete()">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Company_page