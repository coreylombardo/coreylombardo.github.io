import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Icon } from "@iconify/react";
import Nt from "../components/nt";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Corey Lombardo" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div id="home">
      <div className="intro" >
        Hello! I'm Corey. I was studying mathematics at ChSCC in Tennessee; now I work at a startup which is trying to make healthcare painless and accessible to everyone. 
        <br/><br/>
        In my free time, I enjoy learning about programming, linguistics, and random math topics. You can find links relevant to my work at <Link to="/projects">Projects</Link>, or you can contact me below on your platform of choice.
      </div>

      <div className="contactLinks">
        <a href="mailto:contact@domain.com">
          <Icon icon="mdi:email" className="contact-icon" />
        </a>
        <Nt to="https://www.linkedin.com/in/coreylombardo/">
          <Icon icon="mdi:linkedin" className="contact-icon" />
        </Nt>
        <Nt to="https://t.me/semaphore184">
          <Icon icon="mdi:telegram" className="contact-icon" />
        </Nt>
      </div>

      <div className="disclaimer">
        This site is currently in a beta phase. I'm mostly just making sure I can deploy it properly on GitHub Pages right now.
      </div>
    </div>
  );
}
