// Screenshot gallery: a click on a.shot opens the full-size image in a dialog.
// Without JS (or without <dialog>) the link opens the full-size PNG instead.
(function () {
  const links = [...document.querySelectorAll('a.shot')];
  if (!links.length || typeof HTMLDialogElement !== 'function') return;

  const dlg = document.createElement('dialog');
  dlg.className = 'shot-dialog';
  dlg.innerHTML = '<button type="button" class="shot-close" aria-label="Close">&times;</button>' +
    '<figure><picture><source type="image/webp"><img alt=""></picture><figcaption></figcaption></figure>';
  document.body.appendChild(dlg);
  const source = dlg.querySelector('source'), img = dlg.querySelector('img'), cap = dlg.querySelector('figcaption');

  links.forEach(a => a.addEventListener('click', (e) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const thumb = a.querySelector('img');
    source.srcset = a.dataset.webp || '';
    img.src = a.href;
    img.alt = thumb ? thumb.alt : '';
    cap.textContent = a.dataset.cap || '';
    dlg.setAttribute('aria-label', a.dataset.cap || 'Screenshot');
    dlg.showModal();
  }));

  // any click inside the open dialog (image, backdrop, or the × button) closes it; Esc closes it natively
  dlg.addEventListener('click', () => dlg.close());
  dlg.addEventListener('close', () => { img.removeAttribute('src'); source.removeAttribute('srcset'); });
})();
