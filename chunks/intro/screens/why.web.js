import React from 'react'
import { Screen } from 'react-dom-chunky'
import * as CustomComponents from '../components'
import { Data } from 'react-chunky'

export default class WhySection extends Screen {
  constructor(props) {
    super(props)
    this.state = { ...this.state, selectedLanguage: null, strings: null }
  }

  componentDidMount() {
    super.componentDidMount()
    Data.Cache.retrieveCachedItem('selectedLanguage')
      .then(selectedLanguage => {
        this.setState({ selectedLanguage })
      })
      .catch(() => {
        return
      })
    fetch(this.props.theme.translatedStrings)
      .then(response => response.json())
      .then(translatedTexts => {
        this.setState({ strings: translatedTexts['why'] })
      })
      .catch(() => '')
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
