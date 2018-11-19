import React from 'react';
import { Body2 } from './StyledComponents';
import { Grid, GridCell } from 'rmwc';

class UserCard extends React.PureComponent {
  render() {
    const { name, link, imageURL, role } = this.props;
    return (
      <div className="margin-right-large margin-bottom-large user-card-container">
        <Grid>
          <GridCell>
            <img src={imageURL} style={{ width: "120px", height: "120px", borderRadius: "50%" }} />
          </GridCell>
          <GridCell span="8" tablet="2">
            <div className="padding-left user-description">
              <span>
              <Body2 uppercase bold primary>{name}</Body2>
              <Body2 uppercase light secondary style={{ display: "block" }}>{role}</Body2>
              </span>
              <a href={link}><Body2 light primary>Read more</Body2></a>
            </div>
          </GridCell>
        </Grid>
      </div>
    );
  }
}

export default UserCard;
