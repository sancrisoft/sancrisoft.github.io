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
  }
  ${(props) => props.isBlack && css`
    a{
      color: #000000;
    }
  `}
`;
