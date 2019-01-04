import React from 'react'
import { graphql } from 'gatsby'
import ReactHtmlParser from 'react-html-parser';
import BigGreyImage from '../../components/bigGreyImage'
import Title from '../../components/title'
import MemberCard from '../../components/MemberCard'
import Layout from '../../components/layout'
import OurValues from '../../components/ourValues'
import SEO from '../../components/seo'
import { I18nextProvider, translate } from "react-i18next"
import i18n from '../../data/translations'
import Img from 'gatsby-image'

import {
  SectionContainer,
  MembersContainer,
  OurValuesContainer,
  ContentValues,
  MissionContainer,
  Mission,
  Content,
  ImgContent,
  Vision,
} from '../../utils/about-us/styledComponents';
import {
  H3,
  PageSizer,
} from '../../components/styledComponents'

const IndexPage = ({ data, t }) => {
  const renderTeamMembers = () => {
    const {
      site: {
        siteMetadata: {
          aboutUs: {
            team,
          },
        },
      },
    } = data;
    return team.map((member) => (
      <MemberCard
        key={member.id}
        image={data[member.id].childImageSharp.sizes}
        name={member.fullName}
        position={t(`aboutUs.team.members.${member.id}.position`)}
        message1={t(`aboutUs.team.members.${member.id}.message1`)}
        message2={t(`aboutUs.team.members.${member.id}.message2`)}
        socialMedia={member.socialMedia}
      />
    ));
  }

  const renderOurValues = () => {
    const {
      site: {
        siteMetadata: {
          aboutUs: {
            ourValues,
          }
        }
      }
    } = data;
    const newArray = ourValues.map((item) => {
      const {
        id,
      } = item;

      return (
        <OurValues
          key={id}
          description={t(`aboutUs.ourValues.${id}.description`)}
          title={t(`aboutUs.ourValues.${id}.title`)}
          // image={data[`Testimonial${id}`].childImageSharp.sizes}
        />

      )
    });
    return newArray;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <SEO title={`Sancrisoft | ${t('aboutUs.title')}`} keywords={['sancrisoft', 'digital-solutions']} />
        <section>
          <BigGreyImage
            image={data.aboutUsMainImage.childImageSharp.sizes}
            title={t('aboutUs.bigImage.title')}
            description={t('aboutUs.bigImage.description')}
          />
        </section>
        <PageSizer>
          <SectionContainer>
            <H3>{t('aboutUs.team.title')}</H3>
            <MembersContainer>
              { renderTeamMembers() }
            </MembersContainer>
            <OurValuesContainer>
              <Title
                type={2}
                text={t('aboutUs.ourValueTitle')}
              />
              <ContentValues>
                { renderOurValues() }
              </ContentValues>
            </OurValuesContainer>
            <MissionContainer>
              <H3>{t('aboutUs.visionMissionTitle')}</H3>
              <Mission>
                <Content>
                  {t('aboutUs.mission')}
                </Content>
                <ImgContent>
                  <Img sizes={data.mission.childImageSharp.sizes} style={{ width: '50%'}}/>
                </ImgContent>
              </Mission>
              <Vision>
                <ImgContent>
                  <Img sizes={data.vision.childImageSharp.sizes} style={{ width: '50%'}}/>
                </ImgContent>
                <Content>
                  {ReactHtmlParser(t('aboutUs.vision'))}
                </Content>
              </Vision>
            </MissionContainer>
          </SectionContainer>
        </PageSizer>
      </Layout>
    </I18nextProvider>
  );
}

// Queries for images (One query by image)
export const query = graphql`
query aboutUs {
  aboutUsMainImage:file(relativePath: { eq: "aboutUs/team.png" }) {
    ...imageFragment
  }
  jhony:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  johan:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  carlos:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  alejo:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  juan:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  samuel:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  bryan:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  miguel:file(relativePath: { eq: "aboutUs/team/samuel.png" }) {
    ...imageFragment
  }
  mission:file(relativePath: { eq: "aboutUs/mission.png" }) {
    ...imageFragment
  }
  vision:file(relativePath: { eq: "aboutUs/vision.png" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      aboutUs {
        team {
          id
          fullName
          socialMedia {
            type
            value
          }
        }
        ourValues {
          id
        }
      }
    }
  }
}
`;

export default translate("translations")(IndexPage)
