import React, {Component} from 'react'
import { graphql } from 'gatsby'
import { I18nextProvider, withNamespaces } from "react-i18next"
import ReCAPTCHA from "react-google-recaptcha"
import SweetAlert from 'sweetalert2-react'
import axios from 'axios'

import SEO from '../../components/seo'
import Title from '../../components/title'
import CasesImage from '../../components/targi/casesImageDelivery'
import LittleSatisfied from '../../components/targi/littleSatisfied'
import TargiSolve from '../../components/targi/targiSolve'
import TheBestExperience from '../../components/targi/theBestExperience'
import PlansAndPrices from '../../components/targi/plans&Prices'
import Process from '../../components/targi/process'

import Icons from '../../components/icons';
import { GlobalFonts } from '../../components/styledComponents'

import i18n from '../../data/translations'

import ImagePhone from '../../images/cases-studies/deliveryapp/hero.png'
import {
  ContentCase,
  CasePageSizer,
  ExperienceTitle,
  ExperienceSubtitle,
  Experiences,
  TargiSolveTitle,
  TargiSolveDesc,
  BoxTargiSolve,
  ContentSupportTeam,
  SupportTeamText,
  TitleBig,
  TitleDesc,
  SectionForm
} from '../../styles/case-studies-delivery-app/styledComponents';

const recaptchaRef = React.createRef();

class IndexPage extends Component {
  
  state = {
    name: '',
    replyto: '',
    phone: '',
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
      linkPurchase,
      weblink,
    } = deliver;

    return (
      <CasesImage
        key={id}
        title={name}
        subtitle={t(`caseStudies.cases.deliveryapp.brief`)}
        widthImage={'200px'}
        description={t(`caseStudies.cases.deliveryapp.description`)}
        image={data.deliveryapplogo.childImageSharp.sizes}
        phone={ImagePhone}
        weblink={weblink}
        weblinkTitle={t(`caseStudies.cases.deliveryapp.weblinkTitle`)}
        linkPurchase={linkPurchase}
      />
    );
  }

  renderExperiences = () => {
    const {
      data: {
        site: {
          siteMetadata: {
            caseStudies: {
              cases
            }
          }
        }
      },
      t,
      data,
    } = this.props;

    const deliveryapp = cases.find(item => item.id === "deliveryapp");

    return deliveryapp.littleSatisfied.map((item) =>{
      return  (
        <LittleSatisfied
          key={item}
          textExperience={t(`caseStudies.cases.deliveryapp.littleSatisfied.${item}.text`)}
          image={data[`${item}`].childImageSharp.sizes}
        />
      )
    });
  }

  renderTargiSolve = () => {
    const {
      data: {
        site: {
          siteMetadata: {
            caseStudies: {
              cases
            }
          }
        }
      },
      t,
      data,
    } = this.props;

    const deliveryapp = cases.find(item => item.id === "deliveryapp");

    return deliveryapp.targiSolve.map((item) =>{
      return  (
        <TargiSolve
          key={item}
          titleSolution={t(`caseStudies.cases.deliveryapp.targiSolve.${item}.title`)}
          textSolution={t(`caseStudies.cases.deliveryapp.targiSolve.${item}.text`)}
          image={data[`${item}`].childImageSharp.sizes}
        />
      )
    });
  }

  renderTheBestExperience = () => {
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
      t,
      data
    } = this.props;

    const deliveryapp = cases.find(item => item.id === "deliveryapp");
    const {
      meat,
      fish,
      veg
    } = deliveryapp;

    return (
      <TheBestExperience 
        t={t} 
        itemsMeat={meat}
        itemsFish={fish}
        itemsVeg={veg}
        data={data}
      />
    )
  }

  renderPlansAndPrices = () => {
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
      t,
    } = this.props;

    const deliveryapp = cases.find(item => item.id === "deliveryapp");

    return (
      <PlansAndPrices 
        t={t} 
        data={deliveryapp}
      />
    )
  }

  renderProcess = () => {
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
      t,
    } = this.props;

    const deliveryapp = cases.find(item => item.id === "deliveryapp");

    return (
      <Process 
        t={t} 
        data={deliveryapp}
      />
    )
  }

  // Validations Form
  closeAlert = () => {
    this.setState({ showAlert: false });
  }

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
    const { name, replyto } = this.state;
    if(name === '') return false;
    if(replyto === '' || !this.validateEmail(replyto)) return false;
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

  onChange = (value) => {
    const comp = this;
    const { t } = this.props;
    const { name, replyto, phone } = this.state;

    if(value) {
      const opts = {
        subject: t('caseStudies.cases.deliveryapp.form.interestFormTitle'), 
        name,
        replyto,
        phone,
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
        comp.setState({ send: false, name: '', replyto: '', phone: '', titleAlert: t('getQuote.form.sentMessage'), typeAlert: 'success', alertMessage: '', showAlert: true, });
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

    const { name, send, replyto, phone, showAlert, titleAlert, typeAlert, alertMessage } = this.state;
    const isInValidName = (name === '' && send);
    const showErrorEmail = (replyto !== '' && !this.validateEmail(replyto)) || (replyto === '' && send);
    const emailValidationMessage = (showErrorEmail && replyto !== '') ? t('caseStudies.cases.deliveryapp.form.errorValidEmail') : t('caseStudies.cases.deliveryapp.form.errorFieldEmail');

    return (
      <I18nextProvider i18n={i18n}>
          <GlobalFonts />
          <SEO title={`${t(`caseStudies.cases.deliveryapp.title`)}`} keywords={['sancrisoft', 'digital-solutions']} description="case deliveryapp" />
          <ContentCase>
            <CasePageSizer>
              { this.renderCases() }
            </CasePageSizer>

            <CasePageSizer>
              <ExperienceTitle>{t(`caseStudies.cases.deliveryapp.littleSatisfied.title`)}</ExperienceTitle>
              <ExperienceSubtitle>{t(`caseStudies.cases.deliveryapp.littleSatisfied.subtitle`)}</ExperienceSubtitle>
              <Experiences>
                { this.renderExperiences() }
              </Experiences>
            </CasePageSizer>

            <CasePageSizer>
              <TargiSolveTitle>{t(`caseStudies.cases.deliveryapp.targiSolve.title`)}</TargiSolveTitle>
              <TargiSolveDesc>{t(`caseStudies.cases.deliveryapp.targiSolve.description`)}</TargiSolveDesc>
              <BoxTargiSolve>
                { this.renderTargiSolve() }
              </BoxTargiSolve>
            </CasePageSizer>

            <ContentSupportTeam>
              <Icons
                backgroundColor="#000"
                height={40}
                width={40}
                iconName={'question'}
              />
              <SupportTeamText>
              {t(`caseStudies.cases.deliveryapp.supportTeam`)}
              </SupportTeamText>
            </ContentSupportTeam>

            <CasePageSizer>
              <TitleBig>{t(`caseStudies.cases.deliveryapp.theBestExperience.title`)}</TitleBig>
              <TitleDesc>{t(`caseStudies.cases.deliveryapp.theBestExperience.description`)}</TitleDesc>
              {this.renderTheBestExperience()}
            </CasePageSizer>

            <CasePageSizer>
              <TitleBig>{t(`caseStudies.cases.deliveryapp.plansAndPrices.title`)}</TitleBig>
              <TitleDesc>{t(`caseStudies.cases.deliveryapp.plansAndPrices.description`)}</TitleDesc>
              {this.renderPlansAndPrices()}
            </CasePageSizer>

            <CasePageSizer>
              <TitleBig>{t(`caseStudies.cases.deliveryapp.process.title`)}</TitleBig>
              <TitleDesc>{t(`caseStudies.cases.deliveryapp.process.description`)}</TitleDesc>
              {this.renderProcess()}
            </CasePageSizer>

            <CasePageSizer>
              <TitleBig>{t(`caseStudies.cases.deliveryapp.form.title`)}</TitleBig>
              <TitleDesc>{t(`caseStudies.cases.deliveryapp.form.description`)}</TitleDesc>
              {/* {this.renderProcess()} */}
            </CasePageSizer>


            <SectionForm>
              
              <form  ref={(form) => this.form = form} className="form contact_form"  method="POST" action="https://formspree.io/mgenadeg" onSubmit={this.handleSubmit}>
                <input className="input-text" type="text" name="name" id="name" placeholder={t('caseStudies.cases.deliveryapp.form.fieldName')} value={name} onChange={this.handleChange}/>
                {
                  (isInValidName) && <label className="error" htmlFor="name">{t('caseStudies.cases.deliveryapp.form.errorFieldName')}</label>
                }
                <input className="input-text" type="text" name="replyto" id="replyto" placeholder="Email" value={replyto} onChange={this.handleChange} />
                {
                  (showErrorEmail) && <label className="error" htmlFor="replyto">{emailValidationMessage}</label>
                }
                <input className="input-text" type="text" name="phone" id="phone" placeholder={t('getQuote.form.phone')} value={phone} onChange={this.handleChange} />

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
  case1:file(relativePath: { eq: "cases-studies/deliveryapp/image-case.png" }) {
    ...imageFragment
  }
  case2:file(relativePath: { eq: "cases-studies/deliveryapp/image-case.png" }) {
    ...imageFragment
  }
  case3:file(relativePath: { eq: "cases-studies/deliveryapp/image-case.png" }) {
    ...imageFragment
  }
  case4:file(relativePath: { eq: "cases-studies/deliveryapp/image-case.png" }) {
    ...imageFragment
  }
  case5:file(relativePath: { eq: "cases-studies/deliveryapp/image-case.png" }) {
    ...imageFragment
  }
  case6:file(relativePath: { eq: "cases-studies/deliveryapp/image-case.png" }) {
    ...imageFragment
  }
  case7:file(relativePath: { eq: "cases-studies/deliveryapp/image-case.png" }) {
    ...imageFragment
  }
  solution1:file(relativePath: { eq: "cases-studies/deliveryapp/image-case.png" }) {
    ...imageFragment
  }
  solution2:file(relativePath: { eq: "cases-studies/deliveryapp/image-case.png" }) {
    ...imageFragment
  }
  solution3:file(relativePath: { eq: "cases-studies/deliveryapp/image-case.png" }) {
    ...imageFragment
  }
  solution4:file(relativePath: { eq: "cases-studies/deliveryapp/image-case.png" }) {
    ...imageFragment
  }
  solution5:file(relativePath: { eq: "cases-studies/deliveryapp/image-case.png" }) {
    ...imageFragment
  }
  solution6:file(relativePath: { eq: "cases-studies/deliveryapp/image-case.png" }) {
    ...imageFragment
  }
  meat1:file(relativePath: { eq: "cases-studies/deliveryapp/meat/meat1.png" }) {
    ...imageFragment
  }
  meat2:file(relativePath: { eq: "cases-studies/deliveryapp/meat/meat2.png" }) {
    ...imageFragment
  }
  meat3:file(relativePath: { eq: "cases-studies/deliveryapp/meat/meat3.png" }) {
    ...imageFragment
  }
  meat4:file(relativePath: { eq: "cases-studies/deliveryapp/meat/meat4.png" }) {
    ...imageFragment
  }
  meat5:file(relativePath: { eq: "cases-studies/deliveryapp/meat/meat5.png" }) {
    ...imageFragment
  }
  fish1:file(relativePath: { eq: "cases-studies/deliveryapp/fish/fish1.png" }) {
    ...imageFragment
  }
  fish2:file(relativePath: { eq: "cases-studies/deliveryapp/fish/fish2.png" }) {
    ...imageFragment
  }
  fish3:file(relativePath: { eq: "cases-studies/deliveryapp/fish/fish3.png" }) {
    ...imageFragment
  }
  fish4:file(relativePath: { eq: "cases-studies/deliveryapp/fish/fish4.png" }) {
    ...imageFragment
  }
  fish5:file(relativePath: { eq: "cases-studies/deliveryapp/fish/fish5.png" }) {
    ...imageFragment
  }
  veg1:file(relativePath: { eq: "cases-studies/deliveryapp/veg/veg1.png" }) {
    ...imageFragment
  }
  veg2:file(relativePath: { eq: "cases-studies/deliveryapp/veg/veg2.png" }) {
    ...imageFragment
  }
  veg3:file(relativePath: { eq: "cases-studies/deliveryapp/veg/veg3.png" }) {
    ...imageFragment
  }
  veg4:file(relativePath: { eq: "cases-studies/deliveryapp/veg/veg4.png" }) {
    ...imageFragment
  }
  veg5:file(relativePath: { eq: "cases-studies/deliveryapp/veg/veg5.png" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      caseStudies {
        cases {
          id
          name
          thumbnail
          linkPurchase
          weblink
          type
          link
          private
          littleSatisfied
          targiSolve
          meat {
            id
            name
          }
          fish {
            id
            name
          }
          veg {
            id
            name
          }
          pricesCOP {
            priceMonthly 
            priceAnnual
            priceAnnualTotal 
            priceinstalation 
          }
          pricesUSD {
            priceMonthly 
            priceAnnual
            priceAnnualTotal 
            priceinstalation 
          }
          process {
            id
          }
        }
      }
    }
  }
}
`;

export default withNamespaces('translations')(IndexPage)
