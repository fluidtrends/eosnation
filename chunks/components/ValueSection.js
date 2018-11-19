import React from 'react'
import { Component } from 'react-dom-chunky'
import VerticalCard from './VerticalCard'

class ValueSection extends Component {
  constructor(props) {
    super(props)
    this._done = this.done.bind(this)
    this.state = { ...super.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  done() {
  }

  renderComponent() {
    const { values, title } = this.props;
    return (
      <div style={{ padding: '40px 0' }}>
        <h2 className="section-header text-align-center">{title}</h2>
        <div className="cards-wrapper">
          {values.map(({ iconName, ...remainingProps }) => (
            <VerticalCard
              image={() => {
                return <i className={`fas fa-${iconName} card-image-icon`} />;
                // return <i className="material-icons card-image-icon">{iconName}</i>;
              }}
              {...remainingProps}
            />))}
        </div>
      </div>
    );
  }
}

export default ValueSection
