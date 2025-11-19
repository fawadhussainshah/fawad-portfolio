# Portfolio Customization Guide

This guide will help you fill in your portfolio with information from your resume.

## ✅ Already Updated
- **Name**: Syed Fawad Hussain Shah (updated in Hero section and page title)
- **Initials**: FS (updated in avatar)

## 📝 Information to Update

### 1. Hero Section (`src/components/Hero.jsx`)
- **Line 49**: Update your professional title (currently "Full Stack Developer")
- **Lines 56-59**: Replace with your profile summary from resume
- **Line 90**: Update GitHub URL: `https://github.com/yourusername`
- **Line 100**: Update LinkedIn URL: `https://linkedin.com/in/yourusername`
- **Line 110**: Update email: `mailto:your.email@example.com`

### 2. About Section (`src/components/About.jsx`)
- **Lines 16-31**: Replace placeholder text with your actual profile summary from resume
- **Lines 35-50**: Update statistics (years of experience, projects completed, etc.)

### 3. Experience Section (`src/components/Experience.jsx`)
- **Lines 7-50**: Update the `experiences` array with your work history:
  ```javascript
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Start Date - End Date',
    description: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
      // Add more bullet points
    ],
  }
  ```

### 4. Education Section (`src/components/Education.jsx`)
- **Lines 7-20**: Update the `education` array with your educational background:
  ```javascript
  {
    degree: 'Your Degree',
    institution: 'Institution Name',
    period: 'Start Year - End Year',
    description: 'Additional details about your education',
  }
  ```

### 5. Skills Section (`src/components/Skills.jsx`)
- **Lines 7-50**: Update the `skillCategories` array with your skills from the "Tools and Technologies" section of your resume:
  ```javascript
  {
    category: 'Category Name',
    skills: [
      { name: 'Skill Name', level: 90 }, // level is 0-100
      // Add more skills
    ],
  }
  ```

### 6. Projects Section (`src/components/Projects.jsx`)
- **Lines 7-40**: Update the `projects` array with your portfolio projects:
  ```javascript
  {
    title: 'Project Name',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-demo-url.com',
    image: 'path/to/project-image.jpg', // Replace placeholder images
  }
  ```

### 7. Contact Section (`src/components/Contact.jsx`)
- **Line 58**: Update email address
- **Line 70**: Update phone number
- **Line 84**: Update location
- **Line 91**: Update LinkedIn URL
- **Line 100**: Update GitHub URL

## 🖼️ Adding Project Images

1. Create a `public/images` folder
2. Add your project screenshots/images there
3. Update the image paths in `Projects.jsx`:
   ```javascript
   image: '/images/project1.jpg'
   ```

## 🎨 Customizing Colors

To change the color scheme, edit `tailwind.config.js`:
- Modify the `primary` color values (currently blue)
- You can use any color palette you prefer

## 🚀 Quick Start

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open `http://localhost:5173`
4. Edit the components listed above with your information
5. The page will auto-reload as you make changes

## 📄 Resume Sections Mapping

Based on your resume structure:
- **Profile Summary** → Hero section description + About section
- **Tools and Technologies** → Skills section
- **Experience** → Experience section
- **Education** → Education section
- **Projects** (if any) → Projects section
- **Contact Info** → Contact section + Hero social links

Good luck customizing your portfolio! 🎉

