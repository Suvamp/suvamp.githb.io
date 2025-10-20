// ===========================
// THEME TOGGLE FUNCTIONALITY
// ===========================

// Get the theme toggle checkbox
const themeCheckbox = document.getElementById('theme-checkbox');

// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on page load
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeCheckbox.checked = true;
}

// Toggle theme when checkbox is changed
themeCheckbox.addEventListener('change', () => {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // Determine the current theme
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    
    // Save the theme preference to localStorage
    localStorage.setItem('theme', theme);
});

// ===========================
// SMOOTH SCROLLING
// ===========================

// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// CONSOLE EASTER EGG
// ===========================

console.log('%c👋 Hey there!', 'font-size: 20px; color: #3182ce; font-weight: bold;');
console.log('%cThanks for checking out the code!', 'font-size: 14px; color: #4a5568;');
console.log('%c🔗 GitHub: https://github.com/Suvamp', 'font-size: 12px; color: #718096;');