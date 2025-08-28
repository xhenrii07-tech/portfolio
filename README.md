# 🎨 Shane Rivera - Artist Portfolio

A beautiful, modern portfolio website showcasing Shane Rivera's creative work across multiple mediums. Built with clean, professional design and smooth animations.

## ✨ Features

- **Modern Design**: Clean black and white aesthetic with pastel green accents
- **Portfolio Sections**: Organized showcase of Illustrations, Branding, Banners, and SVGs
- **Professional Experience**: Detailed background and client work history
- **Skills Showcase**: Comprehensive display of design tools and creative services
- **Fully Responsive**: Works perfectly on all devices
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **Contact Form**: Functional contact form for project inquiries
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Elegant navigation between sections
- **Progress Bar**: Visual scroll progress indicator
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🎨 Portfolio Sections

1. **Hero Section** - Welcome introduction with Shane's creative specialist title
2. **Illustrations** - Character designs, holiday collections, and game assets
3. **Branding** - Logo designs, brand boards, and visual identity work
4. **Banners** - Digital marketing banners and animated content
5. **SVG Graphics** - Scalable vector designs and graphics
6. **About Section** - Professional background and client experience
7. **Skills Section** - Design tools and creative services expertise
8. **Contact Section** - Get in touch for collaborations

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter font family)

## 🎯 Design Theme

- **Primary Colors**: Black (#1a1a1a) and White (#ffffff)
- **Accent Color**: Pastel Green (#98D8C8)
- **Typography**: Clean, professional Inter font family
- **Layout**: Modern grid-based design with smooth transitions
- **Aesthetic**: Minimalist, clean, and professional

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Quick Start

1. **Download/Clone** the project files
2. **Customize** the content (see customization guide below)
3. **Test** locally by opening `index.html` in your browser
4. **Deploy** to your chosen hosting platform

## ✏️ Customization Guide

### 1. Personal Information

Edit the following in `index.html`:

```html
<!-- Update title and meta tags -->
<title>Shane Rivera - Artist Portfolio</title>
<meta name="author" content="Shane Rivera">

<!-- Update hero section -->
<h1 class="hero-title">
    Welcome, I'm <span class="highlight">Shane Rivera</span>
</h1>
<p class="hero-subtitle">Creative Specialist & Digital Artist</p>
<p class="hero-description">Your updated description...</p>

<!-- Update contact information -->
<p>your.actual.email@example.com</p>
```

### 2. Portfolio Items

Add or modify portfolio items in each section:

```html
<div class="portfolio-item">
    <img src="resources/Illustrations/your-image.png" alt="Your Work Description" loading="lazy">
    <div class="portfolio-overlay">
        <h3>Your Project Title</h3>
        <p>Project Description</p>
    </div>
</div>
```

### 3. Skills and Experience

Update the skills and experience sections with your actual information:

```html
<div class="skill-item">
    <i class="fas fa-palette"></i>
    <span>Your Skill</span>
</div>
```

### 4. Social Links

Update the social media links in the contact section:

```html
<div class="social-links">
    <a href="your-behance-url" class="social-link">
        <i class="fab fa-behance"></i>
    </a>
    <a href="your-dribbble-url" class="social-link">
        <i class="fab fa-dribbble"></i>
    </a>
    <!-- Add more social links as needed -->
</div>
```

### 5. Colors and Styling

To change the color scheme, edit the CSS variables in `styles.css`:

```css
/* Main accent color */
.highlight {
    color: #your-accent-color;
}

.btn-primary {
    background: #your-primary-color;
}
```

## 🌐 Free Hosting Options

### 1. GitHub Pages (Recommended)

1. Create a GitHub repository
2. Upload your portfolio files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### 2. Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your portfolio folder
3. Get instant deployment
4. Custom domain available

### 3. Vercel

1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Automatic deployments on push
4. Custom domain support

## 📧 Contact Form Setup

The contact form currently shows a success message. To make it functional:

### Option 1: Formspree (Free)
1. Go to [formspree.io](https://formspree.io)
2. Create an account and form
3. Update the form action in `index.html`:

```html
<form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
```

### Option 2: Netlify Forms
1. Deploy to Netlify
2. Add `netlify` attribute to your form:

```html
<form class="contact-form" netlify>
```

## 🔧 Advanced Customization

### Adding New Portfolio Sections

1. Add HTML structure in `index.html`
2. Add CSS styling in `styles.css`
3. Add JavaScript functionality in `script.js` if needed

### Adding Animations

The portfolio includes several animation types:
- Fade-in animations on scroll
- Hover effects on portfolio items
- Typing effect on hero title
- Parallax scrolling effects
- Image loading animations

### Performance Optimization

- Images use lazy loading for better performance
- CSS uses efficient selectors
- JavaScript is loaded at the end of the body
- Minimal external dependencies

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly navigation
- Optimized typography for small screens
- Mobile-first CSS approach

## 🎯 SEO Features

- Semantic HTML5 structure
- Meta tags for description and keywords
- Proper heading hierarchy
- Alt text for portfolio images
- Fast loading times

## 🚀 Deployment Checklist

Before deploying, ensure you have:

- [ ] Updated all personal information
- [ ] Added your actual portfolio work
- [ ] Updated skills and experience
- [ ] Added real contact information
- [ ] Updated social media links
- [ ] Tested on multiple devices
- [ ] Validated HTML and CSS
- [ ] Optimized portfolio images

## 📞 Support

If you need help customizing or deploying your portfolio:

1. Check the customization guide above
2. Review the code comments
3. Test locally before deploying
4. Use browser developer tools for debugging

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Modern CSS techniques and best practices

---

**Shane Rivera's portfolio is ready to showcase amazing creative work! 🎨**

The website perfectly highlights Shane's expertise in illustrations, branding, banners, and SVG graphics with a clean, professional design that will impress potential clients and collaborators.
