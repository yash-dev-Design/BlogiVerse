// Blog Data Management System
class BlogManager {
    constructor() {
        this.posts = [];
        this.defaultPosts = [
            {
                id: 'default-1',
                title: "The Future of AI in Everyday Life",
                category: "technology",
                image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
                excerpt: "Explore how artificial intelligence is set to transform various aspects of our daily routines, from smart homes to personalized experiences.",
                content: "Artificial Intelligence is rapidly becoming an integral part of our daily lives. From smart home devices that learn our preferences to personalized recommendations on streaming platforms, AI is quietly revolutionizing how we interact with technology. This comprehensive guide explores the current applications of AI in everyday scenarios and provides insights into what the future holds. We'll examine how AI-powered virtual assistants are becoming more sophisticated, how machine learning algorithms are improving healthcare diagnostics, and how autonomous vehicles are reshaping transportation. The integration of AI into our daily routines promises to make life more convenient, efficient, and personalized than ever before.",
                date: "May 28, 2025",
                comments: 3,
                author: "Tech Team"
            },
            {
                id: 'default-2',
                title: "Mindful Living: A Guide to Inner Peace",
                category: "lifestyle",
                image: "https://images.unsplash.com/photo-1659177121700-bc9c36da8a40?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWluZGZ1bCUyMExpdmluZyUzQSUyMEElMjBHdWlkZSUyMHRvJTIwSW5uZXIlMjBQZWFjZXxlbnwwfHwwfHx8MA%3D%3D",
                excerpt: "Discover practical tips and techniques for incorporating mindfulness into your busy life to achieve greater calm and well-being.",
                content: "In our fast-paced world, finding inner peace can seem like an impossible task. However, mindful living offers a pathway to tranquility that doesn't require dramatic life changes. This guide provides practical strategies for incorporating mindfulness into your daily routine, from simple breathing exercises you can do at your desk to mindful eating practices that enhance your relationship with food. We'll explore meditation techniques suitable for beginners, discuss the science behind mindfulness and its benefits for mental health, and provide actionable steps for creating a more mindful lifestyle. Whether you're dealing with stress, anxiety, or simply seeking greater life satisfaction, these evidence-based practices can help you cultivate lasting inner peace.",
                date: "May 25, 2025",
                comments: 5,
                author: "Wellness Team"
            },
            {
                id: 'default-3',
                title: "10 Must-Visit Destinations in Southeast Asia",
                category: "travel",
                image: "https://images.unsplash.com/photo-1704314315344-cd10b9779ce6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fDEwJTIwTXVzdCUyMFZpc2l0JTIwRGVzdGluYXRpb25zJTIwaW4lMjBTb3V0aGVhc3QlMjBBc2lhfGVufDB8fDB8fHww",
                excerpt: "Embark on a virtual journey through stunning landscapes and vibrant cultures with our top picks for your next adventure.",
                content: "Southeast Asia offers some of the world's most diverse and captivating travel experiences. From the bustling streets of Bangkok to the serene beaches of Bali, this region combines rich cultural heritage with breathtaking natural beauty. Our carefully curated list includes hidden gems and popular destinations alike: the ancient temples of Angkor Wat in Cambodia, the pristine islands of the Philippines, the vibrant street food scene in Vietnam, and the modern marvels of Singapore. Each destination offers unique experiences, from adventure activities like jungle trekking and scuba diving to cultural immersion through local festivals and traditional crafts. We provide practical travel tips, budget considerations, and the best times to visit each location to help you plan your perfect Southeast Asian adventure.",
                date: "May 22, 2025",
                comments: 8,
                author: "Travel Team"
            },
            {
                id: 'default-4',
                title: "Effective Study Habits for College Students",
                category: "education",
                image: "https://images.unsplash.com/photo-1682310916704-8f91c1a1b66b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEVmZmVjdGl2ZSUyMFN0dWR5JTIwSGFiaXRzJTIwZm9yJTIwQ29sbGVnZSUyMFN0dWRlbnRzfGVufDB8MHwwfHx8MA%3D%3D",
                excerpt: "Boost your academic performance with proven strategies for time management, note-taking, and exam preparation.",
                content: "Academic success in college requires more than just attending classes and completing assignments. This comprehensive guide reveals evidence-based study techniques that can significantly improve your learning efficiency and academic performance. We cover the science of memory and retention, explaining why certain study methods are more effective than others. Learn about active recall techniques, spaced repetition systems, and the Pomodoro Technique for time management. Discover how to create effective study schedules, optimize your study environment, and develop note-taking systems that actually help you learn. We also address common challenges like procrastination, test anxiety, and information overload, providing practical solutions that have helped thousands of students achieve their academic goals.",
                date: "May 19, 2025",
                comments: 2,
                author: "Education Team"
            },
            {
                id: 'default-5',
                title: "The Rise of Quantum Computing",
                category: "technology",
                image: "https://plus.unsplash.com/premium_photo-1700942979302-72ef87e43525?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhlJTIwUmlzZSUyMG9mJTIwUXVhbnR1bSUyMENvbXB1dGluZ3xlbnwwfDB8MHx8fDA%3D",
                excerpt: "Delve into the fascinating world of quantum computing and its potential to revolutionize industries and solve complex problems.",
                content: "Quantum computing represents one of the most significant technological breakthroughs of our time, promising to solve problems that are currently impossible for classical computers. This in-depth exploration covers the fundamental principles of quantum mechanics that make quantum computing possible, including superposition, entanglement, and quantum interference. We examine current applications in cryptography, drug discovery, financial modeling, and artificial intelligence, while also discussing the challenges that researchers face in building stable quantum systems. Learn about the major players in the quantum computing race, from IBM and Google to emerging startups, and understand how this technology could transform everything from weather prediction to supply chain optimization in the coming decades.",
                date: "May 16, 2025",
                comments: 6,
                author: "Tech Team"
            },
            {
                id: 'default-6',
                title: "Sustainable Living: Small Changes, Big Impact",
                category: "lifestyle",
                image: "https://plus.unsplash.com/premium_photo-1681827729342-f16ad41200e1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGVhbHRoeSUyMExpZmV8ZW58MHwwfDB8fHww",
                excerpt: "Learn about simple habits that can lead to a healthier planet and more fulfilling life, covering eco-friendly practices and sustainable choices.",
                content: "Creating a sustainable lifestyle doesn't require dramatic changes or significant financial investment. This practical guide demonstrates how small, consistent actions can contribute to environmental conservation while often saving money and improving quality of life. We explore energy-efficient home practices, sustainable transportation options, waste reduction strategies, and conscious consumption habits. Learn about the environmental impact of everyday choices, from the food we eat to the products we buy, and discover alternatives that are both eco-friendly and budget-conscious. The guide includes actionable tips for reducing your carbon footprint, supporting sustainable businesses, and inspiring others in your community to adopt environmentally responsible practices.",
                date: "May 14, 2025",
                comments: 4,
                author: "Lifestyle Team"
            }
        ];
        this.initializePosts();
    }

    initializePosts() {
        // Load posts from localStorage
        const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        
        // If no posts in storage, initialize with default posts
        if (storedPosts.length === 0) {
            this.posts = [...this.defaultPosts];
            this.savePosts();
        } else {
            // Merge stored posts with any missing default posts
            const storedIds = new Set(storedPosts.map(post => post.id));
            const missingDefaults = this.defaultPosts.filter(post => !storedIds.has(post.id));
            this.posts = [...storedPosts, ...missingDefaults];
            this.savePosts();
        }
    }

    savePosts() {
        localStorage.setItem('blogPosts', JSON.stringify(this.posts));
        // Trigger custom event for admin panel synchronization
        window.dispatchEvent(new CustomEvent('postsUpdated', { detail: this.posts }));
    }

    getAllPosts() {
        return [...this.posts].sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    addPost(post) {
        const newPost = {
            ...post,
            id: this.generateId(),
            date: this.formatDate(new Date()),
            author: post.author || 'User'
        };
        this.posts.unshift(newPost);
        this.savePosts();
        return newPost;
    }

    updatePost(id, updatedData) {
        const index = this.posts.findIndex(post => post.id === id);
        if (index !== -1) {
            this.posts[index] = { ...this.posts[index], ...updatedData };
            this.savePosts();
            return this.posts[index];
        }
        return null;
    }

    deletePost(id) {
        const index = this.posts.findIndex(post => post.id === id);
        if (index !== -1) {
            const deletedPost = this.posts.splice(index, 1)[0];
            this.savePosts();
            return deletedPost;
        }
        return null;
    }

    getPost(id) {
        return this.posts.find(post => post.id === id);
    }

    generateId() {
        return Date.now().toString() + Math.random().toString(36).substr(2, 9);
    }

    formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    filterPosts(category, searchTerm = '') {
        let filtered = this.getAllPosts();
        
        if (category && category !== 'all') {
            filtered = filtered.filter(post => 
                post.category.toLowerCase() === category.toLowerCase()
            );
        }
        
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(term) ||
                post.excerpt.toLowerCase().includes(term) ||
                post.content.toLowerCase().includes(term)
            );
        }
        
        return filtered;
    }
}

// Initialize blog manager
const blogManager = new BlogManager();

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const postsGrid = document.getElementById('posts-grid');
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');
    const loadingSpinner = document.getElementById('loading-spinner');

    // State variables
    let currentFilter = 'all';
    let currentSearch = '';
    let visiblePostsCount = 6;
    const postsPerLoad = 3;

    // Hamburger Menu Toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Posts Display Functions
    function createPostCard(post) {
        const defaultImage = 'https://placehold.co/400x250/cccccc/333333?text=No+Image';
        return `
            <div class="post-card fade-in-post" data-category="${post.category}" data-id="${post.id}">
                <img src="${post.image || defaultImage}" alt="${post.title}" class="post-image" 
                     onerror="this.onerror=null;this.src='${defaultImage}';">
                <div class="post-content">
                    <span class="post-category">${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <div class="post-meta">
                        <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                        <span><i class="far fa-comments"></i> ${post.comments || 0} Comments</span>
                    </div>
                </div>
            </div>
        `;
    }

    function displayPosts() {
        if (!postsGrid) return;

        const filteredPosts = blogManager.filterPosts(currentFilter, currentSearch);
        const postsToShow = filteredPosts.slice(0, visiblePostsCount);

        postsGrid.innerHTML = '';
        
        if (postsToShow.length === 0) {
            postsGrid.innerHTML = '<p class="text-center">No articles found matching your criteria.</p>';
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            return;
        }

        postsToShow.forEach(post => {
            postsGrid.insertAdjacentHTML('beforeend', createPostCard(post));
        });

        // Update load more button visibility
        if (loadMoreBtn) {
            loadMoreBtn.style.display = visiblePostsCount >= filteredPosts.length ? 'none' : 'block';
        }
    }

    // Filter functionality
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentFilter = button.dataset.category;
                visiblePostsCount = 6; // Reset visible count
                displayPosts();
            });
        });
    }

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            visiblePostsCount = 6; // Reset visible count
            displayPosts();
        });
    }

    // Load more functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visiblePostsCount += postsPerLoad;
            displayPosts();
        });
    }

    // Scroll to top functionality
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Message sent successfully!', 'success');
            contactForm.reset();
        });
    }

    // Newsletter form submission
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Subscribed to newsletter!', 'success');
            newsletterForm.reset();
        });
    }

    // Toast notification function
    function showToast(message, type = 'info') {
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.classList.add('toast');
            document.body.appendChild(toast);
        }

        toast.innerHTML = `
            <div class="toast-content">
                <i class="toast-icon fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
                <p>${message}</p>
            </div>
        `;
        toast.classList.add(type, 'show');

        setTimeout(() => {
            toast.classList.remove('show', type);
        }, 3000);
    }

    // Loading spinner
    if (loadingSpinner) {
        window.addEventListener('load', () => {
            loadingSpinner.style.display = 'none';
        });
    }

    // Listen for posts updates from other pages
    window.addEventListener('postsUpdated', () => {
        displayPosts();
    });

    // Initial display
    displayPosts();
});