import React from "react";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

export default function SocialBubblesSidebar() {
  const socials = [
    {
      icon: <Linkedin size={16} />, // plus petit
      link: "https://www.linkedin.com/in/soriba-fofana-9a33b6284/",
      name: "LinkedIn",
    },
    {
      icon: <MessageCircle size={16} />,
      link: "https://wa.me/33663022407",
      name: "WhatsApp",
    },
    {
      icon: <Mail size={16} />,
      link: "mailto:soribafofana232@gmail.com",
      name: "Email",
    },
  ];

  return (
    <div className="flex mt-3 space-x-2">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-8 h-8 bg-violet-600 text-white rounded-full shadow-md hover:bg-violet-500 hover:scale-105 transition-transform duration-300"
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
