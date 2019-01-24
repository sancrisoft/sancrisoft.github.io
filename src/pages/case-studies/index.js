import React, {Component} from 'react'
import { graphql, navigate } from 'gatsby'
import { I18nextProvider, withNamespaces } from "react-i18next"

import BigGreyImage from '../../components/bigGreyImage'
import Layout from '../../components/layout'
import GetAQuote from '../../components/getAQuote'
import Proyect from '../../components/Proyects'
import LogoSection from '../../components/logosSection'
import Button from '../../components/button'
import SEO from '../../components/seo'
import i18n from '../../data/translations'

import {
  ContainerProyect,
  ContentCase,
  ContentProyects,
  BoxAboutFinal,
  ContentLogos,
  ContainerLogos,
} from '../../styles/case-studies/styledComponents';

class IndexPage extends Component {

  renderItemProyect =() => {
    const {
      location: {
        hash,
      },
      data: {
        site: {
          siteMetadata: {
            caseStudies: {
              proyects,
              getAQuote: {
                urlGetAQuote
              }
            }
          }
        }
      },
      data
    } = this.props;

    return (
      <ContainerProyect>
        {
          proyects.map((item) => (
              <Proyect
                key={item.id}
                name={item.name}
                image={data.team.childImageSharp.sizes}
                type={item.typeProyect}
                url={item.link}
                active={(hash === "#seall") ? false : item.private}
              />
          ))
        }
        <BoxAboutFinal>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quae nihil, blanditiis vero fuga voluptates
            inventore illo rem quam velit!</p>
            <Button
              size="18px"
              text="Contact Us"
              onClick={ () => navigate(urlGetAQuote)}
            />
        </BoxAboutFinal>
      </ContainerProyect>
    );
  }

  renderLogos =() => {
    const {
      data: {
        site: {
          siteMetadata: {
            caseStudies: {
              logos,
            }
          }
        }
      },
      data
    } = this.props;

    return (
      <ContainerLogos>
        {
          logos.map((item) => (
            <LogoSection
              key={item.id}
              name={item.name}
              image={data[item.id].childImageSharp.sizes}
            />
          ))
        }
      </ContainerLogos>
    );
  }

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
            <ContentProyects>
              { this.renderItemProyect() }
            </ContentProyects>

            <ContentLogos>
              { this.renderLogos() }
            </ContentLogos>

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
  team:file(relativePath: { eq: "aboutUs/team.jpg" }) {
    ...imageFragment
  }
  double:file(relativePath: { eq: "cases-studies/double.png" }) {
    ...imageFragment
  }
  arena:file(relativePath: { eq: "cases-studies/arena.png" }) {
    ...imageFragment
  }
  logo500:file(relativePath: { eq: "cases-studies/logo500.png" }) {
    ...imageFragment
  }
  enter:file(relativePath: { eq: "cases-studies/enter.png" }) {
    ...imageFragment
  }
  cc:file(relativePath: { eq: "cases-studies/cc.png" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      caseStudies {
        proyects {
          id
          name
          typeProyect
          private
          link
        }
        logos {
          id
          name
        }
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
