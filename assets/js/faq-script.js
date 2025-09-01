
        function toggleAccordion(element) {
        const items = document.querySelectorAll('.accordion-item');
        const toggleContent = element.nextElementSibling;
        const svgIcon = element.querySelector('svg');
        const path = svgIcon.querySelector('.icon');

        // Close all other accordion items
        items.forEach(item => {
            if (item !== element.parentElement) {
            const content = item.querySelector('.toggle');
            const icon = item.querySelector('.icon');
            const svg = item.querySelector('svg');

            content.style.maxHeight = null; // Reset max-height
            content.classList.add('hidden'); // Hide content
            svg.classList.remove('rotate-180');
            icon.setAttribute('d', 'M12 5v14M5 12h14'); // Reset to plus icon
            svg.classList.remove('bg-[#070127]');
            svg.classList.add('bg-mainBg');
            svg.setAttribute('stroke', 'currentColor'); // Reset stroke color
            }
        });

        // Toggle the clicked accordion
        if (toggleContent.classList.contains('hidden')) {
            // Opening the content
            toggleContent.classList.remove('hidden');
            toggleContent.style.maxHeight = toggleContent.scrollHeight + "px"; // Set max-height to the scroll height
            svgIcon.classList.add('rotate-180');

            path.setAttribute('d', 'M5 12h14'); // Minus icon
            svgIcon.classList.remove('bg-mainBg'); // Remove background mainBg
            svgIcon.classList.add('bg-[#070127]'); // Set background to black
            svgIcon.setAttribute('stroke', 'white'); // Icon color to white
        } else {
            // Closing the content
            toggleContent.style.maxHeight = null; // Reset max-height
            toggleContent.classList.add('hidden'); // Hide content
            svgIcon.classList.remove('rotate-180');

            path.setAttribute('d', 'M12 5v14M5 12h14'); // Plus icon
            svgIcon.classList.remove('bg-[#070127]'); // Remove black background
            svgIcon.classList.add('bg-mainBg'); // Add background mainBg
            svgIcon.setAttribute('stroke', 'currentColor'); // Reset stroke color to default
        }
        }

        document.addEventListener('DOMContentLoaded', () => {
        const firstAccordion = document.querySelector('.accordion-item:first-child');
        if (firstAccordion) {
            const toggleContent = firstAccordion.querySelector('.toggle');
            const svgIcon = firstAccordion.querySelector('svg');
            const path = svgIcon.querySelector('.icon');

            // Set styles for the first opened accordion item
            toggleContent.classList.remove('hidden');
            toggleContent.style.maxHeight = toggleContent.scrollHeight + "px"; // Set max-height for the first item
            svgIcon.classList.add('bg-[#070127]'); // Set background to black
            svgIcon.setAttribute('stroke', 'white'); // Set icon color to white
            path.setAttribute('d', 'M5 12h14'); // Set to minus icon
        }
        });
  