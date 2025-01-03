import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () => {
  return (
    <div className='notFound text-white mt-5 pt-5'>
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className='text-center text-white'>404 Page Not Found</h2>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NotFound
