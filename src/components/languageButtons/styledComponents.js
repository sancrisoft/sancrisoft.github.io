import styled, { css } from 'styled-components';

export const LanguageSection = styled.div`
  display: flex;
  color: white;
  ${(props) => props.isBlack && css`
  color: black;
`}
`;

export const Button = styled.button`
  font-size: 0.65rem;
  padding: 0px 1px;
  margin: 0px;
  display: flex;
  border: none;
  outline: none;
  color: inherit;
  border-radius: 50%;
  height: 26px;
  min-width: 27px;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  &:hover{
    color: black;
    background: rgba(183, 182, 182, 0.32);
  }
  ${(props) => props.active && css`
    background: rgba(242, 135, 36, 0.85);
    color: white;
    margin: 0px 4px;
    &:hover{
      background: rgba(242, 135, 36, 0.85);
    }
  `}
`;