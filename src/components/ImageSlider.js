import React, { useState, useEffect } from "react";

function ImageSlider({ guitar, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? guitar.images.length - 1 : prev - 1
    );

  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev === guitar.images.length - 1 ? 0 : prev + 1
    );

  // ✅ Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guitar.images.length, onClose]);

  return (
    <div className="modal">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <button className="prev-btn" onClick={prevSlide}>
        {"<"}
      </button>
      <img
        src={guitar.images[currentIndex]}
        alt={guitar.name}
        className="slider-image"
      />
      <button className="next-btn" onClick={nextSlide}>
        {">"}
      </button>
    </div>
  );
}

export default ImageSlider;
