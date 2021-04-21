const ele = document.getElementById('header');
ele.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

ele.addEventListener('contextmenu', function(e) {
    const rect = ele.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set the styling for menu
    menu.style.top = `${y}px`;
    menu.style.left = `${x}px`;
    menu.style.transform = "translate(56%, 100%)";
    menu.style.listStyleType = "none";
    menu.style.fontFamily = "Comic Sans MS";
    menu.style.color = "white";
    menu.style.textShadow = "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px purple, 0 0 20px purple, 0 0 20px purple, 0 0 20px purple";

    // Show the menu
    menu.classList.remove('hidden');

    document.addEventListener('click', documentClickHandler);
});

// Hide the menu when clicking outside of it
const documentClickHandler = function(e) {
    const isClickedOutside = !menu.contains(e.target);
    if (isClickedOutside) {
        // Hide the menu
        menu.classList.add('hidden');

        // Remove the event handler
        document.removeEventListener('click', documentClickHandler);
    }
};