import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <footer class="footer_footer">
        <div class="footer_footer_up">
            <div class="footer_footer_containt">
                <div class="footer_socials">
                    <a class="footer_fc_name" href="">DCDIUM Technologies</a>
                    <p class="footer_social_paragraph">We believe that technology should be used to simplify business operations, increase productivity, and enhance the customer experience. Our software solutions are designed to improve your business processes and provide a competitive advantage in your industry.</p>
                    <div class="footer_social_logos">
                        <a href="">
                            <i class="ri-twitter-fill"></i>
                        </a>
                        <a href="">
                            <i class="ri-facebook-circle-fill"></i>
                        </a>
                        <a href="">
                            <i class="ri-instagram-line"></i>
                        </a>
                        <a href="">
                            <i class="ri-linkedin-box-fill"></i>
                        </a>
                    </div>
                </div>
                <div class="footer_links">
                    <h4>USEFUL LINKS</h4>
                    <ul class="footer_links_list">
                        <li>
                            <i class="ri-arrow-right-s-line"></i>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <i class="ri-arrow-right-s-line"></i>
                            <a href="">About us</a>
                        </li>
                        <li>
                            <i class="ri-arrow-right-s-line"></i>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <i class="ri-arrow-right-s-line"></i>
                            <a href="">Terms of service</a>
                        </li>
                        <li>
                            <i class="ri-arrow-right-s-line"></i>
                            <a href="">Privacy policy</a>
                        </li>
                    </ul>
                </div>
                <div class="footer_services">
                    <h4>OUR SERVICES</h4>
                    <ul class="footer_services_list">
                        <li>
                            <i class="ri-arrow-right-s-line"></i>
                            <a href="">Software Development</a>
                        </li>
                        <li>
                            <i class="ri-arrow-right-s-line"></i>
                            <a href="">Cyber Security</a>
                        </li>
                        <li>
                            <i class="ri-arrow-right-s-line"></i>
                            <a href="">Corporate Training</a>
                        </li>
                        <li>
                            <i class="ri-arrow-right-s-line"></i>
                            <a href="">Manpower Consultancy</a>
                        </li>
                        <li>
                            <i class="ri-arrow-right-s-line"></i>
                            <a href="">Digital Marketing</a>
                        </li>
                    </ul>
                </div>
                <div class="footer_contact">
                    <h4 class="footer_contact_h4">CONTACT US</h4>
                    <p>
                        #J3/303, Kumar Purva
                        <br/>
                        DP Road, Hadapsar Pune 41102
                        <br/>
                        India
                        <br/>
                        <br/>
                        <strong>Phone:</strong>
                        +91 7020085827
                        <br/>
                        <strong>Email:</strong>
                        sales@dcdium.com
                    </p>
                    
                </div>
            </div>
        </div>
        <div class="footer_down">
            <div class="footer_copyright" >
                <h3>© Copyright 2023 <span>DCDIUM Technologies.</span> All Rights Reserved</h3>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer