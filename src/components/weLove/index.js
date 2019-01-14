import React from 'react'
import PropTypes from 'prop-types';
import Img from 'gatsby-image'
import Title from '../title'
import Icons from '../icons'

import imgMobile from '../../images/home/iphonePrueba.png'

import {
  BoxContent,
  ContLeft,
  ContRight,
  RightTop,
  RightBottom,
  Link,
  A,
} from './styledComponents'

const WeLove = ({ description, image, title, textLink, link, video }) => {
  return(
    <BoxContent>
      <ContLeft>
        <div className="content-video">
          <div className="image-wrap">
            <img src={imgMobile} alt="mob"/>
            <div className="video-wrapper">
              <img src={video} alt="video"/>
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
  video: PropTypes.object,
};


export default WeLove
