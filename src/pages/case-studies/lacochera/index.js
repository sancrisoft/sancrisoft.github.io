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
import i18n from '../../../data/translations'

import ImagePhone from '../../../images/cases-studies/lacochera/lacochera-bg.png'
import {
  ContentCase,
  CasePageSizer,
  ContentBack,
  ContentAbout,
  ContentTecnology,
  Tecnologies
} from '../../../styles/case-studies-lacochera/styledComponents';

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
    const cochera = cases.find(item => item.id === "lacochera");
    const {
      id,
      name,
      weblink
    } = cochera;
    return (
      <CasesImage
        key={id}
        title={name}
        widthImage={'200px'}
        description={t(`caseStudies.cases.lacochera.description`)}
        image={data.lacocheralogo.childImageSharp.sizes}
        phone={ImagePhone}
        weblink={weblink}
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

    const lacochera = about.find(item => item.id === "lacochera");
    const {
      networkApp,
      services,
      features
    } = lacochera;

    const service = services.map((item) => {
      return(t(`caseStudies.about.lacochera.services.${item.id}`))
    })
    const feature = features.map((item) => {
      return(t(`caseStudies.about.lacochera.features.${item.id}`))
    })

    return (
      <About
        id={"La Cochera"}
        urlNetwork={networkApp}
        name={t(`caseStudies.about.title`)}
        description={t(`caseStudies.about.lacochera.description`)}
        services={service}
        titleServices={t(`caseStudies.about.lacochera.services.title`)}
        features={feature}
        titleFeatures={t(`caseStudies.about.lacochera.features.title`)}
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
    const lacochera = tecnologies.find(item => item.id === "lacochera");
    return lacochera.logos.map((item) => (
      <Tecnology
        key={item.id}
        text={item.text}
        image={data[item.id].childImageSharp.sizes}
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
                image={data.BackgroundLaCochera.childImageSharp.sizes}
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
          </ContentCase>
      </Layout>
      </I18nextProvider>
    );
  }
}

// Queries for images (One query by image)
export const query = graphql`
query lacochera {
  lacocheralogo:file(relativePath: { eq: "cases-studies/lacochera/LaCochera.png" }) {
    ...imageFragment
  }
  lacocherabg:file(relativePath: { eq: "cases-studies/lacochera/la-cochera-bg.png" }) {
    ...imageFragment
  }
  playStore:file(relativePath: { eq: "cases-studies/playStore.png" }) {
    ...imageFragment
  }
  appStore:file(relativePath: { eq: "cases-studies/appStore.png" }) {
    ...imageFragment
  }
  BackgroundLaCochera:file(relativePath: { eq: "cases-studies/lacochera/lacochera-main.png" }) {
    ...imageFragment
  }
  nodeJs:file(relativePath: { eq: "cases-studies/lacochera/nodeJs.png" }) {
    ...imageFragment
  }
  react:file(relativePath: { eq: "cases-studies/lacochera/react.png" }) {
    ...imageFragment
  }
  redux:file(relativePath: { eq: "cases-studies/lacochera/redux.png" }) {
    ...imageFragment
  }
  aws:file(relativePath: { eq: "cases-studies/lacochera/aws.png" }) {
    ...imageFragment
  }
  loopback:file(relativePath: { eq: "cases-studies/lacochera/loopback.png" }) {
    ...imageFragment
  }
  elasticsearch:file(relativePath: { eq: "cases-studies/lacochera/elasticsearch.png" }) {
    ...imageFragment
  }
  styled:file(relativePath: { eq: "cases-studies/lacochera/styled.png" }) {
    ...imageFragment
  }
  webpack:file(relativePath: { eq: "cases-studies/lacochera/webpack.png" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      caseStudies {
        cases {
          id
          name
          appStore
          playStore
          weblink
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
