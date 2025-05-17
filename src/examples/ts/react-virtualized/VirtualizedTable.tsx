import { Table, Column } from "react-virtualized";
import "react-virtualized/styles.css";

interface Item {
  id: number;
  name: string;
  description: string;
}

const data: Item[] = Array.from({ length: 10000 }, (_, index): Item => ({
  id: index,
  name: `รายการ ${index}`,
  description: `คำอธิบายสำหรับรายการที่ ${index}`,
}));


const nameStyle = {
  width: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const descriptionStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function MyVirtualizedTable() {
  return (
    <div style={{ border: "1px solid red" }}>
      <Table
        width={400}
        height={300}
        headerHeight={40}
        rowHeight={30}
        rowCount={data.length}
        rowGetter={({ index }) => data[index]} // ดึงข้อมูลของแถวตาม index
      >
        <Column // แสดงคอลัมน์ในตาราง พร้อม render header และ cell
          label="Name"
          dataKey="name" // key ที่ใช้ดึงค่าจาก object (เช่น name, description)
          headerStyle={nameStyle} // style สำหรับหัวตาราง
          style={nameStyle} // style สำหรับเซลล์แต่ละช่องในคอลัมน์นั้น
          headerRenderer={({ label }) => label} // ฟังก์ชันที่ custom การแสดงหัวตาราง(ใช้ label ตรง ๆ ก็ได้)
          cellDataGetter={({ dataKey, rowData }) => rowData[dataKey]} // ฟังก์ชันที่กำหนดวิธีดึงข้อมูลจาก row
          cellRenderer={({ cellData }) => cellData} // ฟังก์ชันที่ใช้ render ค่าในแต่ละเซลล์ (สามารถ custom ได้ เช่น ใส่ปุ่ม, สี ฯลฯ)
          width={200}
        />
        <Column
          label="Description"
          dataKey="description"
          headerStyle={descriptionStyle}
          style={descriptionStyle}
          headerRenderer={({ label }) => label}
          cellDataGetter={({ dataKey, rowData }) => rowData[dataKey]}
          cellRenderer={({ cellData }) => cellData}
          width={200}
        />
      </Table>
    </div>
  );
}
