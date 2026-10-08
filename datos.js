/* =====================================================================
   ✏️  DATOS.JS  —  ESTE ES EL ÚNICO ARCHIVO QUE TIENES QUE EDITAR
   ---------------------------------------------------------------------
   Todo lo que ves en tu portafolio sale de aquí. Reemplaza los textos
   que están entre comillas "así" por los tuyos. No borres las comillas,
   las comas ni las llaves { } [ ].

   Si no quieres mostrar algo, déjalo vacío: ""  (o [] en las listas)
   y esa parte simplemente no aparece.

   Pasos:
     PASO 1  Datos personales y foto
     PASO 2  Contacto y redes
     PASO 3  Sobre mí
     PASO 4  Competencias (tecnologías)
     PASO 5  Aptitudes
     PASO 6  Educación
     PASO 7  Logros y certificados
     PASO 8  Proyectos
   ===================================================================== */

const DATOS = {

  /* ───────────── PASO 1 · DATOS PERSONALES ───────────── */
  nombre:   "ALESSANDRO JAVIER",
  apellido: "CAHUANA LUIS",
  rol:      "Estudiante de Ingeniería de Sistemas e Informática",
  presentacion: "Me motiva mejorar cada día y mi mayor meta es crear mi propio lenguaje de programación.",
  universidad: "UTP",
  meta: "Crear mi propio lenguaje de programación",   // ✏️ aparece en el bloque de código del inicio ("" para ocultar)

  foto: "img/foto.jpg",   // tu foto de perfil (copiada de tu proyecto HEC)
  cv:   "",               // ✏️ cuando tengas tu CV en PDF, ponlo junto a index.html y escribe aquí "cv.pdf"

  // ✏️ Ficha rápida: los datos que un reclutador quiere ver primero (máximo 4). Cambia "valor" o borra un bloque.
  ficha: [
    { etiqueta: "Estudios",  valor: "Ingeniería de Sistemas e Informática" },
    { etiqueta: "Universidad", valor: "UTP · 6.º ciclo" },
    { etiqueta: "Lenguajes", valor: "Python · Java" },
    { etiqueta: "Idiomas",   valor: "Inglés fluido" }
  ],


  /* ───────────── PASO 2 · CONTACTO Y REDES ───────────── */
  contacto: {
    email:    "",   // ✏️ tu correo, por ejemplo "tucorreo@gmail.com" ("" = no aparece el botón)
    linkedin: "https://www.linkedin.com/in/alessandro-javier-cahuana-luis-b222622b6/",
    github:   "https://github.com/Nightom2006",
    whatsapp: "",   // ✏️ número con código de país y sin espacios, por ejemplo "51999999999" ("" = no aparece)
    mensaje:  "¿Tienes una oportunidad o un proyecto en mente? Escríbeme y conversamos."   // ✏️ frase grande de la sección Contacto
  },


  /* ───────────── PASO 3 · SOBRE MÍ ───────────── */
  sobreMi: [
    "Soy estudiante de Ingeniería de Sistemas e Informática en la Universidad Tecnológica del Perú (UTP) y estoy en el 6.º ciclo. Soy una persona enérgica y tranquila, y me mantengo motivado a mejorar tanto en mis actitudes como en mis conocimientos.",
    "Mi mayor meta es crear mi propio lenguaje de programación. Ya di un primer paso con Esython, un intérprete con sintaxis en español hecho en Python."
  ],


  /* ───────────── PASO 4 · COMPETENCIAS ───────────── */
  // ✏️ Cada grupo tiene un nombre ("categoria") y una lista de tecnologías ("items").
  competencias: [
    {
      categoria: "Lenguajes",
      items: ["Python (intermedio)", "Java (básico)", "JavaScript", "PHP", "HTML", "CSS"]
    },
    {
      categoria: "Desarrollo web",
      items: ["Diseño responsivo", "Flexbox", "CSS Grid", "SASS", "LESS", "Bootstrap", "Tailwind CSS", "Animaciones CSS"]
    },
    {
      categoria: "Bases de datos",
      items: ["SQL", "MySQL", "PostgreSQL"]
    },
    {
      categoria: "Diseño de software",
      items: ["UML", "Patrones de diseño", "MVC", "SOLID", "Estructuras de datos"]
    },
    {
      categoria: "Herramientas",
      items: ["Git", "GitHub", "VS Code", "NetBeans", "XAMPP"]
    },
    {
      categoria: "Idiomas",
      items: ["Inglés fluido"]
    }
  ],


  /* ───────────── PASO 5 · APTITUDES ───────────── */
  aptitudes: [
    "Disciplinado",
    "Comprensivo",
    "Enérgico",
    "Comprensión de la gramática",
    "Motivación por mejorar continuamente"
  ],


  /* ───────────── PASO 6 · EDUCACIÓN ───────────── */
  // ✏️ El más reciente va primero. Copia un bloque { ... } para agregar más.
  educacion: [
    {
      periodo: "En curso · 6.º ciclo",
      titulo: "Ingeniería de Sistemas e Informática",
      lugar: "Universidad Tecnológica del Perú (UTP)",
      detalle: "",
      cursos: ["Desarrollo web", "JavaScript avanzado", "Seguridad informática", "Arquitectura de software"]
    }
  ],


  /* ───────────── PASO 7 · LOGROS Y CERTIFICADOS ───────────── */
  // ✏️ Copia y pega aquí tus certificaciones y licencias de LinkedIn. Mientras esté vacío ([]), la sección no aparece.
  // Ejemplo de cómo se escribe cada uno (quita las // para usarlo):
  //   { anio: "2025", titulo: "Nombre del certificado", emisor: "Quién lo otorgó", enlace: "" },
  logros: [],


  /* ───────────── PASO 8 · PROYECTOS ───────────── */
  // ✏️ Copia un bloque { ... } por cada proyecto.
  //   imagen: ruta de una captura, por ejemplo "img/proyecto1.png" ("" = sin imagen)
  //   repo / demo: enlaces opcionales ("" = no aparece el botón)
  proyectos: [
    {
      titulo: "Esython",
      destacado: true,   // el proyecto principal se muestra en grande (solo ponlo en uno)
      descripcion: "Intérprete de un lenguaje de programación con sintaxis y palabras clave en español, hecho en Python.",
      tecnologias: ["Python"],
      imagen: "",
      repo: "https://github.com/Nightom2006/Esython",
      demo: ""
    },
    {
      titulo: "Calculadora científica en Python",
      descripcion: "Calculadora científica con las funciones necesarias para un uso completo.",
      tecnologias: ["Python"],
      imagen: "",
      repo: "https://github.com/Nightom2006/Calculadora-en-python",
      demo: ""
    },
    {
      titulo: "Portafolio web del curso de desarrollo web",
      descripcion: "Sitio de estética retro con resúmenes de 18 sesiones y actividades de Flexbox, Grid, SASS y LESS.",
      tecnologias: ["HTML", "CSS", "JavaScript", "SASS", "LESS"],
      imagen: "",
      repo: "",
      demo: ""
    }
  ]
};
