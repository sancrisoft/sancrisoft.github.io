import React from 'react'
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player'
import Img from 'gatsby-image'
import Title from '../title'
import Icons from '../icons'

import imgMobile from '../../images/home/iphonePrueba.png'
import videoMobile from '../../images/home/videoSancri.mp4'

import {
  BoxContent,
  ContLeft,
  ContRight,
  RightTop,
  RightBottom,
  Link,
  A,
} from './styledComponents'

const WeLove = ({ description, image, title, textLink, link }) => {
  return(
    <BoxContent>
      <ContLeft>
        <div className="content-video">
          <div className="image-wrap">
            <img src={imgMobile} alt="mob"/>
            <div className="video-wrapper">
              <ReactPlayer
                url={videoMobile}
                width="100%"
                height="100%"
                playing
                loop
                muted
              />
            </div>
          </div>
        </div>
      </ContLeft>

      <ContRight>
        <RightTop>
          <Img sizes={image} />
          <Title
            type={3}
            text={title}
          />
        </RightTop>
        <RightBottom>
          <p>{description}</p>
          <Link>
            <A href={link} target="_blank" className="love">
              {textLink}
              <span className="contentIcon">
                <Icons
                  iconName="right"
                  height={15}
                  width={15}
                  backgroundColor="#333"
                />
              </span>
            </A>
          </Link>
        </RightBottom>
      </ContRight>
    </BoxContent>
  )
}

WeLove.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  textLink: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.object,
};


export default WeLove
