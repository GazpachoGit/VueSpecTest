export default `
return function () {
  return Vue.component("tableVue", {
    data: function () {
      return dataObject;
    },
    methods: {
      numberOfPages() {
        return dataObject.getNumberOfPages();
      },
      rowClicked(rowNumber) {
        this.currentRow = rowNumber;
      }
    },
    template: tableHTMLString
  });
};
`;
