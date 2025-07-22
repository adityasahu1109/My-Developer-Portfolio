
# Aditya's Developer Portfolio

A modern, responsive React portfolio website showcasing technical skills, projects, and professional experience. Built with React 18, Vite, and Tailwind CSS for optimal performance and user experience. 

## 🚀 Features

- **Single Page Application (SPA)** with smooth scroll navigation 
- **Responsive Design** optimized for all device sizes
- **Animated Transitions** using Framer Motion 
- **Interactive Skills Showcase** with custom icons and gradients 
- **Project Portfolio** with GitHub integration
- **Contact Form** with modern UI components
- **Active Section Detection** for navigation highlighting 

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.1.0 | Core UI framework |
| Vite | 7.0.4 | Build tool and dev server |
| Tailwind CSS | 3.3.3 | Utility-first styling |
| Framer Motion | 12.23.6 | Animations and transitions |
| React Icons | 5.5.0 | Icon components |

## 📁 Project Structure

```
├── index.html              # Main HTML entry point
├── src/
│   ├── App.jsx             # Main application component
│   └── main.jsx            # React DOM entry point
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 🎯 Sections Overview

### 1. Hero Section (`#home`)
Landing area with introduction and call-to-action buttons

### 2. About Section (`#about`) 
- Personal journey and background
- Education timeline (BTech CSE at VNIT Nagpur)
- Google Cloud Arcade Facilitator achievement

### 3. Skills Section (`#skills`) 
Interactive grid showcasing technical skills:
- **Programming Languages**: C++, Python, JavaScript
- **Web Technologies**: React, HTML/CSS
- **Data Science**: NumPy, Pandas
- **Database**: SQL

### 4. Projects Section (`#projects`) 
Featured projects with:
- Project descriptions
- Technology stacks
- GitHub repository links

### 5. Contact Section (`#contact`) 
Contact form with social media links

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/adityasahu1109/My-Developer-Portfolio.git
cd My-Developer-Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server** 
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 🎨 Customization

### Adding New Skills
Update the `skills` array in `src/App.jsx`: 

```javascript
const skills = [
  { 
    name: 'Your Skill', 
    icon: <YourIcon className="text-2xl" />,
    color: 'from-color-500 to-color-600'
  },
  // ... other skills
];
```

### Adding New Projects
Update the `projects` array with your project details including title, description, technologies, and GitHub URL.

### Styling
The project uses Tailwind CSS for styling. Modify classes in JSX components or extend the Tailwind configuration for custom styles.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: Base styles
- **Tablet**: `md:` prefix classes
- **Desktop**: `lg:` prefix classes

## 🎭 Animation System

Animations are powered by Framer Motion with:
- **Page entry animations**: `initial`, `animate`, `transition`
- **Scroll-triggered animations**: `whileInView`, `viewport`
- **Interactive effects**: `whileHover`, `whileTap`

## 🔧 Configuration

### Vite Configuration 
Basic Vite setup with React plugin for fast development and optimized builds.

## 📄 License

This project is open source and available under the MIT License.



## 📞 Contact

- **GitHub**: [adityasahu1109](https://github.com/adityasahu1109)
- **Email**: Contact through the portfolio contact form

---

Built with ❤️ using React and modern web technologies.
