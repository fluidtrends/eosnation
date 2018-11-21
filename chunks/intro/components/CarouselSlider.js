import React, { Component } from "react";
import Slider from "react-slick";

import CarouselCard from "./CarouselCard";
import moment from 'moment';

let image = 'https://storage.googleapis.com/multiply-react/public/images/carousel-card-img.png';
let title = 'EOS Meetup';
let eventDate = new Date().now;
let btnLink = 'https://github.com/grigio/eosfilestore-web';
let btnText = 'Learn more';

class CarouselSlider extends Component {
  render() {
    const settings = {
      dots: true,
      // infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings} className="carousel-slider">
          <div>
            <CarouselCard
                    image={image}
                    title={title}
                    date={moment(eventDate).format('DD MM YYYY')}
                    btnLink={btnLink}
                    btnText={btnText}/>
          </div>
          <div>
           <CarouselCard
                    image={image}
                    title="EOS Webinar"
                    date={moment(new Date("2018-11-15")).format('DD MM YYYY')}
                    btnLink={btnLink}
                    btnText={btnText}/>
          </div>
          <div>
          <CarouselCard
                    image={image}
                    title="EOS Jumpstart"
                    date={moment(new Date("2018-11-18")).format('DD MM YYYY')}
                    btnLink={btnLink}
                    btnText={btnText}/>
          </div>
          <div>
          <CarouselCard
                    image={image}
                    title="EOS Nation"
                    date={moment(new Date("2018-11-25")).format('DD MM YYYY')}
                    btnLink={btnLink}
                    btnText={btnText}/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default CarouselSlider;