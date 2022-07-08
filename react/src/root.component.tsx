import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app";
import NotFound from "./NotFound";

export default function Root(props) {
  return <BrowserRouter>
  <Routes>
    <Route path="/react" element={<App />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
  </BrowserRouter>;
}
