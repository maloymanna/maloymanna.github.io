(function () {
  var STORAGE_KEY = 'blackburn-theme';
  var DEFAULT_THEME = 'dark'; // dark is Blackburn's natural look

  function getPreferred() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    // Respect OS preference if no stored choice
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return DEFAULT_THEME;
  }

  function applyTheme(theme) {
    var html = document.documentElement;
    if (theme === 'light') {
      html.classList.remove('dark-theme');
      html.classList.add('light-theme');
    } else {
      html.classList.remove('light-theme');
      html.classList.add('dark-theme');
    }
    updateButton(theme);
  }

  function updateButton(theme) {
    var icon  = document.getElementById('theme-icon');
    var label = document.getElementById('theme-label');
    if (!icon || !label) return;
    if (theme === 'light') {
      icon.className  = 'fa fa-sun-o fa-fw';
      label.textContent = 'Light Mode';
    } else {
      icon.className  = 'fa fa-moon-o fa-fw';
      label.textContent = 'Dark Mode';
    }
  }

  function toggleTheme() {
    var current = localStorage.getItem(STORAGE_KEY) || getPreferred();
    var next    = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  // Apply theme ASAP to avoid flash
  applyTheme(getPreferred());

  document.addEventListener('DOMContentLoaded', function () {
    updateButton(getPreferred());
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);
  });
})();