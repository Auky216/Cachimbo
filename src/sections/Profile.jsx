import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import BackButton from "../components/buttons";
import { useUserStore } from "../store/utils";
import profileTemplate from "../assets/profile-template.jpg";
import uniDefault from "../assets/icons8-university-48.png";
import friendsIcon from "../assets/icons8-grupo-de-primer-plano-seleccionado-96.png";
import materialUploaded from "../assets/icons8-electivo-96.png";
import rating from "../assets/starRating.png";
import { universities, carrers } from "../static/academic";
import { CardNumberStat } from "../components/Cards";
import Loader from "../components/Loading";

const Profile = () => {
  const {user} = useUserStore();
  // const careerName = carrers[user.university].find(
  //   carr => carr.code === user.career,
  // ).name;
  const careerName = user.career;
  const uniImage = user.university != '' ? universities.filter(u => u.sigle === user.university)[0].logo || uniDefault : uniDefault;

  return (
    <div>
      <div className="my-5 flex w-full items-center justify-between">
        <BackButton></BackButton>
      </div>
      <div className="flex mx-auto">
        <div className="flex w-1/3 items-center justify-center">
          <img
            src={profileTemplate}
            alt="profile"
            className="w-9/12 rounded-full border-cach-l4"
          />
        </div>
        <div className="w-2/3 flex flex-col gap-2 py-4">
          <h1 className="text-2xl font-bold text-cach-l3 dark:text-cach-l2">
            {user.name} {user.lastname}
          </h1>
          <i className="text-lg items-center flex font-medium gap-7 text-cach-l3 dark:text-cach-l2">
            @{user.nickname}    <img src={uniImage} alt="uniImage" className="w-6" />
          </i>
          <h1 className="text-xl font-semibold text-cach-l3 dark:text-cach-l2">
            {careerName}  
          </h1>
          <i className="text-base font-semibold text-cach-l3 dark:text-cach-l2">Cachimbo {user.startYear}</i>
        </div>
      </div>
      <div className="w-full">
        <div className="w-10/12 mx-auto border-2 p-4 text-center rounded-xl my-6 text-cach-l4 dark:text-cach-l1">
          {user.profileDescription || "No hay descripción"}
        </div>
      </div>
      <div className="m-auto my-5 w-11/12">
        <h1 className="text-2xl font-bold text-cach-l3 dark:text-cach-l2">
          Actividad
        </h1>
        <div className="my-3 grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-4">
          <CardNumberStat number={user.numberFriends || 0} title="Amigos" imgsrc={friendsIcon} />
          <CardNumberStat
            number={ user.numberFilesUploaded || 0}
            title="Subidos"
            imgsrc={materialUploaded}
          />
          <CardNumberStat number={user.score || 0} title="Puntos" imgsrc={rating} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
