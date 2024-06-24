import { useState } from "react";

// const modalVariants = {
//   hidden: { opacity: 0, scale: 0 },
//   visible: { opacity: 1, scale: 1 },
//   exit: { opacity: 0, scale: 0 },
// };

export const Modal = ({ open, onClose, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  /** <GroupInfo
            key={id}
            icon={infoGroups[id - 1].icon}
            groupState={groupStates[id - 1]}
            title={infoGroups[id - 1].title}
            numMembers={infoGroups[id - 1].numMembers}
            toggleJoined={() => toggleJoined(id - 1)}
            toggleTempInfo={() => {
              setIndex(id - 1);
              setTempInfoVisible(true);
            }}
          /> */

  /** const [tempInfoVisible, setTempInfoVisible] = useState(false);
  const [index, setIndex] = useState(0);

  // un array de numeros del 1 a infogroups.length
  const arr = Array.from({ length: infoGroups.length }, (_, i) => i + 1);

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
  }; */

  const openModal = () => {
    const modal_overlay = document.querySelector("#modal_overlay");
    const modal = document.querySelector("#modal");
    const modalCl = modal.classList;
    const overlayCl = modal_overlay;

    if (isOpen) {
      overlayCl.classList.remove("hidden");
      setTimeout(() => {
        modalCl.remove("opacity-0");
        modalCl.remove("-translate-y-full");
        modalCl.remove("scale-150");
      }, 100);
    } else {
      modalCl.add("-translate-y-full");
      setTimeout(() => {
        modalCl.add("opacity-0");
        modalCl.add("scale-150");
      }, 100);
      setTimeout(() => overlayCl.classList.add("hidden"), 300);
    }
  };

  return (
    <>
      <div
        id="modal_overlay"
        class="absolute inset-0 flex hidden h-screen w-full items-start justify-center bg-black bg-opacity-30 pt-10 md:items-center md:pt-0"
      >
        <div
          id="modal"
          class="pacity-0 relative h-1/2 w-10/12  -translate-y-full scale-150 transform rounded bg-white shadow-lg transition-opacity transition-transform duration-300 md:h-3/4 md:w-1/2"
        >
          <button
            onclick={setIsOpen(false)}
            class="absolute -right-3 -top-3 h-10 w-10 rounded-full bg-red-500 text-2xl text-white hover:bg-red-600 focus:outline-none"
          >
            &cross;
          </button>
          {children}
        </div>
      </div>
    </>
  );
};
