import './input.css'

const menuButton = document.querySelector('.siteMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

if (menuButton && mobileMenu) {
  const toggleMenu = () => {
    const isActive = mobileMenu.getAttribute('data-active') === 'true';
    mobileMenu.setAttribute('data-active', !isActive);
    menuButton.classList.toggle('active');
  };

  // Close menu when a link is clicked
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.setAttribute('data-active', 'false');
      menuButton.classList.remove('active');
    });
  });

  menuButton.addEventListener('click', toggleMenu);
  menuButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
      if (mobileMenu.getAttribute('data-active') === 'true') {
        mobileMenu.setAttribute('data-active', 'false');
        menuButton.classList.remove('active');
      }
    }
  });
}

// Active state animation for industry big heading spans on scroll
const industryWrapper = document.querySelector('.industry-wrapper');
const spans = document.querySelectorAll('.industry-big-heading span');

if (industryWrapper && spans.length > 0) {
  const handleScroll = () => {
    const rect = industryWrapper.getBoundingClientRect();
    const wrapperHeight = rect.height;
    const topOffset = rect.top;
    const viewportHeight = window.innerHeight;

    // We want the progress to go from 0 to 1 as the wrapper scrolls through the viewport
    // Start when the top of the wrapper enters the viewport (topOffset = viewportHeight)
    // End when the bottom of the wrapper leaves the viewport (topOffset = -wrapperHeight)
    const start = viewportHeight;
    const end = -wrapperHeight;
    
    const total = start - end;
    const current = start - topOffset;
    
    let progress = current / total;
    progress = Math.max(0, Math.min(1, progress));
    
    // We have 8 spans. Let's light them up sequentially based on scroll progress.
    const numSpans = spans.length;
    // Map progress to active count. We want a slight offset so the first letter lights up
    // when the section is nicely visible, and the last stays lit.
    const activeThreshold = Math.floor(progress * (numSpans + 2)) - 1;
    
    spans.forEach((span, index) => {
      if (index <= activeThreshold) {
        span.classList.add('active');
      } else {
        span.classList.remove('active');
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  // Trigger once initially
  handleScroll();
}



document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".seo-business-card");

  function updateNumbers() {
    cards.forEach((card, index) => {
      const number = card.querySelector(".card-number");

      if (!number) return;

      number.classList.remove("opacity-0");

      if (index < cards.length - 1) {
        const nextCard = cards[index + 1];
        const nextCardTop = nextCard.getBoundingClientRect().top;

        if (nextCardTop <= 130) {
          number.classList.add("opacity-0");
        }
      }
    });
  }

  window.addEventListener("scroll", updateNumbers);
  updateNumbers();
});


document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".advanced-box");
  const wrapper = document.querySelector(".advanced-box-wrapper");

  if (!boxes.length) return;

  boxes.forEach((box, index) => {
    if (index === 0) {
      box.classList.add("active");
    }

    const activateBox = () => {
      boxes.forEach((item) => item.classList.remove("active"));
      box.classList.add("active");
    };

    box.addEventListener("mouseenter", activateBox);
    box.addEventListener("click", activateBox);
  });

  if (wrapper) {
    wrapper.addEventListener("mouseleave", () => {
      boxes.forEach((item) => item.classList.remove("active"));
      boxes[0].classList.add("active");
    });
  }
});