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
    <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
      <div className="flex items-center space-x-4">
        <img src={icon} className="h-34 w-40" alt="panelistas" loading="lazy" />
        <div>
          <h1 className="text-lg font-bold text-cach-l3 dark:text-cach-l2">
            {title}
          </h1>
          <div className="flex items-center space-x-2">
            <img
              src={students}
              className="w-15 h-16"
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
      <div className="mt-2 flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img
            src={discordIcon}
            className="h-8 w-8 cursor-pointer"
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
            className="h-8 w-8 cursor-pointer"
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

      <div className="mt-4 flex w-full justify-center">
        <button
          onClick={toggleTempInfo}
          className="ml-4 rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
        >
          Información
        </button>
      </div>
    </div>
  );
};

export default GroupInfo;
