import React, { useState, useEffect } from "react";

const EventCountdown = ({ eventDate }) => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown("Event has ended");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [eventDate]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-3xl font-semibold text-blue-400 mr-2">
        {countdown}
      </div>
      <div className="text-gray-400">until the event</div>
    </div>
  );
};

const EventsSection = () => {
  const events = [
    {
      name: "Event 1",
      date: new Date("2023-06-30T09:00:00"),
      location: "Virtual",
    },
    {
      name: "Event 2",
      date: new Date("2023-07-15T18:30:00"),
      location: "City Hall Auditorium",
    },
    {
      name: "Event 3",
      date: new Date("2023-08-15T18:30:00"),
      location: "Radisson Blue",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl pt-8 pb-16 font-semibold text-gray-800 text-center">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-white  via-white to-blue-100  text-center rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {event?.name}
              </h3>
              <EventCountdown eventDate={event.date} />
              <p className="text-gray-600">
                <span className="text-xl font-bold">Registration Until: </span>
                <br /> {event?.date.toDateString()} <br />
                <span className="text-lg font-bold text-blue-300">
                  Location: {event.location}
                </span>
              </p>
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
