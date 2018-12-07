import React from 'react'
import { Row, Col } from 'antd'
import News from './News'
import FeaturedNews from './FeaturedNews'
import { BlogTitle, Line } from './StyledComponents'

class Blog extends React.PureComponent {
  render() {
    const {
      news,
      featured,
      mediumProfile,
      translation,
      strings,
      selectedLanguage,
      newsTitle,
      featuredTitle
    } = this.props
    const translatedNewsTitle =
      translation && strings && selectedLanguage
        ? strings[selectedLanguage][`newsTitle`]
        : newsTitle
    const translatedFeaturedTitle =
      translation && strings && selectedLanguage
        ? strings[selectedLanguage][`featuredTitle`]
        : featuredTitle
    return (
      <Row
        style={{
          paddingLeft: '40px',
          paddingRight: '40px',
          paddingTop: '10px'
        }}
      >
        <Col xl={{ span: 17 }} xs={{ span: 24 }}>
          <BlogTitle>{translatedNewsTitle}</BlogTitle>
          <Line />
          <News mediumProfile={mediumProfile} news={news} />
        </Col>
        <Col xl={{ span: 6, offset: 1 }} xs={{ span: 24 }}>
          <BlogTitle>{translatedFeaturedTitle}</BlogTitle>
          <Line />
          <FeaturedNews news={featured} />
        </Col>
      </Row>
    )
  }
}

export default Blog
