import styled, { css } from 'styled-components';
export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  a {
    color: white;
    font-family: Averta;
    text-decoration: none;
    margin: 0px 15px;
    font-size: 0.9rem;
    font-weight: normal;
    display: flex;
    align-items: center;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      transform: scale3d(0, 1, 1);
      transform-origin: center left;
      transition: transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
      background: #fff;
      transition-delay: 0.4s;
    }
    &.special {
      border: 1px solid #F28724;
      padding: 4px 16px;
      color: #F28724;
      border-radius: 4px;
      transition: all 0.3s ease;
      &:after {
        display: none;
        background: transparent;
      }
      &:hover{
        color: white;
        background: #F28724;
        text-decoration: none;
        border-color: #F28724;
      }
    }
    &:hover{
      &:after {
        transform: scale3d(1, 1, 1);
        transition-delay: 0s;
      }
    }
  }
  ${(props) => props.isBlack && css`
    a{
      color: #000000;
      &:after {
        content: '';
        background: #000;
      }
      &.special {
        color: white;
        background: #F28724;
        text-decoration: none;
        &:hover {
          background-color: #ffa44f;
        }
      }
    }
  `}
`;
