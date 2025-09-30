import { toast } from "react-toastify";

const ProgressCard = ({
  data,
  setData,
  progData,
  setProgData,
  progIssue,
  resData,
  setResData,
}) => {
  const handleClick = () => {
    const clickedData = progData.find((elem) => elem.id == progIssue.id);
    const newProgData = progData.filter((elem) => elem.id !== clickedData.id);
    setProgData(newProgData);
    setResData([...resData, clickedData]);
    const restData = data.filter((elem) => elem.id !== progIssue.id);
    setData(restData);
    toast.success("Successfully Resolved...")
  };
  return (
    <div className="bg-white p-3 flex flex-col mt-3 rounded-lg">
      <h2 className="text-lg text-slate-900 font-semibold">
        {progIssue.title}
      </h2>
      <button onClick={handleClick} className="btn bg-green-600 text-white">
        Complete
      </button>
    </div>
  );
};

export default ProgressCard;
