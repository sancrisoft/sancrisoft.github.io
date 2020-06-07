import React, { Component } from 'react'
import { I18nextProvider, withNamespaces } from 'react-i18next'
import i18n from '../../../data/translations'

import SEO from '../../../components/seo'
import { GlobalFonts } from '../../../components/styledComponents'

import HeroImage from '../../../images/targi/hero.png'
import HeroBackground from '../../../images/targi/bg.jpg'

import {
    GlobalContainer,
    PageSizer,
    Hero,
    CallToActionLink,
    Footer,
  } from '../../../styles/targi/styledComponents';

class IndexPage extends Component {
    render() {
        return (<I18nextProvider i18n={i18n}>
            <GlobalFonts />
            <SEO title="Targi | Gracias por inscribirte en nuestro webinar." keywords={['targi', 'delivery app', 'domicilios', 'ecommerce', 'venta en línea']} description="Lleva tu negocio al mundo del ecommerce con tu propia app móvil." />
            <GlobalContainer>
                <Hero bg={HeroBackground}>
                    <PageSizer>
                        <div>
                            <h2>Targi</h2>
                            <h1>¡Gracias por suscribirte a nuestro webinar!</h1>
                            <h3>Te enviaremos un recordatorio un día antes del evento.</h3>
                            <CallToActionLink to="/targi">Conocer Más</CallToActionLink>
                        </div>
                        <img src={HeroImage} alt="Targi" />
                    </PageSizer>
                </Hero>
                <Footer>
                    <PageSizer>
                        <div>
                            <a href="/privacidad">Políticas de Privacidad</a>
                            <a href="/terminos">Términos y Condiciones</a>
                        </div>
                        <p>Sancrisoft SAS © 2020</p>
                    </PageSizer>
                </Footer>
            </GlobalContainer>
        </I18nextProvider>)

    }
}

export default withNamespaces('translations')(IndexPage)