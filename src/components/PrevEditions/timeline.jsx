import React from "react";
// Ensure images are in src/assets/images/prevEditions/
import aImg from "../../assets/images/prevEditions/a.png";
import bImg from "../../assets/images/prevEditions/b.png";
import cImg from "../../assets/images/prevEditions/c.png";
import dImg from "../../assets/images/prevEditions/d.png";
import eImg from "../../assets/images/prevEditions/e.png";

const images = [
  { src: aImg, alt: "Edition A" },
  { src: bImg, alt: "Edition B" },
  { src: cImg, alt: "Edition C" },
  { src: dImg, alt: "Edition D" },
  { src: eImg, alt: "Edition E" },
];

const Timeline = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          className="w-full max-w-5xl h-auto object-contain"
        />
      ))}
    </div>
  );
};

export default Timeline;
