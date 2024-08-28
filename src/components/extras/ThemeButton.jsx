import { useEffect } from "react";
import { useThemeStore } from "../../store/utils";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

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
      className="m-auto px-4 py-1 text-sm text-cach-l3 dark:border-cach-l2 dark:bg-transparent dark:text-cach-l1"
      onClick={() => setTheme(theme)}
    >
      {theme === "light" ? (<FaRegMoon size={25} />) : (<MdOutlineWbSunny size={25} />)}
    </button>
  );
};

export default ThemeButton;
