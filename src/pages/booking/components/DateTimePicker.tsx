import {
  categorizedTimeSlots,
  formatTimeToAMPM,
  isDateFullyBooked,
} from "../../../data/mockData";
import CustomCalendar from "./CustomCalendar";
import { format, addDays, startOfToday } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "../../../components/ui/button";

interface DateTimePickerProps {
  date: string;
  timeSlot: string;
  onDateChange: (date: string) => void;
  onTimeSlotChange: (timeSlot: string) => void;
  disabled?: boolean;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  date,
  timeSlot,
  onDateChange,
  onTimeSlotChange,
  disabled = false,
}) => {
  const isBooked = date ? isDateFullyBooked(new Date(date)) : false;

  const handleNextAvailable = () => {
    let nextDate = addDays(date ? new Date(date) : new Date(), 1);
    while (isDateFullyBooked(nextDate)) {
      nextDate = addDays(nextDate, 1);
    }
    onDateChange(format(nextDate, "yyyy-MM-dd"));
  };

  const renderSlots = (slots: string[], title: string) => (
    <div className="space-y-4">
      <h4 className="text-sm font-bold text-zinc-900">{title}</h4>
      <div className="grid grid-cols-3 gap-3">
        {slots.length > 0 ? (
          slots.map((slot) => {
            const isSelected = timeSlot === formatTimeToAMPM(slot);
            return (
              <button
                key={slot}
                onClick={() => onTimeSlotChange(formatTimeToAMPM(slot))}
                className={cn(
                  "py-3 px-4 rounded-xl text-sm font-bold transition-all border",
                  isSelected
                    ? "bg-white border-black text-black shadow-sm ring-1 ring-black"
                    : "bg-zinc-50 border-zinc-50 text-zinc-600 hover:bg-zinc-100",
                )}
              >
                {slot}
              </button>
            );
          })
        ) : (
          <p className="text-sm text-zinc-400 font-medium col-span-3">
            No availability
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-left-4 duration-500">
      <CustomCalendar selectedDate={date} onDateChange={onDateChange} />

      <div className="space-y-8 pt-4 border-t border-zinc-100">
        <div>
          <h3 className="text-lg font-bold text-black mb-1">
            {date
              ? format(new Date(date), "EEEE, d MMM yyyy")
              : format(startOfToday(), "EEEE, d MMM yyyy")}
          </h3>
          {isBooked ? (
            <div className="space-y-6 py-4">
              <p className="text-sm text-zinc-500 font-medium">
                No availability until{" "}
                {format(addDays(new Date(date), 1), "EEEE, d MMMM")}.
              </p>
              <Button
                onClick={handleNextAvailable}
                className="w-full h-14 bg-zinc-900 hover:bg-black text-white font-bold uppercase tracking-widest rounded-lg"
              >
                Go to next available
              </Button>
            </div>
          ) : (
            <div className="space-y-8 py-4">
              {renderSlots(categorizedTimeSlots.morning, "Morning")}
              {renderSlots(categorizedTimeSlots.afternoon, "Afternoon")}
              {renderSlots(categorizedTimeSlots.evening, "Evening")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;
