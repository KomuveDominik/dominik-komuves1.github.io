function setLang(lang) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');
  document.querySelectorAll('[data-hu]').forEach(el => el.style.display = lang === 'hu' ? '' : 'none');
  document.querySelectorAll('[data-en]').forEach(el => el.style.display = lang === 'en' ? '' : 'none');
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang');
  if (saved && saved !== 'hu') setLang(saved);
});