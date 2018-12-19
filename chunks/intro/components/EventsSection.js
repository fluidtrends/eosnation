import React from 'react'
import { Component, Components, Utils } from 'react-dom-chunky'
import Calendar from './Calendar'
import { ValuesSection } from './StyledComponents'

class EventsSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...super.state,
      startHeaderAnimation: false,
      startCalendarAnimation: false
    }
  }
  componentDidMount() {
    super.componentDidMount()
    window.addEventListener('scroll', this.handleScrollToElement, true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollToElement, true)
  }
  handleScrollToElement = () => {
    if (
      Utils.isAnyPartOfElementInViewport(this.wrapperRef) &&
      !this.state.startHeaderAnimation &&
      !this.state.startCalendarAnimation
    ) {
      this.setState({
        startHeaderAnimation: true,
        startCalendarAnimation: true
      })
      window.removeEventListener('scroll', this.handleScrollToElement, true)
    }
  }
  renderComponent() {
    const {
      title,
      calendarEvents,
      action,
      subtitle,
      translation,
      strings,
      selectedLanguage,
      btnText
    } = this.props
    const translatedTitle =
      translation && strings && selectedLanguage
        ? strings[selectedLanguage]['events'][`title`]
        : title
    const translatedSubtitle =
      translation && strings && selectedLanguage
        ? strings[selectedLanguage]['events'][`subtitle`]
        : subtitle
    const translatedBtnText =
      translation && strings && selectedLanguage
        ? strings[selectedLanguage]['events'][`btnText`]
        : btnText
    const events = calendarEvents.map(
      ({ date, name, ...remainingProps }, index) => ({
        date: new Date(date),
        name:
          translation && strings && selectedLanguage
            ? strings[selectedLanguage]['events']['calendarEvents'][
                `name${index}`
              ] || name
            : name,
        ...remainingProps
      })
    )

    return (
      <ValuesSection ref={ref => (this.wrapperRef = ref)}>
        <Components.AnimatedSection
          animationType={'opacity'}
          startAnimation={this.state.startHeaderAnimation}
        >
          <h2 className="section-header text-align-center margin-bottom-large">
            {translatedTitle}
          </h2>
          <h3 className="text-align-center  margin-bottom-large">
            <a
              href={action}
              target="_blank"
              className="paragraph text-align-center"
            >
              {translatedSubtitle}
            </a>
          </h3>
        </Components.AnimatedSection>
        <Components.AnimatedSection
          animationType={'slideFromLeft'}
          startAnimation={this.state.startCalendarAnimation}
        >
          <Calendar
            {...this.props}
            calendarEvents={events}
            btnText={translatedBtnText}
          />
        </Components.AnimatedSection>
      </ValuesSection>
    )
  }
}

export default EventsSection
