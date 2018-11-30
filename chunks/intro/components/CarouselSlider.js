import React, { Component } from 'react'
import Slider from 'react-slick'
import { Arrow, CarouselSliderStyle } from './StyledComponents'
import CarouselCard from './CarouselCard'

class ArrowComponent extends React.PureComponent {
  render() {
    return (<Arrow {...this.props} backgroundColor={this.props.theme.primaryColor} />);
  }
}

class CarouselSlider extends Component {
  render() {
    const { cards, theme,carouselNumber } = this.props;
    const settings = {
      dots: false,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 2500 + 500 * carouselNumber,
      slidesToShow: 3,
      nextArrow: <ArrowComponent right theme={theme} />,
      prevArrow: <ArrowComponent left theme={theme} />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 630,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }
    return (
      <CarouselSliderStyle>
        <Slider {...settings}>
          {cards.map(({ image, title, btnLink, btnText, eventDate }, index) => (
            <div>
              <CarouselCard
                key={index}
                image={image}
                title={title}
                btnLink={btnLink}
                btnText={btnText}
                date={eventDate}
              />
            </div>
          ))}
        </Slider>
      </CarouselSliderStyle>
    )
  }
}

export default CarouselSlider
