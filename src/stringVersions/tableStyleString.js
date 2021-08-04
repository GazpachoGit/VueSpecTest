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
  white-space: normal;
}

.cellZone {
  border: 1px solid black;
  width: 20px;
  white-space: normal;
}

.cellPosition {
  border: 1px solid black;
  width: 20px;
  white-space: normal;
}

.cellShifr {
  border: 1px solid black;
  width: 170px;
  text-align: left;
  white-space: normal;
}

.cellName {
  border: 1px solid black;
  width: 170px;
  text-align: left;
  white-space: normal;
}

.cellQuantity {
  border: 1px solid black;
  width: 50px;
  white-space: normal;
}

.cellNote {
  border: 1px solid black;
  width: 100px;
  text-align: left;
  white-space: normal;
}

.cellNoteDLine {
  border: 1px solid black;
  width: 100px;
  font-size: x-small;
  text-align: left;
  white-space: normal;
}

.cellTest {
  border: 1px solid black;
  width: 100px;
  white-space: normal;
}

.highlight {
  background-color: #00EEEE;
}

tr:hover {
  cursor: pointer;
}
`;
