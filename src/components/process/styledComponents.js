import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { ProcessContainer } from '../chipDescription';

export const EnhancedProcessContainer = styled(ProcessContainer)`
  width: 100%;
  margin-top: 2em;
  &:first-child {
    margin-top: 0;
  }
  ${breakpoint('desktop')`
    width: 40%;
    margin-top: 0;
  `}
  div.technologies {
    display: flex;
    justify-content: space-around;
    align-items: center;
    div.technology-item {
      width: 3em;
      height: 3em;
      position: relative;
    }
  }
`;