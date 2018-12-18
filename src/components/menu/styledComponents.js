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
    &.special {
      border: 1px solid #F28724;
      padding: 4px 16px;
      color: #F28724;
      border-radius: 4px;
      &:hover{
        color: white;
        background: #F28724;
        text-decoration: none;
      }
    }
    &:hover{
      text-decoration: underline;
    }
  }
  ${(props) => props.isBlack && css`
    a{
      color: #000000;
    }
  `}
`;
