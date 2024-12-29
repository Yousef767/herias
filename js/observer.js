// Select all sections with the class 'catInner'
const sections = document.querySelectorAll('.catInner');

const observerOptions = {
  root: null, // Use the viewport as the root
  threshold: 0.25 // Trigger when 50% of the section is visible
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    const h1Container = entry.target.querySelector('.h1');
    if (entry.isIntersecting) {
      h1Container.classList.add('noAfter');
    } else {
      h1Container.classList.remove('noAfter');
    }
  });
};

// Create the observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe each section
sections.forEach((section) => observer.observe(section));
