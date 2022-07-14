import Parcel from "single-spa-react/parcel";
import { userCount$ } from "@Prem/Utility";
import { useEffect, useState } from "react";
import "./Dashboard.css";

export default function Dashboard() {
  localStorage.setItem("token", "prem");
  const [userCount, setUserCount] = useState(0);
  const [showParcelComp, setShowParcelComp] = useState(false);

  useEffect(() => {
    userCount$.subscribe((res) => {
      setUserCount(res);
    });
  }, []);

  return (
    <section>
      <h1 className="heading">User Component</h1>

      <div className="heading">
        <strong>Total Users: </strong> {userCount}
      </div>
      <div className="app-container">
        <div>
          <button onClick={() => setShowParcelComp(!showParcelComp)}>
            {showParcelComp ? "Hide" : "Show"} Parcel Component
          </button>
        </div>
        {showParcelComp && (
          <div className="parcel-app">
            <Parcel
              config={() => System.import("@Prem/reactParcel")}
              wrapWith="section"
            />
          </div>
        )}
      </div>
    </section>
  );
}
