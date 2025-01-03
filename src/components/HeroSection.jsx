import React, { useState, useEffect } from 'react'
import "../assets/styles/heroSection.scss"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spaceship from "../assets/images/hero-1-1.jpg"

const HeroSection = () => {

  const [days, setDays] = useState(132);
  const [hours, setHours] = useState(7);
  const [minutes, setMinutes] = useState(33);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(interval);
        return;
      }

      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            setDays((prevDays) => prevDays - 1);
            setHours(23);
            setMinutes(59);
            setSeconds(59);
          } else {
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  return (
    <div className='hero-section'>
      <div className='bg-hero'></div>
      <Container className='px-3'>
        <div className="hero-style1">
          <Row className='flex-row-reverse'>
            <Col lg={3}>
              <div className="hero-thumb updown">
                <img src={Spaceship} alt="" className='img-fluid' />
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
          <div className="skill-feature">
            <div className="progress">
              <div className="progress-bar" style={{ width: "80%" }}></div>
            </div>
            <div className="progress-value-max">100 Min $</div>
          </div>
          <ul className="skill-feature_list style2">
            <li>7.75 Min</li>
            <li>1.5 Min</li>
            <li>140,000 $ chosen</li>
          </ul>
          <div className="banner-countdown-wrap">
            <div className="coming-time">
              <div className="time-count day">
                <span>{days < 10 ? '0' + days : days}</span>
                Days
              </div>
              <div className="time-count hour">
                <span>{hours < 10 ? '0' + hours : hours}</span>
                Hours
              </div>
              <div className="time-count min">
                <span>{minutes < 10 ? '0' + minutes : minutes}</span>
                Minute
              </div>
              <div className="time-count sec">
                <span>{seconds < 10 ? '0' + seconds : seconds}</span>
                Second
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSection
