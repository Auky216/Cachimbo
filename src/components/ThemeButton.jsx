import { useState, useEffect } from "react";

const ThemeButton = () => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="m-auto rounded-xl bg-slate-200 px-4 py-1 text-cach-l3 dark:border dark:border-cach-l2 dark:bg-transparent dark:text-cach-l1"
      onClick={toggleTheme}
    >
      Cambiar a "{theme === "light" ? "dark" : "light"}"
    </button>
  );
};

export default ThemeButton;
