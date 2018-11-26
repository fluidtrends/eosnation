import React from 'react'

class CarouselCard extends React.Component {
  render() {
    const { image, title, date, btnLink, btnText } = this.props

    return (
      <div className="carousel-card-container">
        <div>
          <img src={image} className="carousel-card-img"/>
        </div>
        <div className="carousel-card-info flex-col-space-between">
          <div className="paragraph">{title}</div>
          <div className="flex-row-space-between">
            <p className="section-text margin-bottom-remove text-align-left">{date}</p>
            <p className="section-text margin-bottom-remove text-align-left" style={{ textDecoration: "underline" }}>
              <a href={btnLink}>{btnText}</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CarouselCard
