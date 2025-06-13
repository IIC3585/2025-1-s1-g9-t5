# Movie Database - Aplicación de Películas con Astro

## Descripción
Movie Database es una aplicación web estática desarrollada con Astro que permite a los usuarios explorar, calificar y gestionar su colección de películas. La aplicación utiliza la arquitectura de islas (Islands Architecture) y Jamstack (SSG) para ofrecer una experiencia de usuario óptima.

## Características Principales

### Arquitectura de Islas
- **MovieCarousel (Vue)**: Componente interactivo para mostrar películas en un carrusel deslizable
- **MovieDetails (React)**: Componente para mostrar detalles de películas y gestionar calificaciones
- **Directivas de Cliente**: Uso de `client:load` para componentes que requieren interactividad inmediata

### Generación Estática (SSG)
- Páginas generadas estáticamente para:
  - Películas populares
  - Películas mejor calificadas
  - Películas próximas
  - Películas por género
  - Detalles de películas individuales

### Integración con API Externa
- Integración con la API de TMDB (The Movie Database)
- Obtención de datos en tiempo de construcción
- Almacenamiento local de preferencias de usuario

### Funcionalidades
- Exploración de películas por categorías
- Sistema de calificación de 10 estrellas
- Historial de películas vistas
- Lista de películas para ver más tarde
- Búsqueda de películas
- Navegación por géneros

## Tecnologías Utilizadas
- **Astro**: Framework principal para la generación estática
- **Vue**: Framework para el componente MovieCarousel
- **React**: Framework para el componente MovieDetails
- **TailwindCSS**: Framework de estilos
- **TMDB API**: Fuente de datos de películas

## Requisitos
- Node.js 18 o superior
- NPM o Yarn
- API Key de TMDB

## Instalación
1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` con:
```
PUBLIC_TMDB_ACCESS_TOKEN=tu_api_key_de_tmdb
```

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## Estructura del Proyecto
```
src/
├── components/
│   ├── islands/        # Componentes de islas (Vue y React)
│   └── common/         # Componentes comunes
├── layouts/           # Layouts de la aplicación
├── pages/            # Páginas de la aplicación
├── services/         # Servicios y lógica de negocio
└── styles/           # Estilos globales
```

## Características Destacadas
1. **Arquitectura de Islas**: Implementación de componentes dinámicos con Vue y React
2. **Generación Estática**: Optimización de rendimiento mediante SSG
3. **Interactividad**: Sistema de calificación y gestión de películas
4. **Diseño Responsivo**: Interfaz adaptativa para diferentes dispositivos
5. **Persistencia Local**: Almacenamiento de preferencias de usuario

## Contribución
1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles. 