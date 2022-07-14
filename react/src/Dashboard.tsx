import Parcel from "single-spa-react/parcel";
import {  userCount$ } from '@Prem/Utility';
import { useEffect } from "react";

export default function Dashboard() {
  localStorage.setItem("token", "prem");
  useEffect(() => {
    userCount$.subscribe(res => {
      console.log(res)
    })
  }, []);
  return (
    <section>
      <h1> Dashbord  Component</h1>
    </section>
  );
}
