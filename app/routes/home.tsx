import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Icon } from "@iconify/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Corey Lombardo" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <div className="intro" >
        Hello! I'm Corey. I was studying mathematics at ChSCC in Tennessee; now I work at a startup trying to make healthcare painless and accessible to everyone. In my free time, I enjoy learning about programming, linguistics, and random math topics. You can find links relevant to my work at <Link to="/projects">Projects</Link>, or you can contact me below on your platform of choice.
      </div>

      <div className="contactLinks">
        <Icon icon="mdi:email" />
        <Icon icon="mdi:linkedin" />
        <Icon icon="mdi:telegram" />
      </div>
    </div>
  );
}
