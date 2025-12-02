# Portfolio Website

A modern, responsive portfolio website showcasing projects, experience, and skills.

## 🚀 Deployment on Vercel

### Method 1: Deploy via Vercel Dashboard

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the settings
   - Click "Deploy"

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   For production deployment:
   ```bash
   vercel --prod
   ```

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── vercel.json        # Vercel configuration
└── README.md          # This file
```

## ⚙️ Configuration

The `vercel.json` file is configured to:
- Serve the static HTML file
- Handle routing for single-page application
- Set security headers
- Configure caching for static assets

## 🔧 Custom Domain

After deployment, you can add a custom domain:
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## 📝 Notes

- The portfolio uses client-side routing, so all routes redirect to `index.html`
- External resources (fonts, CDN scripts) will load from their respective sources
- If you need to modify SDK scripts (`/_sdk/*`), ensure they're properly hosted

## 🛠️ Local Development

Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

