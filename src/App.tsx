import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TSMyFixedSizeList from "./examples/ts/react-window/FixedSizeList.tsx";
import TSMyFixedSizeGrid from "./examples/ts/react-window/FixedSizeGrid.tsx";
// @ts-ignore
import JSMyFixedSizeList from "./examples/js/react-window/FixedSizeList.jsx";
// @ts-ignore
import JSMyFixedSizeGrid from "./examples/js/react-window/FixedSizeGrid.jsx";
// @ts-ignore
import JSMyVirtualizedList from "./examples/js/react-virtualized/VirtualizedList.jsx";
// @ts-ignore
import JSMyVirtualizedAutoSizer from "./examples/js/react-virtualized/VirtualizedAutoSizer.jsx";
// @ts-ignore
import JSMyVirtualizedGrid from "./examples/js/react-virtualized/VirtualizedGrid.jsx";
// @ts-ignore
import JSMyVirtualizedTable from "./examples/js/react-virtualized/VirtualizedTable.jsx";

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
        <Route path="/examples/js/react-virtualized/virtualized-list" element={<JSMyVirtualizedList />} />
        <Route path="/examples/js/react-virtualized/virtualized-auto-sizer" element={<JSMyVirtualizedAutoSizer />} />
        <Route path="/examples/js/react-virtualized/virtualized-grid" element={<JSMyVirtualizedGrid />} />
        <Route path="/examples/js/react-virtualized/virtualized-table" element={<JSMyVirtualizedTable />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
