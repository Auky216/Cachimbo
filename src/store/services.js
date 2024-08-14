import { json } from "react-router-dom";
import { useUserStore } from "./utils";

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