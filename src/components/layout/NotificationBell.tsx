import React, { useState } from "react";
import { Bell, CheckCircle2, Clock, Info } from "lucide-react";
import { MOCK_NOTIFICATIONS } from "@/data/mockData";
import type { Notification } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const NotificationBell: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] =
    useState<Notification[]>(MOCK_NOTIFICATIONS);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "upcoming":
        return <CheckCircle2 className="w-4 h-4 text-[#B76E79]" />;
      case "promotion":
        return <Info className="w-4 h-4 text-[#D4AF37]" />;
      case "reminder":
        return <Clock className="w-4 h-4 text-zinc-500" />;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-zinc-100 transition-colors"
      >
        <Bell className="w-6 h-6 text-zinc-700" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#B76E79] text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-zinc-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="p-4 border-b border-zinc-50 flex items-center justify-between bg-zinc-50/50">
              <h3 className="font-bold text-zinc-900">Notifications</h3>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-[#B76E79] hover:underline font-medium"
                >
                  Mark all as read
                </button>
              )}
            </div>

            <div className="max-h-[400px] overflow-y-auto">
              {notifications.length > 0 ? (
                notifications.map((n) => (
                  <div
                    key={n.id}
                    className={cn(
                      "p-4 border-b border-zinc-50 last:border-0 transition-colors hover:bg-zinc-50",
                      !n.read && "bg-[#FDE6EF]/10",
                    )}
                  >
                    <div className="flex gap-3">
                      <div className="mt-1">{getIcon(n.type)}</div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-zinc-900 leading-tight">
                          {n.title}
                        </p>
                        <p className="text-xs text-zinc-600 mt-1 line-clamp-2">
                          {n.message}
                        </p>
                        <p className="text-[10px] text-zinc-400 mt-2 font-medium uppercase tracking-wider">
                          {n.time}
                        </p>
                      </div>
                      {!n.read && (
                        <div className="w-2 h-2 rounded-full bg-[#B76E79] mt-1" />
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center">
                  <Bell className="w-12 h-12 text-zinc-200 mx-auto mb-3" />
                  <p className="text-zinc-500 text-sm font-medium">
                    No notifications yet
                  </p>
                </div>
              )}
            </div>

            <div className="p-3 border-top border-zinc-50 text-center bg-zinc-50/50">
              <Link to="/history" onClick={() => setIsOpen(false)}>
                <Button variant="link" size="xs" className="text-[#B76E79]">
                  View all activity
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Add Link import since I used it above
import { Link } from "react-router";

export default NotificationBell;
