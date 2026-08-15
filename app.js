const sidebar = document.querySelector('.sidebar');
sidebar.querySelector('.blocker').onclick = hide;
function show() { // swipe right
  sidebar.classList.add('visible');
  document.body.style.overflow = 'hidden';
}
function hide() { // by blocker click, swipe left, or url change
  sidebar.classList.remove('visible');
  document.body.style.overflow = '';
}
function toggle() {
  sidebar.classList.contains('visible') ? hide() : show();
}