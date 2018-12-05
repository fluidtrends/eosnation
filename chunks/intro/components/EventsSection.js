import React from 'react'
import { Component } from 'react-dom-chunky'
import Calendar from './Calendar';
import { ValuesSection } from "./StyledComponents";

class EventsSection extends Component {
  renderComponent() {
    const { title, calendarEvents, action, subtitle } = this.props;
    const events = calendarEvents.map(({ date, ...remainingProps }) =>
      ({ date: new Date(date), ...remainingProps }));
    return (
      <ValuesSection>
        <h2 className="section-header text-align-center margin-bottom-large">
          {title}
        </h2>
        <h3 className="text-align-center  margin-bottom-large">
          <a href={action} target="_blank" className="paragraph text-align-center">
            {subtitle}
          </a>
        </h3>
        <Calendar {...this.props} calendarEvents={events}/>
      </ValuesSection>
    );
  }
}

export default EventsSection