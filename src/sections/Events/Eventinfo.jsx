import React from "react";
import { getEvents } from "../../constant/Events";
import { useParams, useNavigate } from "react-router-dom";
import image from "../../assets/Events/hackaton.png";

const EventInfo = () => {
  const { event } = useParams();
  const eventData = getEvents[event];
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/dashboard/main/events");
  };

  console.log(image);
  console.log(eventData.image);
  console.log(image === eventData.image);

  return (
    <section id="event-info" className="py-10 pr-8">
      <div className="mx-auto max-w-3xl rounded-lg p-6">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleBackClick}
            className="rounded-full bg-cach-l3 px-5 py-1 text-cach-l1"

          >
            Regresar
          </button>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-cach-l3 dark:text-cach-l2">
          {eventData.title}
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <div className="h-64 bg-gray-200 flex items-center justify-center rounded-lg mb-4">
              <img
                src={eventData.image}
                alt="Imagen del evento"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-1/3 md:pl-6">
            <p className="mb-2 text-cach-l5 dark:text-cach-l1">
              <strong>Organizador:</strong> {eventData.organizer}
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
              <strong>Dirección:</strong> {eventData.address}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="mb-2 text-xl font-bold text-cach-l3 dark:text-cach-l2">Descripción</h3>
          <p className="text-justify text-cach-l5 dark:text-cach-l1">{eventData.description}</p>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
