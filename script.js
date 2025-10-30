// script.js - toc collapse + simple form handler
document.addEventListener('DOMContentLoaded', function(){
  var tocToggle = document.getElementById('toc-toggle');
  var tocList = document.getElementById('toc-list');
  tocToggle.addEventListener('click', function(){
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    if(expanded){
      tocList.style.display = 'none';
      this.textContent = 'Contents ▸';
    } else {
      tocList.style.display = 'block';
      this.textContent = 'Contents ▾';
    }
  });

  // Keep toc open by default on wide screens
  if(window.innerWidth > 900){
    tocList.style.display = 'block';
  } else {
    tocList.style.display = 'none';
    tocToggle.setAttribute('aria-expanded', false);
    tocToggle.textContent = 'Contents ▸';
  }

  // simple contact form handler (no network)
  var form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thanks! Message sent (demo).');
    form.reset();
  });

});
