import React from "react";
import Link from "next/link";

interface IssueListProps {
  title: string;
  issueID: string;
  linkToIssue: string;
}

const IssueList: React.FC<IssueListProps> = ({
  title,
  issueID,
  linkToIssue,
}) => {
  return (
    <Link href={linkToIssue} className="w-[75vw] md:w-[55vw] m-2.5">
      <div className="bg-accent-2 rounded-lg px-2.5 py-1 text-lg">
        <div>
          <span className="underline">{title}</span>
        </div>
        <div className="m-1">{issueID}</div>
      </div>
    </Link>
  );
};

export default IssueList;
