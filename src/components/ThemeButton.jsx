import { useState, useEffect } from "react";

const ThemeButton = () => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme ||  "light" );

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
      className="bg-slate-200 text-cach-l3 dark:text-cach-l1 dark:bg-transparent dark:border dark:border-cach-l2 px-4 py-1 rounded-xl"
      onClick={toggleTheme}
    >
      Cambiar a "{theme === "light" ? "dark" : "light"}"
    </button>
  );
};

export default ThemeButton;
