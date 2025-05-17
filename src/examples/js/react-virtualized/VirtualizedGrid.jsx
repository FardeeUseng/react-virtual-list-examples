import { Grid } from "react-virtualized";

const cellStyle = (row, col) => ({
  backgroundColor: (row + col) % 2 === 0 ? "#f0f0f0" : "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #ccc"
});

export default function MyVirtualizedGrid() {
  return (
    <div style={{ border: "1px solid red" }}>
      <Grid
        columnCount={10} // จำนวนคอลัมน์
        columnWidth={100} // ความกว้างของแต่ละคอลัมน์ (สามารถเป็นฟังก์ชันได้ด้วย)
        height={400} // ความสูงของ grid
        width={1000} // ความกว้างของ grid
        rowCount={100} // จำนวนแถว
        rowHeight={40} // ความสูงของแต่ละแถว
        overscanRowCount={5} // overscan เหมือน react-window
        cellRenderer={({ columnIndex, rowIndex, key, style }) => (
          <div key={key} style={{ ...style, ...cellStyle(rowIndex, columnIndex) }}>
            {/* ฟังก์ชันที่รับตำแหน่ง cell แล้ว return สิ่งที่จะแสดง */}
            {rowIndex},{columnIndex}
          </div>
        )}
      />
    </div>
  );
}