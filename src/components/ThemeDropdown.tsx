import { useState } from 'react';
import type { FC } from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeDropdown: FC = () => {
  const { currentTheme, switchTheme, themeConfig } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'theme1' as const, name: 'Theme 1' },
    { id: 'theme2' as const, name: 'Theme 2' },
    { id: 'theme3' as const, name: 'Theme 3' },
  ];

  const handleThemeSelect = (themeId: typeof currentTheme) => {
    switchTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded border flex items-center gap-2"
        style={{
          backgroundColor: themeConfig.colors.surface,
          color: themeConfig.colors.text,
          borderColor: themeConfig.colors.border,
          fontFamily: themeConfig.fonts.primary,
        }}
      >
        {themes.find((t) => t.id === currentTheme)?.name}
        <span className="ml-1">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div
          className="absolute mt-2 w-full rounded border shadow bg-white z-50"
          style={{
            backgroundColor: themeConfig.colors.surface,
            borderColor: themeConfig.colors.border,
          }}
        >
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeSelect(theme.id)}
              className="w-full text-left px-4 py-2 hover:opacity-80"
              style={{
                backgroundColor:
                  currentTheme === theme.id ? themeConfig.colors.background : 'transparent',
                color:
                  currentTheme === theme.id ? themeConfig.colors.primary : themeConfig.colors.text,
                fontFamily: themeConfig.fonts.primary,
              }}
            >
              {theme.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeDropdown;
