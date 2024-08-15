import { useUserStore } from "./utils";

/* Library section */
export const getIsLiked = async (id_library) => {
    try {
        const response = await fetch("/api/test/api/library/like/get", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "nickname": useUserStore.getState().user.nickname,
                id_library,
                "token": useUserStore.getState().user.token,
            }),
        });
        const data = await response.json();
        const body = JSON.parse(data.body);
        return body.like;
    } catch (error) {
        //console.log(error);
        return null; // Retorna un valor por defecto en caso de error.
    }
};


export const sendLike = (id_library, like) =>{
    fetch("/api/test/api/library/like/send",{ 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "nickname": useUserStore.getState().user.nickname,
            id_library,
            like,
            "token": useUserStore.getState().user.token,
        })}
    )
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        //console.log("done");
    });
}

/* Get teacher information */

export const findTeachers = async (name, page) => {
    try {
        const response = await fetch("/api/test/api/teacher/find_teacher", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                page,
                token: useUserStore.getState().user.token,
            }),
        });
        const data = await response.json();
        const body = JSON.parse(data.body);
        return body;
    } catch (error) {
        console.error(error);
        
    }
}

export const getDataTeacher = async (name) => {
    const token = useUserStore.getState().user.token;
    try {
        const response = await fetch("/api/test/api/teacher/get_information", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                token,
            }),
        });
        const data = await response.json();
        const body = JSON.parse(data.body);
        return body;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getTeachersComments = async (teacher_name) => {
    try {
        const res = await fetch("/api/test/api/teacher/calification/get", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                teacher_name,
                token: useUserStore.getState().user.token,
            }),
        });
        const data = await res.json();
        const body = JSON.parse(data.body);
        return body;
    } catch (error) {
        console.log(error);
    }
}

export const sendTeacherOpinion = async (teacher_name, comment, score) => {
    const res = await fetch("/api/test/api/teacher/calification/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            teacher_name,
            nickname: useUserStore.getState().user.nickname,
            career: useUserStore.getState().user.career,
            comment,
            score,
            token: useUserStore.getState().user.token,
        }),
    });
}
