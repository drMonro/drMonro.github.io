const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

if (!reduceMotion.matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        entry.target.animate(
          [
            { opacity: 0, transform: 'translateY(1rem)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: 500, easing: 'cubic-bezier(.2, .8, .2, 1)', fill: 'both' },
        );

        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll('[data-reveal]').forEach((element) => {
    observer.observe(element);
  });
}
