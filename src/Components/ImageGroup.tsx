interface ImageGroupProps {
   images: string[];
}

const ImageGroup: React.FC<ImageGroupProps> = ({ images }) => {
   const shownImages = images.slice(0, 3).filter(Boolean);
   const renderCircle = () => {
      if (shownImages.length === images.length) {
         return null;
      } else {
         return (
            <div
               style={{ marginLeft: "-0.5rem" }}
               className="h-10 w-10 -z-50 text-xxs text-gray-100 bg-white border border-gray-300 flex items-center rounded-full justify-center"
            >
               {images.length - shownImages.length}+
            </div>
         );
      }
   };
   return (
      <div className="flex ml-2">
         {shownImages.map((x, i) => (
            <img
               src={x}
               className="h-10 w-10 object-cover rounded-full"
               style={{ marginLeft: "-0.5rem", zIndex: -i }}
            ></img>
         ))}
         {renderCircle()}
      </div>
   );
};

export default ImageGroup;
