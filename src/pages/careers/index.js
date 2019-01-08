import React, { Component } from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import BigGreyImage from '../../components/bigGreyImage'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { I18nextProvider, translate } from "react-i18next"
import i18n from '../../data/translations'
import Button from '../../components/button'
import OurRecruitment from '../../components/ourValues'
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
  RecruitmentProcessContainer,
} from '../../utils/careers/styledComponents';

class IndexPage extends Component {
  renderOurRecruitment = () => {
    const {
      data: {
        site: {
          siteMetadata: {
            careers: {
              recruitmentProcess,
            },
          },
        },
      },
      data,
      t,
    } = this.props;
    return recruitmentProcess.map((item, index) => (
      <OurRecruitment
        key={`${index}-${item}`}
        title={t(`careers.recruitmentProcess.${item}.title`)}
        description={t(`careers.recruitmentProcess.${item}.description`)}
        image={data[`${item}Icon`].childImageSharp.sizes}
        contentCustomStyles={{ paddingBottom: 0 }}
      />
    ));
  }

  render() {
    const { data, t } = this.props;
    console.log('****');
    console.log(data);
    console.log(t);
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
            <RecruitmentProcessContainer>
              {this.renderOurRecruitment()}
            </RecruitmentProcessContainer>
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
  applicationIcon:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  assigmentIcon:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  interviewIcon:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  offerIcon:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      title
      careers {
        recruitmentProcess
      }
    }
  }
}
`;

export default translate("translations")(IndexPage)
