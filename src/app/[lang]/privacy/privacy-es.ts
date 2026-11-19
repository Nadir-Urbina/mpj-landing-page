/**
 * Spanish privacy policy, copied verbatim from the app's reviewed translation
 * (myPjFlutter: lib/pages/legal_document_es.dart, `_privacyPolicyNodesEs`) so
 * the site and the app say the same thing. Update both together.
 */
export type PolicyNode =
  | { kind: "title" | "updated" | "highlight" | "heading" | "subheading" | "body" | "quote"; text: string }
  | { kind: "bullets"; items: string[] };

export const PRIVACY_ES: PolicyNode[] = [
  {
    "kind": "title",
    "text": "Política de privacidad de Mi Diario Profético"
  },
  {
    "kind": "updated",
    "text": "Última actualización: 1 de enero de 2026"
  },
  {
    "kind": "highlight",
    "text": "Esta traducción se ofrece para tu comodidad. Si hubiera alguna diferencia entre esta versión y la versión en inglés, prevalece la versión en inglés."
  },
  {
    "kind": "heading",
    "text": "1. Introducción"
  },
  {
    "kind": "body",
    "text": "Te damos la bienvenida a Mi Diario Profético, en inglés My Prophetic Journal (\"nosotros\" o \"nuestro\"). Esta Política de privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando usas nuestra aplicación móvil y los servicios relacionados (el \"Servicio\")."
  },
  {
    "kind": "heading",
    "text": "2. Información que recopilamos"
  },
  {
    "kind": "subheading",
    "text": "2.1 Información personal que nos proporcionas"
  },
  {
    "kind": "bullets",
    "items": [
      "Información de la cuenta: correo electrónico, nombre visible y foto de perfil",
      "Notas: texto, grabaciones de audio, categorías y fechas de tus notas proféticas",
      "Referencias bíblicas: versículos, notas personales y reflexiones espirituales que agregas",
      "Información de equipos: nombres, descripciones e interacciones entre miembros",
      "Datos de comunicación: comentarios, conversaciones de equipo y contenido compartido"
    ]
  },
  {
    "kind": "subheading",
    "text": "2.2 Información recopilada automáticamente"
  },
  {
    "kind": "bullets",
    "items": [
      "Datos de uso: funciones utilizadas, duración de las sesiones y patrones de interacción",
      "Información del dispositivo: tipo de dispositivo, sistema operativo y versión de la aplicación",
      "Datos técnicos: dirección IP, informes de fallos y métricas de rendimiento"
    ]
  },
  {
    "kind": "subheading",
    "text": "2.3 Datos de servicios de terceros"
  },
  {
    "kind": "bullets",
    "items": [
      "Firebase Authentication: administra tu cuenta de forma segura",
      "Firebase Firestore: almacena tus notas y los datos de tus equipos",
      "API de OpenAI: procesa el contenido de tus notas para el análisis de patrones espirituales",
      "Servicios de API bíblicas: obtienen el texto de los versículos para las referencias"
    ]
  },
  {
    "kind": "subheading",
    "text": "2.4 Datos de publicidad y analítica"
  },
  {
    "kind": "bullets",
    "items": [
      "Meta (Facebook) App Events: analítica de uso de la aplicación y medición publicitaria",
      "Identificadores de publicidad: identificadores del dispositivo para atribuir anuncios (con tu consentimiento)",
      "Rendimiento de campañas: datos sobre cómo descubriste nuestra aplicación"
    ]
  },
  {
    "kind": "heading",
    "text": "3. Cómo usamos tu información"
  },
  {
    "kind": "subheading",
    "text": "3.1 Funciones principales de la aplicación"
  },
  {
    "kind": "bullets",
    "items": [
      "Ofrecer funciones para tomar y organizar notas espirituales",
      "Permitir la colaboración en equipo y compartir notas",
      "Facilitar la búsqueda y sugerencia de referencias bíblicas",
      "Generar reflexiones sobre patrones espirituales con ayuda de IA"
    ]
  },
  {
    "kind": "subheading",
    "text": "3.2 Mejora del servicio"
  },
  {
    "kind": "bullets",
    "items": [
      "Analizar patrones de uso para mejorar las funciones de la aplicación",
      "Supervisar el rendimiento de la aplicación y corregir problemas técnicos",
      "Desarrollar nuevas funciones según las necesidades de las personas usuarias"
    ]
  },
  {
    "kind": "subheading",
    "text": "3.3 Comunicación"
  },
  {
    "kind": "bullets",
    "items": [
      "Enviar notificaciones importantes sobre la cuenta y la seguridad",
      "Enviar novedades e invitaciones relacionadas con los equipos",
      "Compartir actualizaciones de la aplicación y nuevas funciones"
    ]
  },
  {
    "kind": "heading",
    "text": "4. IA y procesamiento de datos"
  },
  {
    "kind": "subheading",
    "text": "4.1 Análisis de patrones espirituales"
  },
  {
    "kind": "bullets",
    "items": [
      "El contenido de tus notas puede ser procesado por la API de OpenAI para identificar patrones espirituales",
      "Este análisis ayuda a ofrecerte una perspectiva de tu caminar espiritual",
      "Importante: el análisis con IA es una herramienta para reconocer patrones, no una guía espiritual",
      "El Espíritu Santo sigue siendo tu guía definitivo hacia la verdad espiritual (Juan 16:13)"
    ]
  },
  {
    "kind": "subheading",
    "text": "4.2 Minimización de datos"
  },
  {
    "kind": "bullets",
    "items": [
      "Solo enviamos el contenido de las notas que es necesario para el análisis",
      "Eliminamos los identificadores personales siempre que es posible",
      "Los resultados del análisis se guardan de forma segura en tu cuenta"
    ]
  },
  {
    "kind": "heading",
    "text": "5. Cómo compartimos y divulgamos la información"
  },
  {
    "kind": "subheading",
    "text": "5.1 Compartir con equipos"
  },
  {
    "kind": "bullets",
    "items": [
      "Las notas que compartes expresamente con un equipo son visibles para sus miembros",
      "Los miembros del equipo pueden ver el contenido compartido, los comentarios y las referencias bíblicas",
      "Tú decides qué contenido compartir y con qué equipos"
    ]
  },
  {
    "kind": "subheading",
    "text": "5.2 Proveedores de servicios externos"
  },
  {
    "kind": "bullets",
    "items": [
      "Firebase (Google): almacenamiento en la nube y autenticación",
      "OpenAI: análisis de patrones espirituales con IA",
      "Servicios de API bíblicas: obtención de versículos",
      "Meta Platforms (Facebook): analítica y medición publicitaria",
      "RevenueCat: gestión de suscripciones"
    ]
  },
  {
    "kind": "subheading",
    "text": "5.3 Requisitos legales"
  },
  {
    "kind": "body",
    "text": "Podemos divulgar tu información si la ley lo exige o para:"
  },
  {
    "kind": "bullets",
    "items": [
      "Cumplir con obligaciones legales",
      "Proteger nuestros derechos y nuestra seguridad",
      "Prevenir fraudes o amenazas de seguridad"
    ]
  },
  {
    "kind": "subheading",
    "text": "5.4 Lo que nunca compartimos"
  },
  {
    "kind": "bullets",
    "items": [
      "Nunca vendemos tu información personal",
      "Nunca compartimos tus notas privadas sin tu consentimiento",
      "Nunca usamos tu contenido espiritual con fines comerciales"
    ]
  },
  {
    "kind": "heading",
    "text": "6. Publicidad y seguimiento"
  },
  {
    "kind": "subheading",
    "text": "6.1 Meta (Facebook) App Events"
  },
  {
    "kind": "body",
    "text": "Usamos el SDK de Meta App Events para:"
  },
  {
    "kind": "bullets",
    "items": [
      "Medir el rendimiento de la aplicación y los patrones de uso",
      "Entender cómo las personas descubren nuestra aplicación e interactúan con ella",
      "Medir la eficacia de nuestras campañas publicitarias",
      "Mejorar nuestros servicios a partir de información agregada"
    ]
  },
  {
    "kind": "subheading",
    "text": "6.2 Transparencia en el seguimiento de apps (iOS)"
  },
  {
    "kind": "body",
    "text": "En los dispositivos iOS, pedimos tu permiso antes de recopilar identificadores de publicidad. Esto nos permite:"
  },
  {
    "kind": "bullets",
    "items": [
      "Medir qué anuncios te llevaron a instalar nuestra aplicación",
      "Ofrecer experiencias publicitarias más relevantes",
      "Entender el rendimiento de las campañas para reducir los costos de publicidad"
    ]
  },
  {
    "kind": "subheading",
    "text": "6.3 Tus opciones de seguimiento"
  },
  {
    "kind": "bullets",
    "items": [
      "En iOS: puedes cambiar tus preferencias de seguimiento en Configuración > Privacidad y seguridad > Rastreo",
      "Puedes desactivar los anuncios personalizados en la configuración de tu dispositivo",
      "Rechazar el seguimiento no afecta el funcionamiento de la aplicación",
      "Seguimos recopilando analítica anónima y agregada, sea cual sea tu elección"
    ]
  },
  {
    "kind": "subheading",
    "text": "6.4 Datos compartidos con Meta"
  },
  {
    "kind": "bullets",
    "items": [
      "Eventos de la aplicación (aperturas, sesiones, uso de funciones)",
      "Información del dispositivo (modelo, versión del sistema operativo)",
      "Identificador de publicidad (solo con tu consentimiento)",
      "Nunca compartimos el contenido de tu diario ni tus notas personales con anunciantes"
    ]
  },
  {
    "kind": "body",
    "text": "Para más información sobre las prácticas de datos de Meta, visita: https://www.facebook.com/privacy/policy/"
  },
  {
    "kind": "heading",
    "text": "7. Seguridad de los datos"
  },
  {
    "kind": "subheading",
    "text": "7.1 Medidas de seguridad"
  },
  {
    "kind": "bullets",
    "items": [
      "Cifrado de extremo a extremo en la transmisión de datos",
      "Almacenamiento seguro en la nube con Firebase",
      "Auditorías y actualizaciones de seguridad periódicas",
      "Protección de claves de API y autenticación segura"
    ]
  },
  {
    "kind": "subheading",
    "text": "7.2 Tus responsabilidades"
  },
  {
    "kind": "bullets",
    "items": [
      "Mantener seguras las credenciales de tu cuenta",
      "Usar contraseñas seguras y únicas",
      "Informar de cualquier actividad sospechosa en tu cuenta"
    ]
  },
  {
    "kind": "heading",
    "text": "8. Tus derechos y opciones"
  },
  {
    "kind": "subheading",
    "text": "8.1 Control de la cuenta"
  },
  {
    "kind": "bullets",
    "items": [
      "Acceso: consultar y descargar tus datos personales",
      "Corrección: actualizar información personal inexacta",
      "Eliminación: solicitar que se eliminen tu cuenta y tus datos"
    ]
  },
  {
    "kind": "subheading",
    "text": "8.2 Configuración de privacidad"
  },
  {
    "kind": "bullets",
    "items": [
      "Controlar tus preferencias para compartir con equipos",
      "Administrar la configuración de notificaciones"
    ]
  },
  {
    "kind": "subheading",
    "text": "8.3 Exclusión voluntaria"
  },
  {
    "kind": "bullets",
    "items": [
      "Puedes desactivar el análisis de patrones con IA en la configuración",
      "Puedes salir de un equipo o dejar de compartir contenido en cualquier momento",
      "Puedes eliminar tu cuenta y todos los datos asociados"
    ]
  },
  {
    "kind": "heading",
    "text": "9. Información de contacto"
  },
  {
    "kind": "body",
    "text": "Si tienes preguntas sobre esta Política de privacidad o sobre nuestras prácticas de datos, escríbenos:"
  },
  {
    "kind": "body",
    "text": "Correo electrónico: support@mypropheticjournal.life"
  },
  {
    "kind": "body",
    "text": "Tiempo de respuesta: procuramos responder en un plazo de 72 horas"
  },
  {
    "kind": "heading",
    "text": "10. Compromiso espiritual"
  },
  {
    "kind": "body",
    "text": "Como aplicación basada en la fe, nos comprometemos a:"
  },
  {
    "kind": "bullets",
    "items": [
      "Tratar tu contenido espiritual con reverencia y respeto",
      "Mantener los más altos estándares éticos en el manejo de los datos",
      "Apoyar tu crecimiento espiritual mientras protegemos tu privacidad",
      "Honrar el carácter sagrado del contenido profético y espiritual"
    ]
  },
  {
    "kind": "quote",
    "text": "\"Pero cuando venga el Espíritu de la verdad, él los guiará a toda la verdad.\" - Juan 16:13"
  },
  {
    "kind": "body",
    "text": "Esta aplicación es una herramienta para organizar y reconocer patrones espirituales, pero el Espíritu Santo sigue siendo tu guía definitivo para el discernimiento espiritual."
  }
];
