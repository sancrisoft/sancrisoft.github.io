import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { I18nextProvider, withNamespaces } from "react-i18next"
import i18n from '../../data/translations'
import { GlobalFonts } from '../../components/styledComponents'

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
  ObjectItem,
  Back
} from '../../styles/terminos/styledComponents';

class Terminos extends Component {  
  
    render() {
      return (
        <I18nextProvider i18n={i18n}>
          <GlobalFonts />
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
                  {/* definition 1 */}
                  <DefinitionItem>
                    <ItemDescrip>
                      <strong>Operador de la Plataforma: </strong> 
                      Es el encargado de administrar operativa y funcionalmente la Plataforma, representado para los efectos 
                      de los presentes términos y condiciones por <strong>TARGI</strong>, o por la persona natural o jurídica que esta designe.
                    </ItemDescrip>
                  </DefinitionItem>

                  {/* definition 2 */}
                  <DefinitionItem>
                    <ItemDescrip>
                      <strong>Plataforma: </strong> 
                      Es un conjunto de herramientas digitales disponibles en línea, cuyo nombre al público se denomina <strong>TARGI</strong>, y que permite la gestión 
                      de la relación entre el Expendedor y <strong>TARGI</strong>, como titular de la Plataforma Web y del aplicativo móvil.
                    </ItemDescrip>
                  </DefinitionItem>

                  {/* definition 3 */}
                  <DefinitionItem>
                    <ItemDescrip>
                      <strong>Objetivo de la Plataforma: </strong> 
                      Exhibir los alimentos de terceros Proveedores o Expendedores, que de manera directa y personal, venden a sus Clientes gracias a la conexión establecida por este medio.
                    </ItemDescrip>
                  </DefinitionItem>

                  {/* definition 4 */}
                  <DefinitionItem>
                    <ItemDescrip>
                      <strong>Expendedor: </strong> 
                      Es la persona natural o jurídica que suscribe los presentes Términos y Condiciones con el Operador de la Plataforma, con el fin de realizar 
                      sus ofertas de productos alimenticios en la Plataforma Web para beneficio del Usuario. 
                    </ItemDescrip>
                  </DefinitionItem>

                  {/* definition 5 */}
                  <DefinitionItem>
                    <ItemDescrip>
                      <strong>Instalaciones físicas del Expendedor: </strong> 
                      Es el lugar físico donde se encuentra ubicado el Expendedor.
                    </ItemDescrip>
                  </DefinitionItem>

                  {/* definition 6 */}
                  <DefinitionItem>
                    <ItemDescrip>
                      <strong>Servicio que presta la App: </strong> 
                      Exhibición de productos alimenticios suministrados de manera directa y personal por parte de los Proveedores en beneficio de los Usuarios de la App. 
                      <p>Servimos como Portal de Contacto entre los Expendedores y Usuarios con el fin de hacer coincidir en un mismo lugar a los dos extremos de la actividad económica.</p>
                    </ItemDescrip>
                  </DefinitionItem>

                  {/* definition 7 */}  
                  <DefinitionItem>
                    <ItemDescrip>
                      <strong>Usuario: </strong> 
                      Es la persona natural mayor de dieciocho (18) años que realiza los siguientes actos a través de la Plataforma:
                      <ul>
                        <li>Celebrar contrato de compraventa con el Proveedor o Expendedor.</li>
                      </ul>
                    </ItemDescrip>
                  </DefinitionItem>

                  {/* definition 8 */}
                  <DefinitionItem>
                    <ItemDescrip>
                      <strong>Datos personales: </strong> 
                      Es toda información que permite identificar a una persona natural.
                    </ItemDescrip>
                  </DefinitionItem>

                  {/* definition 9 */}
                  <DefinitionItem>
                    <ItemDescrip>
                      <strong>Publicidad: </strong> 
                      Es toda forma de comunicación realizada por parte del Operador de la Plataforma con el fin de brindar información sobre los productos, 
                      actividades comerciales o comunicar campañas promocionales sobre los productos alimenticios ofrecidos.
                    </ItemDescrip>
                  </DefinitionItem>

                  {/* definition 10 */}   
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
                  {/* object 1 */}
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

                  {/* object 2 */}
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
                      <br />
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

                  {/* object 3 */}
                  <ObjectItem>
                    <h4>Medios de Pago de la Plataforma. </h4> 
                    <ItemDescrip>
                      El Proveedor determinará de manera directa con el Usuario, las formas de pago disponibles para la adquisición efectiva del producto 
                      alimenticio exhibido a través de la Plataforma.
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 4 */}
                  <ObjectItem>
                    <h4>Derechos que el Expendedor otorga a TARGI.</h4> 
                    <ItemDescrip>
                      El Expendedor autoriza a <strong>TARGI</strong> a: (1) Usar el procesador y el hardware de almacenamiento de su dispositivo para facilitar el funcionamiento 
                      del Servicio, (2) Publicar avisos publicitarios u otro tipo de información de <strong>TARGI</strong> y de los socios comerciales, en cualquier parte de 
                      la Plataforma, (3) Vincular sus redes sociales como Gmail y Facebook con el fin de usarlas como acceso a su cuenta registrada en la 
                      Plataforma (4) Conocer su ubicación, (5) Realizar Notificaciones. 
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 5 */}
                  <ObjectItem>
                    <h4>Registro del Expendedor.</h4> 
                    <ItemDescrip>
                      Durante el proceso de registro se le pedirá al Expendedor tanto su razón social como su denominación social, nombre de usuario que tendrá en la cuenta, 
                      NIT, teléfono, correo electrónico y contraseña, que deberá ser manejada de manera confidencial en todo momento.  
                      <br />
                      Tratándose de persona natural, deberá diligenciar las generales de Ley, nombre, apellido, fecha de nacimiento, cédula de ciudadanía, correo electrónico y contraseña.
                      <br />
                      El Expendedor se compromete a no divulgar su nombre de Usuario y contraseña a terceros, además autoriza el acceso de <strong>TARGI</strong> a sus cuentas personales de Gmail y/o Facebook.
                      <br />
                      Al registrarse el Expendedor debe proporcionar la información de manera completa, fidedigna y exacta. 
                      <br />
                      Una vez el Expendedor complete el proceso de Registro de Usuario podrá acceder a ciertas funcionalidades de la Plataforma y configurarlo de acuerdo a su necesidad.
                      <br />
                      Se encuentra prohibido que el Expendedor tenga más de una (1) cuenta relacionada a cualquiera de los datos mencionados previamente. 
                      <br />
                      Al registrarse en la Plataforma, el Expendedor afirma que acepta los presentes <strong>Términos y Condiciones.</strong>
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 6 */}
                  <ObjectItem>
                    <h4>Configuración de Perfil</h4> 
                    <ItemDescrip>
                      Al registrarse en la Plataforma, el Expendedor puede modificar su perfil en cualquier momento si se trata únicamente de nombre de Usuario y  cambio de contraseña.
                      <br />
                      <strong>TARGI</strong> recuerda que la contraseña debe ser usada por el Expendedor de manera confidencial en todo momento.
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 7 */}
                  <ObjectItem>
                    <h4>Obligaciones del Expendedor:</h4> 
                    <ItemDescrip>
                      El Expendedor tiene obligaciones impuestas por las leyes y demás normatividad aplicable, que se resumen en las siguientes, sin detrimento de las demás normas aplicables:
                      <br />
                      <ul className="listNumber">
                        <li>7.1 Suministrar productos alimenticios de acuerdo a los lineamientos dados a conocer por <strong>TARGI</strong></li>
                        <li>7.2 Suministrar una descripción detallada del producto alimenticio ofrecido a través de la Plataforma, de manera que no induzca a error o a publicidad engañosa.</li>
                        <li>7.3 Suministrar el precio verdadero del producto, de manera que no induzca a error o publicidad engañosa.</li>
                        <li>7.4 Suministrar la cantidad exacta de productos disponibles en la Plataforma.</li>
                        <li>7.5 Entregar de manera oportuna y a satisfacción el producto adquirido por parte del Usuario.</li>
                        <li>7.6 Mantener libre de responsabilidad a <strong>TARGI</strong> de cualquier hecho que causa daño al Usuario con ocasión a los productos alimenticios vendidos por parte del Expendedor
                            a través de la Plataforma de su propiedad.</li>
                        <li>7.7 Mantener la confidencialidad al no compartir con terceros su nombre de Usuario y contraseña.</li>
                        <li>7.8 Actuar de manera veraz y exacta en función de los datos solicitados en la Plataforma para su posterior registro.</li>
                      </ul>
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 8 */}
                  <ObjectItem>
                    <h4>Precios informados en la Plataforma.</h4> 
                    <ItemDescrip>
                      <strong>EL EXPENDEDOR</strong> publicará directamente en la Plataforma los precios de los productos alimenticios así como las características y/o calidades de cada uno de ellos, 
                      con el fin de que los productos ofrecidos en la Plataforma y que motivaron la adquisición del mismo por parte del Usuario sea el realmente recibido por este.
                      <br />
                      El precio de los productos publicados en la Plataforma incluirá todos los impuestos que pudieran ser aplicables, según sea necesario o requerido por 
                      la ley tributaria vigente para el momento de adquisición del producto. 
                      <br />
                      El Expendedor debe garantizar que el precio ofertado al momento de la reserva sea el mismo que el Usuario debe pagar al momento de su pago.  
                      <br />
                      Los cambios en la información publicada en la Plataforma, en particular, acerca de los productos ofrecidos y sus precios tendrán efecto a partir del momento mismo 
                      de la publicación en caso de que no se establezca lo contrario, sin afectar, en caso alguno, los derechos adquiridos por el Usuario o actividades anteriormente acordados.
                      <br />
                      Tratándose de ofertas y/o promociones, en el momento mismo de su publicación se dará a conocer el término de vigencia de la misma, de manera que resulte claro 
                      para el Usuario el plazo por el cual se encuentra establecida la vigencia de la oferta y/o promoción.
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 9 */}
                  <ObjectItem>
                    <h4>Políticas de seguridad</h4> 
                    <ItemDescrip>
                      <strong>TARGI</strong> adoptará las medidas necesarias para resguardar la seguridad de los datos y de la contraseña secreta del Expendedor. En caso de 
                      detectarse cambios en la información registrada en la Plataforma, o ante cualquier irregularidad con el medio de pago, o simplemente como medida de protección 
                      a la identidad, <strong>TARGI</strong> podrá contactarse con el Expendedor por vía telefónica o correo electrónico, a fin de corroborar los cambios e intentar evitar posibles fraudes.
                      <br />
                      Los datos del Expendedor que voluntariamente son entregados a la Plataforma, sólo podrán ser tratados por <strong>TARGI</strong> para el diligenciamiento automático de los documentos, 
                      recibos o comprobantes asociados a las transacciones con la aclaración de que en ningún momento llegarán a ser entregados a terceros.
                      <br />
                      El Usuario podrá revocar la autorización de usar la información conforme a la Ley sobre protección de datos. Para realizar dicha revocatoria 
                      el Expendedor puede contactarse con <strong>TARGI</strong> o enviar un correo electrónico.
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 10 */}
                  <ObjectItem>
                    <h4>Restricciones de Uso</h4> 
                    <ItemDescrip>
                      El Expendedor no puede, directamente o por medio de cualquier persona realizar las siguientes actividades:
                      <br />
                      <ul className="listNumber">
                        <li>10.1 Usar la Plataforma para fines ilícitos, ilegales o no autorizados.</li>
                        <li>10.2 Usar la Plataforma en cualquier forma de spam, correo no solicitado o conducta similar.</li>
                        <li>10.3 Permitir el acceso a la cuenta en la Plataforma por Usuarios no autorizados. El Expendedor asume toda la responsabilidad 
                          por el uso no autorizado de la Plataforma.</li>
                        <li>10.4 Usar la Plataforma con fines no autorizados por un Usuario no autorizado.</li>
                        <li>10.5 Interferir o interrumpir el funcionamiento de la Plataforma o los servidores o redes que alojan <strong>TARGI</strong>, o desobedecer las 
                          leyes o reglamentos. requisitos, procedimientos, políticas o regulaciones de dichos servidores o redes.</li>
                        <li>10.6 Publicar o poner a disposición a través de la Plataforma cualquier contenido, texto o información que sea abusivo, amenazante, 
                          obsceno, difamatorio, calumnioso, o  discriminatorio en temas raciales, sexuales, religiosos o de otra manera desagradable u ofensivo.</li>
                        <li>10.7 Hacerse pasar por otro Expendedor o proporcionar información falsa en la Plataforma, ya sea directa o indirectamente.</li>
                        <li>10.8 Declarar falsamente o tergiversar su afiliación con cualquier persona o entidad, ni publicar información falsa o inexacta en la Plataforma.</li>
                        <li>10.9 Transmitir, distribuir, mostrar o hacer disponible a través de o en conexión con la Plataforma cualquier contenido, incluyendo contenido 
                          generado por el Expendedor, que pueda atentar contra los derechos de terceros, incluyendo los derechos de propiedad intelectual y los derechos de 
                          privacidad, o que pueda contener cualquier contenido ilegal.</li>
                        <li>10.10 Hacer capturas de pantalla, linking, hotlinking, enlace, indexación o cualquier redireccionamiento a otras páginas web o Aplicaciones; 
                          así como impresiones, reproducciones, distribuciones o publicaciones de contenidos alojados en <strong>TARGI</strong>, tales como, imágenes de cualquier tipo, logotipos, 
                          textos, recomendaciones, comentarios y cualquier otro elemento contenido en la Plataforma.</li>
                        <li>10.11 Tomar cualquier acción que imponga o pueda imponer, a criterio de <strong>TARGI</strong>, una carga irrazonable o desproporcionada en la infraestructura de su Plataforma.</li>
                        <li>10.12 Infringir las medidas de seguridad física o informática que <strong>TARGI</strong> disponga, a los fines de evitar o restringir el acceso a <strong>TARGI</strong> </li>
                        <li>10.13 Copiar, modificar, alterar, adaptar, poner a disposición, traducir, realizar ingeniería inversa, descompilar o desensamblar cualquier parte de la Plataforma.</li>
                        <li>10.14 Crear un browser, marco (framing), o interfaz gráfica de usuario (GUI) alrededor de la Plataforma  sin autorización de <strong>TARGI</strong> .</li>
                        <li>10.15 Realizar cualquier actividad que sea contraria al orden público y las normas de estricto cumplimiento que regulan este tipo de servicios en internet.</li>
                      </ul>
                      <br />
                      En caso de incumplimiento de las disposiciones establecidas en los Términos y Condiciones, <strong>TARGI</strong> cancelará la cuenta del <strong>Expendedor</strong> y podrá iniciar 
                      acciones legales por responsabilidad civil contractual o extracontractual y / o penal.
                      <br />
                      Como condición para el uso la Plataforma de propiedad de <strong>TARGI</strong> , el Expendedor acepta y garantiza que:
                      <ul>
                        <li>No infringirá o violará los Términos y Condiciones de <strong>TARGI</strong> </li>
                        <li>Posee la capacidad legal para aceptar estos Términos y Condiciones y por consiguiente, al aceptarlos establece un consentimiento 
                          libre de vicios con <strong>TARGI</strong> , que lo vincula obligatoriamente.</li>
                        <li>Se compromete a utilizar la Plataforma de conformidad con los presentes Términos y Condiciones, y cumplir plenamente con sus obligaciones.</li>
                        <li>En el ejercicio de los Términos y Condiciones no violará ningún otro acuerdo en el que el Expendedor esté obligado por disposición de cualquier 
                          ley, norma, reglamento, orden o sentencia judicial.</li>
                      </ul>
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 11 */}
                  <ObjectItem>
                    <h4>Enlaces con otras Plataformas Web e información que se compartirá</h4> 
                    <ItemDescrip>
                      <strong>TARGI</strong> se reserva el derecho de poder realizar conexiones y/o alianzas con otras Plataformas Web o empresas, en las que se puede utilizar la información proporcionada 
                      por el Expendedor para fines de mostrar anuncios publicitarios a través de la Plataforma de conformidad con los Términos y Condiciones de <strong>TARGI</strong> 
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 12 */}
                  <ObjectItem>
                    <h4>Política de Privacidad.</h4> 
                    <ItemDescrip>
                      <strong>TARGI</strong> respeta la privacidad del Expendedor y se compromete a proteger la información que incorpora a la Plataforma. El Expendedor 
                      tiene acceso a conocer las Políticas de Privacidad sobre el manejo de datos personales. 
                      <br />
                      El tipo de información del Expendedor y su manejo se describe en detalle en la <strong>Política de Privacidad de TARGI</strong>, que hace parte integral de este documento. 
                      Se entiende que el Expendedor conoce y acepta las <strong>Políticas de Privacidad</strong> una vez registrado como Expendedor en la Plataforma.
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 13 */}
                  <ObjectItem>
                    <h4>Marcas y nombres comerciales</h4> 
                    <ItemDescrip>
                      La marca, logo, lema comercial  y todos los otros identificadores relacionados con <strong>TARGI</strong> son de su propiedad estén o no registrados. Otras marcas registradas, marcas de servicio, 
                      nombres comerciales y logotipos que aparezcan en <strong>TARGI</strong> pertenecen a sus respectivos propietarios ("<strong>Marcas de Terceros</strong>"). 
                      <br />
                      A través del presente documento, el Proveedor confiere licencia de uso de marca en favor de <strong>TARGI</strong> con fines meramente informativos ante terceros de 
                      Proveedores con los que trabaja o ha trabajado <strong>TARGI</strong> .
                      <br />
                      Ningún derecho, licencia o interés para las marcas de <strong>TARGI</strong> son otorgados en este documento, y el Expendedor acepta que no existe derecho, licencia o 
                      interés con respecto a las marcas de <strong>TARGI</strong>  o las Marcas de Terceros.
                      <br />
                      En virtud de lo anterior, el Usuario evitará usar cualquiera de esas marcas sin autorización. Las Marcas relacionadas con <strong>TARGI</strong> y las Marcas de Terceros están reguladas por las normas y 
                      regulación de propiedad intelectual y demás disposiciones legales.
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 14 */}
                  <ObjectItem>
                    <h4>Enlaces a sitios web de terceros </h4> 
                    <ItemDescrip>
                      <strong>TARGI</strong> puede contener enlaces a sitios web de terceros ("Sitios de Terceros"), que pueden ser sugeridos por <strong>TARGI</strong>. El Expendedor reconoce que <strong>TARGI</strong> no tiene control sobre tales <strong>Sitios Web de 
                      Terceros</strong> y reconoce y acepta que <strong>TARGI</strong> no es responsable por la disponibilidad de los Sitios de Terceros ni por los servicios, contenidos, anuncios, productos o cualquier material disponible en ellos. 
                      <br />
                      El Expendedor también reconoce y acepta que <strong>TARGI</strong> no será responsable, directa o indirectamente, por cualquier daño o pérdida que sea causada por el uso de cualquier servicio, 
                      contenido, producto u otros materiales disponibles a través de los Sitios Web de Terceros. Los Sitios de Terceros se rigen por sus correspondientes Términos y Condiciones de Uso 
                      y Política de Privacidad, y por tanto, el Expendedor debe conocer y aceptar tales documentos antes de acceder a los Sitios de Terceros.
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 15 */}
                  <ObjectItem>
                    <h4>Anuncios </h4> 
                    <ItemDescrip>
                      <strong>TARGI</strong>  puede integrar anuncios o enlaces de patrocinio. Si un Expendedor hace clic en los anuncios puede ser transferido a un Sitio Web de un anunciante 
                      así como recibir mensajes, información y ofertas. 
                      <br />
                      Toda la información contenida en los anuncios pertenece exclusivamente a los anunciantes. <strong>TARGI</strong> no tiene ninguna representación en dichos anuncios, ni tiene 
                      control sobre los mismos. <strong>TARGI</strong> así como los anunciantes o terceros relacionados con los mismos pueden tener derecho a ciertas ganancias de tales anuncios. 
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 16 */}
                  <ObjectItem>
                    <h4>La disponibilidad y funcionalidad</h4> 
                    <ItemDescrip>
                      La disponibilidad y funcionalidad de la Plataforma de propiedad de <strong>TARGI</strong> depende de diversos factores, tales como redes de comunicación, software, 
                      hardware y proveedores de servicios y contratistas. <strong>TARGI</strong> no garantiza  que la Plataforma funcionará en todo momento sin interrupción, o que sea inmune de 
                      accesos no autorizados o libre de errores. 
                      <br />
                      <strong>TARGI</strong> hará todo lo posible en todo momento para procurar que la disponibilidad y funcionamiento de la Plataforma se encuentre en óptimas 
                      condiciones y que el Expendedor pueda acceder sin ningún inconveniente.
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 17 */}
                  <ObjectItem>
                    <h4>Cambios y cancelación de registro</h4> 
                    <ItemDescrip>
                    <strong>TARGI</strong> se reserva el derecho a permitir o negar el registro de cualquier Expendedor y puede cancelar en cualquier momento su registro en la Plataforma de su propiedad. de acuerdo a 
                    las <strong>Políticas de Cancelación</strong> que se encuentren publicadas en la Plataforma.
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 18 */}
                  <ObjectItem>
                    <h4>Licencia de la Plataforma.</h4> 
                    <ItemDescrip>
                      La Plataforma de propiedad de <strong>TARGI</strong> y su contenido son de propiedad de <strong>TARGI</strong> o los licenciantes de <strong>TARGI</strong>.
                      <br />
                      <strong>TARGI</strong> otorga una licencia al Expendedor por hacer uso de la Plataforma. 
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 19 */}
                  <ObjectItem>
                    <h4>Modificaciones a los Términos y Condiciones</h4> 
                    <ItemDescrip>
                      <strong>TARGI</strong> puede cambiar los Términos y Condiciones  y la Política de Privacidad en cualquier momento, previo aviso del Expendedor en lo referente al cambio de precios de los 
                      productos ofrecidos por él. 
                      <br />
                      En caso que los Términos y Condiciones deban modificarse para cumplir con requisitos legales, las modificaciones pueden tomar efecto incluso inmediatamente, o según lo requerido por la ley 
                      y sin necesidad de previo aviso. El Expendedor debe después de la entrada en vigencia de los nuevos cambios, leer e  indicar su aceptación. 
                      <br />
                      Se recomienda al Expendedor revisar los Términos y Condiciones de manera ocasional. En caso que el Expendedor no esté de acuerdo con la modificación a los Términos y 
                      Condiciones o Política de Privacidad pueden cancelar la cuenta en la Plataforma.
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 20 */}
                  <ObjectItem>
                    <h4>General</h4> 
                    <ItemDescrip>
                      <ul className="listNumber">
                        <li>20.1 Estos Términos y Condiciones no deben interpretarse como una relación, relación laboral empleado - empleador, agencia o relación franquiciador - franquiciado 
                          entre <strong>TARGI</strong>  y el Expendedor o terceros relacionados.</li>
                        <li>20.2 Cualquier reclamación relativa a <strong>TARGI</strong> o a su uso se regirá por las leyes vigentes, decisiones, tratados, entre otros documentos y disposiciones 
                          legales internacionales relacionados con propiedad intelectual, protección de datos y otros materiales relacionados con servicios o aplicaciones en Internet.</li>
                        <li>20.3 En caso de cualquier controversia entre el Expendedor y <strong>TARGI</strong> derivada de actos realizados en la Plataforma que tienen implicaciones legales según lo 
                          contenido en los presentes Términos y Condiciones, las partes se comprometen a dirimir las diferencias ante la Jurisdicción Ordinaria y aceptan que sea dicha 
                          Jurisdicción la competente para la resolución de dichas controversias.
                          <br />
                          Los Términos y Condiciones se encuentran regidos por la legislación nacional así como cualquier proceso que pudiera surgir entre el Expendedor y la Plataforma, 
                          independientemente de las disposiciones sobre conflictos de leyes. </li>
                        <li>20.4 Si cualquier disposición en estos Términos y Condiciones es ilegal, nula o ineficaz, dicha disposición se considerará separable de este documento y 
                          no afectará la validez y exigibilidad de las disposiciones restantes.</li>
                        <li>20.5 Estos términos constituyen los Términos y Condiciones vigentes y reemplazan cualquier otro acuerdo anterior verbal o escrito entre el Expendedor y <strong>TARGI</strong>.</li>
                      </ul>
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 21 */}
                  <ObjectItem>
                    <h4>Inquietudes o dudas del Expendedor.</h4> 
                    <ItemDescrip>
                      Si el Expendedor tiene alguna pregunta o comentario acerca de los Términos y Condiciones de Uso y/o Política de Privacidad, el 
                      Expendedor puede enviar un correo electrónico a la siguiente dirección: <a href="mailto:targi@sancrisoft.com">targi@sancrisoft.com</a>
                      <br />
                      <strong>TARGI</strong> responderá en el menor plazo posible.
                    </ItemDescrip>
                  </ObjectItem>

                  {/* object 22 */}
                  <ObjectItem>
                    <h4>Notificación y Datos de Contacto de TARGI </h4> 
                    <ItemDescrip>
                      <strong>TARGI</strong> se encuentra ubicado en la siguiente dirección y los datos de contacto son los siguientes, lo anterior para efectos de 
                      ser notificado de cualquier acto judicial o de cualquier tipo.
                      <br />
                      <br />
                      <span>Dirección:  Calle 49 Sur #45 A - 300. Oficina 931.</span>
                      <br />
                      <span>Teléfonos:  +57 (4) 4797416 o +57 305 428 8364</span>
                      <br />
                      <span>Correo Electrónico:  <a href="mailto:targi@sancrisoft.com">targi@sancrisoft.com</a></span>
                      <br />
                      <span>Última Actualización:  1 de Junio de 2020</span>
                    </ItemDescrip>
                  </ObjectItem>

                </ObjectList>
              </ContentObject>

              <Back href="/targi">Volver a Targi</Back>
            </ContentTerms>
          </PageSizer>
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
