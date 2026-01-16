// Ensure these images are in src/assets/images/prevEditions/
import UNHRC from "../assets/images/prevEditions/UNHRC.png";
import UNOC from "../assets/images/prevEditions/UNOC.png";
// import Loksabhaa from '../assets/images/prevEditions/Group 111.png' // Use if exists, else comment out or replace
import lon from "../assets/images/prevEditions/image 19.png";

const data = {
  2022: [
    [
      "Lok Sabha",
      null,
      "One Land One Law",
      'One land, one law" encapsulates the principle of uniform legal framework across a nation!',
      "",
    ],
    [
      "UNGA",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UN_emblem_blue.svg/564px-UN_emblem_blue.svg.png",
      "The Cyber Crisis",
      "The cyber crisis represents the escalating threats posed by malicious cyber activities.",
      "",
    ],
  ],
  2024: [
    [
      "UNOC",
      UNOC,
      "Battle Below",
      "This conference is set to delve into the intricate challenges posed by water pollution on a global scale.",
      "",
    ],
    [
      "UNHRC",
      UNHRC,
      " Beyond Broken Borders",
      " A Call to Action on the Human Cost of War.",
      "",
    ],
    [
      "LON",
      lon,
      "Harmony Haven",
      "This conference is set to delve into the failures and shortcomings of the League of Nations.",
      "",
    ],
  ],
};

export default data;
