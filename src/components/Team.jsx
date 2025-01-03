import React from 'react'
import "../assets/styles/team.scss"
import bgGradient from'../assets/images/bg-gradient1.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import founder1 from "../assets/images/founder-1-1.png"
import founder2 from "../assets/images/founder-1-2.png"

const Team = () => {
  return (
    <div className='team-area'>
      <div className="bg-gradient-3">
        <img src={bgGradient} alt="" className='img-fluid'/>
      </div>
      <div className="pb-110">
        <Container>
          <div className="section-title text-center">
            <h2 className="title">Active Founders</h2>
          </div>
          <Row className='gy-4 justify-content-center'>
            <Col lg={6}>
              <div className="founder-card">
                <div className="founder-card-img">
                  <img src={founder1} alt="" className="img-fluid" />
                </div>
                <div className="founder-card-details">
                  <h3 className="founder-card-title">Eleanor Pena</h3>
                  <p className="founder-card-desig">Founder & CEO</p>
                  <div className="social-btn">
                    <a href="#">
                    <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#">
                    <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                    <i class="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="founder-card">
              <div className="founder-card-img">
                  <img src={founder2} alt="" className="img-fluid" />
                </div>
                <div className="founder-card-details">
                <h3 className="founder-card-title">William Xeno</h3>
                  <p className="founder-card-desig">Founder & CEO</p>
                  <div className="social-btn">
                    <a href="#">
                    <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="#">
                    <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                    <i class="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>

      </Container>
    </div>
  )
}

export default Team
