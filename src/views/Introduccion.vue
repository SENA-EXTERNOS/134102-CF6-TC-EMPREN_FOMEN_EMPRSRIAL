<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.p-img
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema03/t3-i18.png")})` }'
          )
          .bloque-texto-g__texto.py-4.px-5
            p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se desarrollará la temática del funcionamiento del sistema financiero de acuerdo con la normatividad vigente, entidades de control, seguridad, confidencialidad de la información y tratamientos de datos. 

    p Aquí se ahondará en los contenidos relacionados con los productos económicos, las leyes y decretos que rigen el sector financiero; se entenderá la importancia de la seguridad y la confidencialidad como principio fundamental, conocerá los productos disponibles que ofrecen las entidades financieras; entenderá las características del mercado financiero, profundizará en el concepto de capital semilla, su aporte al emprendimiento y las principales políticas y trámites para adquirir este beneficio; además, reconocerá la diferencia entre préstamo y crédito, sus diferencias, requisitos para su adopción y criterios de aceptación.

    p Para ampliar estos conceptos, lo invitamos a ver el siguiente video:

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
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
