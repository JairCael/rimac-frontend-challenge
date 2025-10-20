# Rimac Seguros - Frontend Challenge

Aplicación web para cotización de seguros de salud desarrollada como parte de "Rimac Frontend Challenge".

![React](https://img.shields.io/badge/React-19.1-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1-646cff?logo=vite)

## Inicio

### Requisitos

- Node.js >= 18.x
- npm >= 9.x

### Instalación

```bash
# Clonar repositorio
git clone rimac-frontend-challenge
cd rimac-frontend-challenge

# Instalar dependencias
npm install

# Credenciales del .env

# Iniciar servidor de desarrollo
npm run dev
```

### Configuración

#### Variables de Entorno

Modificar archivo `.env` en la raíz con:

```env
VITE_API_BASE_URL=https://rimac-front-end-challenge.netlify.app/api/
VITE_TEST_DNI=444888888
VITE_TEST_PHONE=5130216147
```

### Tecnologías

- **React 19**
- **TypeScript**
- **Vite**
- **React Router**
- **Sass**
- **Axios**

### Funcionalidades

- ✅ Formulario de cotización con validación
- ✅ Selección de planes de seguro
- ✅ Protección de rutas
- ✅ Persistencia de datos con localStorage
- ✅ Diseño responsive (mobile-first)
- ✅ Lazy loading de rutas
- ✅ Imágenes optimizadas (WebP + fallback)

### Buenas Prácticas Implementadas

- **TypeScript**: Tipos centralizados y estrictos
- **Arquitectura**: Organización por features
- **Estilos**: BEM + Sass modular (`@use`/`@forward`)
- **Performance**: React.memo + Lazy loading
- **Código limpio**: Barrel exports + helpers

### Navegadores Soportados

- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90

---

**Desarrollado por Jair Cayahua**
