import React, {Component} from 'react'
import { graphql, navigate } from 'gatsby'
import { I18nextProvider, withNamespaces } from "react-i18next"

import BigGreyImage from '../../components/bigGreyImage'
import Layout from '../../components/layout'
import GetAQuote from '../../components/getAQuote'
import Button from '../../components/button'
import SEO from '../../components/seo'
import i18n from '../../data/translations'

import {
  ContentCase,
} from '../../styles/case-studies/styledComponents';

class IndexPage extends Component {
  render() {
    const {
      data: {
        site: {
          siteMetadata: {
            caseStudies: {
              getAQuote: {
                urlGetAQuote
              }
            }
          }
        }
      },
      data,
      t
    } = this.props;
    return (
      <I18nextProvider i18n={i18n}>
        <Layout>
          <SEO title={`Sancrisoft | ${t('caseStudies.title')}`} keywords={['sancrisoft', 'digital-solutions']} />
            <section>
              <BigGreyImage
                image={data.careersMainImage.childImageSharp.sizes}
                title={t('caseStudies.bigImage.title')}
                description={t('caseStudies.bigImage.description')}
              />
            </section>
          <ContentCase>

            <GetAQuote
              desc={t('caseStudies.getAQuote.description')}
            >
              <Button
                size="20px"
                text={t('caseStudies.getAQuote.titleButton')}
                onClick={ () => navigate(urlGetAQuote)}
              />
            </GetAQuote>

          </ContentCase>
        </Layout>
      </I18nextProvider>
    );
  }
}

// Queries for images (One query by image)
export const query = graphql`
query caseStudiesMain {
  careersMainImage:file(relativePath: { eq: "careers/work.jpg" }) {
    ...imageFragment
  }
  meattogo:file(relativePath: { eq: "home/meattogo.png" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      caseStudies {
        getAQuote {
          urlGetAQuote
        },
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

export default withNamespaces('translations')(IndexPage)
