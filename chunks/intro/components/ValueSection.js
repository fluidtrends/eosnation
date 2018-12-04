import React from 'react'
import { Component } from 'react-dom-chunky'
import * as StyledComponents from './StyledComponents'
import VerticalCard from './VerticalCard'

class ValueSection extends Component {
  constructor(props) {
    super(props)
    this._done = this.done.bind(this)
    this.state = { ...super.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  done() {}

  renderComponent() {
    const { values, title, theme, imgPath, imgTitle } = this.props
    return (
      <StyledComponents.ValuesSection>
        <h2 className="section-header text-align-center" style={{paddingBottom: 50}}>{title}</h2>
        <div className="cards-wrapper">
          {values.map(({ iconName, ...remainingProps }) => (
            <VerticalCard
              image={() => {
                return <i className={`fas fa-${iconName} card-image-icon`} />
              }}
              theme={theme}
              {...remainingProps}
            />
          ))}
        </div>
        {imgPath && imgTitle && (
          <div>
            <h2 className="section-header text-align-center">{imgTitle}</h2>
            <img style={{ width: '100%', height: '100%' }} src={imgPath} />
          </div>
        )}
      </StyledComponents.ValuesSection>
    )
  }
}

export default ValueSection
