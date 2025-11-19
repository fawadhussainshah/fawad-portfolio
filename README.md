# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, a beautiful UI, and all the sections you need to showcase your professional experience.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth animations with Framer Motion
- 🎯 All essential portfolio sections:
  - Hero section with introduction
  - About me
  - Work experience timeline
  - Education
  - Skills with progress bars
  - Projects showcase
  - Contact form
- 🚀 Fast and optimized with Vite
- 🎨 Customizable color scheme with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Update Your Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change the name, title, and description
   - Update social media links
   - Replace the avatar placeholder

2. **About Section** (`src/components/About.jsx`):
   - Update the about text
   - Modify the statistics (years of experience, projects, etc.)

3. **Experience** (`src/components/Experience.jsx`):
   - Update the `experiences` array with your work history

4. **Education** (`src/components/Education.jsx`):
   - Update the `education` array with your educational background

5. **Skills** (`src/components/Skills.jsx`):
   - Modify the `skillCategories` array with your skills and proficiency levels

6. **Projects** (`src/components/Projects.jsx`):
   - Update the `projects` array with your portfolio projects
   - Replace placeholder images with your project screenshots

7. **Contact** (`src/components/Contact.jsx`):
   - Update contact information (email, phone, location)
   - Modify social media links
   - Connect the form to a backend service (currently just shows an alert)

### Styling

The color scheme can be customized in `tailwind.config.js`. The primary color is set to blue, but you can change it to any color you prefer.

## Project Structure

```
Portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!

