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
      },
      getClassNameNormalCell: function(line) {
        if(line.razdel=='true')
          return 'wideCell';

        if(line.execution=='true')
          return 'executionCell';

        if(line.litera_and_execution_text=='true')
          return 'literaExecCell';

        return 'cellName';
      },
      getClassNameWideCell: function(line){
        console.log(line.name);
        if(line.execution_var_no=='true')
          return 'wideCellExecution';

        if(line.is_note=='true')
          return 'wideCellNote'
          
        return 'wideCell';
      }
    },
    template: tableHTMLString
  });
};
`;
