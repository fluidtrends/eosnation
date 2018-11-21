import React from 'react';
import { Row, Col } from 'antd'

class News extends React.PureComponent {

	renderNewsCard(story) {
		return <p>{story.text}</p>
	}

  render() {
    const { news } = this.props;
    return (
      <div>
				{ news.map(story => 
					this.renderNewsCard(story)
				)}
			</div>
    )
  }
}

export default News;
