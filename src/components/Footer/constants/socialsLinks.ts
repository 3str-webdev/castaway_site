import type { SocialModel } from "@models";
import facebookSVG from "@assets/socials/facebook.svg";
import instagramSVG from "@assets/socials/inst.svg";
import twitterSVG from "@assets/socials/twitter.svg";

export const socialLinks: SocialModel[] = [
  {
    icon_src: instagramSVG.src,
    href: "#",
    alt: "instagram link",
  },
  {
    icon_src: twitterSVG.src,
    href: "#",
    alt: "twitter link",
  },
  {
    icon_src: facebookSVG.src,
    href: "#",
    alt: "facebook link",
  },
];
