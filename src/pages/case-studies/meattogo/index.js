import React, {Component} from 'react'
import { graphql } from 'gatsby'
import { I18nextProvider, withNamespaces } from "react-i18next"

import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import Title from '../../../components/title'
import CasesImage from '../../../components/casesImage'
import Background from '../../../components/casesBackground'
import About from '../../../components/casesAbout'
import Tecnology from '../../../components/casesTecnology'
import Similar from '../../../components/SimilarProyects'
import i18n from '../../../data/translations'

import ImagePhone from '../../../images/cases-studies/meattogo/Meattogo.gif'
import {
  ContentCase,
  CasePageSizer,
  ContentBack,
  ContentAbout,
  ContentTecnology,
  ContentSimilar,
  Tecnologies
} from '../../../styles/case-studies-meattogo/styledComponents';

class IndexPage extends Component {

  renderCases = () => {
    const {
      data: {
        site: {
          siteMetadata: {
            caseStudies: {
              cases,
            }
          }
        }
      },
      data,
      t
    } = this.props;
    const meattogo = cases.find(item => item.id === "meattogo");
    const {
      id,
      name,
      appStore,
      playStore
    } = meattogo;
    return (
      <CasesImage
        key={id}
        title={name}
        description={t(`caseStudies.cases.meattogo.description`)}
        image={data.meattogo.childImageSharp.sizes}
        playStore={data.playStore.childImageSharp.sizes}
        linkPlayStore={playStore}
        appStore={data.appStore.childImageSharp.sizes}
        linkAppStore={appStore}
        phone={ImagePhone}
      />
    );
  }

  renderCasesAbout = () => {
    const {
      data: {
        site: {
          siteMetadata: {
            caseStudies: {
              about,
            }
          }
        }
      },
      t
    } = this.props;

    const meattogo = about.find(item => item.id === "meattogo");
    const {
      id,
      networkApp,
      services,
      features
    } = meattogo;

    const service = services.map((item) => {
      return(t(`caseStudies.about.meattogo.services.${item.id}`))
    })
    const feature = features.map((item) => {
      return(t(`caseStudies.about.meattogo.features.${item.id}`))
    })

    return (
      <About
        id={id}
        urlNetwork={networkApp}
        name={t(`caseStudies.about.title`)}
        description={t(`caseStudies.about.meattogo.description`)}
        services={service}
        titleServices={t(`caseStudies.about.meattogo.services.title`)}
        features={feature}
        titleFeatures={t(`caseStudies.about.meattogo.features.title`)}
      />
    );
  }

  renderCasesTecnologies = () => {
    const {
      data: {
        site: {
          siteMetadata: {
            caseStudies: {
              tecnologies,
            }
          }
        }
      },
      data,
    } = this.props;
    const meattogo = tecnologies.find(item => item.id === "meattogo");
    return meattogo.logos.map((item) => (
      <Tecnology
        key={item.id}
        text={item.text}
        image={data[item.id].childImageSharp.sizes}
      />
    ));
  }

  renderCasesSimilar = () => {
    const {
      location: {
        hash
      },
      data: {
        site: {
          siteMetadata: {
            caseStudies: {
              proyects,
            }
          }
        }
      },
      data,
    } = this.props;

    let item = proyects.sort(function() { return 0.5 - Math.random() });
    let newArray = [];

    if (hash === "#seeall") {
      newArray = item.slice(0, 3);
    } else {
      newArray = item.filter(item => item.private === false).slice(0, 3);
    }

    return newArray.map((item) => (
      <Similar
        key={item.id}
        name={item.name}
        type={item.typeProyect}
        link={item.link}
        image={data.team.childImageSharp.sizes}
      />
    ));
  }

  render() {
    const {
      data,
      t
    } = this.props;

    return (
      <I18nextProvider i18n={i18n}>
        <Layout>
          <SEO title={`Sancrisoft | ${t('caseStudies.title')}`} keywords={['sancrisoft', 'digital-solutions']} />
          <ContentCase>

            <CasePageSizer>
              { this.renderCases() }
            </CasePageSizer>

            <ContentBack>
              <Background
                image={data.BackgroundMeattogo.childImageSharp.sizes}
              />
            </ContentBack>

            <ContentAbout>
              { this.renderCasesAbout() }
            </ContentAbout>

            <ContentTecnology>
              <Title
                type={2}
                text={t('caseStudies.tecnologies.title')}
              />
              <Tecnologies>
                { this.renderCasesTecnologies() }
              </Tecnologies>
            </ContentTecnology>

            <ContentSimilar>
              { this.renderCasesSimilar() }
            </ContentSimilar>

          </ContentCase>
      </Layout>
      </I18nextProvider>
    );
  }
}

// Queries for images (One query by image)
export const query = graphql`
query caseStudies {
  meattogo:file(relativePath: { eq: "home/meattogo.png" }) {
    ...imageFragment
  }
  playStore:file(relativePath: { eq: "cases-studies/playStore.png" }) {
    ...imageFragment
  }
  appStore:file(relativePath: { eq: "cases-studies/appStore.png" }) {
    ...imageFragment
  }
  BackgroundMeattogo:file(relativePath: { eq: "cases-studies/meattogo/Bg-Meattogo.png" }) {
    ...imageFragment
  }
  nodeJs:file(relativePath: { eq: "cases-studies/meattogo/nodeJs.png" }) {
    ...imageFragment
  }
  swagger:file(relativePath: { eq: "cases-studies/meattogo/swagger.png" }) {
    ...imageFragment
  }
  reactN:file(relativePath: { eq: "cases-studies/meattogo/reactNative.png" }) {
    ...imageFragment
  }
  mailgun:file(relativePath: { eq: "cases-studies/meattogo/mailgun.png" }) {
    ...imageFragment
  }
  ignite:file(relativePath: { eq: "cases-studies/meattogo/ignite.jpeg" }) {
    ...imageFragment
  }
  team:file(relativePath: { eq: "aboutUs/team.jpg" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      caseStudies {
        proyects {
          id
          name
          typeProyect
          private
          link
        }
        cases {
          id
          name
          appStore
          playStore
        }
        about {
          id
          networkApp
          services {
            id
          }
          features {
            id
          }
        }
        tecnologies {
          id
          logos {
            id
            text
          }
        }
      }
    }
  }
}
`;

export default withNamespaces('translations')(IndexPage)
