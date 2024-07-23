import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import BackButton from "../components/backButton";

const Profile = () => {
    return(
        <div>
            <div className="flex w-full justify-between items-center my-5">
                <h1 className="text-2xl font-bold text-cach-l3 dark:text-cach-l2" >Tus Queridos Profes</h1>
                <BackButton></BackButton>
            </div>
        </div>
    )
}

export default Profile;