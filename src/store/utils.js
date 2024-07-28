import { create } from "zustand";
import Cookies from 'js-cookie';


export const useThemeStore = create(set => ({
  theme: localStorage.getItem("theme") || "light",
  route: location.pathname,
  // background: "bg-white dark:bg-cach-l4",
  // setBackground: background => set({ background }),
  setTheme: theme => set({ theme: theme === "light" ? "dark" : "light" }),
}));


export const stateLogged = create((set) => ({
  isAuthenticated: false,
  login: () => {
    Cookies.set('isAuthenticated', true, { expires: 7 });
    set({ isAuthenticated: true });
  },
  logout: () => {
    Cookies.remove('isAuthenticated'); 
    set({ isAuthenticated: false });
  },
  checkAuth: () => {
    const isAuthenticated = Cookies.get('isAuthenticated') === 'true';
    set({ isAuthenticated });
  },
}));

/*I added new attributes*/
export const useUserStore = create(set => ({
  user: {
    university: "UTEC",
    career: "CS",
    nickname: "@Jojiz",
    cycle: "1",
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
