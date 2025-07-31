import { useTheme } from '../context/ThemeContext';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';

const MainContent: React.FC = () => {
  const { themeConfig } = useTheme();
  const { products, loading, error } = useProducts();

  // Layout utility classes based on theme config
  const layoutClasses = themeConfig.layout.type === 'sidebar'
    ? 'flex flex-col lg:flex-row gap-8'
    : 'block';

  const contentClasses = themeConfig.layout.type === 'sidebar'
    ? 'flex-1'
    : 'w-full';

  const productGridClasses = themeConfig.layout.type === 'sidebar'
    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

  const spacing = themeConfig.layout.spacing === 'spacious'
    ? '2rem 1rem lg:5rem 2rem'
    : '2rem 1rem lg:5rem 1.5rem';

  // Sidebar content shown only in sidebar layout
  const Sidebar = () => (
    <aside
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
              className="w-full text-left p-2 rounded cursor-pointer transition-colors"
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
    </aside>
  );

  return (
    <main
      className="pt-20 transition-all duration-500"
      style={{
        backgroundColor: themeConfig.colors.background,
        padding: spacing,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className={layoutClasses}>
          {themeConfig.layout.type === 'sidebar' && <Sidebar />}

          <div className={contentClasses}>
            {/* Hero Section */}
            <section className={`mb-6 lg:mb-8 ${themeConfig.layout.spacing === 'spacious' ? 'lg:mb-12' : 'lg:mb-6'}`}>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
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
                electronics, home décor, and more — all in one place.
              </p>
              <button
                className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                style={{
                  backgroundColor: themeConfig.colors.primary,
                  color: themeConfig.colors.background,
                  fontFamily: themeConfig.fonts.primary,
                }}
              >
                Get Started
              </button>
            </section>

            {/* Promo Section (Grid Only) */}
            {themeConfig.layout.type === 'grid' && (
              <section
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 rounded-2xl"
                style={{ backgroundColor: themeConfig.colors.surface }}
              >
                {[
                  {
                    icon: 'ri-hand-heart-line',
                    title: 'Beauty & Personal Care',
                    subtitle: 'Skincare, Makeup, Wellness',
                    color: themeConfig.colors.primary,
                  },
                  {
                    icon: 'ri-football-line',
                    title: 'Kids & Toys',
                    subtitle: 'Clothes, Learning Toys',
                    color: themeConfig.colors.secondary,
                  },
                  {
                    icon: 'ri-shopping-cart-2-line',
                    title: 'Grocery & Essentials',
                    subtitle: 'Daily Needs, Snacks',
                    color: themeConfig.colors.accent,
                  },
                ].map(({ icon, title, subtitle, color }) => (
                  <div key={title} className="text-center">
                    <i className={`${icon} w-12 h-12 flex items-center justify-center mx-auto mb-3 text-3xl`} style={{ color }} />
                    <h3
                      className="font-bold mb-2"
                      style={{
                        color: themeConfig.colors.text,
                        fontFamily: themeConfig.fonts.heading,
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{
                        color: themeConfig.colors.textSecondary,
                        fontFamily: themeConfig.fonts.secondary,
                      }}
                    >
                      {subtitle}
                    </p>
                  </div>
                ))}
              </section>
            )}

            {/* Featured Products */}
            <section>
              <h2
                className="text-xl md:text-2xl lg:text-3xl font-bold mb-6"
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
                <div className={productGridClasses}>
                  {products.slice(0, 17).map((product) => (
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
};

export default MainContent;
