document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.skill-bar-fill');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.getAttribute('data-width');
      } else {
        entry.target.style.width = '0%';
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => {
    observer.observe(bar);
  });
});