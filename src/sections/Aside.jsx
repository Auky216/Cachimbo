import { CachimboLogo } from "../components/icons/CachimoLogo";
import ThemeButton from "../components/ThemeButton";
import profileTemplate from "../assets/profile-template.png";
import uploadIcon from "../assets/icons8-subir-96.png"

const Aside = () => {
  return (
    <aside className="min-h-screen min-w-[20%] border border-black p-4">
      <div className="h-full w-full pt-2">
        
        {/* logo cachimbo */}
        <CachimboLogo className="mb-4 lg:mb-0" />
        
        <div className="mt-5 items-center w-full">
          {/* componente cuadro de perfil */}
          {/* datos de perfil */}
          <div className="flex flex-row">
            <div>
              <img src={profileTemplate} alt="profile" className="w-20 dark:invert"/>
            </div>
            <div class="flex flex-col items-left justify-center font-bold">
              <p class="text-cach-l3 dark:text-cach-l2 text-xs">Juan Salvatierra</p>
              <h2 class="text-cach-l3 dark:text-cach-l2 text-base">@Jojiz</h2>
            </div>
          </div>

          <div class="flex justify-between ml-5 mr-5 items-center text-base text-cach-l2">
            <div class="flex justify-center items-center flex-col">
              <p className="font-extrabold">30</p>
              <p className="font-semibold">Amigos</p>
            </div>
            <div class="flex justify-center items-center flex-col">
              <p className="font-extrabold">12</p>
              <p className="font-semibold">Subidos</p>
            </div>
            <div class="flex justify-center items-center flex-col">
              <p className="font-extrabold">150</p>
              <p className="font-semibold">Puntos</p>
            </div>
          </div>

          <button class="bg-cach-l3 w-full min-h-10 flex items-center justify-center rounded-xl mt-3 mb-3 text-cach-l1">
            <img src={uploadIcon} alt="icon" className="w-4 mr-1 invert"/> Subir
          </button>
        </div>
        {/* componente de section buttons */}
      
        <div className="flex justify-center">
            <ThemeButton />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
