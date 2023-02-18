import ImageGallery from "react-image-gallery";
import React from "react";
import "../Gallery/Gallery.css";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <ImageGallery
          items={images}
          lazyLoad={true}
          showPlayButton={false}
        //   slideDuration={100}
          thumbnailWidth="500"
          // thumbnailPosition="right"
        />
      </div>
    </>
  );
};

export default Gallery;
