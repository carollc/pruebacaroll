import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, CheckCircle, ExternalLink, Play, FileText } from 'lucide-react';
import { modules } from '../data/modules';

const ModuleDetail: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set());
  const [showQuizAnswer, setShowQuizAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const module = modules.find(m => m.id === moduleId);

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Módulo no encontrado</h1>
          <Link to="/" className="btn-primary">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const handleSectionComplete = (sectionIndex: number) => {
    setCompletedSections(prev => new Set(prev).add(sectionIndex));
  };

  const handleQuizSubmit = () => {
    setShowQuizAnswer(true);
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

  const currentSectionData = module.sections[currentSection];
  const progress = (completedSections.size / module.sections.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-500 hover:text-gray-700">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-undp-darkblue">{module.title}</h1>
                <p className="text-gray-600">{module.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(module.difficulty)}`}>
                {module.difficulty}
              </span>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>{module.estimatedTime}</span>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progreso del módulo</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-undp-blue h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="font-semibold text-undp-darkblue mb-4">Contenido del Módulo</h3>
              <nav className="space-y-2">
                {module.sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSection(index)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      currentSection === index
                        ? 'bg-undp-blue text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{section.title}</span>
                                                   {completedSections.has(index) && (
                               <CheckCircle className="h-4 w-4 text-green-600" />
                             )}
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-undp-darkblue mb-4">
                  {currentSectionData.title}
                </h2>
              </div>

              {/* Section Content */}
              <div 
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: currentSectionData.content }}
              />

              {/* Resources */}
              {currentSectionData.resources && currentSectionData.resources.length > 0 && (
                <div className="mb-8">
                  <h3 className="subsection-title">Recursos Adicionales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentSectionData.resources.map((resource) => (
                      <a
                        key={resource.id}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start space-x-3">
                                                     <div className="flex-shrink-0">
                             {resource.type === 'pdf' && <FileText className="h-5 w-5 text-green-600" />}
                             {resource.type === 'video' && <Play className="h-5 w-5 text-green-500" />}
                             {resource.type === 'link' && <ExternalLink className="h-5 w-5 text-green-700" />}
                             {resource.type === 'document' && <BookOpen className="h-5 w-5 text-green-400" />}
                           </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-undp-darkblue">{resource.title}</h4>
                            {resource.description && (
                              <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                            )}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Exercises */}
              {currentSectionData.exercises && currentSectionData.exercises.length > 0 && (
                <div className="mb-8">
                  <h3 className="subsection-title">Ejercicios</h3>
                  {currentSectionData.exercises.map((exercise) => (
                    <div key={exercise.id} className="bg-gray-50 rounded-lg p-6 mb-4">
                      <h4 className="font-semibold text-undp-blue mb-3">{exercise.title}</h4>
                      <p className="text-gray-700 mb-4">{exercise.content}</p>
                      
                      {exercise.type === 'quiz' && exercise.options && (
                        <div className="space-y-2">
                          {exercise.options.map((option, index) => (
                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name={`quiz-${exercise.id}`}
                                value={index}
                                onChange={() => setSelectedAnswer(index)}
                                className="text-undp-blue"
                              />
                              <span className="text-gray-700">{option}</span>
                            </label>
                          ))}
                                                     <button
                             onClick={() => handleQuizSubmit()}
                             className="btn-primary mt-4"
                             disabled={selectedAnswer === null}
                           >
                             Verificar Respuesta
                           </button>
                          
                          {showQuizAnswer && (
                            <div className={`mt-4 p-3 rounded-lg ${
                              selectedAnswer === exercise.correctAnswer
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {selectedAnswer === exercise.correctAnswer
                                ? '¡Correcto! Excelente trabajo.'
                                : `Incorrecto. La respuesta correcta es: ${exercise.options?.[exercise.correctAnswer || 0]}`
                              }
                            </div>
                          )}
                        </div>
                      )}
                      
                      {exercise.type === 'reflection' && (
                        <div className="space-y-4">
                          <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-undp-blue focus:border-transparent"
                            rows={4}
                            placeholder="Escribe tu reflexión aquí..."
                          />
                          <button className="btn-primary">
                            Guardar Reflexión
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center pt-8 border-t">
                <button
                  onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                  disabled={currentSection === 0}
                  className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Anterior
                </button>
                
                <button
                  onClick={() => handleSectionComplete(currentSection)}
                  className="btn-primary"
                >
                  Marcar como Completado
                </button>
                
                <button
                  onClick={() => setCurrentSection(Math.min(module.sections.length - 1, currentSection + 1))}
                  disabled={currentSection === module.sections.length - 1}
                  className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDetail;