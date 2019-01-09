import React, {Component} from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import CasesImage from '../../components/casesImage'
import { I18nextProvider, translate } from "react-i18next"
import i18n from '../../data/translations'

import {
  ContentCase,
  CasePageSizer
} from './styledComponents'

class IndexPage extends Component {
<<<<<<< HEAD

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
    return (
      <CasesImage
        key={meattogo.id}
        title={meattogo.name}
        description={t(`caseStudies.cases.meattogo.description`)}
        image={data.meattogo.childImageSharp.sizes}
        playStore={data.playStore.childImageSharp.sizes}
        linkPlayStore={meattogo.playStore}
        appStore={data.appStore.childImageSharp.sizes}
        linkAppStore={meattogo.appStore}
      />
    );
  }
=======
  render() {
    const { t } = this.props;
    console.log(this.props);
>>>>>>> 2019

  render() {
    const {
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
  site {
    siteMetadata {
      caseStudies {
        cases {
          id
          name
          appStore
          playStore
        }
      }
    }
  }
}
`;

export default translate("translations")(IndexPage)
