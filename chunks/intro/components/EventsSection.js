import React from 'react'
import { Component } from 'react-dom-chunky'
import Calendar from './Calendar';

class EventsSection extends Component {
  renderComponent() {
    const { title, calendarEvents } = this.props;
    const events = calendarEvents.map(({ date, ...remainingProps }) => ({ date: new Date(date), ...remainingProps }));
    return (
      <div className="margin-top-large margin-bottom-large">
        <h2 className="section-header text-align-center margin-bottom-large">{title}</h2>
        <Calendar events={events} />
      </div>
    );
  }
}

export default EventsSection