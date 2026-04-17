const themeToggleBtn = document.getElementById('themeToggle');
const toggleIcon     = document.getElementById('toggleIcon');
const toggleLabel    = document.getElementById('toggle-label');
const body           = document.body;

const DARK_CLASS      = 'dark-mode';
const STORAGE_KEY     = 'theme';            
const THEME_DARK      = 'dark';
const THEME_LIGHT     = 'light';

function applyTheme(theme) {
  if (theme === THEME_DARK) {
    body.classList.add(DARK_CLASS);
    toggleIcon.textContent  = '🌙';
    toggleLabel.textContent = '🌙 Dark Mode Enabled';
    themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
  } else {
    body.classList.remove(DARK_CLASS);
    toggleIcon.textContent  = '🌞';
    toggleLabel.textContent = '🌞 Light Mode Enabled';
    themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
  }
}

function saveTheme(theme) {
  localStorage.setItem(STORAGE_KEY, theme);   
}

function getSavedTheme() {
  return localStorage.getItem(STORAGE_KEY);   
}

function getSystemTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? THEME_DARK : THEME_LIGHT;
}

function initTheme() {
  const savedTheme = getSavedTheme();    // check localStorage first

  if (savedTheme) {
    applyTheme(savedTheme);
    console.log(`[Theme] Loaded saved preference: "${savedTheme}"`);
  } else {
    const systemTheme = getSystemTheme();
    applyTheme(systemTheme);
    console.log(`[Theme] No saved preference. Using system theme: "${systemTheme}"`);
  }
}

function handleToggle() {
  const isCurrentlyDark = body.classList.contains(DARK_CLASS);
  const newTheme = isCurrentlyDark ? THEME_LIGHT : THEME_DARK;

  applyTheme(newTheme);

  saveTheme(newTheme);

  console.log(`[Theme] Switched to "${newTheme}" and saved to localStorage.`);
}

themeToggleBtn.addEventListener('click', handleToggle);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (event) {
  const savedTheme = getSavedTheme();

  if (!savedTheme) {
    // Only auto-switch if user has not manually set a preference
    const newTheme = event.matches ? THEME_DARK : THEME_LIGHT;
    applyTheme(newTheme);
    console.log(`[Theme] OS theme changed. Auto-applying: "${newTheme}"`);
  }
});

themeToggleBtn.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleToggle();
  }
});

initTheme();
