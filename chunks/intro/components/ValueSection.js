import React from 'react'
import { Component } from 'react-dom-chunky'
import * as StyledComponents from './StyledComponents'
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
      <StyledComponents.ValuesSection>
        <h2 className="section-header text-align-center">{title}</h2>
        <div className="cards-wrapper">
          {values.map(({ iconName, ...remainingProps }) => (
            <VerticalCard
              image={() => {
                return <i className={`fas fa-${iconName} card-image-icon`} />;
              }}
              {...remainingProps}
            />))}
        </div>
      </StyledComponents.ValuesSection>
    );
  }
}

export default ValueSection
