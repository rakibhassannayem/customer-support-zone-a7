import { Suspense } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import IssueManagement from "./components/IssueManagement";
import { ToastContainer } from "react-toastify";

const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

function App() {
  const fetchedPromise = fetchIssues();
  return (
    <div className="bg-neutral-100">
      <Navbar></Navbar>
      <Suspense
        fallback={
          <p className="text-2xl text-purple-500 font-semibold text-center my-10">
            Loading. . . .
          </p>
        }
      >
        <IssueManagement fetchedPromise={fetchedPromise}></IssueManagement>
      </Suspense>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
