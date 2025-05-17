import { List, type ListRowProps } from "react-virtualized";
import "react-virtualized/styles.css"; // สไตล์พื้นฐาน

export default function MyVirtualizedList() {
  const rowCount = 1000;
  const rowHeight = 40;

  const rowRenderer = ({ key, index, style }: ListRowProps) => (
    // key คือ id สำหรับ React
    // style ที่ส่งมาควรใส่ลงในแถว เพื่อให้การ scroll ถูกต้อง
    <div key={key} style={style}>
      Row {index}
    </div>
  );

  return (
    <div style={{ border: "1px solid red" }}>
      <List
        width={300} // ความกว้างของการแสดงผล
        height={300} // ความสูงของการแสดงผล
        rowCount={rowCount} // จำนวนแถวทั้งหมด
        rowHeight={rowHeight} // ความสูงแต่ละแถว (คงที่)
        rowRenderer={rowRenderer} // ฟังก์ชัน render แต่ละแถว (เหมือน children)
        overscanRowCount={5} // render แถวก่อนและหลังเพิ่มอีก 5 เหมือน react-window
      />
    </div>
  );
}
