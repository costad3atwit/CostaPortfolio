# David Costa — Portfolio

Personal portfolio site built with React, TypeScript, Vite, and Tailwind CSS.

## Pages

- **Home** — hero/landing
- **About** — overview, skills, experience, and resume (PDF viewer + download)
- **Projects** — project cards with detail views, PDF reports, and external links

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- React Router v7

## Setup

```bash
npm install
```

Create a `.env` file with your S3 base URL (used for resume and project PDFs):

```
VITE_S3_BASE_URL=https://your-bucket.s3.amazonaws.com
```

```bash
npm run dev      # dev server
npm run build    # production build
npm run preview  # preview build locally
```