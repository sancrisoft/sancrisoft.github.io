import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const SectionContainer = styled.section`
  padding-top: 2em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecruitmentProcessContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2em 0 0 0;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PositonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2em 0;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PositionCard = styled.div`
  width: 15em;
  background-color: #ebebeb;
  padding: 1.5em 2em;
  border-radius: 0.3em;
  margin: 20px;
`

export const H4 = styled.h4`
  font-size: 1em;
  margin-bottom: 1em;
  height: 2em;
`;

export const PositionSubtitles = styled.h5`
  font-size: 1.2em;
  margin-bottom: 1em;
`;

export const SubTitle = styled.h5`
  font-size: 0.75em;
  margin: 1em 0;
  font-family: "LatoBold";
  color: #000;
`

export const ImgCustom = styled.img`
  max-height: 200px;
  margin: 1em 0 0 0;
  width: 100%;
  object-fit: cover;
`;

export const PositionDetailsContainer = styled.div`
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  ${breakpoint('tablet')`
    flex-direction: row;
  `}
  ${breakpoint('desktop')`
    padding: 0;
  `}
`;

export const PositionDetailsText = styled.div`
  width: 100%;
  ${breakpoint('tablet')`
    width: 60%;
  `}
`;

export const PositionDetailsForm = styled.div`
  width: 100%;
  ${breakpoint('tablet')`
    width: 40%;
  `}
`;
