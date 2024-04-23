import { CachimboLogo } from "../components/icons/CachimoLogo";
import ThemeButton from "../components/ThemeButton";

const Aside = () => {
  return (
    <aside className="min-h-screen min-w-[20%] border border-black p-4">
      <div className="h-full">
        {/* logo cachimbo */}
        <CachimboLogo className="mb-4 lg:mb-0" />
        Aside y opciones
        <div>
          {/* componente cuadro de perfil */}
          {/* datos de perfil */}
          <div className="flex justify-center">
            <ThemeButton />
          </div>
        </div>
        {/* componente de section buttons */}
      </div>
    </aside>
  );
};

export default Aside;
