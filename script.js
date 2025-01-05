// Number of stars in the starfield
const numStars = 200;
const starfield = document.getElementById('starfield');

// Create stars and set random positions and animations
for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Set random position for the star
  const xPosition = Math.random() * window.innerWidth;
  const yPosition = Math.random() * window.innerHeight;

  // Set random animation direction and duration
  const xDirection = (Math.random() - 0.5) * 100;  // Random movement on x-axis
  const yDirection = (Math.random() - 0.5) * 100;  // Random movement on y-axis
  const duration = Math.random() * 5 + 3;  // Random animation duration between 3 and 8 seconds

  // Set custom properties for animation
  star.style.left = `${xPosition}px`;
  star.style.top = `${yPosition}px`;
  star.style.setProperty('--x', `${xDirection}px`);
  star.style.setProperty('--y', `${yDirection}px`);
  star.style.animationDuration = `${duration}s`;

  // Append the star to the starfield container
  starfield.appendChild(star);
}
