import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MembersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 2em;
`;
export const BoxMembers = styled.div`
  width: 100%;
  padding-top: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const OurValuesContainer = styled.section`
  width: 100%;
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContentValues = styled.div`
  width: 100%;
  padding-top: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  h3{
    text-align: center;
  }
`;
export const Content = styled.div`
  display: flex;
  text-align: justify;
  letter-spacing: 0.01rem;
  flex-direction: column;
  ${breakpoint('mobile')`
    width: 90%;
  `}
  ${breakpoint('tablet')`
    width: 50%;
  `}
  justify-content: center;
`;
export const Mission = styled.div`
  display: flex;
  margin-top: 2rem;
  ${breakpoint('mobile')`
    flex-direction: column-reverse;
    align-items: center;
  `}
  ${breakpoint('tablet')`
    flex-direction: row;
    align-items: center;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  `}
`;
export const Vision = styled.div`
  display: flex;
  margin-top: 1rem;
  ${breakpoint('mobile')`
    flex-direction: column;
    align-items: center;
  `}
  ${breakpoint('tablet')`
    flex-direction: row;
    align-items: center;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  `}
`;
export const ImgContent = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`;