import Vue from "vue";
import dataObjectString from "./stringVersions/report.dataobjectString";
import tableString from "./stringVersions/report.tableString";
import tableHTMLString from "./stringVersions/report.tableHTMLString";
import tableComponent from "./stringVersions/tableComponentString";
import tableStyle from "./stringVersions/tableStyleString";

const table = JSON.parse(tableString);

const dataObject = new Function(dataObjectString)()();

dataObject.table = table;

const tableVue = new Function(
  "Vue",
  "tableHTMLString",
  "dataObject",
  tableComponent
)(Vue, tableHTMLString, dataObject)();

function setStyle() {
  const appDiv = document.getElementById("report-style");
  const css = document.createElement("style");
  css.innerHTML = tableStyle;
  appDiv.appendChild(css);
}

setStyle();

new Vue({
  render: (h) => h(tableVue)
}).$mount("#app");
