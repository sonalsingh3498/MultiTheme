import React from 'react';
import { useTheme } from '../context/ThemeContext';
import type { Product } from '../types/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { themeConfig } = useTheme(); // Access current theme settings from context

  // Dynamically generate styles for the card based on the theme layout
  const getCardStyles = () => {
    const baseStyles = {
      backgroundColor: themeConfig.colors.surface,
      borderColor: themeConfig.colors.border,
      color: themeConfig.colors.text,
    };

    // Adjust padding and border-radius based on the layout type
    switch (themeConfig.layout.type) {
      case 'sidebar':
        return {
          ...baseStyles,
          padding: '24px',
          borderRadius: '4px',
        };
      case 'grid':
        return {
          ...baseStyles,
          padding: '20px',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        };
      default: // default layout
        return {
          ...baseStyles,
          padding: '20px',
          borderRadius: '8px',
        };
    }
  };

  // Generate class names for the product title based on the layout type
  const getTitleStyles = () => {
    switch (themeConfig.layout.type) {
      case 'sidebar':
        return 'text-xl font-bold mb-4';
      case 'grid':
        return 'text-lg font-bold mb-3';
      default:
        return 'text-lg font-semibold mb-3';
    }
  };


  return (
    <div
      // Tailwind classes for border and hover animation
      className={`border transition-all duration-500 hover:scale-105 ${
        themeConfig.layout.spacing === 'spacious' ? 'mb-8' : 'mb-4'
      }`}
      style={getCardStyles()} // Apply dynamic styles
    >
      {/* Product Image */}
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-48 object-cover mb-4 object-top"
        style={{ borderRadius: '8px' }}
      />
      
      {/* Product Title */}
      <h3
        className={getTitleStyles()}
        style={{
          fontFamily: themeConfig.fonts.heading,
          color: themeConfig.colors.text,
        }}
      >
        {product.title.substring(0, 60)}...
      </h3>
      
      {/* Product Description */}
      <p
        className="mb-4 text-sm line-clamp-3"
        style={{
          color: themeConfig.colors.textSecondary,
          fontFamily: themeConfig.fonts.secondary,
        }}
      >
        {product.description.substring(0, 120)}...
      </p>
      
      {/* Price and Add to Cart button */}
      <div className="flex justify-between items-center">
        <span
          className="text-lg font-bold"
          style={{
            color: themeConfig.colors.primary,
            fontFamily: themeConfig.fonts.primary,
          }}
        >
          ${product.price}
        </span>
        
        <button
          className="px-4 py-2 rounded-lg transition-all duration-300 hover:opacity-90 cursor-pointer whitespace-nowrap"
          style={{
            backgroundColor: themeConfig.colors.primary,
            color: themeConfig.colors.background,
            fontFamily: themeConfig.fonts.primary,
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
