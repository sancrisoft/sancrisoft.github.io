import React, {Component} from 'react'
import { graphql } from 'gatsby'
import { I18nextProvider, translate } from "react-i18next"

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import i18n from '../../data/translations'

import {
  ContentCase,
} from './styledComponents'

class IndexPage extends Component {
  render() {
    const {
      t
    } = this.props;
    return (
      <I18nextProvider i18n={i18n}>
        <Layout>
          <SEO title={`Sancrisoft | ${t('caseStudies.title')}`} keywords={['sancrisoft', 'digital-solutions']} />
          <ContentCase>
          </ContentCase>
      </Layout>
      </I18nextProvider>
    );
  }
}

// Queries for images (One query by image)
export const query = graphql`
query caseStudiesMain {
  meattogo:file(relativePath: { eq: "home/meattogo.png" }) {
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
