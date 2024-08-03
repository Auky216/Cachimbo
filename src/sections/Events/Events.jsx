import React, { useState, useRef } from "react";
import { EventMiniCard } from "../../components/Cards";
import { getEvents } from "../../constant/Events";

const Events = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [events, setEvents] = useState(Object.entries(getEvents));
  console.log(events);

  const handleSearch = () => {
    const filteredEvents = Object.entries(getEvents).filter(([_, event]) => {
      const normalizedTitle = event.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      return normalizedTitle.includes(inputValue.toLowerCase());
    });
    setEvents(filteredEvents);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section id="events" className="py-10 pr-8">
      <div className="mb-4">
        <input
          onChange={handleChange}
          type="text"
          ref={inputRef}
          value={inputValue}
          onKeyUp={handleKeyUp}
          placeholder="Buscar eventos"
          className="w-full rounded-full border border-cach-l3 bg-cach-l1 bg-transparent px-5 py-2 text-cach-l3 placeholder-cach-l3/70 focus:outline-none dark:border-cach-l2 dark:text-cach-l2 dark:placeholder-cach-l2/40"
        />
      </div>

      <div className="my-8 flex space-x-4">
        <button className="rounded-full bg-cach-l3 px-5 py-1 text-cach-l1 focus:outline-none">
          Todos
        </button>
        <button className="rounded-full bg-cach-l3 px-5 py-1 text-cach-l1 focus:outline-none">
          Favoritos
        </button>
        <button className="rounded-full bg-cach-l3 px-5 py-1 text-cach-l1 focus:outline-none">
          Tus me gusta
        </button>
        <button className="rounded-full bg-cach-l3 px-5 py-1 text-cach-l1 focus:outline-none">
          Recientes
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {events.map(([id, event]) => (
          <EventMiniCard
            key={id}
            title={event.title}
            date={event.date}
            hour={event.hour}
            link={`/dashboard/main/events/${id}`}
            image={event.image} 
          />
        ))}
      </div>
    </section>
  );
};

export default Events;
