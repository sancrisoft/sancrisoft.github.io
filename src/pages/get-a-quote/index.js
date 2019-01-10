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
    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        const { data, t } = this.props;
        const { name } = this.state;
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
                        <input className="input-text" type="text" name="replyto" id="replyto" placeholder={t('getQuote.form.email')} />
                        <input className="input-text" type="text" name="phone" id="phone" placeholder={t('getQuote.form.phone')} />
                        <textarea className="input-text text-area" name="message" id="message" cols="0" rows="0" placeholder={t('getQuote.form.message')}></textarea>
                        <input type="hidden" name="subject" value="Tell us about your project | SancriSoft" />
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
