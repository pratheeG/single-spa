import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import "./style.css";

export default function Root(props) {
  return (
    <section>
      <BrowserRouter>
        <section className="navbar">
          <Link
            to={{
              pathname: "/dashboard",
            }}
          >
            Dashboard
          </Link>
          <Link
            to={{
              pathname: "/users"
            }}
          >
            Users
          </Link>
        </section>
      </BrowserRouter>
    </section>
  );
}
