import React from 'react'
import "../assets/styles/intro.scss"
import IntroImg from "../assets/images/intro.png"
import { Col, Container, Row } from 'react-bootstrap'

const Intro = () => {
    return (
        <div className='intro'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="section-title">
                            <h2 className="title">Introducing Iko Crypto</h2>
                            <p className="sec-text">True wealth in the world of virtual currencies</p>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-between'>
                    <Col lg={4}>
                        <div className="intro-wrap mt-lg-4">
                            <h6 className="intro-wrap-title">Who We Are</h6>
                            <p className="intro-wrap-text">Iko is a 100% pre-scratched cryotome There are 1 Million Minutes, and 60% of them can be yours (60% - ICO) Utility & security token (applies to all transactions and gives a monthly dividend)</p>
                        </div>
                        <div className="intro-wrap">
                            <h6 className="intro-wrap-title">Wealth?</h6>
                            <p className="intro-wrap-text">Users with Iko have lower system fees Price growth is gathered by demand for Unifox technologies. You own a stake in an international corporation. You are part of the community</p>
                        </div>
                        <div className="intro-wrap">
                            <h6 className="intro-wrap-title">True Riches?</h6>
                            <p className="intro-wrap-text">The underlying growth attracts investors The whole community is interested in growing the Iko prize. The company is planning to continue to expand the project, and it will cost the top up</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="updown">
                            <img src={IntroImg} alt="" className='img-fluid'/>
                        </div>
                        <div className="intro-wrap">
                        <h6 className="intro-wrap-title">Our Mission & Vission</h6>
                            <p className="intro-wrap-text">Iko is a 100% pre-scratched cryptome There are 1 Million Minutes, and 60% of them can be yours (60% - ICO) Utility & security token (applies to all transactions and gives a monthly dividend)</p>
                            <p className="intro-wrap-text mt-40">Iko is a 100% pre-scratched cryptome There are 1 Million Minutes, and 60% of them can be yours (60% - ICO) Utility & security token (applies to all transactions and gives a monthly dividend)</p>
                            <p className="intro-wrap-text mt-40">Iko is a 100% pre-scratched cryptome There are 1 Million Minutes, and 60% of them can be yours (60% - ICO)</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro
