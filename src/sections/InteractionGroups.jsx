import React, { useState } from "react";
import expertsPanel from "../assets/icons8-panel-of-experts-96.png";
import teacher from "../assets/icons8-profesor-96.png";
import marketing from "../assets/Comunity_Icon.png";
import GroupInfo from "../components/GroupInfo";
import Modal from "react-modal";
Modal.setAppElement("#root");

const InteractionGroups = () => {
  const infoGroups = [
    {
      title: "Grupo de ajedrez",
      icon: expertsPanel,
      description:
        "Aquí puedes encontrar torneos de ajedrez tanto online como presencial en los talleres de UTEC",
    },
    {
      title: "Calculo 1 se pasa Solo",
      icon: teacher,
      description:
        "Aquí puedes encontrar recursos y apoyo para aprobar Calculo 1 de manera efectiva",
    },
    {
      title: "Los Marketeros",
      icon: marketing,
      description:
        "Aquí puedes encontrar gente con las misma pasión por el marketing",
    },
    {
      title: "Group Left 4 Dead 2",
      icon: expertsPanel,
      description:
        "Aquí puedes encontrar gente con las misma pasión por el juego Left 4 Dead 2",
    },
  ];

  const [tempInfoVisible, setTempInfoVisible] = useState(false);
  const [index, setIndex] = useState(0);

  const closeModal = () => {
    setTempInfoVisible(false);
  };
  const [groupStates, setGroupStates] = useState([
    { id: 1, joined: false },
    { id: 2, joined: false },
    { id: 3, joined: false },
    { id: 4, joined: false },
    // Agregar más objetos
  ]);

  const toggleJoined = groupId => {
    setGroupStates(prevStates =>
      prevStates.map(state =>
        state.id === groupId ? { ...state, joined: !state.joined } : state,
      ),
    );
  };

  const renderGroups = () => {
    return (
      <div className="grid grid-cols-2 gap-60">
        {/*Group Ajedrez*/}
        <GroupInfo
          icon={expertsPanel}
          groupState={groupStates[0].joined}
          title="Grupo de ajedrez"
          numMembers={12}
          toggleJoined={() => toggleJoined(1)}
          toggleTempInfo={() => {
            setTempInfoVisible(true);
            setIndex(0);
          }}
        />

        {/* Grupo Calculo 1 */}
        <GroupInfo
          icon={teacher}
          groupState={groupStates[1].joined}
          title="Calculo 1 se pasa Solo"
          numMembers={99}
          toggleJoined={() => toggleJoined(2)}
          toggleTempInfo={() => {
            setTempInfoVisible(true);
            setIndex(1);
          }}
        />

        {/* Grupo Marketing */}
        <GroupInfo
          icon={marketing}
          groupState={groupStates[2].joined}
          title="Los Marketeros"
          numMembers={2}
          toggleJoined={() => toggleJoined(3)}
          toggleTempInfo={() => {
            setTempInfoVisible(true);
            setIndex(2);
          }}
        />

        {/*Group Left 4 Dead 2 UPC*/}
        <GroupInfo
          icon={expertsPanel}
          groupState={groupStates[3].joined}
          title="Group Left 4 Dead 2"
          numMembers={122}
          toggleJoined={() => toggleJoined(4)}
          toggleTempInfo={() => {
            setTempInfoVisible(true);
            setIndex(3);
          }}
        />
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

      <Modal
        isOpen={tempInfoVisible}
        onRequestClose={closeModal}
        contentLabel={infoGroups[index].title}
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
