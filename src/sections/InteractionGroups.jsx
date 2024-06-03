import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import students from "../assets/icons8-grupo-de-primer-plano-seleccionado-96.png";
import expertsPanel from "../assets/icons8-panel-of-experts-96.png";
import teacher from "../assets/icons8-profesor-96.png";
import university from "../assets/icons8-university-48.png";
import utec from "../assets/Utec_Icon.png";
import marketing from "../assets/Comunity_Icon.png";

Modal.setAppElement("#root"); 

const InteractionGroups = () => {
  const [tempInfoVisible, setTempInfoVisible] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    // Agregar más estados 
  });

  const [groupStates, setGroupStates] = useState([
    { id: 1, joined: false },
    { id: 2, joined: false },
    { id: 3, joined: false },
    { id: 4, joined: false }, 
    // Agregar más objetos 
  ]);

  const toggleTempInfo = (groupId) => {
    setTempInfoVisible((prevStates) => ({
      ...prevStates,
      [groupId]: !prevStates[groupId],
    }));
  };

  const toggleJoined = (groupId) => {
    setGroupStates((prevStates) =>
      prevStates.map((state) =>
        state.id === groupId ? { ...state, joined: !state.joined } : state
      )
    );
  };

  const closeModal = (groupId) => {
    setTempInfoVisible((prevStates) => ({
      ...prevStates,
      [groupId]: false,
    }));
  };

  const renderGroups = () => {
    return (
      <div className="grid grid-cols-2 gap-60">
        {/*Group Ajedrez*/}
        <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
          {/* Contenido del grupo */}
          <div className="flex items-center space-x-4">
            {/* Aquí va el icono */}
            <img
              src={expertsPanel}
              className="h-34 w-40"
              alt="panelistas"
              loading="lazy"
            />
            <div>
              {/* Título del grupo */}
              <h1 className="text-lg font-bold text-cach-l3 dark:text-cach-l2">
                Grupo de ajedrez
              </h1>
              {/* Detalles del grupo */}
              <div className="flex items-center space-x-2">
                <img
                  src={students}
                  className="w-15 h-16"
                  alt="fig asistente"
                  loading="lazy"
                />
                <span className="text-pretty text-cach-l3 dark:text-cach-l2">
                  +12
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={utec}
                  className="h-12 w-14"
                  alt="logo de la universidad"
                  loading="lazy"
                />
                <p className="text-pretty text-cach-l3 dark:text-cach-l2">
                  UTEC
                </p>
              </div>
            </div>
          </div>

          {/* Botones de unirse y mostrar información */}
          <div className="mt-4 flex w-full justify-center">
            <button
              onClick={() => toggleJoined(1)} // Cambiar el id del grupo según corresponda
              className="rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
            >
              {groupStates.find((state) => state.id === 1)?.joined
                ? "Salir"
                : "Unirse"}
            </button>
            <button
              onClick={() => toggleTempInfo(1)} // Cambiar el id del grupo según corresponda
              className="ml-4 rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
            >
              {tempInfoVisible[1] ? "Ocultar Info" : "Infomacion"}
            </button>
          </div>

          {/* Modal de información del grupo */}
          <Modal
            isOpen={tempInfoVisible[1]}
            onRequestClose={() => closeModal(1)}
            contentLabel="Información temporal grupo de ajedrez"
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#cbb7f7",
                color: "black",
                borderRadius: "10px",
                padding: "20px",
                width: "80%",
                maxWidth: "500px",
              },
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
            }}
          >
            {/* Contenido del modal */}
            <div
              className="mt-4 p-4 bg-white text-black text-center rounded

              -lg shadow-lg"
              style={{ fontFamily: "Arial, sans-serif", color: "#6a0dad" }}
            >
              <h2 className="text-lg font-bold">
                Información del Grupo de Ajedrez
              </h2>
              <p>
                Aquí puedes encontrar torneos de ajedrez tanto online como
                presencial en los talleres de UTEC
              </p>
            </div>
            <button
              onClick={() => closeModal(1)}
              className="mt-4 rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
            >
              Cerrar
            </button>
          </Modal>
        </div>


        {/* Grupo Calculo 1 */}
        <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
          <div className="flex items-center space-x-4">
            <img
              src={teacher}
              className="h-34 w-40"
              alt="panelistas"
              loading="lazy"
            />
            <div>
              <h1 className="text-lg font-bold text-cach-l3 dark:text-cach-l2">
                Calculo 1 se pasa Solo
              </h1>
              <div className="flex items-center space-x-2">
                <img
                  src={students}
                  className="w-15 h-16"
                  alt="fig asistente"
                  loading="lazy"
                />
                <span className="text-pretty text-cach-l3 dark:text-cach-l2">
                  +99
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={utec}
                  className="h-12 w-14"
                  alt="logo de la universidad"
                  loading="lazy"
                />
                <p className="text-pretty text-cach-l3 dark:text-cach-l2">
                  UTEC
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex w-full justify-center">
            <button
              onClick={() => toggleJoined(2)} 
              className="rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
            >
              {groupStates.find((state) => state.id === 2)?.joined
                ? "Salir"
                : "Unirse"}
            </button>
            <button
              onClick={() => toggleTempInfo(2)}
              className="ml-4 rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
            >
              {tempInfoVisible[2] ? "Ocultar Info" : "Infomacion"}
            </button>
          </div>

          <Modal
            isOpen={tempInfoVisible[2]}
            onRequestClose={() => closeModal(2)}
            contentLabel="Información temporal grupo de Calculo 1"
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#cbb7f7",
                color: "black",
                borderRadius: "10px",
                padding: "20px",
                width: "80%",
                maxWidth: "500px",
              },
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
            }}
          >
            <div
              className="mt-4 p-4 bg-white text-black text-center rounded-lg shadow-lg"
              style={{ fontFamily: "Arial, sans-serif", color: "#6a0dad" }}
            >
              <h2 className="text-lg font-bold">
                Información del Grupo de Calculo 1
              </h2>
              <p>
                Aquí puedes encontrar recursos y apoyo para aprobar Calculo 1
                de manera efectiva
              </p>
            </div>
            <button
              onClick={() => closeModal(2)}
              className="mt-4 rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
            >
              Cerrar
            </button>
          </Modal>
          
        </div>

        {/* Grupo Marketing */}
        <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
          <div className="flex items-center space-x-4">
            <img
              src={marketing}
              className="h-34 w-40"
              alt="panelistas"
              loading="lazy"
            />
            <div>
              <h1 className="text-lg font-bold text-cach-l3 dark:text-cach-l2">
                Los Marketeros
              </h1>
              <div className="flex items-center space-x-2">
                <img
                  src={students}
                  className="w-15 h-16"
                  alt="fig asistente"
                  loading="lazy"
                />
                <span className="text-pretty text-cach-l3 dark:text-cach-l2">
                  +2
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={university}
                  className="h-12 w-14"
                  alt="logo de la universidad"
                  loading="lazy"
                />
                <p className="text-pretty text-cach-l3 dark:text-cach-l2">UP</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex w-full justify-center">
            <button
              onClick={() => toggleJoined(3)} 
              className="rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
            >
              {groupStates.find((state) => state.id === 3)?.joined
                ? "Salir"
                : "Unirse"}
            </button>
            <button
              onClick={() => toggleTempInfo(3)}
              className="ml-4 rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
            >
              {tempInfoVisible[3] ? "Ocultar Info" : "Infomacion"}
            </button>
          </div>

          <Modal
            isOpen={tempInfoVisible[3]}
            onRequestClose={() => closeModal(3)}
            contentLabel="Información temporal grupo de Calculo 1"
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#cbb7f7",
                color: "black",
                borderRadius: "10px",
                padding: "20px",
                width: "80%",
                maxWidth: "500px",
              },
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
            }}
          >
            <div
              className="mt-4 p-4 bg-white text-black text-center rounded-lg shadow-lg"
              style={{ fontFamily: "Arial, sans-serif", color: "#6a0dad" }}
            >
              <h2 className="text-lg font-bold">
              Grupo Marketing
              </h2>
              <p>
                Aquí puedes encontrar gente con las misma pasión por el marketing
              </p>
            </div>
            <button
              onClick={() => closeModal(3)}
              className="mt-4 rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
            >
              Cerrar
            </button>
          </Modal>
        </div>

        {/*Group Left 4 Dead 2 UPC*/}
        <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
          <div className="flex items-center space-x-4">
            <img
              src={expertsPanel}
              className="h-34 w-40"
              alt="panelistas"
              loading="lazy"
            />
            <div>
              <h1 className="text-lg font-bold text-cach-l3 dark:text-cach-l2">
                Group Left 4 Dead 2
              </h1>
              <div className="flex items-center space-x-2">
                <img
                  src={students}
                  className="w-15 h-16"
                  alt="fig asistente"
                  loading="lazy"
                />
                <span className="text-pretty text-cach-l3 dark:text-cach-l2">
                  +122
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={university}
                  className="h-12 w-14"
                  alt="logo de la universidad"
                  loading="lazy"
                />
                <p className="text-pretty text-cach-l3 dark:text-cach-l2">
                  UPC
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex w-full justify-center">
            <button
              onClick={() => toggleJoined(4)} 
              className="rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
            >
              {groupStates.find((state) => state.id === 4)?.joined
                ? "Salir"
                : "Unirse"}
            </button>
            <button
              onClick={() => toggleTempInfo(4)}
              className="ml-4 rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
            >
              {tempInfoVisible[4] ? "Ocultar Info" : "Infomacion"}
            </button>
          </div>

          <Modal
            isOpen={tempInfoVisible[4]}
            onRequestClose={() => closeModal(4)}
            contentLabel="Información temporal grupo de Calculo 1"
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#cbb7f7",
                color: "black",
                borderRadius: "10px",
                padding: "20px",
                width: "80%",
                maxWidth: "500px",
              },
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
            }}
          >
            <div
              className="mt-4 p-4 bg-white text-black text-center rounded-lg shadow-lg"
              style={{ fontFamily: "Arial, sans-serif", color: "#6a0dad" }}
            >
              <h2 className="text-lg font-bold">
              Group Left 4 Dead 2 UPC
              </h2>
              <p>
                Aquí puedes encontrar gente con las misma pasión por el juego Left 4 Dead 2
              </p>
            </div>
            <button
              onClick={() => closeModal(4)}
              className="mt-4 rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
            >
              Cerrar
            </button>
          </Modal>
        </div>

      </div>
    );
  };

  return (
    <section id="interactionGroups" className="py-10 pr-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Busca tu grupo de amigos"
          className="w-full rounded-full border border-cach-l3 bg-cach-l1 bg-transparent px-5 py-2 text-cach-l3 placeholder-cach-l3/70 focus:outline-none dark:border-cach-l2 dark:text-cach-l2 dark:placeholder-cach-l2/40"
        />
      </div>

      <div className="my-5 flex space-x-4">
        <button className="rounded-full bg-cach-l3 px-5 py-1 text-cach-l1 focus:outline-none">
          Todos
        </button>
        <button className="rounded-full bg-cach-l3 px-5 py-1 text-cach-l1 focus:outline-none">
          Favoritos
        </button>
      </div>

      {renderGroups()}
    </section>
  );
};

export default InteractionGroups;
