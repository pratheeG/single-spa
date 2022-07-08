import Parcel from "single-spa-react/parcel";

export default function Dashboard() {
  localStorage.setItem("token", "prem");
  return (
    <section>
      <h1>React Dashbord Component</h1>
      <Parcel
        config={() => System.import("sample-vue-parcel")}
        wrapWith="div"
      />
    </section>
  );
}
