import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Settings, Target, FileText, Clock, ArrowRight, Users, Network, Eye } from 'lucide-react';
import { modules } from '../data/modules';

const Home: React.FC = () => {
  const getIcon = (iconName: string) => {
    const icons = {
      BookOpen,
      Settings,
      Target,
      FileText,
      Users,
      Network,
      Eye,
    };
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent className="h-8 w-8" /> : <BookOpen className="h-8 w-8" />;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Básico':
        return 'bg-green-100 text-green-800';
      case 'Intermedio':
        return 'bg-yellow-100 text-yellow-800';
      case 'Avanzado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-undp-blue to-undp-lightblue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Centro de Aprendizaje MEL
            </h1>
                          <p className="text-xl md:text-2xl mb-8 text-green-100">
              Especialista en Monitoreo, Evaluación y Aprendizaje - Recursos de J-PAL, PNUD, y organizaciones líderes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/module/theory-based-approaches"
                className="bg-white text-undp-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Comenzar Aprendizaje
              </Link>
              <Link
                to="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-undp-blue transition-colors"
              >
                Explorar Recursos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">¿Por qué usar este Centro de Aprendizaje?</h2>
            <p className="text-gray-600 text-lg">
              Desarrollado por un especialista en MEL con recursos de J-PAL, PNUD, World Bank y organizaciones líderes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-undp-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-undp-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contenido Especializado</h3>
              <p className="text-gray-600">
                Curado por especialista MEL con recursos de J-PAL, PNUD, World Bank, UNICEF y organizaciones líderes
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-undp-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-undp-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aprendizaje Práctico</h3>
              <p className="text-gray-600">
                Ejercicios, casos de estudio y ejemplos reales para aplicar los conocimientos
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-undp-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-undp-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enfoques Innovadores</h3>
              <p className="text-gray-600">
                5 enfoques de evaluación modernos: Theory-based, Participatory, Impact, Systems y Foresight
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Enfoques de Evaluación</h2>
            <p className="text-gray-600 text-lg">
              Domina los 5 enfoques modernos de evaluación con recursos de organizaciones líderes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module) => (
              <div key={module.id} className="card p-6 h-full flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 bg-undp-blue/10 rounded-lg mb-4">
                  <div className="text-undp-blue">
                    {getIcon(module.icon)}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-undp-darkblue">
                  {module.title}
                </h3>
                
                <p className="text-gray-600 mb-4 flex-1">
                  {module.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{module.estimatedTime}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(module.difficulty)}`}>
                    {module.difficulty}
                  </span>
                </div>
                
                <Link
                  to={`/module/${module.id}`}
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <span>Explorar</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-undp-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Impacto Global MEL</h2>
            <p className="text-green-100 text-lg">
              Organizaciones líderes en evaluación y desarrollo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-green-100">Recursos Curados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-green-100">Enfoques Modernos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-green-100">Mini-Quizzes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-green-100">Organizaciones Líderes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-undp-darkblue">
            ¿Listo para comenzar?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Comienza tu viaje de aprendizaje con los fundamentos de evaluación o explora herramientas específicas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/module/theory-based-approaches"
              className="btn-primary px-8 py-3"
            >
              Enfoques Basados en Teoría
            </Link>
            <Link
              to="/module/impact-approaches"
              className="btn-secondary px-8 py-3"
            >
              Evaluación de Impacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;