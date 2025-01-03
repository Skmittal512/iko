import React from 'react'
import "../assets/styles/invest.scss"
import { Col, Container, Row } from 'react-bootstrap'
import investIcon1 from '../assets/images/invest-icon-1.png'
import investIcon2 from '../assets/images/invest-icon-2.png'
import investIcon3 from '../assets/images/invest-icon-3.png'
import investIcon4 from '../assets/images/invest-icon-4.png'

const Invest = () => {
  return (
    <div className='invest-area'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={6}>
            <div className="section-title text-center">
              <h2 className="title">Invest in Our ecosystem shares today</h2>
            </div>
          </Col>
        </Row>
        <Row className='gy-4'>
          <Col lg={3} md={6}>
            <div className="invest-card">
              <div className="invest-card-icon">
                <img src={investIcon1} alt="" />
              </div>
              <a className="card-btn btn3" href='#'>Enclose BTC</a>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="invest-card">
              <div className="invest-card-icon">
                <img src={investIcon2} alt="" />
              </div>
              <a className="card-btn btn3" href='#'>Enclose ETH</a>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="invest-card">
              <div className="invest-card-icon">
                <img src={investIcon3} alt="" />
              </div>
              <a className="card-btn btn3" href='#'>Bank Transfer</a>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="invest-card">
              <div className="invest-card-icon">
                <img src={investIcon4} alt="" />
              </div>
              <a className="card-btn btn3" href='#'>Enclose UXC</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Invest
