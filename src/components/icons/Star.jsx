export const Star = ({ bg, l, onClick, onMouseEnter, onMouseLeave, item}) => {
  return (
    <svg
      item={item}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns="http://www.w3.org/2000/svg"
      width={l || "800"}
      height={l || "800"}
      version="1.1"
      viewBox="0 0 47.94 47.94"
      xmlSpace="preserve"
      className={`${bg ? "fill-[#FFD700D0] dark:fill-[yellow]" : "fill-cach-l5 dark:fill-white"}`}
    >
      <path
        d="M26.285 2.486l5.407 10.956a2.58 2.58 0 001.944 1.412l12.091 1.757c2.118.308 2.963 2.91 1.431 4.403l-8.749 8.528a2.582 2.582 0 00-.742 2.285l2.065 12.042c.362 2.109-1.852 3.717-3.746 2.722l-10.814-5.685a2.585 2.585 0 00-2.403 0l-10.814 5.685c-1.894.996-4.108-.613-3.746-2.722l2.065-12.042a2.582 2.582 0 00-.742-2.285L.783 21.014c-1.532-1.494-.687-4.096 1.431-4.403l12.091-1.757a2.58 2.58 0 001.944-1.412l5.407-10.956c.946-1.919 3.682-1.919 4.629 0z"
      ></path>
    </svg>
  );
};