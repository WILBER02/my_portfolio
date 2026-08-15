/* ==========================================================================
   WILBERFORCE MUHUYI MURAMBA — PORTFOLIO SCRIPT
   Preloader, theme toggle, typed effect, counters, scrollspy, reveal, form
   ========================================================================== */

(function () {
  "use strict";

  /* Progressive enhancement: CSS only hides the loader and sets reveal
     initial states when this class is present (i.e., JS actually ran). */
  document.documentElement.classList.add("js-ready");

  /* ---------- 1. Preloader ---------- */
  const preloader = document.getElementById("preloader");
  const hidePreloader = () => preloader && preloader.classList.add("done");
  window.addEventListener("load", () => setTimeout(hidePreloader, 450));
  // Safety: never leave the loader stuck
  setTimeout(hidePreloader, 3500);

  /* ---------- 2. Navbar: scroll state + mobile menu ---------- */
  const nav = document.getElementById("siteNav");
  const toggler = document.getElementById("navToggler");
  const navMenu = document.getElementById("navMenu");

  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 30);
    document.getElementById("backToTop")?.classList.toggle("show", window.scrollY > 480);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const closeMenu = () => {
    if (!navMenu || !toggler) return;
    navMenu.classList.remove("open");
    toggler.classList.remove("open");
    toggler.setAttribute("aria-expanded", "false");
  };

  if (toggler && navMenu) {
    toggler.addEventListener("click", () => {
      const open = navMenu.classList.toggle("open");
      toggler.classList.toggle("open", open);
      toggler.setAttribute("aria-expanded", String(open));
    });
    navMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  }

  /* ---------- 4. Typed effect ---------- */
  const typedEl = document.getElementById("typed");
  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Data Analyst"
  ];
  if (typedEl) {
    /* Smooth, frame-aligned typing: requestAnimationFrame drives every update so
       characters land exactly on paint frames instead of timer jitter. */
    let roleIndex = 0, charIndex = 0;
    let state = "typing"; /* typing -> holding -> deleting -> waiting -> typing ... */
    let acc = 0, holdUntil = 0, last = 0;

    const frame = (now) => {
      const dt = Math.min(now - last, 100); /* clamp large gaps (hidden tab) */
      last = now;

      if (state === "typing") {
        acc += dt;
        while (acc >= 70) { /* ~70 ms per character */
          acc -= 70;
          charIndex++;
          if (charIndex > roles[roleIndex].length) {
            charIndex = roles[roleIndex].length;
            state = "holding";
            holdUntil = now + 1800; /* pause on the full role */
            acc = 0;
            break;
          }
        }
        typedEl.textContent = roles[roleIndex].slice(0, charIndex);
      } else if (state === "deleting") {
        acc += dt;
        while (acc >= 32) { /* ~32 ms per character */
          acc -= 32;
          charIndex--;
          if (charIndex <= 0) {
            charIndex = 0;
            roleIndex = (roleIndex + 1) % roles.length;
            state = "waiting";
            holdUntil = now + 420; /* brief beat before the next role */
            acc = 0;
            break;
          }
        }
        typedEl.textContent = roles[roleIndex].slice(0, charIndex);
      } else if (state === "holding" && now >= holdUntil) {
        state = "deleting";
        acc = 0;
      } else if (state === "waiting" && now >= holdUntil) {
        state = "typing";
        acc = 0;
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  /* ---------- 5. Marquee (skills ticker) ---------- */
  const track = document.getElementById("marqueeTrack");
  if (track) {
    const items = [
      "Python", "JavaScript", "PHP", "MySQL", "HTML5", "CSS3",
      "Prompt Engineering", "Search Quality", "Data Labeling", "Content Moderation",
      "Technical Support", "Networking", "Git & GitHub", "Bootstrap", "VS Code", "XAMPP"
    ];
    const group = items
      .map((t) => `<span class="marquee-item"><i class="bi bi-asterisk" aria-hidden="true"></i>${t}</span>`)
      .join("");
    track.innerHTML = `<div class="marquee-group">${group}</div><div class="marquee-group">${group}</div>`;
  }

  /* ---------- 6. Scrollspy (active nav link) ---------- */
  const sections = document.querySelectorAll("main section[id], div[id='experience'], header[id]");
  const navLinks = document.querySelectorAll(".nav-menu .nav-item-link");
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = "#" + entry.target.id;
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === id;
          link.classList.toggle("is-active", isActive);
          if (isActive) link.setAttribute("aria-current", "page");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );
  sections.forEach((s) => spy.observe(s));

  /* ---------- 7. Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- 8. Counters + skill bars ---------- */
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const fillBars = (scope) => {
    scope.querySelectorAll(".skill-fill").forEach((bar) => {
      if (bar.dataset.filled) return;
      bar.dataset.filled = "true";
      bar.style.width = bar.dataset.level + "%";
    });
  };

  const animateObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll(".counter").forEach(animateCounter);
        fillBars(entry.target);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".hero-stats, .skill-group").forEach((el) => {
    animateObserver.observe(el);
  });

  /* ---------- 9. Back to top ---------- */
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------- 9b. Photos & screenshots: graceful fallback ---------- */
  /* If an <img> is missing (assets not dropped in yet), remove it so the
     styled placeholder behind it shows instead of a broken-image icon. */
  document.querySelectorAll("img.photo-img, img.shot-img").forEach((img) => {
    const hide = () => img.remove();
    img.addEventListener("error", hide);
    // Cover the race: the image may have failed before this script ran
    if (img.complete && img.naturalWidth === 0) hide();
  });

  /* ---------- 10. Contact form ---------- */
  /* Primary: Netlify Forms (data-netlify on the <form>). The submission is POSTed
     to the current URL and Netlify intercepts it — no backend code needed.
     Fallback (GitHub Pages / local preview): open the visitor's mail client with
     the message prefilled, so the form never silently fails. */
  const form = document.getElementById("contactForm");
  if (form) {
    const success = document.getElementById("formSuccess");
    const successMsg = document.getElementById("formSuccessMsg");
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnHtml = submitBtn ? submitBtn.innerHTML : "";

    const showSuccess = (msg) => {
      if (successMsg) successMsg.textContent = msg;
      if (success) {
        success.classList.remove("d-none");
        success.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    };
    const setSending = (sending) => {
      if (!submitBtn) return;
      submitBtn.disabled = sending;
      submitBtn.innerHTML = sending
        ? '<span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>Sending…'
        : btnHtml;
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (success) success.classList.add("d-none");

      /* Client-side validation */
      let valid = true;
      form.querySelectorAll("[required]").forEach((field) => {
        const ok = field.checkValidity();
        field.classList.toggle("is-invalid", !ok);
        if (!ok) valid = false;
      });
      if (!valid) return;

      /* Honeypot: bots fill the hidden field — pretend success, send nothing. */
      if (new FormData(form).get("bot-field")) {
        showSuccess("Thanks! Your message has been sent.");
        form.reset();
        return;
      }

      setSending(true);
      try {
        const res = await fetch(window.location.href, {
          method: "POST",
          body: new FormData(form),
          headers: { "Accept": "application/json" }
        });
        if (!res.ok) throw new Error("Form backend rejected the submission (" + res.status + ")");
        showSuccess("Thanks! Your message has been sent — I'll get back to you within 24 hours.");
        form.reset();
      } catch (err) {
        /* No Netlify backend here — open the mail client with the message prefilled. */
        const f = new FormData(form);
        const name = f.get("name") || "";
        const email = f.get("email") || "";
        const subject = f.get("subject") || "Portfolio message from " + (name || "a visitor");
        const body = "Name: " + name + "\nEmail: " + email + "\n\n" + (f.get("message") || "");
        window.location.href =
          "mailto:wilberforcemuhuyi28@gmail.com?subject=" +
          encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        showSuccess("Your email app opened with the message ready to send.");
      } finally {
        setSending(false);
      }
    });

    form.querySelectorAll("[required]").forEach((field) => {
      field.addEventListener("input", () => field.classList.remove("is-invalid"));
    });
  }

  /* ---------- 11. Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 11b. Email links: plain mailto ---------- */
  /* All email buttons/links use mailto:wilberforcemuhuyi28@gmail.com and rely on
     the browser's default mailto handling to open the visitor's mail client. */
})();
