import React, { Component } from 'react'
import { graphql } from 'gatsby'
import BigGreyImage from '../../components/bigGreyImage'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { I18nextProvider, translate } from "react-i18next"
import i18n from '../../data/translations'

import {
  H3,
  PageSizer,
} from '../../components/styledComponents'
import {
  SectionContainer,
} from './styledComponents';
class IndexPage extends Component {
    state = {
        name: '',
        replyto: '',
        phone: '',
        message: '',
        send: false,
    }
    form = null;
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
        const { name, replyto, message } = this.state;
        if(name === '') return false;
        if(replyto === '' || !this.validateEmail(replyto)) return false;
        if(message === '') return false;
        return true;
    }
    handleSubmit = (e) => {
        this.setState({ send: true});
        e.preventDefault();
        const { name, replyto, phone, message } = this.state;
        //grecaptcha.execute();
        // const recaptchaValue = recaptchaRef.current.getValue();
        // console.log('recaptchaValue', recaptchaValue);
        if(this.validateForm()){
            this.form.submit();
            // const opts = {
            //     name,
            //     replyto,
            //     phone,
            //     message,
            //     'g-recaptcha-response': recaptchaValue,
            // };
            // axios.post(
            //     "https://formspree.io/info@sancrisoft.com", 
            //     opts, 
            //     {headers: {"Accept": "application/json"}}
            // )
            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
        }
        
    }
    onChange = (value) => {
        console.log("Captcha value:", value);
      }
    validateEmail(email) {
        var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
    }
    render() {
        const { data, t } = this.props;
        const { name, send, replyto, message } = this.state;
        const isInValidName = (name === '' && send);
        const isInValidMessage = (message === '' && send);
        const showErrorEmail = (replyto !== '' && !this.validateEmail(replyto)) || (replyto === '' && send);
        const emailValidationMessage = (showErrorEmail && replyto !== '') ? t('getQuote.form.validEmail') : t('getQuote.form.errorEmail');
        return (
        <I18nextProvider i18n={i18n}>
            <Layout>
                <SEO title="Sancrisoft | Get a Quote" keywords={['sancrisoft', 'digital-solutions', 'get-quote']} />
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
                    <form  ref={(form) => this.form = form} className="form contact_form"  method="POST" action="http://formspree.io/info@sancrisoft.com">
                        <input className="input-text" type="text" name="name" id="name" placeholder={t('getQuote.form.name')} value={name} onChange={this.handleChange}/>
                        {
                            (isInValidName) && <label className="error" htmlFor="name">{t('getQuote.form.errorName')}</label>
                        }
                        <input className="input-text" type="text" name="replyto" id="replyto" placeholder={t('getQuote.form.email')} value={replyto} onChange={this.handleChange} />
                        {
                            (showErrorEmail) && <label className="error" htmlFor="replyto">{emailValidationMessage}</label>
                        }
                        <input className="input-text" type="text" name="phone" id="phone" placeholder={t('getQuote.form.phone')} />
                        <textarea className="input-text text-area" name="message" id="message" cols="0" rows="0" placeholder={t('getQuote.form.message')} value={message} onChange={this.handleChange}></textarea>
                        {
                            (isInValidMessage) && <label className="error" htmlFor="message">{t('getQuote.form.errorMessage')}</label>
                        }
                        <input type="hidden" name="subject" value="Tell us about your project | SancriSoft" />
                        <div className="wrapper_button">
                            <button className="input-btn" type="button" onClick={this.handleSubmit}>{t('getQuote.form.send')} </button>
                        </div>
                    </form>
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

export default translate("translations")(IndexPage)
