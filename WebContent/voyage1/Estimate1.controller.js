sap.ui.controller("voyage1.Estimate1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf voyage1.Estimate1
*/
	onInit: function() {
		// set global models  
        var model = new sap.ui.model.json.JSONModel();  
        model.setData({
            aComm: "12"
        });
        
        sap.ui.getCore().setModel(model, "model");  
        //model>/input
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf voyage1.Estimate1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf voyage1.Estimate1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf voyage1.Estimate1
*/
//	onExit: function() {
//
//	}
	calculateOperationExpense: function(value, model){
		if(model.getProperty('/opExp')!=undefined){
			model.setProperty("/opExp",parseInt(value)+model.getProperty('/opExp'))
		}else{
			model.setProperty("/opExp",parseInt(value));
		}
	},
	onCargoChange: function(oAddComm, oBrkg, oFrtTax) {
		 var model = null;
		 
		 if(sap.ui.getCore().getModel('model')!=null){
			 model = sap.ui.getCore().getModel('model');
		 }else{
			 model = new sap.ui.model.json.JSONModel();
		 }
		 
		if(oAddComm!=null){
			model.setProperty("/aComm", oAddComm);
			this.calculateOperationExpense(oAddComm, model);
		}
		if(oBrkg!=null){
			model.setProperty("/brkg", oBrkg);
			this.calculateOperationExpense(oBrkg, model);
		}
		if(oFrtTax!=null){
			model.setProperty("/frTax", oFrtTax);
			this.calculateOperationExpense(oFrtTax, model);
		}
	    sap.ui.getCore().setModel(model, "model");    
	}
});