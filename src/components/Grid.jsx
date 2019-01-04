import React, { Component } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import NumericEditor from "../numericEditor";

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          headerName: "Make",
          field: "make",
          cellRenderer: "agGroupCellRenderer",
          cellEditor: "agRichSelectCellEditor",
          editable: true,
          cellEditorParams: {
            values: ["Ford", "Porsche", "Toyota"]
          },
          filter: "agSetColumnFilter",
          filterParams: {
            cellHeight: 20,
            values: ["Ford", "Porsche", "Toyota"],
            newRowsAction: "keep"
          }
        },
        {
          headerName: "Model",
          field: "model",
          editable: true,
          suppressFilter: true
        },
        {
          headerName: "Price",
          field: "price",
          cellEditor: "numericEditor",
          editable: true,
          filter: "agNumberColumnFilter"
        }
      ],
      detailCellRendererParams: {
        detailGridOptions: {
          columnDefs: [
            { headerName: "OID", field: "id" },
            { headerName: "Name", field: "name" },
            {
              headerName: "Download",
              field: "url",
              cellRenderer: param => {
                console.log(param);
                if (!param.hasOwnProperty("value")) return "no link";
                var hyperlink = document.createElement("a");
                hyperlink.href = param.value.link;
                hyperlink.href = "http://www.ovh.net/files/1Mio.dat";
                hyperlink.innerText = param.value.name;
                return hyperlink;
              }
            }
          ]
        },
        getDetailRowData: function(params) {
          params.successCallback(params.data.documents);
        }
      },
      frameworkComponents: {
        numericEditor: NumericEditor
      }
    };
  }

  componentDidMount() {
    //   fetch("https://api.myjson.com/bins/15psn9")
    // fetch("https://api.myjson.com/bins/itsno")  // my master-detail
    //fetch("https://api.myjson.com/bins/lfgkk") // my master-detail with link
    fetch("https://api.myjson.com/bins/ribfg")
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }));
  }

  render() {
    return (
      <AgGridReact
        enableSorting={true}
        enableFilter={true}
        floatingFilter={true}
        columnDefs={this.state.columnDefs}
        rowData={this.state.rowData}
        enableColResize={true}
        masterDetail={true}
        detailCellRendererParams={this.state.detailCellRendererParams}
        frameworkComponents={this.state.frameworkComponents}
      />
    );
  }

  save() {
    console.log("Save clicked");
    console.log(this.state.rowData);
  }
}

export default Grid;
