# frontend

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/JamieBort/Portfolio-Website
cd Portfolio-Website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🚀 Deployment

This template is configured for GitHub Pages deployment by default. The `vite.config.ts` is set up with:

```typescript
base: "/Portfolio-Website/"; // Change this to your repo name
```

To deploy:

1. Update the `base` in `vite.config.ts` to match your repository name:

```typescript
base: "/Portfolio-Website/";
```

2. Build the project:

```bash
npm run build
```

3. Deploy to GitHub Pages:
   - Push to your GitHub repository
   - Enable GitHub Pages in repository settings
   - Select the `gh-pages` branch as source

### Alternative Deployment

For other platforms (Vercel, Netlify, etc.):

1. Remove or update the `base` property in `vite.config.ts`
2. Follow the platform-specific deployment instructions

## ⚙️ Development Features

### Build Optimization

The project includes several optimization features:

- **Code Splitting**: Vendor chunks are automatically separated

```typescript
manualChunks: {
  vendor: ['react', 'react-dom', 'framer-motion', '@emotion/react', '@emotion/styled'],
  icons: ['react-icons']
}
```

- **Compression**: Both Brotli and Gzip compression are enabled

  - Brotli: Level 11 compression
  - Gzip: Level 9 compression
  - Threshold: 512 bytes

- **Bundle Analysis**: Visualize your bundle size

```bash
npm run build
# Opens bundle analysis in browser automatically
```

### Performance Monitoring

- Bundle size visualization with `rollup-plugin-visualizer`
- Compressed size reporting
- Chunk size warnings (limit: 1000kb)

## 📦 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Lint code

## 🔧 System Requirements

- Node.js 18+
- npm 7+
