import episode2Image from "@assets/episodes/2.png";
import episode3Image from "@assets/episodes/3.png";
import type { EpisodeModel } from "@models";

export const episodes: EpisodeModel[] = [
  {
    id: 2,
    title: "Mic tricks to take you to the next level",
    subtitle:
      "Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.",
    image: episode2Image.src,
    badges: ["Tips & Tricks"],
  },
  {
    id: 3,
    title: "Should you get outboard audio gear?",
    subtitle:
      "Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.",
    image: episode3Image.src,
    badges: ["Gear"],
  },
];
