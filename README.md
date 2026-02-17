# Brendon van Zanten - Portfolio Website

A modern, responsive portfolio website built with Nuxt 3, showcasing my work as a Full Stack Web Developer.

## 🚀 Features

- **Modern Design**: Clean, responsive grid layout with dark/light mode toggle
- **Blog System**: Built-in blog with Markdown support using Nuxt Content
- **Project Showcase**: Dynamic GitHub integration to display latest projects
- **Performance Optimized**: Fast loading with SSR, image optimization, and caching
- **SEO Friendly**: Comprehensive meta tags and structured data
- **Animations**: Smooth GSAP animations for enhanced user experience

## 🛠️ Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) - Vue.js framework with SSR
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Content**: [Nuxt Content](https://content.nuxt.com/) - File-based CMS for blog posts
- **Animations**: [GSAP](https://greensock.com/gsap/) - Professional animation library
- **Icons**: [Nuxt Icon](https://github.com/nuxt-modules/icon) - Icon component
- **Deployment**: [Netlify](https://netlify.com/) - Static site hosting
- **API Integration**: GitHub GraphQL API for project data

## 📁 Project Structure

```
├── assets/
│   ├── css/           # Global styles and Tailwind config
│   ├── fonts/         # Custom web fonts (Inter)
│   └── images/        # Static images and assets
├── components/
│   ├── content/       # Content-specific components
│   ├── ColorModeToggle.vue
│   ├── Post.vue
│   ├── SiteHeader.vue
│   └── SiteFooter.vue
├── content/
│   └── blog/          # Markdown blog posts
├── pages/
│   ├── blog/          # Blog pages
│   ├── index.vue      # Homepage
│   ├── projects.vue   # Projects showcase
│   └── uses.vue       # Tools and setup
├── server/
│   └── api/           # Server API routes
└── public/            # Static assets
```

## 🎨 Design Features

- **Responsive Grid Layout**: Adaptive layout that works on all devices
- **Color Mode Toggle**: Seamless dark/light theme switching
- **Custom Animations**: Staggered entrance animations for sections
- **Typography**: Inter and Nunito Sans fonts for optimal readability
- **Interactive Elements**: Hover effects and smooth transitions

## 🔧 Setup & Development

### Prerequisites

- Node.js 20+
- npm, pnpm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/brendonvanzanten/nuxt-portfolio.git
cd nuxt-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```bash
# GitHub Personal Access Token (for projects API)
GITHUB_TOKEN=your_github_token_here
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# For local static verification of the generated dist output
npx serve dist -l 3000
```

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter with required fields:

```yaml
---
title: "Your Post Title"
description: "Brief description of the post"
date: "2024-01-01"
cover: "image-filename.jpg"
tags: ["tag1", "tag2"]
---
Your markdown content here...
```

3. Add cover image to `public/images/blog/`

### Customizing Content

- **About Section**: Edit the about section in `pages/index.vue`
- **Experience**: Update work history in the experience section
- **Social Links**: Modify social media links in the component data
- **Contact Info**: Update email and contact information

## 🚀 Deployment

This site is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Set environment variables in Netlify dashboard
3. Deploy automatically on push to main branch

### Build Settings

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18+

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Automatic route-based code splitting with Nuxt
- **Font Strategy**: Inter is self-hosted, Nunito Sans is loaded from Google Fonts

## 🧹 Maintenance Notes

- Legacy favicon files (`public/favicon-dark-old.svg`, `public/favicon-light-old.svg`) were removed to avoid asset confusion.
- Primary favicon assets are managed in `public/favicon/` and linked from `nuxt.config.ts`.

## 🤝 Contributing

This is a personal portfolio project, but feel free to:

- Report bugs or issues
- Suggest improvements
- Use as inspiration for your own portfolio

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Brendon van Zanten**

- Website: [brendonvanzanten.com](https://brendonvanzanten.com)
- Email: brendon.vanzanten@gmail.com
- LinkedIn: [brendon-van-zanten](https://ca.linkedin.com/in/brendon-van-zanten-13121559)
- GitHub: [@brendonvanzanten](https://github.com/brendonvanzanten)

---

Built with ❤️ using Nuxt 3 and deployed on Netlify.
