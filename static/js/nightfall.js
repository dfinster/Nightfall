/* Progressive enhancement: native footnote links work without JavaScript. */
(() => {
  'use strict';
  const panel = document.createElement('aside');
  panel.className = 'footnote-preview'; panel.hidden = true;
  panel.setAttribute('aria-label', 'Footnote preview');
  const close = document.createElement('button'); close.textContent = 'Close'; close.type = 'button';
  const content = document.createElement('div'); panel.append(close, content); document.body.append(panel);
  let trigger;
  const hide = (restore) => { panel.hidden = true; if (restore && trigger) trigger.focus(); };
  close.addEventListener('click', () => hide(true));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) hide(true); });
  document.addEventListener('click', e => {
    const a = e.target.closest('a[role="doc-noteref"],a.footnote-ref,a[rel="footnote"]');
    if (!a) { if (!panel.contains(e.target)) hide(false); return; }
    const href = a.getAttribute('href'); if (!href || !href.startsWith('#')) return;
    let id; try { id = decodeURIComponent(href.slice(1)); } catch { return; }
    const note = document.getElementById(id); if (!note) return;
    // Preserve modifier-click and default anchor behavior if enhancement is unavailable.
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    e.preventDefault(); trigger = a;
    const copy = note.cloneNode(true); copy.removeAttribute('id');
    copy.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
    copy.querySelectorAll('[role="doc-backlink"],.footnote-backref,.footnote-return').forEach(el => el.remove());
    content.replaceChildren(...Array.from(copy.childNodes)); panel.hidden = false; close.focus();
  });
})();
