import React from "react";

const imageUrls = [
  "https://img.freepik.com/premium-vector/sunset-with-lots-buildings-along-road_1035899-2289.jpg",
  "https://i.pinimg.com/736x/33/f1/59/33f159819ccff1704818e427e3613500.jpg",
  "https://img.freepik.com/premium-photo/90s-japanese-animation-kunihiko-ikuhara-style-city-vie-generative-ai_791316-14475.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9g-cyN70-qR1tGnYFy9AambDYOmu0mActj2nr9FdUmGV2_FykC798gkduK1_UYrTM_RQ&usqp=CAU",
  "https://e1.pxfuel.com/desktop-wallpaper/61/234/desktop-wallpaper-anime-village-posted-by-sarah-tremblay-anime-countryside.jpg",
];
const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  return <div>Gallery</div>;
};

export default Gallery;
