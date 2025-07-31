import { useTheme } from '../context/ThemeContext';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';

const MainContent: React.FC = () => {
  const { themeConfig } = useTheme();
 const { products, loading, error } = useProducts();

 
    const getLayoutClasses = () => {
    switch (themeConfig.layout.type) {
      case 'sidebar':
        return 'flex flex-col lg:flex-row gap-8';
      case 'grid':
        return 'block';
      default:
        return 'block';
    }
  };

  const getContentClasses = () => {
    switch (themeConfig.layout.type) {
      case 'sidebar':
        return 'flex-1';
      case 'grid':
        return 'w-full';
      default:
        return 'w-full';
    }
  };
 const getSidebarContent = () => (
    <div
      className="w-full lg:w-80 p-4 lg:p-6 rounded-lg border"
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
        Categories
      </h3>
      <ul className="space-y-2">
        {['Electronics', 'Jewelry', 'Men\'s Clothing', 'Women\'s Clothing'].map((category) => (
          <li key={category}>
            <button
              className="w-full text-left p-2 rounded transition-colors cursor-pointer whitespace-nowrap"
              style={{
                color: themeConfig.colors.textSecondary,
                fontFamily: themeConfig.fonts.secondary,
              }}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
  const getProductGridClasses = () => {
    switch (themeConfig.layout.type) {
      case 'sidebar':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6';
      case 'grid':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    }
  };

      return (
    <main
  className="pt-35 sm:pt-30 p-2 transition-all duration-500"
      style={{
        backgroundColor: themeConfig.colors.background,
        padding: themeConfig.layout.spacing === 'spacious' ? '2rem 1rem lg:5rem 2rem' : '2rem 1rem lg:5rem 1.5rem',
      }}
    >
    
      <div className="max-w-7xl mx-auto">
        <div className={getLayoutClasses()}>
          {themeConfig.layout.type === 'sidebar' && getSidebarContent()}
          
          <div className={getContentClasses()}>
            <div
              className={`mb-6 lg:mb-8 ${themeConfig.layout.spacing === 'spacious' ? 'lg:mb-12' : 'lg:mb-6'}`}
            >
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-500"
                style={{
                  color: themeConfig.colors.text,
                  fontFamily: themeConfig.fonts.heading,
                }}
              >
                Welcome to Your One-Stop Shopping Destination
              </h1>
              <p
                className="text-base md:text-lg lg:text-xl mb-6 max-w-3xl"
                style={{
                  color: themeConfig.colors.textSecondary,
                  fontFamily: themeConfig.fonts.secondary,
                }}
              >
                Discover the latest trends, unbeatable deals, and handpicked products across fashion,
                electronics, home décor, and more — all in one place. Whether you're updating your 
                wardrobe or upgrading your gadgets, we've got everything you need with seamless browsing, 
                secure checkout, and fast delivery.


              </p>
              <button
                className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold transition-all duration-300 hover:opacity-90 cursor-pointer whitespace-nowrap"
                style={{
                  backgroundColor: themeConfig.colors.primary,
                  color: themeConfig.colors.background,
                  fontFamily: themeConfig.fonts.primary,
                }}
              >
                Get Started
              </button>
            </div>

            {themeConfig.layout.type === 'grid' && (
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 rounded-2xl"
                style={{ backgroundColor: themeConfig.colors.surface }}
              >
                <div className="text-center">
                  <i
                    className="ri-hand-heart-line w-12 h-12 flex items-center justify-center mx-auto mb-3 text-3xl"
                    style={{ color: themeConfig.colors.primary }}
                  ></i>
                  <h3
                    className="font-bold mb-2"
                    style={{
                      color: themeConfig.colors.text,
                      fontFamily: themeConfig.fonts.heading,
                    }}
                  >
                    Beauty & Personal Care
                  </h3>
                  <p
                    style={{
                      color: themeConfig.colors.textSecondary,
                      fontFamily: themeConfig.fonts.secondary,
                    }}
                  >
                    Skincare, Makeup, Wellness
                  </p>
                </div>
                <div className="text-center">
                  <i
                    className="ri-football-line w-12 h-12 flex items-center justify-center mx-auto mb-3 text-3xl"
                    style={{ color: themeConfig.colors.secondary }}
                  ></i>
                  <h3
                    className="font-bold mb-2"
                    style={{
                      color: themeConfig.colors.text,
                      fontFamily: themeConfig.fonts.heading,
                    }}
                  >
                    Kids & Toys
                  </h3>
                  <p
                    style={{
                      color: themeConfig.colors.textSecondary,
                      fontFamily: themeConfig.fonts.secondary,
                    }}
                  >
                    Clothes, Learning Toys
                  </p>
                </div>
                <div className="text-center">
                  <i
                    className="ri-shopping-cart-2-line w-12 h-12 flex items-center justify-center mx-auto mb-3 text-3xl"
                    style={{ color: themeConfig.colors.accent }}
                  ></i>
                  <h3
                    className="font-bold mb-2"
                    style={{
                      color: themeConfig.colors.text,
                      fontFamily: themeConfig.fonts.heading,
                    }}
                  >
                    Grocery & Essentials
                  </h3>
                  <p
                    style={{
                      color: themeConfig.colors.textSecondary,
                      fontFamily: themeConfig.fonts.secondary,
                    }}
                  >
                    Daily Needs, Snacks
                  </p>
                </div>
              </div>
            )}

            <section>
              <h2
                className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 transition-all duration-500"
                style={{
                  color: themeConfig.colors.text,
                  fontFamily: themeConfig.fonts.heading,
                }}
              >
                Featured Products
              </h2>
              
              {loading && <LoadingSpinner />}
              {error && (
                <div
                  className="text-center py-8"
                  style={{
                    color: themeConfig.colors.textSecondary,
                    fontFamily: themeConfig.fonts.secondary,
                  }}
                >
                  Error loading products: {error}
                </div>
              )}
              
              {!loading && !error && (
                <div className={getProductGridClasses()}>
                  {products.slice(0, 21).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );

}

export default MainContent;
