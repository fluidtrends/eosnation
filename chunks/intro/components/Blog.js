import React from 'react';
import { Row, Col } from 'antd'

class Blog extends React.PureComponent {
  render() {
    const { name, link, imageURL, role } = this.props;
    return (
      <Row>
				<Col span={18} push={6}>Latest news</Col>
      	<Col span={6} pull={18}>Features</Col>
			</Row>
    )
  }
}

export default Blog;
