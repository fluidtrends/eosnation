import React from 'react';
import CarouselSlider from './CarouselSlider';

class Carousel extends React.Component {
    render (){
        const {carouselTitle, carouselDescription, carouselBtnText, carouselBtnLink} = this.props;
        return (
            <div className='carousel-container flex-row'>
                <div className ='carousel-info flex-col'>
                    <p className='carousel-title sub-header text-white align-center'>{carouselTitle}</p>
                    <p className='carousel-description text-white section-text align-center'>{carouselDescription}</p>
                    <a className="btn btn-primary btn-link flex-center margin-top-medium width-1-1 text-uppercase" href={carouselBtnLink}>{carouselBtnText}</a>
                    </div>
                <div className='carousel-cards flex-center flex-1'>
                    <CarouselSlider/>
                </div>
            </div>
        )
    }
}

export default Carousel;