import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// @ts-ignore
import MyFixedSizeList from "./examples/js/react-window/FixedSizeList.jsx";
// @ts-ignore
import MyFixedSizeGrid from "./examples/js/react-window/FixedSizeGrid.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* javaScript */}
        <Route path="/examples/js/react-window/fixed-size-list" element={<MyFixedSizeList />} />
        <Route path="/examples/js/react-window/fixed-size-grid" element={<MyFixedSizeGrid />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
