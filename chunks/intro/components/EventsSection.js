import React from 'react'
import { Component } from 'react-dom-chunky'
import Calendar from './Calendar'
import { ValuesSection } from './StyledComponents'

class EventsSection extends Component {
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
              ]
            : name,
        ...remainingProps
      })
    )

    return (
      <ValuesSection>
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
        <Calendar
          {...this.props}
          calendarEvents={events}
          btnText={translatedBtnText}
        />
      </ValuesSection>
    )
  }
}

export default EventsSection
