import students from "../assets/icons8-grupo-de-primer-plano-seleccionado-96.png";
// import utec from "../assets/Utec_Icon.png";
// import university from "../assets/icons8-university-48.png";

const GroupInfo = ({
  icon,
  groupState,
  title,
  numMembers,
  toggleJoined,
  toggleTempInfo,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
      {/* Contenido del grupo */}
      <div className="flex items-center space-x-4">
        {/* Aquí va el icono */}
        <img src={icon} className="h-34 w-40" alt="panelistas" loading="lazy" />
        <div>
          {/* Título del grupo */}
          <h1 className="text-lg font-bold text-cach-l3 dark:text-cach-l2">
            {title}
          </h1>
          {/* Detalles del grupo */}
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

      {/* Botones de unirse y mostrar información */}
      <div className="mt-4 flex w-full justify-center">
        <button
          onClick={toggleJoined} // Cambiar el id del grupo según corresponda
          className="rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
        >
          {groupState ? "Salir" : "Unirse"}
        </button>
        <button
          onClick={toggleTempInfo} // Cambiar el id del grupo según corresponda
          className="ml-4 rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
        >
          Información
        </button>
      </div>
    </div>
  );
};

export default GroupInfo;
