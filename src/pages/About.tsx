import React from 'react';
import { Globe, Users, Target, BookOpen, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-undp-blue to-undp-lightblue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Acerca del Centro de Aprendizaje MEL
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Centro especializado en Monitoreo, Evaluación y Aprendizaje con recursos curados de organizaciones líderes
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About the App */}
        <section className="mb-16">
          <h2 className="section-title">Sobre el Centro de Aprendizaje</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Este centro de aprendizaje fue desarrollado por un especialista en Monitoreo, Evaluación y Aprendizaje (MEL) para facilitar el dominio de los enfoques modernos de evaluación.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Basado en recursos curados de organizaciones líderes como J-PAL, PNUD, World Bank, UNICEF, OECD y otras instituciones reconocidas, ofrece una experiencia de aprendizaje integral sobre los 5 enfoques principales de evaluación.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-undp-blue mb-2">5</div>
                  <div className="text-gray-600">Enfoques de Evaluación</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-undp-blue mb-2">15+</div>
                  <div className="text-gray-600">Recursos Curados</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-undp-darkblue mb-4">Características Principales</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <BookOpen className="h-5 w-5 text-undp-blue mt-0.5" />
                  <span className="text-gray-700">Contenido curado de J-PAL, PNUD, World Bank y organizaciones líderes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-undp-blue mt-0.5" />
                  <span className="text-gray-700">Ejercicios prácticos y casos de estudio</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-undp-blue mt-0.5" />
                  <span className="text-gray-700">Desarrollado por especialista MEL certificado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Globe className="h-5 w-5 text-undp-blue mt-0.5" />
                  <span className="text-gray-700">5 enfoques modernos con mini-quizzes y ejercicios</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* About UNDP */}
        <section className="mb-16">
          <h2 className="section-title">Sobre el PNUD</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-700 mb-4">
                  El Programa de las Naciones Unidas para el Desarrollo (PNUD) es la red global de desarrollo de las Naciones Unidas, que aboga por el cambio y conecta a los países con el conocimiento, la experiencia y los recursos para ayudar a las personas a forjar una vida mejor.
                </p>
                <p className="text-gray-700 mb-4">
                  Estamos sobre el terreno en más de 170 países y territorios, trabajando con gobiernos y personas para ayudarles a encontrar sus propias soluciones a los desafíos mundiales y nacionales del desarrollo.
                </p>
                <p className="text-gray-700">
                  A medida que los países refuerzan las capacidades, se basan en el personal del PNUD y en nuestra amplia gama de socios para obtener resultados.
                </p>
              </div>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-undp-blue mb-2">170+</div>
                  <div className="text-gray-600">Países y territorios</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-undp-blue mb-2">1990</div>
                  <div className="text-gray-600">Fundación</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-undp-blue mb-2">17</div>
                  <div className="text-gray-600">Objetivos de Desarrollo Sostenible</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UNDP Evaluation Office */}
        <section className="mb-16">
          <h2 className="section-title">Oficina de Evaluación Independiente</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-undp-blue mb-4">Misión</h3>
              <p className="text-gray-700 mb-4">
                La Oficina de Evaluación Independiente (IEO) proporciona evaluaciones independientes y creíbles que permiten al PNUD demostrar resultados, aprender de la experiencia y mejorar el desempeño.
              </p>
              <p className="text-gray-700">
                La IEO es independiente de la gestión del PNUD y reporta directamente al Consejo Ejecutivo del PNUD.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-undp-blue mb-4">Funciones Principales</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Evaluaciones independientes de programas país</li>
                <li>• Evaluaciones temáticas globales</li>
                <li>• Desarrollo de metodologías de evaluación</li>
                <li>• Fortalecimiento de capacidades de evaluación</li>
                <li>• Síntesis de hallazgos evaluativos</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Methods Center */}
        <section className="mb-16">
          <h2 className="section-title">Centro de Métodos del PNUD</h2>
          <div className="bg-green-50 rounded-lg p-8 border border-green-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-undp-blue mb-4">¿Qué es el Centro de Métodos?</h3>
                <p className="text-gray-700 mb-4">
                  El Centro de Métodos del PNUD es un repositorio de metodologías, herramientas y mejores prácticas para la evaluación, el monitoreo y la planificación basada en resultados.
                </p>
                <p className="text-gray-700">
                  Proporciona recursos actualizados y orientación técnica para profesionales del desarrollo en todo el mundo.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-undp-blue mb-4">Recursos Disponibles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Guías de evaluación actualizadas</li>
                  <li>• Herramientas de diagnóstico</li>
                  <li>• Manuales de planificación y monitoreo</li>
                  <li>• Estándares y normas de evaluación</li>
                  <li>• Casos de estudio y mejores prácticas</li>
                  <li>• Capacitación y webinars</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Links and Resources */}
        <section className="mb-16">
          <h2 className="section-title">Enlaces Útiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://www.undp.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-3">
                <Globe className="h-6 w-6 text-undp-blue" />
                <h3 className="font-semibold text-undp-darkblue">UNDP.org</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Sitio web oficial del Programa de las Naciones Unidas para el Desarrollo
              </p>
              <div className="flex items-center text-undp-blue text-sm">
                <span>Visitar sitio</span>
                <ExternalLink className="h-4 w-4 ml-1" />
              </div>
            </a>

            <a
              href="http://web.undp.org/evaluation/"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-3">
                <Target className="h-6 w-6 text-undp-blue" />
                <h3 className="font-semibold text-undp-darkblue">Oficina de Evaluación</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Sitio web de la Oficina de Evaluación Independiente del PNUD
              </p>
              <div className="flex items-center text-undp-blue text-sm">
                <span>Visitar sitio</span>
                <ExternalLink className="h-4 w-4 ml-1" />
              </div>
            </a>

            <a
              href="http://web.undp.org/evaluation/guideline/index.shtml"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-3">
                <BookOpen className="h-6 w-6 text-undp-blue" />
                <h3 className="font-semibold text-undp-darkblue">Guías de Evaluación</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Guías oficiales de evaluación del PNUD actualizadas
              </p>
              <div className="flex items-center text-undp-blue text-sm">
                <span>Visitar sitio</span>
                <ExternalLink className="h-4 w-4 ml-1" />
              </div>
            </a>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Aviso Legal</h3>
          <p className="text-gray-600 text-sm">
            Esta aplicación educativa es una herramienta de aprendizaje independiente basada en recursos públicos del PNUD. 
            No es un producto oficial del PNUD y se proporciona únicamente con fines educativos. 
            Para información oficial y actualizada, consulte siempre los recursos oficiales del PNUD.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;