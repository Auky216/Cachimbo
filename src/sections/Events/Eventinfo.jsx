import React, { useState, useRef } from "react";
import { getEvents } from "../../constant/Events";
import { useParams } from "react-router-dom";

const EventInfo  = () => {
    const { event } = useParams();
    const eventData = getEvents[event];

    return (
        
        <section id="event-info" className="py-10 pr-8">
            <div className="mx-auto max-w-3xl rounded-lg p-6">
                <h1 className="mb-4 text-3xl font-bold text-cach-l3 dark:text-cach-l2">
                    {eventData.title}
                </h1>
                <p className="mb-6 text-cach-l5  dark:text-cach-l1">Organizador: {eventData.organizer}</p>

                <div className="mb-4">
                   <h3>Descripción</h3>
                    <p className=" text-cach-l5 dark:text-cach-l1 ">{eventData.description}</p>
                </div>

            </div>
        </section>

    )
}

export default EventInfo
