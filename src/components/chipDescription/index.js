import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {
  H4,
} from '../styledComponents';

export const ProcessContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .avatar {
    width: 10em;
    height: 10em;
    overflow: visible !important;
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
  }
`;

const ChipDescription = ({ title, description, image, children }) => (
  <ProcessContainer>
    <Img className="avatar" sizes={image} />
    <div className="detail">
      <H4>{title}</H4>
      <p>{description}</p>
      { children }
    </div>
  </ProcessContainer>
);

ChipDescription.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.object,
};

export default ChipDescription
