import React from 'react'
import { Col, Row } from 'antd'
import { Body3, Heading3 } from './StyledComponents'
import CarouselSlider from './CarouselSlider'

class Carousel extends React.Component {
  render() {
    const { carousel } = this.props
    return (
      <div className="carousel-container-wrapper">
        {carousel.map(
          (
            {
              title,
              description,
              btnText,
              btnLink,
              cards,
              backgroundColor,
              btnColor
            },
            index
          ) => (
            <div className="carousel-container" style={{ backgroundColor }}>
              <Row>
                <Col lg={6} md={20} style={{ paddingTop: '20px' }}>
                  <Heading3
                    style={{ fontWeight: 'bold', marginBottom: '40px' }}
                  >
                    {title}
                  </Heading3>
                  <Body3>{description}</Body3>
                  <a
                    className="btn btn-primary btn-link flex-center margin-top-medium margin-bottom-large
                width-1-1 text-uppercase"
                    href={btnLink}
                    target={btnLink.includes('https://') ? '_blank' : ''}
                    style={{ background: btnColor }}
                  >
                    {btnText}
                  </a>
                </Col>
                <Col md={0} lg={1} />
                <Col md={24} sm={24} lg={17}>
                  <CarouselSlider cards={cards} carouselNumber={index + 1} />
                </Col>
              </Row>
            </div>
          )
        )}
      </div>
    )
  }
}

export default Carousel
