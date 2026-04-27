"use client";

import { useEffect, useState } from "react";

const StatusCard = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.lanyard.rest/v1/users/1285917808076783713"
        );
        const data = await res.json();
        setStatus(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  const isOnline = status.discord_status === "online";
  const isIdle = status.discord_status === "idle";
  const isDnd = status.discord_status === "dnd";

  const activity = status.activities?.[0]?.name;

  let title = "Offline";
  let subtitle = "Resting 😴";
  let badge = "OFFLINE";
  let dotColor = "bg-gray-500";

  if (isOnline) {
    title = "Working";
    subtitle = activity
      ? `Doing: ${activity}`
      : "Coding something cool 💻";
    badge = "ACTIVE";
    dotColor = "bg-green-400";
  } else if (isIdle) {
    title = "Idling";
    subtitle = "AFK mode 🧠";
    badge = "AWAY";
    dotColor = "bg-yellow-400";
  } else if (isDnd) {
    title = "Do Not Disturb";
    subtitle = "Focus mode 🚫";
    badge = "DND";
    dotColor = "bg-red-400";
  }

  return (
    <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-6 flex items-center gap-6 w-full max-w-md shadow-lg">
      
      {/* Image */}
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-800">
        <img
          src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
          alt="status"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h2 className="text-white text-lg font-semibold">
          {title}
        </h2>

        <p className="text-gray-400 text-sm">
          {subtitle}
        </p>

        <div className="mt-2">
          <span className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-[#111827] border border-[#1f2937] w-fit text-gray-300">
            <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
            {badge}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
