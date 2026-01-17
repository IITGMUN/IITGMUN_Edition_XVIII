import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

// Helper to check status based on time
const getEventStatus = (eventTime, nextEventTime) => {
  const now = new Date();

  // Create Date objects for today with the specific event times
  const [hours, minutes] = eventTime.split(":").map(Number);
  const eventDate = new Date();
  eventDate.setHours(hours, minutes, 0);

  let nextEventDate = null;
  if (nextEventTime) {
    const [nextHours, nextMinutes] = nextEventTime.split(":").map(Number);
    nextEventDate = new Date();
    nextEventDate.setHours(nextHours, nextMinutes, 0);
  }

  // LOGIC:
  // If we have passed the next event's start time -> This event is 'completed'
  // If we are past this event start but before next event -> This event is 'active'
  // Otherwise -> 'upcoming'

  if (nextEventDate && now >= nextEventDate) return "completed";
  if (now >= eventDate) return "active";
  return "upcoming";
};

const TimelineItem = ({ time, label, status, isLast }) => {
  // Styles based on status
  const isCompleted = status === "completed";
  const isActive = status === "active";

  // Colors
  const activeColor = "bg-[#eb3360]"; // Pink
  const inactiveColor = "bg-gray-300"; // Grey
  const textColor = isActive ? "text-[#eb3360]" : "text-gray-400";

  return (
    <div className="relative flex flex-col items-center flex-1">
      {/* 1. The Tooltip (Task Name) */}
      <div
        className={`relative mb-4 px-4 py-1.5 rounded-lg text-xs font-bold text-white transition-all duration-300 
          ${isActive || isCompleted ? activeColor : inactiveColor}
          ${isActive ? "scale-110 shadow-lg" : "scale-100"}
        `}
      >
        {label}
        {/* The little arrow pointing down */}
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-current 
          ${isActive || isCompleted ? "text-[#eb3360]" : "text-gray-300"}`}
        ></div>
      </div>

      {/* 2. The Line Connector (Behind the dots) */}
      {!isLast && (
        <div className="absolute top-[3.25rem] left-1/2 w-full h-[2px] -z-10">
          {/* Background grey line */}
          <div className="w-full h-full bg-gray-200"></div>
          {/* Colored progress overlay */}
          <div
            className={`h-full transition-all duration-500 ${activeColor}`}
            style={{ width: isCompleted ? "100%" : isActive ? "50%" : "0%" }}
          ></div>
        </div>
      )}

      {/* 3. The Dot */}
      <div
        className={`w-6 h-6 rounded-full border-4 z-10 transition-all duration-300
        ${
          isActive
            ? "bg-white border-[#eb3360] scale-125 ring-2 ring-[#eb3360]/30"
            : isCompleted
              ? "bg-[#eb3360] border-[#eb3360]"
              : "bg-gray-300 border-gray-300"
        }`}
      ></div>

      {/* 4. The Time Stamp */}
      <div className={`mt-2 text-sm font-semibold ${textColor}`}>{time}</div>
    </div>
  );
};

TimelineItem.propTypes = {
  time: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isLast: PropTypes.bool.isRequired,
};

export default function LiveTimeline() {
  // Sample Data - Change times to test different states!
  const schedule = useMemo(
    () => [
      { id: 1, time: "09:00", label: "Registration" },
      { id: 2, time: "10:00", label: "Opening Ceremony" },
      { id: 3, time: "13:30", label: "Lunch Break" }, // Change this to near your current time to test
      { id: 4, time: "16:00", label: "Closing" },
    ],
    [],
  );

  const [statuses, setStatuses] = useState({});

  useEffect(() => {
    const updateTimeline = () => {
      const newStatuses = {};
      schedule.forEach((item, index) => {
        const nextItem = schedule[index + 1];
        newStatuses[item.id] = getEventStatus(item.time, nextItem?.time);
      });
      setStatuses(newStatuses);
    };

    // Initial call
    updateTimeline();

    // Update every minute (60000ms) so it stays real-time
    const interval = setInterval(updateTimeline, 60000);
    return () => clearInterval(interval);
  }, [schedule]);

  return (
    <div className="w-full py-12 px-4 bg-[#f1f8f3]">
      <div className="max-w-4xl mx-auto relative">
        {/* Continuous horizontal line through all timeline items */}
        <div className="absolute top-[3.25rem] left-0 right-0 h-[3px] bg-gray-200 z-0"></div>

        <div className="flex justify-between items-start relative z-10">
          {schedule.map((item, index) => (
            <TimelineItem
              key={item.id}
              {...item}
              status={statuses[item.id]}
              isLast={index === schedule.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
