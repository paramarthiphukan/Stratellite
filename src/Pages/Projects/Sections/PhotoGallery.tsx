import { useState } from "react";
import cx from "classnames";
import GallerySection from "../../../Components/GallerySection";
import { graphics } from "../../../utils/graphics";

const PhotoGallery = () => {
  const [empty, setEmpty] = useState(true);
  return (
    <div className="flex flex-col md:w-10/12 mt-6 md:mt-0 ml-6 md:ml-12 overflow-y-auto">
      {/* when images are posted */}

      <div
        className={cx("flex justify-between items-center mb-4", {
          hidden: empty,
        })}
      >
        <div className="w-2/3 md:w-fit">
          <div className="text-base md:text-1.5xl text-gray-900 font-semibold my-2">
            Work Photos
          </div>
          <div className="text-xs md:text-sm text-gray-900">
            Here is a list of all the projects you have been working
          </div>
        </div>
        <div className="flex items-center h-fit py-3 px-2 mr-2 md:px-4 font-semibold border rounded border-sky-400 cursor-pointer text-center text-sky-400 md:mr-0">
          Upload Images
        </div>
      </div>

      <div className={cx({ hidden: empty })}>
        <GallerySection name="2-feb, 2022" />
        <GallerySection name="2-feb, 2022" />
        <GallerySection name="2-feb, 2022" />
      </div>

      {/* when no images are posted */}

      <div
        className={cx(
          "flex flex-col items-center justify-center my-20 md:my-0",
          {
            hidden: !empty,
          }
        )}
      >
        <div className="h-1/2 w-1/2">{graphics.gallery.post}</div>

        <div className="flex flex-col text-center items-center justify-center my-4">
          <div className="text-base md:text-1.5xl text-gray-900 font-semibold my-2">
            Start Posting
          </div>
          <div className="text-xs md:text-sm text-gray-700">
            Start Posting images of your daily work
          </div>
          <div
            className="flex items-center w-fit h-fit py-3 px-2 mr-2 md:px-4 font-semibold border rounded border-sky-400 cursor-pointer text-center text-sky-400 my-3 md:mr-0"
            onClick={() => setEmpty(false)}
          >
            Upload Images
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
