import React from 'react';
import styled from 'styled-components';

const fontColor = '#324856';

export const Heading3 = styled.h3`
  font-family: 'Roboto', sans-serif;
  color: ${props => (props.primary ? props.primary : '#FFFFFF')};
  font-size: 26px;
  letter-spacing: 0.38px;
  line-height: 31px;
  font-weight: normal;
`;

export const CalenderItemWrapper = styled.div`
  display: flex;
  border-bottom: solid gray 1px;
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const CalenderItemDate = styled.div`
  width: 15%;
  display: inline-block;
  color: #fff;
  padding: 20px;
  border-right: solid gray 1px;
  @media (max-width: 780px) {
    border-right: none;
    border-bottom: solid gray 1px;
    width: calc(100% - 40px);
  }
`;

export const CalenderItemContent = styled.div`
  width: calc(90% - 141px);
  display: inline-block;
  padding: 40px;
  color: #fff;
  @media (max-width: 780px) {
    width: calc(90% - 40px);
  }
`;

export const Heading4 = styled.h4`
  font-family: 'Roboto', sans-serif;
  color: ${props => (props.primary ? props.primary : '#FFFFFF')};
  text-align: ${props => (props.center ? 'center' : 'inherit')};
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 0.19px;
  line-height: 35px;
`;

export const Body2 = styled.p`
  display: inline;
  color: ${props =>
    props.primary
      ? '#324856'
      : props.secondary
      ? '#4A746A'
      : props.color
      ? props.color
      : '#FFFFFF'};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: ${props =>
    props.bold ? 'bold' : props.light ? '300' : 'inherit'};
  text-decoration: ${props => (props.link ? 'underline' : 'inherit')};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'inherit')};
  letter-spacing: 0.13px;
  line-height: 19px;
`;

export const Icon = styled.i`
  color: ${props => (props.primary ? props.primary : '#324856')};
  background: ${props => (props.primary ? props.primary : '#fff')};
  padding: 5px 5px;
  border-radius: 50%;
  font-size: 15px;
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.5);
`;

export const FooterWrapper = styled.div`
  color: ${props => (props.primary ? props.primary : '#fff')};
  background: ${props => (props.primary ? props.primary : '#324856')};
  padding: 50px;
  @media (max-width: 780px) {
    padding: 20px;
  }
`;

export const UserProfileSmall = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const BlogTtile = styled.h3`
  color: ${fontColor};
  font-size: 36px;
`;

export const Line = styled.div`
  height: 3px;
  background-color: #b0bec5;
  width: 100%;
`;

export const PostTitle = styled.h4`
  color: ${fontColor};
  font-size: 26px;
`;

export const PostSummary = styled.p`
  color: ${fontColor};
  font-size: 16px;
`;

export const PostImg = styled.img`
  height: 200px;
  width: 250px;
`;

export const PostDate = styled.p`
  font-size: 16px;
  color: #4a746a;
  position: absolute;
  bottom: 0;
`;

export const FeaturedRank = styled.p`
  font-size: 36px;
  color: rgba(155, 155, 155, 0.5);
`;

export const FeaturedTitle = styled.h4`
  font-size: 22px;
  color: ${fontColor};
`;
