function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
    document.querySelector('.toggle-icon').textContent = currentMode;
}
  