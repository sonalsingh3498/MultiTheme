import React from 'react';
import { useTheme } from '../context/ThemeContext';

const LoadingSpinner: React.FC = () => {
  const { themeConfig } = useTheme();

  return (
    <div className="flex justify-center items-center py-12">
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2"
        style={{ borderColor: themeConfig.colors.primary }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
