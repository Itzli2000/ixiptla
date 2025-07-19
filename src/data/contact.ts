import type { ContactPageData } from '../types/contact';

export const contactDataEs: ContactPageData = {
  hero: {
    title: 'Contacto',
    subtitle: 'Museo Virtual Ixiptla',
    description: 'Conecta con nuestro equipo de expertos en arte mesoamericano. Estamos aquí para ayudarte con consultas sobre investigación, soporte técnico, colaboraciones educativas o cualquier pregunta sobre nuestras colecciones arqueológicas.'
  },
  breadcrumb: {
    home: 'Inicio',
    contact: 'Contacto'
  },
  contactInfo: {
    introduction: {
      title: 'Conecta con Nosotros',
      description: 'Nuestro equipo está comprometido con la preservación y difusión del patrimonio cultural mesoamericano. Nos encanta conectar con investigadores, educadores, estudiantes y entusiastas del arte prehispánico.'
    },
    methods: [
      {
        id: 'email',
        type: 'email',
        title: 'Correo Electrónico',
        value: 'ariel.molina.dev@gmail.com',
        icon: 'mdi:email',
        href: 'mailto:ariel.molina.dev@gmail.com',
        description: 'La forma más rápida de contactarnos para consultas generales, soporte técnico o colaboraciones.'
      },
      {
        id: 'response-time',
        type: 'phone',
        title: 'Tiempo de Respuesta',
        value: '24-48 horas',
        icon: 'mdi:clock-outline',
        description: 'Generalmente respondemos dentro de 24-48 horas en días hábiles. Para consultas urgentes, por favor indícalo en el asunto.'
      },
      {
        id: 'location',
        type: 'address',
        title: 'Ubicación del Proyecto',
        value: 'México',
        icon: 'mdi:map-marker',
        description: 'Proyecto desarrollado en México, enfocado en la preservación del patrimonio cultural mesoamericano.'
      }
    ],
    reasons: [
      {
        id: 'research',
        title: 'Consultas de Investigación',
        description: 'Colaboramos con investigadores académicos y estudiantes interesados en culturas mesoamericanas.',
        icon: 'mdi:book-open-variant',
        examplesTitle: 'Ejemplos:',
        examples: [
          'Solicitudes de información sobre artefactos específicos',
          'Colaboraciones en proyectos de investigación',
          'Acceso a datos técnicos de modelos 3D',
          'Referencias bibliográficas especializadas'
        ]
      },
      {
        id: 'technical',
        title: 'Soporte Técnico',
        description: 'Asistencia con problemas técnicos, visualización 3D y accesibilidad del sitio.',
        icon: 'mdi:cog',
        examplesTitle: 'Ejemplos:',
        examples: [
          'Problemas con la visualización de modelos 3D',
          'Reportes de errores o bugs',
          'Sugerencias de mejoras técnicas',
          'Problemas de accesibilidad'
        ]
      },
      {
        id: 'educational',
        title: 'Alianzas Educativas',
        description: 'Colaboraciones con instituciones educativas para integrar nuestros recursos en curricula.',
        icon: 'mdi:school',
        examplesTitle: 'Ejemplos:',
        examples: [
          'Integración en programas educativos',
          'Talleres y presentaciones',
          'Recursos para docentes',
          'Proyectos de divulgación cultural'
        ]
      },
      {
        id: 'partnerships',
        title: 'Colaboraciones Institucionales',
        description: 'Trabajamos con museos, universidades y organizaciones culturales para expandir nuestro alcance.',
        icon: 'mdi:handshake',
        examplesTitle: 'Ejemplos:',
        examples: [
          'Alianzas con museos e instituciones',
          'Intercambio de colecciones digitales',
          'Proyectos de digitalización conjunta',
          'Eventos y exposiciones virtuales'
        ]
      }
    ],
    responseTime: {
      title: 'Tiempo de Respuesta',
      description: 'Generalmente respondemos dentro de 24-48 horas en días hábiles.'
    }
  }
};

export const contactDataEn: ContactPageData = {
  hero: {
    title: 'Contact',
    subtitle: 'Ixiptla Virtual Museum',
    description: 'Connect with our team of Mesoamerican art experts. We\'re here to help with research inquiries, technical support, educational collaborations, or any questions about our archaeological collections.'
  },
  breadcrumb: {
    home: 'Home',
    contact: 'Contact'
  },
  contactInfo: {
    introduction: {
      title: 'Connect with Us',
      description: 'Our team is committed to preserving and sharing Mesoamerican cultural heritage. We love connecting with researchers, educators, students, and pre-Hispanic art enthusiasts.'
    },
    methods: [
      {
        id: 'email',
        type: 'email',
        title: 'Email',
        value: 'ariel.molina.dev@gmail.com',
        icon: 'mdi:email',
        href: 'mailto:ariel.molina.dev@gmail.com',
        description: 'The fastest way to reach us for general inquiries, technical support, or collaborations.'
      },
      {
        id: 'response-time',
        type: 'phone',
        title: 'Response Time',
        value: '24-48 hours',
        icon: 'mdi:clock-outline',
        description: 'We typically respond within 24-48 hours on business days. For urgent inquiries, please indicate so in the subject line.'
      },
      {
        id: 'location',
        type: 'address',
        title: 'Project Location',
        value: 'Mexico',
        icon: 'mdi:map-marker',
        description: 'Project developed in Mexico, focused on preserving Mesoamerican cultural heritage.'
      }
    ],
    reasons: [
      {
        id: 'research',
        title: 'Research Inquiries',
        description: 'We collaborate with academic researchers and students interested in Mesoamerican cultures.',
        icon: 'mdi:book-open-variant',
        examplesTitle: 'Examples:',
        examples: [
          'Requests for information about specific artifacts',
          'Research project collaborations',
          'Access to 3D model technical data',
          'Specialized bibliographic references'
        ]
      },
      {
        id: 'technical',
        title: 'Technical Support',
        description: 'Assistance with technical issues, 3D visualization, and site accessibility.',
        icon: 'mdi:cog',
        examplesTitle: 'Examples:',
        examples: [
          'Issues with 3D model visualization',
          'Bug reports and error reporting',
          'Technical improvement suggestions',
          'Accessibility concerns'
        ]
      },
      {
        id: 'educational',
        title: 'Educational Partnerships',
        description: 'Collaborations with educational institutions to integrate our resources into curricula.',
        icon: 'mdi:school',
        examplesTitle: 'Examples:',
        examples: [
          'Integration into educational programs',
          'Workshops and presentations',
          'Resources for educators',
          'Cultural outreach projects'
        ]
      },
      {
        id: 'partnerships',
        title: 'Institutional Collaborations',
        description: 'We work with museums, universities, and cultural organizations to expand our reach.',
        icon: 'mdi:handshake',
        examplesTitle: 'Examples:',
        examples: [
          'Partnerships with museums and institutions',
          'Digital collection exchanges',
          'Joint digitization projects',
          'Virtual events and exhibitions'
        ]
      }
    ],
    responseTime: {
      title: 'Response Time',
      description: 'We typically respond within 24-48 hours on business days.'
    }
  }
};