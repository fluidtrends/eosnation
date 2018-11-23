import React from 'react';
import { Col, Row } from 'antd';
import { Body3, Heading3 } from './StyledComponents';
import CarouselSlider from './CarouselSlider';

class Carousel extends React.Component {
  render() {
    const { carouselTitle, carouselDescription, carouselBtnText, carouselBtnLink } = this.props;
    return (
      <div className="carousel-container">
        <Row>
          <Col span={6}>
            <Heading3 style={{ fontWeight: 'bold' }}>{carouselTitle}</Heading3>
            <Body3>{carouselDescription}</Body3>
            <a className="btn btn-primary btn-link flex-center margin-top-medium width-1-1 text-uppercase"
               href={carouselBtnLink}>{carouselBtnText}</a>
          </Col>
          <Col span={1} />
          <Col span={16}>
            <CarouselSlider />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Heading3 style={{ fontWeight: 'bold' }}>{carouselTitle}</Heading3>
            <Body3>{carouselDescription}</Body3>
            <a className="btn btn-primary btn-link flex-center margin-top-medium width-1-1 text-uppercase"
               href={carouselBtnLink}>{carouselBtnText}</a>
          </Col>
          <Col span={1} />
          <Col span={16}>
            <CarouselSlider />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Heading3 style={{ fontWeight: 'bold' }}>{carouselTitle}</Heading3>
            <Body3>{carouselDescription}</Body3>
            <a className="btn btn-primary btn-link flex-center margin-top-medium width-1-1 text-uppercase"
               href={carouselBtnLink}>{carouselBtnText}</a>
          </Col>
          <Col span={1} />
          <Col span={16}>
            <CarouselSlider />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Carousel;