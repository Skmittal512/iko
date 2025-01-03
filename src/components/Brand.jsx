import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

import "../assets/styles/brand.scss"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import brand1 from "../assets/images/brand_img03.png";
import brand2 from "../assets/images/brand_img04.png";
import brand3 from "../assets/images/brand_img05.png";
import brand4 from "../assets/images/brand_img06.png";
import brand5 from "../assets/images/brand_img07.png";

const Brand = () => {
    return (
        <div className='brand'>
            <Container>
                <Row className='g-0'>
                    <Col lg={12}>
                        <div className="text-center brand-title">
                            <h6 className="title">Our top Partner</h6>
                        </div>
                    </Col>
                </Row>
                <div className="brand-item-wrap">
                    <Row className='g-0'>
                        <Col>
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={5}
                                loop={true}
                                autoplay={{
                                    delay: 500,
                                    disableOnInteraction: false
                                }}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={brand1} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={brand2} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={brand3} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={brand4} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={brand5} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={brand2} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Brand
