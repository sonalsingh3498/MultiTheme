
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const ContactForm: React.FC = () => {
  const { themeConfig } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const getFormLayout = () => {
    switch (themeConfig.layout.type) {
      case 'sidebar':
        return 'flex flex-col lg:flex-row gap-8';
      case 'grid':
        return 'grid grid-cols-1 lg:grid-cols-2 gap-8';
      default:
        return 'max-w-2xl mx-auto';
    }
  };

  const getContactInfo = () => (
    <div
      className={`p-4 lg:p-6 rounded-lg border ${themeConfig.layout.type === 'grid' ? '' : 'mb-8'}`}
      style={{
        backgroundColor: themeConfig.colors.surface,
        borderColor: themeConfig.colors.border,
      }}
    >
      <h3
        className="text-lg lg:text-xl font-bold mb-6"
        style={{
          color: themeConfig.colors.text,
          fontFamily: themeConfig.fonts.heading,
        }}
      >
        Get in Touch
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <i
            className="ri-mail-line w-6 h-6 flex items-center justify-center"
            style={{ color: themeConfig.colors.primary }}
          ></i>
          <span
            className="text-sm lg:text-base"
            style={{
              color: themeConfig.colors.text,
              fontFamily: themeConfig.fonts.secondary,
            }}
          >
            contact@onestopshoping.com
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <i
            className="ri-phone-line w-6 h-6 flex items-center justify-center"
            style={{ color: themeConfig.colors.primary }}
          ></i>
          <span
            className="text-sm lg:text-base"
            style={{
              color: themeConfig.colors.text,
              fontFamily: themeConfig.fonts.secondary,
            }}
          >
            +91 7766990022
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <i
            className="ri-map-pin-line w-6 h-6 flex items-center justify-center"
            style={{ color: themeConfig.colors.primary }}
          ></i>
          <span
            className="text-sm lg:text-base"
            style={{
              color: themeConfig.colors.text,
              fontFamily: themeConfig.fonts.secondary,
            }}
          >
            123 Theme Street, Design City, DC 12345
          </span>
        </div>
      </div>

      <div className="mt-8">
        <h4
          className="font-bold mb-4"
          style={{
            color: themeConfig.colors.text,
            fontFamily: themeConfig.fonts.heading,
          }}
        >
          Office Hours
        </h4>
        <div
          className="space-y-1 text-xs lg:text-sm"
          style={{
            color: themeConfig.colors.textSecondary,
            fontFamily: themeConfig.fonts.secondary,
          }}
        >
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );

  return (
    <main
      className="min-h-screen pt-30 transition-all duration-500"
      style={{
        backgroundColor: themeConfig.colors.background,
        padding: themeConfig.layout.spacing === 'spacious' ? '2rem 1rem lg:5rem 2rem' : '2rem 1rem lg:5rem 1.5rem',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 lg:mb-12">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-500 text-center"
            style={{
              color: themeConfig.colors.text,
              fontFamily: themeConfig.fonts.heading,
            }}
          >
            Contact Us
          </h1>
          <p
            className="text-base md:text-lg lg:text-xl text-center max-w-3xl mx-auto"
            style={{
              color: themeConfig.colors.textSecondary,
              fontFamily: themeConfig.fonts.secondary,
            }}
          >
            Have questions about our theme switcher? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className={getFormLayout()}>
          {(themeConfig.layout.type === 'sidebar' || themeConfig.layout.type === 'grid') && getContactInfo()}
          
          <div className={themeConfig.layout.type === 'sidebar' ? 'flex-1' : ''}>
            {themeConfig.layout.type === 'standard' && getContactInfo()}
            
            <form
              id="contact-form"
              className="p-4 lg:p-6 rounded-lg border"
              style={{
                backgroundColor: themeConfig.colors.surface,
                borderColor: themeConfig.colors.border,
              }}
            >
              <h2
                className="text-xl lg:text-2xl font-bold mb-6"
                style={{
                  color: themeConfig.colors.text,
                  fontFamily: themeConfig.fonts.heading,
                }}
              >
                Send Message
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-6">
                <div>
                  <label
                    className="block mb-2 font-semibold text-sm lg:text-base"
                    style={{
                      color: themeConfig.colors.text,
                      fontFamily: themeConfig.fonts.primary,
                    }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg text-sm"
                    style={{
                      backgroundColor: themeConfig.colors.background,
                      borderColor: themeConfig.colors.border,
                      color: themeConfig.colors.text,
                      fontFamily: themeConfig.fonts.secondary,
                    }}
                  />
                </div>
                
                <div>
                  <label
                    className="block mb-2 font-semibold text-sm lg:text-base"
                    style={{
                      color: themeConfig.colors.text,
                      fontFamily: themeConfig.fonts.primary,
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg text-sm"
                    style={{
                      backgroundColor: themeConfig.colors.background,
                      borderColor: themeConfig.colors.border,
                      color: themeConfig.colors.text,
                      fontFamily: themeConfig.fonts.secondary,
                    }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  className="block mb-2 font-semibold text-sm lg:text-base"
                  style={{
                    color: themeConfig.colors.text,
                    fontFamily: themeConfig.fonts.primary,
                  }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg text-sm"
                  style={{
                    backgroundColor: themeConfig.colors.background,
                    borderColor: themeConfig.colors.border,
                    color: themeConfig.colors.text,
                    fontFamily: themeConfig.fonts.secondary,
                  }}
                />
              </div>

              <div className="mb-6">
                <label
                  className="block mb-2 font-semibold text-sm lg:text-base"
                  style={{
                    color: themeConfig.colors.text,
                    fontFamily: themeConfig.fonts.primary,
                  }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-3 lg:px-4 py-2 lg:py-3 border rounded-lg resize-none text-sm"
                  style={{
                    backgroundColor: themeConfig.colors.background,
                    borderColor: themeConfig.colors.border,
                    color: themeConfig.colors.text,
                    fontFamily: themeConfig.fonts.secondary,
                  }}
                />
                <div className="text-right mt-2">
                  <span
                    className="text-xs"
                    style={{
                      color: themeConfig.colors.textSecondary,
                      fontFamily: themeConfig.fonts.secondary,
                    }}
                  >
                    {formData.message.length}/500 characters
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 lg:py-3 px-4 lg:px-6 rounded-lg font-semibold transition-all duration-300 hover:opacity-90 cursor-pointer whitespace-nowrap"
                style={{
                  backgroundColor: themeConfig.colors.primary,
                  color: themeConfig.colors.background,
                  fontFamily: themeConfig.fonts.primary,
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
