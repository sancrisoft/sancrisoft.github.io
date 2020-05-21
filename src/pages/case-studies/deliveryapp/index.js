import React, {Component} from 'react'
import { graphql } from 'gatsby'
import { I18nextProvider, withNamespaces } from "react-i18next"
import ReCAPTCHA from "react-google-recaptcha"
import SweetAlert from 'sweetalert2-react'
import axios from 'axios'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import Title from '../../../components/title'
import CasesImage from '../../../components/casesImage'
import Background from '../../../components/casesBackground'
import About from '../../../components/casesAbout'
import Tecnology from '../../../components/casesTecnology'
import Similar from '../../../components/SimilarProyects'
import i18n from '../../../data/translations'

import ImagePhone from '../../../images/cases-studies/deliveryapp/hero.png'
import {
  ContentCase,
  CasePageSizer,
  ContentBack,
  ContentAbout,
  ContentTecnology,
  ContentSimilar,
  Tecnologies,
  SectionForm
} from '../../../styles/case-studies-delivery-app/styledComponents';
import { object } from 'prop-types'

const recaptchaRef = React.createRef();

class IndexPage extends Component {
  
  state = {
    name: '',
    company: '',
    replyto: '',
    phone: '',
    youSell: {
      instagram: {
        text: "Instagram",
        active: false
      },
      whatsapp: {
        text: "Whatsapp",
        active: false
      },
      byPhone: {
        text: 'Por Teléfono',
        active: false
      },
      inPerson: {
        text: 'Presencialmente',
        active: false
      },
    },
    message: '',
    send: false,
    showAlert: false,
    typeAlert: 'success',
    alertMessage: '',
    titleAlert: 'Message',
    sortedCases: []
  }

  componentDidMount = () => {
    const {
      data: {
        site: {
          siteMetadata: {
            caseStudies: {
              cases,
            }
          }
        }
      }
    } = this.props;
    let items = cases.sort(function() { return 0.5 - Math.random() });
    this.setState({ sortedCases: items })
  }


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
    const deliver = cases.find(item => item.id === "deliveryapp");
    const {
      id,
      name,
      playStore,
      appStore,
      weblink,
    } = deliver;
    return (
      <CasesImage
        key={id}
        title={name}
        widthImage={'200px'}
        description={t(`caseStudies.cases.deliveryapp.brief`)}
        image={data.deliveryapplogo.childImageSharp.sizes}
        phone={ImagePhone}
        weblink={weblink}
        weblinkTitle={t(`caseStudies.cases.deliveryapp.weblinkTitle`)}
        playStore={data.playStore.childImageSharp.sizes}
        linkPlayStore={playStore}
        appStore={data.appStore.childImageSharp.sizes}
        linkAppStore={appStore}
      />
    );
  }

  renderCasesAbout = () => {
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
      t
    } = this.props;

    const deliveryapp = cases.find(item => item.id === "deliveryapp");
    const {
      services,
      features
    } = deliveryapp;

    const service = services.map((item) => {
      return(t(`caseStudies.cases.deliveryapp.services.${item.id}`))
    })
    const feature = features.map((item) => {
      return(t(`caseStudies.cases.deliveryapp.features.${item.id}`))
    })

    return (
      <About
        name={t(`caseStudies.cases.deliveryapp.aboutTitle`)}
        description={t(`caseStudies.cases.deliveryapp.description`)}
        services={service}
        titleServices={t(`caseStudies.cases.deliveryapp.services.title`)}
        features={feature}
        titleFeatures={t(`caseStudies.cases.deliveryapp.features.title`)}
      />
    );
  }

  renderCasesTecnologies = () => {
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
    } = this.props;
    const deliveryapp = cases.find(item => item.id === "deliveryapp");

    return deliveryapp.technologies.map((item) => (
      <Tecnology
        key={item.id}
        text={item.text}
        image={data[item.id].childImageSharp.sizes}
      />
    ));
  }

  renderCasesSimilar = () => {
    const {
      location: {
        hash,
        pathname,
      },
      data,
    } = this.props;
    const { sortedCases: item } = this.state

    const [,, projectName] = pathname.split('/')

    let newArray = [];

    if (hash === "#seeall") {
      newArray = item.slice(0, 3);
    } else {
      newArray = item.filter(item => item.private === false && item.id !== projectName).slice(0, 3);
    }

    return newArray.map((item) => (
      <Similar
        key={item.id}
        name={item.name}
        type={item.type}
        link={item.link}
        image={data[item.thumbnail].childImageSharp.sizes}
      />
    ));
  }

  closeAlert = () => {
    this.setState({ showAlert: false });
  }

  // Validations Form
  handleChange = (event) => {
    const {
        target: {
          name,
          value,
        }
    } = event;
    this.setState({[name]: value});
  }

  validateForm = () => {
    const { name, company, replyto, message } = this.state;
    if(name === '') return false;
    if(company === '') return false;
    if(replyto === '' || !this.validateEmail(replyto)) return false;
    if(message === '') return false;
    return true;
  }

  handleSubmit = (e) => {
    this.setState({ send: true});
    e.preventDefault();
    if(this.validateForm()){
      recaptchaRef.current.execute();
    }
  }

  validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }

  handleToggle = (event) => {
    const {
      target: {
        name,
      }
    } = event;

    this.setState(state => ({
      ...state,
      youSell:{
        ...state.youSell,
        [name]: {
          ...state.youSell[name],
          active: !state.youSell[name].active
        } 
      }
    }));
  }

  onChange = (value) => {
    const comp = this;
    const { t } = this.props;
    const { name, company, youSell, replyto, phone, message } = this.state;

    const youSellData = Object.keys(youSell).filter(item => {
      return youSell[item].active && item;
    })

    if(value) {
      const opts = {
        subject: t('caseStudies.cases.deliveryapp.form.interestFormTitle'), 
        name,
        company,
        replyto,
        youSellData,
        phone,
        message,
      };

      axios.post(
        "https://submit-form.com/BXef95h140v6_B6pU1irm", 
        opts, 
        {headers: {"Accept": "application/json"}}
      )
      .then(function (response) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'form_submitted',
            'category': 'Delivery App',
            'subject': name
        });
        recaptchaRef.current.props.grecaptcha.reset();
        comp.setState({ send: false, name: '', company: '', replyto: '', phone: '', youSellData: '', message: '', titleAlert: t('getQuote.form.sentMessage'), typeAlert: 'success', alertMessage: '', showAlert: true, });
      })
      .catch(function (error) {
        recaptchaRef.current.props.grecaptcha.reset();
        comp.setState({ titleAlert: t('getQuote.form.descriptionError'), typeAlert: 'info', alertMessage: t('getQuote.form.descriptionError'), showAlert: true });
      });
    }
  }

  render() {
    const {
      data,
      t,
      location: {
        pathname,
      },
    } = this.props;

    const { name, company, send, replyto, message, phone, showAlert, titleAlert, typeAlert, alertMessage } = this.state;
    const isInValidName = (name === '' && send);
    const isInValidCompany = (company === '' && send);
    const isInValidMessage = (message === '' && send);
    const showErrorEmail = (replyto !== '' && !this.validateEmail(replyto)) || (replyto === '' && send);
    const emailValidationMessage = (showErrorEmail && replyto !== '') ? t('caseStudies.cases.deliveryapp.form.errorValidEmail') : t('caseStudies.cases.deliveryapp.form.errorFieldEmail');

    const [,, projectName] = pathname.split('/')
    return (
      <I18nextProvider i18n={i18n}>
        <Layout>
          <SEO title={`${t(`caseStudies.cases.${projectName}.title`)}`} keywords={['sancrisoft', 'digital-solutions']} description="case deliveryapp" />
          <ContentCase>
            <CasePageSizer>
              { this.renderCases() }
            </CasePageSizer>
            <ContentBack>
              <Background
                image={data.deliveryappmiddle.childImageSharp.sizes}
              />
            </ContentBack>
            <ContentAbout>
              { this.renderCasesAbout() }
            </ContentAbout>
            <ContentTecnology>
              <Title
                type={2}
                text={t('caseStudies.tecnologies.title')}
              />
              <Tecnologies>
                { this.renderCasesTecnologies() }
              </Tecnologies>
            </ContentTecnology>

            <Title
              type={2}
              text={t('caseStudies.seemore')}
            />
            <ContentSimilar>
              { this.renderCasesSimilar() }
            </ContentSimilar>


            <SectionForm>
              <Title
                type={3}
                text={t('caseStudies.cases.deliveryapp.form.title')}
              />

              <form  ref={(form) => this.form = form} className="form contact_form"  method="POST" action="http://formspree.io/info@sancrisoft.com" onSubmit={this.handleSubmit}>
                  <input className="input-text" type="text" name="name" id="name" placeholder={t('caseStudies.cases.deliveryapp.form.fieldName')} value={name} onChange={this.handleChange}/>
                  {
                    (isInValidName) && <label className="error" htmlFor="name">{t('caseStudies.cases.deliveryapp.form.errorFieldName')}</label>
                  }
                  <input className="input-text" type="text" name="company" id="company" placeholder={t('caseStudies.cases.deliveryapp.form.fieldCompany')} value={company} onChange={this.handleChange}/>
                  {
                    (isInValidCompany) && <label className="error" htmlFor="name">{t('caseStudies.cases.deliveryapp.form.errorFieldCompany')}</label>
                  }
                  <input className="input-text" type="text" name="replyto" id="replyto" placeholder="Email" value={replyto} onChange={this.handleChange} />
                  {
                    (showErrorEmail) && <label className="error" htmlFor="replyto">{emailValidationMessage}</label>
                  }
                  <input className="input-text" type="text" name="phone" id="phone" placeholder={t('getQuote.form.phone')} value={phone} onChange={this.handleChange} />

                  <div className="content-youSell">
                    <h3>{t('caseStudies.cases.deliveryapp.form.howDoYouSell')}</h3>
                    {Object.keys(this.state.youSell).map(item => {
                      return (
                        <div key={item} className="item-youSell">
                          <input
                            type="checkbox"
                            onChange={this.handleToggle}
                            name={item}
                            checked={this.state.youSell[item].active}
                          />
                          <label htmlFor={item}>{this.state.youSell[item].text}</label>
                        </div>
                      )
                    })}
                  </div>

                  <textarea className="input-text text-area" name="message" id="message" cols="0" rows="0" placeholder={t('getQuote.form.message')} value={message} onChange={this.handleChange}></textarea>
                  {
                    (isInValidMessage) && <label className="error" htmlFor="message">{t('getQuote.form.errorMessage')}</label>
                  }
                  <input type="hidden" name="subject" value="Tell us about your project | Sancrisoft" />
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey="6LdeBokUAAAAAM01lWglTU0siI1fmMRoGjCE_94b"
                    onChange={this.onChange}
                  />
                  <div className="wrapper_button">
                    <button className="input-btn" type="button" onClick={this.handleSubmit}>{t('caseStudies.cases.deliveryapp.form.buttonForm')}</button>
                  </div>
              </form>

              <SweetAlert
                show={showAlert}
                title={titleAlert}
                text={alertMessage}
                onConfirm={this.closeAlert}
                type={typeAlert}
              />

            </SectionForm>

          </ContentCase>
      </Layout>
      </I18nextProvider>
    );
  }
}

// Queries for images (One query by image)
export const query = graphql`
query deliveryapp {
  deliveryapplogo:file(relativePath: { eq: "cases-studies/deliveryapp/logo.png" }) {
    ...imageFragment
  }
  deliveryapphero:file(relativePath: { eq: "cases-studies/deliveryapp/hero.png" }) {
    ...imageFragment
  }
  deliveryappmiddle:file(relativePath: { eq: "cases-studies/deliveryapp/middle-section.png" }) {
    ...imageFragment
  }
  lacocherabg:file(relativePath: { eq: "cases-studies/lacochera/la-cochera-bg.png" }) {
    ...imageFragment
  }
  playStore:file(relativePath: { eq: "cases-studies/playStore.png" }) {
    ...imageFragment
  }
  appStore:file(relativePath: { eq: "cases-studies/appStore.png" }) {
    ...imageFragment
  }
  BackgroundLaCochera:file(relativePath: { eq: "cases-studies/lacochera/lacochera-main.png" }) {
    ...imageFragment
  }
  nodeJs:file(relativePath: { eq: "cases-studies/lacochera/nodeJs.png" }) {
    ...imageFragment
  }
  reactN:file(relativePath: { eq: "cases-studies/meattogo/reactNative.png" }) {
    ...imageFragment
  }
  ignite:file(relativePath: { eq: "cases-studies/meattogo/ignite.jpeg" }) {
    ...imageFragment
  }
  styled:file(relativePath: { eq: "cases-studies/lacochera/styled.png" }) {
    ...imageFragment
  }
  webpack:file(relativePath: { eq: "cases-studies/lacochera/webpack.png" }) {
    ...imageFragment
  }
  BackgroundMeattogo:file(relativePath: { eq: "cases-studies/meattogo/Bg-Meattogo.png" }) {
    ...imageFragment
  }
  pidealatiendahero:file(relativePath: { eq: "cases-studies/pidealatienda/hero.png" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      caseStudies {
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
          services {
            id
          }
          features {
            id
          }
          technologies {
            id
            text
          }
        }
      }
    }
  }
}
`;

export default withNamespaces('translations')(IndexPage)
