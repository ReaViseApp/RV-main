# 🌐 ReaVise Web Demo Setup

This guide explains how to set up and deploy the ReaVise web demo to GitHub Pages.

## 📋 Overview

The demo setup includes:
- **Mock Data**: Pre-populated users, posts, and interactions
- **No Backend Required**: Runs entirely in the browser
- **GitHub Pages Deployment**: Automatic deployment via GitHub Actions
- **Full UI Experience**: All features visible with simulated data

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git configured

### Local Demo Testing

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Copy demo environment:**
   ```bash
   cp .env.demo .env
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open browser:**
   Navigate to `http://localhost:5173`

### Build Demo Locally

```bash
npm run build
npm run preview
```

## 🔄 GitHub Pages Deployment

### Setup (One-Time)

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Save

2. **Create demo-site branch:**
   ```bash
   git checkout -b demo-site
   git push origin demo-site
   ```

### Automatic Deployment

The demo automatically deploys when you push to the `demo-site` branch:

```bash
# Make changes to demo content
git checkout demo-site
git add .
git commit -m "Update demo content"
git push origin demo-site
```

The GitHub Actions workflow will:
1. Install dependencies
2. Apply demo configuration
3. Build the frontend
4. Deploy to GitHub Pages

### Manual Deployment

Trigger deployment manually:
- Go to Actions → Deploy Demo to GitHub Pages
- Click "Run workflow"
- Select `demo-site` branch
- Run

## 📁 Demo Files Structure

```
frontend/
├── .env.demo              # Demo environment configuration
├── src/
│   └── services/
│       ├── mockData.ts    # Mock users and posts
│       └── demoApi.ts     # Mock API implementation
└── vite.config.ts         # Configured for GitHub Pages
```

## 🎨 Demo Features

### Mock Data Includes:
- **3 Users**: Designers, collectors, and artists
- **6 Posts**: Across all categories (TheLot, Design, ReaVise)
- **Comments**: Pre-populated interactions
- **Messages**: Sample conversations
- **Random Images**: Via Picsum and Pravatar

### Disabled Features:
- Real authentication
- Payment processing
- Actual NFT transactions
- Backend API calls

## 🔧 Configuration

### Environment Variables (.env.demo)

```env
VITE_DEMO_MODE=true
VITE_API_URL=https://api-demo.reavise.com
VITE_ENABLE_AUTH=false
VITE_ENABLE_PAYMENTS=false
VITE_ENABLE_NFT=false
```

### Vite Config

The vite.config.ts includes:
- Base path for GitHub Pages (repo name)
- Asset directory configuration
- Source maps for debugging

## 📊 Demo URL

After deployment, your demo will be available at:
```
https://[username].github.io/RV-main/
```

Replace `[username]` with your GitHub username.

## 🐛 Troubleshooting

### Assets Not Loading
- Verify `VITE_BASE_PATH` matches your repo name
- Check GitHub Pages settings are correct
- Ensure all assets use relative paths

### Build Failures
- Check Node.js version (18+ required)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Review GitHub Actions logs

### Blank Page After Deploy
- Check browser console for errors
- Verify base path in vite.config.ts
- Ensure GitHub Pages is enabled

## 🔄 Updating Demo Content

### Add New Mock Data

Edit `frontend/src/services/mockData.ts`:

```typescript
export const mockPosts: MockPost[] = [
  // Add your new posts here
  {
    id: '7',
    userId: '1',
    username: 'creative_designer',
    content: 'New demo content...',
    // ... rest of post data
  },
];
```

### Modify Demo Behavior

Edit `frontend/src/services/demoApi.ts` to change:
- API response delays
- Mock data filtering
- Simulated interactions

## 📝 Next Steps

1. **Customize Mock Data**: Update mockData.ts with your content
2. **Test Locally**: Run `npm run dev` to verify changes
3. **Deploy**: Push to demo-site branch
4. **Share**: Send the GitHub Pages URL to stakeholders

## 🤝 Contributing

When contributing to the demo:
1. Test changes locally first
2. Ensure no real API calls are made
3. Keep mock data realistic
4. Update this documentation if needed

## 📞 Support

For issues or questions:
- Check GitHub Actions logs
- Review browser console errors
- Verify all configuration files are correct

---

**Note**: This is a demo environment with mock data. For production deployment, use the full backend setup described in DEVELOPMENT_GUIDE.md.
