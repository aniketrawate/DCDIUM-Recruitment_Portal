import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
         <section class="home_body" >
      <section class="head">

        <div class="frontimg">
          <img
            src="https://img.freepik.com/premium-photo/online-job-search-modish-website-worker-search-job-opportunities_31965-60442.jpg"
            alt=""
          />
        </div>
      </section>
  
      <section class="cards">
        <div class="title">
          <h1>Explore Exciting Opportunities at DCDIUM</h1>
        </div>
  
        <div class="cont">
          {/* <!-- Software Development Card --> */}
          <div class="card">
            <div class="headline">Software Development</div>
            <div class="text">
              Our team of experienced software developers works closely with our
              clients to understand their unique needs and requirements,
              developing customized software solutions that meet those needs.
            </div>
          </div>
  
          {/* <!-- Cybersecurity Card --> */}
          <div class="card">
            <div class="headline">Cybersecurity</div>
            <div class="text">
              Protect your business from cyber threats with our cybersecurity
              services. We offer assessments, monitoring, and incident response to
              keep your data and systems secure.
            </div>
          </div>
  
          {/* <!-- Corporate Training Card --> */}
          <div class="card">
            <div class="headline">Corporate Training</div>
            <div class="text">
              Maximize your team's potential with our corporate training services.
              We offer custom programs in leadership, communication, and technical
              skills to meet your business needs.
            </div>
          </div>
  
          {/* <!-- Digital Marketing Card --> */}
          <div class="card">
            <div class="headline">Digital Marketing</div>
            <div class="text">
              Streamline your hiring process with our manpower consultancy
              services. Seamlessly integrating innovation and analytics, we
              empower businesses to thrive in the dynamic digital landscape.
            </div>
          </div>
        </div>
      </section>
  
      <section class="vacancies">
        <div class="title">
          <h1>Current Vacancies</h1>
        </div>
  
        <div class="cont">
          {/* <!-- Front-End Developer Vacancy --> */}
          <div class="vacancy-card">
            <div class="headline">Front-End Developer</div>
            <div class="text">
              Join us as a Front-End Developer and contribute to building
              user-friendly interfaces. Use your skills in HTML, CSS, and
              JavaScript to create responsive and visually appealing websites.
            </div>
            <div class="vacancy-card-details">
              <p><strong>Location:</strong> Delhi, India</p>
              <p><strong>Salary:</strong> Competitive</p>
              <p><strong>Experience:</strong> 4+ years</p>
              <Link to={'/job_info_page'} class="vacancy-apply-btn">Apply Now</Link>
            </div>
          </div>
  
          {/* <!-- Back-End Developer Vacancy --> */}
          <div class="vacancy-card">
            <div class="headline">Back-End Developer</div>
            <div class="text">
              We are looking for a Back-End Developer to build scalable and
              efficient server-side applications. Familiarity with database
              systems and web servers is a plus.
            </div>
            <div class="vacancy-card-details">
              <p><strong>Location:</strong> Mumbai, India</p>
              <p><strong>Salary:</strong> Competitive</p>
              <p><strong>Experience:</strong> 3+ years</p>
              <Link to={'/job_info_page'} class="vacancy-apply-btn">Apply Now</Link>
            </div>
          </div>
  
          {/* <!-- UX/UI Designer Vacancy --> */}
          <div class="vacancy-card">
            <div class="headline">UX/UI Designer</div>
            <div class="text">
              Exciting opportunity for a UX/UI Designer to create visually
              appealing and intuitive user interfaces. Bring your creativity to
              enhance user experience.
            </div>
            <div class="vacancy-card-details">
              <p><strong>Location:</strong> Mumbai, India</p>
              <p><strong>Salary:</strong> Competitive</p>
              <p><strong>Experience:</strong> 2+ years</p>
              <Link to={'/job_info_page'} class="vacancy-apply-btn">Apply Now</Link>
            </div>
          </div>
  
          {/* <!-- Data Scientist Vacancy --> */}
          <div class="vacancy-card">
            <div class="headline">Data Scientist</div>
            <div class="text">
              Join our team as a Data Scientist to analyze complex datasets and
              provide insights. Experience in machine learning and statistical
              modeling is essential.
            </div>
            <div class="card-details">
              <p><strong>Location:</strong> Pune, India</p>
              <p><strong>Salary:</strong> Competitive</p>
              <p><strong>Experience:</strong> 5+ years</p>
              <Link to={'/job_info_page'} class="vacancy-apply-btn">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>
    </section>
    </>
  )
}

export default Home