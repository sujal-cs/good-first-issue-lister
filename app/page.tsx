"use client";

import Navbar from "../components/Navbar";
import IssueForm from "../components/IssueForm";
import IssueList from "../components/IssueList";
import { useState } from "react";

const Home: React.FC = () => {
  const [issues, setIssues] = useState<any[]>([]);

  const fetchIssue = async (url: string) => {
    const response = await fetch("/api/issues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();
    setIssues(data.issues || []);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <div className="bg-accent-1 mt-4 rounded-lg w-[80vw] md:w-[60vw] flex gap-2 items-center justify-center py-4 px-2">
          <IssueForm onSubmit={fetchIssue} />
        </div>
        <div className="bg-accent-1 m-4 mb-9 rounded-lg w-[80vw] md:w-[60vw] flex flex-col gap-2 items-center justify-center">
          {issues.map((issue) => (
            <IssueList
              key={issue.id}
              title={issue.title}
              issueID={`#${issue.number}`}
              linkToIssue={issue.html_url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
