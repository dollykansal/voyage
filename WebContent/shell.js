/**
 * 
 */
(function(){
	var oShell = new sap.ui.ux3.Shell("myShell", {
		appTitle:"Voyage Estimator",
		worksetItems:[
		              new sap.ui.ux3.NavigationItem("wi_est_id",{
		            	  key: "Estimate",
		            	  text: "Estimate"
		              }) ,
		              new sap.ui.ux3.NavigationItem("wi_hom_id",{
		            	  key: "wi_hom_key",
		            	  text: "Home"
		              })  
		              ],
		              content: [new sap.ui.view({
		            	  id: "estViewID",
		            	  viewName: "voyage1.Estimate",
		            	  type: sap.ui.core.mvc.ViewType.JS
		              })]
	});

	oShell.placeAt("content");
})();