import './App.css'
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
// typeScript
import TSMyFixedSizeList from "./examples/ts/react-window/FixedSizeList.tsx";
import TSMyFixedSizeGrid from "./examples/ts/react-window/FixedSizeGrid.tsx";
import TSMyVirtualizedList from "./examples/ts/react-virtualized/VirtualizedList.tsx";
import TSMyVirtualizedAutoSizer from "./examples/ts/react-virtualized/VirtualizedAutoSizer.tsx";
import TSMyVirtualizedGrid from "./examples/ts/react-virtualized/VirtualizedGrid.tsx";
import TSMyVirtualizedTable from "./examples/ts/react-virtualized/VirtualizedTable.tsx";
// javaScript
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
import { useMemo } from 'react';

export default function App() {

  return (
    <BrowserRouter>
      <AppNavigations />
      
      <Routes>
        {/* typeScript */}
        <Route path="/examples/ts/react-window/fixed-size-list" element={<TSMyFixedSizeList />} />
        <Route path="/examples/ts/react-window/fixed-size-grid" element={<TSMyFixedSizeGrid />} />
        <Route path="/examples/ts/react-virtualized/virtualized-list" element={<TSMyVirtualizedList />} />
        <Route path="/examples/ts/react-virtualized/virtualized-auto-sizer" element={<TSMyVirtualizedAutoSizer />} />
        <Route path="/examples/ts/react-virtualized/virtualized-grid" element={<TSMyVirtualizedGrid />} />
        <Route path="/examples/ts/react-virtualized/virtualized-table" element={<TSMyVirtualizedTable />} />
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


function AppNavigations() {
  const location = useLocation();

  // เช็กว่าหน้านี้เป็นหน้า example หรือไม่
  const isExamplePage = useMemo(
    () => location.pathname.startsWith("/examples/"),
    [location.pathname]
  );

  if (isExamplePage === true) return null;

  return (
    <>
      <div style={{ border: "1px solid red", width: "100vw" }}>
        <h1 style={{ textAlign: "center" }}>React-window</h1>
        <nav style={{ display: "flex", justifyContent: "center", gap: "1rem", padding: "1rem" }}>
          <Link to="/examples/ts/react-window/fixed-size-list">FixedSizeList(TypeScript)</Link>
          <Link to="/examples/ts/react-window/fixed-size-grid">FixedSizeGrid(TypeScript)</Link>
          <Link to="/examples/js/react-window/fixed-size-list">FixedSizeList(JavaScript)</Link>
          <Link to="/examples/js/react-window/fixed-size-grid">FixedSizeGrid(JavaScript)</Link>
        </nav>
      </div>
      <div style={{ border: "1px solid red", width: "100vw" }}>
        <h1 style={{ textAlign: "center" }}>React-virtualized</h1>
        <nav style={{ display: "flex", justifyContent: "center", gap: "1rem", padding: "1rem", flexWrap: "wrap" }}>
          <Link to="/examples/ts/react-virtualized/virtualized-list">VirtualizedList(TypeScript)</Link>
          <Link to="/examples/ts/react-virtualized/virtualized-auto-sizer">VirtualizedAutoSizer(TypeScript)</Link>
          <Link to="/examples/ts/react-virtualized/virtualized-grid">VirtualizedGrid(TypeScript)</Link>
          <Link to="/examples/ts/react-virtualized/virtualized-table">VirtualizedTable(TypeScript)</Link>
          <Link to="/examples/js/react-virtualized/virtualized-list">VirtualizedList(JavaScript)</Link>
          <Link to="/examples/js/react-virtualized/virtualized-auto-sizer">VirtualizedAutoSizer(JavaScript)</Link>
          <Link to="/examples/js/react-virtualized/virtualized-grid">VirtualizedGrid(JavaScript)</Link>
          <Link to="/examples/js/react-virtualized/virtualized-table">VirtualizedTable(JavaScript)</Link>
        </nav>
      </div>
    </>
  )
}