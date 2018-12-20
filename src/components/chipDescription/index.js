import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {
  H4,
} from '../styledComponents';
import { translate } from "react-i18next"
import { Spring } from 'react-spring'
import Fade from 'react-reveal/Fade';

export const ProcessContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .avatar {
    width: 10em;
    height: 10em;
    overflow: visible !important;
    z-index: 2;
    img{
      border-radius: 50%;
      object-fit: cover !important;
      box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.25);
    }
  }
  div.detail {
    margin-top: 1em;
    h4, p {
      text-align: center;
    }
    p {
      margin-top: 1em;
    }
    z-index: 2;
  }
  div.children {
    z-index: 2;
  }
`;

export const Bubble = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-sizing: border-box;
  border-radius: 50%;
  z-index: 1;
  background-image: linear-gradient(225deg, rgb(246, 156, 52), rgb(255, 255, 255));
`;

class ChipDescription extends PureComponent {

  state = {
    onScreen: false,
  }

  renderBubbles = () => (
    <Spring
      from={{ opacity: 0, width: 0, height: 0 }}
      to={{ opacity: 1, width: 20, height: 20 }}
    >
      {props => 
        <>
          <Bubble 
            top={'-10%'}
            left={0}
            right={'5%'}
            width={`${props.width}em`}
            height={`${props.height}em`}
          />
          <Bubble 
            top={'30%'}
            left={'-5%'}
            right={0}
            width={`${props.width * .7}em`}
            height={`${props.height * .7}em`}
          />
          <Bubble 
            top={'25%'}
            left={'none'}
            right={'-7%'}
            width={`${props.width * .7}em`}
            height={`${props.height * .7}em`}
          />
        </>
      }
    </Spring>
  )

  render() {
    const { id, image, children, t } = this.props;
    const { onScreen } = this.state;
    return (
      <Fade wait={1000} left onReveal={() => this.setState({ onScreen: true })}>
        <ProcessContainer>
          <Img className="avatar" sizes={image} />
          { onScreen && this.renderBubbles() }
          <div className="detail">
            <H4>{t(`processes.items.${id}.title`)}</H4>
            <p>{t(`processes.items.${id}.description`)}</p>
            <div className="children">
              { children }
            </div>
          </div>
        </ProcessContainer>
      </Fade>
    );
  }
};

ChipDescription.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.object,
};

export default translate('translations')(ChipDescription)
