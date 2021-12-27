const container = document.querySelector('[data-scrollable]');

document.querySelectorAll('[data-scrollto]').forEach((i) => {
  i.addEventListener('click', function() {
    const dest = document.querySelector(this.dataset.scrollto);
    container.scrollTop = dest.offsetTop - 24;
  });
})
