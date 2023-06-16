import { StudentDetailsPage } from "@/components/student";
import * as React from "react";

export default function SWRPage() {
  const [detailsList, setDetailsList] = React.useState([1, 2, 3]);
  function addDetails() {
    setDetailsList((prevList) => [...prevList, 1]);
  }
  return (
    <div>
      <button onClick={addDetails}> Add</button>
      <h1 className="text-xl">SWR Example</h1>
      <ul>
        {detailsList.map((i, index) => (
          <li key={index}>
            <StudentDetailsPage studentId="lea11ziflg8xoiza" />
          </li>
        ))}
        {/* <li>
          <StudentDetailsPage studentId="lea11ziflg8xoiza" />
        </li>
        <li>
          <StudentDetailsPage studentId="lea11ziflg8xoiza" />
        </li>
        <li>
          <StudentDetailsPage studentId="lea11ziflg8xoiza" />
        </li>
        <li>
          <StudentDetailsPage studentId="lea11ziflg8xoiza" />
        </li> */}
      </ul>
    </div>
  );
}
