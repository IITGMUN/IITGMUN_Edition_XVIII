import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

// Helper to check status based on time and date
const getEventStatus = (date, startTime, endTime) => {
  const now = new Date();
  
  // Format: "DD/MM/YYYY" -> "YYYY-MM-DD" for Date constructor or manual parsing
  const [day, month, year] = date.split("/").map(Number);
  
  const start = new Date(year, month - 1, day);
  const [sHours, sMinutes] = startTime.split(":").map(Number);
  start.setHours(sHours, sMinutes, 0, 0);

  const end = new Date(year, month - 1, day);
  const [eHours, eMinutes] = endTime.split(":").map(Number);
  end.setHours(eHours, eMinutes, 0, 0);

  if (now > end) return "completed";
  if (now >= start && now <= end) return "active";
  return "upcoming";
};

const ItineraryDay = ({ date, events, themeColor, secondaryColor }) => {
  return (
    <div className={`flex-1 min-w-[300px] rounded-3xl p-6 shadow-xl ${secondaryColor} flex flex-col gap-6`}>
      <h3 className={`text-4xl font-bold text-center ${themeColor} mb-4`}>{date}</h3>
      <div className="flex flex-col gap-4">
        {events.map((event, index) => {
          const status = getEventStatus(date, event.startTime, event.endTime);
          const isActive = status === "active";
          const isCompleted = status === "completed";

          return (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-4">
                <div className="flex flex-col text-xs font-medium text-gray-500 w-12 shrink-0">
                  <span className={isActive ? themeColor : ""}>{event.startTime}</span>
                  <div className={`h-[1px] w-full my-1 ${isCompleted ? "bg-[#eb3360]" : "bg-gray-300"}`}></div>
                  <span className={isActive ? themeColor : ""}>{event.endTime}</span>
                </div>
                <div className={`flex-1 font-bold text-lg ${isActive ? themeColor : "text-blue-900"} opacity-90`}>
                  {event.label}
                </div>
              </div>
              {index !== events.length - 1 && (
                <div className={`h-[1px] w-full mt-4 bg-gray-200/50`}></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

ItineraryDay.propTypes = {
  date: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  themeColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
};

export default function LiveTimeline() {
  const itineraryData = useMemo(() => [
    {
      date: "30/01/2026",
      themeColor: "text-blue-600",
      secondaryColor: "bg-blue-50/50",
      events: [
        { startTime: "09:00", endTime: "10:00", label: "Registrations" },
        { startTime: "10:00", endTime: "11:00", label: "Opening ceremony" },
        { startTime: "11:00", endTime: "12:30", label: "Session 1" },
        { startTime: "12:30", endTime: "13:30", label: "LUNCH" },
        { startTime: "13:30", endTime: "15:00", label: "Session 2" },
        { startTime: "15:00", endTime: "15:30", label: "HIGH TEA" },
        { startTime: "15:30", endTime: "17:00", label: "Session 3" },
        { startTime: "17:00", endTime: "17:15", label: "Press Conference 1" },
      ]
    },
    {
      date: "31/01/2026",
      themeColor: "text-[#eb3360]",
      secondaryColor: "bg-red-50/50",
      events: [
        { startTime: "09:30", endTime: "12:00", label: "Session 4" },
        { startTime: "12:00", endTime: "13:00", label: "LUNCH" },
        { startTime: "13:00", endTime: "14:30", label: "Session 5" },
        { startTime: "14:30", endTime: "15:00", label: "HIGH TEA" },
        { startTime: "15:00", endTime: "16:15", label: "Session 6" },
        { startTime: "16:15", endTime: "16:30", label: "Press Conference 2" },
        { startTime: "17:00", endTime: "18:00", label: "Delegate Ball" },
      ]
    },
    {
      date: "01/02/2026",
      themeColor: "text-blue-600",
      secondaryColor: "bg-blue-50/50",
      events: [
        { startTime: "09:45", endTime: "12:30", label: "Session 7" },
        { startTime: "12:30", endTime: "13:30", label: "LUNCH" },
        { startTime: "13:30", endTime: "15:45", label: "Session 8" },
        { startTime: "15:45", endTime: "16:00", label: "Press Conference 3" },
        { startTime: "16:00", endTime: "17:00", label: "Closing Ceremony" },
      ]
    }
  ], []);

  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-20 px-4 bg-[#F1F8F3] font-montserrat">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter mb-4">
            ITINERARY
          </h2>
          <div className="w-24 h-2 bg-[#eb3360] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {itineraryData.map((day, index) => (
            <ItineraryDay key={index} {...day} />
          ))}
        </div>
      </div>
    </div>
  );
}

