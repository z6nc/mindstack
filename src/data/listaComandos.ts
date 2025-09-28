import { CategoriaComando, type PropsListaComandos } from "@/types/listaComandos.types";

export const ListaComandos: PropsListaComandos[] = [
  // Semana del 27 de septiembre de 2025
  // Instalación
  {
    NombreComando: "Vite + React + TypeScript",
    descripcion: "Crea un proyecto React moderno con soporte TypeScript usando Vite, recomendado por la comunidad para desarrollo rápido.",
    tamaño: "2MB",
    categoria: CategoriaComando.INSTALACION,
    documentacion: "https://vitejs.dev/guide/",
    codigo: {
      npm: "npm create vite@latest my-app -- --template react-ts",
      pnpm: "pnpm create vite@latest my-app -- --template react-ts",
      bun: "bun create vite@latest my-app -- --template react-ts",
      yarn: "yarn create vite my-app --template react-ts"
    }
  },
  // UI y Estilos
  {
    NombreComando: "DaisyUI",
    descripcion: "Plugin de Tailwind CSS que agrega componentes UI listos para usar y personalizables.",
    tamaño: "1.1MB",
    categoria: CategoriaComando.UI_ESTILOS,
    documentacion: "https://daisyui.com/docs/install/",
    codigo: {
      npm: "npm install daisyui",
      pnpm: "pnpm add daisyui",
      bun: "bun add daisyui",
      yarn: "yarn add daisyui"
    }
  },
  // Animaciones
  {
    NombreComando: "React Spring",
    descripcion: "Librería de animaciones físicas para React, ideal para transiciones fluidas y naturales.",
    tamaño: "120KB",
    categoria: CategoriaComando.ANIMACIONES,
    documentacion: "https://www.react-spring.dev/docs/getting-started",
    codigo: {
      npm: "npm install @react-spring/web",
      pnpm: "pnpm add @react-spring/web",
      bun: "bun add @react-spring/web",
      yarn: "yarn add @react-spring/web"
    }
  },
  // Gráficos
  {
    NombreComando: "Recharts",
    descripcion: "Librería de gráficos basada en componentes React, fácil de usar y personalizar.",
    tamaño: "500KB",
    categoria: CategoriaComando.GRAFICOS,
    documentacion: "https://recharts.org/en-US/guide-installation",
    codigo: {
      npm: "npm install recharts",
      pnpm: "pnpm add recharts",
      bun: "bun add recharts",
      yarn: "yarn add recharts"
    }
  },
  // Estado y Gestión de Datos
  {
    NombreComando: "Jotai",
    descripcion: "Gestor de estado minimalista y reactivo para React, basado en átomos.",
    tamaño: "6KB",
    categoria: CategoriaComando.ESTADO_DATOS,
    documentacion: "https://jotai.org/docs/introduction",
    codigo: {
      npm: "npm install jotai",
      pnpm: "pnpm add jotai",
      bun: "bun add jotai",
      yarn: "yarn add jotai"
    }
  },
  // Utilidades y Helpers
  {
    NombreComando: "Lodash",
    descripcion: "Colección de utilidades para manipulación de arrays, objetos y funciones en JavaScript.",
    tamaño: "540KB",
    categoria: CategoriaComando.UTILIDADES,
    documentacion: "https://lodash.com/docs/4.17.15",
    codigo: {
      npm: "npm install lodash",
      pnpm: "pnpm add lodash",
      bun: "bun add lodash",
      yarn: "yarn add lodash",
      deno: "deno add npm:lodash"
    }
  },
  // Testing y Herramientas de Desarrollo
  {
    NombreComando: "Vitest",
    descripcion: "Framework de testing ultrarrápido inspirado en Jest, diseñado para proyectos Vite y compatible con React.",
    tamaño: "1.5MB",
    categoria: CategoriaComando.TESTING_HERRAMIENTAS,
    documentacion: "https://vitest.dev/guide/",
    codigo: {
      npm: "npm install -D vitest",
      pnpm: "pnpm add -D vitest",
      bun: "bun add -d vitest",
      yarn: "yarn add -D vitest"
    }
  },
  // Instalación y Configuración
  {
    NombreComando: "React con Vite",
    descripcion: "Crea un nuevo proyecto React ultrarrápido usando Vite como bundler y configurado para desarrollo moderno.",
    tamaño: "2MB",
    categoria: CategoriaComando.INSTALACION,
    documentacion: "https://vite.dev/guide/",
    codigo: {
      npm: "npm create vite@latest my-app -- --template react",
      pnpm: "pnpm create vite@latest my-app -- --template react",
      bun: "bun create vite@latest my-app -- --template react",
      yarn: "yarn create vite my-app --template react",
    }
  },

  // UI y Estilos
  {
    NombreComando: "Material UI (MUI)",
    descripcion: "Librería de componentes modernos con soporte de theming, responsive design y personalización avanzada.",
    tamaño: "1.2MB",
    categoria: CategoriaComando.UI_ESTILOS,
    documentacion: "https://mui.com/material-ui/getting-started/",
    codigo: {
      npm: "npm install @mui/material @emotion/react @emotion/styled",
      pnpm: "pnpm add @mui/material @emotion/react @emotion/styled",
      bun: "bun add @mui/material @emotion/react @emotion/styled",
      yarn: "yarn add @mui/material @emotion/react @emotion/styled",
    }
  },

  {
    NombreComando: "Tailwind CSS",
    descripcion: "Framework de utilidades CSS para crear interfaces rápidas, consistentes y totalmente personalizables.",
    tamaño: "3MB",
    categoria: CategoriaComando.UI_ESTILOS,
    documentacion: "https://tailwindcss.com/docs/installation",
    codigo: {
      npm: "npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
      pnpm: "pnpm add -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
      bun: "bun add -d tailwindcss postcss autoprefixer && npx tailwindcss init -p",
      yarn: "yarn add -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
    }
  },

  {
    NombreComando: "Styled Components",
    descripcion: "Biblioteca CSS-in-JS que permite escribir estilos dentro de componentes de forma dinámica y escalable.",
    tamaño: "500KB",
    categoria: CategoriaComando.UI_ESTILOS,
    documentacion: "https://styled-components.com/docs",
    codigo: {
      npm: "npm install styled-components",
      pnpm: "pnpm add styled-components",
      bun: "bun add styled-components",
      yarn: "yarn add styled-components",
    }
  },

  {
    NombreComando: "React Icons",
    descripcion: "Colección de miles de iconos populares en formato React listos para usar en cualquier proyecto.",
    tamaño: "2MB",
    categoria: CategoriaComando.UI_ESTILOS,
    documentacion: "https://react-icons.github.io/react-icons/",
    codigo: {
      npm: "npm install react-icons",
      pnpm: "pnpm add react-icons",
      bun: "bun add react-icons",
      yarn: "yarn add react-icons",
    }
  },

  {
    NombreComando: "Google Fonts (@fontsource)",
    descripcion: "Fuentes open source de Google integradas fácilmente en tu proyecto mediante paquetes @fontsource para self-hosting.",
    tamaño: "Variable",
    categoria: CategoriaComando.UI_ESTILOS,
    documentacion: "https://fontsource.org/docs/getting-started/introduction",
    codigo: {
      npm: "npm install @fontsource/roboto",
      pnpm: "pnpm add @fontsource/roboto",
      bun: "bun add @fontsource/roboto",
      yarn: "yarn add @fontsource/roboto",
    }
  },

  // Animaciones y Experiencia de Usuario
  {
    NombreComando: "Framer Motion (Motion)",
    descripcion: "Librería para crear animaciones fluidas y complejas en React con una API intuitiva y alto rendimiento.",
    tamaño: "500KB",
    categoria: CategoriaComando.ANIMACIONES,
    documentacion: "https://motion.dev/docs",
    codigo: {
      npm: "npm install framer-motion",
      pnpm: "pnpm add framer-motion",
      bun: "bun add framer-motion",
      yarn: "yarn add framer-motion",
    }
  },

  // Estado y Datos
  {
    NombreComando: "Redux Toolkit",
    descripcion: "Solución oficial para gestionar estado global en React con menos código y mejores prácticas (RTK).",
    tamaño: "1MB",
    categoria: CategoriaComando.ESTADO_DATOS,
    documentacion: "https://redux-toolkit.js.org/",
    codigo: {
      npm: "npm install @reduxjs/toolkit react-redux",
      pnpm: "pnpm add @reduxjs/toolkit react-redux",
      bun: "bun add @reduxjs/toolkit react-redux",
      yarn: "yarn add @reduxjs/toolkit react-redux",
    }
  },

  // Utilidades y Helpers
  {
    NombreComando: "date-fns",
    descripcion: "Conjunto de utilidades para manipulación de fechas en JavaScript, modular y orientado al tree-shaking.",
    tamaño: "300KB",
    categoria: CategoriaComando.UTILIDADES,
    documentacion: "https://date-fns.org/docs/Getting-Started",
    codigo: {
      npm: "npm install date-fns",
      pnpm: "pnpm add date-fns",
      bun: "bun add date-fns",
      yarn: "yarn add date-fns",
    }
  },

  // Testing y Herramientas
  {
    NombreComando: "Testing Library + Jest",
    descripcion: "React Testing Library para pruebas enfocadas en el comportamiento del usuario y Jest como test runner y assertion library.",
    tamaño: "2MB",
    categoria: CategoriaComando.TESTING_HERRAMIENTAS,
    documentacion: "https://testing-library.com/docs/react-testing-library/intro",
    codigo: {
      npm: "npm install --save-dev @testing-library/react @testing-library/dom ",
      pnpm: "pnpm add @testing-library/react jest",
      bun: "bun add @testing-library/react jest",
      yarn: "yarn add @testing-library/react jest",
    }
  },

  {
    NombreComando: "Storybook",
    descripcion: "Entorno interactivo para documentar, desarrollar y testear componentes UI en aislamiento, ideal para design systems.",
    tamaño: "3MB",
    categoria: CategoriaComando.TESTING_HERRAMIENTAS,
    documentacion: "https://storybook.js.org/docs",
    codigo: {
      npm: "npm install --save-dev storybook",
      pnpm: "pnpm add --save-dev storybook",
      bun: "bun add --dev storybook",
      yarn: "yarn add --dev storybook",
    }
  },
  {
    NombreComando: "shadcn/ui ",
    descripcion:
      "shadcn/ui es una librería de componentes UI para React creada sobre Tailwind CSS y Radix. Ofrece componentes reutilizables , Importante: debes instalar primero Tailwind CSS",
    tamaño: "Variable",
    categoria: CategoriaComando.UI_ESTILOS,
    documentacion: "https://ui.shadcn.com/docs/installation",
    codigo: {
      npm: "npm install class-variance-authority clsx tailwind-merge lucide-react tw-animate-css",
      pnpm: "pnpm add class-variance-authority clsx tailwind-merge lucide-react tw-animate-css",
      bun: "bun add class-variance-authority clsx tailwind-merge lucide-react tw-animate-css",
      yarn: "yarn add class-variance-authority clsx tailwind-merge lucide-react tw-animate-css"
    },
  },
  {
    NombreComando: "Magic UI",
    descripcion:
      "Magic UI es una librería de componentes animados para React (con TypeScript), construida sobre Tailwind CSS y Framer Motion. Ofrece bloques, componentes y efectos. Importante: instalar shadcn/ui primero.",
    tamaño: "Variable",
    categoria: CategoriaComando.UI_ESTILOS,
    documentacion: "https://magicui.design/docs/installation",
    codigo: {
      npm: "npx shadcn@latest add 'URL del componente'",
      pnpm: "pnpm dlx shadcn@latest add 'URL del componente'",
      bun: "bun x --bun shadcn@latest add 'URL del componente'",
      yarn: "npx shadcn@latest add 'URL del componente'"
    }
  },
  {
    NombreComando: "React con Next.js",
    descripcion:
      "Crea un nuevo proyecto React con Next.js, el framework que añade renderizado del lado del servidor (SSR), generación estática (SSG) y enrutamiento basado en archivos. Ideal para aplicaciones rápidas, SEO-friendly y con funcionalidades modernas listas para usar.",
    tamaño: "Variable",
    categoria: CategoriaComando.INSTALACION,
    documentacion: "https://nextjs.org/docs/getting-started/installation",
    codigo: {
      npm: "npm create next-app@latest my-app",
      pnpm: "pnpm create next-app@latest my-app",
      bun: "bun create next-app@latest my-app",
      yarn: "yarn create next-app my-app"
    }
  },
  {
    NombreComando: "Zod",
    descripcion:
      "Zod es una biblioteca de validación de esquemas para TypeScript. Permite definir y validar estructuras de datos de manera sencilla y declarativa.",
    tamaño: "Variable",
    categoria: CategoriaComando.UTILIDADES,
    documentacion: "https://zod.dev/",
    codigo: {
      npm: "npm install zod",
      pnpm: "pnpm add zod",
      bun: "bun add zod",
      yarn: "yarn add zod",
      deno: "deno add npm:zod"
    }
  },
  {
    NombreComando: "Day.js",
    descripcion:
      "Day.js es una biblioteca de manipulación de fechas para JavaScript. Es ligera y ofrece una API similar a Moment.js.",
    tamaño: "2KB",
    categoria: CategoriaComando.UTILIDADES,
    documentacion: "https://day.js.org/docs/en/installation/node-js",
    codigo: {
      npm: "npm install dayjs",
      pnpm: "pnpm add dayjs",
      yarn: "yarn add dayjs",
    }
  },
  {
    NombreComando: "Zustand",
    descripcion:
      "Zustand es una biblioteca de gestión de estado para React. Es ligera y fácil de usar, y permite crear tiendas de estado de manera sencilla.",
    tamaño: "Variable",
    categoria: CategoriaComando.ESTADO_DATOS,
    documentacion: "https://zustand.docs.pmnd.rs/getting-started/introduction",
    codigo: {
      npm: "npm install zustand",
      pnpm: "pnpm add zustand",
      yarn: "yarn add zustand",
      bun: "bun add zustand",
    }
  },
  {
    NombreComando: "React Hook Form",
    descripcion:
      "React Hook Form es una biblioteca para manejar formularios en React. Proporciona una API simple y flexible para la validación y gestión del estado de los formularios.",
    tamaño: "Variable",
    categoria: CategoriaComando.UTILIDADES,
    documentacion: "https://react-hook-form.com/get-started",
    codigo: {
      npm: "npm install react-hook-form",
      pnpm: "pnpm add react-hook-form",
      yarn: "yarn add react-hook-form",
      bun: "bun add react-hook-form",
    }
  },
   {
    NombreComando: "React Router",
    descripcion:
      "React Router es una biblioteca para manejar la navegación en aplicaciones React. Proporciona una API declarativa para definir rutas y gestionar la navegación entre diferentes vistas.",
    tamaño: "26.4 KB",
    categoria: CategoriaComando.UTILIDADES,
    documentacion: "https://reactrouter.com/home",
    codigo: {
      npm: "npm install react-router-dom",
      pnpm: "pnpm add react-router-dom",
      yarn: "yarn add react-router-dom",
      bun: "bun add react-router-dom",
    }
  },
    {
    NombreComando: "TanStack Query",
    descripcion:
      "TanStack Query es una biblioteca para manejar la sincronización y el almacenamiento en caché de datos en aplicaciones React. Proporciona una API declarativa para definir consultas y gestionar el estado de los datos.",
    tamaño: "26.4 KB",
    categoria: CategoriaComando.ESTADO_DATOS,
    documentacion: "https://tanstack.com/query/latest/docs/framework/react/installation",
    codigo: {
      npm: "npm install @tanstack/react-query",
      pnpm: "pnpm add @tanstack/react-query",
      yarn: "yarn add @tanstack/react-query",
      bun: "bun add @tanstack/react-query",
    }
  },
      {
    NombreComando: "ECharts for React",
    descripcion:
      "ECharts for React es una biblioteca para crear gráficos interactivos en aplicaciones React. Proporciona una API simple y flexible para integrar gráficos de ECharts en componentes de React.",
    tamaño: "2.2KB",
    categoria: CategoriaComando.GRAFICOS,
    documentacion: "https://git.hust.cc/echarts-for-react/",
    codigo: {
      npm: "npm install echarts-for-react",
      pnpm: "pnpm add echarts-for-react",
      yarn: "yarn add echarts echarts-for-react",
      bun: "bun add echarts-for-react",
    }
  },





];
