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

import ImagePhone from '../../../images/cases-studies/hocmobile/hero.png'
import {
  ContentCase,
  CasePageSizer,
  ContentBack,
  ContentAbout,
  ContentTecnology,
  ContentSimilar,
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
    const cochera = cases.find(item => item.id === "hocmobile");
    const {
      id,
      name,
      playStore,
      appStore,
      weblink,
    } = cochera;
    return (
      <CasesImage
        key={id}
        title={name}
        widthImage={'200px'}
        description={t(`caseStudies.cases.hocmobile.brief`)}
        image={data.hocmobilelogo.childImageSharp.sizes}
        phone={ImagePhone}
        weblink={weblink}
        weblinkTitle={t(`caseStudies.cases.hocmobile.weblinkTitle`)}
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

    const hocmobile = cases.find(item => item.id === "hocmobile");
    const {
      services,
      features
    } = hocmobile;

    const service = services.map((item) => {
      return(t(`caseStudies.cases.hocmobile.services.${item.id}`))
    })
    const feature = features.map((item) => {
      return(t(`caseStudies.cases.hocmobile.features.${item.id}`))
    })

    return (
      <About
        name={t(`caseStudies.cases.hocmobile.aboutTitle`)}
        description={t(`caseStudies.cases.hocmobile.description`)}
        services={service}
        titleServices={t(`caseStudies.cases.hocmobile.services.title`)}
        features={feature}
        titleFeatures={t(`caseStudies.cases.hocmobile.features.title`)}
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
    const hocmobile = cases.find(item => item.id === "hocmobile");
    return hocmobile.technologies.map((item) => (
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
                image={data.hocmobilemiddle.childImageSharp.sizes}
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
query hocmobile {
  hocmobilelogo:file(relativePath: { eq: "cases-studies/hocmobile/logo.png" }) {
    ...imageFragment
  }
  hocmobilehero:file(relativePath: { eq: "cases-studies/hocmobile/hero.png" }) {
    ...imageFragment
  }
  hocmobilemiddle:file(relativePath: { eq: "cases-studies/hocmobile/middle-section.png" }) {
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
  reactN:file(relativePath: { eq: "cases-studies/meattogo/reactNative.png" }) {
    ...imageFragment
  }
  ignite:file(relativePath: { eq: "cases-studies/meattogo/ignite.jpeg" }) {
    ...imageFragment
  }
  redux:file(relativePath: { eq: "cases-studies/lacochera/redux.png" }) {
    ...imageFragment
  }
  firebase:file(relativePath: { eq: "cases-studies/hocmobile/firebase.png" }) {
    ...imageFragment
  }
  webpack:file(relativePath: { eq: "cases-studies/lacochera/webpack.png" }) {
    ...imageFragment
  }
  BackgroundMeattogo:file(relativePath: { eq: "cases-studies/meattogo/Bg-Meattogo.png" }) {
    ...imageFragment
  }
  pidealatiendahero:file(relativePath: { eq: "cases-studies/pidealatienda/hero.png" }) {
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
