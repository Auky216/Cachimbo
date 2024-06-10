import { CardAcademic } from "../components/Cards";
const CourseContent = ({ keys }) => {
  return (
    <div className="mt-6 flex h-full w-full grow flex-col">
      <div className="flex h-full w-full flex-col gap-3 pb-10">
        <div className="flex h-fit w-full flex-col items-center justify-center space-y-8 px-6 pt-3">
          {keys.map((c) => (
            <CardAcademic
              key={c.key}
              searchKey={c.key}
              preDescrip={c.content}
              title={c.title}
              imgRef={c.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
