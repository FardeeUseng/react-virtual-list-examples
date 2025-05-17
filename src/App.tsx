import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TSMyFixedSizeList from "./examples/ts/react-window/FixedSizeList.tsx";
import TSMyFixedSizeGrid from "./examples/ts/react-window/FixedSizeGrid.tsx";
// @ts-ignore
import JSMyFixedSizeList from "./examples/js/react-window/FixedSizeList.jsx";
// @ts-ignore
import JSMyFixedSizeGrid from "./examples/js/react-window/FixedSizeGrid.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* typeScript */}
        <Route path="/examples/ts/react-window/fixed-size-list" element={<TSMyFixedSizeList />} />
        <Route path="/examples/ts/react-window/fixed-size-grid" element={<TSMyFixedSizeGrid />} />
        {/* javaScript */}
        <Route path="/examples/js/react-window/fixed-size-list" element={<JSMyFixedSizeList />} />
        <Route path="/examples/js/react-window/fixed-size-grid" element={<JSMyFixedSizeGrid />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
