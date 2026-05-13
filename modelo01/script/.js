

  // Animate progress bars on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.progress-fill').forEach(bar => {
          const val = bar.dataset.val;
          setTimeout(() => { bar.style.width = val + '%'; }, 200);
        });
      }
    });
  }, { threshold: 0.3 });
 
  const trackerEl = document.getElementById('trackerCards');
  if (trackerEl) observer.observe(trackerEl);
