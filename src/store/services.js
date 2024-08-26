import { useUserStore } from "./utils";
import { useAuthStore } from "./session";
import { SubmitFileError, MissingDataError } from "./errors";


/* Library section */

export const findLibrary = async (title, page="1") => {
    try {
        const response = await fetch("/api/test/api/library/find", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                page,
                token: useUserStore.getState().user.token,
            }),
        });
        const data = await response.json();
        const body = JSON.parse(data.body);
        //console.log(body);
        return body;
    } catch (error) {
        console.error(error);
    }
}


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

export const getLibrary = async (uni, course, id, extension) => {
    try {
        const res = await fetch("/api/test/api/library/get", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                object_key: `${uni}/${course}/${id}.${extension}`,
                expirtaion: 10,
            }),
        });
        const data = await res.json();
        const body = JSON.parse(data.body);
        //console.log(body);
        return body;
    } catch (error) {
        //console.log(error);
        throw new error;
    }
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
        //console.log(data, useUserStore.getState().user.token);
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


/* Upload File*/

export const pushFile = async (file_content, file_name, description, title, university, course, is_anonymous) => {
    //console.log(file_name, type, title, university, course, is_anonymous);
    if (file_content==null || title === ''|| description === '' || university === null || course === '') {

        throw new MissingDataError('Datos faltantes, necesitas completar todos los campos');
    }
    
    const reqBody = {
        file_content,
        file_name,
        title,
        description,
        university,
        course,
        is_anonymous,
        token: useUserStore.getState().user.token,
        nickname: is_anonymous ? "Anonymous" : useUserStore.getState().user.nickname, //el bug está en el user, porque solo acepta utecino
    };

    const res = await fetch('/api/test/api/library/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/pdf'
        },
        body: JSON.stringify(reqBody)
    })
    const data = await res.json();

    if (data.statusCode === 200) {
        await useAuthStore.getState().setGeneralData(useUserStore.getState().user.email, useUserStore.getState().user.token);
    }
    //console.log(data);

    if (data.errorMessage){
        throw new SubmitFileError(data.errorMessage);
    };
}

/* Course Section */

export const findCourses = async (name, page, university) => {
    try {
        const res = await fetch("/api/test/api/course/find", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                page,
                university,
                token: useUserStore.getState().user.token,
            }),
        })
        const data = await res.json();
        const body = JSON.parse(data.body);
        return body;
    } catch (error) {
        throw new error;
    }
}


export const getCourseInformation = async (course) => {
    try {
        const res = await fetch("/api/test/api/course/about", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                course,
                university: useUserStore.getState().user.university,
                token: useUserStore.getState().user.token,
            }),
        });
        const data = await res.json();
        const body = JSON.parse(data.body);
        return body;
    } catch (error) {
        throw new error;
    }
}

export const getPreRequisities_NextCourses = async (course) => {
    try {
        const res = await fetch("/api/test/api/course/prerequisites_nextcourses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                course,
                university: useUserStore.getState().user.university,
                career: "Ciencia de la Computación", //valor por default, despues cuando se corriga adaptar este código
                token: useUserStore.getState().user.token,
            }),
        });
        const data = await res.json();
        const body = JSON.parse(data.body);
        return body;
    } catch (error) {
        throw new error;
    }
}