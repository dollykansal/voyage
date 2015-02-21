var Cargo = function(){
/////////////////////////////////////////second table - cargo  ///////////////////////////////////////////////////////////////////
	var aDataCargo = [
	                  {sNo: "1", account: "Seafuture", cargoNam: "Hot Coil", qty:"32,000.00", term: "FIO"}
	                  ];
	
	//Create a panel instance
	var oPanelCargo = new sap.ui.commons.Panel({
		width : "100%"
	});
	oPanelCargo.setText("Cargo");
	var oButton2 = 		new sap.ui.commons.Button({
		text : "Cargo Status Graph",
		icon : "images/graph.jpg",
		lite : true
	});
	oButton2.addStyleClass("myGraphBtn");

	oPanelCargo.addButton( oButton2);
	var oButtonFS = 		new sap.ui.commons.Button({
		text : "Frt. Sim.",
		style: sap.ui.commons.ButtonStyle.Emph,
		press: function() { oDialogFragment.open(); }
	});
	oButtonFS.addStyleClass("myGraphBtn");
	oPanelCargo.addButton( oButtonFS);
	
	//Function to create the dialog with fragments
	var oDialogFragment = sap.ui.jsfragment("frtsim.fragments.JSFragmentDialog");

	//Create an instance of the table control
	var oTableCargo = window.helper.createTable({
		id:"cargo",
		//title: "Cargo",
		visibleRowCount: 3,
//		firstVisibleRow: 1,
		toolbar: new sap.ui.commons.Toolbar({
			items: [ 
			        new sap.ui.commons.Button({text: "Clear", press: function() { alert("Clear Button pressed!"); }}),
			        new sap.ui.commons.Button({text: "Append", press: function() { 
			    	  var modelData = oModel.getData();  
		              var rowCount   = modelData.modelData.length;    
		              rowCount = rowCount + 1;  
		              aDataCargo.push({sNo: rowCount,}); // Push data to Model  
		              oModel.setData({modelData: aDataCargo}); // Set Model  
		              oTableCargo.visibleRowCount=oTableCargo.visibleRowCount+1;
		              oModel.refresh();
			        }}),
			        new sap.ui.commons.Button({text: "Insert",style: sap.ui.commons.ButtonStyle.Accept,  press: function() { 
			        	var modelData = this.getModel().getData(); 
			        	console.log(modelData);
			        	var rowCount   = modelData.modelData.length;    
			        	rowCount = rowCount + 1;  
			        	aDataCargo.push({sNo: rowCount, cargoNam: " "}); // Push data to Model  
			        	oModel.setData({modelData: aDataCargo}); // Set Model  
			        	oTableCargo.setVisibleRowCount(oTableCargo.getVisibleRowCount()+1);
			        	oModel.refresh();
			        }}) , 
			        new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function() {
			        	var idx = oTableCargo.getSelectedIndex();
			        	if (idx != -1) {
			        		var m = oTableCargo.getModel();
			        		var data = m.getData()['modelData'];
			        		var removed = data.splice(idx, 1);
			        		m.setData({modelData: data});
//			        		m.setData(data);
//			        		sap.m.MessageToast.show(JSON.stringify(removed[0]) +  'is removed');
			        		console.log(removed[0]);
			        	} else {
//			        		sap.m.MessageToast.show('Please select a row');
			        	}
			        }}) ,  
			        new sap.ui.commons.Button({text: "Move up", press: function() { alert("Move up Button pressed!"); }}),
			        new sap.ui.commons.Button({text: "Move down", press: function() { alert("Move down Button pressed!"); }}),
			       // new sap.ui.commons.Button({text: "Frt. Sim.",style: sap.ui.commons.ButtonStyle.Emph, press: function() { oDialogFragment.open(); }}) //calling fragment
			        //new sap.ui.commons.Button({text: "Frt. Sim.", press: function() { openFrtSim(); }})
			        ]}),
	});

	var oTableCargoLoadPort = new sap.ui.commons.TextField({   
    	id: "oTableCargoLoadPort",
    	change : function(oEvent){
    		var changedValue = this.getValue();
    		var id = this.getId();
    		var idArr = id.split("-");
    		var rowIndex = idArr[2].split("row")[1];
    		var model = oTableCargo.getModel();
    		var data = oTableCargo.getModel().getData()['modelData'];
    		data[rowIndex]['loadPort']=changedValue;
    		model.setData({modelData: data});
    		model.refresh();
    		if(changedValue!=""){
	    		var portModel = window.oPortTable.getModel();
	    		var portModelData = portModel.getData()['modelData']; 
	    		var rowCount   = portModelData.length;   //4 
	    		portModelData[rowCount] = {sNo:rowCount+1,cType:"Loading", coord: changedValue};
	        	portModel.setData({modelData: portModelData}); // Set Model  
	        	window.oPortTable.setVisibleRowCount(window.oPortTable.getVisibleRowCount()+1);
	        	portModel.refresh();
    		}
    	}
    });
	oTableCargoLoadPort.bindProperty("value", "loadPort");
	var oTableCargoDisPort = new sap.ui.commons.TextField({   
    	id: "oTableCargoDisPort",
    	change : function(oEvent){
    		var changedValue = this.getValue();
    		var id = this.getId();
    		var idArr = id.split("-");
    		var rowIndex = idArr[2].split("row")[1];
    		var model = oTableCargo.getModel();
    		var data = oTableCargo.getModel().getData()['modelData'];
    		data[rowIndex]['disPort']=changedValue;
    		model.setData({modelData: data});
    		model.refresh();
    		if(changedValue!=""){
	    		var portModel = window.oPortTable.getModel();
	    		var portModelData = portModel.getData()['modelData']; 
	    		var rowCount   = portModelData.length;   //4 
	    		portModelData[rowCount] = {sNo:rowCount+1,cType:"Discharging", coord: changedValue};
	        	portModel.setData({modelData: portModelData}); // Set Model  
//	        	window.oPortTable.setVisibleRowCount(window.oPortTable.getVisibleRowCount()+1);
	        	portModel.refresh();
    		}
    	}
    });
	oTableCargoDisPort.bindProperty("value", "distPort");
	//Define the columns and the control templates to be used
	oTableCargo.addColumn(window.helper.createColumn("sNo", "SNo", "20px", "TV"));
	oTableCargo.addColumn(window.helper.createColumn("account", "Account", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("cargoNam", "Cargo Name", "40px", "TF"));
	
	oTableCargo.addColumn(new sap.ui.table.Column("loadPort",{
		label: new sap.ui.commons.Label({text: "Loading Port"}), 
		template: oTableCargoLoadPort,
		width: "40px" }));
	oTableCargo.addColumn(new sap.ui.table.Column("disPort",{
		label: new sap.ui.commons.Label({text: "Discharging Port"}), 
		template: oTableCargoDisPort,
		width: "40px" }));
	
//	oTableCargo.addColumn(window.helper.createColumn("loadPort", "Loading Port", "40px", "TF"));
//	oTableCargo.addColumn(window.helper.createColumn("disPort", "Discharging Port", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("qty", "Quantity", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("frt", "Frt", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("term", "Term", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("rev", "Revenue", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("aComm", "A.Comm", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("brkg", "Brkg", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("frtTax", "Frt Tax", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("linTerm", "Liner Term", "40px", "TF"));


	//Create a model and bind the table rows to this model
	var oModel = new sap.ui.model.json.JSONModel();
	
	oModel.setData({modelData: aDataCargo});
	oTableCargo.setModel(oModel);
	oTableCargo.bindRows("/modelData");
	    

	//Initially sort the table
	oTableCargo.sort(oTableCargo.getColumns()[0]);
	oTableCargo.onAfterRendering = function() {
		sap.ui.table.Table.prototype.onAfterRendering.apply(this, arguments);
    	$('#cargo').droppable({
	      drop:function(event, ui){
	    	var modelData = oModel.getData();  
	        var rowCount   = modelData.modelData.length;    
//	        rowCount = rowCount + 1;
	        aDataCargo.push({sNo:rowCount+1,account: $(ui.helper['context']).find('.sapUiAcdSectionCont').text()}); // Push data to Model  
        	oModel.setData({modelData: aDataCargo}); // Set Model  
//        	oTableCargo.setVisibleRowCount(oTableCargo.getVisibleRowCount()+1);
        	oModel.refresh();
	      }
	    });
	  };
	window.cargo = oTableCargo;
	oPanelCargo.addContent(oTableCargo);
	return oPanelCargo;
};