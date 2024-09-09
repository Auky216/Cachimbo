import React, {useState, useEffect} from "react";
//import { getEvents } from "../../constant/Events";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import BackButton from "../../components/buttons";
import image from "../../assets/Events/hackaton.png";
import Loader from "../../components/Loading";

const EventInfo = () => {
  const [eventData, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const {event} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const eventData = JSON.parse(localStorage.getItem("events")); // accedemos al local Storage
    if (eventData){
      //si existe el evento en el local storage, filtramos por el id pasado en el params y lo seteamos
      const currentEvent = eventData.find((e) => e.id === event);
      setEvent(currentEvent);
      //console.log(currentEvent);
      setLoading(false);
    }
    else {
      //si no existe algun dato en el local storage, lo regresamos al menú principal
      navigate("/dashboard/main/events");
    }
  }, []);

  const handleBackClick = () => {
    navigate("/dashboard/main/events");
  };

  //console.log(image);
  //console.log(eventData.image);
  //console.log(image === eventData.image);

  return (
    <section id="event-info" className="py-10 pr-8 h-screen overflow-y-auto">
      {loading ? <Loader/>: <div className="mx-auto max-w-3xl rounded-lg p-6">
        <div className="flex justify-end mb-1">
          {/* <button
            onClick={handleBackClick}
            className="rounded-full bg-cach-l3 px-5 py-1 text-cach-l1"

          >
            Regresar
          </button> */}
          <BackButton />
        </div>
        <h1 className="mb-4 text-3xl font-bold text-cach-l3 dark:text-cach-l2">
          {eventData.title}
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <div className="h-64 bg-gray-200 flex items-center justify-center rounded-lg mb-4">
              <img
                src={eventData.image || image}
                alt="Imagen del evento"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-1/3 md:pl-6">
            <p className="mb-2 text-cach-l5 dark:text-cach-l1">
              <strong>Organizador:</strong> {eventData.nickname}
            </p>
            <p className="mb-2 text-cach-l5 dark:text-cach-l1">
              <strong>Universidad:</strong> {eventData.university}
            </p>
            <p className="mb-2 text-cach-l5 dark:text-cach-l1">
              <strong>Fecha:</strong> {eventData.date}
            </p>
            <p className="mb-2 text-cach-l5 dark:text-cach-l1">
              <strong>Hora:</strong> {eventData.hour}
            </p>
            <p className="mb-2 text-cach-l5 dark:text-cach-l1">
              <strong>Dirección:</strong> {eventData.direction}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="mb-2 text-xl font-bold text-cach-l3 dark:text-cach-l2">Descripción</h3>
          <p className="text-justify text-cach-l5 dark:text-cach-l1">{eventData.description}</p>
        </div>
      </div>}
    </section>
  );
};

export default EventInfo;
