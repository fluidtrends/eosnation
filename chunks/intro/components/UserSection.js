import React from 'react'
import { Component } from 'react-dom-chunky'
import UserCard from './UserCard'
import '../../../assets/style.css';
import { Heading4, ValuesSection } from './StyledComponents';

class UserSection extends Component {
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
    const { users, title } = this.props

    return (
      <div className="team-section">
        <ValuesSection>
          <Heading4 center className="section-header margin-bottom-large">
            {title}
          </Heading4>
          <div className="user-card-wrapper align-center">
            {
              users.map(({ link, imageURL, name, role}) => (
              <UserCard link={link} imageURL={imageURL} name={name} role={role} />))
            }
          </div>
        </ValuesSection>
      </div>
    );
  }
}

export default UserSection
