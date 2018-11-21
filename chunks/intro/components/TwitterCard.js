import React from 'react';
import { Grid, GridCell, GridInner } from 'rmwc';
import { Body2, Icon, UserProfileSmall } from './StyledComponents';
import Truncate from "react-truncate";

const DEFAULT_MAX_DESCRIPTION_LINES = 2;

class TwitterCard extends React.PureComponent {
  render() {
    const { link, userURL, author, time, name, date, kudos, description } = this.props;
    return (
      <div className="margin-right-large margin-bottom-large twitter-card-container">
        <Grid>
          <GridCell phone="1" tablet="1" desktop="2">
            <UserProfileSmall src={userURL} />
          </GridCell>
          <GridCell phone="3" tablet="7" desktop="10">
            <GridInner>
              <GridCell phone="3" tablet="7" desktop="9" style={{ marginTop: '5px', marginLeft: '10px' }}>
                <Body2 bold primary>{name}</Body2>
                <Body2 bold primary>{author}</Body2>
              </GridCell>
              <GridCell phone="1" tablet="1" desktop="3">
                <Icon className="fab fab fa-twitter no-text-shadow" style={{fontSize:"25px"}}/>
              </GridCell>
            </GridInner>
          </GridCell>
          <GridCell span="12" style={{ marginTop: '-15px' }}>
            <a href={link} style={{ textDecoration: 'none' }}>
              <Body2 primary>
                <Truncate lines={DEFAULT_MAX_DESCRIPTION_LINES} ellipsis={<span>...</span>}>
                  {description}
                </Truncate>
              </Body2>
            </a>
          </GridCell>
          <GridCell span="12">
            <Body2 primary>{time}</Body2> - <Body2 primary>{date}</Body2>
            <Body2 primary>{kudos}</Body2>
          </GridCell>
        </Grid>
      </div>
    );
  }
}

export default TwitterCard;
