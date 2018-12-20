import React from 'react'
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player'
import Img from 'gatsby-image'
import Title from '../title'

import imgMobile from '../../images/home/iphonePrueba.png'
import videoMobile from '../../images/home/videoSancri.mp4'

import {
  BoxContent,
  ContLeft,
  ContRight,
  RightTop,
  RightBottom,
} from './styledComponents'

const WeLove = ({ description, image, title }) => {
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
        </RightBottom>
      </ContRight>
    </BoxContent>
  )
}

WeLove.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
};


export default WeLove
