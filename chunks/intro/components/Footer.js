import React from 'react'
import { Components } from 'react-dom-chunky'
import { List, ListItem, ListItemText } from '@rmwc/list'
import { Grid, GridCell, GridInner } from 'rmwc'
import { Body2, FooterWrapper } from './StyledComponents'
import footerLogo from '../../../assets/eosnation_footer_logo.png'
import { Data } from 'react-chunky'

class Footer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: null,
      strings: null
    }
  }
  componentDidMount() {
    Data.Cache.retrieveCachedItem('selectedLanguage')
      .then(selectedLanguage => {
        this.setState({ selectedLanguage })
      })
      .catch(() => {
        return
      })
    fetch(this.props.theme.translatedStrings)
      .then(response => response.json())
      .then(translatedTexts => {
        this.setState({ strings: translatedTexts['footer'] })
      })
      .catch(() => '')
  }
  render() {
    const { links, theme } = this.props

    return (
      <FooterWrapper backgroundColor={theme.primaryColor}>
        <Grid>
          <GridCell span="2" phone="12" tablet="3" laptop="3">
            <img
              src={footerLogo}
              className="footer-logo"
              style={{ width: '168px', height: '176px' }}
            />
          </GridCell>
          <GridCell span="5" phone="12" tablet="5" laptop="5">
            <GridInner>
              {links.map(({ url, text }, index) => {
                const translatedTitle =
                  theme.footerTranslation &&
                  this.state.strings &&
                  this.state.selectedLanguage
                    ? this.state.strings[this.state.selectedLanguage][
                        `text${index}`
                      ]
                    : text
                return (
                  <GridCell span="6">
                    <a
                      key={index}
                      href={url}
                      target={url.includes('https://') ? '_blank' : ''}
                      className="footer-link"
                    >
                      <Body2>{translatedTitle}</Body2>
                    </a>
                  </GridCell>
                )
              })}
            </GridInner>
            <div style={{ marginTop: '36px', marginLeft: '-10px' }}>
              <Components.SocialIcons
                iconColor={'#ffffff'}
                iconColorHover={'#607D8B'}
                socialMediaLinks={this.props.footer.socialMediaLinks}
                size={24}
              />
            </div>
          </GridCell>
          <GridCell span="5" phone="12" tablet="12" laptop="12">
            <div>
              <img
                src="../../../assets/EOSNationCarbon.png"
                style={{ width: '50%', display: 'block', margin: '0 auto' }}
              />
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
