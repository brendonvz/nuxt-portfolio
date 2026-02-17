# Brendon van Zanten Portfolio

A responsive portfolio website built with Nuxt 3, featuring project highlights, blog content, and smooth UI animations.

## Features

- Responsive grid-based homepage layout
- Dark/light mode support
- Blog powered by Nuxt Content (Markdown)
- GitHub project integration via GraphQL API
- GSAP-powered section animations

## Tech Stack

- [Nuxt 3](https://nuxt.com/)
- [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Nuxt Content](https://content.nuxt.com/)
- [GSAP](https://greensock.com/gsap/)
- [Netlify](https://netlify.com/)

## Project Structure

```text
assets/           Global styles, fonts, assets
components/       Reusable Vue components
content/blog/     Markdown blog posts
pages/            Route pages (home, blog, projects, etc.)
server/api/       Server API endpoints
public/           Static public assets
```

## Requirements

- Node.js 20+
- npm

## Setup

```bash
git clone https://github.com/brendonvz/nuxt-portfolio.git
cd nuxt-portfolio
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```bash
GITHUB_TOKEN=your_github_token_here
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run generate # Generate static output
npm run preview  # Preview production build
```

## Contact

- Website: [brendonvanzanten.com](https://brendonvanzanten.com)
- Email: brendon.vanzanten@gmail.com
- LinkedIn: [brendon-van-zanten](https://ca.linkedin.com/in/brendon-van-zanten-13121559)
- GitHub: [@brendonvanzanten](https://github.com/brendonvanzanten)
