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
        description={t(`caseStudies.cases.meattogo.brief`)}
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
              cases,
            }
          }
        }
      },
      t
    } = this.props;

    const meattogo = cases.find(item => item.id === "meattogo");
    const {
      services,
      features
    } = meattogo;

    const service = services.map((item) => {
      return(t(`caseStudies.cases.meattogo.services.${item.id}`))
    })
    const feature = features.map((item) => {
      return(t(`caseStudies.cases.meattogo.features.${item.id}`))
    })

    return (
      <About
        name={t(`caseStudies.cases.meattogo.aboutTitle`)}
        description={t(`caseStudies.cases.meattogo.description`)}
        services={service}
        titleServices={t(`caseStudies.cases.meattogo.services.title`)}
        features={feature}
        titleFeatures={t(`caseStudies.cases.meattogo.features.title`)}
      />
    );
  }

  renderCasesTecnologies = () => {
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
    } = this.props;
    const meattogo = cases.find(item => item.id === "meattogo");
    return meattogo.technologies.map((item) => (
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
        hash,
        pathname,
      },
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
    } = this.props;

    const [,, projectName] = pathname.split('/')

    let item = cases.sort(function() { return 0.5 - Math.random() });
    let newArray = [];

    if (hash === "#seeall") {
      newArray = item.slice(0, 3);
    } else {
      newArray = item.filter(item => item.private === false && item.id !== projectName).slice(0, 3);
    }

    return newArray.map((item) => (
      <Similar
        key={item.id}
        name={item.name}
        type={item.type}
        link={item.link}
        image={data[item.thumbnail].childImageSharp.sizes}
      />
    ));
  }

  render() {
    const {
      data,
      t,
      location: {
        pathname,
      },
    } = this.props;
    const [,, projectName] = pathname.split('/')
    return (
      <I18nextProvider i18n={i18n}>
        <Layout>
          <SEO title={`Sancrisoft | ${t(`caseStudies.cases.${projectName}.title`)}`} keywords={['sancrisoft', 'digital-solutions']} />
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

            <Title
                type={2}
                text={t('caseStudies.seemore')}
              />
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
  BackgroundLaCochera:file(relativePath: { eq: "cases-studies/lacochera/lacochera-main.png" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      caseStudies {
        cases {
          id
          name
          thumbnail
          appStore
          playStore
          weblink
          type
          link
          private
          services {
            id
          }
          features {
            id
          }
          technologies {
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
