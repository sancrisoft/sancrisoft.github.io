import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import BigGreyImage from '../../components/bigGreyImage'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { I18nextProvider, translate } from "react-i18next"
import i18n from '../../data/translations'
import Button from '../../components/button'
import {
  H3,
  PageSizer,
} from '../../components/styledComponents'
import {
  H4,
  SectionContainer,
  PositonsContainer,
  ViewMoreBtn,
  PositionCard,
  SubTitle,
} from '../../utils/careers/styledComponents';

const IndexPage = ({ data, t }) => {
  // console.log(data);
  // console.log('****');
  // console.log(i18n);
  return (
    <I18nextProvider i18n={i18n}>
    <Layout>
      <SEO title="Sancrisoft | Homepage" keywords={['sancrisoft', 'digital-solutions']} />
      <section>
        <BigGreyImage
          image={data.aboutUsMainImage.childImageSharp.sizes}
          title={t('aboutUs.bigImage.title')}
          description={t('aboutUs.bigImage.description')}
        />
      </section>
      <PageSizer>
        <SectionContainer>
          <H3>{t('careers.recruitment.title')}</H3>
          <H3>{t('careers.openPositions.title')}</H3>
          <PositonsContainer>
            <PositionCard>
              <H4>React Native Mobile Developer</H4>
              <SubTitle>Full Time</SubTitle>
              <Button
                text="View More"
                padding="5px 10px"
                size="12px"
              />
            </PositionCard>
            <PositionCard>
              <H4>React Native Mobile Developer</H4>
              <SubTitle>Full Time</SubTitle>
              <Button
                text="View More"
                padding="5px 10px"
                size="12px"
              />
            </PositionCard>
          </PositonsContainer>
        </SectionContainer>
      </PageSizer>
    </Layout>
    </I18nextProvider>
  );
}

// Queries for images (One query by image)
export const query = graphql`
query portfolioQuery {
  aboutUsMainImage:file(relativePath: { eq: "aboutUs/team.png" }) {
    ...imageFragment
  }
  astronaut:file(relativePath: { eq: "home/gatsby-astronaut.png" }) {
    ...imageFragment
  }
  icon:file(relativePath: { eq: "gatsby-icon.png" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      title
    }
  }
}
`;

export default translate("translations")(IndexPage)
