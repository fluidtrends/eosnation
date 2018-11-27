import React from 'react'
import { Component } from 'react-dom-chunky'
import { LinearProgress } from '@rmwc/linear-progress'
import { Typography } from '@rmwc/typography'
import { ListDivider } from '@rmwc/list'
import { TwitterSectionContainer } from './StyledComponents';
import * as StyledComponents from "./StyledComponents";

class TwitterSection extends Component {
  constructor(props) {
    super(props)
    this.state = { ...super.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  renderComponent() {
    const { title } = this.props;
    return (
      <TwitterSectionContainer>
        <h2 className="section-header text-align-center">{title}</h2>
        <link href="https://assets.juicer.io/embed.css" media="all" rel="stylesheet" type="text/css" />
        <ul className="juicer-feed" data-feed-id="eos_nation"
            data-gutter="50" data-per="6"
        ></ul>
      </TwitterSectionContainer>
    )
  }
}

export default TwitterSection
