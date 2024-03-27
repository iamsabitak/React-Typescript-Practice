import React, { useState } from "react";

const imageUrls = [
  "https://img.freepik.com/premium-vector/sunset-with-lots-buildings-along-road_1035899-2289.jpg",
  "https://i.pinimg.com/736x/33/f1/59/33f159819ccff1704818e427e3613500.jpg",
  "https://img.freepik.com/premium-photo/90s-japanese-animation-kunihiko-ikuhara-style-city-vie-generative-ai_791316-14475.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9g-cyN70-qR1tGnYFy9AambDYOmu0mActj2nr9FdUmGV2_FykC798gkduK1_UYrTM_RQ&usqp=CAU",
  "https://e1.pxfuel.com/desktop-wallpaper/61/234/desktop-wallpaper-anime-village-posted-by-sarah-tremblay-anime-countryside.jpg",
];

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery" style={{ position: "relative" }}>
      <button
        onClick={handlePrevImage}
        style={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
        disabled={selectedImageIndex === 0}
      >
        Prev
      </button>
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Image ${index}`}
          style={{
            display: index === selectedImageIndex ? "block" : "none",
            margin: "0 auto",
            width: "600px",
            height: "400px",
          }}
        />
      ))}
      <button
        onClick={handleNextImage}
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
        disabled={selectedImageIndex === imageUrls.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Gallery;
