import React from 'react'
import { Components, Utils } from 'react-dom-chunky'
import { Col, Row } from 'antd'
import { Body3, CarouselContainerWrapper, Heading3 } from './StyledComponents'
import CarouselSlider from './CarouselSlider'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = { startAnimation: false }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollToElement, true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollToElement, true)
  }
  handleScrollToElement = () => {
    if (
      Utils.isAnyPartOfElementInViewport(this.wrapperRef) &&
      !this.state.startAnimation
    ) {
      this.setState({ startAnimation: true })
      window.removeEventListener('scroll', this.handleScrollToElement, true)
    }
  }
  render() {
    const {
      carousel,
      theme,
      translation,
      strings,
      selectedLanguage
    } = this.props

    return (
      <CarouselContainerWrapper
        backgroundColor={theme.primaryColor}
        carouselColor1={theme.thirdColor}
        carouselColor2={theme.grayColorLight}
        carouselColor3={theme.secondaryColor}
        ref={ref => (this.wrapperRef = ref)}
      >
        {carousel.map(
          (
            {
              title,
              description,
              btnText,
              btnLink,
              scrollId,
              cards,
              backgroundColor,
              btnColor,
              id,
              socialStats,
              hideButton
            },
            index
          ) => {
            let translatedTitle =
              translation &&
              strings &&
              selectedLanguage &&
              strings[selectedLanguage]['carousel']
                ? strings[selectedLanguage]['carousel'][`title${index}`]
                : title

            let translatedDescription =
              translation &&
              strings &&
              selectedLanguage &&
              strings[selectedLanguage]['carousel']
                ? strings[selectedLanguage]['carousel'][`description${index}`]
                : description
            let translatedBtnText =
              translation &&
              strings &&
              selectedLanguage &&
              strings[selectedLanguage]['carousel']
                ? strings[selectedLanguage]['carousel'][`btnText${index}`]
                : btnText
            const animationType =
              index % 2 === 0 ? 'slideFromLeft' : 'slideFromRight'
            return (
              <div
                className="carousel-container"
                id={scrollId || ''}
                style={{ backgroundColor }}
              >
                <Components.AnimatedSection
                  animationType={
                    window.innerWidth > 1224 ? animationType : 'slideFromLeft'
                  }
                  startAnimation={this.state.startAnimation}
                >
                  <Row>
                    <Col lg={6} md={20} style={{ paddingTop: '20px' }}>
                      <Heading3
                        style={{ fontWeight: 'bold', marginBottom: '40px' }}
                      >
                        {translatedTitle}
                      </Heading3>
                      <Body3>{translatedDescription}</Body3>
                      {socialStats &&
                        socialStats.map(stat => (
                          <a href={stat.link} target={'_blank'}>
                            <Body3>{stat.name}</Body3>
                          </a>
                        ))}
                      {hideButton ? null : (
                        <a
                          className="btn btn-primary btn-link flex-center margin-top-medium margin-bottom-large
              width-1-1 text-uppercase"
                          href={btnLink}
                          target={btnLink.includes('https://') ? '_blank' : ''}
                          style={{
                            background: btnColor || theme.secondaryColor
                          }}
                        >
                          {translatedBtnText}
                        </a>
                      )}
                    </Col>
                    <Col md={0} lg={1} />
                    <Col md={24} sm={24} lg={17}>
                      <CarouselSlider
                        id={id}
                        cards={cards}
                        theme={theme}
                        carouselNumber={index + 1}
                        translation={translation}
                        strings={strings}
                        selectedLanguage={selectedLanguage}
                      />
                    </Col>
                  </Row>
                </Components.AnimatedSection>
              </div>
            )
          }
        )}
      </CarouselContainerWrapper>
    )
  }
}

export default Carousel
