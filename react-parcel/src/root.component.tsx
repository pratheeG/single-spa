import { useEffect, useState } from "react";
import "./parcel.css";
import Parcel from "single-spa-react/parcel";
import { userDetails$,  userCount$ } from "@Prem/Utility";
import moment from 'moment';


export default function Root(props) {

  const [userDetails, setUserDetails] = useState([]);

  const [showSelectedUser, setShowSelectedUser] = useState(false);
  const addNewuser = () => {
    setUserDetails([
      ...userDetails,
      {
        name: `User ${userDetails.length + 1}`,
        createdAt: moment().format('HH:mm:ss')
      },
    ]);
    userCount$.next(userDetails.length + 1)
  };

  const updatedSelectedUser = (user) => {
    setShowSelectedUser(true);
    userDetails$.next(user);
  };

  return (
    <section>
      <div className="parcel-app-heading">
        <div>
          <strong>Parcel App</strong>
        </div>
        <div>
          <button onClick={() => addNewuser()}>Add User</button>
        </div>
      </div>
      <div>
        <div>
          {userDetails.map((user, i) => (
            <div
              className="user-name"
              onClick={() => updatedSelectedUser(user)}
              key={i}
            >
              {user.name}
            </div>
          ))}
        </div>
        <div>
          {showSelectedUser && (
            <Parcel
              config={() => System.import("@Prem/UserDetails")}
              wrapWith="section"
            />
          )}
        </div>
      </div>
    </section>
  );
}
