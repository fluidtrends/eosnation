import React from 'react'
import { Row, Col } from 'antd'
import { FeaturedRank, FeaturedTitle, PostDate } from './StyledComponents'

class FeaturedNews extends React.PureComponent {
  renderNewsCard(post) {
    const { title, rank, date } = post
    return (
      <Row
        style={{
          boxShadow: '0 5px 20px 0 rgba(0,0,0,.15)',
          padding: '15px',
          marginTop: '15px',
          marginBottom: '15px'
        }}
      >
        <Col span={4}>
          <FeaturedRank>{rank}</FeaturedRank>
        </Col>
        <Col span={19} offset={1} style={{ height: '150px' }}>
          <FeaturedTitle>{title}</FeaturedTitle>
          <PostDate>{date}</PostDate>
        </Col>
      </Row>
    )
  }

  render() {
    const { news } = this.props
    return (
      <div style={{ marginTop: '20px' }}>
        {news.map(post => this.renderNewsCard(post))}
      </div>
    )
  }
}

export default FeaturedNews
