import React from 'react';
import { Row, Col } from 'antd';
import { PostTitle, PostSummary, PostImg, PostDate } from './StyledComponents';

class News extends React.PureComponent {
  renderNewsCard(post) {
    const { title, summary, image, date } = post;
    const imageURL =
      image && image.includes('local://')
        ? `../../assets/${image.replace('local://', '')}`
        : image;

    return (
      <Row
        style={{
          boxShadow: '0 5px 20px 0 rgba(0,0,0,.15)',
          padding: '15px',
          marginTop: '15px',
          marginBottom: '15px',
          maxHeight: '250px'
        }}
      >
        <Col span={17} style={{ height: '200px' }}>
          <PostTitle>{title}</PostTitle>
          <PostSummary>{summary}</PostSummary>
          <PostDate>{date}</PostDate>
        </Col>
        <Col span={6} offset={1}>
          <PostImg src={imageURL} />
        </Col>
      </Row>
    );
  }

  render() {
    const { news } = this.props;
    return (
      <div style={{ marginTop: '20px' }}>
        {news.map(post => this.renderNewsCard(post))}
      </div>
    );
  }
}

export default News;
