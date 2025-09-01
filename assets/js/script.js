const featuresDropdown = document.getElementById('featuresDropdown');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    featuresDropdown.addEventListener('mouseenter', () => {
        dropdownMenu.classList.remove('hidden');
    });

    featuresDropdown.addEventListener('mouseleave', () => {
        dropdownMenu.classList.add('hidden');
    });

    // Mobile Menu Functionality
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOpenIcon = document.getElementById('menuOpenIcon');
    const menuCloseIcon = document.getElementById('menuCloseIcon');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuOpenIcon.classList.toggle('hidden');
        menuCloseIcon.classList.toggle('hidden');
    });


    // Mobile Menu Functionality for Features Dropdown
    const mobileFeaturesToggle = document.getElementById('mobileFeaturesToggle');
    const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');
    const mobileDropdownIcon = document.getElementById('mobileDropdownIcon');

    mobileFeaturesToggle.addEventListener('click', () => {
        // Toggle the dropdown menu visibility
        mobileDropdownMenu.classList.toggle('hidden');
        
        // Rotate the icon 180 degrees when dropdown is shown
        mobileDropdownIcon.classList.toggle('rotate-180');
    });