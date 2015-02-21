var Vessel = function(oController){
	//this.createVessel = function(oController){
		console.log("calling final vessel");
//		$.getScript("javascripts/createTable.js", function(){
//			   alert("Script loaded and executed.");
//			   window.helper = new TableHelper();
//			   
//		});
//		window.helper = new TableHelper();
/*		var aDataVess = [
		                 {mv: "Netpas", type: "Owned", dwt: 35000, draft: "13.00"}
		                 ];*/
		
		var aDataVess = [];
		this.getVesselTable = function(){
			return oTableVess;
		};
//		creating table using helper
		var oTableVess = window.helper.createTable({
			//title: "Selected Vessel Particular",
			id: "iddemo",
			toolbar: new sap.ui.commons.Toolbar({items: [ 
			                                             new sap.ui.commons.Button({text: "Edit", press: function() { alert("Edit Button pressed!"); }}),
			                                             new sap.ui.commons.Button({text: "List", press: function() { alert("List Button pressed!"); }}),
			                                             new sap.ui.commons.Button({text: "Clear", press: function() { alert("Clear Button pressed!"); }}),
			                                             new sap.ui.commons.Button({text: "History", press: function() { alert("History Button pressed!"); }})
			                                             ]})});
		
//		Define the columns and the control templates to be used
		var oColumn = window.helper.createColumn("mv", "MV", "100px", "TV");

		var oCustomMenu = new sap.ui.commons.Menu();
		oCustomMenu.addItem(new sap.ui.commons.MenuItem({
			text:"Custom Menu",
			select:function() {
				alert("Custom Menu");
			}
		}));
		oColumn.setMenu(oCustomMenu);
		oTableVess.addColumn(oColumn);
		
		oTableVess.addColumn(window.helper.createColumn("type", "Type", "50px", "TF"));
		oTableVess.addColumn(window.helper.createColumn("dwt", "DWT", "50px", "TF"));
		oTableVess.addColumn(window.helper.createColumn("draft", "Draft", "50px", "TF"));

//		Create a model and bind the table rows to this model
        
		var oModel = new sap.ui.model.json.JSONModel();
		var vesselName = oController.getSelectedVessel();
		console.log("this is inside : ",vesselName );
		aDataVess.push({mv: "Robbo"});
		oModel.setData({modelData: aDataVess});
		oTableVess.setModel(oModel);
		oTableVess.bindRows("/modelData");

//		Initially sort the table
		oTableVess.sort(oTableVess.getColumns()[0]);

		var aDataMode = [
		                 {ballast: "20.0", laden: "10.0"}
		                 ];

		//Create a RadioButtonGroup with two options: full & Eco
		var oRBG1 = window.helper.createRadioButton("Select Full or Eco")
		oRBG1.addItem(window.helper.createItem("Full","Key1"));
		oRBG1.addItem(window.helper.createItem("Eco","Key2"));
		//oRBG1.placeAt("vesselmode_1");

		//Create an instance of the table control
		var oTableMode = window.helper.createTable();
		oTableMode.addColumn(window.helper.createColumn("ballast", "Ballast", "60px", "TV"));
		oTableMode.addColumn(window.helper.createColumn("laden", "Laden", "60px", "TF"));
		//oTableMode.addExtension(oRBG1);
		//Create a model and bind the table rows to this model
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({modelData: aDataMode});
		oTableMode.setModel(oModel);
		oTableMode.bindRows("/modelData");

		//Initially sort the table
		oTableMode.sort(oTableMode.getColumns()[0]);
	/////////////////////////////////////////DO  ///////////////////////////////////////////////////////////////////
		console.log("calling final vessel do");
		var aDataDo = [
		               {vesselName: "DO", type: "", sea: "0.00", idle: "0.0", work: "0.0"},
		               {vesselName: "LSDO", type: "", sea: "0.00", idle: "0.0", work: "0.0"}
		               ];

		//Create an instance of the table control
		var oTableDo = window.helper.createTable({visibleRowCount: 2,firstVisibleRow: 2});
		//Define the columns and the control templates to be used
		oTableDo.addColumn(window.helper.createColumn("vesselName", "VesselName", "50px", "TV"));
		oTableDo.addColumn(window.helper.createColumn("type", "Type", "50px", "TF"));
		oTableDo.addColumn(window.helper.createColumn("sea", "Sea", "50px", "TF"));
		oTableDo.addColumn(window.helper.createColumn("idle", "Idle", "50px", "TF"));
		oTableDo.addColumn(window.helper.createColumn("work", "Work", "50px", "TF"));


		//Create a model and bind the table rows to this model
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({modelData: aDataDo});
		oTableDo.setModel(oModel);
		oTableDo.bindRows("/modelData");

		//Initially sort the table
		oTableDo.sort(oTableDo.getColumns()[0]);

	/////////////////////////////////////////FO  ///////////////////////////////////////////////////////////////////
		console.log("calling final vessel fo");
		var aDataFo = [
		               {vesselName: "FO", type: "180", ballast: "20.00", laden: "10.00", idle: "1.0", work: "1.0"},
		               {vesselName: "LSFO", type: "", ballast: "0.00", laden: "0.00", idle: "0.0", work: "0.0"}
		               ];

		//Create an instance of the table control
		var oTableFo = window.helper.createTable({visibleRowCount: 2,firstVisibleRow: 2});
		//Define the columns and the control templates to be used
		oTableFo.addColumn(window.helper.createColumn("vesselName", "VesselName", "50px", "TV"));
		oTableFo.addColumn(window.helper.createColumn("type", "Type", "50px", "TF"));
		oTableFo.addColumn(window.helper.createColumn("ballast", "Ballast", "50px", "TF"));
		oTableFo.addColumn(window.helper.createColumn("laden", "laden", "50px", "TF"));
		oTableFo.addColumn(window.helper.createColumn("idle", "Idle", "50px", "TF"));
		oTableFo.addColumn(window.helper.createColumn("work", "Work", "50px", "TF"));

		//Create a model and bind the table rows to this model
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({modelData: aDataFo});
		oTableFo.setModel(oModel);
		oTableFo.bindRows("/modelData");

	/////////////////////////////////////////Panel & Matrix Vessel  ///////////////////////////////////////////////////////////////////
		//Create a panel instance
		var oPanel = new sap.ui.commons.Panel({
			id: "Panel1",
			width : "100%"
		});

		oPanel.setText("Selected Vessel Particular");
		var oButton3 = 		new sap.ui.commons.Button({
			text : "Vessel Capacity Graph",
			icon : "images/graph.jpg",
			lite : true
		});
		oButton3.addStyleClass("myGraphBtn");
	// create a layout sap.ui.commons.layout.HAlign.Right
		//var oLayout = new sap.ui.commons.layout.MatrixLayoutCell()
		
		oPanel.addButton( oButton3);
		//Create a matrix layout with 5 columns
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			id:"Matrix1",
			layoutFixed : true,
			width : '100%',
			columns : 5
		});

		oMatrix.setWidths('25%','5%', '15%','25%', '30%');
		oMatrix.createRow(oTableVess,oRBG1, oTableMode, oTableDo, oTableFo);
		oPanel.addContent(oMatrix);
		return oPanel;
//		oPanel.placeAt("estViewID");
	}
//}