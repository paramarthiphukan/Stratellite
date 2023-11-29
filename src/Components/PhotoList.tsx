import { useState } from "react";
import Work1 from "../assets/project/work1.png";
import Work2 from "../assets/project/work2.png";
import Work3 from "../assets/project/work3.png";
import WorkPhoto from "./WorkPhoto";
import cx from "classnames";

const PhotoList = () => {
  const [photos, setPhotos] = useState([Work1, Work2, Work3]);
  const [expandedId, setExpandedId] = useState<any>(null);

  return (
    <div
      className={cx("flex", {
        block: expandedId !== null,
      })}
    >
      {photos.map((photo, id) => {
        return (
          <WorkPhoto
            image={photo}
            list={photos}
            setPhotos={setPhotos}
            id={id}
            expandedId={expandedId}
            setExpandedId={setExpandedId}
          />
        );
      })}
    </div>
  );
};

export default PhotoList;
