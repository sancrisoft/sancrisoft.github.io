import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

export const ContentTerms = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em 1.5em;
  strong {
    color: #000;
    font-family: Averta Bold;
  }
`;

export const TitleTerms = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  padding: 1.8em 0 .8em;
  text-align: center;
  line-height: 1.4;
  font-weight: 200;
  color: #F28724;
  font-family: 'BeVietnamBold', sans-serif;
  ${breakpoint('desktop')`
    font-size: 1.8em;
  `}
`;

export const SubtitleTerms = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  line-height: 1.4;
  font-family: 'BeVietnamMedium',sans-serif;
`;

export const TermsDesc = styled.p`
  font-size: .9em;
  line-height: 1.3;
  font-family: 'BeVietnamMedium',sans-serif;
`;

export const ContentDefinitions = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: .5em;
`;

export const DefinitionTitle = styled.h3`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.3em;
  color: #000;
  padding-bottom: .8em;
  font-family: 'BeVietnamMedium',sans-serif;
`;

export const DefinitionList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 1em;
`;

export const DefinitionItem = styled.li`
  width: 100%;
`;

export const ItemDescrip = styled.div`
  width: 100%;
  font-size: .85em;
  font-family: 'BeVietnamMedium',sans-serif;
  strong {
    font-size: 1em;
  }
  ul {
    list-style: disc;
  }
  i {
    color: #000;
    margin-top: 1em;
    display: flex;
  }
`;

export const ContentObject = styled(ContentDefinitions)``;

export const ObjectTitle = styled(DefinitionTitle)``;

export const ObjectDescription = styled.p`
  width: 100%;
`;

export const ObjectList = styled(DefinitionList)``;

export const ObjectItem = styled(DefinitionItem)`
  h4 {
    font-size: 1.1em;
    color: #000;
    font-family: Averta Bold;
  }
  ul {
    margin-bottom: 0;
    padding-top: 1em;
    &.listNumber {
      list-style: none;
    }
  }
  span {
    font-size: 1em;
  }
`;

export const Back = styled.a`
  display: flex;
  max-width: 220px;
  background: #F28724;
  border: 1px solid #F28724;
  padding: 4px 16px;
  transition: all 0.3s ease;
  text-decoration: none;
  border-radius: 4px;
  color: #fff;
  margin-top: 1em;
  font-family: 'BeVietnamMedium',sans-serif;
  &:hover {
    background-color: #ffa44f;
  }
`;