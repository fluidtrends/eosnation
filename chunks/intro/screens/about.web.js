import React from 'react'
import { Screen, Components } from 'react-dom-chunky'

export default class MainTeamScreen extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  get cover() {
    return Object.assign({}, this.props.cover)
  }

  renderContent() {
    return	<div>aaa</div>
  }

  components() {
    return super.components().concat(this.renderContent())
  }
}
