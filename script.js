// script.js

// Active navigation link highlighting
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

console.log("👋 Hi, I'm Elif. Welcome to my portfolio.");
