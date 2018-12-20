import React from 'react'

import ReactPlayer from 'react-player'

import imgMobile from '../../images/home/iphonePrueba.png'
import videoMobile from '../../images/home/videoSancri.mp4'

import {
  BoxContent,
  ContLeft,
  ContRight,
} from './styledComponents'

const WeLove = () => {
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
      <ContRight>desce</ContRight>
    </BoxContent>
  )
}


export default WeLove
