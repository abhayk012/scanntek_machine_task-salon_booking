import React, { useState, useMemo } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addDays,
  subDays,
  isAfter,
  isBefore,
  startOfToday,
} from "date-fns";
import { cn } from "@/lib/utils";
import { isDateFullyBooked } from "@/data/mockData";

interface CustomCalendarProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({
  selectedDate,
  onDateChange,
}) => {
  const [viewMode, setViewMode] = useState<"month" | "week">("month");
  const [currentDate, setCurrentDate] = useState(
    selectedDate ? new Date(selectedDate) : new Date(),
  );

  const today = startOfToday();

  const handlePrev = () => {
    if (viewMode === "month") {
      setCurrentDate(subMonths(currentDate, 1));
    } else {
      setCurrentDate(subDays(currentDate, 7));
    }
  };

  const handleNext = () => {
    if (viewMode === "month") {
      setCurrentDate(addMonths(currentDate, 1));
    } else {
      setCurrentDate(addDays(currentDate, 7));
    }
  };

  const days = useMemo(() => {
    let start, end;
    if (viewMode === "month") {
      start = startOfWeek(startOfMonth(currentDate));
      end = endOfWeek(endOfMonth(currentDate));
    } else {
      start = startOfWeek(currentDate);
      end = endOfWeek(currentDate);
    }
    return eachDayOfInterval({ start, end });
  }, [currentDate, viewMode]);

  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  return (
    <div className="space-y-6 select-none animate-in fade-in duration-500">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black tracking-tight">
          {format(currentDate, "MMM yyyy")}
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2 hover:bg-zinc-100 rounded-lg transition-colors text-zinc-400 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="p-2 hover:bg-zinc-100 rounded-lg transition-colors text-zinc-400 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-9-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Week Day Labels */}
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-zinc-400 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, idx) => {
          const isSelected = selectedDate === format(day, "yyyy-MM-dd");
          const isCurrentMonth = isSameMonth(day, currentDate);
          const isPast = isBefore(day, today);
          const isBooked = isDateFullyBooked(day);
          const isToday = isSameDay(day, today);

          return (
            <div
              key={idx}
              onClick={() => {
                if (!isPast && !isBooked) {
                  onDateChange(format(day, "yyyy-MM-dd"));
                }
              }}
              className={cn(
                "h-10 flex items-center justify-center text-sm font-medium rounded-lg cursor-pointer transition-all relative",
                isSelected
                  ? "bg-black text-white shadow-md z-10"
                  : isPast || isBooked
                    ? "text-zinc-200 cursor-not-allowed"
                    : !isCurrentMonth
                      ? "text-zinc-300"
                      : "text-zinc-600 hover:bg-zinc-50",
              )}
            >
              {format(day, "d")}
              {isBooked && !isPast && (
                <div className="absolute bottom-1 w-1 h-1 rounded-full bg-zinc-200" />
              )}
            </div>
          );
        })}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center pt-2">
        <button
          onClick={() => setViewMode(viewMode === "month" ? "week" : "month")}
          className="p-2 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(
              "transition-transform duration-300",
              viewMode === "week" ? "rotate-180" : "",
            )}
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      </div>

      <div className="text-center pt-4 border-t border-zinc-100">
        <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest">
          This business is in GMT-8. Times are shown in GMT+5:30.
        </p>
      </div>
    </div>
  );
};

export default CustomCalendar;
