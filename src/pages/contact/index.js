import React, { Component } from 'react'
import { graphql } from 'gatsby'
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha"
import SweetAlert from 'sweetalert2-react'
import BigGreyImage from '../../components/bigGreyImage'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { I18nextProvider, withNamespaces } from "react-i18next"
import i18n from '../../data/translations'

import {
  H3,
  PageSizer,
} from '../../components/styledComponents'
import {
  SectionContainer,
} from '../../styles/get-a-quote/styledComponents';
const recaptchaRef = React.createRef();
class GetaQuote extends Component {
    state = {
        name: '',
        replyto: '',
        phone: '',
        message: '',
        send: false,
        showAlert: false,
        typeAlert: 'success',
        alertMessage: '',
        titleAlert: 'Message',
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
    closeAlert = () => {
        this.setState({ showAlert: false });
    }
    validateForm = () => {
        const { name, replyto, message } = this.state;
        if(name === '') return false;
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
    onChange = (value) => {
        const comp = this;
        const { t } = this.props;
        const { name, replyto, phone, message } = this.state;
        if(value) {
            const opts = {
                subject: 'Tell us about your project', 
                name,
                replyto,
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
                    'category': 'Contact Us',
                    'subject': name
                });
                recaptchaRef.current.props.grecaptcha.reset();
                comp.setState({ send: false, name: '', replyto: '', phone: '', message: '', titleAlert: t('getQuote.form.sentMessage'), typeAlert: 'success', alertMessage: '', showAlert: true, });
                
            })
            .catch(function (error) {
                recaptchaRef.current.props.grecaptcha.reset();
                comp.setState({ titleAlert: t('getQuote.form.descriptionError'), typeAlert: 'info', alertMessage: t('getQuote.form.descriptionError'), showAlert: true });
            });
        }
      }
    
    validateEmail(email) {
        var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
    }
    render() {
        const { data, t } = this.props;
        const { name, send, replyto, message, phone, showAlert, titleAlert, typeAlert, alertMessage } = this.state;
        const isInValidName = (name === '' && send);
        const isInValidMessage = (message === '' && send);
        const showErrorEmail = (replyto !== '' && !this.validateEmail(replyto)) || (replyto === '' && send);
        const emailValidationMessage = (showErrorEmail && replyto !== '') ? t('getQuote.form.validEmail') : t('getQuote.form.errorEmail');
        return (
        <I18nextProvider i18n={i18n}>
            <Layout>
                <SEO title="Get a Quote" keywords={['sancrisoft', 'digital-solutions', 'get-quote']} description="page Contact" />
                <section>
                <BigGreyImage
                    image={data.getQuote.childImageSharp.sizes}
                    title={t('getQuote.bigImage.title')}
                    description={t('getQuote.bigImage.description')}
                />
                </section>
                <PageSizer>
                <SectionContainer>
                    <H3>{t('getQuote.form.title')}</H3>
                    <form  ref={(form) => this.form = form} className="form contact_form"  method="POST" action="http://formspree.io/info@sancrisoft.com" onSubmit={this.handleSubmit}>
                        <input className="input-text" type="text" name="name" id="name" placeholder={t('getQuote.form.name')} value={name} onChange={this.handleChange}/>
                        {
                            (isInValidName) && <label className="error" htmlFor="name">{t('getQuote.form.errorName')}</label>
                        }
                        <input className="input-text" type="text" name="replyto" id="replyto" placeholder={t('getQuote.form.email')} value={replyto} onChange={this.handleChange} />
                        {
                            (showErrorEmail) && <label className="error" htmlFor="replyto">{emailValidationMessage}</label>
                        }
                        <input className="input-text" type="text" name="phone" id="phone" placeholder={t('getQuote.form.phone')} value={phone} onChange={this.handleChange} />
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
                            <button className="input-btn" type="button" onClick={this.handleSubmit}>{t('getQuote.form.send')} </button>
                        </div>
                    </form>
                    <SweetAlert
                        show={showAlert}
                        title={titleAlert}
                        text={alertMessage}
                        onConfirm={this.closeAlert}
                        type={typeAlert}
                        
                    />
                </SectionContainer>
                </PageSizer>
            </Layout>
        </I18nextProvider>
    );
  }
}

// Queries for images (One query by image)
export const query = graphql`
query getaQuoteQuery {
  getQuote:file(relativePath: { eq: "get-a-quote/quote.jpg" }) {
    ...imageFragment
  }
  site {
    siteMetadata {
      title
    }
  }
}
`;

export default withNamespaces('translations')(GetaQuote)
