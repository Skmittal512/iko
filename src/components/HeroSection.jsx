import React from 'react'
import "../assets/styles/heroSection.scss"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spaceship from "../assets/images/hero-1-1.jpg"

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='bg-hero'></div>
      <Container className='px-3'>
        <div className="hero-style1">
          <Row className='flex-row-reverse'>
            <Col lg={3}>
              <div className="hero-thumb updown">
                <img src={Spaceship} alt="" className='img-fluid'/>
              </div>
            </Col>
            <Col lg={9}>
              <h1 className='hero-title'>Putting Your Money in Product Backed Projects</h1>
              <div className="btn-wrap">
                <a href="#" className="btn1">Purchase a Token</a>
                <a href="#" className="btn2">Read  Documents</a>
              </div>
            </Col>
          </Row>
        </div>
        <div className="hero-countdown-wrap">
          <h2 className='hero-countdown-wrap-title'>ICO will start in..</h2>
          <ul className='skill-feature_list'>
            <li><span>Value</span>  of technology invested</li>
            <li><span>Private</span> sale</li>
            <li><h4>ICO</h4></li>
          </ul>
          <div className="skill-feature"></div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSection
