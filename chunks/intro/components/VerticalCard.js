import React from 'react'
import Truncate from 'react-truncate'
import { Button, CardImageWrapper } from './StyledComponents'
import HeadShake from 'react-reveal/HeadShake'

const DEFAULT_MAX_DESCRIPTION_LINES = 5

class VerticalCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hover: false }
  }
  render() {
    const {
      image,
      title,
      description,
      btnText,
      maxDescriptionLines
    } = this.props

    return (
      <div
        className="card-container"
        onMouseEnter={() => this.setState({ hover: !this.state.hover })}
        onClick={this.onClick.bind(this)}
      >
        <HeadShake spy={this.state.hover}>
          <CardImageWrapper
            className="align-center"
            backgroundColor={this.props.theme.primaryColor}
          >
            {typeof image === 'string' ? <img src={image} /> : image()}
          </CardImageWrapper>
          <div className="margin-top-large sub-header">{title}</div>
          <div className="paragraph card-description margin-top-medium">
            <Truncate
              lines={maxDescriptionLines || DEFAULT_MAX_DESCRIPTION_LINES}
              ellipsis={<span>...</span>}
            >
              {description}
            </Truncate>
          </div>
          <div
            className="btn-link align-center margin-top-medium width-1-1 text-uppercase"
            style={{ textAlign: 'center' }}
          >
            <Button
              onClick={this.onClick.bind(this)}
              component={<span style={{ cursor: 'pointer' }} />}
              backgroundColor={this.props.theme.secondaryColor}
            >
              {btnText}
            </Button>
          </div>
        </HeadShake>
      </div>
    )
  }

  onClick() {
    const { btnLink, btnScroll } = this.props

    if (btnLink) {
      const target = btnLink.includes('https://') ? '_blank' : ''
      window.open(btnLink, target)
    }

    if (btnScroll) {
      document.getElementById(btnScroll).scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}

export default VerticalCard
