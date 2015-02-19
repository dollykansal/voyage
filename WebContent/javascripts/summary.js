var summary = function(){
	//Create a panel instance
	var oPanel1 = new sap.ui.commons.Panel({
		width : "370px"
	});

	//As alternative if no icon is desired also the following shortcut might be possible:
	oPanel1.setText("Bunker Expense");

	//Create a matrix layout with 2 columns
	var oMatrixRes = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		width : '350px',
		columns : 4
	});
	
	oMatrixRes.setWidths('35%', '15%','35%', '15%');

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'FO Price'
	});
	
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'DO Price'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'FO Consumption'
	});
	
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'DO Consumption'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'FO Expense'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'DO Expense'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'LSFO Price'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'LSDO Price'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'LSFO Consumption'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'LSDO Consumption'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'LSFO Expense'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'LSDO Expense'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Add the form to the panels content area
	oPanel1.addContent(oMatrixRes);
	
	
	//////////////////////////////////////////bunker expense/////////////////////////////////////////////////
	//Create a panel instance
	var oPanel2 = new sap.ui.commons.Panel({
		width : "370px"
	});
	//Set the title of the panel
//	oPanel2.setTitle(new sap.ui.core.Title({
//		text : "Operation Expense",
//		icon : "images/carousel/SAPLogo.gif"
//	}));

	//As alternative if no icon is desired also the following shortcut might be possible:
	oPanel2.setText("Bunker Expense");

	//Create a matrix layout with 2 columns
	var oMatrixB = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		width : '350px',
		columns : 4
	});
	
	oMatrixB.setWidths('30%', '20%','30%', '20%');

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'FO Price'
	});
	
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'DO Price'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixB.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'FO Consumption'
	});
	
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'DO Consumption'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixB.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'FO Expense'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'DO Expense'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixB.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'LSFO Price'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'LSDO Price'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixB.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'LSFO Consumption'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'LSDO Consumption'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixB.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'LSFO Expense'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'LSDO Expense'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixB.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Add the form to the panels content area
	oPanel2.addContent(oMatrixB);
	///////////////////////////////////////////////////////////////////////////////////////////////////
	//Create a panel instance
	var oPanel3 = new sap.ui.commons.Panel({
		width : "420px"
	});
	//Set the title of the panel
//	oPanel3.setTitle(new sap.ui.core.Title({
//		text : "Operation Expense",
//		icon : "images/carousel/SAPLogo.gif"
//	}));

	//As alternative if no icon is desired also the following shortcut might be possible:
	oPanel3.setText("Result");

	//Create a matrix layout with 2 columns
	var oMatrixRes = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		width : '400px',
		columns : 4
	});
	
	oMatrixRes.setWidths('100px', '100px','100px', '100px');

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Hire/Day'
	});
	
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Total Revenue'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'H/Add Comm.'
	});
	
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Op. Expense'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Net Hire'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Op. Profit'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'C/Base'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Total Hire'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : ''
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Total Expense'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : ''
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'PROFIT'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrixRes.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Add the form to the panels content area
	oPanel3.addContent(oMatrixRes);
	//////////////////////////////////////////////////////////////////////////////////////
	//Create a matrix layout with 2 columns
	var oMatrixFull = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		//width : '100%',
		columns : 3
	});
	
	oMatrixFull.setWidths('32%', '32%','36%');
	oMatrixFull.createRow(oPanel1,oPanel2,oPanel3);
	return (oMatrixFull);
}
