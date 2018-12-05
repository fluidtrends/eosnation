import React from 'react'
import { Row, Col } from 'antd'
import {
  PostTitle,
  PostSummary,
  PostImg,
  PostDate,
  SpinnerWrapper
} from './StyledComponents'
import Truncate from 'react-truncate'
import { Spin } from 'antd'

const DEFAULT_MAX_DESCRIPTION_LINES = 4

class News extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      importedNews: [],
      loadingMediumPosts: true,
      mediumImportError: false
    }
  }
  componentDidMount() {
    const importedNews = []
    fetch('https://exec.clay.run/nicoslepicos/medium-get-user-posts-new/', {
      method: 'POST',
      body: JSON.stringify({
        profile: this.props.mediumProfile
      })
    })
      .then(response => response.json())
      .then(data => {
        for (var key in data.posts) {
          // skip loop if the property is from prototype
          if (!data.posts.hasOwnProperty(key)) continue

          let post = data.posts[key]
          let newsObject = {}
          let dateObj = new Date(post.createdAt)
          let dateString = `${dateObj
            .toLocaleString(dateObj, {
              month: 'short'
            })
            .toUpperCase()} ${dateObj.getUTCDate()} ${dateObj.getFullYear()}`
          newsObject.title = post.title
          newsObject.summary = post.content.subtitle
          newsObject.date = dateString
          newsObject.image = `https://cdn-images-1.medium.com/max/1600/${
            post.virtuals.previewImage.imageId
          }`
          newsObject.postUrl = `https://medium.com/${
            this.props.mediumProfile
          }/${post.uniqueSlug}`
          importedNews.push(newsObject)
        }
        this.setState({ importedNews, loadingMediumPosts: false })
      })
      .catch(() => {
        this.setState({ mediumImportError: true, loadingMediumPosts: false })
      })
  }

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
        {this.state.loadingMediumPosts ? (
          <SpinnerWrapper>
            <Spin
              size={'large'}
              style={{ margin: '0 auto' }}
              tip="Fetching medium posts..."
            />
          </SpinnerWrapper>
        ) : this.state.mediumImportError ? (
          <SpinnerWrapper>
            <p style={{ margin: '0 auto', color: '#e53935' }}>
              There was an error fetching Medium posts
            </p>
          </SpinnerWrapper>
        ) : (
          this.state.importedNews.map(post => this.renderNewsCard(post))
        )}
        {news.map(post => this.renderNewsCard(post))}
      </div>
    )
  }
}

export default News
