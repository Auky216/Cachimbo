import { create } from 'zustand';
import { useUserStore, stateLogged } from './utils'; 
import { fetchDataCustom } from '../components/fetchingData';

export const useAuthStore = create((set) => ({
    isLoading: null,
    error: null,

    login: async (credentials) => {
        set({ isLoading: true, error: null });

        try {
            const [result, body, state] = await fetchDataCustom(credentials, "test/api/auth/login");

            if (body.message) {
                
                useUserStore.getState().setChange(result.token, 'token');

                const [res, data, state2, err] = await fetchDataCustom({
                    token: result.token,
                    email: credentials.email,
                }, "test/api/student/get");
                console.log(data);
                useAuthStore.getState().setDataUsers(
                    [data.name, data.university, data.files, data.nickname, data.friends, data.term, data.interestedCourses, data.description, data.points, data.files.length, data.friends.length],
                    ["name", "university", "numberFilesUploaded", "nickname", "numberFriends", "career", "enrolledCourses", "profileDescription", "score", "numberFilesUploaded", "numberFriends"]
                );

                stateLogged.getState().login();
            } else if (body.error) {
                throw new Error(body.error);
            }

        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ isLoading: false });
        }
    },

    logout: () => {
        stateLogged.getState().logout();
        useUserStore.getState().resetUser(); // Elimina los datos del usuario
        set({ isLoading: null, error: null });
    },

    setDataUsers: (dataList, attributes) => {
        dataList.forEach((data, index) => {
            useUserStore.getState().setChange(data, attributes[index]);
        });
    },
}));