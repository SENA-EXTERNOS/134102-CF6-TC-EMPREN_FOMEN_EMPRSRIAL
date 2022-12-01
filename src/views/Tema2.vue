<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Productos financieros, normatividad y portafolio

    .row.justify-content-center.mb-5
      .col-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.p-img
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema02/t2-i1.png")})` }'
          )
          .bloque-texto-g__texto.py-4.px-5
            p.mb-0 Luego de conocer la confidencialidad de la información y el tratamiento de datos, se presentarán los productos financieros; estos pueden ser ofrecidos por un banco o una institución financiera que apoya el ahorro y la inversión de formas diversas dependiendo del riesgo que cada cliente quiera asumir con el fin de obtener rentabilidad. A continuación, veamos la normativa que las rige:

    p.mb-5 La normatividad en el ámbito financiero:

    .row.mb-5
      .col-lg-9
        TabsA.color-acento-contenido.fz-13
          .tarjeta.bg-03.p-4(titulo='Ley 45 de 1990')
            p Por la cual se expiden normas en materia de intermediación financiera, regula la actividad aseguradora, conceden unas facultades y dictan otras disposiciones.
          .tarjeta.bg-03.p-4(titulo='Ley 35 de 1983')
            p Por la cual se dictan normas generales, se señalan en ellas los objetivos y criterios a los cuales debe sujetarse el Gobierno Nacional para regular las actividades financiera, bursátil y aseguradora y cualquier otra relacionada con el manejo, aprovechamiento e inversión de recursos captados del público y se dictan otras disposiciones en materia financiera y aseguradora.
          .tarjeta.bg-03.p-4(titulo='Ley 510 de 1999')
            p Por la cual se dictan disposiciones en relación con el sistema financiero y asegurador, el mercado público de valores, las Superintendencias Bancaria y de Valores y se conceden unas facultades.
          .tarjeta.bg-03.p-4(titulo='Ley 546 de 1999')
            p Por la cual se dictan normas en materia de vivienda; señala los objetivos y criterios generales a los cuales debe sujetarse el Gobierno Nacional para regular un sistema especializado para su financiación, se crean instrumentos de ahorro destinado a dicha financiación, se dictan medidas relacionadas con los impuestos y otros costos vinculados a la construcción y negociación de vivienda y se expiden otras disposiciones.
          .tarjeta.bg-03.p-4(titulo='Ley 795 de 2003')
            p Por la cual se ajustan algunas normas del Estatuto Orgánico del Sistema Financiero y se dictan otras disposiciones.
          .tarjeta.bg-03.p-4(titulo='Ley 964 de 2005')
            p Por la cual se dictan normas generales y se señalan en ellas los objetivos y criterios a los cuales debe sujetarse el Gobierno Nacional para regular las actividades de manejo, aprovechamiento e inversión de recursos captados del público que se efectúen mediante valores, y se dictan otras disposiciones.
          .tarjeta.bg-03.p-4(titulo='Ley 1328 de 2009')
            p Por la cual se dictan normas en materia financiera, de seguros, del mercado de valores y otras disposiciones.
          .tarjeta.bg-03.p-4(titulo='Decreto 663 de 1993')
            p Estatuto orgánico del sistema financiero.
      .col-lg-3
        figure(data-aos='zoom-in')
          img(
            src='@/assets/template/tema02/t2-i2.png',
            alt='Texto que describa la imagen'
          ) 

    h3.mb-4
      i.fas.fa-square.color_texto_acento.me-3
      | Portafolio

    p La mayoría de las entidades financieras ofrecen una variedad de productos o servicios para todos los públicos y necesidades del mercado con el fin de captar clientes de inversión; algunos de los productos financieros que se encuentran en el mercado son:
    p A continuación, se listan los productos que disponen las entidades financieras:

    .row.mb-5
      .col-lg-12.mb-5
        .row.d-flex.justify-content-center
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .col-lg-12.t-2-nivel1-tarjeta
            .tarjeta--boton.p-4.t-2-nivel2-tarjetaA.bg-01
              .row.justify-content-center.mb-3.t-2-nivel3-tarjeta.mb-4
                .col-lg-5.col-3
                  figure
                    img(
                      src='@/assets/template/tema02/t2-i3.svg',
                      alt='Texto que describa la imagen'
                    )
              h4.text-center Productos financieros de inversión
              p.text-center Lo conforman los fondos de inversión, acciones o planes de pensiones, entre otros.

          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .col-lg-12.t-2-nivel1-tarjeta
            .tarjeta--boton.p-4.t-2-nivel2-tarjetaA.bg-01
              .row.justify-content-center.mb-3.t-2-nivel3-tarjeta.mb-4
                .col-lg-5.col-3
                  figure
                    img(
                      src='@/assets/template/tema02/t2-i4.svg',
                      alt='Texto que describa la imagen'
                    )

              h4.text-center Productos financieros de ahorro
              p.text-center Hace referencia a los depósitos a plazo fijo o cuentas de ahorro.
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .col-lg-12.t-2-nivel1-tarjeta
            .tarjeta--boton.p-4.t-2-nivel2-tarjetaA.bg-01
              .row.justify-content-center.mb-3.t-2-nivel3-tarjeta.mb-4
                .col-lg-5.col-3
                  figure
                    img(
                      src='@/assets/template/tema02/t2-i5.svg',
                      alt='Texto que describa la imagen'
                    )

              h4.text-center Productos financieros de financiación
              p.text-center Hace referencia a las hipotecas o créditos.

    p.mb-5 Anteriormente se ha tocado el tema de productos financieros de una manera rápida y superficial, en el siguiente video se profundiza sobre estos haciendo especial énfasis en sus ventajas y la importancia de los mismos en todo el Sistema Financiero colombiano.

    .col-12.mb-5
      figure
        .video
          iframe(
            width='560',
            height='315',
            src='https://www.youtube.com/embed/2L91WMqw96A',
            title='YouTube video player',
            frameborder='0',
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowfullscreen
          )

    h3.mb-5
      i.fas.fa-square.color_texto_acento.me-3
      | Características del mercado financiero

    p.mb-5 Al conocer los seis productos financieros, es importante ahondar en las principales características del mercado financiero:

    .row.justify-content-center.mb-5
      .col-lg-8
        ImagenInfografica.color-acento-botones.punto_caliente_acento_botones(
          data-aos='zoom-in'
        )
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema02/t2-i6.svg')

          .tarjeta.color-acento-botones_black.p-3(
            x='2.5%',
            y='62.3%',
            numero='+'
          )
            p En las transacciones no se cobran impuestos por los movimientos que se realicen.
          .tarjeta.color-acento-botones_black.p-3(
            x='7.5%',
            y='35%',
            numero='+'
          )
            p Corresponde al número de títulos financieros que se encuentran en el mercado; mientras más títulos en el mercado más grande será este.
          .tarjeta.color-acento-botones_black.p-3(
            x='37%',
            y='21.6%',
            numero='+'
          )
            p Todo inversor que quiera tener información de los activos que forman parte de los mercados financieros puede obtenerla de manera fácil y rápida.
          .tarjeta.color-acento-botones_black.p-3(x='81%', y='41%', numero='+')
            p En el mercado financiero no existe barrera para la compra y venta de los activos.
          .tarjeta.color-acento-botones_black.p-3(
            x='82%',
            y='76.2%',
            numero='+'
          )
            p Dependiendo del número de órdenes de compra y venta negociadas se determina el nivel de profundidad del mercado.
          .tarjeta.color-acento-botones_black.p-3(
            x='37%',
            y='82.1%',
            numero='+'
          )
            p Esta depende de la capacidad que tienen los agentes de responder a una orden de compra y venta.

    h3.mb-4
      i.fas.fa-square.color_texto_acento.me-3
      | Capital semilla, políticas y trámites

    .row.mb-5
      .col-lg-4.col-12
        figure
          img(
            src='@/assets/template/tema02/t2-i7.png',
            alt='Texto que describa la imagen'
          )
      .col-lg-8.col-12
        p.mb-0 Por otra parte, y teniendo claridad en las características del mercado financiero, hablaremos del concepto de capital semilla, las políticas y trámites. El primero hace referencia al recurso inicial que requiere el emprendedor para poner en marcha su proyecto, este se ha convertido en fuente principal de financiación para los negocios que se encuentran en etapa de creación o consolidación. El segundo hace referencia a las políticas específicas, que tienen cada entidad financiera, para obtener el recurso inicial de financiación; a estas el emprendedor debe ajustarse con el fin de obtener los recursos necesarios para su negocio. Es de aclarar que, en la mayoría de los casos, las instituciones financieras exigen a los emprendedores tener activos que puedan ser ofrecidos como garantías, y demostrar, a través de sus ventas, la capacidad de pago. Por último, cada entidad financiera tiene definidos los requisitos para tramitar el capital semilla, que en términos generales son los siguientes: 

    p Es importante aclarar que los documentos a mencionar son algunos que solicitan las instituciones financieras para iniciar el trámite y desembolso del préstamo como el capital semilla, y cada entidad tiene su propia política de acuerdo con el monto requerido.

    .row.mb-5
      .row.d-flex.justify-content-center
        SlyderF(columnas='col-lg-6 col-xl-4')(data-aos='zoom-in')
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema02/t2-i8.svg',
                      alt='AvatarTop'
                    )
                  p.text-center La fotocopia de la cédula.

          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema02/t2-i9.svg',
                      alt='AvatarTop'
                    )
                  p.text-center El certificado de residencia que con mínimo debe tener dos años de antigüedad expedida por la junta de acción comunal.

          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema02/t2-i10.svg',
                      alt='AvatarTop'
                    )
                  p.text-center La descripción del proyecto.

          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema02/t2-i11.svg',
                      alt='AvatarTop'
                    )
                  p.text-center El certificado de antecedentes fiscales, judiciales y disciplinarios.

          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema02/t2-i12.svg',
                      alt='AvatarTop'
                    )
                  p.text-center El certificado de medidas correctivas RNMC.

    .row.justify-content-center.mb-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.p-img
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema02/t2-i13.png")})` }'
          )
          .bloque-texto-g__texto.py-4.px-5
            ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Fondo Emprender. 
                  li 
                    i.lista-ul__vineta
                    | Centro de Ciencia y Tecnología de Antioquia.                 
                  li 
                    i.lista-ul__vineta
                    | Tecnnova.                 
                  li 
                    i.lista-ul__vineta
                    | Opino.                 
                  li 
                    i.lista-ul__vineta
                    | Innpulsa.                 

    p Estas entidades buscan apoyar a los emprendedores con ideas de negocios que son prometedoras, impulsan el crecimiento rápido sean rentables y, lo más importante, que sean sostenibles a medida que avanza el tiempo. Adicional a las anteriores entidades, existen otras a destacar como Cultura E, Tecnoparques, Bancóldex, Ruta N, Parquesoft, Créame, Colciencias, entre otras.
    p.mb-5 Para acceder al apoyo que el país brinda a los emprendimientos, lo único que deben hacer los interesados es generar una propuesta interesante, sostenible y que cumpla con unos requisitos específicos para el desembolso; así poder disfrutar de un capital que contribuya a negocios que generen empleo y oportunidad de desarrollo al país.

    h3.mb-4
      i.fas.fa-square.color_texto_acento.me-3
      | Créditos, financiación y requerimientos 

    .row.justify-content-center.mb-5(data-aos='zoom-in-up')
      .col-11.d-none.d-lg-block
        .bloque-texto-a.color-primario.p-3.p-sm-4.p-md-5.fnd-in-left-01
          .bloque-texto-g__texto.py-4.px-5
            p.mb-0 Aparte del capital semilla, las políticas y trámites, existe otra forma de financiación: los créditos. Estos son una operación que se realiza entre personas o instituciones crediticias con el propósito de conceder a un individuo cierta cantidad de dinero; en esta acción se debe asumir el compromiso de devolución del valor prestado más los intereses pactados. Asimismo, el mecanismo mediante el cual se aporta dinero o se concede un crédito a una persona o empresa, para que este lleve a cabo un proyecto, es denominado financiación; funciona como una herramienta importante para los emprendedores ya que, haciendo uso de ella, puede materializar sus ideas y planificar sus actividades de lanzamiento al mercado.              

      //- Mobil
      .col-11.d-sm-block.d-lg-none
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.p-img
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema02/t2-i21.png")})` }'
          )
          .bloque-texto-g__texto.py-4.px-5
            p.mb-0 Aparte del capital semilla, las políticas y trámites, existe otra forma de financiación: los créditos. Estos son una operación que se realiza entre personas o instituciones crediticias con el propósito de conceder a un individuo cierta cantidad de dinero; en esta acción se debe asumir el compromiso de devolución del valor prestado más los intereses pactados. Asimismo, el mecanismo mediante el cual se aporta dinero o se concede un crédito a una persona o empresa, para que este lleve a cabo un proyecto, es denominado financiación; funciona como una herramienta importante para los emprendedores ya que, haciendo uso de ella, puede materializar sus ideas y planificar sus actividades de lanzamiento al mercado.             

    p.mb-5 A continuación, se presentarán los diferentes tipos de financiamiento según el tiempo, el lugar de proveniencia, y dependiendo la propiedad:

    .row.d-flex.justify-content-center.mb-5
      .col-lg-11.col-12
        PasosA.color-acento-contenido.mb-5(tipo='n')
          .row
            .col-md-10.col-8.mb-md-0
              h3 Financiamiento a corto plazo
              p.text-start Este es el que realiza a un término de un año.
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i14.svg',
                  alt='Texto que describa la imagen'
                )    
          .row
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i15.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-10.mb-md-0.col-8
              h3.text-start Financiamiento a largo plazo
              p.text-start El plazo de pago es superior a un año. En este tipo de financiamiento cuando se realiza a través de una institución financiera o proveniente de amigos o familiares, en algunos casos, no se fija una fecha límite de pago.
          .row
            .col-md-10.col-8.mb-md-0
              h3 Financiamiento Interno
              p.text-start Es cuando la empresa recurre a sus propios medios económicos y producto de su actividad para reinvertir en su propio beneficio. Puede proceder de reservas, amortizaciones etc.
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i16.svg',
                  alt='Texto que describa la imagen'
                )    
          .row
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i17.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-10.mb-md-0.col-8
              h3.text-start Financiamiento externo
              p.text-start Estos recursos son los que vienen de personas externas como bancos, aliados estratégicos, entre otros.   
          .row
            .col-md-10.col-8.mb-md-0
              h3 Financiamiento propio
              p.text-start Son aquellos recursos financieros con los cuales la empresa cuenta y no está en la obligación de devolver, como el capital social y las reservas.
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i18.svg',
                  alt='Texto que describa la imagen'
                )    
          .row
            .col-md-2.col-4
              figure(data-aos='zoom-in')
                img(
                  src='@/assets/template/tema02/t2-i19.svg',
                  alt='Texto que describa la imagen'
                )
            .col-md-10.mb-md-0.col-8
              h3.text-start Financiamiento ajeno  
              p.text-start Es todo aquel dinero que, aunque está en la empresa, es adquirido de terceros por diferentes medios como créditos, entre otros.                                                  

    h3.mb-4
      i.fas.fa-square.color_texto_acento.me-3
      | Normatividad

    p Luego de conocer los diferentes tipos de financiamiento, ahora se exponen las leyes aplicadas al ámbito financiero emitidas bajo la normatividad establecida.

    p.mb-5 Las normas que se aplican son:

    .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/template/tema02/t2-i20.png", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Ley 45 de 1990")
              .col-12
                p Por la cual se dictan normas en materia de intermediación financiera, se regula la actividad aseguradora, se conceden unas facultades y se dictan otras disposiciones. 
            .row(titulo="Ley 35 de 1993")
              .col-12
                p Por la cual se dictan normas generales y se señalan en ellas los objetivos y criterios a los cuales debe sujetarse el Gobierno Nacional para regular las actividades financieras, bursátiles, aseguradoras, y cualquier otra relacionada con el manejo, aprovechamiento e inversión de recursos captados del público; se dictan otras disposiciones en materia financiera y aseguradora. 
            .row(titulo="Ley 510 de 1999")
              .col-12
                p Modificada por la Ley 676 de 2001, por la cual se dictan disposiciones en relación con el sistema financiero y asegurador, el mercado público de valores, las Superintendencias Bancaria y de Valores y se conceden unas facultades.
            .row(titulo="Ley 795 de 2003")
              .col-12
                p Por la cual se ajustan algunas normas del Estatuto Orgánico del Sistema Financiero y se dictan otras disposiciones.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
