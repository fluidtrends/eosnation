import React from 'react'
import { Screen, Components } from 'react-dom-chunky'
import * as CustomComponents from '../components'

export default class WhySection extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  loadCustomComponent(props) {
    return props => {
      const CustomComponent = CustomComponents[props.source]
      return <CustomComponent {...props} />
    }
  }

  components() {
    return super.components().concat([])
  }
}
