import { FaInstagram, FaTelegramPlane, FaFacebookF, FaYoutube, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-3">
            <img src="imagess/loga.png" alt="Logo" className="w-12 h-12" />
            <h1 className="text-2xl font-bold">exlample.edu.uz</h1>
          </div>
          <p className="mt-4 text-sm">Copying, distributing, and using materials is allowed only with consent.</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">We are on social media</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaInstagram />
              <span>Instagram</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaTelegramPlane />
              <span>Telegram</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaFacebookF />
              <span>Facebook</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaYoutube />
              <span>YouTube</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaPhone />
              <span>Hotline: 1006</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone />
              <span>+998712306464</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaTelegramPlane />
              <span>telegram bot</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-around items-center text-sm px-4">
        <span>2025 © exlample.edu.uz</span>
        <span>© Raqamli ta'lim texnologiyalarini rivojlantirish markazi</span>
      </div>
    </footer>
  );
};

export default Footer;
