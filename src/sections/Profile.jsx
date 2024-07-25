import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import BackButton from "../components/backButton";
import { useUserStore } from "../store/utils";
import profileTemplate from "../assets/profile-template.png";
import uniDefault from "../assets/icons8-university-48.png";
import friendsIcon from "../assets/icons8-grupo-de-primer-plano-seleccionado-96.png";
import materialUploaded from "../assets/icons8-electivo-96.png";
import rating from "../assets/starRating.png";
import {universities} from "../static/academic";
import { CardNumberStat } from "../components/Cards";

const Profile = () => {
    const user = useUserStore(state => state.user);
    const uniImage = (universities.filter((u) => u.sigle === user.university))[0].logo || uniDefault;

    return(
        <div>
            <div className="flex w-full justify-between items-center my-5">
                <BackButton></BackButton>
            </div>
            <div className="flex">
                <div className="w-1/3 flex items-center justify-center">
                    <img src={profileTemplate} alt="profile" className="w-9/12 dark:invert border rounded-full"/>
                </div>
                <div className="2/3 flex flex-col py-4 gap-2">
                    <h1 className="text-2xl font-bold text-cach-l3 dark:text-cach-l2" >{user.name} {user.lastname}</h1>
                    <i className="text-lg font-medium text-cach-l3 dark:text-cach-l2">
                        {user.nickname}
                    </i>
                    <h1 className="text-xl font-semibold text-cach-l3 dark:text-cach-l2">
                        {user.career}
                    </h1>
                    <img src={uniImage} alt="uniImage" className="w-14"/>
                </div>
                
            </div>

            <div className="w-11/12 m-auto my-5">
                <h1 className="text-2xl font-bold text-cach-l3 dark:text-cach-l2">Actividad</h1>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-4 my-3">
                    <CardNumberStat number={30} title="Amigos" imgsrc={friendsIcon}/>
                    <CardNumberStat number={12} title="Subidos" imgsrc={materialUploaded}/>
                    <CardNumberStat number={150} title="Puntos" imgsrc={rating}/>
                </div>
            </div>
        </div>
    )
}

export default Profile;