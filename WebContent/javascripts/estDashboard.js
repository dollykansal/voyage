var estDash = function(){
/////////////////////////////////////////second table - cargo  ///////////////////////////////////////////////////////////////////
	var aDataEstDash = [
	                  {sNo: "1", account: "Seafuture", cargoNam: "Hot Coil", qty:"32,000.00", term: "FIO"},
	                  {sNo: "1", account: "Seafuture", cargoNam: "Hot Coil", qty:"32,000.00", term: "FIO"}
	                  ];
	
	//Create a panel instance
	var oPanelDash = new sap.ui.commons.Panel({
		width : "100%"
	});
	oPanelDash.setText("Estimate Dashboard");
	var oTableDash = window.helper.createTable({
		//title: "Cargo",
		visibleRowCount: 3,
		firstVisibleRow: 2,
		toolbar: new sap.ui.commons.Toolbar({
			items: [new sap.ui.commons.Button({text: "Create New Estimate",
				lite : true}),
				
			new sap.ui.commons.Button({text: "Copy and create new",lite : true
			}),
			new sap.ui.commons.Button({text: "Open estimate",lite : true
			}),		
		new sap.ui.commons.Button({text: "Edit estimate",lite : true
		}),
			new sap.ui.commons.Button({text: "Compare Estimates"
			})
				//press: function() { oDialogFragment.open(); }}) 

			        ]}),
	});

	//Define the columns and the control templates to be used
	oTableDash.addColumn(window.helper.createColumn("select", "Select to compare", "20px", "CH"));
	oTableDash.addColumn(window.helper.createColumn("sNo", "SNo", "20px", "TV"));
	oTableDash.addColumn(window.helper.createColumn("estNo", "Estimate Number", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("vessel", "Vessel", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("tcOper", "TCOperator", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("trader", "Trader", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("voyOper", "Voyage Operator", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("zeroProfInd", "Zero Profit Ind", "20px", "CH"));
	oTableDash.addColumn(window.helper.createColumn("totDemDis", "Total Demurrage Discharge ", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("totPortCh", "Total Port Charges", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("totalFrtTax", "Total Freight Tax", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("totBunkExp", "Total Bunker Expense", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("operExp", "Operational Expense", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("totRev", "Total Revenue", "40px", "TF"));
	oTableDash.addColumn(window.helper.createColumn("totProfit", "Total Profit", "40px", "TF"));

	//Create a model and bind the table rows to this model
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aDataEstDash});
	oTableDash.setModel(oModel);
	oTableDash.bindRows("/modelData");
	    

	//Initially sort the table
	oTableDash.sort(oTableDash.getColumns()[0]);
	oPanelDash.addContent(oTableDash);
	return oPanelDash;
}
