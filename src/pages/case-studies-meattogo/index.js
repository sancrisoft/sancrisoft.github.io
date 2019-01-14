import React, {Component} from 'react'
import { graphql } from 'gatsby'
import { I18nextProvider, translate } from "react-i18next"

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import CasesImage from '../../components/casesImage'
import Background from '../../components/casesBackground'
import About from '../../components/casesAbout'
import Tecnology from '../../components/casesTecnology'
import i18n from '../../data/translations'

import ImagePhone from '../../images/cases-studies/meattogo/Meattogo.gif'
import {
  ContentCase,
  CasePageSizer,
  ContentBack,
  ContentAbout,
  ContentTecnology
} from '../../styles/case-studies-meattogo/styledComponents';

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
      networkApp
    } = meattogo;
    return (
      <About
        id={id}
        urlNetwork={networkApp}
        name={t(`caseStudies.about.title`)}
        description={t(`caseStudies.about.meattogo.description`)}
      />
    );
  }

  renderCasesTecnologies = () => {
    const {
      t
    } = this.props;
    return(
      <Tecnology
        title={t(`caseStudies.tecnologies.title`)}
      />
    );
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
              { this.renderCasesTecnologies() }
            </ContentTecnology>
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
  site {
    siteMetadata {
      caseStudies {
        cases {
          id
          name
          appStore
          playStore
        }
        about {
          id
          networkApp
        }
      }
    }
  }
}
`;

export default translate("translations")(IndexPage)
