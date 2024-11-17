import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    support: [
      { name: 'Help Center', url: '/help' },
      { name: 'Safety Information', url: '/safety' },
      { name: 'Cancellation Options', url: '/cancellation' },
      { name: 'COVID-19 Response', url: '/covid' }
    ],
    community: [
      { name: 'Community Forum', url: '/forum' },
      { name: 'Support Hosts', url: '/host-support' },
      { name: 'Careers', url: '/careers' },
      { name: 'Investors', url: '/investors' }
    ],
    hosting: [
      { name: 'Try Hosting', url: '/host' },
      { name: 'Host Resources', url: '/resources' },
      { name: 'Community Center', url: '/community' },
      { name: 'Responsible Hosting', url: '/responsible-hosting' }
    ],
    about: [
      { name: 'About Us', url: '/about' },
      { name: 'Newsroom', url: '/news' },
      { name: 'Privacy Policy', url: '/privacy' },
      { name: 'Terms of Service', url: '/terms' }
    ]
  };

  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.url} 
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.url} 
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hosting Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hosting</h3>
            <ul className="space-y-2">
              {footerLinks.hosting.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.url} 
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.url} 
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600">
              © {new Date().getFullYear()} Airbnb Clone. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;