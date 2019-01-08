import React, {Component} from 'react'
// import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { I18nextProvider, translate } from "react-i18next"
import i18n from '../../data/translations'

class IndexPage extends Component {
  render() {
    const {
      t
    } = this.props;

    return (
      <I18nextProvider i18n={i18n}>
        <Layout>
          <SEO title={`Sancrisoft | ${t('caseStudies.title')}`} keywords={['sancrisoft', 'digital-solutions']} />
        </Layout>
      </I18nextProvider>
    );
  }
}

// Queries for images (One query by image)


export default translate("translations")(IndexPage)
