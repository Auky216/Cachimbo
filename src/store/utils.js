import { create } from "zustand";

export const useThemeStore = create(set => ({
  theme: localStorage.getItem("theme") || "light",
  route: location.pathname,
  // background: "bg-white dark:bg-cach-l4",
  // setBackground: background => set({ background }),
  setTheme: theme => set({ theme: theme === "light" ? "dark" : "light" }),
}));

/*I added new attributes*/
export const useUserStore = create(set => ({
  user: {
    university: "UTEC",
    career: "Computer Science",
    nickname:"@Jojiz",
    cycle: "I",
    enrolledCourses: ["calcvar", "matedisc1", "progra1", "pi1", "labcom1"],
    otherCourses: [],
    name: "Juan Salvatierra",
    lastname: "Perez Gonzales",
    email: "pepito@gonzales.com",
    password: "",
    confirmPassword: "",
    profileDescription: "I love to code and learn new things",
  },
  resetUser: () =>
    set(state => {
      state.user = { [Object.keys(state.user)]: "" };
      return state;
    }),
  setChange: (data, atr) =>
    set(state => {
      state.user[atr] = data;
      // console.log(state);
      return state;
    }),
}));
