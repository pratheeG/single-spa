import Parcel from "single-spa-react/parcel";

export default function Dashboard() {
  localStorage.setItem("token", "prem");
  return (
    <section>
      <h1>React Dashbord Component App2</h1>
    </section>
  );
}
