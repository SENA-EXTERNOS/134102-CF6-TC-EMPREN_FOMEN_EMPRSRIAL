export default {
  global: {
    componenteFormativo:
      'El sistema financiero, productos y trámites de financiación',
    descripcionCurso:
      'Los trámites que se deben realizar para poner en marcha un proyecto o idea de negocio y las fuentes a las cuales se puede acceder, para conseguir los recursos necesarios y ejecutar un emprendimiento son esenciales para el éxito de este; es por eso que es importante abordar temas pertinentes a los sistemas, productos financieros, entidades de control, normatividad financiera, solicitudes y financiamiento de créditos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El sistema financiero colombiano',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Productos financieros, normatividad y portafolio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Solicitud y financiamiento de créditos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El sistema financiero colombiano',
      referencia:
        'Superintendeica Industria comercio. (2008). <em>Cartilla ley 1266 de 2008 Hábeas Data.</em>',
      tipo: 'Documento',
      link:
        'https://protecdatalatam.com/wp-content/uploads/2017/07/Cartilla_Ley_1266_de_2008_Habeas_Data.pdf',
    },
    {
      tema: 'El sistema financiero colombiano',
      referencia:
        'banrep.gov.co. (s.f.). <em>El sistema financiero colombiano: estructura y evolución reciente.</em>',
      tipo: 'Documento',
      link:
        'https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/rbr_nota_1023.pdf',
    },
    {
      tema: 'Solicitud y financiamiento de créditos',
      referencia:
        'Rodríguez, D. (2009). <em>Cartilla práctica. Prepara los documentos para solicitar un crédito.</em> ',
      tipo: 'Cartilla',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/11404/1000001325.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Solicitud y financiamiento de créditos',
      referencia:
        'Corporación Industrial Minuto de Dios. (2021). <em>¿Qué es el Capital Semilla?</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BVutN1ZyKaE',
    },
  ],
  glosario: [
    {
      termino: 'Análisis del crédito',
      significado:
        'es un informe elaborado para determinar la aprobación o negación de un préstamo.',
    },
    {
      termino: 'Capital semilla',
      significado:
        'es el dinero inicial que requiere el emprendedor para poner en marcha su proyecto',
    },
    {
      termino: 'Crédito',
      significado:
        'es una operación que se realiza entre personas o instituciones crediticias en la cual se concede a la otra cierta cantidad de dinero; en el cual el solicitante asume el compromiso de devolver el monto de dinero entregado, más los intereses pactados.',
    },
    {
      termino: 'Confidencialidad informática',
      significado:
        'es un principio fundamental que garantiza el necesario secreto de la información y de su tratamiento para prevenir su divulgación o no autorización cuando está almacenado en tránsito.',
    },
    {
      termino: 'Entidad financiera',
      significado:
        'es cualquier empresa que presta servicios financieros (captación y remuneración de los ahorros, concesión de préstamos y créditos, aseguramiento, etc.) a los consumidores y usuarios.',
    },
    {
      termino: 'Flexibilidad financiera',
      significado:
        'es la capacidad de una empresa para adaptarse a los cambios del entorno financiero y obtener los fondos que financien su actividad en condiciones razonables.',
    },
    {
      termino: '<em>Habeas data</em>',
      significado:
        'es aquel derecho que tiene toda persona de conocer, actualizar y rectificar la información que se haya recogido sobre ella en archivos y bancos de datos de naturaleza pública o privada.',
    },
    {
      termino: 'Portafolio',
      significado:
        'es un documento o una presentación donde una compañía detalla todas las características de su oferta comercial.',
    },
    {
      termino: 'Productos financieros',
      significado:
        'son los productos que ofrece un banco o una institución financiera que ayudará a ahorrar e invertir de formas diversas, dependiendo del riesgo que cada cliente quiera asumir con el fin de obtener rentabilidad.',
    },
    {
      termino: 'Sistema financiero',
      significado:
        'es el conjunto de instituciones financieras organizadas tanto públicas como privadas que se encargan de captar, administrar e invertir el dinero de todas las personas tanto naturales como jurídicas (nacionales o extranjeras).',
    },
    {
      termino: 'Transparencia',
      significado:
        'son principios y acciones claras destinadas a garantizar el acceso a la información clara y oportuna para la ciudadanía en general.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asobancaria. (s. f). <em>Normatividad. Decretos, Resoluciones y leyes que rigen el sector.</em>',
      link: 'https://www.asobancaria.com/normatividad/',
    },
    {
      referencia:
        'Dueñas, R. (2008). <em>Introducción al sistema financiero y bancario.</em>',
      link:
        'https://camaradecomercioempresarial.org/wp-content/uploads/wpcfto_files/e28c363adc826c0cfcd3e914472beb29SFB.pdf',
    },
    {
      referencia:
        'Educación Superior Meta. (s. f). <em>Procedimiento de manejo de datos personales.</em>',
      link:
        'https://educacionsuperiormeta.co/images/recaudo/1_PROCEDIMIENTO_DE_MANEJO_DE_DATOS_PERSONALES.pdf',
    },
    {
      referencia:
        'Rodríguez., D. (2009). <em>Cartilla práctica. Prepara los documentos para solicitar un crédito.</em> ',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/11404/1000001325.pdf?sequence=1&isAllowed=y',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
