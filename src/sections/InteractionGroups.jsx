import React, { useState } from "react";
import GroupInfo from "../components/GroupInfo";
import Modal from "../components/Modal";
import { infoGroups } from "../constant/infoGroups";

const InteractionGroups = () => {
  const [tempInfoVisible, setTempInfoVisible] = useState(false);
  const [index, setIndex] = useState(0);

  // un array de numeros del 1 a infogroups.length
  const arr = Array.from({ length: infoGroups.length }, (_, i) => i + 1);

  const openModal = () => {
    setTempInfoVisible(true);
  };
  const closeModal = () => {
    setTempInfoVisible(false);
  };
  const [groupStates, setGroupStates] = useState(
    Array(infoGroups.length).fill(false),
  );

  const toggleJoined = id => {
    const newGroupStates = [...groupStates];
    newGroupStates[id] = !newGroupStates[id];
    setGroupStates(newGroupStates);
  };

  return (
    <section id="interactionGroups" className="py-10 pr-8 overflow-y-auto">
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

      <div className="flex flex-wrap justify-center gap-4 lg:gap-8"> 
        {/* Para manejar la distancia de sepracion de los cuadros de los grupos */}
        {arr.map(id => (
          <GroupInfo
            key={id}
            icon={infoGroups[id - 1].icon}
            groupState={groupStates[id - 1]}
            title={infoGroups[id - 1].title}
            numMembers={infoGroups[id - 1].numMembers}
            discordLink={infoGroups[id - 1].discordLink}
            whatsappLink={infoGroups[id - 1].whatsappLink} 
            toggleJoined={() => toggleJoined(id - 1)}
            toggleTempInfo={() => {
              setIndex(id - 1);
              setTempInfoVisible(true);
            }}
          />
        ))}
      </div>

      <Modal isOpen={tempInfoVisible} onClose={openModal}>
        {/* Contenido del modal */}
        <div
          className="-lg mt-4 rounded bg-white p-4 text-center text-black shadow-lg"
          style={{ fontFamily: "Arial, sans-serif", color: "#6a0dad" }}
        >
          <h2 className="text-lg font-bold">
            Información de: {infoGroups[index].title}
          </h2>
          <p>{infoGroups[index].description}</p>
        </div>
        <button
          onClick={closeModal}
          className="mt-4 rounded-full bg-cach-l3 px-8 py-2 text-sm text-cach-l1 focus:outline-none"
        >
          Cerrar
        </button>
      </Modal>
    </section>
  );
};

export default InteractionGroups;
