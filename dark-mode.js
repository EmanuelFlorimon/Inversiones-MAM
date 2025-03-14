document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
  
    // Verificar el tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
  
    // Evento para cambiar el tema
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  });