import React from 'react'
import { Component } from 'react-dom-chunky'
import TwitterCard from './TwitterCard'
import { LinearProgress } from '@rmwc/linear-progress'
import { Typography } from '@rmwc/typography'
import { ListDivider } from '@rmwc/list'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

class TwitterSection extends Component {
  constructor(props) {
    super(props)
    this.state = { ...super.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  renderComponent() {
    const { width, isSmallScreen } = this.props
    console.log(this.props)

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          margin: '20px',
          justifyContent: 'center'
        }}
      >
        <TwitterTimelineEmbed
          sourceType={'timeline'}
          userId={'969360576584577024'}
          theme={'dark'}
          options={{ height: isSmallScreen ? 600 : 1000, width: width / 2 }}
        />
      </div>
    )
  }
}

export default TwitterSection
