import React from 'react'
import { Component } from 'react-dom-chunky'
import TwitterCard from './TwitterCard'
import { Heading4 } from './StyledComponents';

class TwitterSection extends Component {
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
    const { users, title, textColor  } = this.props

    return <div>
      <Heading4 center className="section-header padding-top-large margin-bottom-large" style={{color: textColor}}>
        {title}
      </Heading4>
      <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center'}}>
        {users.map((user) => (
              <TwitterCard
                link={user.link} userURL={user.userURL} name={user.name} time={user.time} date={user.date}
                author={user.author} kudos={user.kudos} description={user.description}
              />
            )
          )
        }
        </div>
      </div>
  }
}

export default TwitterSection
