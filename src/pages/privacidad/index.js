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
  ContentPolicy,
  TitlePolicy,
  SubtitlePolicy,
  PolicyDesc,
  BoxPolicy,
  BoxTitle,
  BoxSubtitle,
  BoxDesc,
  BoxList,
  BoxItem,
  Back
} from '../../styles/privacidad/styledComponents';

class Privacidad extends Component {   


    render() {
        return (
        <I18nextProvider i18n={i18n}>
          <GlobalFonts />
          <SEO title="Privacidad" keywords={['sancrisoft', 'digital-solutions', 'privacidad']} description="page Privacidad" />
          <PageSizer>
            <ContentPolicy>
              <TitlePolicy>Políticas de Privacidad</TitlePolicy>
              <SubtitlePolicy>ASPECTOS GENERALES</SubtitlePolicy>
              <PolicyDesc>
                En desarrollo de la legislación vigente en materia de Protección de Datos Personales del <strong>Reglamento General de Protección 
                de Datos Personales Europeo y la Alianza Europea de Publicidad Digital Interactiva, SANCRISOFT S.A.S.</strong>, domiciliada en 
                la ciudad de Medellín, Colombia, reglamenta el tratamiento de los datos personales de sus Usuarios, Proveedores, Terceros y 
                contactos web a los cuales se le da tratamiento.  
              </PolicyDesc>

              <PolicyDesc>
                Al entregar cualquier tipo de información personal, el titular ha aceptado que dicha información sea utilizada de acuerdo con la 
                presente Política, información que no será utilizada en ningún momento para propósitos diferentes a los aquí establecidos. En 
                el evento que dicha información personal vaya a ser utilizada para otros propósitos, ésta deberá estar amparada dentro de las 
                excepciones que prevé la normatividad, o deberá contar con una autorización expresa de su titular, según sea el caso.
              </PolicyDesc>

              <PolicyDesc>
                La presente Política se efectúa con el propósito de dar cumplimiento a lo exigido en el <strong>Reglamento General de Protección de 
                Datos Personales Europeo así como en la Ley 1582 de 2012</strong>, el cual ampara el derecho que tienen todas las personas naturales a conocer, 
                actualizar y rectificar la información personal que se le da tratamiento en <strong>SANCRISOFT</strong>, los demás derechos, libertades y garantías 
                constitucionales que surgen, en cabeza del titular del dato que se desprenden del tratamiento de sus datos personales.
              </PolicyDesc>

              <PolicyDesc>
                El tratamiento al cual son sometidos los datos personales obedece principalmente al desarrollo del objeto social de <strong>SANCRISOFT</strong> y a las 
                actividades conexas que se desprenden de esta.
              </PolicyDesc>

              {/* Box 1 */}
              <BoxPolicy>
                <BoxTitle>1. OBJETIVOS</BoxTitle>
                <BoxSubtitle>Objetivo General: </BoxSubtitle>
                <BoxDesc>
                  Establecer los criterios de aplicación en cuanto al tratamiento de datos personales por parte de <strong>SANCRISOFT</strong>. El tratamiento de los datos personales 
                  comprende cualquier operación o conjunto de operaciones sobre datos personales, tales como recolección, almacenamiento, uso, circulación, 
                  supresión, transferencia de datos.
                  <br />
                  <strong>SANCRISOFT</strong> asume el rol de Responsable del tratamiento o Encargado del tratamiento o usuarios de los datos personales, de acuerdo al caso.
                </BoxDesc>

                <BoxSubtitle>Objetivos Específicos: </BoxSubtitle>
                <BoxList>
                  <BoxItem>Establecer las políticas con las cuales se dará el tratamiento de los datos personales y la responsabilidad de <strong>SANCRISOFT</strong> en relación 
                    con el manejo de los datos personales de personas naturales.</BoxItem>
                  <BoxItem>Adoptar buenas prácticas, referentes a los cumplimientos de los requisitos legales, en lo concerniente a la protección de los datos 
                    y privacidad de la información personal.</BoxItem>
                  <BoxItem>Dar cumplimiento de los derechos contenidos en el <strong>Reglamento General de Protección de Datos Personales Europeo</strong>, los cuales corresponde a 
                     <strong> SANCRISOFT</strong>, a los Usuarios, Proveedores, Terceros y contactos web en relación con el tratamiento de los datos personales.</BoxItem>
                </BoxList>
              </BoxPolicy>

              {/* Box 2 */}
              <BoxPolicy>
                <BoxTitle>2. ALCANCE</BoxTitle>
                <BoxDesc>
                  La normatividad jurídica antes mencionada le será aplicable a los datos de personas naturales que se encuentran almacenados y registrados en las 
                  bases de datos administradas por <strong>SANCRISOFT</strong> en calidad de Responsable y/o Encargado. En este sentido, todas las áreas de <strong>SANCRISOFT</strong> que involucren el 
                  tratamiento de datos de carácter personal, deberá someterse a lo dispuesto en esta política.
                </BoxDesc>

                <BoxDesc>
                  <strong>SANCRISOFT</strong> sirve como portal de contacto entre los Proveedores que a través de la Plataforma exponen los productos en beneficio de los Usuarios 
                  que hacen uso de ella. En virtud de lo anterior, <strong>SANCRISOFT</strong> simplemente se dedica a hacer coincidir en un mismo espacio, llamado marketplace, 
                  a dos extremos de la cadena económica como lo son los Proveedores y sus Clientes.
                </BoxDesc>

                <BoxDesc>
                  Para acceder a la plataforma de <strong>SANCRISOFT</strong>, el Usuario y/o el PROVEEDOR deberán aceptar esta política de privacidad. Lo anterior 
                  lo hacemos con el fin de desarrollar nuestro objeto social.  
                </BoxDesc>

                <BoxDesc>
                  Para la información personal que el <strong>Usuario</strong> y/o el <strong>PROVEEDOR</strong> otorguen a <strong>SANCRISOFT</strong> para la contratación de los servicios anteriores, 
                  <strong>SANCRISOFT</strong> actuará como Responsable y Encargado de su tratamiento, cumpliendo con las obligaciones emanadas en la presente política de privacidad.
                </BoxDesc>
              </BoxPolicy>

              {/* Box 3 */}
              <BoxPolicy>
                <BoxTitle>3. DESTINATARIOS</BoxTitle>
                <BoxDesc>
                  La presente política se aplicará para todas las personas que de manera directa o indirecta tengan relación de cualquier tipo con <strong>SANCRISOFT</strong>, ellos incluyen, entre otros:
                </BoxDesc>

                <BoxList>
                  <BoxItem>Usuarios</BoxItem>
                  <BoxItem>Proveedores</BoxItem>
                  <BoxItem>Terceros</BoxItem>
                  <BoxItem>Directivos</BoxItem>
                  <BoxItem>Trabajadores (Actuales y Potenciales).</BoxItem>
                  <BoxItem>Aliados</BoxItem>
                </BoxList>
              </BoxPolicy>

              {/* Box 4 */}
              <BoxPolicy>
                <BoxTitle>4. DEFINICIONES</BoxTitle>

                <ol type="A">
                  <BoxItem>
                    <strong>AUTORIZACIÓN: </strong> 
                    se entiende como el consentimiento que de forma previa, expresa e informada otorga 
                    el titular de los datos personales al Responsable del tratamiento de la información para llevar a cabo el Tratamiento de datos personales</BoxItem>
                  <BoxItem>
                    <strong>BASES DE DATOS: </strong> 
                    listado que se encuentra de forma organizada, en el cual se encuentran los datos personales que son objeto de tratamiento.
                  </BoxItem>
                  <BoxItem>
                    <strong>DATO PERSONAL: </strong> 
                    Cualquier información vinculada o que pueda asociarse a una o varias personas naturales o jurídicas determinadas o determinables.
                  </BoxItem>
                  <BoxItem>
                    <strong>DATO PÚBLICO: </strong> 
                    Es el dato calificado como tal según los mandatos de la ley o de la Constitución Política y todos aquellos que no sean semiprivado, 
                    privados o sensibles. Por su naturaleza, los datos públicos pueden estar contenidos, entre otros, en registros públicos, documentos 
                    públicos, gacetas, boletines oficiales y sentencias judiciales debidamente ejecutoriadas que no estén sometidas a reserva y 
                    los relativos al estado civil de las personas.
                  </BoxItem>
                  <BoxItem>
                    <strong>DATO PRIVADO: </strong> 
                    es la información que por su característica íntima, reservada y personal solo le importa al titular.
                  </BoxItem>
                  <BoxItem>
                    <strong>DATO SENSIBLE: </strong> 
                    se entiende por dato sensible aquel que afecta la intimidad del titular o cuyo uso indebido puede generar su discriminación, tales 
                    como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, 
                    la pertenencia a sindicatos, organizaciones sociales, de derechos humanos o que promueva intereses de cualquier partido político 
                    o que garantice los derechos y las garantías de partidos políticos de oposición, así como los datos relativos a la salud, a la vida sexual y datos biométricos.
                  </BoxItem>
                  <BoxItem>
                    <strong>USUARIO: </strong> 
                    Es la persona natural mayor de dieciocho (18) años que realiza los siguientes actos a través de la Plataforma: 
                    <BoxList className="styleNone">
                      <BoxItem>
                        - Solicita directamente la adquisición de un producto determinado y expuesto a través de la Plataforma por parte de un tercero ajeno a <strong>SANCRISOFT</strong>.
                      </BoxItem>
                    </BoxList>
                  </BoxItem>
                  <BoxItem>
                    <strong>PROVEEDOR: </strong> 
                    Es la persona natural que ofrece sus producto directa y personalmente a través de la Plataforma.  
                  </BoxItem>
                  <BoxItem>
                    <strong>RESPONSABLE DEL TRATAMIENTO: </strong> 
                    <strong>SANCRISOFT</strong> respecto de los datos personales que posea de sus Usuarios, proveedores, Terceros, vinculados laborales, aliados, etc. Es él quien decide 
                    sobre la base de datos y/o tratamiento de los datos personales de las personas previamente referenciadas a título enunciativo.
                  </BoxItem>
                  <BoxItem>
                    <strong>ENCARGADO DEL TRATAMIENTO: </strong> 
                    Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta de la Compañía como Responsable de los datos.
                  </BoxItem>
                  <BoxItem>
                    <strong>HABEAS DATA: </strong> 
                    Derecho fundamental de toda persona para conocer, actualizar, rectificar y/o cancelar la información personal que se le de tratamiento y que se encuentren en bases de datos públicas o privadas.
                  </BoxItem>
                  <BoxItem>
                    <strong>TITULAR DEL DATO PERSONAL:</strong> 
                    Es la persona natural cuyos datos personales sean objeto de tratamiento. Sea usuario, empleado, o cualquier tercero que, en razón de una relación 
                    comercial o jurídica, suministre datos personales a <strong>SANCRISOFT</strong>.
                  </BoxItem>
                  <BoxItem>
                    <strong>TRANSFERENCIA: </strong> 
                    Se refiere al envío por parte de <strong>SANCRISOFT</strong> como Responsable del Tratamiento o un Encargado de los datos, a un tercer agente o persona natural/jurídica (receptor), 
                    dentro o fuera del territorio nacional para el tratamiento efectivo de datos personales.
                  </BoxItem>
                  <BoxItem>
                    <strong>TRANSMISIÓN: </strong> 
                    la cesión de datos que ocurre cuando el Responsable y/o Encargado del tratamiento de datos personales y que en virtud de un contrato de transmisión de datos personales, 
                    envía la información o los datos personales a un receptor, que a su vez es Responsable del Tratamiento y se encuentra dentro o fuera del país.
                  </BoxItem>
                  <BoxItem>
                    <strong>CESIÓN DE DATOS: </strong> 
                    Tratamiento de datos en la que se realiza una divulgación a una persona diferente al titular del dato o distinta al que se encuentre autorizado para recibir información personal
                  </BoxItem>
                  <BoxItem>
                    <strong>TRATAMIENTO DE DATOS PERSONALES: </strong> 
                    Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o supresión.
                  </BoxItem>
                  <BoxItem>
                    <strong>ALIANZA EUROPEA DE PUBLICIDAD DIGITAL INTERACTIVA/EUROPEAN INTERACTIVE ADVERTISING ALLIANCE (EDAA): </strong> 
                    es la Alianza que propone prácticas de privacidad responsables en toda la industria de la publicidad digital, brindando a los consumidores una mayor transparencia y control 
                    a través de principios multifacéticos que se aplican a datos de sitios múltiples y datos de aplicaciones cruzadas reunidos en cualquier computadora de escritorio.
                  </BoxItem>
                  <BoxItem>
                    <strong>REGLAMENTO GENERAL DE PROTECCIÓN DE DATOS PERSONALES (RGPD)/GENERAL DATA PROTECTION REGULATION: </strong> 
                    es la normativa que regula la protección de los datos personales de los ciudadanos que vivan en la Unión Europea.
                  </BoxItem>
                </ol>
              </BoxPolicy>

              {/* Box 5 */}
              <BoxPolicy>
                <BoxTitle>5. REGLAMENTO GENERAL DE PROTECCIÓN DE DATOS PERSONALES (RGPD)</BoxTitle>
                <BoxDesc>
                  <strong>SANCRISOFT</strong> implementa su recolección y tratamiento de datos, de acuerdo con la normatividad legal vigente, por lo cual:
                </BoxDesc>

                <BoxList>
                  <BoxItem>
                    Cuenta con un protocolo de seguridad establecido e implementado por todo el equipo de trabajo, el cual está capacitado con todas las normas 
                    de seguridad sobre los datos personales que se recolectan y almacenan en SANCRISOFT, para un uso apropiado de esta información.
                  </BoxItem>
                  <BoxItem>
                    Utiliza para el manejo de la información, herramientas e integraciones con terceros que cumplen con estándares internacionales con fines 
                    específicos sin derecho a ser compartidos o usados con un propósito distinto al que autorizó inicialmente el Usuario o el Proveedor. 
                  </BoxItem>
                  <BoxItem>
                    Cumple con principios generales de estándares internacionales en cuanto a calidad de los datos, consentimiento y derecho a la información; y le ofrece 
                    a todos los Usuarios de los datos, los derechos de acceso, rectificación, portabilidad de los datos, restricción, supresión y oposición.</BoxItem>
                  <BoxItem>
                    Cumple con los criterios generales de licitud, lealtad y transparencia de tratamiento de datos. Los fines estan determinados, explícitos y son legítimos. 
                  </BoxItem>
                  <BoxItem>
                    Aplica la minimización de datos, al recolectar solo los datos adecuados, pertinentes y limitados a lo necesario. Garantiza la exactitud y actualización 
                    de los mismos y los conserva sólo por el tiempo necesario para los fines del tratamiento.
                  </BoxItem>
                  <BoxItem>
                    Adecúa las medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado.
                  </BoxItem>
                </BoxList>
              </BoxPolicy>

              {/* Box 6 */}
              <BoxPolicy>
                <BoxTitle>6. AUTORIZACIÓN EXPRESA PARA LA TRANSFERENCIA Y USOS DE LOS DATOS PERSONALES</BoxTitle>
                <BoxDesc>
                  Tus datos personales se podrán procesar en cualquier otro país dependiendo de la ubicación de los proveedores, socios comerciales y demás entidades 
                  a las que se permita el acceso a esta información bajo las condiciones de las presentes Políticas de Privacidad. Al acceder o utilizar <strong>SANCRISOFT</strong>, 
                  o al transmitirnos tus datos personales, autorizas previa. expresa y específicamente a dicha transferencia y a cualquier finalidad relacionada con ella. 
                </BoxDesc>
              </BoxPolicy>

              {/* Box 7 */}
              <BoxPolicy>
                <BoxTitle>7. FINALIDAD DEL TRATAMIENTO DE LOS DATOS PERSONALES</BoxTitle>
                <BoxDesc>
                  <strong>SANCRISOFT</strong> en su condición de Encargado y/o Responsable del tratamiento de la información de carácter personal que recopila, almacena, actualiza, transmite 
                  o suprime datos de sus Usuarios, Proveedores, Terceros, Empleados, Aliados, etc., y comunidad en general, <strong>les da tratamiento a los datos para las finalidades 
                  descritas a continuación, no sin antes advertir que estas se limitan estrictamente al desarrollo del objeto social de SANCRISOFT y que se encuentran 
                  organizadas a través de las siguientes bases de datos.</strong>
                </BoxDesc>

                <BoxSubtitle>7.1. USUARIOS Y/O PROVEEDORES. </BoxSubtitle>
                <BoxList className="styleNone">
                  <BoxItem>7.1.1 <strong>SANCRISOFT</strong> solo recibirá de sus <strong>USUARIOS y PROVEEDORES</strong> los datos que sean necesarios, pertinentes y no excesivos para la 
                    finalidad del servicio que presta. Cuando se le exija a <strong>SANCRISOFT</strong>, por su naturaleza jurídica, la divulgación de datos del <strong>USUARIO</strong> o del <strong>PROVEEDOR</strong>, 
                    esta se efectuará con las previsiones que den cumplimiento a lo dispuesto en la norma y que prevengan a terceros sobre la finalidad de la información que se divulga.
                  </BoxItem>
                  <BoxItem>7.1.2 Cuando <strong>SANCRISOFT</strong> entregue datos de sus <strong>USUARIO</strong> o <strong>PROVEEDOR</strong>, estos deberán proteger los datos personales suministrados, conforme lo dispuesto en esta 
                    política. Para tal efecto se incluirá la previsión de auditoría respectiva en el contrato o documento que legitima la entrega de los datos personales. <strong>SANCRISOFT</strong> 
                    verificará que los datos solicitados sean necesarios, pertinentes y no excesivos respecto de la finalidad que fundamenta la solicitud de acceso a los mismos.
                  </BoxItem>
                  <BoxItem>7.1.3 <strong>SANCRISOFT</strong> , en ejercicio de su objeto social, recopilará la información personal del Usuario y del Proveedor que se inscriba en la 
                    Plataforma con el fin de adquirir o vender, respectivamente, los productos ofrecidos a través de su marketplace. La finalidad de recopilar y tratar los datos 
                    personales de los Usuarios y los Proveedores, hace referencia a la necesidad de que ambas partes creen una cuenta dentro de la Plataforma para efectos de poder 
                    acceder a ella. De esta manera el tratamiento de los datos personales se limita a los estrictamente necesarios para cumplir con dicha finalidad.
                  </BoxItem>
                  <BoxItem>7.1.4 Actividades necesarias, pertinentes y no excesivas para las finalidades mencionadas: 
                    {/* List box 7 */}
                    <BoxList className="styleNone">
                      <BoxItem> - Celebración de los contratos necesarios con los <strong>PROVEEDOR</strong> para el cumplimiento del objeto social de <strong>SANCRISOFT</strong> </BoxItem>
                      <BoxItem> - Creación de accesos en los sistemas suministrados por <strong>SANCRISOFT</strong>.</BoxItem>
                      <BoxItem> - Realizar encuestas y/o sondeos de opinión y de seguimientos de calidad de los servicios.</BoxItem>
                      <BoxItem> - Ser contactado para renovaciones, ofrecimiento de productos y servicios.</BoxItem>
                      <BoxItem> - Envío de información a entidades administrativas, gubernamentales o judiciales.</BoxItem>
                      <BoxItem> - Envió y/o Recepción de mensajes o a través de cualquier otro medio análogo y/o digital de comunicación creado o por crearse.</BoxItem>
                      <BoxItem> - Ejecución de obligaciones contractuales.</BoxItem>
                      <BoxItem> - Con propósitos de seguridad o prevención de fraude.</BoxItem>
                      <BoxItem> - Cualquier otra finalidad que resulte en el desarrollo del contrato o la relación entre el Usuario y/o el Proveedor y <strong>SANCRISOFT</strong>.</BoxItem>
                    </BoxList>
                  </BoxItem>
                </BoxList>
              </BoxPolicy>

              {/* Box 8 */}
              <BoxPolicy>
                <BoxTitle>8. ÁREA RESPONSABLE DE LA ATENCIÓN DE PETICIONES, QUEJAS, SUGERENCIAS, CONSULTAS Y RECLAMOS</BoxTitle>
                <BoxDesc>
                  Todo <strong>USUARIO o PROVEEDOR</strong> titular de Datos Personales tiene derecho a realizar consultas y solicitudes a <strong>SANCRISOFT</strong>  de forma gratuita, con el fin de conocer, 
                  acceder, actualizar, rectificar, suprimir información, solicitar la portabilidad de los datos y revocar la autorización o para realizar peticiones, quejas 
                  y reclamos respecto al Tratamiento que <strong>SANCRISOFT</strong>  da a la información.
                </BoxDesc>
                <BoxDesc>El Usuario o Proveedor puede contactarse con <strong>SANCRISOFT</strong>  vía correo electrónico o dejando un mensaje en su Plataforma.
                </BoxDesc>
                <BoxDesc>La consulta debe estar dirigida a <strong>SANCRISOFT</strong>, con el nombre completo del Usuario y/o el Proveedor, la descripción de la consulta, solicitud, petición, queja o reclamo, 
                  la dirección de residencia, el teléfono de contacto y el correo electrónico. El Usuario y/o el Proveedor titular de la información deberá presentar y/o adjuntar los siguientes documentos: 
                </BoxDesc>

                <BoxList>
                  <BoxItem>Si se trata del Usuario o del Proveedor: Documento de identidad válido. </BoxItem>
                  <BoxItem>
                    Si se trata del causahabiente: Documento de identidad válido, Registro Civil de Defunción del Usuario. Documento que acredite la calidad en que actúa y el número del documento de identidad del Usuario.
                  </BoxItem>
                  <BoxItem>
                    Si se trata de un representante legal y/o apoderado: Documento de identidad válido, Documento que acredite la calidad de Representante legal y/o apoderado del 
                    Usuario y/o el Proveedor y el número del documento de identidad del Usuario del Proveedor.
                  </BoxItem>
                </BoxList>

                <BoxDesc>
                  En caso que la consulta resulte incompleta, <strong>SANCRISOFT</strong> solicitará al interesado para que subsane las fallas dentro de los cinco (5) días siguientes a la recepción del reclamo. 
                  Transcurridos dos meses desde la fecha del requerimiento, sin que el solicitante presente la información requerida, se entenderá que ha desistido de la reclamación o petición. 
                </BoxDesc>
                <BoxDesc>
                  La consulta será atendida en un término máximo de diez (10) días hábiles contados a partir de la fecha de radicación. Cuando no fuere posible atender la consulta 
                  dentro de dicho término, se informarán los motivos de la demora, y la fecha en que se atenderá su consulta, la cual en ningún caso podrá superar los cinco (5) días 
                  hábiles siguientes al vencimiento del primer término. 
                </BoxDesc>

                <BoxSubtitle>La consultas deberán ser comunicadas a: </BoxSubtitle>
                <BoxDesc className="info">Teléfono:  +57 (4) 4797416 o +57 305 428 836</BoxDesc>
                <BoxDesc className="info">Correo electrónico:  <a href="mailto:targi@sancrisoft.com">targi@sancrisoft.com</a></BoxDesc>
              </BoxPolicy>

              {/* Box 9 */}
              <BoxPolicy>
                <BoxTitle>9. DERECHOS DEL TITULAR DE LA INFORMACIÓN</BoxTitle>
                <BoxDesc>
                  El titular de los datos personales así como la información personal especialmente protegidos tendrá los siguientes derechos:
                </BoxDesc>

                <ol type="a">
                  <BoxItem>
                    <strong>Derecho de Hábeas Data: </strong>
                    Comprende los derechos que tiene los titulares de los datos personales de conocer, actualizar, rectificar y excluir la información de bases de datos, 
                    bien porque se está haciendo un uso indebido de ella, o por simple voluntad del titular, salvo las excepciones previstas en la normatividad. 
                    Este derecho se podrá ejercer, entre otros frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo 
                    Tratamiento esté expresamente prohibido o no haya sido autorizado.
                  </BoxItem>
                  <BoxItem>
                    <strong>Derecho a la revocatoria del consentimiento: </strong> 
                    El titular de los datos personales tiene el derecho de revocar el consentimiento o la autorización que habilita a <strong>SANCRISOFT</strong> para un tratamiento 
                    con determinada finalidad, salvo en aquellos casos contemplados como excepciones por la ley o contractualmente pactados en contrario.
                  </BoxItem>
                  <BoxItem>
                    <strong>Derecho de oposición: </strong> 
                    El titular del dato tiene el derecho de oponerse al tratamiento de sus datos personales, salvo los casos en que tal derecho no proceda por disposición 
                    legal por vulnerar intereses generales superiores al interés particular.
                  </BoxItem>
                  <BoxItem>
                    <strong>Derecho a presentar quejas y reclamos o ejercer acciones: </strong> 
                    El titular del dato personal tiene derecho a presentar frente a <strong>SANCRISOFT</strong>, y en subsidio ante la Superintendencia de Industria y Comercio, o la entidad que fuera competente, 
                    quejas y reclamos, así como las acciones que resultaren pertinentes, para la protección de sus datos.
                  </BoxItem>
                  <BoxItem>
                    <strong>Derecho a solicitar prueba de la autorización: </strong> 
                    El titular del dato personal podrá solicitar prueba de la autorización otorgada a <strong>SANCRISOFT</strong>, salvo cuando expresamente se exceptúa como requisito para el tratamiento de 
                    conformidad con lo previsto en el Reglamento General de Protección de Datos Personales.
                  </BoxItem>
                  <BoxItem>
                    <strong>Derecho a otorgar autorización para el tratamiento de datos: </strong> 
                    En desarrollo del principio del consentimiento informado, el titular del dato tiene derecho a otorgar su autorización para llevar a cabo el tratamiento de los datos personales. 
                    Dicha autorización es cualificada, toda vez que es previa, expresa e informada.
                    <BoxDesc>Sin embargo de manera excepcional, esta autorización no será requerida en los siguientes casos: </BoxDesc>

                    <BoxList className="styleNone">
                      <BoxItem> - Cuando sea requerida por entidad pública o administrativa en cumplimiento de sus funciones legales, o por orden judicial.</BoxItem>
                      <BoxItem> - Cuando se trate de datos de naturaleza pública.</BoxItem>
                      <BoxItem> - En casos de emergencia médica o sanitaria.</BoxItem>
                      <BoxItem> - Cuando sea tratamiento de información autorizado por la ley para fines históricos, estadísticos o científicos.</BoxItem>
                      <BoxItem> - Cuando se trate de datos personales relacionados con el registro civil de las personas.</BoxItem>
                    </BoxList>
                  </BoxItem>
                </ol>
              </BoxPolicy>

              {/* Box 10 */}
              <BoxPolicy>
                <BoxTitle>10. INFORMACIÓN RECIBIDA DE LOS USUARIOS Y/O PROVEEDORES Y/O TERCEROS.</BoxTitle>
                <BoxDesc>
                  <strong>SANCRISOFT</strong> puede recopilar dos tipos de datos e información:
                </BoxDesc>

                <BoxDesc>
                  <strong>10.1 Información No Personal: </strong>
                  Es información anónima y no identificable ("<strong>información No Personal</strong>"). <strong>SANCRISOFT</strong> no conoce la identidad del Usuario y/o del Proveedor que por primera 
                  vez ingresa a la Plataforma sin iniciar sesión o registrarse como Usuario y/o Proveedor. La información no personal se clasifica en información 
                  técnica e información de comportamiento, como se detalla a continuación: 
                </BoxDesc>

                <BoxDesc>
                  <strong>10.1.1 Información técnica </strong>
                  <BoxList>
                    <BoxItem>Tipo de sistema operativo (Windows, Linux, etc..) </BoxItem>
                    <BoxItem>Tipo de navegador (Explorer, Firefox, Chrome, Safari, etc..) </BoxItem>
                    <BoxItem>Resolución de la pantalla (por ejemplo 800 x 600, 1024 x 768, etc..) </BoxItem>
                    <BoxItem>Idioma teclado y navegador (por ejemplo, Inglés) </BoxItem>
                    <BoxItem>Dirección IP. </BoxItem>
                    <BoxItem>Las configuraciones de los computadores, ajustes y cualquier otro dato técnico o información similar. </BoxItem>
                  </BoxList>
                </BoxDesc>

                <BoxDesc>
                  <strong>10.1.2 Información de comportamiento </strong>
                  <BoxList>
                    <BoxItem>Enlaces que el Usuario y/o el Proveedor utiliza durante la navegación en la página. </BoxItem>
                    <BoxItem>Información relacionada con las actividades del Usuario y/o del Proveedor en la página, como la fecha de ingreso, 
                      hora en que se accede a la página, duración de la visita a la página, entre otros. </BoxItem>
                    <BoxItem>Cualquier información sobre el comportamiento en la página.  </BoxItem>
                  </BoxList>
                </BoxDesc>

                <BoxDesc className="boxSeparate">
                  <strong className="strongTitle">10.1.3 Información de ubicación:  </strong>
                  Si el Usuario y/o el Proveedor permite a la página acceder a los servicios de ubicación a través del sistema de permisos que utiliza el 
                  sistema operativo para móviles, <strong>SANCRISOFT</strong> también podrá recopilar la ubicación exacta del dispositivo del Usuario y/o del Proveedor 
                  o la ubicación aproximada de la dirección IP.
                </BoxDesc>

                <BoxDesc className="boxSeparate">
                  <strong className="strongTitle">10.1.4 Uso e información de preferencias: </strong>
                  Recopilamos información sobre el Usuario y del Proveedor y los visitantes de <strong>SANCRISOFT</strong> cuando interactúan con los Servicios, preferencias expresadas 
                  y configuraciones seleccionadas. En algunos casos, <strong>SANCRISOFT</strong>, lo hace a través del uso de cookies, etiquetas de píxel y tecnologías similares que 
                  crean y mantienen identificadores únicos. 
                </BoxDesc>

                <BoxDesc className="boxSeparate">
                  <strong className="strongTitle">10.1.5. Información del dispositivo: </strong>
                  Podemos recopilar información acerca del dispositivo móvil del Usuario y/o del Proveedor, lo que incluye, por ejemplo, el modelo de hardware, el sistema 
                  operativo y la versión, los nombres y las versiones de los archivos y el software, el idioma preferido, el identificador único de dispositivo, 
                  identificadores de publicidad, el número de serie, la información de movimiento del dispositivo y la información de la red móvil.
                </BoxDesc>

                <BoxDesc className="boxSeparate">
                  <strong className="strongTitle">10.1.6. Información del registro: </strong>
                  Cuando el Usuario o el Proveedor interactúan con <strong>SANCRISOFT</strong>,  la Plataforma recopila los registros del servidor, que pueden incluir información como direcciones 
                  IP del dispositivo, fechas y horas de acceso, funciones de la página web o las páginas visitadas, bloqueos de la página web y otra actividad del sistema, 
                  tipo de navegador y el sitio de terceros o servicio que estaba utilizando antes de interactuar con nuestros Servicios.
                </BoxDesc>

                <BoxDesc>
                  <strong>10.2 Información Personal: </strong>
                  Es información individualmente identificable ("<strong>Información Personal</strong>")  que identifica al Usuario o al Proveedor y es de carácter privado. 
                  La Información Personal recopilada por <strong>SANCRISOFT</strong> consta de los datos personales ingresados voluntariamente por el Usuario o el Proveedor y que serán 
                  necesarios para la prestación del servicio.
                </BoxDesc>
              </BoxPolicy>

              {/* Box 11 */}
              <BoxPolicy>
                <BoxTitle>11. BASE DE DATOS</BoxTitle>
                <BoxDesc>
                  <strong>SANCRISOFT</strong> actúa como responsable y encargado del tratamiento de las siguientes bases de datos: 
                </BoxDesc>

                <BoxList>
                  <BoxItem>Base de datos de los Usuarios de <strong>SANCRISOFT</strong>.</BoxItem>
                  <BoxItem>Base de datos de los Proveedores de <strong>SANCRISOFT</strong></BoxItem>
                  <BoxItem>Base de datos de aliados, terceros, etc. </BoxItem>
                </BoxList>

                <BoxDesc>
                  Cada base de datos recopila y almacena la información personal respectiva, con autorización previa y de acuerdo a los fines establecidos 
                  en la presente política de privacidad. Dicha información puede tener manejo interno, es decir, dentro del LOBBY y/o externo, como con 
                  aliados o terceros.  La información personal contenida en esta base de datos es custodiada mientras dura la relación comercial más un 
                  periodo adicional de 10 años. Si en un caso individual, existen indicios de una necesidad de protección o de interés histórico de estos datos, 
                  se prolongará el plazo de almacenamiento hasta que se haya aclarado la necesidad legal de protección.
                </BoxDesc>
              </BoxPolicy>

              {/* Box 12 */}
              <BoxPolicy>
                <BoxTitle>12. RECOPILACIÓN DE LA INFORMACIÓN</BoxTitle>
                <BoxDesc>Existen dos momentos en que SANCRISOFT recibe la información: </BoxDesc>

                <BoxList className="styleNone">
                  <BoxItem>12.1. Al momento en que el Usuario diligencia el formulario.</BoxItem>
                  <BoxItem>12.2. Al momento en que el Proveedor diligencia el formulario.</BoxItem>
                  <BoxItem>12.3. Cuando el Usuario carga cualquier otro tipo de información en <strong>SANCRISOFT</strong> de manera posterior.</BoxItem>
                  <BoxItem>12.4. Cuando el Proveedor carga cualquier otro tipo de información en  <strong>SANCRISOFT</strong> de manera posterior.</BoxItem>
                </BoxList>
              </BoxPolicy>

              {/* Box 13 */}
              <BoxPolicy>
                <BoxTitle>13. TRANSFERENCIA DE DATOS A TERCEROS</BoxTitle>
                <BoxDesc>
                  Como norma general, sus datos no se transmitirán a terceros, excepto en los casos en los que está legalmente autorizado a hacerlo, en caso de 
                  que la transferencia de datos sea necesaria para el establecimiento de la relación contractual o cuando nos hayas dado tu consentimiento explícito 
                  previo para la transferencia de los datos. 
                </BoxDesc>
                <BoxDesc>
                  Para el manejo interno de los datos, éstos podrán ser conocidos por el personal autorizado de <strong>SANCRISOFT</strong> , los cuales deberán conocer los procedimientos de seguridad y recolección de datos.
                </BoxDesc>
                <BoxDesc>
                  Para el manejo externo de los datos, es decir, cuando le transfiero o transmito los datos personales a terceras personas nos aseguraremos que ellos cumplan 
                  con la legislación en materia de protección de datos, con las medidas de seguridad y las mismas garantías otorgadas por nosotros.
                </BoxDesc>
                <BoxDesc>
                  El alcance de los datos transmitidos será el mínimo necesario. Lo anterior de conformidad con las autorizaciones que hayan sido otorgadas por el 
                  Usuario o por el Proveedor titular de los datos personales. <strong>SANCRISOFT</strong>  para estos casos suscribirá el contrato de transmisión a que haya lugar si procede de acuerdo 
                  con la ley vigente. Una vez cese la necesidad de Tratamiento de los Datos Personales, los mismos serán eliminados de las bases de datos de <strong>SANCRISOFT</strong>  en términos seguros.
                </BoxDesc>
              </BoxPolicy>

              {/* Box 14 */}
              <BoxPolicy>
                <BoxTitle>14. DEBERES DE LOS RESPONSABLES Y ENCARGADOS</BoxTitle>
                <BoxDesc><strong>SANCRISOFT</strong> en calidad de responsable y/o encargado, según sea el caso, del tratamiento de datos personales bajo su custodia, 
                  deberá cumplir los siguientes deberes, sin perjuicio de las demás disposiciones previstas en la ley y en otras que rijan su actividad: </BoxDesc>

                <ol type="a">
                  <BoxItem>Garantizar al titular, en todo tiempo, el pleno y efectivo ejercicio del derecho de Hábeas Data.</BoxItem>
                  <BoxItem>Solicitar y conservar, en las condiciones previstas en la presente política, copia de la respectiva autorización otorgada por el titular.</BoxItem>
                  <BoxItem>Informar debidamente al titular sobre la finalidad de la recolección y los derechos que le asisten por virtud de la autorización otorgada.</BoxItem>
                  <BoxItem>Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.</BoxItem>
                  <BoxItem>Garantizar que la información que se suministre al encargado del tratamiento sea veraz, completa, exacta, actualizada, comprobable y comprensible.</BoxItem>
                  <BoxItem>Realizar oportunamente la actualización, rectificación o supresión de los datos en los términos de la ley; comunicando de forma oportuna al encargado del 
                    tratamiento, todas las novedades respecto de los datos que previamente le haya suministrado.</BoxItem>
                  <BoxItem>Rectificar la información cuando sea incorrecta y comunicar lo pertinente al encargado del tratamiento.</BoxItem>
                  <BoxItem>Suministrar al encargado del tratamiento, según el caso, únicamente datos cuyo tratamiento esté previamente autorizado de conformidad con lo previsto en la ley.</BoxItem>
                  <BoxItem>Exigir al encargado del tratamiento en todo momento respeto a las condiciones de seguridad y privacidad de la información del titular.</BoxItem>
                  <BoxItem>Tramitar las consultas y reclamos formulados en los términos señalados en esta política y en la ley.</BoxItem>
                  <BoxItem>Informar al encargado del tratamiento la circunstancia de que determinada información se encuentra en discusión por parte del titular, 
                    una vez se haya presentado la reclamación y no haya finalizado el trámite respectivo.</BoxItem>
                  <BoxItem>Informar a solicitud del titular sobre el uso dado a sus datos.</BoxItem>
                  <BoxItem>Informar a la autoridad de protección de datos cuando se presenten violaciones a los códigos de seguridad y existan riesgos en la administración de la información de los titulares.</BoxItem>
                  <BoxItem>Abstenerse de circular información que esté siendo controvertida por el titular y cuyo bloqueo haya sido ordenado por una autoridad judicial.</BoxItem>
                  <BoxItem>Permitir el acceso a la información únicamente a las personas que pueden tener acceso a ella.</BoxItem>
                  <BoxItem>Informar a la autoridad competente cuando se presenten violaciones a los “Códigos de Seguridad” y existan riesgos en la administración de la información de los titulares.</BoxItem>
                  <BoxItem>Auditar de forma periódica el cumplimiento de esta política por parte de los destinatarios de esta, integrada las buenas prácticas en seguridad de la información.</BoxItem>
                  <BoxItem>Llevar un registro de bases de datos que contengan datos personales.</BoxItem>
                  <BoxItem>Regular en los contratos con terceros el acceso a las bases que contengan información de carácter personal.</BoxItem>
                </ol>
              </BoxPolicy>

              {/* Box 15 */}
              <BoxPolicy>
                <BoxTitle>15. TEMPORALIDAD DEL DATO PERSONAL.</BoxTitle>
                <BoxDesc>En el tratamiento de datos personales que efectúa <strong>SANCRISOFT</strong>, la permanencia de los datos en sus sistemas de información estará determinada 
                  por la finalidad de dicho tratamiento. </BoxDesc>

                <BoxDesc>En consecuencia, agotada la finalidad para la cual se recolectaron los datos, <strong>SANCRISOFT</strong> procederá a su destrucción o devolución, según el caso, o bien a 
                  conservarlos según lo dispuesto en la ley, adoptando las medidas técnicas que impidan un tratamiento inadecuado.</BoxDesc>
              </BoxPolicy>

              {/* Box 16 */}
              <BoxPolicy>
                <BoxTitle>16. MEDIDAS DE SEGURIDAD</BoxTitle>
                <BoxDesc>En el tratamiento de los datos personales objeto de regulación en esta política, <strong>SANCRISOFT</strong> adoptará medidas de seguridad física, lógicas y administrativas, 
                  las cuales se clasifican en nivel alto, medio y bajo, conforme el riesgo que pueda derivar de la criticidad de los datos personales tratados.</BoxDesc>
              </BoxPolicy>

              {/* Box 17 */}
              <BoxPolicy>
                <BoxTitle>17. COOKIES Y ALMACENAMIENTO DE INFORMACIÓN LOCAL</BoxTitle>
                <BoxDesc><strong>SANCRISOFT</strong> puede usar tecnologías como "cookies" (o tecnologías similares), que almacena cierta información en el computador 
                ("Almacenamiento Local") y que permite la activación automática de ciertas características y el mejor uso del servicio.</BoxDesc>
              </BoxPolicy>

              {/* Box 18 */}
              <BoxPolicy>
                <BoxTitle>18. SEGURIDAD</BoxTitle>
                <BoxDesc>
                  <strong>SANCRISOFT</strong> prevé, cuida y adopta las medidas técnicas, humanas y administrativas que sean necesarias para mantener la seguridad de la información de 
                  los titulares de la cuenta y procura evitar su pérdida, adulteración, acceso o consulta de terceros no autorizados a la Plataforma a través de tecnologías 
                  estándar de la industria y los procedimientos internos, incluso mediante el uso de símbolos y mecanismos de encriptación. Sin embargo, <strong>SANCRISOFT</strong>  
                  no garantiza que nunca se produzcan accesos no autorizados. Así mismo, te garantizamos que:
                </BoxDesc>

                <BoxList>
                  <BoxItem>
                    <strong>SANCRISOFT</strong> cuenta con protocolos de seguridad y acceso a los sistemas de información, almacenamiento y procesamiento, incluidas medidas físicas de control de 
                    riesgos de seguridad. Permanentemente se realiza monitoreo al sistema a través de análisis de vulnerabilidades. El personal de <strong>SANCRISOFT</strong> que realiza el 
                    tratamiento de los datos personales ejecuta dichos protocolos con el fin de garantizar la seguridad de la información.
                  </BoxItem>
                  <BoxItem>
                    <strong>SANCRISOFT</strong> tiene el deber de notificar si existe una brecha de seguridad en la información del titular de la cuenta dentro de las 72 horas a la misma.
                    El acceso a las diferentes bases de datos se encuentra restringido incluso para los empleados y colaboradores.
                  </BoxItem>
                  <BoxItem>
                    Todos los empleados y terceros han suscrito cláusulas de confidencialidad en sus contratos y están comprometidos con la manipulación adecuada de las bases de 
                    datos atendiendo a los lineamientos sobre tratamiento de la información establecida en la Ley.
                  </BoxItem>
                  <BoxItem>Es responsabilidad del titular de la cuenta tener todos los controles de seguridad en sus equipos o redes privadas para su navegación hacia nuestros portales.</BoxItem>
                </BoxList>
              </BoxPolicy>

              {/* Box 19 */}
              <BoxPolicy>
                <BoxTitle>19. CAMBIOS EN LA POLÍTICA DE PRIVACIDAD</BoxTitle>
                <BoxDesc>Cualquier información del titular de la cuenta se encuentra regulada por los Términos y Condiciones y Políticas de Privacidad de <strong>SANCRISOFT</strong>. 
                  <strong>SANCRISOFT</strong> se reserva el derecho de modificarlas en cualquier momento, por lo cual se recomienda al titular de la cuenta visitar esta página con 
                  frecuencia. En caso de cualquier cambio material. <strong>SANCRISOFT</strong> hará lo posible para publicar un aviso de dicha modificación en la Plataforma.</BoxDesc>
                
                <BoxDesc>
                  Cualquier cambio en la Política de Privacidad empezará a regir a partir de la "última actualización" y el uso continuado del servicio por el titular de la cuenta en la fecha de última revisión constituirá aceptación de los mismos.
                </BoxDesc>
              </BoxPolicy>

              {/* Box 20 */}
              <BoxPolicy>
                <BoxTitle>20. REVOCATORIA DE LA AUTORIZACIÓN Y/O SUPRESIÓN DEL DATO</BoxTitle>
                <BoxDesc>
                  Todo titular de la cuenta o causahabiente de Datos Personales tiene derecho a solicitar a <strong>SANCRISOFT</strong> la eliminación total o parcial de sus Datos Personales. Para ello se seguirá el 
                  procedimiento establecido en el punto anterior de este documento.
                </BoxDesc>
                
                <BoxDesc>
                  La supresión de Datos operará y será definitiva siempre y cuando los mismos: (a) no estén siendo tratados conforme a lo establecido por la legislación vigente, (b) hayan dejado de ser necesarios para la 
                  finalidad con la cual se recaudaron o, (c) se haya superado el periodo de tiempo requerido para cumplir con el fin por el cual se recaudaron.
                </BoxDesc>

                <BoxDesc>
                  <strong>SANCRISOFT</strong> podrá negar la eliminación cuando: (a) El titular de la cuenta tenga el deber legal y/o contractual de permanecer en la base de datos; (b) La supresión 
                  de los datos obstaculice actuaciones judiciales o administrativas en curso.
                </BoxDesc>
              </BoxPolicy>

              {/* Box 21 */}
              <BoxPolicy>
                <BoxTitle>21. VIGENCIA</BoxTitle>
                <BoxDesc>
                  Las presentes Políticas de Tratamiento de la Información entran en vigencia a partir de su aceptación expresa, inequívoca y con conocimiento del propósito para el cual se efectúa 
                  el tratamiento de sus datos personales por parte de  <strong>SANCRISOFT</strong>. 
                </BoxDesc>
                
                <BoxDesc>
                  Las Bases de Datos que contienen la información de los Usuarios y Proveedores tendrán una vigencia de 10 años prorrogables por períodos iguales.
                </BoxDesc>
              </BoxPolicy>

              {/* Box 22 */}
              <BoxPolicy>
                <BoxTitle>22. GENERAL</BoxTitle>
                <BoxDesc>
                  En caso de cualquier controversia entre el titular de la cuenta y <strong>SANCRISOFT</strong> con relación a las Políticas de Privacidad, las partes se comprometen a llevar las diferencias ante la 
                  Jurisdicción Ordinaria colombiana y aceptan que sea esta Jurisdicción la competente de resolver los litigios generados entre ambos. 
                </BoxDesc>
              </BoxPolicy>

              {/* Box 23 */}
              <BoxPolicy>
                <BoxTitle>23. CONSENTIMIENTO, PREVIO, EXPRESO E INFORMADO.</BoxTitle>
                <BoxDesc>
                  Con la lectura y aceptación de las presentes Políticas de Tratamiento de Datos Personales, el <strong>Usuario</strong> y el <strong>Proveedor</strong> aceptan de manera previa, expresa e informada, 
                  el tratamiento de sus datos personales por parte de <strong>SANCRISOFT</strong>, así como de los terceros relacionados en este documento, reconociendo que se trata en todo momento 
                  de una finalidad legítima, sin que ello implique bajo ninguna circunstancia la posibilidad de que sean divulgados sus datos personales a terceras personas ajenas a 
                  las relacionadas en las presentes Políticas, sin su previa autorización por escrito, en virtud del principio de acceso y circulación restringida de los Datos Personales.
                </BoxDesc>

                <BoxDesc>
                  <strong>SANCRISOFT</strong> garantiza que la información sujeta a Tratamiento debe corresponderse a los postulados de veracidad, completitud y exactitud, e igualmente, 
                  deben ser comprobables y comprensibles. Igualmente, garantiza que cuenta con todos los medios técnicos disponibles y necesarios para que la información compilada 
                  sea técnicamente controlable para brindar un conocimiento restringido sólo a los Titulares, a <strong>SANCRISOFT</strong> y a los Terceros.
                </BoxDesc>

                <BoxDesc>
                  La información objeto de Tratamiento por parte de las personas previamente relacionadas están sujetas a confidencialidad, y por consiguiente, 
                  <strong>SANCRISOFT</strong> y los Terceros se encuentran obligadas a garantizar la reserva de la información. 
                </BoxDesc>
              </BoxPolicy>

              {/* Box 24 */}
              <BoxPolicy>
                <BoxTitle>24. NOTIFICACIONES</BoxTitle>
                <BoxDesc>
                  <strong>SANCRISOFT</strong> se encuentra ubicado en la siguiente dirección y los datos de contacto son los siguientes, lo anterior para efectos de ser 
                  notificado de cualquier acto judicial o de cualquier tipo. 
                </BoxDesc>

                <span>Dirección:  Calle 49 Sur #45 A - 300. Oficina 931. Envigado, Colombia.</span>
                <span>Teléfonos:  +57 (4) 4797416 o +57 (305) 428 836</span>
                <span>Correo Electrónico:  <a href="mailto:targi@sancrisoft.com">targi@sancrisoft.com</a></span>
                <span>Última Actualización:  1 de Junio de 2020</span>
              </BoxPolicy>

              <Back href="/targi">Volver a Targi</Back>
            </ContentPolicy>
          </PageSizer>
        </I18nextProvider>
    );
  }
}

// Queries for images (One query by image)
export const query = graphql`
query privacidadQuery {
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

export default withNamespaces('translations')(Privacidad)
