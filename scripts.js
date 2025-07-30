const subscriptionBtn = document.getElementById('subscription-btn');
const dropdownMenu = document.getElementById('subscription-menu');
const arrow = document.getElementsByClassName('fa-chevron-down');


subscriptionBtn.addEventListener('click', function(event) {

    if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'block' ; 
        
        arrow[0].style.transform = "scaleY(-1)"; // vertical flip
    }else {
        dropdownMenu.style.display = 'none';
        
        arrow[0].style.transform = "scaleY(1)"; // remove vertical flip
    }
});
