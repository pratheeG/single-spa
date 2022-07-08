import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import "./style.css";

export default function Root(props) {
  return (
    <section>
      <BrowserRouter>
        <section className="navbar">
          <Link
            to={{
              pathname: "/react",
            }}
          >
            React
          </Link>
          <Link
            to={{
              pathname: "/angular"
            }}
          >
            Angular
          </Link>
        </section>
      </BrowserRouter>
    </section>
  );
}
