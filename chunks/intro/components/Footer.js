import React from 'react'
import { Component, Components } from 'react-dom-chunky'
import { List, ListItem, ListItemText } from '@rmwc/list'
import { Grid, GridCell, GridInner } from 'rmwc'
import { Body2, FooterWrapper, Icon } from './StyledComponents'
import footerLogo from '../../../assets/eosnation_footer_logo.png'

class Footer extends React.PureComponent {
  render() {
    const { links } = this.props

    return (
      <FooterWrapper>
        <Grid>
          <GridCell span="2" phone="12" tablet="3">
            <img
              src={footerLogo}
              className="footer-logo"
              style={{ width: '168px', height: '176px' }}
            />
          </GridCell>
          <GridCell span="5" phone="12" tablet="5">
            <GridInner>
              {links.map(({ url, text }) => (
                <GridCell span="6">
                  <a href={url} target="_blank" className="footer-link">
                    <Body2>{text}</Body2>
                  </a>
                </GridCell>
              ))}
            </GridInner>
            <div style={{ marginTop: '20px', marginLeft: '20px' }}>
              <Components.SocialIcons
                iconColor={'#ffffff'}
                iconColorHover={'#607D8B'}
                socialMediaLinks={this.props.footer.socialMediaLinks}
                size={24}
              />
            </div>
          </GridCell>
          <GridCell span="5" phone="12" tablet="12">
            <label>
              <Body2 bold>Get the latest updates</Body2>
            </label>
            <div className="margin-top-medium">
              <input
                type="text"
                placeholder="Your email"
                className="input footer-email-input"
              />
              <span className="btn btn-primary text-uppercase footer-subscribe-btn">
                Subscribe
              </span>
            </div>
          </GridCell>
          <GridCell span="12" phone="12" tablet="12">
            <div
              onClick={() => window.open('https://carmel.io', '_blank')}
              style={{
                display: 'flex',
                flex: '1',
                alignSelf: 'center',
                justifyContent: 'center',
                width: '100%',
                backgroundColor: '#324850',
                flexDirection: 'row',
                position: 'absolute',
                left: '0',
                cursor: 'pointer'
              }}
            >
              <List
                style={{
                  display: 'flex',
                  flex: '1',
                  alignSelf: 'centers',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  textAlign: 'center'
                }}
              >
                <ListItem
                  style={{
                    color: '#fff',
                    alignSelf: 'center'
                  }}
                >
                  <ListItemText>Created with Carmel </ListItemText>
                </ListItem>
              </List>
              <List
                style={{
                  display: 'flex',
                  flex: '1',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  textAlign: 'center'
                }}
              >
                <ListItem
                  style={{
                    marginRight: '20px',
                    color: '#fff',
                    alignSelf: 'center'
                  }}
                >
                  <ListItemText> © 2018 </ListItemText>
                </ListItem>
              </List>
            </div>
          </GridCell>
        </Grid>
      </FooterWrapper>
    )
  }
}

export default Footer
