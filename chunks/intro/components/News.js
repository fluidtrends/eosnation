import React from 'react'
import { Row, Col } from 'antd'
import { PostTitle, PostSummary, PostImg, PostDate } from './StyledComponents'
import Truncate from 'react-truncate'

const DEFAULT_MAX_DESCRIPTION_LINES = 4

class News extends React.PureComponent {
  renderNewsCard(post) {
    const { title, summary, image, date, postUrl } = post
    const imageURL =
      image && image.includes('local://')
        ? `../../assets/${image.replace('local://', '')}`
        : image

    return (
      <Row
        onClick={() => {
          postUrl && window.open(postUrl, '_blank')
        }}
        style={{
          boxShadow: '0 5px 20px 0 rgba(0,0,0,.15)',
          padding: '15px',
          marginTop: '15px',
          marginBottom: '15px',
          maxHeight: '250px',
          cursor: 'pointer'
        }}
      >
        <Col xl={{ span: 17 }} xs={{ span: 16 }} style={{ height: '200px' }}>
          <PostTitle>{title}</PostTitle>
          {window.innerWidth > 576 && (
            <PostSummary>
              <Truncate
                lines={DEFAULT_MAX_DESCRIPTION_LINES}
                ellipsis={<span>...</span>}
              >
                {summary}
              </Truncate>
            </PostSummary>
          )}
          {date && <PostDate>{date}</PostDate>}
        </Col>
        {window.innerWidth > 576 && (
          <Col xl={{ span: 6, offset: 1 }} xs={{ span: 6, offset: 2 }}>
            <PostImg src={imageURL} />
          </Col>
        )}
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

export default News
