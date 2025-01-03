import React from 'react'
import "../assets/styles/feature.scss"
import bgimg from "../assets/images/bg-gradient.jpg"
import coin from "../assets/images/coin.png"
import featureIcon1 from "../assets/images/feature-icon1-1.svg"
import featureIcon2 from "../assets/images/feature-icon1-2.svg"
import featureIcon3 from "../assets/images/feature-icon1-3.svg"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Feature = () => {
  return (
    <div className='feature'>
      <div className="bg-gradient">
        <img src={bgimg} alt="" className='img-fluid' />
      </div>
      <Container>
        <div className="mb-25">
          <Row className='gy-5'>
            <Col lg={7}>
              <div className="section-title">
                <h2 className='title'>Why You Choose IKO is worth buying today?</h2>
                <p className="sec-text">
                  Use the window for the planned investment  and calculate the estimated
                  <br />
                  Iko price and your monthly dividends at a fixed time
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <div className="updown text-center">
                <img src={coin} alt="" className='img-fluid' />
              </div>
            </Col>
          </Row>
        </div>
        <Row className='gy-5 justify-content-between'>
          <Col lg={5}>
            <div className="amount-quantity">
              <div className="amount">
                <h5 className="title">Amount invested</h5>
                <p className="price">50,000 $</p>
              </div>
              <div className="quantity">
                <h5 className="title">Quantity Iko</h5>
                <p className="price">500,000 Iko</p>
              </div>
            </div>
            <ul className="price-progress-wrap">
              <li>
                <h6 className='progress-wrap-title'>Expected FOX price</h6>
                <p className='progress-wrap-text'>0.36 $</p>
                <div className="skill-feature">
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "70%" }}></div>
                  </div>
                  <div className="progress-value">
                    <span>100 $</span>
                    <span>100,000 $</span>
                  </div>
                </div>
              </li>
              <li>
                <h6 className='progress-wrap-title'>Expected FOX price</h6>
                <p className='progress-wrap-text'>0.36 $</p>
                <div className="skill-feature">
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "80%" }}></div>
                  </div>
                  <div className="progress-value">
                    <span>100 $</span>
                    <span>100,000 $</span>
                  </div>
                </div>
              </li>
              <li>
                <h6 className='progress-wrap-title'>Expected FOX price</h6>
                <p className='progress-wrap-text'>0.36 $</p>
                <div className="skill-feature">
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "40%" }}></div>
                  </div>
                  <div className="progress-value">
                    <span>100 $</span>
                    <span>100,000 $</span>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
          <Col lg={6}>
            <div className="feature-card d-flex">
              <div className="feature-card-icon">
                <img src={featureIcon1} alt="" />
              </div>
              <div className="feature-card-details">
                <h4 className="feature-card-title">The expected value of your investment
                </h4>
                <p className="feature-card-text">180,000 $</p>
                <p className="feature-card-text">ROI = 360 %</p>
              </div>
            </div>
            <div className="feature-card d-flex">
              <div className="feature-card-icon">
                <img src={featureIcon2} alt="" />
              </div>
              <div className="feature-card-details">
                <h4 className="feature-card-title">Expected monthly dividend
                </h4>
                <p className="feature-card-text">3600 FOX = 1296 $</p>
              </div>
            </div>
            <div className="feature-card d-flex">
              <div className="feature-card-icon">
                <img src={featureIcon3} alt="" />
              </div>
              <div className="feature-card-details">
                <h4 className="feature-card-title">Masternode bonus
                </h4>
                <p className="feature-card-text">180,000 $</p>
                <p className="feature-card-text">ROI = 360 %</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Feature
