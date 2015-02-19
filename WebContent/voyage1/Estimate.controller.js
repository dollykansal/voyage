sap.ui.controller("voyage1.Estimate", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf voyage1.Estimate
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf voyage1.Estimate
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf voyage1.Estimate
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf voyage1.Estimate
*/
//	onExit: function() {
//
//	}
	// vesselName: 0,
	selectVessel: function(vesselname) {
		// this is the vessel selected
		console.log(vesselname);
		
		// now change the selection in second table as well
		// get the vessel name done
		// push it to oData ( new json model to be defined here)
		var aDataVess = [];
		var oModel = new sap.ui.model.json.JSONModel();
		console.log("this is inside : ",vesselname );
		aDataVess.push({mv: vesselname});
		oModel.setData({modelData: aDataVess});
		//get reference to the table in the final_vessel.js and do binding
		var panel =  sap.ui.getCore().byId("estViewId"); //.setContent(sap.ui.getCore().byId("estViewID"),true);
		var panel = this.getView().getContent()[1];
		var matrix = panel.getContent()[0];
		var table1 = ((matrix.getRows()[0]).getCells()[0]).getContent()[0];
		console.log("this is table:", table1);
		console.log("still:",sap.ui.getCore().byId("estViewId1"))
		//console.log(view1.byId("iddemo"));
		table1.setModel(oModel); 
	},
	
	getSelectedVessel: function() {
		//return vesselName;
	}
});