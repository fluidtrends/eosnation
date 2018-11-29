import React from 'react'
import Truncate from 'react-truncate'

const DEFAULT_MAX_DESCRIPTION_LINES = 5

class VerticalCard extends React.Component {
  render() {
    const {
      image,
      title,
      description,
      btnText,
      btnLink,
      maxDescriptionLines
    } = this.props

    return (
      <div className="card-container">
        <div className="card-image-wrapper align-center">
          {typeof image === 'string' ? <img src={image} /> : image()}
        </div>
        <div className="margin-top-large sub-header">{title}</div>
        <div className="paragraph card-description margin-top-medium">
          <Truncate
            lines={maxDescriptionLines || DEFAULT_MAX_DESCRIPTION_LINES}
            ellipsis={<span>...</span>}
          >
            {description}
          </Truncate>
        </div>
        <a
          className="btn btn-primary btn-link align-center margin-top-medium width-1-1 text-uppercase"
          href={btnLink}
          target={this.props.btnLink.includes('https://') ? '_blank' : ''}
        >
          {btnText}
        </a>
      </div>
    )
  }
}

export default VerticalCard
