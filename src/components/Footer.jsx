import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '@assets/images/rsz_1rsz_logo2.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <img 
              src={logo}
              alt="3D Grafika Logo" 
              className="h-25 mb-4 mx-auto md:mx-0"
            />
            <p className="text-gray-400">
              Vaš pouzdani partner za sve vrste štampe i grafičkih usluga.
            </p>
            <p className="text-gray-400">
              <strong>MB:</strong> 54692064
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Brzi Linkovi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Početna
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Usluge
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  O Nama
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Pratite Nas</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/3dgrafikauzice?locale=sr_RS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/3dgrafika_stamparija/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              {/* <a
                href="https://www.linkedin.com/company/3dgrafika"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a> */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 3D Grafika. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
