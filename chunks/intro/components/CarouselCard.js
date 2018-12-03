import React from 'react'
import Truncate from 'react-truncate'

const DEFAULT_MAX_DESCRIPTION_LINES = 2

class CarouselCard extends React.Component {
  render() {
    const { image, title, date, btnLink, btnText } = this.props
    const imageURL =
      image && image.includes('local://')
        ? `../../assets/${image.replace('local://', '')}`
        : image
    return (
      <div className="carousel-card-container">
        <div>
          <img src={imageURL} className="carousel-card-img" />
        </div>
        <div className="carousel-card-info flex-col-space-between">
          <div className="paragraph">
            <Truncate
              lines={DEFAULT_MAX_DESCRIPTION_LINES}
              ellipsis={<span>...</span>}
            >
              {title}
            </Truncate>
          </div>
          <div className="flex-row-space-between">
            {date && (
              <p className="section-text margin-bottom-remove text-align-left">
                {date}
              </p>
            )}
            <p
              className="section-text margin-bottom-remove text-align-left"
              style={{ textDecoration: 'underline' }}
            >
              <a
                href={btnLink}
                target={this.props.btnLink.includes('https://') ? '_blank' : ''}
              >
                {btnText}
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CarouselCard
