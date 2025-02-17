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
    'Perfect-Pitch': 'Perfect-Pitch is a powerful web app built with <b>Ruby on Rails</b> that creates professional PowerPoint slides using AI from just an idea. Whether you need a business presentation or an academic slideshow, Perfect-Pitch generates high-quality slides with relevant content and visuals in seconds. <a href="https://www.perfect-pitch.co.uk/" target="_blank">Check it out here!</a>',

    'SurfEasy': 'SurfEasy is a dynamic web app developed using <b>Ruby on Rails</b>, designed for surfing enthusiasts. Users can rent surfboards or list their own for rent, making it easy to find the perfect gear for their next adventure.',

    'Awesome Garage': 'Awesome Garage is a feature-rich platform, built with <b>Ruby on Rails</b>, that allows car owners to manage maintenance schedules, track service history, and organize vehicle-related tasks efficiently. It also includes a bookmarking feature to save favorite car, ensuring your vehicle stays in your Favourite list.',

    'CookBook': 'CookBook is a beautifully crafted **recipe-sharing platform** developed using <b>Ruby on Rails</b>. Users can explore a vast collection of recipes, share their own creations, and easily bookmark their favorite recipes for quick access later. Whether you are a home cook or a professional chef, CookBook makes discovering and organizing recipes effortless!'
  };


  document.getElementById('modal-description').innerHTML = descriptions[project] || 'No description available.';
}

// Function to close the modal
function closeModal() {
  document.getElementById('project-modal').style.display = "none";
}
