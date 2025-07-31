import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { themeConfig } = useTheme();

  // Determine layout classes based on theme layout type
  const getLayoutClasses = () => {
    switch (themeConfig.layout.type) {
      case 'sidebar':
        return 'flex flex-col lg:flex-row gap-8';
      case 'grid':
        return 'grid grid-cols-1 lg:grid-cols-3 gap-8';
      default:
        return 'block max-w-4xl mx-auto';
    }
  };

  // List of features to showcase on the About page
  const features = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Our Mission & Vision',
      description: 'Our Purpose: More Than Just Products.'
    },
    {
      icon: 'ri-exchange-line',
      title: 'Easy & Hassle-Free Returns',
      description: 'Peace of Mind with Every Purchase.'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Quality & Craftsmanship',
      description: 'Uncompromising Quality, Curated Just For You.'
    },
    {
      icon: 'ri-search-eye-line',
      title: 'Customer Satisfaction',
      description: 'Your Happiness, Our Priority.'
    },
    {
      icon: 'ri-shopping-bag-line',
      title: 'Unique Selection',
      description: 'More Than a Shop: A Community of Values.'
    },
    {
      icon: 'ri-truck-line',
      title: 'Fast & Reliable Shipping / Easy Returns',
      description: 'Shop with Confidence, Delivered to Your Door.'
    }
  ];
  // Sidebar content for 'sidebar' layout
  const getSidebarContent = () => (
    <div
      className="w-full lg:w-80 p-4 lg:p-6 rounded-lg border h-fit"
      style={{
        backgroundColor: themeConfig.colors.surface,
        borderColor: themeConfig.colors.border,
      }}
    >
      <h3
        className="text-lg lg:text-xl font-bold mb-4"
        style={{
          color: themeConfig.colors.text,
          fontFamily: themeConfig.fonts.heading,
        }}
      >
        Trending
      </h3>
      <ul className="space-y-3">
        <li>
          <span
            style={{
              color: themeConfig.colors.primary,
              fontFamily: themeConfig.fonts.primary,
            }}
          >
            Electronics
          </span>
        </li>
        <li>
          <span
            style={{
              color: themeConfig.colors.primary,
              fontFamily: themeConfig.fonts.primary,
            }}
          >
            Mackup
          </span>
        </li>
        <li>
          <span
            style={{
              color: themeConfig.colors.primary,
              fontFamily: themeConfig.fonts.primary,
            }}
          >
            Men's Clothing
          </span>
        </li>
        <li>
          <span
            style={{
              color: themeConfig.colors.primary,
              fontFamily: themeConfig.fonts.primary,
            }}
          >
            Women's Clothing
          </span>
        </li>
      </ul>
    </div>
  );

  return (
    <main
      className="min-h-screen pt-20 transition-all duration-500"
      style={{
        backgroundColor: themeConfig.colors.background,
        padding: themeConfig.layout.spacing === 'spacious' ? '2rem 1rem lg:5rem 2rem' : '2rem 1rem lg:5rem 1.5rem',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className={themeConfig.layout.type === 'sidebar' ? 'flex flex-col lg:flex-row gap-8' : 'block'}>
          {themeConfig.layout.type === 'sidebar' && getSidebarContent()}
          
          <div className={themeConfig.layout.type === 'sidebar' ? 'flex-1' : 'w-full'}>
            <div className="mb-8 lg:mb-12">
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-500"
                style={{
                  color: themeConfig.colors.text,
                  fontFamily: themeConfig.fonts.heading,
                }}
              >
                About One-Stop Shopping Destination
              </h1>
              <p
                className="text-base md:text-lg lg:text-xl mb-6"
                style={{
                  color: themeConfig.colors.textSecondary,
                  fontFamily: themeConfig.fonts.secondary,
                }}
              >
                Every great journey begins with a spark. One-Stop Shopping Destination was founded in 2023 by our passionate 
                team with a simple yet powerful vision: to bring curated, high-quality products to discerning customers. 
                From humble beginnings, we've grown, always keeping our customers at the heart of everything we do. 
                We believe in the joy of discovery and the importance of ethical sourcing.
              </p>
            </div>

            <div className={getLayoutClasses()}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 lg:p-6 rounded-lg border transition-all duration-500 ${
                    themeConfig.layout.type === 'grid' ? '' : 'mb-6'
                  }`}
                  style={{
                    backgroundColor: themeConfig.colors.surface,
                    borderColor: themeConfig.colors.border,
                  }}
                >
                  <i
                    className={`${feature.icon} w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center mb-4 text-xl lg:text-2xl`}
                    style={{ color: themeConfig.colors.primary }}
                  ></i>
                  <h3
                    className="text-lg lg:text-xl font-bold mb-3"
                    style={{
                      color: themeConfig.colors.text,
                      fontFamily: themeConfig.fonts.heading,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm lg:text-base"
                    style={{
                      color: themeConfig.colors.textSecondary,
                      fontFamily: themeConfig.fonts.secondary,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-8 lg:mt-12 p-6 lg:p-8 rounded-lg border"
              style={{
                backgroundColor: themeConfig.colors.surface,
                borderColor: themeConfig.colors.border,
              }}
            >
              <h2
                className="text-xl lg:text-2xl font-bold mb-4"
                style={{
                  color: themeConfig.colors.text,
                  fontFamily: themeConfig.fonts.heading,
                }}
              >
                Our Story & Our Promise

              </h2>
              <p
                className="mb-4 text-sm lg:text-base"
                style={{
                  color: themeConfig.colors.textSecondary,
                  fontFamily: themeConfig.fonts.secondary,
                }}
              >
               Our dedication goes beyond just offering products. We envision One-Stop Shopping Destination as a trusted partner in your everyday life, providing not just items, but solutions and inspirations. We're constantly exploring new trends, sourcing unique finds, and refining our selection to ensure there's always something exciting for you to discover. We believe that shopping should be a delightful and effortless experience, and we're committed to making that a reality for every customer who visits our virtual doors.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;