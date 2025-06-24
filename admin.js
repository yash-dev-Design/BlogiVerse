// Admin Panel Management System
class AdminManager {
    constructor() {
        this.posts = [];
        this.currentEditPostId = null;
        this.postToDeleteId = null;
        this.initializeAdmin();
    }

    initializeAdmin() {
        // Check authentication
        if (sessionStorage.getItem('isAdminLoggedIn') !== 'true') {
            // For demo purposes, auto-login
            sessionStorage.setItem('isAdminLoggedIn', 'true');
        }

        this.loadPosts();
        this.bindEvents();
        this.updateDashboard();
        this.renderRecentPosts();
        this.renderManagePostsTable();
    }

    loadPosts() {
        this.posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    }

    savePosts() {
        localStorage.setItem('blogPosts', JSON.stringify(this.posts));
        // Trigger update event for other pages
        window.dispatchEvent(new CustomEvent('postsUpdated', { detail: this.posts }));
        
        // Also save to a separate key for main site synchronization
        localStorage.setItem('publishedPosts', JSON.stringify(this.posts));
        
        console.log('Posts saved successfully:', this.posts.length, 'posts');
    }

    bindEvents() {
        // Navigation
        document.querySelectorAll('.sidebar-menu .menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchSection(item.dataset.section);
            });
        });

        // Logout
        document.getElementById('logout-btn').addEventListener('click', () => {
            sessionStorage.removeItem('isAdminLoggedIn');
            this.showToast('Logged out successfully!', 'info');
            // For demo, just reload the page
            setTimeout(() => location.reload(), 1000);
        });

        // Add post form
        document.getElementById('add-post-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addPost();
        });

        // Edit post form
        document.getElementById('edit-post-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.updatePost();
        });

        // Search and filter
        document.getElementById('manage-posts-search').addEventListener('input', () => {
            this.renderManagePostsTable();
        });

        document.getElementById('manage-posts-filter-category').addEventListener('change', () => {
            this.renderManagePostsTable();
        });

        // Modal controls
        this.bindModalEvents();

        // Listen for posts updates from other pages
        window.addEventListener('postsUpdated', () => {
            this.loadPosts();
            this.updateDashboard();
            this.renderRecentPosts();
            this.renderManagePostsTable();
        });
    }

    bindModalEvents() {
        // Edit modal
        document.getElementById('edit-modal-close').addEventListener('click', () => {
            this.hideModal('edit-post-modal-overlay');
        });
        document.getElementById('edit-modal-cancel').addEventListener('click', () => {
            this.hideModal('edit-post-modal-overlay');
        });

        // Delete modal
        document.getElementById('delete-modal-close').addEventListener('click', () => {
            this.hideModal('delete-confirm-modal-overlay');
        });
        document.getElementById('cancel-delete-btn').addEventListener('click', () => {
            this.hideModal('delete-confirm-modal-overlay');
        });
        document.getElementById('confirm-delete-btn').addEventListener('click', () => {
            this.deletePost();
        });

        // Close modals when clicking overlay
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    this.hideModal(overlay.id);
                }
            });
        });

        // Prevent modal close when clicking inside modal
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    }

    switchSection(sectionId) {
        // Update menu active state
        document.querySelectorAll('.sidebar-menu .menu-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

        // Update section active state
        document.querySelectorAll('.admin-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');

        // Refresh data for specific sections
        if (sectionId === 'dashboard') {
            this.updateDashboard();
            this.renderRecentPosts();
        } else if (sectionId === 'manage-posts') {
            this.renderManagePostsTable();
        }
    }

    updateDashboard() {
        const totalPosts = this.posts.length;
        const totalComments = this.posts.reduce((sum, post) => sum + (post.comments || 0), 0);

        document.getElementById('total-posts').textContent = totalPosts;
        document.getElementById('total-comments').textContent = totalComments;
    }

    renderRecentPosts() {
        const recentPostsList = document.getElementById('recent-posts-list');
        
        if (this.posts.length === 0) {
            recentPostsList.innerHTML = '<p class="text-center">No posts available. <a href="#" onclick="adminManager.switchSection(\'add-post\')">Create your first post!</a></p>';
            return;
        }

        const recentPosts = [...this.posts]
            .sort((a, b) => new Date(b.dateCreated || b.date) - new Date(a.dateCreated || a.date))
            .slice(0, 5);

        recentPostsList.innerHTML = recentPosts.map(post => `
            <div class="recent-post-item">
                <img src="${post.image || 'https://placehold.co/60x60/d1d5db/374151?text=NoImg'}" alt="${post.title}" class="recent-post-image" 
                     onerror="this.onerror=null;this.src='https://placehold.co/60x60/d1d5db/374151?text=NoImg';">
                <div class="recent-post-content">
                    <h4 class="recent-post-title">${post.title}</h4>
                    <p class="recent-post-meta">
                        <span class="category">${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span> • 
                        <span class="author">${post.author || 'Unknown'}</span> • 
                        <span class="date">${post.date}</span>
                    </p>
                </div>
            </div>
        `).join('');
    }

    renderManagePostsTable() {
        const tableBody = document.getElementById('posts-table-body');
        const searchQuery = document.getElementById('manage-posts-search').value.toLowerCase();
        const filterCategory = document.getElementById('manage-posts-filter-category').value;

        let filteredPosts = this.posts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery) ||
                                  post.excerpt.toLowerCase().includes(searchQuery) ||
                                  (post.author || '').toLowerCase().includes(searchQuery);
            const matchesCategory = filterCategory === 'all' || post.category === filterCategory;
            return matchesSearch && matchesCategory;
        });

        if (filteredPosts.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="6" class="text-center">No posts found.</td></tr>';
            return;
        }

        tableBody.innerHTML = filteredPosts.map(post => `
            <tr>
                <td class="post-title-cell">
                    <div class="post-title-content">
                        <strong>${post.title}</strong>
                        <p class="post-excerpt-preview">${post.excerpt.substring(0, 100)}${post.excerpt.length > 100 ? '...' : ''}</p>
                    </div>
                </td>
                <td><span class="category-badge category-${post.category}">${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span></td>
                <td>${post.author || 'Unknown'}</td>
                <td>${post.date}</td>
                <td>${post.comments || 0}</td>
                <td class="actions-cell">
                    <button class="action-btn edit-btn" onclick="adminManager.openEditModal('${post.id}')" title="Edit Post">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete-btn" onclick="adminManager.openDeleteModal('${post.id}')" title="Delete Post">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }

    addPost() {
        const formData = this.getFormData('add-post-form');
        
        if (!this.validatePostData(formData)) {
            return;
        }

        const newPost = {
            id: this.generateId(),
            ...formData,
            date: this.formatDate(new Date()),
            dateCreated: new Date().toISOString(),
            comments: 0,
            published: true
        };

        this.posts.unshift(newPost);
        this.savePosts();
        
        document.getElementById('add-post-form').reset();
        this.showToast('Post added successfully and published to main site!', 'success');
        
        // Switch to manage posts to show the new post
        setTimeout(() => {
            this.switchSection('manage-posts');
        }, 1500);
    }

    openEditModal(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        this.currentEditPostId = postId;
        
        // Populate form fields
        document.getElementById('edit-post-id').value = post.id;
        document.getElementById('edit-post-title').value = post.title;
        document.getElementById('edit-post-category').value = post.category;
        document.getElementById('edit-post-author').value = post.author || '';
        document.getElementById('edit-post-image-url').value = post.image || '';
        document.getElementById('edit-post-excerpt').value = post.excerpt;
        document.getElementById('edit-post-content').value = post.content;

        this.showModal('edit-post-modal-overlay');
    }

    updatePost() {
        if (!this.currentEditPostId) return;

        const formData = this.getFormData('edit-post-form');
        
        if (!this.validatePostData(formData)) {
            return;
        }

        const postIndex = this.posts.findIndex(p => p.id === this.currentEditPostId);
        if (postIndex !== -1) {
            this.posts[postIndex] = {
                ...this.posts[postIndex],
                ...formData,
                lastModified: new Date().toISOString()
            };
            
            this.savePosts();
            this.hideModal('edit-post-modal-overlay');
            this.showToast('Post updated successfully!', 'success');
            this.renderManagePostsTable();
            this.updateDashboard();
            this.renderRecentPosts();
        }
    }

    openDeleteModal(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        this.postToDeleteId = postId;
        
        // Show post preview in delete modal
        document.getElementById('delete-post-preview').innerHTML = `
            <div class="delete-preview">
                <h4>${post.title}</h4>
                <p><strong>Category:</strong> ${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</p>
                <p><strong>Author:</strong> ${post.author || 'Unknown'}</p>
                <p><strong>Date:</strong> ${post.date}</p>
            </div>
        `;

        this.showModal('delete-confirm-modal-overlay');
    }

    deletePost() {
        if (!this.postToDeleteId) return;

        const postIndex = this.posts.findIndex(p => p.id === this.postToDeleteId);
        if (postIndex !== -1) {
            const deletedPost = this.posts[postIndex];
            this.posts.splice(postIndex, 1);
            this.savePosts();
            this.hideModal('delete-confirm-modal-overlay');
            this.showToast(`Post "${deletedPost.title}" deleted successfully!`, 'error');
            this.renderManagePostsTable();
            this.updateDashboard();
            this.renderRecentPosts();
        }
        
        this.postToDeleteId = null;
    }

    getFormData(formId) {
        const form = document.getElementById(formId);
        const prefix = formId.replace('-form', '');
        
        return {
            title: form.querySelector(`#${prefix}-title`).value.trim(),
            category: form.querySelector(`#${prefix}-category`).value,
            author: form.querySelector(`#${prefix}-author`).value.trim(),
            image: form.querySelector(`#${prefix}-image-url`).value.trim(),
            excerpt: form.querySelector(`#${prefix}-excerpt`).value.trim(),
            content: form.querySelector(`#${prefix}-content`).value.trim()
        };
    }

    validatePostData(data) {
        if (!data.title || !data.category || !data.excerpt || !data.content) {
            this.showToast('Please fill in all required fields!', 'error');
            return false;
        }
        
        if (data.title.length < 5) {
            this.showToast('Title must be at least 5 characters long!', 'error');
            return false;
        }
        
        if (data.excerpt.length < 20) {
            this.showToast('Excerpt must be at least 20 characters long!', 'error');
            return false;
        }
        
        if (data.content.length < 50) {
            this.showToast('Content must be at least 50 characters long!', 'error');
            return false;
        }

        // Validate image URL if provided
        if (data.image && !this.isValidUrl(data.image)) {
            this.showToast('Please enter a valid image URL!', 'error');
            return false;
        }

        return true;
    }

    isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Focus first input in modal
        setTimeout(() => {
            const firstInput = modal.querySelector('input, textarea, select');
            if (firstInput) firstInput.focus();
        }, 100);
    }

    hideModal(modalId) {
        document.getElementById(modalId).classList.remove('show');
        document.body.style.overflow = 'auto';
        this.currentEditPostId = null;
    }

    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');
        const toastIcon = toast.querySelector('.toast-icon');

        toastMessage.textContent = message;
        
        // Remove existing type classes
        toast.classList.remove('success', 'error', 'info');
        
        // Add new type class and icon
        toast.classList.add('show', type);
        
        if (type === 'success') {
            toastIcon.className = 'toast-icon fas fa-check-circle';
        } else if (type === 'error') {
            toastIcon.className = 'toast-icon fas fa-exclamation-circle';
        } else {
            toastIcon.className = 'toast-icon fas fa-info-circle';
        }

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    generateId() {
        return Date.now().toString() + Math.random().toString(36).substr(2, 9);
    }

    formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    // Method to export posts for debugging
    exportPosts() {
        console.log('Current posts:', this.posts);
        return this.posts;
    }

    // Method to import sample posts for testing
    addSamplePosts() {
        const samplePosts = [
            {
                id: this.generateId(),
                title: "Getting Started with Web Development",
                category: "technology",
                author: "John Doe",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
                excerpt: "Learn the fundamentals of web development including HTML, CSS, and JavaScript basics.",
                content: "Web development is an exciting field that combines creativity with technical skills. In this comprehensive guide, we'll explore the essential technologies that power the modern web...",
                date: this.formatDate(new Date()),
                dateCreated: new Date().toISOString(),
                comments: 5,
                published: true
            },
            {
                id: this.generateId(),
                title: "The Art of Minimalist Living",
                category: "lifestyle",
                author: "Jane Smith",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
                excerpt: "Discover how minimalism can transform your life and bring more focus to what truly matters.",
                content: "Minimalism isn't just about having fewer possessions; it's about making room for what matters most. This lifestyle philosophy can help reduce stress, increase focus, and improve overall well-being...",
                date: this.formatDate(new Date(Date.now() - 86400000)),
                dateCreated: new Date(Date.now() - 86400000).toISOString(),
                comments: 12,
                published: true
            }
        ];

        this.posts = [...samplePosts, ...this.posts];
        this.savePosts();
        this.updateDashboard();
        this.renderRecentPosts();
        this.renderManagePostsTable();
        this.showToast('Sample posts added successfully!', 'success');
    }
}

// Initialize admin manager when DOM is loaded
let adminManager;
document.addEventListener('DOMContentLoaded', () => {
    adminManager = new AdminManager();
    
    // Add sample posts if no posts exist (for demo purposes)
    if (adminManager.posts.length === 0) {
        console.log('No posts found, adding sample posts...');
        setTimeout(() => {
            adminManager.addSamplePosts();
        }, 1000);
    }
});

// Global functions for onclick handlers
window.adminManager = null;
document.addEventListener('DOMContentLoaded', () => {
    window.adminManager = adminManager;
});