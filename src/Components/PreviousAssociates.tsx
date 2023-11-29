import { icons } from "../utils/icons";

const PreviousAssociates = () => {
  return (
    <div className="w-full py-5 px-5 my-2 flex flex-col rounded-lg border border-slate-300 mx-0">
      <div className="flex flex-start items-center my-2">
        <img
          className="h-12 w-12 md:h-16 md:w-16 rounded-full mr-5"
          src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
          alt=""
        />
        <div className="text-base">Vendor 1</div>
      </div>
      <div className="w-full my-4 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, totam
        repellat! Blanditiis similique eaque, ipsa minima, labore voluptas
        officia aut, amet numquam distinctio accusamus deleniti! Voluptatem
        cumque, debitis est ut soluta optio ipsam, facere quam commodi eius
        repudiandae voluptas perspiciatis?
      </div>
      <div className="flex items-center justify-evenly my-2 py-2 rounded-sm cursor-pointer h-fit text-sm w-24  text-center font-semibold md:text-xssm bg-yellow-300 text-white">
        {icons.managers.star}
        4.3 Stars
      </div>
    </div>
  );
};

export default PreviousAssociates;
