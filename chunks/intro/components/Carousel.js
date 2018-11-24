import React from 'react';
import { Col, Row } from 'antd';
import { Body3, Heading3 } from './StyledComponents';
import CarouselSlider from './CarouselSlider';

class Carousel extends React.Component {
  render() {
    const { carousel } = this.props;
    return (
      <div className="carousel-container-wrapper">
        {carousel.map(({ title, description, btnText, btnLink, cards, backgroundColor, btnColor }) => (
          <div className="carousel-container" style={{ backgroundColor }}>
            <Row>
              <Col md={6} style={{ paddingTop: "20px" }} sm={{ span: 12 }}>
                <Heading3 style={{ fontWeight: 'bold', marginBottom: "40px" }}>{title}</Heading3>
                <Body3>{description}</Body3>
                <a className="btn btn-primary btn-link flex-center margin-top-medium width-1-1 text-uppercase"
                   href={btnLink} style={{ background: btnColor }}>
                  {btnText}
                </a>
              </Col>
              <Col md={1} />
              <Col md={16} sm={{ span: 12 }}>
                <CarouselSlider cards={cards} />
              </Col>
            </Row>
          </div>
        ))}
      </div>
    )
  }
}

export default Carousel;