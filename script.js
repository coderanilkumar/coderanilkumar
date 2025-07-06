// Portfolio Data
const projects = [
  {
    title: "EDUHUB",
    description: "A Platform which provides you links of best free learning resources on internet.Which saves your time & improve efficiency.",
    link: "#",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Portfolio Website",
    description: "A portfolio website of myself which is currently watching.",
    link: "#",
    tags: ["React", "Node.js"]
  }
];

const skills = [
  "C++","DSA","HTML", "CSS3", "JavaScript", "React", "TheVinciResolve", "Blender","Figma", "VS Code"
];

const timeline = [
  { year: "2023 - Present", title: "UIT RGPV Shivpuri", desc: "B.Tech in Computer Science & Engineering" },
  { year: "2019-22", title: "Govt.higher Secondary School Chandera", desc: "10th-91.75%  \n  12th-77.60%" },
  { year: "Till 2018", title: "Saint Xavier's School Jatara", desc: "" }
];

const certificates = [
  {
    title: "Hackathon Participation",
    issuer: "Indo-Tibetan Border Police",
    date: "Jan 2025",
    link: "https://www.linkedin.com/in/coderanilkumar/details/certifications/1750079130591/single-media-viewer/?profileId=ACoAAEaBws0B01mqQCg1QM0bhxjIE-z7O76LGCk"
  },
  {
    title: "CHATGPT",
    issuer: "Coding Ninjas",
    date: "Oct 2024",
    link: "https://files.codingninjas.in/certi_image66053061645f2d162a3648a50a2e6303540653.jpg"
  },
  {
    title: "A.I. TOOLS",
    issuer: "BE 10X",
    date: "Dec 2024",
    link: "https://www.linkedin.com/in/coderanilkumar/details/certifications/1750076234552/single-media-viewer/?profileId=ACoAAEaBws0B01mqQCg1QM0bhxjIE-z7O76LGCk"
  }
  
];


function renderProjects() {
  const projectsDiv = document.getElementById('projects');
  projectsDiv.innerHTML = projects.map(p => `
    <div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <a href="${p.link}" target="_blank">View Project</a>
      <div class="tags">${p.tags.map(tag => `<span class='tag'>${tag}</span>`).join('')}</div>
    </div>
  `).join('');
}

function renderSkills() {
  const skillsUl = document.getElementById('skills');
  skillsUl.innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');
}

function renderTimeline() {
  const timelineDiv = document.getElementById('timeline');
  timelineDiv.innerHTML = timeline.map(ev => `
    <div class="timeline-event">
      <h4>${ev.year} - ${ev.title}</h4>
      <p>${ev.desc}</p>
    </div>
  `).join('');
}

function renderCertificates() {
  const certDiv = document.getElementById('certificates');
  certDiv.innerHTML = certificates.map(cert => `
    <div class="certificate">
      <h3>${cert.title}</h3>
      <p><strong>Issuer:</strong> ${cert.issuer}</p>
      <p><strong>Date:</strong> ${cert.date}</p>
      <a href="${cert.link}" class="verify-btn" target="_blank">Verify Certificate</a>
    </div>
  `).join('');
}

// function renderTestimonials() {
//   const testimonialsDiv = document.getElementById('testimonials');
//   testimonialsDiv.innerHTML = testimonials.map(t => `
//     <div class="testimonial">
//       <p class="testimonial-text">"${t.text}"</p>
//       <div class="testimonial-author">- ${t.name}, <span>${t.role}</span></div>
//     </div>
//   `).join('');
// }

// Scroll to section functionality
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Keyboard navigation for accessibility
window.addEventListener('keydown', (e) => {
  if (e.altKey && e.key === '1') scrollToSection('about-section');
  if (e.altKey && e.key === '2') scrollToSection('projects');
  if (e.altKey && e.key === '3') scrollToSection('skills');
  if (e.altKey && e.key === '4') scrollToSection('timeline');
  if (e.altKey && e.key === '5') scrollToSection('contact-section');
});

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☼' : '☾';
});

// Responsive menu for mobile (shows contact links in a toggle menu)
function createMobileMenu() {
  const contactSection = document.querySelector('.contact-section');
  if (!contactSection) return;
  const menuBtn = document.createElement('button');
  menuBtn.className = 'mobile-menu-btn';
  menuBtn.innerHTML = '☰';
  menuBtn.setAttribute('aria-label', 'Show Contact Links');
  contactSection.insertBefore(menuBtn, contactSection.firstChild);

  const contactLinks = contactSection.querySelector('.contact-links');
  menuBtn.addEventListener('click', () => {
    contactLinks.classList.toggle('show-mobile');
    menuBtn.classList.toggle('active');
    menuBtn.innerHTML = contactLinks.classList.contains('show-mobile') ? '✕' : '☰';
  });

  // Hide contact links by default on small screens
  function handleResize() {
    if (window.innerWidth <= 600) {
      contactLinks.classList.remove('show-mobile');
      menuBtn.style.display = 'inline-block';
    } else {
      contactLinks.classList.add('show-mobile');
      menuBtn.style.display = 'none';
    }
  }
  window.addEventListener('resize', handleResize);
  handleResize();
}

// Back to top button
function createBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '↑';
  btn.title = 'Back to Top';
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(btn);
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  renderProjects();
  renderSkills();
  renderTimeline();
  createMobileMenu();
  // renderTestimonials(); // Removed because testimonials section is not present in HTML
  createBackToTop();
  renderCertificates();
});
