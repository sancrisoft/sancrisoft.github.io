import React from 'react'
import { graphql } from 'gatsby'
import BigGreyImage from '../../components/bigGreyImage'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { I18nextProvider, translate } from "react-i18next"
import i18n from '../../data/translations'

const IndexPage = ({ data, t }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <SEO title={`Sancrisoft | ${t('aboutUs.title')}`} keywords={['sancrisoft', 'digital-solutions']} />
        <section>
          <BigGreyImage 
            image={data.aboutUsMainImage.childImageSharp.sizes}
            title={t('aboutUs.bigImage.title')}
            description={t('aboutUs.bigImage.description')}
          />
        </section>
      </Layout>
    </I18nextProvider>
  );
}

// Queries for images (One query by image)
export const query = graphql`
query aboutUs {
  aboutUsMainImage:file(relativePath: { eq: "aboutUs/team.png" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      aboutUs {
        team {
          id
          fullName
          socialMedia {
            facebook
            twitter
            instagram
            linkedin
          }
        }
      }
    }
  }
}
`;

export default translate("translations")(IndexPage)