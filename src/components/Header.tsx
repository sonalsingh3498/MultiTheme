import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import ThemeDropdown from './ThemeDropdown';


const Header: React.FC = () => {
  const { themeConfig } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500"
      style={{
        backgroundColor: themeConfig.colors.surface,
        borderColor: themeConfig.colors.border,
      }}
    >
      
      <div className="px-4 lg:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="cursor-pointer">
            <h1
              className="text-xl lg:text-2xl font-bold transition-colors duration-300"
              style={{
                color: themeConfig.colors.primary,
                fontFamily: themeConfig.fonts.heading,
              }}
            >
              One-Stop Shopping Destination
            </h1>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="/"
              className="transition-colors duration-300 cursor-pointer"
              style={{
                color: themeConfig.colors.text,
                fontFamily: themeConfig.fonts.primary,
              }}
            >
              Home
            </a>
            <a
              href="/about"
              className="transition-colors duration-300 cursor-pointer"
              style={{
                color: themeConfig.colors.text,
                fontFamily: themeConfig.fonts.primary,
              }}
            >
              About
            </a>
            <a
              href="/contact"
              className="transition-colors duration-300 cursor-pointer"
              style={{
                color: themeConfig.colors.text,
                fontFamily: themeConfig.fonts.primary,
              }}
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeDropdown />
            
            <button
              className="md:hidden p-2 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i
                className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line w-6 h-6 flex items-center justify-center`}
                style={{ color: themeConfig.colors.text }}
              ></i>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav
            className="md:hidden mt-4 pt-4 border-t"
            style={{ borderColor: themeConfig.colors.border }}
          >
            <div className="flex flex-col space-y-2">
              <a
                href="/"
                className="py-2 transition-colors duration-300 cursor-pointer"
                style={{
                  color: themeConfig.colors.text,
                  fontFamily: themeConfig.fonts.primary,
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="py-2 transition-colors duration-300 cursor-pointer"
                style={{
                  color: themeConfig.colors.text,
                  fontFamily: themeConfig.fonts.primary,
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="py-2 transition-colors duration-300 cursor-pointer"
                style={{
                  color: themeConfig.colors.text,
                  fontFamily: themeConfig.fonts.primary,
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;