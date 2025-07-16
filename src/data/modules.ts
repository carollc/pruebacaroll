import { Module } from '../types';

export const modules: Module[] = [
  {
    id: 'theory-based-approaches',
    title: 'Enfoques Basados en Teoría',
    description: 'Comprende y prueba la teoría de cambio subyacente detrás de las intervenciones',
    icon: 'BookOpen',
    estimatedTime: '2-3 horas',
    difficulty: 'Intermedio',
    sections: [
      {
        id: 'theory-of-change',
        title: 'Teoría de Cambio',
        content: `
          <h3>¿Qué es la Teoría de Cambio?</h3>
          <p>La Teoría de Cambio (ToC) es una metodología que explica cómo y por qué se espera que una intervención genere cambios específicos. Es un mapa conceptual que conecta las actividades con los resultados a largo plazo.</p>
          
          <h3>Componentes Clave de una ToC</h3>
          <ul>
            <li><strong>Insumos:</strong> Recursos necesarios para la intervención</li>
            <li><strong>Actividades:</strong> Acciones específicas que se realizarán</li>
            <li><strong>Productos:</strong> Resultados directos de las actividades</li>
            <li><strong>Resultados:</strong> Cambios a mediano plazo</li>
            <li><strong>Impactos:</strong> Cambios a largo plazo</li>
            <li><strong>Supuestos:</strong> Condiciones necesarias para el éxito</li>
          </ul>
          
          <h3>Proceso de Desarrollo</h3>
          <ol>
            <li><strong>Definir el impacto a largo plazo</strong></li>
            <li><strong>Trabajar hacia atrás</strong> para identificar precondiciones</li>
            <li><strong>Mapear las actividades</strong> necesarias</li>
            <li><strong>Identificar supuestos</strong> críticos</li>
            <li><strong>Desarrollar indicadores</strong> para cada nivel</li>
          </ol>
        `,
        resources: [
          {
            id: 'toc-guide',
            title: 'Guía de Teoría de Cambio - J-PAL',
            type: 'pdf',
            url: 'https://www.povertyactionlab.org/resource/theory-change',
            description: 'Guía completa para desarrollar teorías de cambio efectivas'
          },
          {
            id: 'undp-toc',
            title: 'UNDP Theory of Change Guidance',
            type: 'document',
            url: 'https://www.undp.org/publications/undp-theory-change-guidance',
            description: 'Orientación del PNUD para desarrollar teorías de cambio'
          }
        ],
        exercises: [
          {
            id: 'toc-quiz',
            title: 'Quiz: Componentes de la Teoría de Cambio',
            type: 'quiz',
            content: '¿Cuál es el primer paso en el desarrollo de una Teoría de Cambio?',
            options: [
              'Definir las actividades',
              'Identificar los insumos necesarios',
              'Definir el impacto a largo plazo',
              'Desarrollar indicadores'
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'assumptions-testing',
        title: 'Prueba de Supuestos',
        content: `
          <h3>Importancia de los Supuestos</h3>
          <p>Los supuestos son condiciones que deben cumplirse para que la teoría de cambio funcione, pero que están fuera del control directo del programa. Probar estos supuestos es crucial para la validez de la evaluación.</p>
          
          <h3>Tipos de Supuestos</h3>
          <ul>
            <li><strong>Supuestos de Contexto:</strong> Condiciones del entorno externo</li>
            <li><strong>Supuestos de Comportamiento:</strong> Cómo actuarán los beneficiarios</li>
            <li><strong>Supuestos Institucionales:</strong> Funcionamiento de las organizaciones</li>
            <li><strong>Supuestos Técnicos:</strong> Funcionamiento de las intervenciones</li>
          </ul>
          
          <h3>Métodos para Probar Supuestos</h3>
          <ul>
            <li><strong>Análisis de riesgos:</strong> Evaluar probabilidad e impacto</li>
            <li><strong>Monitoreo continuo:</strong> Seguimiento de indicadores clave</li>
            <li><strong>Evaluaciones rápidas:</strong> Verificación periódica</li>
            <li><strong>Análisis de contribución:</strong> Verificar causalidad</li>
          </ul>
        `,
        exercises: [
          {
            id: 'assumptions-reflection',
            title: 'Reflexión: Identificando Supuestos',
            type: 'reflection',
            content: 'Piensa en un programa que conozcas. ¿Cuáles serían 3 supuestos críticos para su éxito? ¿Cómo los probarías?'
          }
        ]
      }
    ]
  },
  {
    id: 'participatory-approaches',
    title: 'Enfoques Participativos',
    description: 'Involucra activamente a los stakeholders en todos los procesos de evaluación',
    icon: 'Users',
    estimatedTime: '2-3 horas',
    difficulty: 'Intermedio',
    sections: [
      {
        id: 'participatory-principles',
        title: 'Principios de Evaluación Participativa',
        content: `
          <h3>¿Qué es la Evaluación Participativa?</h3>
          <p>La evaluación participativa involucra activamente a los stakeholders en todos los aspectos del proceso evaluativo, desde el diseño hasta la implementación de recomendaciones. Cambia las dinámicas de poder tradicionales.</p>
          
          <h3>Principios Fundamentales</h3>
          <ul>
            <li><strong>Inclusión:</strong> Todos los stakeholders relevantes participan</li>
            <li><strong>Empoderamiento:</strong> Los participantes tienen control real</li>
            <li><strong>Aprendizaje:</strong> Enfoque en el desarrollo de capacidades</li>
            <li><strong>Utilización:</strong> Resultados usados por los participantes</li>
            <li><strong>Democratización:</strong> Acceso equitativo al proceso</li>
          </ul>
          
          <h3>Beneficios de la Participación</h3>
          <ul>
            <li><strong>Mayor relevancia:</strong> Preguntas importantes para los usuarios</li>
            <li><strong>Mejor comprensión:</strong> Conocimiento local y contextual</li>
            <li><strong>Mayor utilización:</strong> Apropiación de los resultados</li>
            <li><strong>Desarrollo de capacidades:</strong> Aprendizaje organizacional</li>
            <li><strong>Legitimidad:</strong> Aceptación de los hallazgos</li>
          </ul>
          
          <h3>Desafíos Comunes</h3>
          <ul>
            <li>Equilibrar diferentes perspectivas</li>
            <li>Gestionar expectativas diversas</li>
            <li>Asegurar representatividad</li>
            <li>Mantener rigor metodológico</li>
          </ul>
        `,
        resources: [
          {
            id: 'participatory-guide',
            title: 'Participatory Evaluation Guide - UNICEF',
            type: 'pdf',
            url: 'https://www.unicef.org/evaluation/media/1076/file/GEROS-Participatory-Evaluation-2021.pdf',
            description: 'Guía completa sobre evaluación participativa'
          }
        ]
      },
      {
        id: 'stakeholder-engagement',
        title: 'Involucramiento de Stakeholders',
        content: `
          <h3>Mapeo de Stakeholders</h3>
          <p>Identificar y analizar todos los actores relevantes es el primer paso para una evaluación participativa exitosa.</p>
          
          <h3>Categorías de Stakeholders</h3>
          <ul>
            <li><strong>Primarios:</strong> Beneficiarios directos del programa</li>
            <li><strong>Secundarios:</strong> Intermediarios y organizaciones de apoyo</li>
            <li><strong>Clave:</strong> Tomadores de decisiones y financiadores</li>
            <li><strong>Externos:</strong> Comunidad más amplia y otros programas</li>
          </ul>
          
          <h3>Métodos de Participación</h3>
          <ul>
            <li><strong>Talleres colaborativos:</strong> Diseño conjunto de la evaluación</li>
            <li><strong>Grupos focales:</strong> Recolección de perspectivas diversas</li>
            <li><strong>Entrevistas participativas:</strong> Diálogo bidireccional</li>
            <li><strong>Observación participante:</strong> Inmersión en el contexto</li>
            <li><strong>Técnicas visuales:</strong> Mapas, diagramas, storytelling</li>
          </ul>
        `,
        exercises: [
          {
            id: 'stakeholder-quiz',
            title: 'Quiz: Tipos de Stakeholders',
            type: 'quiz',
            content: '¿Cuál es la característica principal de los stakeholders primarios?',
            options: [
              'Tienen poder de decisión',
              'Financian el programa',
              'Son beneficiarios directos',
              'Implementan actividades'
            ],
            correctAnswer: 2
          }
        ]
      }
    ]
  },
  {
    id: 'impact-approaches',
    title: 'Enfoques de Impacto',
    description: 'Comprende los cambios directamente atribuibles a intervenciones específicas',
    icon: 'Target',
    estimatedTime: '3-4 horas',
    difficulty: 'Avanzado',
    sections: [
      {
        id: 'impact-evaluation-basics',
        title: 'Fundamentos de Evaluación de Impacto',
        content: `
          <h3>¿Qué es la Evaluación de Impacto?</h3>
          <p>La evaluación de impacto busca responder la pregunta: "¿Qué cambios se pueden atribuir directamente a la intervención?" Se enfoca en establecer causalidad, no solo correlación.</p>
          
          <h3>Pregunta Fundamental</h3>
          <p><strong>¿Qué habría pasado sin la intervención?</strong></p>
          <p>Esta pregunta contrafactual es central para la evaluación de impacto. Necesitamos comparar lo que pasó con lo que habría pasado sin el programa.</p>
          
          <h3>Componentes Clave</h3>
          <ul>
            <li><strong>Grupo de tratamiento:</strong> Beneficiarios del programa</li>
            <li><strong>Grupo de comparación:</strong> Similar pero sin intervención</li>
            <li><strong>Medición de resultados:</strong> Antes y después</li>
            <li><strong>Análisis causal:</strong> Atribución del cambio</li>
          </ul>
          
          <h3>Tipos de Impacto</h3>
          <ul>
            <li><strong>Impacto directo:</strong> Cambios inmediatos en beneficiarios</li>
            <li><strong>Impacto indirecto:</strong> Efectos en no-beneficiarios</li>
            <li><strong>Impacto no intencional:</strong> Consecuencias no previstas</li>
            <li><strong>Impacto a largo plazo:</strong> Sostenibilidad de cambios</li>
          </ul>
        `,
        resources: [
          {
            id: 'jpal-impact-guide',
            title: 'J-PAL Impact Evaluation Guide',
            type: 'link',
            url: 'https://www.povertyactionlab.org/resource/evaluating-social-programs',
            description: 'Guía completa de J-PAL sobre evaluación de impacto'
          },
          {
            id: 'world-bank-impact',
            title: 'World Bank Impact Evaluation Toolkit',
            type: 'pdf',
            url: 'https://www.worldbank.org/en/programs/sief-trust-fund/publication/impact-evaluation-in-practice',
            description: 'Herramientas prácticas para evaluación de impacto'
          }
        ]
      },
      {
        id: 'experimental-designs',
        title: 'Diseños Experimentales',
        content: `
          <h3>Experimentos Aleatorios Controlados (RCT)</h3>
          <p>Los RCT son considerados el "estándar dorado" para establecer causalidad. Asignan aleatoriamente participantes a grupos de tratamiento y control.</p>
          
          <h3>Ventajas de los RCT</h3>
          <ul>
            <li><strong>Causalidad fuerte:</strong> Elimina sesgos de selección</li>
            <li><strong>Validez interna:</strong> Resultados confiables</li>
            <li><strong>Simplicidad analítica:</strong> Comparación directa</li>
            <li><strong>Credibilidad:</strong> Aceptación amplia</li>
          </ul>
          
          <h3>Limitaciones de los RCT</h3>
          <ul>
            <li><strong>Consideraciones éticas:</strong> Negar tratamiento</li>
            <li><strong>Factibilidad:</strong> Costo y complejidad</li>
            <li><strong>Validez externa:</strong> Generalización limitada</li>
            <li><strong>Contaminación:</strong> Efectos spillover</li>
          </ul>
          
          <h3>Diseños Cuasi-experimentales</h3>
          <p>Cuando los RCT no son posibles, los diseños cuasi-experimentales ofrecen alternativas:</p>
          <ul>
            <li><strong>Diferencias en diferencias:</strong> Comparación temporal</li>
            <li><strong>Regresión discontinua:</strong> Umbrales de elegibilidad</li>
            <li><strong>Variables instrumentales:</strong> Variación exógena</li>
            <li><strong>Matching:</strong> Emparejamiento estadístico</li>
          </ul>
        `,
        exercises: [
          {
            id: 'rct-quiz',
            title: 'Quiz: Diseños Experimentales',
            type: 'quiz',
            content: '¿Cuál es la principal ventaja de los experimentos aleatorios controlados?',
            options: [
              'Son más baratos',
              'Eliminan sesgos de selección',
              'Son más rápidos',
              'Requieren menos participantes'
            ],
            correctAnswer: 1
          }
        ]
      }
    ]
  },
  {
    id: 'systems-approaches',
    title: 'Enfoques de Sistemas',
    description: 'Analiza intervenciones complejas dentro de sistemas dinámicos e interconectados',
    icon: 'Network',
    estimatedTime: '3-4 horas',
    difficulty: 'Avanzado',
    sections: [
      {
        id: 'systems-thinking',
        title: 'Pensamiento Sistémico',
        content: `
          <h3>¿Qué es el Pensamiento Sistémico?</h3>
          <p>El pensamiento sistémico ve las intervenciones como parte de sistemas más amplios, reconociendo relaciones complejas, retroalimentación y propiedades emergentes.</p>
          
          <h3>Características de los Sistemas</h3>
          <ul>
            <li><strong>Interconexión:</strong> Elementos relacionados entre sí</li>
            <li><strong>Propósito:</strong> Función o razón de ser del sistema</li>
            <li><strong>Emergencia:</strong> Propiedades que surgen de las interacciones</li>
            <li><strong>Jerarquía:</strong> Sistemas dentro de sistemas</li>
            <li><strong>Retroalimentación:</strong> Bucles de causa y efecto</li>
          </ul>
          
          <h3>Diferencias con Enfoques Lineales</h3>
          <table class="w-full border-collapse border border-gray-300 mt-4">
            <thead>
              <tr class="bg-gray-100">
                <th class="border border-gray-300 p-2">Enfoque Lineal</th>
                <th class="border border-gray-300 p-2">Enfoque Sistémico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 p-2">Causa-efecto simple</td>
                <td class="border border-gray-300 p-2">Múltiples causas e interacciones</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Resultados predecibles</td>
                <td class="border border-gray-300 p-2">Resultados emergentes</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Análisis de partes</td>
                <td class="border border-gray-300 p-2">Análisis de relaciones</td>
              </tr>
            </tbody>
          </table>
          
          <h3>Aplicación en Evaluación</h3>
          <ul>
            <li><strong>Mapeo de sistemas:</strong> Visualizar actores y relaciones</li>
            <li><strong>Análisis de bucles:</strong> Identificar retroalimentación</li>
            <li><strong>Puntos de apalancamiento:</strong> Intervenciones estratégicas</li>
            <li><strong>Adaptación:</strong> Flexibilidad ante cambios</li>
          </ul>
        `,
        resources: [
          {
            id: 'systems-evaluation',
            title: 'Systems Evaluation Guide - FSG',
            type: 'pdf',
            url: 'https://www.fsg.org/resource/evaluating-systems-change/',
            description: 'Guía para evaluar cambios sistémicos'
          }
        ]
      },
      {
        id: 'complexity-evaluation',
        title: 'Evaluación de Complejidad',
        content: `
          <h3>Características de Intervenciones Complejas</h3>
          <ul>
            <li><strong>Múltiples componentes:</strong> Varios elementos interactúan</li>
            <li><strong>Múltiples niveles:</strong> Individual, organizacional, sistémico</li>
            <li><strong>Múltiples resultados:</strong> Diversos efectos simultáneos</li>
            <li><strong>Adaptabilidad:</strong> Cambios durante implementación</li>
            <li><strong>Sensibilidad al contexto:</strong> Resultados varían por lugar</li>
          </ul>
          
          <h3>Métodos para Evaluar Complejidad</h3>
          <ul>
            <li><strong>Evaluación realista:</strong> ¿Qué funciona, para quién, en qué contexto?</li>
            <li><strong>Evaluación evolutiva:</strong> Adaptación continua</li>
            <li><strong>Análisis de contribución:</strong> Cadenas causales</li>
            <li><strong>Rastreo de procesos:</strong> Mecanismos causales</li>
            <li><strong>Métodos mixtos:</strong> Múltiples fuentes de evidencia</li>
          </ul>
          
          <h3>Desafíos en Evaluación de Sistemas</h3>
          <ul>
            <li>Definir límites del sistema</li>
            <li>Capturar cambios emergentes</li>
            <li>Atribuir resultados a intervenciones</li>
            <li>Manejar múltiples perspectivas</li>
            <li>Equilibrar rigor y utilidad</li>
          </ul>
        `,
        exercises: [
          {
            id: 'systems-reflection',
            title: 'Reflexión: Mapeo de Sistemas',
            type: 'reflection',
            content: 'Piensa en un problema social complejo. ¿Cuáles son los diferentes actores, niveles y bucles de retroalimentación involucrados? ¿Cómo evaluarías una intervención en este sistema?'
          }
        ]
      }
    ]
  },
  {
    id: 'foresight-approaches',
    title: 'Enfoques de Prospectiva',
    description: 'Integra pensamiento futuro y herramientas de prospectiva en la evaluación',
         icon: 'Eye',
    estimatedTime: '2-3 horas',
    difficulty: 'Avanzado',
    sections: [
      {
        id: 'foresight-evaluation',
        title: 'Prospectiva en Evaluación',
        content: `
          <h3>¿Qué es la Prospectiva en Evaluación?</h3>
          <p>La prospectiva en evaluación integra el pensamiento futuro para anticipar impactos potenciales y sostenibilidad de intervenciones. Es especialmente útil en evaluación formativa.</p>
          
          <h3>Propósitos de la Prospectiva</h3>
          <ul>
            <li><strong>Anticipación:</strong> Predecir cambios futuros</li>
            <li><strong>Preparación:</strong> Desarrollar capacidades adaptativas</li>
            <li><strong>Prevención:</strong> Evitar consecuencias negativas</li>
            <li><strong>Promoción:</strong> Maximizar impactos positivos</li>
          </ul>
          
          <h3>Herramientas de Prospectiva</h3>
          <ul>
            <li><strong>Análisis de escenarios:</strong> Futuros posibles</li>
            <li><strong>Análisis de tendencias:</strong> Patrones emergentes</li>
            <li><strong>Análisis de señales débiles:</strong> Cambios tempranos</li>
            <li><strong>Mapeo de futuros:</strong> Visualización de posibilidades</li>
            <li><strong>Backcasting:</strong> Trabajar desde el futuro deseado</li>
          </ul>
          
          <h3>Integración con Evaluación</h3>
          <ul>
            <li><strong>Diseño de intervenciones:</strong> Considerar futuros posibles</li>
            <li><strong>Monitoreo adaptativo:</strong> Ajustar según cambios</li>
            <li><strong>Evaluación de sostenibilidad:</strong> Viabilidad a largo plazo</li>
            <li><strong>Gestión de riesgos:</strong> Prepararse para incertidumbres</li>
          </ul>
        `,
        resources: [
          {
            id: 'foresight-guide',
            title: 'Foresight for Development - UNDP',
            type: 'pdf',
            url: 'https://www.undp.org/publications/foresight-manual-empowering-governments',
            description: 'Manual de prospectiva para gobiernos'
          },
          {
            id: 'futures-thinking',
            title: 'Futures Thinking in Evaluation - OECD',
            type: 'link',
            url: 'https://www.oecd.org/dac/evaluation/futures-thinking-in-evaluation.htm',
            description: 'Pensamiento futuro en evaluación'
          }
        ]
      },
      {
        id: 'scenario-planning',
        title: 'Planificación de Escenarios',
        content: `
          <h3>¿Qué es la Planificación de Escenarios?</h3>
          <p>La planificación de escenarios es una herramienta que explora múltiples futuros posibles para ayudar a la toma de decisiones bajo incertidumbre.</p>
          
          <h3>Tipos de Escenarios</h3>
          <ul>
            <li><strong>Escenario base:</strong> Continuación de tendencias actuales</li>
            <li><strong>Escenario optimista:</strong> Desarrollo favorable</li>
            <li><strong>Escenario pesimista:</strong> Desarrollo desfavorable</li>
            <li><strong>Escenario disruptivo:</strong> Cambios radicales</li>
          </ul>
          
          <h3>Proceso de Desarrollo</h3>
          <ol>
            <li><strong>Definir pregunta focal:</strong> ¿Qué queremos explorar?</li>
            <li><strong>Identificar fuerzas clave:</strong> Factores que influyen el futuro</li>
            <li><strong>Determinar incertidumbres:</strong> Variables críticas</li>
            <li><strong>Desarrollar escenarios:</strong> Narrativas coherentes</li>
            <li><strong>Evaluar implicaciones:</strong> ¿Qué significa para nuestra intervención?</li>
          </ol>
          
          <h3>Aplicación en Evaluación</h3>
          <ul>
            <li><strong>Evaluación ex-ante:</strong> Diseño robusto de programas</li>
            <li><strong>Evaluación formativa:</strong> Adaptación durante implementación</li>
            <li><strong>Evaluación de sostenibilidad:</strong> Viabilidad futura</li>
            <li><strong>Gestión de riesgos:</strong> Preparación para contingencias</li>
          </ul>
        `,
        exercises: [
          {
            id: 'scenario-quiz',
            title: 'Quiz: Planificación de Escenarios',
            type: 'quiz',
            content: '¿Cuál es el primer paso en la planificación de escenarios?',
            options: [
              'Identificar fuerzas clave',
              'Definir la pregunta focal',
              'Desarrollar narrativas',
              'Evaluar implicaciones'
            ],
            correctAnswer: 1
          }
        ]
      }
    ]
  }
];