import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    support: [
      { name: 'Help Center', url: '/help' },
      { name: 'Safety Information', url: '/safety' }
    ],
    community: [
      { name: 'Diversity & Belonging', url: '/diversity' },
      { name: 'Accessibility', url: '/accessibility' }
    ],
    hosting: [
      { name: 'Host your home', url: '/host' },
      { name: 'Host an experience', url: '/experience' }
    ],
    about: [
      { name: 'Newsroom', url: '/newsroom' },
      { name: 'Learn about new features', url: '/features' }
    ]
  };

  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.keys(footerLinks).map((section) => (
            <div key={section}>
              <h3 className="text-lg font-semibold mb-4">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h3>
              <ul className="space-y-2">
                {footerLinks[section].map((link) => (
                  <li key={link.name}>
                    <Link to={link.url} className="text-gray-600 hover:text-gray-900">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600">
            © {new Date().getFullYear()} Airbnb Clone. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;