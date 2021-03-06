var TblPortRot = function(){
var aData = [
	{sNo: "1", type: "Ballast", cargoNam: "Hot Coil", qty:"32,000.00", term: "FIO"}
];
//Create a panel instance
var oPanel = new sap.ui.commons.Panel({
	width : "100%"
});
oPanel.setText("Port Rotation");

//Function to create the dialog
function openDialog() {
	var oDialog1 = new sap.ui.commons.Dialog();
	oDialog1.setTitle("Port Rotation Gantt Chart");
	oDialog1.addContent((new sap.ui.core.HTML({content:"<div id='ganttContainer' style='height:100%;width:100%;'></div>"})));
	oDialog1.addButton(new sap.ui.commons.Button({text: "OK", press:function(){oDialog1.close();}}));
	oDialog1.open();
	window.chartHelper.createGanttChart();
};

var oButton1 = 		new sap.ui.commons.Button({
	text : "Port Rotation Gantt Chart",
	icon : "images/graph.jpg",
	lite : true,
	press : function() { openDialog(); }
});
//(new sap.ui.core.HTML({content:"<div id='chartContainer' style='height:100%;width:100%;'></div>"}));
oButton1.addStyleClass("myGraphBtn");
oPanel.addButton( oButton1);

//Create a model and bind the table rows to this model
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({modelData: aData});
////////////////////////////////////////////@todo: use float///////////////////
/*var oExoticDecimalTypeForUS = new sap.ui.model.type.Float({
    groupingEnabled: true,
    groupingSeparator: "-",
    minFractionDigits: 2
  });

new sap.ui.table.Column({  
    label: new sap.ui.commons.Label({text: "Numbers"}),  
    template: new sap.ui.commons.TextView().bindProperty("text", {
      path: "value",
      type: oExoticDecimalTypeForUS
    })*/
//////////////////////////////////////////////////////////////////////////////////
//Create an instance of the table control
var oTable = window.helper.createTable({
	visibleRowCount: 5,
	toolbar: new sap.ui.commons.Toolbar({
		items: [ 
		        new sap.ui.commons.Button({text: "Clear", press: function() { alert("Clear Button pressed!"); }}),
		        new sap.ui.commons.Button({text: "Insert",style: sap.ui.commons.ButtonStyle.Accept, press: function() {
		        	//alert("Append Button pressed!");
		        	var idx = oTable.getSelectedIndex(); //2 = second last row, total rows :4
		        	if (idx != -1) {
			        	var modelData = oModel.getData();  
			        	var rowCount   = modelData.modelData.length;   //4 
			        	rowCount = rowCount + 1;  //5
			        	var temp = aData[idx]; //second last row save, idx = 2, position = 3
			        	aData[idx] = {sNo: rowCount};
			        	//aData.push({sNo: rowCount},idx); // new blank row at idx = 2, position = 3
			        	for (i = idx+1; i <= rowCount-1; i++) {
			        		console.log("new row at index :", i, " is:", temp );
			        		var temp1 = aData[i];
			        		aData[i] = temp; 
			        		temp = temp1;
			        		};
			        	oModel.setData({modelData: aData}); // Set Model  
			        	oTable.visibleRowCount=oTable.visibleRowCount+1;
			        	oModel.refresh();
		        	} else {
		        		alert("Please select a row!");
		        	}	
		        
		        
		        
		        }}),
		        new sap.ui.commons.Button({text: "Append",style: sap.ui.commons.ButtonStyle.Accept,  press: function() { 
		        	var modelData = oModel.getData();  
		        	var rowCount   = modelData.modelData.length;    
		        	rowCount = rowCount + 1;  
		        	aData.push({sNo: rowCount,}); // Push data to Model  
		        	oModel.setData({modelData: aData}); // Set Model  
		        	oTable.visibleRowCount=oTable.visibleRowCount+1;
		        	oModel.refresh();
		        }}) , 
		        new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function() {
		        	var idx = oTable.getSelectedIndex();
		        	if (idx != -1) {
		        		var m = oTable.getModel();
		        		var data = m.getData()['modelData'];
		        		var removed = data.splice(idx, 1);
		        		m.setData({modelData: data});
		        		console.log(removed[0]);
		        	} else {
		        		alert("Please select a row!");
		        	}
		        }}) ,  
		        new sap.ui.commons.Button({text: "Move up", press: function() { 
		        	var idx = oTable.getSelectedIndex();
		        	if (idx != 0) {
		        		var m = oTable.getModel();
		        		var data = m.getData()['modelData'];
		        		console.log("selected row is:",data[idx], "with index", idx);
		        		var temp = data[idx-1]; //2
		        		data[idx-1] = data[idx]; //3
		        		data[idx]= temp; //2
		        		console.log(" temp data is:",data[idx], "with index", idx);
		        		m.refresh();
		        		m.setData({modelData: data});
		        	} else {
		        		alert("Please select a row!");
		        	} 
		        	}}),
		        new sap.ui.commons.Button({text: "Move down", press: function() { 
		        	var idx = oTable.getSelectedIndex();
		        	
	        		var modelData = oModel.getData();  
		        	var rowCount   = modelData.modelData.length;    
		        	if (idx != -1 && !(idx>=rowCount-1)) {
		        		var m = oTable.getModel();
		        		var data = m.getData()['modelData'];
		        		console.log("selected row is:",data[idx], "with index", idx);
		        		var temp = data[idx+1]; //2
		        		data[idx+1] = data[idx]; //3
		        		data[idx]= temp; //2
		        		console.log(" temp data is:",data[idx], "with index", idx);
		        		m.refresh();
		        		m.setData({modelData: data});
		        	} else {
		        		alert("Please select a row!");
		        	} 
		        	}})
		        ]}),
	});

///////////////////////////////////////create combo box////////////////////////////////////////
// Create a ComboBox
var oComboBox = new sap.ui.commons.ComboBox("ComboBox",{
	tooltip: "Type",
	items: [new sap.ui.core.ListItem("Type1",{text: "Ballast", key: "Ba"}),
	        new sap.ui.core.ListItem("Type2",{text: "Loading", key: "Lo"}),
	        new sap.ui.core.ListItem("Type3",{text: "Discharging", key: "Di"}),
	        new sap.ui.core.ListItem("Type4",{text: "Bunker", key: "Bu"}),
	        new sap.ui.core.ListItem("Type5",{text: "Canal", key: "Ca"}),
	        new sap.ui.core.ListItem("Type6",{text: "Passing", key: "Pa"})],
/*		change: function(oEvent){
		sap.ui.getCore().byId("TextFieldKey").setValue(oEvent.oSource.getSelectedKey());
		sap.ui.getCore().byId("TextFieldId").setValue(oEvent.oSource.getSelectedItemId());
		}*/
	});
////////////////////////////////////////////////////////////////////////////////////////
//Define the columns and the control templates to be used

oTable.addColumn(window.helper.createColumn("sNo", "SNo", "20px", "TV"));
oTable.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Type"}), template: oComboBox,width: "50px" }));
//oTable.addColumn(window.helper.createColumn("type", "Type", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("coord", "Port Name or Coordinates", "60px", "TF"));
oTable.addColumn(window.helper.createColumn("distEca", "Distance/(S)ECA", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("wf", "W.F", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("spd", "Spd", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("sea", "Sea", "40px", "TF"));

/*sColumnId = 'Distance';
oTable.addColumn(new sap.ui.table.Column({
    id: sColumnId,
    label: sColumnId,
    template: new sap.ui.commons.TextField({"text": { path: 'port>' + sColumnId}}),
}));

sColumnId = 'Speed';
oTable.addColumn(new sap.ui.table.Column({
    id: sColumnId,
    label: sColumnId,
    template: new sap.ui.commons.TextField({"text": { path: 'port>' + sColumnId}}),
}));

sColumnId = 'Days';
var oDistance = new sap.ui.commons.TextField({});
oDistance.bindValue ({
    parts: [
            {path: "/port>Distance", type: new sap.ui.model.type.Float()},
            {path: "/port>Speed", type: new sap.ui.model.type.Float()}
            ],
       formatter: function(Distance, Speed){ // all parameters are strings
    	   return parseFloat(Distance) / parseFloat(Speed);
       }
}); 
oTable.addColumn(new sap.ui.table.Column({
    id: sColumnId,
    label: sColumnId,
    template: oDistance
    new sap.ui.commons.TextField({
        "text": {
            parts: [{ path: "port>Distance"}, {path: "port>Speed"}],
            formatter: function(Speed, Distance){ 
            	return parseFloat(Distance) / parseFloat(Speed);
        },
        },
    
}));*/




var calcTxt = new sap.ui.commons.TextField({   
    	id: "txtCalc",
    	liveChange : function(oEvent){
//    		var idx = oTable.getSelectedIndex();
//    		console.log(this);
//    		console.log("index is ",oTable.getModel().getData()['modelData']);
//    		sap.ui.getCore().getControl("TextView").setText(oEvent.getParameter("liveValue"));
//    		sap.ui.getCore().getControl("spdTxt").setText(oEvent.getParameter("liveValue"));
//    		sap.ui.getCore().getControl("spdTxt").setValue(oEvent.getParameter("liveValue"));
//    		this.setValue(oEvent.getParameter("liveValue"));
//    		console.log(sap.ui.getCore().getControl("spdTxt"));
//    		console.log("this",this);
    		this.setValue(oEvent.getParameter("liveValue"));
    		//get index of the row being changed
    		//set this value there
    		//sap.ui.getCore().getModel().setData(oData);
//    		console.log(oEvent.getParameter("liveValue"));
//    		console.log("value",this.getValue());
//    		oModel.setProperty("colCalc",oEvent.getParameter("liveValue"));
    		var spdTxt = new sap.ui.commons.TextView({ text: oEvent.getParameter("liveValue") });
    		setTimeout(function(){
    			sap.ui.getCore().getControl("colSpd").setTemplate(spdTxt)  	;}		
    		,10);
    		console.log(this.getValue());
    	}
    });
var spdTxt = new sap.ui.commons.TextView("spdTxt",{ text: calcTxt.getValue() });
//oTable.attachCellClick(function(oEvent) {
//	oModel.refresh();
//	var currentRowContext = oEvent.getParameter("rowIndex");
//	var value = oModel.getProperty("colCalc", currentRowContext);
//	console.log("current index is:",currentRowContext);
//	console.log("value is ",value);
//});
oTable.addColumn(new sap.ui.table.Column("colSpd",{
	label: new sap.ui.commons.Label({text: "Speed"}), 
	template: spdTxt,
	//value: calcTxt.getValue(),
	width: "50px" }));
oTable.addColumn(new sap.ui.table.Column("colCalc",{
	label: new sap.ui.commons.Label({text: "Calculated"}), 
	template: calcTxt,
	width: "50px" }));

oTable.addColumn(window.helper.createColumn("ldrate", "L/D Rate", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("portiw", "Port(I/W)", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("dem", "Dem", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("des", "Des", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("portChg", "Port charge", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("arrival", "Arrival", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("departure", "Departure", "40px", "TF"));



oTable.setModel(oModel);
oTable.bindRows("/modelData");

//Initially sort the table
//oTable.sort(oTable.getColumns()[0]);
oPanel.addContent(oTable);
return oPanel;

}