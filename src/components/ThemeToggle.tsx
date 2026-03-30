import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="theme-toggle-track" aria-hidden>
        <span className="theme-toggle-thumb" />
        <span className="theme-toggle-icon theme-toggle-moon" aria-hidden>
          ☾
        </span>
        <span className="theme-toggle-icon theme-toggle-sun" aria-hidden>
          ☀
        </span>
      </span>
    </button>
  );
}
