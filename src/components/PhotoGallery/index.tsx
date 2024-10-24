import Gallery from "react-photo-gallery";
import "./PhotoGallery.css";
import { PhotoGalleryProps } from "./types";

const photos = [
  {
    src: "../../assets/image_1.webp",
    width: 5,
    height: 2,
  },
  {
    src: "../../assets/image_2.webp",
    width: 1,
    height: 1,
  },
  {
    src: "../../assets/image_3.webp",
    width: 1,
    height: 1,
  },
  {
    src: "../../assets/image_4.webp",
    width: 1,
    height: 1,
  },
  {
    src: "../../assets/image_5.webp",
    width: 1,
    height: 1,
  },
  {
    src: "../../assets/image_6.webp",
    width: 5,
    height: 5,
  },
  {
    src: "../../assets/image_7.webp",
    width: 3,
    height: 4,
  },
  {
    src: "../../assets/image_8.webp",
    width: 1,
    height: 1,
  },
  {
    src: "../../assets/image_9.webp",
    width: 1,
    height: 1,
  },
];

// Custom renderImage function to apply class
function renderImage(props: any) {
  const { photo } = props;
  return <img {...photo} className="custom-photo" alt="" />;
}

function PhotoGallery({ direction }: PhotoGalleryProps) {
  return (
    <div style={{ marginTop: "100px", padding: "20px 50px" }}>
      <h1 id="photo_h1">Photo Gallery</h1>
      <Gallery photos={photos} direction={"row"} renderImage={renderImage} />
    </div>
  );
}

export default PhotoGallery;
