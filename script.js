/*document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const video = document.getElementById("demoVideo");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktopPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* -----------------------------------
     1. Video speed
  ----------------------------------- */
  if (video) {
    const setVideoSpeed = () => {
      video.playbackRate = 1.35;
    };

    setVideoSpeed();
    video.addEventListener("loadeddata", setVideoSpeed);
    video.addEventListener("canplay", setVideoSpeed);
  }

  /* -----------------------------------
     2. Reveal on scroll
 
  if (!prefersReducedMotion) {
    const revealElements = [
      ...document.querySelectorAll(
        ".hero__content, .hero__image-wrap, .how-it-works__phone, .info-panel, .feature-card, .faq-item, .mini-panel, .review-card, .review-card--quote, .final-cta__content, .footer-grid section"
      ),
    ];

    revealElements.forEach((el, index) => {
      el.classList.add("reveal");

      if (el.classList.contains("feature-card") || el.classList.contains("review-card")) {
        const delayClass = `stagger-delay-${(index % 5) + 1}`;
        el.classList.add(delayClass);
      }
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    document
      .querySelectorAll(
        ".hero__content, .hero__image-wrap, .how-it-works__phone, .info-panel, .feature-card, .faq-item, .mini-panel, .review-card, .review-card--quote, .final-cta__content, .footer-grid section"
      )
      .forEach((el) => el.classList.add("is-visible"));
  }
 ----------------------------------- */
  /* -----------------------------------
     3. Header hide/show
 
  if (header) {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        header.classList.remove("hide");
      } else if (currentScrollY > lastScrollY && currentScrollY > 120) {
        header.classList.add("hide");
      } else if (currentScrollY < lastScrollY) {
        header.classList.remove("hide");
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(updateHeader);
          ticking = true;
        }
      },
      { passive: true }
    );
  }
 ----------------------------------- */
  /* -----------------------------------
     4. Smooth scroll for anchor links
  
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (!target) return;

      e.preventDefault();

      const headerHeight = header ? header.offsetHeight : 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

      window.scrollTo({
        top: targetTop,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  });
----------------------------------- */
  /* -----------------------------------
     5. FAQ single-open behavior
  
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });
----------------------------------- */
  /* -----------------------------------
     6. Desktop-only magnetic buttons
  
  if (desktopPointer && !prefersReducedMotion && window.innerWidth > 900) {
    const magneticItems = document.querySelectorAll(".btn, .store-badge");

    magneticItems.forEach((item) => {
      item.addEventListener("mousemove", (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        item.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
      });

      item.addEventListener("mouseleave", () => {
        item.style.transform = "";
      });
    });
  }
----------------------------------- */
  /* -----------------------------------
     7. Desktop-only phone tilt
 
  if (desktopPointer && !prefersReducedMotion && window.innerWidth > 900) {
    const phone = document.querySelector(".how-it-works__phone");

    if (phone) {
      phone.addEventListener("mousemove", (e) => {
        const rect = phone.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((y / rect.height) - 0.5) * -12;

        phone.style.transform =
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });

      phone.addEventListener("mouseleave", () => {
        phone.style.transform = "";
      });
    }
  }
;
 ----------------------------------- */