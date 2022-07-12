import Parcel from "single-spa-react/parcel";
import { state$ } from '@Prem/Utility';
import { ChangeEvent, useState } from "react";

export default function Dashboard() {
  localStorage.setItem("token", "prem");
  const [userName, setUserName] = useState('');
  const [showParcelComp, setShowParcelComp] = useState(false);

  const eventChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
    state$.next({  name: event.target.value})
  }

  
  return (
    <section>
      <h1>React Dashbord Component App2</h1>

      <div>
        <button onClick={() => setShowParcelComp(!showParcelComp)}> {showParcelComp ? 'Hide' : 'Show'} Parcel Component</button>
      </div>
      { showParcelComp && <div>
      <div>
        <input type="text"  value={userName} onChange={eventChanged}/>
      </div>
      <Parcel
        config={() => System.import("@Prem/reactParcel")}
        wrapWith="section"
      />
      </div>}
    </section>
  );
}
