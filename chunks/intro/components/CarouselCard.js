import React from 'react'

class CarouselCard extends React.Component {
  render() {
    const { image, title, date, btnLink, btnText } = this.props

    return (
      <div className="carousel-card-container">
        <div className="carousel-card-img">
          <img src={image} />
        </div>
        <div className="carousel-card-info flex-col-space-between">
          <div className="paragraph">{title}</div>
          <div className="flex-row-space-between">
            <p className="section-text">{date}</p>
            <p className="section-text">
              <a href={btnLink}>{btnText}</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CarouselCard
