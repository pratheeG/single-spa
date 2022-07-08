import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import "./style.css";

export default function Root(props) {
  return (
    <section>
      <BrowserRouter>
        <section className="navbar">
          <Link
            to={{
              pathname: "/app1",
            }}
          >
            App 1
          </Link>
          <Link
            to={{
              pathname: "/app2"
            }}
          >
            App 2
          </Link>
        </section>
      </BrowserRouter>
    </section>
  );
}
