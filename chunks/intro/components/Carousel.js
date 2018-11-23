import React from 'react';
import { Col, Row } from 'antd';
import { Body3, Heading3 } from './StyledComponents';
import CarouselSlider from './CarouselSlider';

class Carousel extends React.Component {
  render() {
    const { carousel, carouselTitle, carouselDescription, carouselBtnText, carouselBtnLink } = this.props;
    return (
      <div className="carousel-wrapper-11">
        {carousel.map(({ title, description, btnText, btnLink, backgroundColor, btnColor }) => (
          <div className="carousel-container" style={{ backgroundColor }}>
            <Row>
              <Col span={6} style={{ paddingTop: "20px" }}>
                <Heading3 style={{ fontWeight: 'bold' }}>{title}</Heading3>
                <Body3>{description}</Body3>
                <a className="btn btn-primary btn-link flex-center margin-top-medium width-1-1 text-uppercase"
                   href={btnLink} style={{ background: btnColor }}>
                  {btnText}
                </a>
              </Col>
              <Col span={1} />
              <Col span={16}>
                <CarouselSlider />
              </Col>
            </Row>
          </div>
        ))}
      </div>
    )
  }
}

export default Carousel;