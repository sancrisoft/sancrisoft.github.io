import React, { Component } from 'react'
import { graphql, navigate } from 'gatsby'
import { I18nextProvider, withNamespaces } from 'react-i18next'

import BigGreyImage from '../../components/bigGreyImage'
import Layout from '../../components/layout'
import GetAQuote from '../../components/getAQuote'
import Proyect from '../../components/Proyects'
import Carousel from '../../components/carousel'
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
  ContainerContactButton,
  MainContainer,
} from '../../styles/case-studies/styledComponents'

class IndexPage extends Component {
  renderItemProyect = () => {
    const {
      location: { hash },
      data: {
        site: {
          siteMetadata: {
            caseStudies: {
              cases,
              getAQuote: { urlGetAQuote },
            },
          },
        },
      },
      data,
      t,
    } = this.props
    
    return (
      <MainContainer>
        <ContainerProyect>
          {cases.map(item => (
            <Proyect
              key={item.id}
              name={item.name}
              image={data[item.thumbnail].childImageSharp.sizes}
              type={item.type}
              url={item.link}
              active={hash === '#seeall' ? false : item.private}
            />
          ))}
        </ContainerProyect>
        <ContainerContactButton>
          <BoxAboutFinal>
            <p>{t('caseStudies.proyects.textBox')}</p>
            <Button
              size="15px"
              text={t('caseStudies.proyects.titleButton')}
              onClick={() => navigate(urlGetAQuote)}
            />
          </BoxAboutFinal>
        </ContainerContactButton>
      </MainContainer>
    )
  }

  renderLogos = () => {
    const {
      location: { hash },
      data: {
        site: {
          siteMetadata: {
            caseStudies: { logos },
          },
        },
      },
      data,
    } = this.props
    return (
      <ContainerLogos>
        <Carousel
          dots={false}
          slidesToShow={4}
          arrowColor="#F28724"
          arrows={true}
          swipeToSlide={true}
          // autoplay
          // autoplaySpeed={6000}
          responsive={
            [
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 375,
                settings: {
                  slidesToShow: 2,
                  infinite: true,
                  dots: false
                }
              }
            ]
          }
        >
          {logos.map(item => (
            // !item.private ? 
            (<LogoSection
              key={item.id}
              name={item.name}
              image={data[item.id].childImageSharp.sizes}
              url={item.link}
              active={hash === '#seeall' ? false : item.private}
            />)
            // : null
        ))}
        </Carousel>
        
      </ContainerLogos>
    )
  }

  render() {
    const {
      data: {
        site: {
          siteMetadata: {
            caseStudies: {
              getAQuote: { urlGetAQuote },
            },
          },
        },
      },
      data,
      t,
    } = this.props
    return (
      <I18nextProvider i18n={i18n}>
        <Layout>
          <SEO
            title={`Sancrisoft | ${t('caseStudies.title')}`}
            keywords={['sancrisoft', 'digital-solutions']}
          />
          <section>
            <BigGreyImage
              image={data.caseStudiesMainImage.childImageSharp.sizes}
              title={t('caseStudies.bigImage.title')}
              description={t('caseStudies.bigImage.description')}
            />
          </section>
          <ContentCase>
            <ContentProyects>{this.renderItemProyect()}</ContentProyects>

            <ContentLogos>{this.renderLogos()}</ContentLogos>

            <GetAQuote desc={t('caseStudies.getAQuote.description')}>
              <Button
                size="20px"
                text={t('caseStudies.getAQuote.titleButton')}
                onClick={() => navigate(urlGetAQuote)}
              />
            </GetAQuote>
          </ContentCase>
        </Layout>
      </I18nextProvider>
    )
  }
}

// Queries for images (One query by image)
export const query = graphql`
  query caseStudiesMain {
    caseStudiesMainImage: file(
      relativePath: { eq: "cases-studies/case-studies.jpg" }
    ) {
      ...imageFragment
    }
    team: file(relativePath: { eq: "aboutUs/team.jpg" }) {
      ...imageFragment
    }
    double: file(relativePath: { eq: "cases-studies/double.png" }) {
      ...imageFragment
    }
    arena: file(relativePath: { eq: "cases-studies/arena.png" }) {
      ...imageFragment
    }
    skip: file(relativePath: { eq: "cases-studies/skip.png" }) {
      ...imageFragment
    }
    meattogo: file(relativePath: { eq: "cases-studies/meattogo.png" }) {
      ...imageFragment
    }
    lacochera: file(
      relativePath: { eq: "cases-studies/lacochera/LaCochera.png" }
    ) {
      ...imageFragment
    }
    hocmobile: file(
      relativePath: { eq: "cases-studies/hocmobile/hero.png" }
    ) {
      ...imageFragment
    }
    hero: file(
      relativePath: { eq: "cases-studies/hocmobile/hero.png" }
    ) {
      ...imageFragment
    }
    BackgroundMeattogo: file(
      relativePath: { eq: "cases-studies/meattogo/Bg-Meattogo.png" }
    ) {
      ...imageFragment
    }
    BackgroundLaCochera: file(
      relativePath: { eq: "cases-studies/lacochera/lacochera-main.png" }
    ) {
      ...imageFragment
    }
    pidealatiendahero: file(
      relativePath: { eq: "cases-studies/pidealatienda/hero.png" }
    ) {
      ...imageFragment
    }
    site {
      siteMetadata {
        caseStudies {
          logos {
            id
            name
            private
            link
          }
          getAQuote {
            urlGetAQuote
          }
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
          }
        }
      }
    }
  }
`

export default withNamespaces('translations')(IndexPage)
