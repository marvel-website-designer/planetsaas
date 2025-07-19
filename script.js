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