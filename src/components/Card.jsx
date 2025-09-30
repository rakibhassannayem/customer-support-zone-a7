import { GoDotFill } from "react-icons/go";
import { MdOutlineDateRange } from "react-icons/md";
import { toast } from "react-toastify";

const Card = ({ issue, data, progData, setProgData }) => {
  const handleClick = () => {
    const clickedData = data.find((elem) => elem.id == issue.id);
    setProgData([...progData, clickedData]);
    toast("In Progress...")
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-md p-4 rounded-lg flex flex-col justify-between space-y-3 cursor-pointer"
    >
      <div className="flex flex-col md:flex-row justify-between items-start lg:items-center">
        <h2 className="text-lg text-slate-900 font-medium">{issue.title}</h2>
        <div
          className={`flex items-center px-3 rounded-full ${
            issue.status == "Open"
              ? "bg-green-200 text-green-500"
              : "bg-yellow-200 text-yellow-500"
          }`}
        >
          <GoDotFill size={30} />
          <span className="font-medium text-slate-700">{issue.status}</span>
        </div>
      </div>
      <p className="text-slate-500">{issue.description}</p>
      <div className="flex justify-between items-center text-slate-500">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
          <span className="font-medium">#{issue.id}</span>
          <span
            className={`text-sm font-medium ${
              issue.priority == "HIGH"
                ? "text-red-500"
                : issue.priority == "MEDIUM"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {issue.priority} PRIORITY
          </span>
        </div>
        <div className="flex flex-col lg:flex-row items-end lg:items-center gap-2">
          <span>{issue.customer}</span>
          <div className="flex items-center gap-1">
            <MdOutlineDateRange />
            <span className="font-medium">{issue.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
