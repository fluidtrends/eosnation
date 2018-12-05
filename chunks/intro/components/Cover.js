import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Button } from 'rmwc/Button'
import { Typography } from '@rmwc/typography'
import {
  Cover,
  CoverContent,
  CoverTitle,
  SocialLinks
} from './StyledComponents'

export default class Intro extends Component {
  constructor(props) {
    super(props)

    this._onStart = this.onStart.bind(this)
  }

  onStart() {
    this.props.onStart()
  }

  componentDidMount() {
    super.componentDidMount()
  }

  goTo(link) {
    this.props.history.push(link)
  }

  main() {
    const {
      hideSubtitle,
      backgroundImgURL,
      overlayBackground,
      backgroundSize,
      backgroundPositionX,
      backgroundPositionY
    } = this.props
    return (
      <React.Fragment>
        <CoverContent>
          {this.title()}
          {!hideSubtitle && this.subtitle()}
          {this.icons()}
        </CoverContent>
        <Cover
          backgroundImgURL={backgroundImgURL}
          overlayBackground={overlayBackground}
          backgroundPositionX={backgroundPositionX}
          backgroundPositionY={backgroundPositionY}
          backgroundSize={backgroundSize}
        />
      </React.Fragment>
    )
  }

  title() {
    const {
      title,
      theme,
      titleColor,
      fontFamilyTitle,
      translation,
      strings,
      selectedLanguage
    } = this.props

    const translatedTitle =
      translation && strings && selectedLanguage
        ? strings[selectedLanguage]['cover'][`title`] || title
        : title

    return (
      <div style={{ maxWidth: '652px' }}>
        <CoverTitle
          component={<Typography use="headline4" />}
          color={titleColor || theme.primaryColor}
          fontFamily={fontFamilyTitle}
        >
          {translatedTitle}
        </CoverTitle>
      </div>
    )
  }

  subtitle() {
    const {
      theme,
      btnText1,
      btnText2,
      translation,
      strings,
      selectedLanguage
    } = this.props
    const translatedBtnText1 =
        translation && strings && selectedLanguage
          ? strings[selectedLanguage]['cover'][`btnText1`]
          : btnText1,
      translatedBtnText2 =
        translation && strings && selectedLanguage
          ? strings[selectedLanguage]['cover'][`btnText2`]
          : btnText2
    return (
      <div style={{ marginTop: '30px' }}>
        <Button
          raised
          onClick={() => this.goTo('/about')}
          style={{
            background: theme.secondaryColor,
            cursor: 'pointer',
            height: 60,
            width: 196,
            marginRight: 20,
            marginTop: '20px'
          }}
        >
          {translatedBtnText1}
        </Button>
        <Button
          raised
          onClick={() => this.goTo('/vote')}
          style={{
            background: theme.primaryColor,
            cursor: 'pointer',
            height: 60,
            width: 196,
            marginTop: '20px'
          }}
        >
          {translatedBtnText2}
        </Button>
      </div>
    )
  }

  icons() {
    const socialMediaLinks = this.props.footer.socialMediaLinks
    return (
      <div style={{ position: 'relative' }}>
        <SocialLinks>
          <Components.SocialIcons
            iconColor={'#ffffff'}
            vertical
            iconColorHover={'#2c4858'}
            size={24}
            isSmallScreen={this.props.isSmallScreen}
            socialMediaLinks={socialMediaLinks}
          />
        </SocialLinks>
      </div>
    )
  }

  render() {
    return [...this.main()]
  }
}
