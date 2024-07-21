import { create } from "zustand";

export const useThemeStore = create(set => ({
  theme: localStorage.getItem("theme") || "light",
  route: location.pathname,
  // background: "bg-white dark:bg-cach-l4",
  // setBackground: background => set({ background }),
  setTheme: theme => set({ theme: theme === "light" ? "dark" : "light" }),
}));

export const useUserStore = create(set => ({
  user: {
    university: "UTEC",
    career: "",
    cycle: "",
    enrolledCourses: [],
    otherCourses: [],
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileDescription: "",
  },
  setChange: (data, atr) =>
    set(state => {
      state.user[atr] = data;
      console.log(state);
      return state;
    }),
}));
