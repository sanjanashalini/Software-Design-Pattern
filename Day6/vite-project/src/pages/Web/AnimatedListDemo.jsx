import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";



let notifications = [
  {
    name: "OFFER SALE",
    description: "Get Exciting Offer for each toys",
    time: "1 day left",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Sign IN ",
    description: "Get updates with new Toys",
    time: "membership",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(  
        "relative mx-auto min-h-fit min-w-[400px] max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 ",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-transparent [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        " bg-transparent  dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3 bg-transparent">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden bg-transparent">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium bg-transparent ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs ">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-[500px] flex-col mr-0 p-6 overflow-hidden rounded-lg border bg-background shadow-lg",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
