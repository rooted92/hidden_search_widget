const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// Add event listener to btn
btn.addEventListener('click', () => {
    // Toggle class active
    search.classList.toggle('active');
    // Focus on input
    input.focus();
});

