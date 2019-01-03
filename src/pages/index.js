import React, { Component } from 'react'
import {
  graphql,
} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/title';
import Testimonial from '../components/testimonial'
import FullItems from '../components/fullItems'
import Carousel from '../components/carousel'
import Footer from '../components/footer'
import ViewPort from '../components/HOC/withViewportHandler'
import { I18nextProvider } from "react-i18next"
import i18n from '../data/translations'
import { translate } from "react-i18next"

import { PageSizer } from '../components/styledComponents'
import MapSelector from '../components/mapSelector'
import Process from '../components/process'
import WeLove from '../components/weLove'
import GetAQuote from '../components/getAQuote'
import Button from '../components/button'
import {
  ContTestimonial,
  ContWeLove,
  WhatWeDo,
} from '../utils/styledComponents'

// const IndexPage = (props) => {
class IndexPage extends Component {

  state = {
    language: 'en',
  }

  renderItems = () => {
    const {
      data: {
        site: {
          siteMetadata: {
            home: {
              testimonials,
            }
          }
        }
      },
      data,
      t,
    } = this.props;

    const newArray = testimonials.map((item) => {
      const {
        id,
        name,
      } = item;

      return (
        <Testimonial
          key={id}
          name={name}
          description={t(`home.testimonials.${id}.description`)}
          title={t(`home.testimonials.${id}.title`)}
          image={data[`Testimonial${id}`].childImageSharp.sizes}
        />

      )
    });
    return newArray;

  }

  renderProcesses = () => {
    const {
      data: {
        site: {
          siteMetadata: {
            home: {
              processes,
            }
          }
        }
      },
      data
    } = this.props;
    return processes.map((process) => <Process key={process.id} data={data} process={process} />);
  }

  changeLanguage = (lng) => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  };
  setLanguage = (lang) => {
    this.setState({ language: lang }, () => this.changeLanguage(lang));
  }
  eventChangeLang = (event) => {
    this.setLanguage(event.target.value);
  }

  render() {
    const { language } = this.state;
    const {
      t,
      data,
      data: {
        site: {
          siteMetadata: {
            home: {
              offices,
              networks,
            }
          }
        }
      },
      viewport: {
        isMobileView,
        isTabletView
      }
    } = this.props;

    let slidesToShow = (isMobileView) ? 1 : 3;
    slidesToShow = (isTabletView) ? 2 : slidesToShow;

    return(
      <I18nextProvider i18n={i18n}>
        <Layout>
          <SEO title="Home" keywords={['sancrisoft', 'digital-solutions']} />
          <FullItems data={data} />
          <ContWeLove>
            <PageSizer>
              <Title
                type={2}
                text="We Love To See Our Clients Success"
              />
              <WeLove
                description={t('home.weLove.description')}
                title={t('home.weLove.title')}
                image={data[`meattogo`].childImageSharp.sizes}
              />
            </PageSizer>
          </ContWeLove>
          <ContTestimonial>
            <PageSizer>
              <Title
                type={2}
                color="#fff"
                text={t('home.testimonialsTitle')}
              />
              <Carousel
                dots
                slidesToShow={slidesToShow}
                arrowColor="#F28724"
                arrows={false}
                swipeToSlide={true}
                autoplay
                autoplaySpeed={6000}
                >
                  { this.renderItems() }
                </Carousel>
              </PageSizer>
            </ContTestimonial>
          <WhatWeDo>
            <Title
              type={2}
              text={t('home.processes.title')}
            />
            <div className="processes">
              { this.renderProcesses() }
            </div>
          </WhatWeDo>
          <GetAQuote
            desc={t('home.getAQuote.description')}
          >
            <Button />
          </GetAQuote>
          <MapSelector title={t('home.mapTitle')} offices={offices} />
          <Footer
            networks={networks}
            logo={data.logoSmall}
            language={language}
            changeLanguage={this.setLanguage}
            />
        </Layout>
      </I18nextProvider>
    )
  }

}

// Queries for images (One query by image)
export const query = graphql`
query homeQuery {
  logoSmall:file(relativePath: { eq: "small-logo.png" }) {
    ...imageFragment
  }
  office1:file(relativePath: { eq: "home/carousel/office-1.jpg" }) {
    ...imageFragment
  }
  office2:file(relativePath: { eq: "home/carousel/office-2.jpg" }) {
    ...imageFragment
  }
  office3:file(relativePath: { eq: "home/carousel/office-3.jpg" }) {
    ...imageFragment
  }
  office4:file(relativePath: { eq: "home/carousel/office-4.jpg" }) {
    ...imageFragment
  }
  Testimonial1:file(relativePath: { eq: "home/foto1.jpg" }) {
    ...imageFragment
  }
  Testimonial2:file(relativePath: { eq: "home/foto3.jpg" }) {
    ...imageFragment
  }
  Testimonial3:file(relativePath: { eq: "home/foto5.jpg" }) {
    ...imageFragment
  }
  Testimonial4:file(relativePath: { eq: "home/foto4.jpg" }) {
    ...imageFragment
  }
  Testimonial5:file(relativePath: { eq: "home/foto2.jpg" }) {
    ...imageFragment
  }
  Testimonial6:file(relativePath: { eq: "home/foto6.jpg" }) {
    ...imageFragment
  }
  react:file(relativePath: { eq: "home/react.png" }) {
    ...imageFragment
  }
  redux:file(relativePath: { eq: "home/redux.png" }) {
    ...imageFragment
  }
  material:file(relativePath: { eq: "home/material.png" }) {
    ...imageFragment
  }
  styled:file(relativePath: { eq: "home/styled.png" }) {
    ...imageFragment
  }
  webpack:file(relativePath: { eq: "home/webpack.png" }) {
    ...imageFragment
  }
  android:file(relativePath: { eq: "home/android.png" }) {
    ...imageFragment
  }
  ios:file(relativePath: { eq: "home/ios.png" }) {
    ...imageFragment
  }
  web:file(relativePath: { eq: "home/web.png" }) {
    ...imageFragment
  }
  mobile:file(relativePath: { eq: "home/mobile.png" }) {
    ...imageFragment
  }
  meattogo:file(relativePath: { eq: "home/meattogo.png" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      home {
        carousel {
          id
          type
          link
        },
        weLove {
          image
        },
        testimonials {
          id
          name
        },
        offices {
          id
          title
          address1
          address2
          state
          postalCode
          latitude
          longitude
        }
        processes {
          id
          technologies {
            id
            tooltip
            color
          }
        }
        networks {
          facebook
          instagram
          twitter
        }
      }
    }
  }
}
`;

export default translate('translations')(ViewPort(IndexPage))
