import React from 'react'
import { Component } from 'react-dom-chunky'
import UserCard from './UserCard'
import '../../../assets/style.css';
import { Heading4 } from './StyledComponents';

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

    return <div className="storybook-container team-section">
      <Heading4 center className="section-header padding-top-large margin-bottom-large">
        Meet the Team
      </Heading4>
      <div className="user-card-wrapper align-center">
        {users.map((user) => (
            <UserCard
              link={user.link} imageURL={user.userURL} name={user.name} role={user.role} 
            />))}
      </div>
    </div>
  }
}

export default UserSection
