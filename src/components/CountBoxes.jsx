import bgImg1 from "/vector1.png";
import bgImg2 from "/vector2.png";

const CountBoxes = ({ progData, resData }) => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-6 justify-center md:justify-between my-10 px-2">
      <div className="bg-gradient-to-br from-violet-700 to-purple-500 text-white flex w-full rounded-lg">
        <img className="w-36" src={bgImg1} alt="" />
        <div className="flex flex-col items-center justify-center w-full h-60 rounded-lg">
          <h2 className="text-2xl font-semibold text-center">In Progress</h2>
          <span className="text-7xl font-semibold">{progData.length}</span>
        </div>
        <img className="w-36" src={bgImg2} alt="" />
      </div>
      <div className="bg-gradient-to-r from-green-500 to-teal-700 text-white flex w-full rounded-lg">
        <img className="w-36" src={bgImg1} alt="" />
        <div className="flex flex-col items-center justify-center w-full h-60 rounded-lg">
          <h2 className="text-2xl font-semibold">Resolved</h2>
          <span className="text-7xl font-semibold">{resData.length}</span>
        </div>
        <img className="w-36" src={bgImg2} alt="" />
      </div>
    </div>
  );
};

export default CountBoxes;
