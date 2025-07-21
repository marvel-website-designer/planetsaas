// ================================================================== Subscription Toggle

 // Subscription toggle

  const monthlyBtn = document.getElementById('monthlyBtn');
    const annuallyBtn = document.getElementById('annuallyBtn');
    const prices = document.querySelectorAll('.price');

    function updatePrices(period) {
      prices.forEach(price => {
        const newText = period === 'monthly'
          ? `${price.dataset.monthly} <span class="per-month">/month</span>`
          : `${price.dataset.annually} <span class="per-month">/year</span>`;

        // Remove previous .price-text
        price.innerHTML = '';

        // Create new span and animate
        const span = document.createElement('span');
        span.className = 'price-text';
        span.innerHTML = newText;
        price.appendChild(span);
      });
    }

    monthlyBtn.addEventListener('click', () => {
      updatePrices('monthly');
      monthlyBtn.classList.add('active');
      annuallyBtn.classList.remove('active');
    });

    annuallyBtn.addEventListener('click', () => {
      updatePrices('annually');
      annuallyBtn.classList.add('active');
      monthlyBtn.classList.remove('active');
    });







// ================================================================== FAQ

 // FAQ accordion toggle

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) item.classList.add('active');
      });
    });


// ================================================================ SCROLL ANIMATE

 // SCROLL ANIMATE

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.3} // Trigger when 20% of element is visible
  );

  document.querySelectorAll('.fade-zoom, .slide-up, .fade-zoom').forEach(el => {
    observer.observe(el);
  });


  // ==================================================================== MENU BAR
const toggleBtn = document.getElementById("navToggle");
  const navbar = document.getElementById("navbar");
  const icon = document.getElementById("menuIcon");

  toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("expanded");

    // Toggle icon (X or menu)
    if (navbar.classList.contains("expanded")) {
      icon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      `;
    } else {
      icon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      `;
    }
  });