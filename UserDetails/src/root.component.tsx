import { userDetails$ } from "@Prem/Utility";
import { useEffect, useState } from "react";

export default function Root(props) {
  const [userDetails, setUserDetails] = useState({ name: "", createdAt: "" });
  useEffect(() => {
    userDetails$.subscribe((res) => {
      console.log('res ', res)
      setUserDetails(res);
    });
  }, []);
  return (
    <section>
      <div>
        <strong>User Details </strong>
      </div>
      <div>Name : {userDetails.name}</div>
      <div>Created At: {userDetails.createdAt}</div>
    </section>
  );
}
