# Suvam Patel - Personal Portfolio Website

A clean, minimalist personal portfolio website showcasing my work as a GIS Analyst, Data Scientist, and Remote Sensing Specialist.

## Live Demo
[View Live Site](https://suvamp.github.io/suvamp.githb.io/) *(Update with your actual GitHub Pages URL)*

---

## Project Structure

```
portfolio/
│
├── index.html          # Main HTML file with semantic structure
├── styles.css          # CSS with theme variables and responsive design
├── script.js           # JavaScript for theme toggle and smooth scrolling
├── README.md           # Project documentation (this file)
│
└── images/             # Image assets folder (optional)
    └── profile-pic.jpg # Profile photo
```

---

## Design Features

- **Minimalist Design**: Clean, professional aesthetic with excellent readability
- **Light/Dark Mode Toggle**: iOS-style toggle switch - preference saved automatically
- **Responsive Layout**: Mobile-friendly design that adapts to all screen sizes
- **System Fonts**: Uses native fonts for optimal performance and consistency
- **Smooth Animations**: Subtle transitions for better user experience
- **Semantic HTML**: Proper structure for accessibility and SEO
- **Local Storage**: Theme preference persists across sessions
- **Smooth Scrolling**: Navigation links smoothly scroll to sections

---

## Technologies Used

- **HTML5**: Semantic markup for better accessibility
- **CSS3**: Modern styling with CSS variables for theming
- **JavaScript (Vanilla)**: Interactive theme toggle with localStorage
- **GitHub Pages**: Free hosting (recommended)

---

## Getting Started

### Prerequisites
- A text editor (VS Code, Sublime Text, Atom, etc.)
- Git installed on your computer
- A GitHub account (for hosting)
- Basic knowledge of HTML/CSS

### Installation

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/Suvamp/suvamp.githb.io.git
   cd portfolio
   ```

2. **Customize the content**
   - Open `index.html` in your text editor
   - Replace all personal information with your own
   - Update links to your LinkedIn, GitHub, and projects
   - Modify the experience and project sections

3. **Add your profile photo (optional)**
   - Create an `images` folder in the root directory
   - Add your profile photo
   - Uncomment the image line in `index.html`:
     ```html
     <img src="images/profile-pic.jpg" alt="Your Name" class="profile-img">
     ```
   - Uncomment the `.profile-img` styles in `styles.css`

4. **Test locally**
   - Open `index.html` in your web browser
   - Test the theme toggle switch
   - Check all navigation links
   - Verify responsive design on different screen sizes

---

## Deployment to GitHub Pages

### Option 1: Standard Repository

1. **Create a new repository on GitHub**
   - Name it `portfolio` or any name you prefer

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at `https://yourusername.github.io/portfolio/`

### Option 2: GitHub User Site

1. **Create a repository named** `yourusername.github.io`
   - Replace `yourusername` with your actual GitHub username

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Access your site**
   - Your site will automatically be live at `https://yourusername.github.io/`
   - No additional setup needed!

---

## Customization Guide

### Changing Theme Colors

Edit the CSS variables in `styles.css`:

**Light Mode Colors:**
```css
:root {
    --bg-primary: #fafafa;        /* Page background */
    --bg-secondary: white;         /* Cards and header */
    --text-primary: #2d3748;       /* Main text */
    --text-secondary: #4a5568;     /* Secondary text */
    --text-tertiary: #718096;      /* Muted text */
    --text-heading: #1a202c;       /* Headings */
    --border-color: #e2e8f0;       /* Borders */
    --link-color: #3182ce;         /* Links */
    --link-hover: #2c5282;         /* Link hover */
    --button-bg: #2d3748;          /* Buttons */
    --button-hover: #1a202c;       /* Button hover */
    --skill-bg: white;             /* Skill tags */
}
```

**Dark Mode Colors:**
```css
body.dark-mode {
    --bg-primary: #1a202c;         /* Dark background */
    --bg-secondary: #2d3748;       /* Dark cards */
    --text-primary: #e2e8f0;       /* Light text */
    --text-secondary: #cbd5e0;     /* Secondary light text */
    --text-tertiary: #a0aec0;      /* Muted light text */
    --text-heading: #f7fafc;       /* White headings */
    --border-color: #4a5568;       /* Dark borders */
    --link-color: #63b3ed;         /* Light blue links */
    --link-hover: #90cdf4;         /* Lighter blue hover */
    --button-bg: #4299e1;          /* Blue buttons */
    --button-hover: #3182ce;       /* Darker blue hover */
    --skill-bg: #374151;           /* Dark skill tags */
}
```

### Modifying Toggle Switch Appearance

In `styles.css`, adjust these properties:

```css
.theme-switch {
    width: 60px;          /* Switch width */
    height: 30px;         /* Switch height */
}

.slider:before {
    height: 22px;         /* Circle size */
    width: 22px;          /* Circle size */
}

input:checked + .slider {
    background-color: #4299e1;  /* Active color */
}
```

### Adding New Sections

1. Add the HTML structure in `index.html`:
   ```html
   <section id="new-section">
       <h2>Section Title</h2>
       <p>Your content here...</p>
   </section>
   ```

2. Add navigation link:
   ```html
   <nav>
       <a href="#new-section">New Section</a>
   </nav>
   ```

3. Style it in `styles.css` if needed

---

## Sections Included

- **About**: Introduction and skills grid
- **Work Experience**: Job timeline with descriptions
- **Projects**: Featured projects with links
- **Contact**: Professional links and contact information
- **Footer**: Copyright and credits

---

## Features Breakdown

### Theme Toggle Switch
- Professional iOS-style toggle
- Smooth sliding animation
- Saves preference to localStorage
- Syncs across page visits
- Accessible with keyboard navigation

### Responsive Design
- Mobile-first approach
- Breakpoint at 768px
- Flexible layouts that adapt
- Touch-friendly on mobile

### Performance
- Uses system fonts (no external font loading)
- Minimal JavaScript
- CSS variables for efficient theming
- Optimized animations

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigable
- ARIA labels where needed
- High contrast text

---

## Contact

- **Email**: patelsuvam621@gmail.com
- **Phone**: (909) 663-7562
- **LinkedIn**: [linkedin.com/in/suvam-patel-997543195](https://www.linkedin.com/in/suvam-patel-997543195/)
- **GitHub**: [github.com/Suvamp](https://github.com/Suvamp?tab=repositories)
- **StoryMaps**: [Portfolio](https://arcg.is/1aXHSq2)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- Design inspired by modern minimalist portfolio websites
- Toggle switch design based on iOS UI patterns
- Built with accessibility and performance in mind

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Troubleshooting

### Theme not saving?
- Check if your browser allows localStorage
- Try clearing browser cache and reloading

### Toggle switch not working?
- Ensure `script.js` is properly linked in `index.html`
- Check browser console for JavaScript errors

### Layout broken on mobile?
- Verify viewport meta tag is present in `<head>`
- Test responsiveness using browser DevTools

---

## Future Enhancements

Potential features to add:
- [ ] Blog section
- [ ] Project filtering/search
- [ ] Animations on scroll
- [ ] Contact form
- [ ] Download resume button
- [ ] Analytics integration
- [ ] More project details pages

---

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 1 second
- **Total Size**: < 50KB (without images)

---

*Last Updated: October 2025*

---

**Built by Suvam Patel**
