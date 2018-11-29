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
    width: 100%;
  }
`;

export const CalenderItemContent = styled.div`
  width: calc(100% - 90px);
  display: inline-block;
  padding: 40px;
  color: #fff;
  @media (max-width: 780px) {
    width: 100%;
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
  color: ${props => props.primary ? '#324856' : props.secondary ? '#4A746A' : props.color ? props.color : '#FFFFFF'};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: ${props =>
  props.bold ? 'bold' : props.light ? '300' : 'inherit'};
  text-decoration: ${props => (props.link ? 'underline' : 'inherit')};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'inherit')};
  letter-spacing: 0.13px;
  line-height: 19px;
`;

export const Body3 = styled.p`
  color: ${props => props.primary ? '#324856' : props.secondary ? '#4A746A' : props.color ? props.color : '#FFFFFF'};
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  letter-spacing: 0.19px;
  line-height: 30px;
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
  color: ${props => (props.color ? props.color : '#fff')};
  background: ${props => (props.backgroundColor || "#000")};
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
  width: 100%;
  min-width: 200px;
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

export const Cover = styled.div`
  position: relative;
  background-image: url(${(props) => (props.backgroundImgURL)});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  background-position-y: ${(props) => (props.backgroundPositionY || '60px')};
  background-position-x: ${(props) => (props.backgroundPositionX || 'inherit')};
  background-size: ${(props) => (props.backgroundSize || '100%')};
  height: 700px;
	:before{
    content: '';
  	position: absolute;
	  top: 0;
	  right: 0;
	  bottom: 0;
	  left: 0;
	  opacity: 0.55;
	  ${(props) => (props.overlayBackground ?
  `background: ${props.overlayBackground};` : "")}
	}
  @media(max-width: 840px){
    margin-top: 45px;
    background-attachment: inherit;
    background-position-y: inherit;
    background-position-x: -200px;
    background-size: cover;
    :before{
	    background-image: linear-gradient(90deg, #EEEEEE 18.96%, #626262 100%);
    }
  }
`;

export const CoverContent = styled.div`
  width: calc(100% - 120px);
  position: absolute;
  margin-left: 20px;
  margin-right: 20px;
  top: 300px;
  left: 100px;
  z-index: 3;
  @media(max-width: 840px){
    width: calc(100% - 50px);
    top: 250px;
    left: inherit;
  }
`;

export const SocialLinks = styled.div`
  position: absolute;
  top: -200px;
  right: 0;
  margin-right: 20px;
  @media(max-width: 840px){
    right: -30px;
  }
`;

export const Arrow = styled.div`
  display: block;
  background: ${(props) => (props.backgroundColor || "#000")};
  width: 40px;
  height: 40px;
  margin-left: -20px;
  margin-right: -20px;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :before{    
    content: "${props => props.left ? "<" : ">"}";
    font-size: 1.6rem;
    color: #fff;
    line-height: initial;
    padding-left: 12px;
  }
  :hover{
    background: rgba(50,72,86,0.67);
    opacity: 20%;
  }
`;

export const ValuesSection = styled.div`
  padding: 100px 0;
  @media(max-width: 540px){
    padding: 50px 0;
  }
`;

export const CarouselContainerWrapper = styled.div`
  position: relative;
  background: linear-gradient(133.26deg, 
  rgba(209, 131, 39, 0) 0%, 
  ${(props) => (props.backgroundColor || "#000")} 42.49%,
  ${(props) => (props.carouselColor1 || "#000")} 55.9%, 
  ${(props) => (props.carouselColor2 || "#000")} 75.8%, 
  ${(props) => (props.carouselColor3 || "#000")} 100%);
  :before{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${(props) => (props.backgroundColor || "#000")};
    opacity: 0.7;
    //background: rgba(50, 72, 86, 0.7);
  }
`;

export const CarouselSliderStyle = styled.div`
  width: 95%;
  padding-left: 46px;
  padding-right: 5px;
  @media(max-width: 1000px){
    padding-right: 60px;
  }
  @media(max-width: 576px){
    padding-left: 0;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    width: 77%;
  }
`;

export const TwitterSectionContainer = styled.div`
  max-width: 1340px;
  margin-left: auto;
  margin-right: auto;
  padding: 100px 50px;
  @media(max-width: 840px){
    padding-right: 20px;
    padding-left: 20px;
  }
  @media(max-width: 576px){
    padding: 50px 10px;
  }
`;

const element = ({ component, ...props }) => React.cloneElement(component, props);

export const CoverTitle = styled(element)`
  text-align: center;
  padding: 5px 0 0 0;
  font-family: ${(props) => (props.fontFamilyTitle || "inherit")};
  font-size: 32px;
  color: ${(props) => (props.color || "#000")};
`;

export const Button = styled(element)`
  display: inline-block;
  height: 60px;
  width: 240px;
  border-radius: 5px;
  background-color: ${(props) => (props.backgroundColor || "#000")};
  color: ${(props) => (props.color || "#ffffff")};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  letter-spacing: 0.38px;
  line-height: 3.8;
  text-align: center;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const CardImageWrapper = styled.div`
  width: 160px;
  height: 160px;
  text-align: center;
  background-color: ${(props) => (props.backgroundColor || "#000")};
  padding: 20px;
  border-radius: 50%;
`;