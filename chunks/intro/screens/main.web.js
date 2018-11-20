import React from 'react'
import { Screen } from 'react-dom-chunky'
import * as CustomComponents from "../components";

export default class MainIntroScreen extends Screen {

  constructor(props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  get features() {
    return ([])
  }

  loadCustomComponent(props) {
    return (props) => {
      const CustomComponent = CustomComponents[props.source];
      return (<CustomComponent {...props} />);
    }
  }

  components() {
    return super.components()
      .concat(this.features)
  }
}
