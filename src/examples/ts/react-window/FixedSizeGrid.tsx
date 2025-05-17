import { FixedSizeGrid as Grid } from "react-window";

export default function MyFixedSizeGrid() {
  return (
    <div style={{ border: "1px solid red" }}>
      <Grid
        columnCount={4}
        columnWidth={100}
        height={300}
        rowCount={100}
        rowHeight={40}
        width={400}
      >
        {({ columnIndex, rowIndex, style }) => (
          <div style={style}>{`R${rowIndex}, C${columnIndex}`}</div>
        )}
      </Grid>
    </div>
  );
}
