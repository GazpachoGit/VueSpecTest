export default `
#report-preview-content {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navigator {
  text-align: center;
  border: 1px solid;
}

.verticalTableCell {
  transform: rotate(180deg);
  writing-mode: vertical-rl;
  border: 1px solid;
  text-align: center;
}

.cellFormat {
  border: 1px solid black;
  width: 20px;
}

.cellZone {
  border: 1px solid black;
  width: 20px;
}

.cellPosition {
  border: 1px solid black;
  width: 20px;
}

.cellShifr {
  border: 1px solid black;
  width: 170px;
  text-align: left;
}

.cellName {
  border: 1px solid black;
  width: 170px;
  text-align: left;
}

.cellQuantity {
  border: 1px solid black;
  width: 50px;
}

.cellNote {
  border: 1px solid black;
  width: 100px;
  text-align: left;
}

.cellNoteDLine {
  border: 1px solid black;
  width: 100px;
  font-size: x-small;
  text-align: left;
}

.cellTest {
  border: 1px solid black;
  width: 100px;
}

.highlight {
  background-color: #00eeee;
}

tr:hover {
  cursor: pointer;
}

.wideCell {
  border: 1px solid black;
  text-decoration: underline;
  text-align: center;
}

.wideCellExecution {
  border: 1px solid black;
  text-align: center;
}

.wideCellNote {
  border: 1px solid black;
  text-align: left;
}

.literaExecCell {
  border: 1px solid black;
  text-align: center;
}

.executionCell {
  border: 1px solid black;
  text-decoration: underline;
  text-align: center;
}
`;
