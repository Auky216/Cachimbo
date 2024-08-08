import { create } from "zustand";
import Cookies from 'js-cookie';
import { persist } from 'zustand/middleware';

export const useThemeStore = create(set => ({
    theme: localStorage.getItem("theme") || "light",
    route: window.location.href,
    history: [],
    // background: "bg-white dark:bg-cach-l4",
    // setBackground: background => set({ background }),
    setTheme: theme => set({ theme: theme === "light" ? "dark" : "light" }),
    setRoute: (route) => {
        set(state => {
            const newHistory = [...state.history];

            if (route !== state.route) {
                newHistory.push(route);
            }

            return {
                route: route,
                history: newHistory,
            };
        });
    },
    goBack: () => {
        set(state => {
            const newHistory = [...state.history];
            //console.log(state.history);
            if (newHistory.length > 1) {
                newHistory.pop();
                //console.log("nuevo Historial", newHistory);
                const previousRoute = newHistory[newHistory.length - 1];

                return {
                    route: previousRoute,
                    history: newHistory,
                };
            }
            else {
                return {
                    route: "/dashboard/main",
                    history: newHistory,
                }
            }
        });
    },
}));


export const stateLogged = create((set) => ({
    isAuthenticated: Cookies.get('isAuthenticated') || false,
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
export const useUserStore = create(
    persist(
        set => ({
            user: {
                university: "UTEC",
                career: "CS",
                nickname: "Jojiz",
                cycle: 1,
                enrolledCourses: ["Programación I"],
                otherCourses: [],
                numberFilesUploaded: 0,
                numberFriends: 0,
                name: "Juan Salvatierra",
                lastname: "Perez Gonzales",
                email: "pepito@gonzales.com",
                password: "",
                confirmPassword: "",
                profileDescription: "I love to code and learn new things",
                token: import.meta.env.VITE_TOKEN,
            },
            resetUser: () =>
                set(() => ({
                    user: {
                        university: "",
                        career: "",
                        nickname: "",
                        cycle: null,
                        enrolledCourses: [],
                        otherCourses: [],
                        numberFilesUploaded: 0,
                        numberFriends: 0,
                        name: "",
                        lastname: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        profileDescription: "",
                        token: import.meta.env.VITE_TOKEN,
                    },
                })),
            setChange: (data, atr) =>
                set(state => {
                    state.user[atr] = data;
                    // console.log(state);
                    return state;
                }),
        }),
        {
            name: 'user-storage',
            storage: localStorage,
        }

    ));
