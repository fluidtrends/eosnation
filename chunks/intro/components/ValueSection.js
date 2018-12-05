import React from 'react'
import { Component } from 'react-dom-chunky'
import * as StyledComponents from './StyledComponents'
import VerticalCard from './VerticalCard'
import { Data } from 'react-chunky'

class ValueSection extends Component {
  constructor(props) {
    super(props)
    this._done = this.done.bind(this)
    this.state = { ...super.state, selectedLanguage: null, strings: null }
  }

  componentDidMount() {
    super.componentDidMount()
    Data.Cache.retrieveCachedItem('selectedLanguage')
      .then(selectedLanguage => {
        this.setState({ selectedLanguage })
      })
      .catch(() => {
        return
      })
    fetch(this.props.theme.translatedStrings)
      .then(response => response.json())
      .then(translatedTexts => {
        this.setState({ strings: translatedTexts['welcome'] })
      })
      .catch(() => '')
  }

  done() {}

  renderComponent() {
    const { values, title, theme, imgPath, imgTitle, translation } = this.props
    const mainTranslatedTitle =
      translation && this.state.strings && this.state.selectedLanguage
        ? this.state.strings[this.state.selectedLanguage]['pillars'][`title`]
        : title
    return (
      <StyledComponents.ValuesSection>
        <h2
          className="section-header text-align-center"
          style={{ paddingBottom: 50 }}
        >
          {mainTranslatedTitle}
        </h2>
        <div className="cards-wrapper">
          {values.map(({ iconName, title, ...remainingProps }, index) => {
            let translatedTitle =
              translation && this.state.strings && this.state.selectedLanguage
                ? this.state.strings[this.state.selectedLanguage]['pillars'][
                    `title${index}`
                  ]
                : title
            return (
              <VerticalCard
                image={() => {
                  return <i className={`fas fa-${iconName} card-image-icon`} />
                }}
                theme={theme}
                title={translatedTitle}
                {...remainingProps}
              />
            )
          })}
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
