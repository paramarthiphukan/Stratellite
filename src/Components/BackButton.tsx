import { useNavigate } from "react-router-dom";
import { icons } from "../utils/icons";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="p-4 px-5 border border-gray-300 rounded-lg md:hidden"
      onClick={() => navigate(-1)}
    >
      {icons.Projects.back}
    </div>
  );
};

export default BackButton;
