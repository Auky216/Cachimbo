import { create } from 'zustand';
import { useUserStore, stateLogged } from './utils';
import { fetchDataCustom } from '../components/fetchingData';
import Register from '../pages/Register';

export const useAuthStore = create((set) => ({
    error: null,

    login: async (credentials, fromRegister = true) => {
        set({ isLoading: true, error: null });

        try {
            const [result, body, state] = await fetchDataCustom(credentials, "test/api/auth/login");

            if (body.message) {
                //console.log(result.token);
                await useUserStore.getState().setChange(result.token, 'token');

                if (fromRegister) await useAuthStore.getState().setGeneralData(credentials.email, result.token)
                    .finally(() => { stateLogged.getState().login() });

                return false;
            } else if (body.error) {
                throw new Error(body.error);
            }

        } catch (error) {
            set({ error: error.message });
            return true;
        }
    },

    logout: () => {
        stateLogged.getState().logout();
        useUserStore.getState().resetUser(); // Elimina los datos del usuario
        set({ isLoading: null, error: null });
    },

    setGeneralData: async (email, token) => {
        //console.log(result.token);
        const [res, data, state2, err] = await fetchDataCustom({
            token: token,
            email: email,
        }, "test/api/student/get");
        //console.log(data);
        useAuthStore.getState().setDataUsers(
            [email, data.name, data.lastname, data.university, data.files, data.nickname, data.friends.lenght, data.term, data.interestedCourses, data.description, data.points, data.startYear],
            ["email", "name", "lastname", "university", "numberFilesUploaded", "nickname", "numberFriends", "career", "enrolledCourses", "profileDescription", "score", "startYear"]
        );
    },

    setDataUsers: (dataList, attributes) => {
        dataList.forEach((data, index) => {
            useUserStore.getState().setChange(data, attributes[index]);
        });
    },
    register: async (credentials) => {
        await useAuthStore.getState().login({ email: credentials.email, password: credentials.password })
            .then(
                res => {
                    if (!res) {
                        return true;
                    }
                }
            );

    }
}));