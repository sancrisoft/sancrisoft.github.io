import React, { Component } from 'react'
import { graphql } from 'gatsby'
import axios from 'axios'
import Recaptcha from 'react-google-invisible-recaptcha'
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
    recaptcha = null;
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
        this.recaptcha.execute();
        return true;
    }
    onResolved = () => {
        alert( 'Recaptcha resolved with response: ' + this.recaptcha.getResponse() );
    }
    handleSubmit = (e) => {
        this.setState({ send: true});
        e.preventDefault();
        const { name, replyto, phone, message } = this.state;
        
        if(this.validateForm()){
            
            const opts = {
                name,
                replyto,
                phone,
                message,
                'g-recaptcha-response': this.recaptcha.getResponse(),
            };
            axios.post(
                "https://formspree.io/info@sancrisoft.com", 
                opts, 
                {headers: {"Accept": "application/json"}}
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        else {
            this.recaptcha.reset();
        }
        
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
                    <form className="form contact_form" id="contact_form" method="POST" action="//formspree.io/info@sancrisoft.com" noValidate="novalidate" onSubmit={this.handleSubmit}>
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
                        <Recaptcha
                            ref={ (ref) => this.recaptcha = ref }
                            sitekey="6LdeBokUAAAAAM01lWglTU0siI1fmMRoGjCE_94b"
                            onResolved={ this.onResolved }
                            badge="inline"
                        />
                        <div className="wrapper_button">
                            <input className="input-btn" type="submit" value={t('getQuote.form.send')} />
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
