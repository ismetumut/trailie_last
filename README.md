# Career Discovery - Kariyer Keşfi

A comprehensive career discovery application with AI-powered assessments, simulations, and career guidance tools.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd career-discovery-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔧 Build Troubleshooting

If you encounter build errors:

1. **Clear cache and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Update dependencies:**
   ```bash
   npm update
   ```

3. **Check Node.js version:**
   ```bash
   node --version
   # Should be 18.0.0 or higher
   ```

## Features

### 🌐 Multi-Language Support
- **Turkish (TR)** - Default language
- **English (EN)** - Full translation support
- Language switcher in the header
- Persistent language preference (saved in localStorage)

### 📱 Mobile Responsive Design
- **Responsive Layout**: Optimized for all screen sizes
- **Mobile-First Approach**: Designed primarily for mobile devices
- **Touch-Friendly**: 44px minimum touch targets
- **Mobile Navigation**: Bottom navigation bar for mobile devices
- **Safe Area Support**: Proper handling of device safe areas
- **Responsive Typography**: Adaptive text sizes for different screens

### 🎯 Core Features
- **Personality Assessment**: AI-powered personality inventory
- **Expertise Assessment**: Skills and experience evaluation
- **Role Assignment**: AI-driven career role recommendations
- **Simulation Games**: Interactive career scenario simulations
- **CV Generator**: AI-powered resume creation
- **Job Board**: Curated job listings with matching
- **Interview Prep**: Practice interview questions and scenarios
- **Networking**: Professional networking tools
- **Coaching**: Career coaching sessions

### 📦 Subscription Packages
- **Free**: Basic personality assessment and AI report
- **Core**: Advanced assessments, simulations, and CV generator
- **Pro**: Premium features with analytics and priority support
- **Premium**: Full access to all features

## Mobile Responsiveness

### Breakpoints
- **xs**: 475px and up
- **sm**: 640px and up
- **md**: 768px and up
- **lg**: 1024px and up
- **xl**: 1280px and up
- **2xl**: 1536px and up

### Mobile Features
- **Bottom Navigation**: Easy access to main sections on mobile
- **Responsive Cards**: Adaptive card layouts for different screen sizes
- **Touch Targets**: Minimum 44px touch targets for accessibility
- **Safe Areas**: Proper handling of device notches and home indicators
- **Responsive Typography**: Text scales appropriately across devices

## Language Support

### Translation System
- **Centralized Translations**: All text managed in `/lib/i18n.ts`
- **Type Safety**: TypeScript interfaces for translation keys
- **Easy Extension**: Simple to add new languages
- **Context-Aware**: Language context available throughout the app

### Available Languages
- **Turkish (TR)**: Primary language with full content
- **English (EN)**: Complete translation of all features

### Adding New Languages
1. Add new language type to `Language` type in `/lib/i18n.ts`
2. Add translations to the `translations` object
3. Update the language switcher component

## Project Structure

```
career-discovery-app/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with mobile utilities
│   ├── layout.tsx         # Root layout with viewport meta
│   └── page.tsx           # Main application component
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── navigation/       # Navigation components
│   └── language-provider.tsx # Language context provider
├── lib/                  # Utility libraries
│   ├── i18n.ts          # Internationalization system
│   └── utils.ts         # Utility functions
├── public/              # Static assets
└── tailwind.config.ts   # Tailwind configuration with mobile breakpoints
```

## Mobile Development Guidelines

### CSS Classes
- Use `mobile-padding` for responsive padding
- Use `mobile-text` for responsive typography
- Use `mobile-grid` for responsive grid layouts
- Use `mobile-spacing` for responsive spacing
- Use `mobile-card` for responsive card components

### Component Patterns
- Always include mobile-first responsive classes
- Use `md:` prefix for desktop-specific styles
- Test on actual mobile devices
- Ensure touch targets are at least 44px
- Consider safe areas for modern devices

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Manual Deployment
1. Run `npm run build`
2. Upload the `.next` folder to your hosting provider
3. Configure your server to serve the Next.js application

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on both mobile and desktop
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.
