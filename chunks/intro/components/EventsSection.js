import React from 'react'
import { Component } from 'react-dom-chunky'
import Calendar from './Calendar';
import { ValuesSection } from "./StyledComponents";

class EventsSection extends Component {
  renderComponent() {
    const { title, calendarEvents } = this.props;
    const events = calendarEvents.map(({ date, ...remainingProps }) =>
      ({ date: new Date(date), ...remainingProps }));
    return (
      <ValuesSection>
        <h2 className="section-header text-align-center margin-bottom-large">
          {title}
        </h2>
        <Calendar events={events} />
      </ValuesSection>
    );
  }
}

export default EventsSection