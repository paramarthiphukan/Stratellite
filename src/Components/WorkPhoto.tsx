import { useState } from "react";
import { icons } from "../utils/icons";
import cx from "classnames";

interface PhotoProps {
  image: any;
  list: any;
  setPhotos: any;
  id: number;
  expandedId: number;
  setExpandedId: any;
}

const WorkPhoto: React.FC<PhotoProps> = ({
  image,
  list,
  setPhotos,
  id,
  expandedId,
  setExpandedId,
}) => {
  const handleDelete = () => {
    const filteredList = list.filter((item: any) => {
      return item !== image;
    });
    setPhotos(filteredList);
  };

  const [expand, setExpand] = useState(false);

  const handleExpansion = () => {
    if (expandedId === id) setExpandedId(null);
    else setExpandedId(id);
    setExpand(!expand);
  };

  const myStyle = {
    backgroundImage: `url(${image})`,
    height: "20rem",
    width: "20rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const newStyle = {
    backgroundImage: `url(${image})`,
    height: "25rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="cursor-pointer mx-3" onClick={handleExpansion}>
      <div
        style={expand ? newStyle : myStyle}
        className={cx("rounded p-3", {
          hidden: expandedId !== null && expandedId !== id,
          "w-[23rem] md:w-[66rem] md:h-[45vh] rounded": expand,
        })}
      />
      <div
        className={cx(
          "flex justify-center relative left-60 bottom-72 p-2 md:p-3 border border-[#FF554D] rounded w-8 md:w-12 bg-white cursor-pointer",
          {
            hidden: expand,
          }
        )}
        onClick={handleDelete}
      >
        {icons.gallery.delete}
      </div>
    </div>
  );
};

export default WorkPhoto;
