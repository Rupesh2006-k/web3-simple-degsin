// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form validation
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            if (input.type === 'email' && !validateEmail(input.value)) {
                input.classList.add('border-red-500');
                isValid = false;
            } else if (input.required && !input.value.trim()) {
                input.classList.add('border-red-500');
                isValid = false;
            } else {
                input.classList.remove('border-red-500');
            }
        });
        
        if (isValid) {
            // In a real app, you would submit the form here
            alert('Thank you for your submission! We will get back to you soon.');
            form.reset();
        } else {
            alert('Please fill out all required fields correctly.');
        }
    });
});

// Intersection Observer for scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Add event listeners for mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Wallet connection simulation
    const connectWalletButtons = document.querySelectorAll('.connect-wallet');
    connectWalletButtons.forEach(button => {
        button.addEventListener('click', () => {
            // In a real app, this would connect to a wallet like MetaMask
            alert('Wallet connection would be implemented here. In a real app, this would connect to MetaMask or another wallet provider.');
        });
    });
});

// Dashboard specific functionality
if (window.location.pathname.includes('dashboard.html')) {
    // Simulate real-time data updates
    setInterval(() => {
        const randomValue = Math.floor(Math.random() * 10) + 1;
        const elements = document.querySelectorAll('.random-value');
        
        elements.forEach(element => {
            const currentValue = parseInt(element.textContent.replace(/,/g, ''));
            const newValue = currentValue + randomValue;
            element.textContent = newValue.toLocaleString();
        });
    }, 3000);
    
    // Chart interaction
    const chartBars = document.querySelectorAll('.chart-bar');
    chartBars.forEach(bar => {
        bar.addEventListener('mouseenter', () => {
            bar.style.opacity = '0.8';
        });
        
        bar.addEventListener('mouseleave', () => {
            bar.style.opacity = '1';
        });
    });
}

// Testimonial slider functionality
const initTestimonialSlider = () => {
    const slider = document.querySelector('.testimonial-slider');
    if (!slider) return;
    
    const testimonials = slider.querySelectorAll('div');
    const testimonialWidth = testimonials[0].offsetWidth;
    let currentPosition = 0;
    
    setInterval(() => {
        currentPosition -= testimonialWidth;
        if (currentPosition <= -testimonialWidth * (testimonials.length / 2)) {
            currentPosition = 0;
        }
        slider.style.transform = `translateX(${currentPosition}px)`;
    }, 3000);
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initTestimonialSlider);