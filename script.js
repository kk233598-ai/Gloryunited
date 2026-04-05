// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

function openModal() {
  window.open('https://forms.gle/4a94vFuy6qqQ9Zfo8', '_blank');
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const mobileMenuContainer = document.getElementById('mobile-menu-container');
  
  if(menuToggle && mobileMenuContainer) {
    menuToggle.addEventListener('click', () => {
      if(mobileMenuContainer.style.display === 'none') {
        mobileMenuContainer.style.display = 'block';
      } else {
        mobileMenuContainer.style.display = 'none';
      }
    });

    // Close menu when a link is clicked
    const mobileLinks = mobileMenuContainer.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuContainer.style.display = 'none';
      });
    });
  }
});

// Logo Uploader Logic
document.addEventListener('DOMContentLoaded', () => {
  const logoUpload = document.getElementById('logoUpload');
  const navLogo = document.getElementById('nav-logo');
  const footerLogo = document.getElementById('footer-logo');

  // Load saved logo from localStorage
  const savedLogo = localStorage.getItem('gloryLogo');
  if (savedLogo) {
    if(navLogo) navLogo.src = savedLogo;
    if(footerLogo) footerLogo.src = savedLogo;
  }

  // Handle file upload click
  if(logoUpload) {
    logoUpload.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const base64Src = event.target.result;
          if(navLogo) navLogo.src = base64Src;
          if(footerLogo) footerLogo.src = base64Src;
          localStorage.setItem('gloryLogo', base64Src); // Saves forever in browser
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Coach Uploader Logic
  const coachUpload = document.getElementById('coachUpload');
  const coachPic = document.getElementById('coach-pic');

  const savedCoach = localStorage.getItem('gloryCoach');
  if (savedCoach && coachPic) {
    coachPic.src = savedCoach;
  }

  if (coachUpload && coachPic) {
    coachUpload.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const base64Src = event.target.result;
          coachPic.src = base64Src;
          localStorage.setItem('gloryCoach', base64Src); // Persists coach image
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Dedication Uploader Logic
  const dedicationUpload = document.getElementById('dedicationUpload');
  const dedicationPic = document.getElementById('dedication-pic');

  const savedDedication = localStorage.getItem('gloryDedication');
  if (savedDedication && dedicationPic) {
    dedicationPic.src = savedDedication;
  }

  if (dedicationUpload && dedicationPic) {
    dedicationUpload.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const base64Src = event.target.result;
          dedicationPic.src = base64Src;
          localStorage.setItem('gloryDedication', base64Src);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Kit Uploader Logic
  const kitUpload = document.getElementById('kitUpload');
  const kitPic = document.getElementById('kit-pic');

  const savedKit = localStorage.getItem('gloryKit');
  if (savedKit && kitPic) {
    kitPic.src = savedKit;
  }

  if (kitUpload && kitPic) {
    kitUpload.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const base64Src = event.target.result;
          kitPic.src = base64Src;
          localStorage.setItem('gloryKit', base64Src);
        };
        reader.readAsDataURL(file);
      }
    });
  }
});
