const subscriptionBtn = document.getElementById('subscription-btn');
const dropdownMenu = document.getElementById('subscription-menu');
const arrow = document.getElementsByClassName('fa-chevron-down');

subscriptionBtn.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent click from bubbling up
    if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'block';
        arrow[0].style.transform = "rotate(-180deg)";
    } else {
        dropdownMenu.style.display = 'none';
        arrow[0].style.transform = "rotate(0deg)";
    }
});

// Hide subscription menu on scroll
window.addEventListener('scroll', function() {
    dropdownMenu.style.display = 'none';
    arrow[0].style.transform = "rotate(0deg)";
});

// Hide subscription menu when clicking outside
document.addEventListener('click', function(event) {
    if (
        dropdownMenu.style.display === 'block' &&
        !dropdownMenu.contains(event.target) &&
        !subscriptionBtn.contains(event.target)
    ) {
        dropdownMenu.style.display = 'none';
        arrow[0].style.transform = "rotate(0deg)";
    }
});
