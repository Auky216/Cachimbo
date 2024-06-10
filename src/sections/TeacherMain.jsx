import { TeacherMiniCard } from "../components/Cards";

const TeacherMain = () => {
  /** Estoy pensando en que cuando se pase
    el nombre al componente teacherMinicard usar 
    un parametro en especifico para cargar la imagen
    -De momento haré que el componente reciba la imagen como parametro
    */
  return (
    <div className="w-full pt-3">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(224px,_1fr))] gap-4">
        {/* Se usará un map para generar todos los teaches mini card necesarios */}
        <TeacherMiniCard
          name="Josmar"
          course="Cálculo de una Variable I"
          rate="4"
        />
        <TeacherMiniCard
          name="Jorge"
          course="Matemáticas Discretas I"
          rate="5"
        />
        <TeacherMiniCard name="Henry" course="Programación I" rate="5" />
      </div>
    </div>
  );
};

export default TeacherMain;
