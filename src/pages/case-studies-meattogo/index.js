import React, {Component} from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { I18nextProvider, translate } from "react-i18next"
import i18n from '../../data/translations'

import {
  ContentCase,
  CasePageSizer
} from './styledComponents'

class IndexPage extends Component {
  render() {
    const {
      data:{
        site: {
          siteMetadata: {
            caseStudies: {
              cases,
            },
          },
        },
      },
      t
    } = this.props;
    console.log(this.props);

    return (
      <I18nextProvider i18n={i18n}>
        <Layout>
          <SEO title={`Sancrisoft | ${t('caseStudies.title')}`} keywords={['sancrisoft', 'digital-solutions']} />
          <ContentCase>
            <CasePageSizer>
              case content
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
  site {
    siteMetadata {
      caseStudies {
        cases {
          id
        }
      }
    }
  }
}
`;

export default translate("translations")(IndexPage)
