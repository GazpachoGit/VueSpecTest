import Vue from "vue";
import dataObjectString from "./stringVersions/report.dataobjectString";
import tableString from "./stringVersions/report.tableString";
import tableHTMLString from "./stringVersions/report.tableHTMLString";
import tableComponent from "./stringVersions/tableComponentString";

Vue.config.productionTip = false;

const table = JSON.parse(tableString);

const dataObject = new Function(dataObjectString)()();
console.log(dataObject);

dataObject.table = table;

const tableVue = new Function(
  "Vue",
  "tableHTMLString",
  "dataObject",
  tableComponent
)(Vue, tableHTMLString, dataObject)();

new Vue({
  render: (h) => h(tableVue)
}).$mount("#app");
