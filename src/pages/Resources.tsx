import React, { useState } from 'react';
import { ExternalLink, Search, Filter, FileText, Video, Link as LinkIcon } from 'lucide-react';

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      id: 'jpal-evaluation-guide',
      title: 'J-PAL Evaluation Guide',
      description: 'Guía completa de J-PAL sobre evaluación de impacto y experimentos aleatorios controlados.',
      category: 'guidelines',
      type: 'link',
      url: 'https://www.povertyactionlab.org/resource/evaluating-social-programs',
      languages: ['Inglés', 'Español', 'Francés'],
      updated: '2024'
    },
    {
      id: 'eval-guidelines',
      title: 'Guías de Evaluación del PNUD',
      description: 'Guías completas actualizadas para la evaluación en el PNUD, incluyendo planificación, implementación y uso de evaluaciones.',
      category: 'guidelines',
      type: 'pdf',
      url: 'http://web.undp.org/evaluation/guideline/index.shtml',
      languages: ['Español', 'Inglés', 'Francés', 'Árabe', 'Chino', 'Ruso'],
      updated: '2021'
    },
    {
      id: 'evaluation-handbook',
      title: 'Manual de Planificación, Monitoreo y Evaluación',
      description: 'Manual completo sobre planificación, monitoreo y evaluación para resultados de desarrollo.',
      category: 'handbook',
      type: 'document',
      url: 'http://web.undp.org/evaluation/handbook/index.html',
      languages: ['Inglés'],
      updated: '2009'
    },
    {
      id: 'covid-guidance',
      title: 'Guía de Evaluación durante COVID-19',
      description: 'Orientación específica para implementar evaluaciones durante la pandemia de COVID-19.',
      category: 'guidelines',
      type: 'pdf',
      url: 'http://web.undp.org/evaluation/guideline/covid19.shtml',
      languages: ['Español', 'Inglés', 'Francés', 'Árabe'],
      updated: '2021'
    },
    {
      id: 'diagnostic-tool',
      title: 'Herramienta de Diagnóstico Nacional',
      description: 'Herramienta para evaluar planes nacionales de desarrollo y progreso en los ODS.',
      category: 'tools',
      type: 'link',
      url: 'http://web.undp.org/evaluation/guidance.shtml',
      languages: ['Inglés'],
      updated: '2021'
    },
    {
      id: 'kobo-toolbox',
      title: 'KoBo Toolbox',
      description: 'Herramienta gratuita y de código abierto para recolección de datos en contextos desafiantes.',
      category: 'tools',
      type: 'link',
      url: 'https://www.kobotoolbox.org/',
      languages: ['Inglés', 'Francés', 'Español', 'Árabe'],
      updated: '2024'
    },
    {
      id: 'uneg-standards',
      title: 'Estándares UNEG para Evaluación',
      description: 'Normas y estándares del Grupo de Evaluación de las Naciones Unidas.',
      category: 'standards',
      type: 'pdf',
      url: 'http://www.uneval.org/standards',
      languages: ['Inglés', 'Francés', 'Español'],
      updated: '2016'
    },
    {
      id: 'gef-guidance',
      title: 'Guía de Evaluación GEF',
      description: 'Guía para evaluaciones terminales e intermedias de proyectos financiados por GEF.',
      category: 'guidelines',
      type: 'pdf',
      url: 'http://web.undp.org/evaluation/guidance.shtml',
      languages: ['Inglés', 'Francés', 'Español'],
      updated: '2021'
    },
    {
      id: 'rating-system',
      title: 'Sistema de Calificación de Programas País',
      description: 'Sistema para calificar el desempeño de programas país en evaluaciones independientes.',
      category: 'tools',
      type: 'pdf',
      url: 'http://web.undp.org/evaluation/guidance.shtml',
      languages: ['Inglés'],
      updated: '2022'
    },
    {
      id: 'evaluation-synthesis',
      title: 'Síntesis de Evaluaciones',
      description: 'Reportes de síntesis que consolidan hallazgos de múltiples evaluaciones.',
      category: 'reports',
      type: 'pdf',
      url: 'http://web.undp.org/evaluation/evaluations/synthesis.shtml',
      languages: ['Inglés'],
      updated: '2024'
    },
    {
      id: 'evaluation-webinars',
      title: 'Serie de Webinars sobre Evaluación',
      description: 'Serie de webinars sobre diferentes aspectos de la evaluación en el PNUD.',
      category: 'training',
      type: 'video',
      url: 'http://web.undp.org/evaluation/guideline/index.shtml',
      languages: ['Inglés'],
      updated: '2021'
    },
    {
      id: 'world-bank-impact',
      title: 'World Bank Impact Evaluation Toolkit',
      description: 'Herramientas prácticas del Banco Mundial para evaluación de impacto.',
      category: 'tools',
      type: 'pdf',
      url: 'https://www.worldbank.org/en/programs/sief-trust-fund/publication/impact-evaluation-in-practice',
      languages: ['Inglés', 'Español', 'Francés'],
      updated: '2023'
    },
    {
      id: 'unicef-participatory',
      title: 'UNICEF Participatory Evaluation Guide',
      description: 'Guía completa de UNICEF sobre evaluación participativa.',
      category: 'guidelines',
      type: 'pdf',
      url: 'https://www.unicef.org/evaluation/media/1076/file/GEROS-Participatory-Evaluation-2021.pdf',
      languages: ['Inglés'],
      updated: '2021'
    },
    {
      id: 'oecd-evaluation',
      title: 'OECD Evaluation Criteria',
      description: 'Criterios de evaluación actualizados de la OCDE-CAD.',
      category: 'standards',
      type: 'link',
      url: 'https://www.oecd.org/dac/evaluation/revised-evaluation-criteria-dec-2019.pdf',
      languages: ['Inglés', 'Francés', 'Español'],
      updated: '2019'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos los recursos' },
    { id: 'guidelines', name: 'Guías y Políticas' },
    { id: 'handbook', name: 'Manuales' },
    { id: 'tools', name: 'Herramientas' },
    { id: 'standards', name: 'Estándares' },
    { id: 'reports', name: 'Reportes' },
    { id: 'training', name: 'Capacitación' }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-5 w-5 text-red-500" />;
      case 'video':
        return <Video className="h-5 w-5 text-blue-500" />;
      case 'link':
        return <LinkIcon className="h-5 w-5 text-green-500" />;
      case 'document':
        return <FileText className="h-5 w-5 text-purple-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'PDF';
      case 'video':
        return 'Video';
      case 'link':
        return 'Enlace';
      case 'document':
        return 'Documento';
      default:
        return 'Recurso';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
              <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-undp-darkblue mb-4">
                Recursos MEL
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recursos curados de J-PAL, PNUD, World Bank, UNICEF y organizaciones líderes en evaluación
              </p>
            </div>
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar recursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-undp-blue focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-undp-blue focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(resource => (
            <div key={resource.id} className="card p-6 h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(resource.type)}
                  <span className="text-sm font-medium text-gray-600">
                    {getTypeLabel(resource.type)}
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  Actualizado: {resource.updated}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-undp-darkblue mb-2">
                {resource.title}
              </h3>

              <p className="text-gray-600 mb-4 flex-1">
                {resource.description}
              </p>

              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">Idiomas disponibles:</div>
                <div className="flex flex-wrap gap-1">
                  {resource.languages.map(lang => (
                    <span
                      key={lang}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2 mt-auto"
              >
                <span>Acceder</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              No se encontraron recursos que coincidan con tu búsqueda.
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="btn-primary mt-4"
            >
              Limpiar filtros
            </button>
          </div>
        )}

        {/* Additional Information */}
        <div className="mt-12 bg-undp-blue/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-undp-darkblue mb-4">
            Información Adicional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-undp-blue mb-2">
                Centro de Recursos de Evaluación (ERC)
              </h3>
              <p className="text-gray-600 mb-4">
                Plataforma en línea que facilita la planificación estratégica y el uso efectivo de evaluaciones para rendición de cuentas, gestión por resultados y gestión del conocimiento.
              </p>
              <a
                href="http://web.undp.org/evaluation/erc.shtml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-undp-blue hover:text-undp-darkblue font-medium inline-flex items-center space-x-1"
              >
                <span>Acceder al ERC</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-undp-blue mb-2">
                Oficina de Evaluación Independiente
              </h3>
              <p className="text-gray-600 mb-4">
                La IEO proporciona evaluaciones independientes y creíbles que permiten al PNUD demostrar resultados, aprender de la experiencia y mejorar el desempeño.
              </p>
              <a
                href="http://web.undp.org/evaluation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-undp-blue hover:text-undp-darkblue font-medium inline-flex items-center space-x-1"
              >
                <span>Conocer más sobre IEO</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;