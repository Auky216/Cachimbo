import { useEffect } from "react";
import { useThemeStore } from "../../store/utils";

const ThemeButton = () => {
  const theme = useThemeStore(state => state.theme);
  const setTheme = useThemeStore(state => state.setTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      className="m-auto rounded-2xl border border-cach-l3 bg-slate-200 px-4 py-1 text-sm text-cach-l3 dark:border-cach-l2 dark:bg-transparent dark:text-cach-l1"
      onClick={() => setTheme(theme)}
    >
      {theme === "light" ? "dark" : "light"}
    </button>
  );
};

export default ThemeButton;
