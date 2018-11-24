import React, { Component } from "react";
import Slider from "react-slick";

import CarouselCard from "./CarouselCard";
import { Arrow } from "./StyledComponents";
import moment from 'moment';

// let image = 'https://storage.googleapis.com/multiply-react/public/images/carousel-card-img.png';
// let title = 'EOS Meetup';
// let eventDate = new Date().now;
// let btnLink = 'https://github.com/grigio/eosfilestore-web';
// let btnText = 'Learn more';

class ArrowComponent extends React.PureComponent {
  render() {
    return (<Arrow {...this.props} />);
  }
}

class CarouselSlider extends Component {
  render() {
    const { cards } = this.props;
    const settings = {
      dots: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <ArrowComponent right />,
      prevArrow: <ArrowComponent left />,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
    return (
      <Slider {...settings}>
        {cards.map(({ image, title, btnLink, btnText, eventDate }) => (
          <div>
            <CarouselCard
              image={image}
              title={title}
              date={moment(eventDate).format('DD MM YYYY')}
              btnLink={btnLink}
              btnText={btnText} />
          </div>
        ))}
      </Slider>
    );
  }
}

export default CarouselSlider;