// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Navigation arrows visibility (for single post page)
window.addEventListener('scroll', function() {
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');
    
    if (prevArrow && nextArrow) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Show arrows when scrolled past navbar
        if (scrollY > 100 && scrollY < documentHeight - windowHeight - 200) {
            prevArrow.classList.add('show');
            nextArrow.classList.add('show');
        } else {
            prevArrow.classList.remove('show');
            nextArrow.classList.remove('show');
        }
    }
});

// Navigation arrow clicks (for single post page)
document.addEventListener('DOMContentLoaded', function() {
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');
    
    if (prevArrow) {
        prevArrow.addEventListener('click', function() {
            // Navigate to previous article
            window.location.href = '#previous-article';
        });
    }
    
    if (nextArrow) {
        nextArrow.addEventListener('click', function() {
            // Navigate to next article
            window.location.href = '#next-article';
        });
    }
});

// Share functionality
function shareContent(platform, title = null) {
    const articleTitle = title || document.querySelector('.article-title, .post-title a')?.textContent || 'Check this out!';
    const url = window.location.href;
    
    switch(platform) {
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(articleTitle)}&url=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'bookmark':
            alert('Article bookmarked!');
            break;
        default:
            if (navigator.share) {
                navigator.share({ title: articleTitle, url: url });
            } else {
                alert(`Share: ${articleTitle}`);
            }
            break;
    }
}

// Add event listeners to share buttons
document.addEventListener('DOMContentLoaded', function() {
    // Share buttons in post cards (home page)
    document.querySelectorAll('.share-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const postTitle = this.closest('.post-card').querySelector('.post-title a').textContent;
            
            if (this.querySelector('.bi-twitter')) {
                shareContent('twitter', postTitle);
            } else if (this.querySelector('.bi-facebook')) {
                shareContent('facebook', postTitle);
            } else if (this.querySelector('.bi-bookmark')) {
                shareContent('bookmark', postTitle);
            }
        });
    });
    
    // Action buttons in article meta (single page)
    document.querySelectorAll('.action-btn').forEach(button => {
        button.addEventListener('click', function() {
            if (this.querySelector('.bi-twitter')) {
                shareContent('twitter');
            } else if (this.querySelector('.bi-facebook')) {
                shareContent('facebook');
            } else if (this.querySelector('.bi-bookmark')) {
                shareContent('bookmark');
            }
        });
    });
    
    // Footer action buttons (single page)
    document.querySelectorAll('.footer-action-btn').forEach(button => {
        button.addEventListener('click', function() {
            if (this.querySelector('.bi-twitter')) {
                shareContent('twitter');
            } else if (this.querySelector('.bi-facebook')) {
                shareContent('facebook');
            } else if (this.querySelector('.bi-bookmark')) {
                shareContent('bookmark');
            }
        });
    });
    
    // Related posts share functionality (single page)
    document.querySelectorAll('.related-share-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const relatedCard = this.closest('.related-card');
            const title = relatedCard.querySelector('.related-title-link a').textContent;
            
            if (this.querySelector('.bi-twitter')) {
                shareContent('twitter', title);
            } else if (this.querySelector('.bi-facebook')) {
                shareContent('facebook', title);
            } else if (this.querySelector('.bi-bookmark')) {
                shareContent('bookmark', title);
            }
        });
    });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
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
});

// Pagination functionality (home page)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.pagination a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Don't process disabled links
            if (this.closest('li').classList.contains('disabled')) {
                return;
            }
            
            // Remove active class from all pagination items
            document.querySelectorAll('.pagination .active').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked item (if it's a number)
            if (!this.classList.contains('prev-next')) {
                this.closest('li').classList.add('active');
            }
            
            // Here you would typically load new content
            // For demo purposes, we'll just scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Update pagination info (demo)
            const pageNum = this.textContent.trim();
            if (!isNaN(pageNum)) {
                const info = document.querySelector('.pagination-info');
                if (info) {
                    const start = (parseInt(pageNum) - 1) * 8 + 1;
                    const end = parseInt(pageNum) * 8;
                    info.textContent = `Showing ${start}-${end} of 160 stories`;
                }
            }
        });
    });
});

// Tag clicks
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            const tagName = this.textContent;
            // Navigate to tag page
            console.log(`Navigate to tag: ${tagName}`);
        });
    });
});

// Reading time calculator
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.post-excerpt').forEach(excerpt => {
        const wordCount = excerpt.textContent.split(' ').length;
        const readTime = Math.ceil(wordCount / 200); // 200 words per minute
        const metaElement = excerpt.closest('.post-card').querySelector('.post-meta');
        // Could update reading time dynamically here
    });
});

// Reading progress indicator (optional enhancement for single page)
function updateReadingProgress() {
    const article = document.querySelector('.article-content');
    if (article) {
        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        
        const progress = Math.min(
            Math.max((scrollTop - articleTop + windowHeight * 0.5) / articleHeight, 0),
            1
        );
        
        // You can use this progress value to update a progress bar
        // console.log('Reading progress:', Math.round(progress * 100) + '%');
    }
}

// Initialize reading progress on single pages
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.article-content')) {
        window.addEventListener('scroll', updateReadingProgress);
        updateReadingProgress();
    }
});