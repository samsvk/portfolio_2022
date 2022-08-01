import React from "react";
import { SOCIAL_DATA } from "../static/constants";

const Socials = () => {
  return (
    <ul className="socials">
      {SOCIAL_DATA.map((s, i) => (
        <li key={i}>{s.name}</li>
      ))}
    </ul>
  );
};

export default Socials;
