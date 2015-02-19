sap.ui.jsview("voyage1.Estimate1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf voyage1.Estimate1
	*/ 
	getControllerName : function() {
		return "voyage1.Estimate1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf voyage1.Estimate1
	*/ 
	createContent : function(oController) {
		// this.removeAllContent();
		var demand = new Demand();
		var header = new Header();
		var oDivider1 = new sap.ui.commons.HorizontalDivider("divider1", {type: "Page", height: "Small"});
		var oLayoutM = new sap.ui.commons.layout.MatrixLayout({
			id : "matrix1",
			layoutFixed : true,
			columns : 1,
			width : "100%"
			//height: "350px"
			});

		var cargo = new Cargo();
		//var treetable = new TreeTableHelper();
		var tblPortRot = new TblPortRot();
		oLayoutM.createRow(cargo,{height: "150px"} );
		oLayoutM.createRow(tblPortRot,{height: "250px"} ); //{height: "300px"}, 
		
		var oLayoutH = new sap.ui.commons.layout.MatrixLayout({
				id : "matrix2",layoutFixed : true,
				columns : 2,
				width : "100%",
				widths : ["20%","80%"]
				//height: "350px"
		});
		oLayoutH.createRow(demand, oLayoutM);
		
		var button1 = new sap.ui.commons.Button({ 
			text: "Go back to Vessel Selection",
		   press : function() {
			   sap.ui.localResources("voyage1");
			   var view =  new sap.ui.view({
	            	  id: "estViewID",
	            	  viewName: "voyage1.Estimate",
	            	  type: sap.ui.core.mvc.ViewType.JS
	              });
			   
		       //sap.ui.getCore().byId("myShell").removeAllWorksetItems();
		       sap.ui.getCore().byId("myShell").setContent(sap.ui.getCore().byId("estViewID"),true);
						 
			alert('Alert from Back button' );
					}
				});
		var oSummary = new summary();
		
		return [button1,header, oDivider1,oLayoutH,oSummary];;
	}

});
