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
    const {
      values,
      title,
      theme,
      imgPath,
      imgTitle,
      translation,
      strings,
      selectedLanguage
    } = this.props
    const mainTranslatedTitle =
      translation && strings && selectedLanguage
        ? strings[selectedLanguage]['pillars'][`title`]
        : title
    const translatedImgTitle =
      translation && strings && selectedLanguage && imgTitle && imgPath
        ? strings[selectedLanguage]['pillars'][`imgTitle`]
        : imgTitle

    return (
      <StyledComponents.ValuesSection>
        <h2
          className="section-header text-align-center"
          style={{ paddingBottom: 50 }}
        >
          {mainTranslatedTitle}
        </h2>
        <div className="cards-wrapper">
          {values.map(
            (
              { iconName, title, description, btnText, ...remainingProps },
              index
            ) => {
              let translatedTitle =
                  translation && strings && selectedLanguage
                    ? strings[selectedLanguage]['pillars'][`title${index}`]
                    : title,
                translatedDescription =
                  translation && strings && selectedLanguage
                    ? strings[selectedLanguage]['pillars'][
                        `description${index}`
                      ]
                    : description,
                translatedBtnText =
                  translation && strings && selectedLanguage
                    ? strings[selectedLanguage]['pillars'][`btnText${index}`]
                    : btnText
              return (
                <VerticalCard
                  image={() => {
                    return (
                      <i className={`fas fa-${iconName} card-image-icon`} />
                    )
                  }}
                  theme={theme}
                  title={translatedTitle}
                  description={translatedDescription}
                  btnText={translatedBtnText}
                  {...remainingProps}
                />
              )
            }
          )}
        </div>
        {imgPath && imgTitle && (
          <div>
            <h2 className="section-header text-align-center">
              {translatedImgTitle}
            </h2>
            <img style={{ width: '100%', height: '100%' }} src={imgPath} />
          </div>
        )}
      </StyledComponents.ValuesSection>
    )
  }
}

export default ValueSection
