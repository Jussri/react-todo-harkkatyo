import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./foo";
import Sec from "./second";
import Third from "./third";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="second" element={<Sec />} />
          <Route path="third" element={<Third />} />
          <Route path="*" element={<h1>There is no such page!</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
export default App;
