import React from 'react'
import { Col, Row } from 'antd'
import { Body3, CarouselContainerWrapper, Heading3 } from './StyledComponents'
import CarouselSlider from './CarouselSlider'

class Carousel extends React.Component {
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
              btnColor
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
            return (
              <div
                className="carousel-container"
                id={scrollId || ''}
                style={{ backgroundColor }}
              >
                <Row>
                  <Col lg={6} md={20} style={{ paddingTop: '20px' }}>
                    <Heading3
                      style={{ fontWeight: 'bold', marginBottom: '40px' }}
                    >
                      {translatedTitle}
                    </Heading3>
                    <Body3>{translatedDescription}</Body3>
                    <a
                      className="btn btn-primary btn-link flex-center margin-top-medium margin-bottom-large
                width-1-1 text-uppercase"
                      href={btnLink}
                      target={btnLink.includes('https://') ? '_blank' : ''}
                      style={{ background: btnColor || theme.secondaryColor }}
                    >
                      {translatedBtnText}
                    </a>
                  </Col>
                  <Col md={0} lg={1} />
                  <Col md={24} sm={24} lg={17}>
                    <CarouselSlider
                      cards={cards}
                      theme={theme}
                      carouselNumber={index + 1}
                    />
                  </Col>
                </Row>
              </div>
            )
          }
        )}
      </CarouselContainerWrapper>
    )
  }
}

export default Carousel
