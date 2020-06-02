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
  PageSizer,
} from '../../components/styledComponents'

import {
  ContentTerms,
  TitleTerms,
  SubtitleTerms,
  TermsDesc,
  ContentDefinitions,
  DefinitionTitle,
  DefinitionList,
  DefinitionItem,
  ItemDescrip,
  ContentObject,
  ObjectTitle,
  ObjectDescription,
  ObjectList,
  ObjectItem
} from '../../styles/terminos/styledComponents';

class Terminos extends Component {    
    render() {
        return (
        <I18nextProvider i18n={i18n}>
            <Layout>
                <SEO title="Terminos" keywords={['sancrisoft', 'digital-solutions', 'terminos']} description="page Terminos" />
                <PageSizer>
                  <ContentTerms>
                    <TitleTerms>TÉRMINOS Y CONDICIONES DE USO DE LA PLATAFORMA TARGI DE SANCRISOFT S.A.S.</TitleTerms>
                    <SubtitleTerms>
                      POR FAVOR LEA CUIDADOSAMENTE ESTAS CONDICIONES DEL SERVICIO, YA QUE CONTIENEN CONDICIONES DE USO DE LA APP, 
                      ASÍ COMO LAS OBLIGACIONES DE CUMPLIMIENTO DICTADAS POR LA NORMATIVIDAD LEGAL.
                    </SubtitleTerms>
                    <TermsDesc>
                      Bienvenido(a) a <strong>TARGI</strong>, un Aplicativo Móvil (en adelante la “Plataforma”) de <strong>SANCRISOFT SAS</strong> que ofrece sus servicios 
                      descritos posteriormente en este documento legal, a través de su app móvil en los sistemas operativos IOS y Android.
                    </TermsDesc>

                    <TermsDesc>
                      Usted, como persona natural o jurídica cuyo objeto es promocionar el servicio de provisión y venta de alimentos por medio de establecimientos de servicio, 
                      haciendo uso de esta opción adquiere para todos los efectos de este documento legal, la calidad de EXPENDEDOR o PROVEEDOR.
                    </TermsDesc>

                    <TermsDesc>
                      El Expendedor que hace uso de <strong>TARGI</strong> debe conocer y aceptar los siguientes Términos y Condiciones de Uso y las Políticas de Privacidad (en adelante <strong>“Términos y Condiciones”</strong>). 
                      El Operador de la Plataforma Web es <strong>SANCRISOFT S.A.S.</strong> sociedad comercial identificada con NIT 901119372 - 6 (en adelante <strong>TARGI</strong>).
                    </TermsDesc>

                    <TermsDesc>
                      <strong>TARGI</strong> está comprometida con proteger la información del Expendedor de acuerdo con las leyes, disposiciones legales y demás normas nacionales que regulan la protección de datos, 
                      la privacidad o manejo de información Ley 1266 de 2008, Estatuto del Consumidor Ley 1480 de 2011 y demás normas que son concordantes con el orden público.
                    </TermsDesc>

                    <ContentDefinitions>
                      <DefinitionTitle>Definiciones</DefinitionTitle>

                      <DefinitionList>
                        <DefinitionItem>
                          <ItemDescrip>
                            <strong>Operador de la Plataforma: </strong> 
                            Es el encargado de administrar operativa y funcionalmente la Plataforma, representado para los efectos 
                            de los presentes términos y condiciones por <strong>TARGI</strong>, o por la persona natural o jurídica que esta designe.
                          </ItemDescrip>
                        </DefinitionItem>

                        <DefinitionItem>
                          <ItemDescrip>
                            <strong>Plataforma: </strong> 
                            Es un conjunto de herramientas digitales disponibles en línea, cuyo nombre al público se denomina <strong>TARGI</strong>, y que permite la gestión 
                            de la relación entre el Expendedor y <strong>TARGI</strong>, como titular de la Plataforma Web y del aplicativo móvil.
                          </ItemDescrip>
                        </DefinitionItem>

                        <DefinitionItem>
                          <ItemDescrip>
                            <strong>Objetivo de la Plataforma: </strong> 
                            Exhibir los alimentos de terceros Proveedores o Expendedores, que de manera directa y personal, venden a sus Clientes gracias a la conexión establecida por este medio.
                          </ItemDescrip>
                        </DefinitionItem>

                        <DefinitionItem>
                          <ItemDescrip>
                            <strong>Expendedor: </strong> 
                            Es la persona natural o jurídica que suscribe los presentes Términos y Condiciones con el Operador de la Plataforma, con el fin de realizar 
                            sus ofertas de productos alimenticios en la Plataforma Web para beneficio del Usuario. 
                          </ItemDescrip>
                        </DefinitionItem>

                        <DefinitionItem>
                          <ItemDescrip>
                            <strong>Instalaciones físicas del Expendedor: </strong> 
                            Es el lugar físico donde se encuentra ubicado el Expendedor.
                          </ItemDescrip>
                        </DefinitionItem>

                        <DefinitionItem>
                          <ItemDescrip>
                            <strong>Servicio que presta la App: </strong> 
                            Exhibición de productos alimenticios suministrados de manera directa y personal por parte de los Proveedores en beneficio de los Usuarios de la App. 
                            <p>Servimos como Portal de Contacto entre los Expendedores y Usuarios con el fin de hacer coincidir en un mismo lugar a los dos extremos de la actividad económica.</p>
                          </ItemDescrip>
                        </DefinitionItem>

                        <DefinitionItem>
                          <ItemDescrip>
                            <strong>Usuario: </strong> 
                            Es la persona natural mayor de dieciocho (18) años que realiza los siguientes actos a través de la Plataforma:
                            <ul>
                              <li>Celebrar contrato de compraventa con el Proveedor o Expendedor.</li>
                            </ul>
                          </ItemDescrip>
                        </DefinitionItem>

                        <DefinitionItem>
                          <ItemDescrip>
                            <strong>Datos personales: </strong> 
                            Es toda información que permite identificar a una persona natural.
                          </ItemDescrip>
                        </DefinitionItem>

                        <DefinitionItem>
                          <ItemDescrip>
                            <strong>Publicidad: </strong> 
                            Es toda forma de comunicación realizada por parte del Operador de la Plataforma con el fin de brindar información sobre los productos, 
                            actividades comerciales o comunicar campañas promocionales sobre los productos alimenticios ofrecidos.
                          </ItemDescrip>
                        </DefinitionItem>
                        
                        <DefinitionItem>

                          <ItemDescrip>
                            <strong>Pop - Ups: </strong> 
                            Ventana o aviso de Internet que emerge de manera automática en cualquier momento cuando el Usuario utiliza la Plataforma.
                          </ItemDescrip>
                        </DefinitionItem>
                      </DefinitionList>
                    </ContentDefinitions>

                    <ContentObject>
                      <ObjectTitle>Objecto:</ObjectTitle>
                      <ObjectDescription>
                        Los Términos y Condiciones regulan la autorización que brinda TARGI al Expendedor sobre el uso de la Plataforma, con el fin de que puedan ingresar 
                        los productos alimenticios que pretenden ofertar a los Usuarios, y establezcan las descripciones de dichos productos donde se consignen las calidades que se predican de ellos, así como los precios correspondientes y las formas de pago que permiten en sus establecimientos.
                        <br />
                        El Operador de la Plataforma realiza las siguientes acciones: 1) exhibe los diferentes productos alimenticios de consumo de forma publicitaria para su adquisición por parte de los Usuarios; 2) facilita el encuentro entre el Expendedor y el Usuario; 
                      </ObjectDescription>

                      <ObjectList>
                        <ObjectItem>
                          <h4>Aceptación de los Términos y Condiciones </h4> 
                          <ItemDescrip>
                            En el momento en que el Expendedor inicia sesión, se conecta, accede o usa la Plataforma, reconoce que ha leído y entendido los <strong>Términos y Condiciones</strong> incluyendo 
                            la <strong>Política de Privacidad de TARGI</strong> y acepta a estar obligado a cumplir dichas disposiciones y todas las leyes y regulaciones con relación al uso, acceso y conectividad 
                            de la App. <strong>Si el Expendedor no acepta cualquiera de los Términos y Condiciones, no debe conectarse, acceder o usar la Plataforma.</strong>
                            <br />
                            Los <strong>Términos y Condiciones</strong> y la <strong>Política de Privacidad de TARGI los puede modificar el Operador de la Plataforma</strong>  a su discreción, con o sin previo aviso.
                            <br />
                            <strong>TARGI</strong> actualizará la fecha de la última revisión, la cual aparecerá en la parte inferior de este documento y del documento de <strong>Política de Privacidad de TARGI.</strong>
                            <br />
                            El Expendedor tiene la obligación de cumplir todas las leyes, reglamentos, o cualquier otra obligación relacionada con el servicio. <strong>TARGI</strong> recomienda que el Expendedor revise con 
                            atención los <strong>Términos y Condiciones</strong> previo a realizar cualquier actividad en la Plataforma Web.
                            <br />
                            <i>
                              El Expendedor que inicie sesión, se conecte, accede o utilice TARGI , reconoce que las condiciones constituyen un contrato legal que, como tal, resulta vinculante y exigible entre LAS PARTES. 
                            </i>
                          </ItemDescrip>
                        </ObjectItem>

                        <ObjectItem>
                          <h4>Servicio y Funcionamiento de TARGI  </h4> 
                          <ItemDescrip>
                            <strong>TARGI</strong> es una Plataforma que presta el servicio de intermediación entre el Usuario y el Expendedor, con el fin de exhibir a través de ella las diversas
                            ofertas de productos alimenticios que el Expendedor considere puedan estar exhibidas en dicha Plataforma, según los lineamientos preestablecidos por parte 
                            de <strong>TARGI</strong> para provecho del Usuario. Esto, con el fin de que este adquiera uno o varios de dichos productos en las instalaciones físicas del Expendedor o a 
                            domicilio para consumo propio.
                            <br />
                            Para usar la Plataforma, el Expendedor primero debe acceder a ella. Luego, tiene la opción de completar el proceso de registro de conformidad con el 
                            procedimiento que más abajo se describe o puede navegar mediante la Plataforma sin necesidad de registrarse. No obstante, para ofrecer sus productos es 
                            obligatorio registrarse en ella y aceptar las condiciones de uso de la Plataforma. 
                            <br />
                            Para todos los efectos legales, la Plataforma opera como marketplace, y por tanto, no interfiere en el contrato celebrado entre el Usuario y el Expendedor que se 
                            entiende celebrado y perfeccionado con la entrega efectiva del producto adquirido por parte del Usuario y de manera simultánea con el pago del precio del mismo a 
                            favor del Expendedor. De esta manera, la Plataforma simplemente servirá como mecanismo a través del cual el Usuario reserva el producto alimenticio exhibido en ella 
                            gracias a los productos ofrecidos por el Expendedor.
                            <br />
                            <strong>TARGI</strong> se excusa de cualquier reclamo o responsabilidad contractual que se pueda derivar del incumplimiento de las obligaciones a cargo de alguna de las partes 
                            con ocasión al contrato de compraventa celebrado entre el Proveedor y el Usuario, y por tanto, cualquier controversia que se genere con ocasión a lo anterior tendrá 
                            que ser dirimida directamente entre el Expendedor y el Usuario. 
                            <br />
                            Todos los elementos propios del contrato de compraventa celebrado entre el Usuario y el Expendedor, como lo son el objeto de contratación, el precio establecido 
                            así como la forma de cumplimiento de las obligaciones a cargo de cada una de las partes, se entienden fijadas y acordadas entre ellas, y por consiguiente, 
                            <strong>TARGI</strong>, al obrar como portal de contacto, no tiene injerencia alguna en la determinación de algún componente propio del contrato de compraventa.
                            <br />
                            <strong>TARGI</strong> a través de su Plataforma permite el encuentro de consumo entre el Usuario y el Expendedor, sin que bajo ningún escenario obre como miembro de la cadena 
                            de comercialización de los productos ofrecidos en la Plataforma. En virtud de lo anterior, para efectos de pagar o realizar cualquier reclamo con ocasión 
                            a los productos adquiridos por el Usuario, este deberá relacionarse de manera directa con el Proveedor, persona con quien celebró directa y personalmente el 
                            contrato de compraventa correspondiente. El Usuario deberá ajustarse a las formas de pago preestablecidas por el Expendedor así como la forma de cumplimiento 
                            de su obligación de entrega de los productos alimenticios adquiridos por aquél.
                            <br />
                            Se entiende para todos los efectos legales, que <strong>TARGI</strong> otorga la licencia de uso de su Plataforma en beneficio del Proveedor o Expendedor, una vez culminada su sección 
                            de ofertas a la medida del cliente. El valor pactado entre el Operador de la Plataforma y <strong>TARGI</strong> comprende los siguientes ítems: 
                            <ul>
                              <li>Un valor único pagadero al inicio de la relación entre <strong>TARGI</strong> y el Proveedor, que se encuentra destinado a la adecuación del app a la imágen de la marca y la carga inicial de 
                               datos e información necesarios para la puesta en marcha de la plataforma.</li> 
                              <li>Canon mensual por concepto del otorgamiento de la licencia de uso de la Plataforma en beneficio del Proveedor, que deberán ser pagados de manera anticipada los 
                                primeros cinco (5) días de cada mes.</li> 
                            </ul>
                            <br />
                            En el evento en que el Proveedor incumpla con las obligaciones establecidas a su cargo a lo largo del presente documento, no habrá lugar a la devolución parcial o total de las sumas pagadas por su 
                            parte de manera anticipada, a título de penalidad por los perjuicios causados al Operador de la Plataforma.
                          </ItemDescrip>
                        </ObjectItem>
                      </ObjectList>
                    </ContentObject>
                  </ContentTerms>
                </PageSizer>
            </Layout>
        </I18nextProvider>
    );
  }
}

// Queries for images (One query by image)
export const query = graphql`
query terminosQuery {
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

export default withNamespaces('translations')(Terminos)
