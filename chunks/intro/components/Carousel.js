import React from 'react';
import { Col, Row } from 'antd';
import { Body3, CarouselContainerWrapper, Heading3 } from './StyledComponents';
import CarouselSlider from './CarouselSlider';

class Carousel extends React.Component {
  render() {
    const { carousel, theme } = this.props;
    return (
      <CarouselContainerWrapper
        backgroundColor={theme.primaryColor}
        carouselColor1={theme.thirdColor}
        carouselColor2={theme.grayColorLight}
        carouselColor3={theme.secondaryColor}
      >
        {carousel.map(({ title, description, btnText, btnLink, cards, backgroundColor, btnColor }) => (
          <div className="carousel-container" style={{ backgroundColor }}>
            <Row>
              <Col lg={6} md={20} style={{ paddingTop: "20px" }}>
                <Heading3 style={{ fontWeight: 'bold', marginBottom: "40px" }}>{title}</Heading3>
                <Body3>{description}</Body3>
                <a className="btn btn-primary btn-link flex-center margin-top-medium margin-bottom-large
                width-1-1 text-uppercase"
                   href={btnLink} style={{ background: btnColor }}>
                  {btnText}
                </a>
              </Col>
              <Col md={0} lg={1} />
              <Col md={24} sm={24} lg={17}>
                <CarouselSlider cards={cards} />
              </Col>
            </Row>
          </div>
        ))}
      </CarouselContainerWrapper>
    )
  }
}

export default Carousel;