import React, { Component } from 'react'
import { graphql, navigate } from 'gatsby'
import ReactHtmlParser from 'react-html-parser';
import Img from 'gatsby-image'
import BigGreyImage from '../../components/bigGreyImage'
import Title from '../../components/title'
import MemberCard from '../../components/MemberCard'
import Layout from '../../components/layout'
import OurValues from '../../components/ourValues'
import GetAQuote from '../../components/getAQuote'
import Button from '../../components/button'
import MapSelector from '../../components/mapSelector'
import SEO from '../../components/seo'
import { I18nextProvider, withNamespaces } from "react-i18next"
import i18n from '../../data/translations'

import {
    SectionContainer,
    MembersContainer,
    BoxMembers,
    OurValuesContainer,
    ContentValues,
    MissionContainer,
    Mission,
    Content,
    ImgContent,
    Vision,
} from '../../styles/about-us/styledComponents';
import {
    H3,
    PageSizer,
} from '../../components/styledComponents'

class IndexPage extends Component {

    renderTeamMembers = () => {
        const {
            data: {
                site: {
                    siteMetadata: {
                        aboutUs: {
                            team,
                        }
                    }
                }
            },
            data,
            t
        } = this.props;

        return team.map((member) => (
          <MemberCard
            key = { member.id }
            image = { data[member.id].childImageSharp.sizes }
            name = { member.fullName }
            position = { t(`aboutUs.team.members.${member.id}.position`) }
            message1 = { t(`aboutUs.team.members.${member.id}.message1`) }
            socialMedia = { member.socialMedia }
          />
        ));
    }

    renderOurValues = () => {
        const {
            data: {
                site: {
                    siteMetadata: {
                        aboutUs: {
                            ourValues,
                        }
                    }
                }
            },
            data,
            t
        } = this.props;
        const newArray = ourValues.map((item) => {
            const {
                id,
            } = item;

            return (
              <OurValues
                key = { id }
                description = { t(`aboutUs.ourValues.${id}.description`) }
                title = { t(`aboutUs.ourValues.${id}.title`) }
                image = { data[`value${id}`].childImageSharp.sizes }
              />
            )
        });
        return newArray;
    }

    render() {
        const {
            data: {
                site: {
                    siteMetadata: {
                        aboutUs: {
                            getAQuote: {
                                urlGetAQuote
                            },
                        },
                        home: {
                            offices,
                        },
                    },
                },
            },
            data,
            t
        } = this.props;

        return (
          <I18nextProvider i18n={i18n}>
            <Layout>
              <SEO
                title={`Sancrisoft | ${t('aboutUs.title')}`}
                keywords={['sancrisoft', 'digital-solutions']}
                description="page about"
              />
              <section>
                <BigGreyImage
                  image={data.aboutUsMainImage.childImageSharp.sizes}
                  title={t('aboutUs.bigImage.title')}
                  description={t('aboutUs.bigImage.description')}
                />
              </section>
              <PageSizer>
                <SectionContainer>
                  <MembersContainer>
                    <Title
                      type={2}
                      text={t('aboutUs.team.title')}
                    />
                    <BoxMembers>{this.renderTeamMembers()}</BoxMembers>
                  </MembersContainer>
                  <OurValuesContainer>
                    <Title
                      type={2}
                      text={t('aboutUs.ourValueTitle')}
                    />
                    <ContentValues>{this.renderOurValues()}</ContentValues>
                  </OurValuesContainer>
                  <MissionContainer>
                    <H3>{t('aboutUs.visionMissionTitle')}</H3>
                    <Mission>
                      <Content>{t('aboutUs.mission')}</Content>
                      <ImgContent>
                        <Img
                          sizes={data.mission.childImageSharp.sizes}
                          style={{width: '50%'}}
                        />
                      </ImgContent>
                    </Mission>
                    <Vision>
                      <ImgContent>
                        <Img
                          sizes={data.vision.childImageSharp.sizes}
                          style={{width: '50%'}}
                        />
                      </ImgContent>
                      <Content>{ReactHtmlParser(t('aboutUs.vision'))}</Content>
                    </Vision>
                  </MissionContainer>
                </SectionContainer>
              </PageSizer>
              <GetAQuote desc={t('aboutUs.getAQuote.description')}>
                <Button
                  className="cta"
                  size="20px"
                  text={t('aboutUs.getAQuote.titleButton')}
                  onClick={() => navigate(urlGetAQuote)}
                />
              </GetAQuote>
            </Layout>
          </I18nextProvider>
        );
    }
}

// Queries for images (One query by image)
export const query = graphql `
query aboutUs {
  aboutUsMainImage:file(relativePath: { eq: "aboutUs/team.jpg" }) {
    ...imageFragment
  }
  jhony:file(relativePath: { eq: "aboutUs/team/jhony.jpg" }) {
    ...imageFragment
  }
  johan:file(relativePath: { eq: "aboutUs/team/johan.jpg" }) {
    ...imageFragment
  }
  carlos:file(relativePath: { eq: "aboutUs/team/carlos.jpg" }) {
    ...imageFragment
  }
  alejo:file(relativePath: { eq: "aboutUs/team/alejo.jpg" }) {
    ...imageFragment
  }
  juan:file(relativePath: { eq: "aboutUs/team/juan.jpg" }) {
    ...imageFragment
  }
  samuel:file(relativePath: { eq: "aboutUs/team/samuel.jpg" }) {
    ...imageFragment
  }
  bryan:file(relativePath: { eq: "aboutUs/team/bryan.jpg" }) {
    ...imageFragment
  }
  john:file(relativePath: { eq: "aboutUs/team/john.jpg" }) {
    ...imageFragment
  }
  valueintegrity:file(relativePath: { eq: "aboutUs/values/integrity.png" }) {
    ...imageFragment
  }
  valuecommitment:file(relativePath: { eq: "aboutUs/values/commitment.png" }) {
    ...imageFragment
  }
  valuehappiness:file(relativePath: { eq: "aboutUs/values/happiness.png" }) {
    ...imageFragment
  }
  valueexcellence:file(relativePath: { eq: "aboutUs/values/excellence.png" }) {
    ...imageFragment
  }
  valuekindness:file(relativePath: { eq: "aboutUs/values/kindness.png" }) {
    ...imageFragment
  }
  valuegratitude:file(relativePath: { eq: "aboutUs/values/gratitude.png" }) {
    ...imageFragment
  }
  vision:file(relativePath: { eq: "aboutUs/vision.png" }) {
    ...imageFragment
  }
  mission:file(relativePath: { eq: "aboutUs/mission.png" }) {
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
        getAQuote {
          urlGetAQuote
        },
      }
      home {
        offices {
          id
          title
          address1
          address2
          phone
          state
          postalCode
          latitude
          longitude
        }
      }
    }
  }
}
`;

export default withNamespaces('translations')(IndexPage)
