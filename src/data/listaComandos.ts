import { CategoriaComando, type PropsListaComandos } from "@/types/listaComandos.types";

export const ListaComandos: PropsListaComandos[] = [
  // Instalación
  {
    NombreComando: "Instalar React con Vite",
    descripcion: "Crea un proyecto React moderno usando Vite.",
    tamaño: "2MB",
    categoria: CategoriaComando.INSTALACION,
    codigo: {
      npm: "npm create vite@latest my-app -- --template react",
      pnpm: "pnpm create vite@latest my-app -- --template react",
      bun: "bun create vite@latest my-app -- --template react",
      yarn: "yarn create vite my-app --template react",
    }
  },
  // UI y Componentes
  {
    NombreComando: "Instalar MUI (Material UI)",
    descripcion: "Librería de componentes UI lista para producción y altamente personalizable.",
    tamaño: "1.2MB",
    categoria: CategoriaComando.UI_COMPONENTES,
    codigo: {
      npm: "npm install @mui/material @emotion/react @emotion/styled",
      pnpm: "pnpm add @mui/material @emotion/react @emotion/styled",
      bun: "bun add @mui/material @emotion/react @emotion/styled",
      yarn: "yarn add @mui/material @emotion/react @emotion/styled",
    }
  },
  // Iconos
  {
    NombreComando: "Instalar React Icons",
    descripcion: "Incluye miles de iconos populares en tu proyecto React.",
    tamaño: "2MB",
    categoria: CategoriaComando.ICONOS,
    codigo: {
      npm: "npm install react-icons",
      pnpm: "pnpm add react-icons",
      bun: "bun add react-icons",
      yarn: "yarn add react-icons",
    }
  },
  // Fuentes y Tipografía
  {
    NombreComando: "Google Fonts",
    descripcion: "Catálogo de fuentes open source para web, fácil integración con React.",
    tamaño: "Variable",
    categoria: CategoriaComando.FUENTES,
    codigo: {
      npm: "npm install @fontsource/roboto",
      pnpm: "pnpm add @fontsource/roboto",
      bun: "bun add @fontsource/roboto",
      yarn: "yarn add @fontsource/roboto",
    }
  },
  // Animaciones y Transiciones
  {
    NombreComando: "Instalar Framer Motion",
    descripcion: "Animaciones y transiciones avanzadas para React.",
    tamaño: "500KB",
    categoria: CategoriaComando.ANIMACIONES,
    codigo: {
      npm: "npm install framer-motion",
      pnpm: "pnpm add framer-motion",
      bun: "bun add framer-motion",
      yarn: "yarn add framer-motion",
    }
  },
  // Estado y Gestión de Datos
  {
    NombreComando: "Instalar Redux Toolkit",
    descripcion: "Gestión de estado global eficiente y moderna para React.",
    tamaño: "1MB",
    categoria: CategoriaComando.ESTADO_DATOS,
    codigo: {
      npm: "npm install @reduxjs/toolkit react-redux",
      pnpm: "pnpm add @reduxjs/toolkit react-redux",
      bun: "bun add @reduxjs/toolkit react-redux",
      yarn: "yarn add @reduxjs/toolkit react-redux",
    }
  },
  // Utilidades y Helpers
  {
    NombreComando: "Instalar date-fns",
    descripcion: "Utilidades modernas para manipulación de fechas en JavaScript.",
    tamaño: "300KB",
    categoria: CategoriaComando.UTILIDADES,
    codigo: {
      npm: "npm install date-fns",
      pnpm: "pnpm add date-fns",
      bun: "bun add date-fns",
      yarn: "yarn add date-fns",
    }
  },
  // Estilos y Theming
  {
    NombreComando: "Instalar styled-components",
    descripcion: "Estiliza componentes con CSS-in-JS, tipado y flexibilidad.",
    tamaño: "500KB",
    categoria: CategoriaComando.ESTILOS,
    codigo: {
      npm: "npm install styled-components",
      pnpm: "pnpm add styled-components",
      bun: "bun add styled-components",
      yarn: "yarn add styled-components",
    }
  },
  // Testing
  {
    NombreComando: "Instalar Testing Library + Jest",
    descripcion: "Testing orientado a buenas prácticas y simulación de usuario.",
    tamaño: "2MB",
    categoria: CategoriaComando.TESTING,
    codigo: {
      npm: "npm install @testing-library/react jest",
      pnpm: "pnpm add @testing-library/react jest",
      bun: "bun add @testing-library/react jest",
      yarn: "yarn add @testing-library/react jest",
    }
  },
  // Herramientas de Desarrollo
  {
    NombreComando: "Instalar Storybook",
    descripcion: "Documenta y prueba componentes UI en aislamiento.",
    tamaño: "3MB",
    categoria: CategoriaComando.HERRAMIENTAS,
    codigo: {
      npm: "npm install --save-dev storybook",
      pnpm: "pnpm add --save-dev storybook",
      bun: "bun add --dev storybook",
      yarn: "yarn add --dev storybook",
    }
  }
];