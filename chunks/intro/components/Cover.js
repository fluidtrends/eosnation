import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { Button } from 'rmwc/Button'
import { Typography } from '@rmwc/typography'
import { Cover, CoverContent, SocialLinks } from './StyledComponents'

import 'antd/dist/antd.css'

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
    this.triggerEvent('', `local://${link}`)
  }

  main() {
    return (
      <React.Fragment>
        <CoverContent>
          {this.title()}
          {!this.props.hideSubtitle && this.subtitle()}
          {this.icons()}
        </CoverContent>
        <Cover backgroundImgURL={this.props.backgroundImgURL} />
      </React.Fragment>
    )
  }

  title() {
    const {title} = this.props;
    return (
      <div style={{ maxWidth: '652px' }}>
        <Typography use="headline4" className="title">
          {title}
        </Typography>
      </div>
    )
  }

  subtitle() {
    return (
      <div style={{ marginTop: '30px' }}>
        <Button
          raised
          onClick = { () => this.goTo('about') }
          style={{
            background: '#D66C44',
            cursor: 'pointer',
            height: 60,
            width: 196,
            marginRight: 20,
            marginTop: '20px'
          }}
        >
          Learn More
        </Button>
        <Button
          raised
          onClick = { () => this.goTo('vote') }
          style={{
            background: '#2c4858',
            cursor: 'pointer',
            height: 60,
            width: 196,
            marginTop: '20px'
          }}
        >
          Vote
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
