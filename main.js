//Toggling Menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if(toggle && nav) {
      toggle.addEventListener('click', () => {
          nav.classList.toggle('show');
      })
  }
}

showMenu('nav-toggle', 'nav-menu');

//Toggling Active Link
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Reveal

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

sr.reveal('.home-title', {} )
sr.reveal('.button', {delay: 200} )
sr.reveal('.home-img', {delay: 400} )
sr.reveal('.home-social', {delay: 400,} )

sr.reveal('.about-img', {} )
sr.reveal('.about-subtitle', {delay: 200} )
sr.reveal('.about-text', {delay: 400} )

sr.reveal('.skills-subtitle', {delay: 100} )
sr.reveal('.skills-text', {delay: 150} )
sr.reveal('.skills-data', {interval: 200} )
sr.reveal('.skills-img', {delay: 400} )

sr.reveal('.work-img', {interval: 200} )

sr.reveal('.contact-input', {interval: 200} )

//modal

function openModal(project) {
  document.getElementById('project-modal').style.display = "block";
  document.getElementById('modal-title').textContent = project;

  // You can add project-specific descriptions here, or dynamically load them
  const descriptions = {
    'Perfect-Pitch': 'A web app that creates PowerPoint slides using AI from an idea.',
    'SurfEasy': 'An app that helps users find the best surfing spots with live weather data.',
    'Awesome Garage': 'A platform to manage and organize car-related maintenance and logs.',
    'CookBook': 'A recipe sharing platform where users can explore and share their favorite recipes.'
  };

  document.getElementById('modal-description').textContent = descriptions[project] || 'No description available.';
}

// Function to close the modal
function closeModal() {
  document.getElementById('project-modal').style.display = "none";
}
