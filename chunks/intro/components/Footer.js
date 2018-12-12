import React from 'react'
import { Components } from 'react-dom-chunky'
import { List, ListItem, ListItemText } from '@rmwc/list'
import { Grid, GridCell, GridInner } from 'rmwc'
import { Body2, FooterWrapper } from './StyledComponents'
import footerLogo from '../../../assets/eosnation_footer_logo.png'
import { Data } from 'react-chunky'
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogButton
} from '@rmwc/dialog'

class Footer extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: null,
      strings: null,
      detailDialogOpen: false
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
    const translatedCertifiedText =
      this.props.theme.footerTranslation &&
      this.state.strings &&
      this.state.selectedLanguage
        ? this.state.strings[this.state.selectedLanguage][`certifiedText`]
        : 'Certified Carbon Neutral Block Producer'
    const translatedBtnModal =
      this.props.theme.footerTranslation &&
      this.state.strings &&
      this.state.selectedLanguage
        ? this.state.strings[this.state.selectedLanguage][`modalBtn`]
        : 'Back'
    // hardcode above text for now
    return (
      <FooterWrapper backgroundColor={theme.primaryColor}>
        <Grid>
          <GridCell span="2" phone="12" tablet="12" laptop="3">
            <img
              src={footerLogo}
              className="footer-logo"
              style={{ width: '168px', height: '176px' }}
            />
          </GridCell>
          <GridCell span="5" phone="12" tablet="12" laptop="5">
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
                  <GridCell
                    span="6"
                    tablet="12"
                    phone="12"
                    className="responsive-footer-items"
                  >
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
            <GridInner>
              <GridCell
                span="6"
                tablet="12"
                phone="12"
                className="responsive-footer-items"
                style={{ marginTop: '36px' }}
              >
                <Components.SocialIcons
                  iconColor={'#ffffff'}
                  iconColorHover={'#607D8B'}
                  socialMediaLinks={this.props.footer.socialMediaLinks}
                  size={24}
                >
                  <img
                    src="assets/wechat-logo.png"
                    onClick={() => {
                      this.setState({ detailDialogOpen: true })
                    }}
                    style={{
                      width: '24px',
                      height: '24px',
                      cursor: 'pointer'
                    }}
                  />
                </Components.SocialIcons>
              </GridCell>
            </GridInner>
            <Dialog
              open={this.state.detailDialogOpen}
              onClose={() => {
                this.setState({ detailDialogOpen: false })
              }}
            >
              <DialogContent>
                <img
                  src="assets/wechat-qr.jpg"
                  style={{ width: '100%', height: '100%' }}
                />
              </DialogContent>
              <DialogActions
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <DialogButton action="close">{translatedBtnModal}</DialogButton>
              </DialogActions>
            </Dialog>
          </GridCell>
          <GridCell
            span="5"
            phone="12"
            tablet="12"
            laptop="12"
            style={{ textAlign: 'center' }}
          >
            <div>
              <img
                src="../../../assets/EOSNationCarbon.png"
                style={{ width: '50%', display: 'block', margin: '0 auto' }}
              />
              <span>{translatedCertifiedText}</span>
            </div>
          </GridCell>
          <GridCell
            span="6"
            phone="4"
            tablet="6"
            className="subscribe-cell-wrapper"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: `<div class="html-embed w-embed w-script"><!-- Begin Constant Contact Active Forms -->
<script> var _ctct_m = "6eebbc96ee460064c5d6eb454fc8ba81"; </script>
<script id="signupScript" src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js" async="" defer=""></script>
<!-- End Constant Contact Active Forms -->

<!-- Begin Constant Contact Inline Form Code -->
<div class="ctct-inline-form" data-form-id="a7e72c57-c43a-4701-a5bf-190a84dd0888"><div class="ctct-form-container ctct-form-embed form_0">
    <div class="ctct-form-defaults" data-qe-id="form-background">
        <div id="success_message_0" class="ctct-form-success" style="display:none;" data-qe-id="success-message">
            <h2 class="ctct-form-header">Thanks for signing up!</h2>
            <p class="ctct-form-text">You can unsubscribe at any time using the Unsubscribe link at the bottom of every email.</p>
        </div>
        <form class="ctct-form-custom" id="ctct_form_0" autocomplete="on" data-qe-id="form-data">
            
            <h2 data-qe-id="form-title" class="ctct-form-header">Sign up for updates!</h2>
            
            
            <p data-qe-id="form-description" class="ctct-form-text">Get news from EOS Nation in your inbox.</p>
            

            <div id="email_address_field_0" class="ctct-form-field">
                <label data-qe-id="form-label-email" id="email_address_label_0" for="email_address_0" class="ctct-form-label ctct-form-required">Email</label>
                <div class="ctct-form-errorMessage" data-qe-id="form-error-email" style="display: none;"></div>
                <input class="ctct-form-element" data-qe-id="form-input-email" id="email_address_0" type="email" name="email_address" value="" maxlength="80">
            </div>

            <div id="error_message_0" class="ctct-form-error" style="display:none;">
                <p class="ctct-form-errorMessage">Sorry, we could not complete your sign-up. Please contact us to resolve this.</p>
            </div>
            <div id="network_error_message_0" class="ctct-form-error" style="display:none;">
                <p class="ctct-form-errorMessage">Operation timed out, please try again.</p>
            </div>

            <div id="gdpr_text">
                <p class="ctct-gdpr-text">
                    By submitting this form, you are consenting to receive marketing emails from: EOS Nation, CP 25086 BP Villeneuve, Montreal, Quebec, H2T 1R0, CA, http://www.eosnation.io. You can revoke your consent to receive emails at any time by using the SafeUnsubscribe® link, found at the bottom of every email. <a href="https://www.constantcontact.com/legal/service-provider" target="_blank" data-qe-id="form-service-link" class="ctct-form-footer-link">Emails are serviced by Constant Contact.</a>
                    
                </p>
            </div>

            <button data-qe-id="form-button" type="submit" class="ctct-form-button">Sign Up!</button>

            
            <div class="g-recaptcha" id="ctct_recaptcha_0" data-sitekey="6LfHrSkUAAAAAPnKk5cT6JuKlKPzbwyTYuO8--Vr" data-size="invisible"><div class="grecaptcha-badge" data-style="bottomright" style="width: 256px; height: 60px; transition: right 0.3s ease 0s; position: fixed; bottom: 14px; right: -186px; box-shadow: gray 0px 0px 5px;"><div class="grecaptcha-logo"><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfHrSkUAAAAAPnKk5cT6JuKlKPzbwyTYuO8--Vr&amp;co=aHR0cHM6Ly93d3cuZW9zbmF0aW9uLmlvOjQ0Mw..&amp;hl=en&amp;v=v1543818755456&amp;size=invisible&amp;cb=xzrznssmc73i" width="256" height="60" role="presentation" name="a-4stnwgraws12" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><div class="grecaptcha-error"></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div></div>
            
        </form>
        <p class="ctct-form-footer">
            
            <span data-qe-id="form-branding">
                <a href="http://www.constantcontact.com/index.jsp?cc=forms_popup" rel="nofollow" target="_blank" class="ctct-form-footer-link">
                    <img src="https://static.ctctcdn.com/lp/images/standard/logos/logo-ctct-white.svg" alt="" class="ctct-form-footer-img">
                </a>
            </span>
            
        </p>
    </div>
</div>
</div>
<!-- End Constant Contact Inline Form Code --></div>`
              }}
            />
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
