import Vue from "vue";
import dataObjectString from "./stringVersions/report.dataobjectString";
import tableString from "./stringVersions/report.tableString";
import tableHTMLString from "./stringVersions/report.tableHTMLString";
import tableComponentString from "./stringVersions/tableComponentString";
import tableStyleString from "./stringVersions/tableStyleString";

/*что отредактировал:
В стиль эелемента таблицы добавил width: auto
Вместо id="app" в стилизации назвал id="report-preview-content" и указал его
в верхнем div html шаблона
Во все классы ячеек добавил: white-space: normal;
*/

const table = JSON.parse(tableString);

const dataObject = new Function(dataObjectString)()();

dataObject.table = table;

const tableVue = new Function(
  "Vue",
  "tableHTMLString",
  "dataObject",
  tableComponentString
)(Vue, tableHTMLString, dataObject)();

function setStyle() {
  const appDiv = document.getElementById("report-style");
  const css = document.createElement("style");
  css.innerHTML = tableStyleString;
  appDiv.appendChild(css);
}

setStyle();

new Vue({
  render: (h) => h(tableVue)
}).$mount("#app");
