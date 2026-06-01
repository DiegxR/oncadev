import { Project } from "./types";

export const projectsArray: Project[] = [
  {
    name: "Portafolio Personal",
    description:"Este fue mi primer portafolio personal donde quise experimentar la integración de modelos 3D con Three Js y la dinamica de una página web interactiva, experimentando nuevas tecnologías y formas de ver las páginas web",
    details: [
      {images: [
        "https://drive.google.com/uc?id=1KaLZa6l505TayQYyTx4F1R1o8xS2mIdj",
        "https://drive.google.com/uc?id=1WHcel80-7M0Jl8IsYBAvnXe9R0pqJguL",
        "https://drive.google.com/uc?id=1XzFY8NzvCI-vJTj2Ff2tY4PSVVeFmJyw",
        "https://drive.google.com/uc?id=11VxkDZ8lxmEAdHwdQINpyBjj9enVgPFH"
      ],
    title: "General",
    description:
      "En este proyecto me encargué de diseñar y desarrollar mi portafolio personal utilizando Next Js para la estructura de la aplicación, Tailwind CSS para la estilización y Three Js para integrar modelos 3D interactivos. Maqueté diferentes secciones como proyectos, habilidades y contacto, enfocándome en crear una experiencia visual atractiva y fluida. Además, implementé animaciones y efectos visuales para mejorar la interactividad del sitio, logrando un portafolio que refleja mi estilo y habilidades como desarrollador web.",
    icons: [ { icon: "icon-[devicon--tailwindcss]", name: "Tailwind Css" },
          { icon: "icon-[devicon--framermotion-wordmark]", name: "Framer Motion" },
          { icon: "icon-[cib--next-js]", name: "Next Js" },
          { icon: "icon-[skill-icons--threejs-light]", name: "Three Js" },
         ],
    link: "https://portfolio-git-test-objects-diegxrs-projects.vercel.app/",
    tag: "",
    }
    ],
    tags: ["FrontEnd"],

  },
  {
    name: "Blooma io",
    description:
      "Gestor de proyectos de diseño y desarrollo tanto para empresas como para freelance donde encontrarás todo lo necesario para tus trabajos, proyectos y ofertas",
    details: [
      {
        images: [
          "https://drive.google.com/uc?id=1nRSDYp8b3XlIeE0hFpqN5nUHGqLIPt98",
          "https://drive.google.com/uc?id=1jfomrgZP_fICaHGhsi-ma6g8d8uwE5VG",
          "https://drive.google.com/uc?id=1Mht41E_j0FmPfKE046vMWUNcxpv9WA5B",
          "https://drive.google.com/uc?id=18smtFNcx3FCSswBQuH3mf9imrp8KOepf",
        ],
        title: "General",
        description:
          "Descripción: Blooma es una iniciativa lanzada por Norvik startup que pretende reunir en una sola plataforma un entorno donde clientes pueden subir y gestionar sus proyectos y a la vez puedes contactar con diseñadores y desarrolladores publicando proyectos y recibiendo propuestas de desarrollo a través de un sistema de créditos",
        icons: [
          { icon: "icon-[cib--next-js]", name: "Next Js" },
          { icon: "icon-[fontisto--react]", name: "Zustand" },
        ],
        link: "https://app-qa.blooma.io",
        tag: "",
      },
      {
        images: [
          "https://drive.google.com/uc?id=1OsyFTIk6uptfbzCABEB2YuWCGXy76BfZ",
          "https://drive.google.com/uc?id=1ZBkS4gRAkxh_kgBCiQ4UerGPVOAwI4cG",
          "https://drive.google.com/uc?id=16idaKBmIv7Qz_mFKbhqMEuCrNF4cyx7o",
          "https://drive.google.com/uc?id=1Jw5Rb1-v2X0IzM5GTdHM3R3OwjEWjWtH",
        ],

        title: "Integraciones",
        description:
          "Desarrollo Front-End para Plataforma de Gestión de Proyectos En este proyecto, me encargué del diseño y desarrollo utilizando Next UI para los componentes de la interfaz, Tailwind CSS para la estilización y Framer Motion para animaciones interactivas. Maqueté pantallas clave como BrandKit, enfocándome en la estética y funcionalidad. Además, implementé secciones para gestionar miembros y archivos de proyectos, facilitando la colaboración en equipo y la organización de recursos para la plataforma.",

        icons: [
          { icon: "icon-[cib--next-js]", name: "Next Ui" },
          { icon: "icon-[devicon--tailwindcss]", name: "Tailwind Css" },
          { icon: "icon-[devicon--framermotion]", name: "Framer Motion" },
        ],
        link: "https://api.blooma.io/auth/api-docs",
        tag: "FrontEnd",
      },
      {
        images: [
          "https://drive.google.com/uc?id=1b4Hct-gWTMuyDsyYs222jM6lIaV1gN1V",
          "https://drive.google.com/uc?id=1IpACbPLs42wkiV2pZ-eEwl6OusnjidN3",
          "https://drive.google.com/uc?id=1vvdRYAcbxLppcv_jpoWytI5S9oxaFPEY",
          "https://drive.google.com/uc?id=1Jw5Rb1-v2X0IzM5GTdHM3R3OwjEWjWtH",
        ],
        title: "Autenticación",
        description:
          "Cómo logro personal destacado en esta plataforma he liderado la creación del servicio de autenticación hecho con Nest Js, usando JSON Web Token para seguirdad en cada uno de los enpoints y verificación de correos, verificación de cuentas y otp con envíos automaticos de emails usando Resend, también se implementa autenticación con Google directamente de su api, también se implentó la plataforma de pagos con Stripe la cuál asigna créditos al usuario los cuales se podrán usar dentro de la plataforma y se renovarán dependiendo del plan adquirido",
        icons: [
          { icon: "icon-[devicon--nestjs]", name: "Nest Js" },
          { icon: "icon-[logos--stripe]", name: "Stripe" },
          { icon: "icon-[logos--jwt-icon]", name: "Jwt" },
        ],
        link: "https://api.blooma.io/auth/api-docs",
        tag: "BackEnd",
      },
    ],
    tags: ["FrontEnd", "BackEnd"],
  },
  {
    name: "LatamVerify",
    description:
      "Plataforma para consulta de antecedentes y diferentes reportes de más de 16 países en Latam",
    details: [
      {
        images: [
          "https://drive.google.com/uc?id=1jtrzmSKeHpDzImbgXCHedR9ZC1JTuGCe",
        ],
        title: "General",
        description:
          "En esta plataforma estuve trabajando en hacer consultas a más de 20 enpoints diferentes buscando coincidencias de antecedentes por número de documento o nombre, maquetando diferentes vistas para coincidencias por nombre y coincidencias en alguno de los endpoints",
        icons: [
          { icon: "icon-[cib--next-js]", name: "Next Js" },
          { icon: "icon-[simple-icons--axios]", name: "Axios" },
        ],
        link: "https://latamverify.com/home",
        tag: "FrontEnd",
      },
      {
        images: [
          "https://drive.google.com/uc?id=1QJ_jrpd668dAIqUvhzA8-gQrhBtN9Atn",
        ],
        title: "Autenticación",
        description:
          "En esta plataforma también se estructuró la creación de usuarios con Firebase, donde se gestiona la información y seguridad de cada cliente a través de esta plataforma de autenticación, todas las pantallas se estilizaron usando tailwind",
        icons: [
          { icon: "icon-[devicon--firebase]", name: "Firebase" },
          { icon: "icon-[file-icons--tailwind]", name: "Tailwind Css" },
        ],
        link: "https://latamverify.com/login",
        tag: "FrontEnd",
      },
      {
        images: [
          "https://drive.google.com/uc?id=1JL0xkkLg2E1ckdre1f1PsvIorY7aNiie",
        ],
        title: "Pagos",
        description:
          "Se implementó la pasarela de pagos de stripe para adquirir una suscripción y poder tener acceso a las busquedas mensuales dependiendo del plan adquirido por cada uno de los usuarios anteriormente creados en firebase",
        icons: [{ icon: "icon-[bi--stripe]", name: "Stripe" }],
        link: "https://latamverify.com/subscription",
        tag: "FrontEnd",
      },
    ],
    tags: ["FrontEnd"],
  },
  {
    name: "Arbol y Miel",
    description:
      "Arbol y Miel es una iniciativa de una productora de Miel que busca hacer seguimiento a cada una de las colonias a través de códigos qrs",
    details: [
      {
        images: [
          "https://drive.google.com/uc?id=1l0bs4syJs9C0WAXgIGPq22Zkf2mIozWq",
          "https://drive.google.com/uc?id=17UpthvMLMZzNOVxPLAoiR2Y0m1VgS87M",
        ],
        title: "Usuarios y Autenticación",
        description:
          "Para esta plataforma creé el inicio de sesión para usuarios tanto administradores como super administrador, para el super administrador se desarrollo una pantalla donde puede crear usuarios de tipo administrador",
        icons: [
          { icon: "icon-[cib--next-js]", name: "Next Js" },
          { icon: "icon-[file-icons--tailwind]", name: "Tailwind Css" },
        ],
        link: "",
        tag: "FrontEnd",
      },
      {
        images: [
          "https://drive.google.com/uc?id=1kmLDkYT2oS_Y91pGX-VTw76d3-s0OnQY",
          "https://drive.google.com/uc?id=1LccWPTIkvs_CqtGdIx1PI9TA4GxupBzO",
        ],
        title: "Creación de qrs",
        description:
          "También cree una vista para el usuario administrador donde puede crear meliponarios, y dentro de cada meliponario se pueden crear colonias, cada una de estas colonias se crean con un identificador único y un código qr que se puede escanear a través de una app que también desarrollé",
        icons: [
          { icon: "icon-[fontisto--react]", name: "Flowbite React" },
          { icon: "icon-[file-icons--tailwind]", name: "Tailwind Css" },
        ],
        link: "https://latamverify.com/login",
        tag: "FrontEnd",
      },
      {
        images: [
          "https://drive.google.com/uc?id=1y99BB8i1ET0DmRo_HMr8-uwvKuvSq9be",
          "https://drive.google.com/uc?id=1wwkvsi4MLXuxz5aAEeF3AmjbigxlI45d",
          "https://drive.google.com/uc?id=196kiBEQ-wRx0EQDCOp0hN5G0I8CGuJp-",
          "https://drive.google.com/uc?id=1t6PevGiPaHEQLa_tEudiGXJIWJnmNmO3",
        ],
        title: "App Mobile",
        description:
          "La app mobile se utiliza para hacer seguimiendo de las colonias asignadas por cada meliponario donde se puede hacer el control de cada una de ellas",
        icons: [
          { icon: "icon-[fontisto--react]", name: "React Native" },
          { icon: "icon-[logos--expo]", name: "Expo" },
        ],
        link: "https://latamverify.com/subscription",
        tag: "FrontEnd",
      },
      {
        images: [
          "https://drive.google.com/uc?id=1aXKZdwS9CZzNNOrPAbMj-PkJDrL85fxJ",
          "https://drive.google.com/uc?id=1711-xig4mLlRUNNj8pk1liWNSIMli_xB",
        ],
        title: "Microservicio Backend",
        description:
          "Desde el backend se maneja la creación de usuarios administradores, que a su vez pueden crear usuarios para la app de control y seguimiento también pueden crear meliponarios y colonias con su respectivo id y código qr, también se maneja el logueo de cada usuario",
        icons: [
          { icon: "icon-[devicon--nestjs]", name: "Nest js" },
          { icon: "icon-[devicon--postgresql]", name: "Postgresql" },
        ],
        link: "https://latamverify.com/subscription",
        tag: "FrontEnd",
      },
    ],
    tags: ["FrontEnd", "BackEnd"],
  },

  {
    name: "Jooci Gps",
    description:
      "Plataforma de software web para seguimiento y control de dispositivos gps vinculados a vehículos",
    details: [
      {
        images: [
          "https://drive.google.com/uc?id=1hTih908siuaw94l4talQiord3FZ6Y3Gi",
          "https://drive.google.com/uc?id=11rbOTCvU6dkqyheHTYkPrFZT2EdnQvFu",
          "https://drive.google.com/uc?id=19HT-IO2_pr-vBjInf2z9ooic2k1NwAPw",
        ],
        title: "Usuarios",
        description:
          "Para esta platforma se creó el inicio de sesión para el Administrador, el cuál a su vez puede crear desde el dashboard los usuarios propietarios que podrán ingresar y gestionar sus dispositivos y vehículos",
        icons: [
          { icon: "icon-[simple-icons--react]", name: "React Js" },
          {
            icon: "icon-[simple-icons--reacthookform]",
            name: "React Hook Form",
          },
        ],
        link: "",
        tag: "FrontEnd",
      },
      {
        images: [
          "https://drive.google.com/uc?id=15uKdmUL1BMRXXgH0lUfIWko4Z1CH5gyg",
          "https://drive.google.com/uc?id=1NmQKnAFvYhjLxGDqnqlK4tXTuhTpCH_G",
          "https://drive.google.com/uc?id=1khDRBnL-40PJfV4e1eYjhGwU3oq5Yjo8"
        ],
        title: "Dispositivos",
        description:
          "Un administrador puede registrar nuevos dispositivos lo cuales después podrán ser asignados a usuarios cuando estos los sociliten para compra o alquiler",
        icons: [{ icon: "icon-[file-icons--tailwind]", name: "Tailwind Css" },
          { icon: "icon-[file-icons--redux]", name: "Redux" }
        ],
        link: "",
        tag: "FrontEnd",
      },
      {
        images: [
          "https://drive.google.com/uc?id=10GdJW28jW2198p73kjkfjKHytK0z4xBI",
          "https://drive.google.com/uc?id=1T33VriqQNUv99y5DkSN-rJyGNi7_xdkc",
          "https://drive.google.com/uc?id=1j2nOFYqUU31c4QRXXZbQ3qy_reauNoZP"
        ],
        title: "Vehiculos",
        description:
          "El usuario propietario puede crear vehiculos con la placa a los que posteriormente podrá agregarles uno de los dispositivos anteriormente solicitados y hacer seguimiento a través del mapa",
        icons: [{ icon: "icon-[devicon--firebase]", name: "Firebase" },
          { icon: "icon-[logos--express]", name: "Express js" }
        ],
        link: "",
        tag: "FrontEnd",
      },
    ],
    tags: ["FrontEnd"],
  },
];
