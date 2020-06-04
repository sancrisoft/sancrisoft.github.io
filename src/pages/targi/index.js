import React, { Component } from 'react'
import { I18nextProvider, withNamespaces } from 'react-i18next'
import i18n from '../../data/translations'
import Viewport from '../../components/HOC/withViewportHandler'

import SEO from '../../components/seo'
import { GlobalFonts } from '../../components/styledComponents'
import Layout from '../../components/layout'

import HeroImage from '../../images/targi/hero.png'
import HeroBackground from '../../images/targi/bg.jpg'

import Problem1Image from '../../images/targi/problems/1-1-catalog.svg'
import Problem2Image from '../../images/targi/problems/1-2-covid.svg'
import Problem3Image from '../../images/targi/problems/1-3-ig.svg'
import Problem4Image from '../../images/targi/problems/1-4-internet.svg'
import Problem5Image from '../../images/targi/problems/1-5-demand.svg'
import Problem6Image from '../../images/targi/problems/1-6-error.svg'
import Problem7Image from '../../images/targi/problems/1-7-work.svg'

import Benefit1Image from '../../images/targi/benefits/2-1-app.svg'
import Benefit2Image from '../../images/targi/benefits/2-2-customer.svg'
import Benefit3Image from '../../images/targi/benefits/2-3-products.svg'
import Benefit4Image from '../../images/targi/benefits/2-4-weight.svg'
import Benefit5Image from '../../images/targi/benefits/2-5-comment.svg'
import Benefit6Image from '../../images/targi/benefits/2-6-db.svg'

import HelpImage from '../../images/targi/help.svg'
import BgForm from '../../images/targi/form/pattern.svg';

import Process from '../../components/targi/process'
import BestExperience from '../../components/targi/bestExperience'
import PlansPrices from '../../components/targi/plansPrices'
import BuyForm from '../../components/targi/buyForm'
import Icons from '../../components/icons'

import {
    GlobalContainer,
    PageSizer,
    Hero,
    CallToAction,
    Section,
    Problems,
    ProblemCard,
    BenefitsSection,
    Benefits,
    BenefitCard,
    PriceNotes,
    HelpSection,
    BuySection,
    SectionForm,
    ContentWhatsapp,
    WhatsappLogo,
    WhatsappText,
    WhatsappButton,
    Footer,
  } from '../../styles/targi/styledComponents';

class IndexPage extends Component {
    state = {
        country: 'Colombia',
        interest: 'Targi',
    }

    render() {
        const {
            interest,
            country
        } = this.state;

        return (
            <>
                <GlobalFonts />
                <I18nextProvider i18n={i18n}>
                    <SEO title="Targi | App de delivery para tu negocio, con tu propia marca." keywords={['targi', 'delivery app', 'domicilios', 'ecommerce', 'venta en línea']} description="Lleva tu negocio al mundo del ecommerce con tu propia app móvil." />
                    <GlobalContainer>
                        <Hero bg={HeroBackground}>
                            <PageSizer>
                                <div>
                                    <h2>Targi</h2>
                                    <h1>App Móvil para Tu Negocio</h1>
                                    <h3>¡Lleva tus ventas al mundo del ecommerce con tu propia marca!</h3>
                                    <CallToAction>¡Comprar Ahora!</CallToAction>
                                </div>
                                <img src={HeroImage} alt="Targi" />
                            </PageSizer>
                        </Hero>
                        <Section>
                            <PageSizer>
                                <h3>Cuando vendes por Internet o piensas en hacerlo...</h3>
                                <h2>¿Has experimentado esto?</h2>
                                <Problems>
                                    <ProblemCard>
                                        <img src={Problem1Image} alt="" />
                                        <p>Resulta complicado dar a conocer mi catálogo de productos.</p>
                                    </ProblemCard>
                                    <ProblemCard>
                                        <img src={Problem2Image} alt="" />
                                        <p>Han disminuido los ingresos con la llegada del COVID-19.</p>
                                    </ProblemCard>

                                    <ProblemCard>
                                        <img src={Problem3Image} alt="" />
                                        <p>Vendo por Instagram pero tomar los pedidos por teléfono o Whatsapp es complicado.</p>
                                    </ProblemCard>
                                    <ProblemCard>
                                        <img src={Problem4Image} alt="" />
                                        <p>Quiero vender por Internet pero no tengo las herramientas.</p>
                                    </ProblemCard>

                                    <ProblemCard>
                                        <img src={Problem5Image} alt="" />
                                        <p>Mientras la demanda aumenta, más difícil se hace el proceso de pedidos.</p>
                                    </ProblemCard>
                                    <ProblemCard>
                                        <img src={Problem6Image} alt="" />
                                        <p>A veces hay errores en las órdenes y es difícil conseguir la dirección de entrega.</p>
                                    </ProblemCard>

                                    <ProblemCard>
                                        <img src={Problem7Image} alt="" />
                                        <p>Mi negocio vende sólo mientras mis empleados o yo estamos trabajando.</p>
                                    </ProblemCard>
                                </Problems>
                            </PageSizer>
                        </Section>

                        <BenefitsSection>
                            <PageSizer>
                                <h2>¡Targi lo resuelve!</h2>
                                <h3>Estos son los principales beneficios de nuestra solución.</h3>
                                <Benefits>
                                    <BenefitCard>
                                        <div><img src={Benefit1Image} alt="" /></div>
                                        <h4>Tu negocio tendrá un app con tu marca, disponible para Android y iOS.</h4>
                                        <p>Le llegarás a más del 95% del mercado.</p>
                                    </BenefitCard>
                                    <BenefitCard>
                                        <div><img src={Benefit2Image} alt="" /></div>
                                        <h4>Ganate la preferencia de los clientes al tener a tu negocio en su celular.</h4>
                                        <p>Hacer ventas recurrentes estará al alcance de un tap.</p>
                                    </BenefitCard>
                                    <BenefitCard>
                                        <div><img src={Benefit3Image} alt="" /></div>
                                        <h4>Presenta tu oferta completa de productos, organizados por categorías.</h4>
                                        <p>Hasta 50 categorías y 200 productos.</p>
                                    </BenefitCard>

                                    <BenefitCard>
                                        <div><img src={Benefit4Image} alt="" /></div>
                                        <h4>Se puede pedir por peso, volumen o unidades.</h4>
                                        <p>Funciona para diferentes tipos de productos.</p>
                                    </BenefitCard>
                                    <BenefitCard>
                                        <div><img src={Benefit5Image} alt="" /></div>
                                        <h4>Recibe comentarios/notas en los detalles del pedido.</h4>
                                        <p>Para que no se escape nada y tengas clientes 100% satisfechos.</p>
                                    </BenefitCard>
                                    <BenefitCard>
                                        <div><img src={Benefit6Image} alt="" /></div>
                                        <h4>Crea tu propia base de datos de clientes y pedidos.</h4>
                                        <p>Que puedes usar para campañas de mercadeo y promociones.</p>
                                    </BenefitCard>
                                </Benefits>
                            </PageSizer>
                        </BenefitsSection>

                        <HelpSection>
                            <PageSizer>
                                <p>
                                    <img src={HelpImage} alt="" />
                                    Cuentas con un equipo de soporte disponible para ayudarte con tus preguntas, dudas o solicitudes.
                                </p>
                            </PageSizer>
                        </HelpSection>

                        <Section>
                            <h2>La Mejor Experiencia de Usuario</h2>
                            <h3>Cualquiera puede usar esta app y poner un pedido en menos de 5 minutos.</h3>
                            <h3>Mira como luce con estos tipos de negocios.</h3>
                            <BestExperience />
                        </Section>

                        <Section>
                            <h2>Planes y Precios</h2>
                            <h3>Targi está pensado para PyMEs, con precios que negocios como el tuyo pueden asumir.</h3>
                            <PlansPrices
                                onChangePlace={(index) => this.setState({ country: index })}
                                onChangeInterest={(index) => this.setState({ interest: index })}
                            />

                            <PriceNotes>
                                <p>Además ten en cuenta que....</p>
                                <ul>
                                    <li>La mensualidad es fija, no importa cuántos pedidos recibas ni el valor de los mismos.</li>
                                    <li><strong>No hay cláusula de permanencia</strong>. Si por alguna razón, deseas retirarte, lo puedes hacer cuando quieras, sin penalidad alguna.</li>
                                </ul>
                            </PriceNotes>
                        </Section>

                        <Section>
                            <h2>Me interesa, ¿Ahora qué?</h2>
                            <h3>El proceso son simplemente 4 pasos y toma 2 semanas.</h3>
                            <Process />
                        </Section>

                        <BuySection bg={BgForm} id="form">
                            <PageSizer className="contentForm">
                                <h2>¿Listo para Comprar?</h2>
                                <h3>¿Necesitas un demo? ¿Tienes alguna pregunta? ¡Hablemos!</h3>
                                <SectionForm>
                                    <BuyForm 
                                        interest={interest}
                                        country={country}
                                        onChange={(interestIndex, countryIndex) => this.setState({ interest: interestIndex, country: countryIndex })}
                                    />

                                    <ContentWhatsapp>
                                        <WhatsappLogo>
                                            <Icons
                                                height={60}
                                                width={60}
                                                iconName={'whatsapp'}
                                                backgroundColor="#fff"
                                            />
                                        </WhatsappLogo>
                                        <WhatsappText>Prefieres comunicarte por Whatsapp?</WhatsappText>
                                        <WhatsappButton 
                                            href="https://api.whatsapp.com/send?phone=NUMBER&text=Bienvenido%20a%20Sancrisoft%20en%20un%20momento%20te%20atenderemos">
                                            Escríbenos
                                        </WhatsappButton>
                                    </ContentWhatsapp>
                                </SectionForm>
                            </PageSizer>
                        </BuySection>
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
                </I18nextProvider>
            </>
       )

    }
}

export default withNamespaces('translations')(Viewport(IndexPage))