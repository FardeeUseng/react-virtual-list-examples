import { FixedSizeList as List } from "react-window";

export default function MyFixedSizeList() {
  const items = Array.from({ length: 10000 }, (_, i) => `Item #${i}`);

  return (
    <div style={{ border: "1px solid red" }}>
      <List
        height={400} // ความสูงของ list container (px)
        itemCount={items.length} // จำนวนรายการทั้งหมด
        itemSize={35} // ความสูงของแต่ละรายการ
        width={300} // ความกว้างของ list container
        overscanCount={5} // กำหนด overscan เป็น 5
      >
        {({ index, style }) => <div style={style}>{items[index]}</div>}
      </List>
    </div>
  );
}
