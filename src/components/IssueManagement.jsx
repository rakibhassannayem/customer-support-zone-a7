import { use, useState } from "react";
import CountBoxes from "./CountBoxes";
import Card from "./Card";
import ProgressCard from "./ProgressCard";
import ResolveCard from "./ResolveCard";

const IssueManagement = ({ fetchedPromise }) => {
  const initialData = use(fetchedPromise);
  const [data, setData] = useState(initialData);
  const [progData, setProgData] = useState([]);
  const [resData, setResData] = useState([]);

  return (
    <div>
      <CountBoxes progData={progData} resData={resData}></CountBoxes>
      <div className="flex flex-col md:flex-row container mx-auto text-slate-900 mb-10">
        <div className="w-full p-3">
          <h2 className="text-2xl font-semibold mb-3">Customer Tickets</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {data.length ? (
              data.map((issue) => {
                return (
                  <Card
                    issue={issue}
                    data={data}
                    setData={setData}
                    progData={progData}
                    setProgData={setProgData}
                    key={issue.id}
                  ></Card>
                );
              })
            ) : (
              <p className="text-3xl font-bold text-green-600 px-2 mb-5">
                All issues have been resolved🎉
              </p>
            )}
          </div>
        </div>

        <div className="md:w-[30%] px-2">
          <div className="mb-3">
            <h2 className="text-2xl font-semibold">Tasks Status</h2>
            {progData.length ? (
              progData.map((progIssue) => (
                <ProgressCard
                  key={progIssue.id}
                  data={data}
                  setData={setData}
                  progIssue={progIssue}
                  progData={progData}
                  setProgData={setProgData}
                  resData={resData}
                  setResData={setResData}
                ></ProgressCard>
              ))
            ) : (
              <p className="text-slate-500 px-2">
                Select a ticket to add to Task Status
              </p>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Resolved Task</h2>
            {resData.length ? (
              resData.map((resIssue) => (
                <ResolveCard
                  key={resIssue.id}
                  resIssue={resIssue}
                ></ResolveCard>
              ))
            ) : (
              <p className="text-slate-500 ml-2">No resolved tasks yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueManagement;
