# App Educativa: Centro de Métodos del PNUD

## Descripción General

Esta aplicación web educativa fue creada para facilitar el aprendizaje sobre los métodos, herramientas y recursos del Centro de Métodos del Programa de las Naciones Unidas para el Desarrollo (PNUD). La aplicación está basada en recursos oficiales del PNUD y proporciona una experiencia de aprendizaje interactiva sobre evaluación, monitoreo y planificación para el desarrollo.

## Características Principales

### 🎯 Contenido Educativo Estructurado
- **4 Módulos de Aprendizaje** organizados por nivel de dificultad
- **Contenido basado en recursos oficiales** del PNUD
- **Ejercicios interactivos** incluyendo quizzes y reflexiones
- **Casos de estudio prácticos** con ejemplos reales

### 📚 Módulos Incluidos

1. **Fundamentos de Evaluación** (Básico)
   - Introducción a la evaluación
   - Tipos de evaluación en el PNUD
   - Principios y normas básicas

2. **Métodos y Herramientas** (Intermedio)
   - Métodos cuantitativos y cualitativos
   - Herramientas de diagnóstico
   - Tecnologías para evaluación

3. **Planificación y Monitoreo** (Intermedio)
   - Planificación basada en resultados
   - Sistemas de monitoreo efectivos
   - Indicadores y marcos de resultados

4. **Casos Prácticos** (Avanzado)
   - Evaluaciones de programas país
   - Evaluaciones temáticas
   - Ejemplos de implementación

### 🔧 Funcionalidades Técnicas

- **Interfaz Responsiva**: Optimizada para desktop y móvil
- **Navegación Intuitiva**: Fácil acceso a todos los módulos
- **Progreso de Aprendizaje**: Seguimiento del avance del usuario
- **Recursos Externos**: Enlaces a documentos oficiales del PNUD
- **Búsqueda y Filtrado**: En la sección de recursos

## Recursos Oficiales Incluidos

La aplicación incluye enlaces y referencias a más de 10 recursos oficiales del PNUD:

### Guías y Políticas
- Guías de Evaluación del PNUD (2021)
- Guía de Evaluación durante COVID-19
- Guía de Evaluación GEF

### Herramientas
- Herramienta de Diagnóstico Nacional
- KoBo Toolbox
- Sistema de Calificación de Programas País

### Manuales y Estándares
- Manual de Planificación, Monitoreo y Evaluación
- Estándares UNEG para Evaluación
- Síntesis de Evaluaciones

## Tecnologías Utilizadas

### Frontend
- **React 18** con TypeScript
- **React Router** para navegación
- **Tailwind CSS** para estilos
- **Lucide React** para iconos

### Desarrollo
- **Vite** como bundler
- **ESLint** para linting
- **PostCSS** para procesamiento de CSS

### Deployment
- Optimizado para **Vercel** y otros servicios de hosting estático

## Instalación y Uso

### Requisitos
- Node.js 16 o superior
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [repository-url]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

### Estructura del Proyecto
```
src/
├── components/          # Componentes React reutilizables
│   ├── Header.tsx      # Navegación principal
│   └── Footer.tsx      # Pie de página
├── pages/              # Páginas principales
│   ├── Home.tsx        # Página de inicio
│   ├── ModuleDetail.tsx # Detalle de módulos
│   ├── Resources.tsx   # Recursos del PNUD
│   └── About.tsx       # Información sobre la app
├── data/               # Datos y contenido educativo
│   └── modules.ts      # Definición de módulos
├── types/              # Definiciones TypeScript
│   └── index.ts        # Tipos de datos
└── styles/             # Estilos globales
    └── index.css       # CSS principal
```

## Contenido Educativo

### Metodología de Aprendizaje
- **Aprendizaje Progresivo**: De conceptos básicos a aplicaciones avanzadas
- **Interactividad**: Ejercicios y evaluaciones en cada módulo
- **Recursos Complementarios**: Enlaces a documentos oficiales
- **Casos Prácticos**: Ejemplos reales de implementación

### Público Objetivo
- Profesionales del desarrollo
- Evaluadores y monitores de programas
- Personal del PNUD y organizaciones asociadas
- Estudiantes de desarrollo internacional
- Consultores en evaluación

## Fuentes y Referencias

### Recursos Oficiales del PNUD
- [UNDP Evaluation Guidelines](http://web.undp.org/evaluation/guideline/index.shtml)
- [Independent Evaluation Office](http://web.undp.org/evaluation/)
- [Methods and Guidance](http://web.undp.org/evaluation/guidance.shtml)
- [Evaluation Resource Centre](http://web.undp.org/evaluation/erc.shtml)

### Organizaciones Colaboradoras
- **UNEG** (UN Evaluation Group)
- **OECD-DAC** (Development Assistance Committee)
- **GEF** (Global Environment Facility)

## Contribución y Desarrollo

### Cómo Contribuir
1. Fork el repositorio
2. Crear una rama para la nueva funcionalidad
3. Implementar cambios siguiendo las convenciones del proyecto
4. Enviar pull request con descripción detallada

### Estándares de Código
- Usar TypeScript para type safety
- Seguir convenciones de React y Hooks
- Mantener componentes pequeños y reutilizables
- Documentar funciones complejas

## Licencia y Uso

### Licencia
Este proyecto está bajo la **Licencia MIT**, permitiendo uso libre con atribución.

### Aviso Legal
Esta aplicación es una herramienta educativa independiente basada en recursos públicos del PNUD. No es un producto oficial del PNUD y se proporciona únicamente con fines educativos.

## Contacto y Soporte

Para preguntas sobre la aplicación o sugerencias de mejora:
- Crear un issue en el repositorio
- Contactar al equipo de desarrollo
- Consultar la documentación oficial del PNUD para contenido específico

---

**Desarrollado con ❤️ para la comunidad de desarrollo internacional**

*Versión: 1.0.0*  
*Última actualización: Diciembre 2024*