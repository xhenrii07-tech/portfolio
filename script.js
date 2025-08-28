// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = 'none';
    }
});

// Full View Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing modal functionality...');
    
    const modal = document.getElementById('fullViewModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    
    console.log('Modal elements:', { modal, modalImg, closeBtn });
    
    if (!modal || !modalImg || !closeBtn) {
        console.error('Modal elements not found');
        return;
    }
    
    // Function to create and show modal content
    function showModalContent(src, isVideo = false) {
        const modalContent = modal.querySelector('.modal-content');
        
        if (isVideo) {
            // For video files, show video in modal
            modalContent.innerHTML = `
                <span class="close">&times;</span>
                <video controls autoplay muted loop style="max-width: 90%; max-height: 90%; object-fit: contain; border-radius: 10px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5); background: #000;">
                    <source src="${src}" type="video/webm">
                    <source src="${src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
            
            // Add play/pause functionality for videos
            const video = modalContent.querySelector('video');
            if (video) {
                video.addEventListener('click', () => {
                    if (video.paused) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            }
        } else {
            // For image files, show image in modal
            modalContent.innerHTML = `
                <span class="close">&times;</span>
                <img src="${src}" alt="Full size image" style="max-width: 90%; max-height: 90%; object-fit: contain; border-radius: 10px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);">
            `;
        }
        
        // Re-attach close button event
        const newCloseBtn = modal.querySelector('.close');
        newCloseBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    // Open modal when portfolio item is clicked
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    console.log('Found portfolio items:', portfolioItems.length);
    
    portfolioItems.forEach((item, index) => {
        console.log(`Setting up click handler for portfolio item ${index}:`, item);
        item.addEventListener('click', () => {
            console.log(`Portfolio item ${index} clicked!`);
            const imageSrc = item.getAttribute('data-image');
            console.log('Image source:', imageSrc);
            if (imageSrc) {
                // Check if it's a video file
                const isVideo = imageSrc.toLowerCase().endsWith('.mp4') || 
                               imageSrc.toLowerCase().endsWith('.mov') || 
                               imageSrc.toLowerCase().endsWith('.avi') ||
                               imageSrc.toLowerCase().endsWith('.webm');
                
                showModalContent(imageSrc, isVideo);
            }
        });
    });
    
    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
    
    // Close modal when clicking outside the image/video
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});



// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.portfolio-item, .skill-item, .about-content, .contact-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add CSS for notification styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .loaded .hero-content {
        animation: fadeInUp 1s ease-out;
    }
`;

document.head.appendChild(notificationStyles);

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: #768952;
    z-index: 10001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Add hover effects for portfolio items
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Don't override stickers section custom hover effects
            if (!item.closest('#stickers')) {
                item.style.transform = 'translateY(-10px) scale(1.02)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            // Don't override stickers section custom hover effects
            if (!item.closest('#stickers')) {
                item.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
    
    // Special handling for stickers section videos
    const stickerVideos = document.querySelectorAll('#stickers .portfolio-item video');
    stickerVideos.forEach(video => {
        // Add loading state
        const portfolioItem = video.closest('.portfolio-item');
        if (portfolioItem) {
            portfolioItem.style.opacity = '0.7';
        }
        
        // When video loads, show it fully
        video.addEventListener('loadeddata', () => {
            if (portfolioItem) {
                portfolioItem.style.opacity = '1';
            }
        });
        
        // Handle video errors
        video.addEventListener('error', () => {
            if (portfolioItem) {
                portfolioItem.style.opacity = '0.5';
                portfolioItem.style.filter = 'grayscale(50%)';
            }
        });
        
        // Pause videos when not in viewport to save resources
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {
                        // Handle autoplay restrictions
                        console.log('Autoplay prevented for:', video.src);
                    });
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(video);
    });
});

// Add skill item hover effects
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add smooth reveal animation for sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        
        if (scrollTop + windowHeight > sectionTop + sectionHeight * 0.3) {
            section.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Add CSS for reveal animation
const revealStyles = document.createElement('style');
revealStyles.textContent = `
    section {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(revealStyles);

// Image loading functionality for portfolio items
document.addEventListener('DOMContentLoaded', () => {
    const portfolioImages = document.querySelectorAll('.portfolio-item img');
    
    portfolioImages.forEach(img => {
        // Add loading state
        img.style.opacity = '0';
        
        // When image loads, show it with animation
        img.addEventListener('load', () => {
            img.style.opacity = '1';
            img.classList.add('loaded');
        });
        
        // Handle error cases
        img.addEventListener('error', () => {
            img.style.opacity = '1';
            img.style.filter = 'grayscale(100%)';
            img.style.opacity = '0.7';
        });
    });
});

// Add smooth scrolling for portfolio navigation
document.addEventListener('DOMContentLoaded', () => {
    const portfolioNavLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    portfolioNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation state
const activeNavStyles = document.createElement('style');
activeNavStyles.textContent = `
    .nav-link.active {
        color: #768952 !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;

document.head.appendChild(activeNavStyles);
