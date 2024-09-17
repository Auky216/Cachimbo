import React from "react";
import students from "../assets/icons8-grupo-de-primer-plano-seleccionado-96.png";
import discordIcon from "../assets/discord.svg";
import whatsappIcon from "../assets/whatsapp.svg";

const GroupInfo = ({
  icon,
  title,
  numMembers,
  toggleTempInfo,
  discordLink,
  whatsappLink,
}) => {
  const openDiscordLink = () => {
    window.open(discordLink, "_blank");
  };

  const openWhatsappLink = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-4 py-4 dark:border-cach-l w-full max-w-72 min-w-[200px]">
      <div className="flex flex-col lg:flex-row items-center w-full space-y-4 lg:space-y-0 lg:space-x-4 h-full">
        <img
          src={icon}
          className="h-24 w-24 object-contain"
          alt="panelistas"
          loading="lazy"
        />
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-lg font-bold text-cach-l3 dark:text-cach-l2">
            {title}
          </h1>
          <div className="flex items-center space-x-2">
            <img
              src={students}
              className="w-8 h-8"
              alt="fig asistente"
              loading="lazy"
            />
            <span className="text-pretty text-cach-l3 dark:text-cach-l1">
              +{numMembers}
            </span>
          </div>
        </div>
      </div>

      {/* Mostrar iconos de redes sociales*/}
      <div className="mt-4 flex items-center flex-col space-x-0 space-y-2 lg:space-x-4 lg:space-y-0 lg:flex-row">
        <div className="flex items-center space-x-2">
          <img
            src={discordIcon}
            className="h-6 w-6 cursor-pointer"
            alt="Discord Icon"
            loading="lazy"
            onClick={openDiscordLink}
          />
          <span
            className="cursor-pointer text-cach-l3 hover:underline dark:text-cach-l1"
            onClick={openDiscordLink}
          >
            Discord
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={whatsappIcon}
            className="h-6 w-6 cursor-pointer"
            alt="WhatsApp Icon"
            loading="lazy"
            onClick={openWhatsappLink}
          />
          <span
            className="cursor-pointer text-cach-l3 hover:underline dark:text-cach-l1"
            onClick={openWhatsappLink}
          >
            WhatsApp
          </span>
        </div>
      </div>

      <div className="mt-4 flex justify-center w-full">
        <button
          onClick={toggleTempInfo}
          className="rounded-full bg-cach-l3 px-6 py-2 text-sm text-cach-l1 focus:outline-none"
        >
          Información
        </button>
      </div>
    </div>
  );
};

export default GroupInfo;
