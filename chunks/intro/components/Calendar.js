import React, { Component } from 'react'
import { Grid, GridCell, GridInner } from 'rmwc'
import '@material/layout-grid/dist/mdc.layout-grid.css'
import {
  Body2,
  CalenderItemContent,
  CalenderItemDate,
  CalenderItemWrapper,
  Heading3,
  Heading4,
  Icon
} from './StyledComponents'

export class CalendarItem extends Component {
  render() {
    const {
      slug,
      name,
      location,
      date,
      timeInterval,
      extraInfoLink,
      facebookLink,
      twitterLink,
      meetupLink,
      btnText
    } = this.props
    let metaInfo = []

    if (location) {
      metaInfo.push(
        <Body2>
          <i className="fas fa-map-marker margin-right-small" />
          {location}
        </Body2>
      )
    }
    if (timeInterval) {
      metaInfo.push(
        <Body2>
          <i className="far fa-clock margin-right-small" />
          {timeInterval}
        </Body2>
      )
    }
    if (extraInfoLink && extraInfoLink !== 'extraInfoLink') {
      metaInfo.push(
        <a href={extraInfoLink} target="_blank">
          <Body2 link>
            <i className="fas fa-info-circle margin-right-small" />
            {btnText}
          </Body2>
        </a>
      )
    }

    return (
      <CalenderItemWrapper>
        <CalenderItemDate>
          <div
            style={{
              fontSize: '86px',
              textAlign: 'center',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
            }}
          >
            {date.getDate()}
          </div>
          <div
            style={{
              fontSize: '24px',
              textAlign: 'center',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
            }}
          >
            {`${new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
              date
            )} ${date.getFullYear()}`}
          </div>
        </CalenderItemDate>
        <CalenderItemContent>
          <Grid xclassName="padding-remove">
            <GridCell span="12">
              <GridInner>
                <GridCell span="2">
                  <Heading3>{slug}</Heading3>
                </GridCell>
                <GridCell span="10">
                  <Heading4>{name}</Heading4>
                </GridCell>
              </GridInner>
            </GridCell>
            <GridCell span="12">
              <GridInner>
                <GridCell span="2">
                  {metaInfo.length ? metaInfo[0] : <Body2>-</Body2>}
                </GridCell>
                <GridCell desktop="7" phone="2">
                  <GridInner>
                    {metaInfo.length > 1 ? (
                      metaInfo.map((info, index) =>
                        index !== 0 ? (
                          <GridCell span="4">{metaInfo[index]}</GridCell>
                        ) : null
                      )
                    ) : (
                      <Body2>-</Body2>
                    )}
                  </GridInner>
                </GridCell>
                <GridCell
                  span="3"
                  phone="6"
                  className="text-align-right calendar-social-links"
                  style={{ marginLeft: '-20px' }}
                >
                  {facebookLink && facebookLink !== 'facebookLink' ? (
                    <span>
                      <a
                        className="margin-left-medium"
                        href={facebookLink}
                        target="_blank"
                      >
                        <Icon className="fab fa-facebook-f facebook-custom-icon" />
                      </a>
                    </span>
                  ) : null}
                  {twitterLink && twitterLink !== 'twitterLink' ? (
                    <span>
                      <a
                        className="margin-left-medium"
                        href={twitterLink}
                        target="_blank"
                      >
                        <Icon className="fab fa-twitter" />
                      </a>
                    </span>
                  ) : null}
                  {meetupLink && meetupLink !== 'meetupLink' ? (
                    <span>
                      <a
                        className="margin-left-medium"
                        href={meetupLink}
                        target="_blank"
                      >
                        <Icon className="fab fa-meetup" />
                      </a>
                    </span>
                  ) : null}
                </GridCell>
              </GridInner>
            </GridCell>
          </Grid>
        </CalenderItemContent>
      </CalenderItemWrapper>
    )
  }
}

class Calendar extends Component {
  render() {
    const {
      calendarEvents,
      theme,
      backgroundColor1,
      backgroundColor2,
      backgroundColor3,
      btnText
    } = this.props
    return (
      <div
        className="align-center"
        style={{
          maxWidth: '1120px',
          background: `linear-gradient(0deg, ${backgroundColor1 ||
            theme.secondaryColor} 0%,
         ${backgroundColor2} 44.82%, ${backgroundColor3 ||
            theme.primaryColor} 100%)`
        }}
      >
        {calendarEvents.map(event => (
          <CalendarItem {...event} btnText={btnText} />
        ))}
      </div>
    )
  }
}

export default Calendar
