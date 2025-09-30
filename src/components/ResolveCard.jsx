const ResolveCard = ({ resIssue }) => {
  return (
    <div className="bg-indigo-100 p-3 flex flex-col mt-3 rounded-lg">
      <h2 className="text-slate-900 font-medium">{resIssue.title}</h2>
    </div>
  );
};

export default ResolveCard;
