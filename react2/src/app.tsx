import {
    Route,
    Routes
  } from "react-router-dom";

import Dashboard from "./Dashboard";

export default function App() {
  return <section>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                </Routes>
      </section>;
}
