document.querySelectorAll('.project-link').forEach(link => {
    const video = link.querySelector('video');

    link.addEventListener('mouseenter', () => {
        video.currentTime = 0; // Reset video to start
        video.play();          // Play the video
    });

    link.addEventListener('mouseleave', () => {
        video.pause();         // Pause the video when not hovering
        video.currentTime = 0; // Optionally reset video to start
    });
});
