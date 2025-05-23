import { create } from "zustand";
import Cookies from 'js-cookie';
import { persist } from 'zustand/middleware';

export const useThemeStore = create(set => ({
    theme: localStorage.getItem("theme") || "light",
    route: window.location.href,
    history: [],
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
            if (newHistory.length > 1) {
                newHistory.pop();
                const previousRoute = newHistory[newHistory.length - 1];
                return {
                    route: previousRoute,
                    history: newHistory,
                };
            } else {
                return {
                    route: "/dashboard/main",
                    history: newHistory,
                };
            }
        });
    },
}));

export const stateLogged = create((set) => ({
    isAuthenticated: Cookies.get('isAuthenticated') === 'true',
    login: () => {
        Cookies.set('isAuthenticated', 'true', { expires: 7, secure: true, sameSite: 'Strict' });
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

export const useUserStore = create(
    persist(
        (set) => ({
            user: {
                university: "",
                career: "",
                nickname: "",
                cycle: 1,
                enrolledCourses: [],
                otherCourses: [],
                numberFilesUploaded: 0,
                filesUploaded: [],
                numberFriends: 0,
                score: 0,
                name: "",
                lastname: "",
                email: "",
                password: "",
                confirmPassword: "",
                profileDescription: "",
                startYear: "",
                token: "",
            },
            resetUser: () =>
                set(() => ({
                    user: {
                        university: "",
                        career: "",
                        nickname: "",
                        cycle: 1,
                        enrolledCourses: [],
                        otherCourses: [],
                        numberFilesUploaded: 0,
                        filesUploaded: [],
                        numberFriends: 0,
                        score: 0,
                        name: "",
                        lastname: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        profileDescription: "",
                        startYear: "",
                        token: "",
                    },
                })),
            setChange: (data, atr) =>
                set((state) => {
                    state.user[atr] = data;
                    return state;
                }),
        }),
        {
            name: 'user-storage',
        }
    )
);
