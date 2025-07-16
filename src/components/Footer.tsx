import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: 'Recursos Oficiales',
      items: [
        { name: 'UNDP Evaluation Guidelines', url: 'http://web.undp.org/evaluation/guideline/index.shtml' },
        { name: 'Independent Evaluation Office', url: 'http://web.undp.org/evaluation/' },
        { name: 'Methods and Guidance', url: 'http://web.undp.org/evaluation/guidance.shtml' },
        { name: 'Evaluation Resource Centre', url: 'http://web.undp.org/evaluation/erc.shtml' },
      ]
    },
    {
      title: 'Herramientas',
      items: [
        { name: 'KoBo Toolbox', url: 'https://www.kobotoolbox.org/' },
        { name: 'UNEG Standards', url: 'http://www.uneval.org/standards' },
        { name: 'Evaluation Handbook', url: 'http://web.undp.org/evaluation/handbook/index.html' },
        { name: 'COVID-19 Guidance', url: 'http://web.undp.org/evaluation/guideline/covid19.shtml' },
      ]
    },
    {
      title: 'Contacto',
      items: [
        { name: 'UNDP.org', url: 'https://www.undp.org/' },
        { name: 'Evaluation Office', url: 'mailto:ieo@undp.org' },
        { name: 'Feedback', url: 'mailto:feedback@undp.org' },
      ]
    }
  ];

  return (
    <footer className="bg-undp-darkblue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-undp-yellow" />
              <span className="text-xl font-bold">PNUD</span>
            </div>
            <p className="text-gray-300 text-sm">
              Aplicación educativa sobre el Centro de Métodos del Programa de las Naciones Unidas para el Desarrollo.
            </p>
          </div>

          {/* Links */}
          {links.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-undp-yellow">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white text-sm flex items-center space-x-1 transition-colors"
                    >
                      <span>{item.name}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Programa de las Naciones Unidas para el Desarrollo. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white text-sm">
              Términos de Uso
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm">
              Privacidad
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-sm">
              Accesibilidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;