import React from 'react'
import { Component, Components, Utils } from 'react-dom-chunky'
import * as StyledComponents from './StyledComponents'
import VerticalCard from './VerticalCard'

export default class ValueSection extends Component {
  constructor(props) {
    super(props)
    this.state = { ...super.state, startAnimation: false }
    this.handleScrollToElement = this.handleScrollToElement.bind(this)
  }

  componentDidMount() {
    super.componentDidMount()
    window.addEventListener('scroll', this.handleScrollToElement, true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollToElement, true)
  }

  goTo(link) {
    this.props.history.push(link)
  }

  handleScrollToElement() {
    if (
      Utils.isAnyPartOfElementInViewport(this.wrapperRef) &&
      !this.state.startAnimation
    ) {
      this.setState({ startAnimation: true })
      window.removeEventListener('scroll', this.handleScrollToElement, true)
    }
  }

  renderComponent() {
    const {
      values,
      title,
      theme,
      imgPath,
      imgTitle,
      additionalInfo,
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

    const translatedImg =
      translation && strings && selectedLanguage && imgPath
        ? imgPath.replace('/assets/', `/assets/${selectedLanguage}/`)
        : imgPath
    const translatedAdditionalInfo =
      translation && strings && selectedLanguage
        ? strings[selectedLanguage]['pillars'][`additionalInfo`]
        : additionalInfo
    return (
      <StyledComponents.ValuesSection ref={ref => (this.wrapperRef = ref)}>
        <Components.AnimatedSection
          animationType={'opacity'}
          startAnimation={this.state.startAnimation}
        >
          <h3
            className="section-header text-align-center"
            style={{
              paddingBottom: 50,
              fontSize: '26px',
              lineHeight: '36px',
              margin: '0 50px'
            }}
          >
            {translatedAdditionalInfo}
          </h3>
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
                    goTo={link => this.goTo(link)}
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
              <img
                style={{ width: '100%', height: '100%' }}
                src={translatedImg}
              />
            </div>
          )}
        </Components.AnimatedSection>
      </StyledComponents.ValuesSection>
    )
  }
}

// export default ValueSection
