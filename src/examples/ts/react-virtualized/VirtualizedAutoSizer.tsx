import { AutoSizer, List, type ListRowProps } from "react-virtualized";
import "react-virtualized/styles.css"; // สไตล์พื้นฐาน

export default function MyVirtualizedAutoSizer() {
  const rowRenderer = ({ key, index, style }: ListRowProps) => (
    <div key={key} style={style}>
      Row {index}
    </div>
  );

  return (
    <>
      {/* <AutoSizer> จะพยายามคำนวณ width และ height ของ container ที่ครอบมันอยู่
        ถ้า container ด้านนอก ไม่มีความสูงที่แน่นอน height = 0 ทำ UI อาจจะไม่แสดง */}
      <div style={{ height: "100vh", width: "300px", border: "1px solid red" }}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              rowCount={1000}
              rowHeight={35}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </div>
    </>
  );
}
