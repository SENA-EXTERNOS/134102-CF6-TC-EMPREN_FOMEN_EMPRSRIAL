<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Solicitud y financiamiento de créditos

    .row.justify-content-center.mb-5(data-aos='zoom-in-up')
      .col-11.d-none.d-lg-block
        .bloque-texto-a.color-primario.p-3.p-sm-4.p-md-5.fnd-in-left-02
          .bloque-texto-g__texto.py-4.px-5
            p.mb-0 Un emprendedor debe recurrir a una institución financiera y solicitar un crédito en el momento en el que desee poner en marcha su idea de negocio, pero no cuente con el capital semilla requerido; este será concluyente por el tiempo y la capacidad de pago que tenga; así, podrá obtener los recursos necesarios para la puesta en marcha de su emprendimiento. Es necesario conocer que cada organismo financiero tiene su propio control documental y cuenta con formatos definidos considerados bajo la normatividad y el sistema de calidad.

      //- Mobil
      .col-11.d-sm-block.d-lg-none
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.p-img
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema03/t3-i1.png")})` }'
          )
          .bloque-texto-g__texto.py-4.px-5
            p.mb-0 Un emprendedor debe recurrir a una institución financiera y solicitar un crédito en el momento en el que desee poner en marcha su idea de negocio, pero no cuente con el capital semilla requerido; este será concluyente por el tiempo y la capacidad de pago que tenga; así, podrá obtener los recursos necesarios para la puesta en marcha de su emprendimiento. Es necesario conocer que cada organismo financiero tiene su propio control documental y cuenta con formatos definidos considerados bajo la normatividad y el sistema de calidad.

    p.mb-5 Cuando una empresa está iniciando actividades se deben adjuntar los siguientes requisitos para la solicitud del préstamo:

    .col-lg-12
      AcordionA.mb-5(tipo='a', clase-tarjeta='tarjeta acordeonA')
        .row(titulo='Naturaleza del proyecto')
          .col-md-8.mb-4.mb-md-0
            p Se especifica lo que se desea hacer y la especialidad del proyecto.

          .col-md-4
            figure
              img(
                src='@/assets/template/tema03/t3-i2.png',
                alt='Texto que describa la imagen'
              )
        .row(titulo='Origen y justificación')
          .col-md-8.mb-4.mb-md-0
            p En este requisito se analiza el por qué se desea consolidar la empresa. Es donde muestra los instrumentos valorados en la idea de negocio sobre tendencias de mercado, experiencias similares, ventajas competitivas y hasta elementos como estímulos a la inversión que favorezcan el desarrollo del proyecto.

          .col-md-4
            figure
              img(
                src='@/assets/template/tema03/t3-i3.png',
                alt='Texto que describa la imagen'
              )
        .row(titulo='Objetivos, metas, localización y cobertura')
          .col-md-8.mb-4.mb-md-0
            p Se observa para qué se desea realizar; clarifican los resultados deseados y se muestra dónde se desea llevar a cabo.

          .col-md-4
            figure
              img(
                src='@/assets/template/tema03/t3-i4.png',
                alt='Texto que describa la imagen'
              )
        .row(titulo='Identificación y actividades del proceso')
          .col-md-8.mb-4.mb-md-0
            p Puntualiza cómo se va a realizar y el desarrollo de las actividades más importantes.

          .col-md-4
            figure
              img(
                src='@/assets/template/tema03/t3-i5.png',
                alt='Texto que describa la imagen'
              )
        .row(titulo='Mercado objetivo')
          .col-md-8.mb-4.mb-md-0
            p Explica a quién se dirige el esfuerzo a nivel comercial; cuáles serán los clientes y sus características.

          .col-md-4
            figure
              img(
                src='@/assets/template/tema03/t3-i6.png',
                alt='Texto que describa la imagen'
              )
        .row(titulo='Programación y cronograma')
          .col-md-8.mb-4.mb-md-0
            p Detalla el cuándo de cada actividad para el desarrollo del proyecto.

          .col-md-4
            figure
              img(
                src='@/assets/template/tema03/t3-i7.png',
                alt='Texto que describa la imagen'
              )
        .row(titulo='Talento humano e historia de los socios')
          .col-md-8.mb-4.mb-md-0
            p Habla acerca de las personas que van a desarrollar el proyecto. De igual forma, es el espacio para hablar de los socios, la experiencia, la trayectoria y el impacto en el proyecto a desarrollar.

          .col-md-4
            figure
              img(
                src='@/assets/template/tema03/t3-i8.png',
                alt='Texto que describa la imagen'
              )
        .row(titulo='Recursos financieros')
          .col-md-8.mb-4.mb-md-0
            p Enumera con qué recursos se desarrollará el proyecto y su origen.

          .col-md-4
            figure
              img(
                src='@/assets/template/tema03/t3-i9.png',
                alt='Texto que describa la imagen'
              )
        .row(
          titulo='Análisis técnico, de mercado, marco legal y administrativo'
        )
          .col-md-8.mb-4.mb-md-0
            p Se observa, principalmente, el detalle de la investigación de mercados, sus características, la competencia, los elementos diferenciadores, los planes y estrategias comerciales. Además, se determina el plan estratégico empresarial, la misión, la visión, los objetivos, valores y estructura de operación.
            p Aquí se muestran el alcance técnico y tecnológico del proyecto; al igual que la naturaleza jurídica del ente a crear, las normatividades especiales, licencias, patentes, marcas, derechos, franquicias, entre otros.
            p Al mismo tiempo, en este requisito, se incluye certificado de la Cámara de Comercio, si aplica el requisito, o mismo que autorizaciones para operación de entidades especiales; Registro único tributario (RUT), si ya lo tiene, y la enumeración de posibles garantías en caso de aprobación del crédito.
          .col-md-4
            figure
              img(
                src='@/assets/template/tema03/t3-i10.png',
                alt='Texto que describa la imagen'
              ) 
        .row(titulo='Análisis económico y financiero')
          .col-md-8.mb-4.mb-md-0
            p Aquí se pormenoriza la viabilidad financiera del proyecto, la inversión, las proyecciones, los costos, los gastos, el punto de equilibrio, las necesidades de financiación, los márgenes, la rentabilidad, la amortización de intereses y capital del crédito solicitado, entre otros. El elemento cuantitativo, en este caso, se centra en demostrar que el proyecto es viable al menos en dos escenarios: optimista y pesimista.
          .col-md-4
            figure
              img(
                src='@/assets/template/tema03/t3-i11.png',
                alt='Texto que describa la imagen'
              )

    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.cajon-color-2.p-4
          p.mb-0 Los requisitos generales son:
          br
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Fotocopia del Nit/Rut.
            li 
              i.lista-ul__vineta
              | Fotocopia del documento de identidad del representante legal.
            li 
              i.lista-ul__vineta
              | Fotocopia de los certificados de tradición y libertad del inmueble.
            li 
              i.lista-ul__vineta
              | Fotocopia de la tarjeta de propiedad de vehículo.
            li 
              i.lista-ul__vineta
              | Fotocopia del contrato de compraventa de vehículo o inmuebles.
            li 
              i.lista-ul__vineta
              | Certificado de constitución y gerencia expedido por la Cámara de Comercio.

      

    h3.mb-4
      i.fas.fa-square.color_texto_acento.me-3
      | Los créditos

    p Se hace necesario hacer énfasis en el concepto de crédito y no confundirlo con préstamo. La diferencia radica en que en el crédito, el cliente cuenta con un dinero a su disposición y solo paga intereses por la cantidad que utiliza pero, por el contrario, en el préstamo, el cliente recibe todo el dinero y paga intereses por la totalidad sin importar cuánto realmente gaste. En el mercado financiero existen varios tipos de crédito y algunos criterios que se deben tener en cuenta, a la hora de elegir uno de estos.

    p Cabe mencionar que el emprendedor, antes de tomar una decisión referente al crédito a elegir, revise algunos criterios expuestos a continuación:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo='<strong>Tipos de crédito</strong>')
        .row
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Tarjetas de crédito.
              li 
                i.lista-ul__vineta
                | Créditos de libre inversión.
              li 
                i.lista-ul__vineta
                | Créditos hipotecarios.
              li 
                i.lista-ul__vineta
                | Crédito de nómina o libranza.
              li 
                i.lista-ul__vineta
                | Microcréditos.
              li 
                i.lista-ul__vineta
                | Créditos comerciales.
              li 
                i.lista-ul__vineta
                | Crédito educativo.
              li 
                i.lista-ul__vineta
                | Crédito con garantía prendaria.
              li 
                i.lista-ul__vineta
                | Compra de cartera.

          .col-md-6
            figure
              img(
                src='@/assets/template/tema03/t3-i12.png',
                alt='Texto que describa la imagen'
              )
      .py-3.py-md-4(titulo='<strong>Criterios para elegir el crédito</strong>')
        .row
          .col-md-6
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Tasa de interés.
              li 
                i.lista-ul__vineta
                | Monto total a pagar.
              li 
                i.lista-ul__vineta
                | Cuota a pagar.
              li 
                i.lista-ul__vineta
                | Plazo del crédito.
              li 
                i.lista-ul__vineta
                | Codeudor (para algunos créditos).
          .col-md-6.mb-4.mb-md-0
            figure
              img(
                src='@/assets/template/tema03/t3-i13.png',
                alt='Texto que describa la imagen'
              )

    h3.mb-4
      i.fas.fa-square.color_texto_acento.me-3
      | Trámites y validación de la información

    p.mb-5 Luego de conocer los requisitos para la solicitud de un crédito, expondremos los trámites y la validación de la información para su correcto desarrollo. Una vez recolectada toda la información solicitada por la entidad financiera, es necesario:

    .row.d-flex.justify-content-center.mb-5
      .col-lg-10.col-12
        LineaTiempoB.color-acento-contenido.mb-5(:datos='datosLineaTiempoB') 

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.cajon-color-2.p-4
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
          
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosLineaTiempoB: [
      {
        texto:
          'Realizar la solicitud y diligenciar todos los soportes y garantías para continuar con el trámite.',
        icono: require('@/assets/template/tema03/t3-i14.svg'),
      },
      {
        texto:
          'Una vez efectuado todo el proceso de solicitud del crédito, se valida la información con los soportes entregados requeridos por el banco para el estudio del crediticio.',
        icono: require('@/assets/template/tema03/t3-i15.svg'),
      },
      {
        texto:
          'Cuando se ha revisado y validado la información, este pasa a estudio en el que revisan si se cumplen los requisitos solicitados como capacidad de endeudamiento, de pago, liquidez, entre otros.',
        icono: require('@/assets/template/tema03/t3-i16.svg'),
      },
      {
        texto:
          'Seguido de ello, se le da una respuesta de aprobación o rechazo. Si el crédito es aprobado, se debe comunicar al interesado la respuesta a la solicitud para realizar el respectivo desembolso del dinero.',
        icono: require('@/assets/template/tema03/t3-i17.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
