import React from 'react'
import "../assets/styles/roadmap.scss"
import bgGradient from "../assets/images/bg-gradient1.jpg"
import { Col, Container, Row } from 'react-bootstrap'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Roadmap = () => {



  return (
    <div className='roadmap position-relative'>
      <div className="bg-gradient">
        <img src={bgGradient} alt="" />
      </div>
      <Container>
        <Row>
          <Col lg={6} sm={8}>
            <div className="section-title">
              <h2 className="title">Our Roadmap</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className='p-0'>
        <div className="slider-area position-relative">
          <Row className='roadmap-slider'>
            <Col>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                loop={true}
                slidesPerView={5}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="roadmap-item">
                    <span className="roadmap-title">End of Q4 2021</span>
                    <div className="roadmap-content">
                      <h4 className="title">
                        <span className="dot"></span>
                        Concept
                      </h4>
                      <p>SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="roadmap-item">
                    <span className="roadmap-title">End of Q4 2021</span>
                    <div className="roadmap-content">
                      <h4 className="title">
                        <span className="dot"></span>
                        Research
                      </h4>
                      <p>SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="roadmap-item">
                    <span className="roadmap-title">End of Q4 2021</span>
                    <div className="roadmap-content">
                      <h4 className="title">
                        <span className="dot"></span>
                        App Beta Test
                      </h4>
                      <p>SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="roadmap-item">
                    <span className="roadmap-title">End of Q4 2021</span>
                    <div className="roadmap-content">
                      <h4 className="title">
                        <span className="dot"></span>
                        Token Test
                      </h4>
                      <p>SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="roadmap-item">
                    <span className="roadmap-title">End of Q4 2021</span>
                    <div className="roadmap-content">
                      <h4 className="title">
                        <span className="dot"></span>
                        Alpha Test
                      </h4>
                      <p>SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="roadmap-item">
                    <span className="roadmap-title">End of Q4 2021</span>
                    <div className="roadmap-content">
                      <h4 className="title">
                        <span className="dot"></span>
                        Concept
                      </h4>
                      <p>SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Roadmap
