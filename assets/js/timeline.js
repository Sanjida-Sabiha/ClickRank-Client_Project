window.addEventListener('scroll', function () {
    const timeline = document.getElementById('timeline-line');
    const timelineContainer = timeline.parentElement;
    const lastItem = document.getElementById('last-item');

    // Get the positions of the container and the last item
    const containerRect = timelineContainer.getBoundingClientRect();
    const lastItemRect = lastItem.getBoundingClientRect();

    // Calculate how much of the container has scrolled into view
    const scrollPercent = Math.max(0, Math.min(1, (window.innerHeight - containerRect.top) / window.innerHeight));
    
    // Calculate the max height as the top position of the last item
    const maxHeight = lastItemRect.top - containerRect.top + (lastItemRect.height / 40);

    // Set the height of the timeline line based on scroll progress, but do not exceed the max height
    const newHeight = scrollPercent * (timelineContainer.offsetHeight);
    timeline.style.height = `${Math.min(newHeight, maxHeight)}px`;
  });







  document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init();

    const zoomOutDiv = document.getElementById('zoom-out-div');

    // Ensure the element is found
    if (zoomOutDiv) {
        // Set initial scale and opacity
        zoomOutDiv.style.transformOrigin = 'center';
        zoomOutDiv.style.transform = 'scale(1.01)';
        zoomOutDiv.style.opacity = '0.1'; // Initial opacity

        // Scroll event listener
        window.addEventListener('scroll', () => {
            const windowWidth = window.innerWidth;

            // Log the current screen width for debugging
            console.log('Window width:', windowWidth);

            // Apply the animation only for screens 1290px or larger
            if (windowWidth >= 1290) {
                const rect = zoomOutDiv.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Log the div's position relative to the viewport
                console.log('Div rect:', rect);

                // Check if the div is within the viewport
                if (rect.top < windowHeight && rect.bottom > 0) {
                    const scrollY = window.scrollY;

                    // Calculate scale and opacity
                    const scaleValue = Math.max(1.01 - (scrollY / 3000), 1); // Scale down from 1.01 to 1
                    const opacityValue = Math.min(0.1 + (scrollY / 2000), 1); // Increase opacity from 0.1 to 1

                    // Log scale and opacity values for debugging
                    console.log('Scale:', scaleValue, 'Opacity:', opacityValue);

                    // Apply scale and opacity
                    zoomOutDiv.style.transform = `scale(${scaleValue})`;
                    zoomOutDiv.style.opacity = opacityValue;
                }
            } else {
                // Reset styles for smaller screens
                zoomOutDiv.style.transform = 'scale(1)';
                zoomOutDiv.style.opacity = '1';
                console.log('Reset styles for smaller screens');
            }
        });
    } else {
        console.error('zoom-out-div element not found');
    }
});
