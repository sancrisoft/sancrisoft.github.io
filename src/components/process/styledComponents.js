import styled, { keyframes } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { ProcessContainer } from '../chipDescription';

export const EnhancedProcessContainer = styled(ProcessContainer)`
  width: 40%;
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