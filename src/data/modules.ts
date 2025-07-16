import { Module } from '../types';

export const modules: Module[] = [
  {
    id: 'evaluation-fundamentals',
    title: 'Fundamentos de Evaluación',
    description: 'Principios básicos, normas y estándares de evaluación en el contexto del PNUD',
    icon: 'BookOpen',
    estimatedTime: '2-3 horas',
    difficulty: 'Básico',
    sections: [
      {
        id: 'intro-evaluation',
        title: 'Introducción a la Evaluación',
        content: `
          <h3>¿Qué es la Evaluación?</h3>
          <p>La evaluación es una valoración sistemática y objetiva de un proyecto, programa o política en curso o completado, su diseño, implementación y resultados. El objetivo es determinar la relevancia y el cumplimiento de los objetivos, la eficiencia del desarrollo, la efectividad, el impacto y la sostenibilidad.</p>
          
          <h3>Propósito de la Evaluación en el PNUD</h3>
          <ul>
            <li><strong>Rendición de cuentas:</strong> Demostrar el uso responsable de los recursos</li>
            <li><strong>Aprendizaje:</strong> Generar conocimiento para mejorar el desempeño</li>
            <li><strong>Toma de decisiones:</strong> Informar decisiones estratégicas y operativas</li>
            <li><strong>Mejora continua:</strong> Fortalecer la efectividad del desarrollo</li>
          </ul>
          
          <h3>Principios Fundamentales</h3>
          <p>La evaluación en el PNUD se basa en los siguientes principios:</p>
          <ul>
            <li><strong>Independencia:</strong> Libre de influencias indebidas</li>
            <li><strong>Imparcialidad:</strong> Equilibrada y justa</li>
            <li><strong>Credibilidad:</strong> Basada en evidencia sólida</li>
            <li><strong>Utilidad:</strong> Relevante para los usuarios</li>
          </ul>
        `,
        resources: [
          {
            id: 'eval-policy',
            title: 'Política de Evaluación del PNUD',
            type: 'pdf',
            url: 'http://web.undp.org/evaluation/documents/Evaluation-Policy.pdf',
            description: 'Documento oficial de la política de evaluación'
          },
          {
            id: 'uneg-standards',
            title: 'Estándares UNEG para Evaluación',
            type: 'link',
            url: 'http://www.uneval.org/standards',
            description: 'Normas del Grupo de Evaluación de las Naciones Unidas'
          }
        ]
      },
      {
        id: 'evaluation-types',
        title: 'Tipos de Evaluación',
        content: `
          <h3>Evaluaciones Independientes</h3>
          <p>Realizadas por la Oficina de Evaluación Independiente (IEO) del PNUD:</p>
          <ul>
            <li><strong>Evaluaciones de Programas País:</strong> Evalúan el desempeño del programa país</li>
            <li><strong>Evaluaciones Temáticas:</strong> Analizan temas específicos a nivel global</li>
            <li><strong>Evaluaciones Corporativas:</strong> Evalúan políticas y estrategias organizacionales</li>
          </ul>
          
          <h3>Evaluaciones Descentralizadas</h3>
          <p>Realizadas por las unidades de programa:</p>
          <ul>
            <li><strong>Evaluaciones de Proyecto:</strong> Evaluaciones finales e intermedias</li>
            <li><strong>Evaluaciones de Resultado:</strong> Evalúan resultados específicos</li>
            <li><strong>Evaluaciones Conjuntas:</strong> Realizadas con socios</li>
          </ul>
          
          <h3>Evaluaciones Especializadas</h3>
          <ul>
            <li><strong>Evaluaciones de Impacto:</strong> Miden cambios atribuibles</li>
            <li><strong>Evaluaciones en Tiempo Real:</strong> Durante la implementación</li>
            <li><strong>Evaluaciones Post-Hoc:</strong> Después de la finalización</li>
          </ul>
        `,
        exercises: [
          {
            id: 'eval-types-quiz',
            title: 'Tipos de Evaluación - Quiz',
            type: 'quiz',
            content: '¿Cuál es la principal diferencia entre una evaluación independiente y una descentralizada?',
            options: [
              'El costo de la evaluación',
              'Quién conduce la evaluación',
              'La duración de la evaluación',
              'El tipo de metodología utilizada'
            ],
            correctAnswer: 1
          }
        ]
      }
    ]
  },
  {
    id: 'methods-tools',
    title: 'Métodos y Herramientas',
    description: 'Herramientas prácticas y metodologías para la evaluación y el monitoreo',
    icon: 'Settings',
    estimatedTime: '3-4 horas',
    difficulty: 'Intermedio',
    sections: [
      {
        id: 'evaluation-methods',
        title: 'Métodos de Evaluación',
        content: `
          <h3>Métodos Cuantitativos</h3>
          <p>Utilizan datos numéricos para medir resultados:</p>
          <ul>
            <li><strong>Encuestas:</strong> Recolección sistemática de datos</li>
            <li><strong>Análisis estadístico:</strong> Procesamiento de datos numéricos</li>
            <li><strong>Indicadores:</strong> Medidas específicas de progreso</li>
            <li><strong>Líneas base:</strong> Puntos de referencia iniciales</li>
          </ul>
          
          <h3>Métodos Cualitativos</h3>
          <p>Exploran experiencias y percepciones:</p>
          <ul>
            <li><strong>Entrevistas:</strong> Conversaciones estructuradas</li>
            <li><strong>Grupos focales:</strong> Discusiones grupales</li>
            <li><strong>Observación:</strong> Análisis directo de actividades</li>
            <li><strong>Estudios de caso:</strong> Análisis profundo de situaciones específicas</li>
          </ul>
          
          <h3>Métodos Mixtos</h3>
          <p>Combinan enfoques cuantitativos y cualitativos para una comprensión más completa.</p>
          
          <h3>Herramientas Digitales</h3>
          <ul>
            <li><strong>Plataformas de encuestas:</strong> KoBo Toolbox, SurveyMonkey</li>
            <li><strong>Análisis de datos:</strong> SPSS, R, Python</li>
            <li><strong>Visualización:</strong> Tableau, Power BI</li>
            <li><strong>Colaboración:</strong> Teams, Slack</li>
          </ul>
        `,
        resources: [
          {
            id: 'kobo-guide',
            title: 'Guía de KoBo Toolbox',
            type: 'link',
            url: 'https://www.kobotoolbox.org/learn/',
            description: 'Herramienta gratuita para recolección de datos'
          }
        ]
      },
      {
        id: 'diagnostic-tools',
        title: 'Herramientas de Diagnóstico',
        content: `
          <h3>Herramienta de Diagnóstico Nacional</h3>
          <p>Desarrollada por la IEO para evaluar planes nacionales de desarrollo y progreso en los ODS.</p>
          
          <h3>Objetivos Principales:</h3>
          <ul>
            <li>Facilitar el desarrollo de marcos de evaluación nacional</li>
            <li>Responder a brechas en el pensamiento evaluativo</li>
            <li>Informar procesos de evaluación liderados por países</li>
            <li>Apoyar diagnósticos de evaluación nacional</li>
          </ul>
          
          <h3>Componentes de la Herramienta:</h3>
          <ul>
            <li><strong>Autoevaluación:</strong> Cuestionario estructurado</li>
            <li><strong>Marco flexible:</strong> Adaptable a contextos nacionales</li>
            <li><strong>Guía práctica:</strong> Instrucciones paso a paso</li>
            <li><strong>Herramienta en línea:</strong> Plataforma digital fácil de usar</li>
          </ul>
          
          <h3>Proceso de Implementación:</h3>
          <ol>
            <li>Preparación y planificación</li>
            <li>Recolección de información</li>
            <li>Análisis y síntesis</li>
            <li>Desarrollo de recomendaciones</li>
            <li>Implementación y seguimiento</li>
          </ol>
        `,
        resources: [
          {
            id: 'diagnostic-brief',
            title: 'Resumen de Herramienta de Diagnóstico',
            type: 'pdf',
            url: 'http://web.undp.org/evaluation/guidance.shtml',
            description: 'Documento técnico sobre la herramienta'
          }
        ]
      }
    ]
  },
  {
    id: 'planning-monitoring',
    title: 'Planificación y Monitoreo',
    description: 'Planificación basada en resultados y sistemas de monitoreo efectivos',
    icon: 'Target',
    estimatedTime: '2-3 horas',
    difficulty: 'Intermedio',
    sections: [
      {
        id: 'results-based-planning',
        title: 'Planificación Basada en Resultados',
        content: `
          <h3>¿Qué es la Planificación Basada en Resultados?</h3>
          <p>Un enfoque de gestión que se centra en los resultados de desarrollo y utiliza información sobre estos resultados para guiar las decisiones de gestión.</p>
          
          <h3>Componentes Clave:</h3>
          <ul>
            <li><strong>Teoría del Cambio:</strong> Lógica que conecta actividades con resultados</li>
            <li><strong>Marco de Resultados:</strong> Estructura de productos, efectos e impactos</li>
            <li><strong>Indicadores:</strong> Medidas específicas de progreso</li>
            <li><strong>Líneas Base:</strong> Situación inicial antes de la intervención</li>
            <li><strong>Metas:</strong> Resultados esperados al final del período</li>
          </ul>
          
          <h3>Proceso de Planificación:</h3>
          <ol>
            <li><strong>Análisis de situación:</strong> Comprensión del contexto</li>
            <li><strong>Identificación de problemas:</strong> Definición de desafíos</li>
            <li><strong>Formulación de objetivos:</strong> Establecimiento de metas</li>
            <li><strong>Diseño de estrategias:</strong> Definición de enfoques</li>
            <li><strong>Desarrollo de indicadores:</strong> Medidas de éxito</li>
            <li><strong>Planificación de M&E:</strong> Sistema de seguimiento</li>
          </ol>
          
          <h3>Herramientas de Planificación:</h3>
          <ul>
            <li><strong>Árbol de problemas:</strong> Análisis de causas y efectos</li>
            <li><strong>Árbol de objetivos:</strong> Conversión de problemas en soluciones</li>
            <li><strong>Marco lógico:</strong> Matriz de planificación</li>
            <li><strong>Teoría del cambio:</strong> Narrativa de transformación</li>
          </ul>
        `,
        resources: [
          {
            id: 'planning-handbook',
            title: 'Manual de Planificación del PNUD',
            type: 'pdf',
            url: 'http://web.undp.org/evaluation/handbook/index.html',
            description: 'Guía completa sobre planificación, monitoreo y evaluación'
          }
        ]
      },
      {
        id: 'monitoring-systems',
        title: 'Sistemas de Monitoreo',
        content: `
          <h3>Elementos de un Sistema de Monitoreo Efectivo</h3>
          
          <h4>1. Indicadores de Desempeño</h4>
          <ul>
            <li><strong>Indicadores de Producto:</strong> Bienes y servicios entregados</li>
            <li><strong>Indicadores de Efecto:</strong> Cambios en beneficiarios</li>
            <li><strong>Indicadores de Impacto:</strong> Cambios a largo plazo</li>
          </ul>
          
          <h4>2. Recolección de Datos</h4>
          <ul>
            <li><strong>Fuentes primarias:</strong> Datos recolectados directamente</li>
            <li><strong>Fuentes secundarias:</strong> Datos existentes</li>
            <li><strong>Frecuencia:</strong> Mensual, trimestral, anual</li>
            <li><strong>Responsabilidades:</strong> Quién recolecta qué datos</li>
          </ul>
          
          <h4>3. Análisis y Reporte</h4>
          <ul>
            <li><strong>Análisis de tendencias:</strong> Progreso a lo largo del tiempo</li>
            <li><strong>Análisis comparativo:</strong> Contra metas y benchmarks</li>
            <li><strong>Identificación de desviaciones:</strong> Problemas y oportunidades</li>
            <li><strong>Recomendaciones:</strong> Acciones correctivas</li>
          </ul>
          
          <h4>4. Uso de Información</h4>
          <ul>
            <li><strong>Toma de decisiones:</strong> Ajustes estratégicos</li>
            <li><strong>Comunicación:</strong> Reportes a stakeholders</li>
            <li><strong>Aprendizaje:</strong> Mejora continua</li>
            <li><strong>Rendición de cuentas:</strong> Transparencia</li>
          </ul>
        `,
        exercises: [
          {
            id: 'monitoring-reflection',
            title: 'Reflexión sobre Monitoreo',
            type: 'reflection',
            content: 'Piensa en un proyecto que conozcas. ¿Qué indicadores utilizarías para monitorear su progreso? ¿Con qué frecuencia recolectarías datos?'
          }
        ]
      }
    ]
  },
  {
    id: 'case-studies',
    title: 'Casos Prácticos',
    description: 'Ejemplos reales de aplicación de métodos de evaluación del PNUD',
    icon: 'FileText',
    estimatedTime: '1-2 horas',
    difficulty: 'Avanzado',
    sections: [
      {
        id: 'country-evaluations',
        title: 'Evaluaciones de Programas País',
        content: `
          <h3>¿Qué son las Evaluaciones de Programas País?</h3>
          <p>Son evaluaciones independientes que analizan el desempeño del PNUD en un país específico, evaluando la relevancia, efectividad, eficiencia y sostenibilidad de los programas.</p>
          
          <h3>Metodología Típica:</h3>
          <ul>
            <li><strong>Revisión documental:</strong> Análisis de documentos del programa</li>
            <li><strong>Entrevistas:</strong> Con stakeholders clave</li>
            <li><strong>Visitas de campo:</strong> Observación directa</li>
            <li><strong>Grupos focales:</strong> Con beneficiarios</li>
            <li><strong>Análisis de datos:</strong> Indicadores de desempeño</li>
          </ul>
          
          <h3>Criterios de Evaluación:</h3>
          <ul>
            <li><strong>Relevancia:</strong> Alineación con prioridades nacionales</li>
            <li><strong>Efectividad:</strong> Logro de resultados esperados</li>
            <li><strong>Eficiencia:</strong> Uso óptimo de recursos</li>
            <li><strong>Sostenibilidad:</strong> Continuidad de beneficios</li>
            <li><strong>Impacto:</strong> Cambios significativos</li>
          </ul>
          
          <h3>Proceso de Evaluación:</h3>
          <ol>
            <li><strong>Preparación:</strong> Términos de referencia</li>
            <li><strong>Inicio:</strong> Reunión con stakeholders</li>
            <li><strong>Recolección de datos:</strong> Trabajo de campo</li>
            <li><strong>Análisis:</strong> Procesamiento de información</li>
            <li><strong>Reporte:</strong> Hallazgos y recomendaciones</li>
            <li><strong>Seguimiento:</strong> Implementación de recomendaciones</li>
          </ol>
        `,
        resources: [
          {
            id: 'icpe-examples',
            title: 'Ejemplos de Evaluaciones de Programas País',
            type: 'link',
            url: 'http://web.undp.org/evaluation/evaluations/icpe.shtml',
            description: 'Colección de evaluaciones independientes de programas país'
          }
        ]
      },
      {
        id: 'thematic-evaluations',
        title: 'Evaluaciones Temáticas',
        content: `
          <h3>Características de las Evaluaciones Temáticas</h3>
          <p>Evalúan el desempeño del PNUD en áreas críticas para asegurar contribuciones sostenidas a los resultados de desarrollo.</p>
          
          <h3>Temas Recientes Evaluados:</h3>
          <ul>
            <li><strong>Desarrollo del Sector Privado:</strong> Apoyo a la transformación estructural</li>
            <li><strong>Gestión de Ecosistemas:</strong> Conservación de biodiversidad</li>
            <li><strong>Digitalización:</strong> Servicios públicos digitales</li>
            <li><strong>Acceso a la Justicia:</strong> Sistemas judiciales inclusivos</li>
            <li><strong>Protección Social:</strong> Sistemas de seguridad social</li>
          </ul>
          
          <h3>Metodología de Evaluación Temática:</h3>
          <ul>
            <li><strong>Revisión de portafolio:</strong> Análisis de proyectos relevantes</li>
            <li><strong>Estudios de caso:</strong> Análisis profundo de países seleccionados</li>
            <li><strong>Consultas globales:</strong> Encuestas y entrevistas</li>
            <li><strong>Análisis de datos:</strong> Indicadores de desempeño</li>
            <li><strong>Benchmarking:</strong> Comparación con mejores prácticas</li>
          </ul>
          
          <h3>Productos de Evaluación:</h3>
          <ul>
            <li><strong>Informe principal:</strong> Hallazgos y recomendaciones</li>
            <li><strong>Resumen ejecutivo:</strong> Puntos clave</li>
            <li><strong>Estudios de caso:</strong> Ejemplos específicos</li>
            <li><strong>Infografías:</strong> Visualización de datos</li>
            <li><strong>Presentaciones:</strong> Para diferentes audiencias</li>
          </ul>
        `,
        exercises: [
          {
            id: 'thematic-case',
            title: 'Análisis de Caso Temático',
            type: 'case-study',
            content: 'Analiza una evaluación temática reciente del PNUD. ¿Cuáles fueron los principales hallazgos? ¿Cómo se pueden aplicar las recomendaciones en tu contexto?'
          }
        ]
      }
    ]
  }
];