 var Demand = function(){
/*	var oCarousel2 = new sap.ui.commons.Carousel();
	oCarousel2.setOrientation("vertical");
	oCarousel2.setVisibleItems(5);
	oCarousel2.setHeight("500px");*/
	console.log("calling demand1");
	//Create a panel instance
/*	var oPanelD = new sap.ui.commons.Panel({
		width : "100%",
		height : "350px"
	});

	oPanelD.setText("Select Demands");*/
	
	//Create the Accordion control
	var oAccordion = new sap.ui.commons.Accordion("accordionA"); 
	console.log("calling demand2");
	//Building Section 1
	var oSection1 = new sap.ui.commons.AccordionSection( "Demand1" );		
	oSection1.setTitle("Demand1-12,000MT FERTILIZER, 5PCT MOLOO");		
	oSection1.setTooltip("Demand1");
	//oSection1.setMaxHeight("100px");

//	var oVCard1 = new sap.suite.ui.commons.BusinessCard({
//		firstTitle:  new sap.ui.commons.Label({id:"vcard1-name-label",text:"Kansal, Dolly",tooltip:"Kansal, Dolly"}),
//		iconPath: "images/person.png",
//		secondTitle: "1SBSP Houstan, USA/ 1SBSP Moji,JAPAN",
//		imageTooltip:"Kansal, Dolly",
//		account:"hello dolly"
//		//width: "300px"
//	});
//	var oContentCard = new sap.ui.commons.layout.MatrixLayout({widths:["100%"]});
//	oContentCard.createRow(new sap.ui.commons.TextView({text:"Load/Discharge 4,000MT PWWD SHINC"}));
//	oContentCard.createRow(new sap.ui.commons.TextView({text:"FEB 1~10,2015 "}));
//	oVCard1.setContent(oContentCard);
	var aData = [
	             {account: "ABC", cargoName: "ABC", loading: "abc_loading", discharging:"abc_discharge"}
	             ];
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aData});
	oSection1.addContent(new sap.ui.commons.TextView({text:"ABC",id:"account"}));
	var text1 = new sap.ui.commons.TextView({text:"ABC",id:"cargoName"});
	text1.addStyleClass("hidden");
	oSection1.addContent(text1);
	var text2 = new sap.ui.commons.TextView({text:"ABC_Loading",id:"loading"});
	text2.addStyleClass("hidden");
	oSection1.addContent(text2);
	var text3 = new sap.ui.commons.TextView({text:"ABC_Discharge",id:"discharge"});
	text3.addStyleClass("hidden");
	oSection1.addContent(text3);
	
	//Building Section 2
	var oSection2 = new sap.ui.commons.AccordionSection( "Demand2" );		
	oSection2.setTitle("Demand2-12,000MT WHEAT");		
	oSection2.setTooltip("Demand2");
	//oSection1.setMaxHeight("100px");

	var oVCard2 = new sap.suite.ui.commons.BusinessCard({
		firstTitle:  new sap.ui.commons.Label({id:"vcard2-name-label",text:"Kansal, Dolly",tooltip:"Kansal, Dolly"}),
		iconPath: "images/person.png",
		secondTitle: "1SBSP HOUSTON, USA/ 1SBSP MOJI,JAPAN",
		imageTooltip:"Kansal, Dolly",
		//width: "424px"
	});
	oSection2.addContent(oVCard2);

	//Building Section 3
	var oSection3 = new sap.ui.commons.AccordionSection( "Demand3" );		
	oSection3.setTitle("Demand3-100MT RICE");		
	oSection3.setTooltip("Demand3");
	//oSection2.setMaxHeight("100px");

	var oVCard3 = new sap.suite.ui.commons.BusinessCard({
		firstTitle:  new sap.ui.commons.Label({id:"vcard3-name-label",text:"Kansal, Dolly",tooltip:"Kansal, Dolly"}),
		iconPath: "images/person.png",
		secondTitle: "1SBSP HOUSTON, USA/ 1SBSP MOJI,JAPAN",
		imageTooltip:"Kansal, Dolly",
		//width: "424px"
	});
	oSection3.addContent(oVCard3);

	//Building Section 4
	var oSection4 = new sap.ui.commons.AccordionSection( "Demand4" );		
	oSection4.setTitle("Demand4");		
	oSection4.setTooltip("Demand4");
	//Building Section 5
	var oSection5 = new sap.ui.commons.AccordionSection( "Demand5" );		
	oSection5.setTitle("Demand5");		
	oSection5.setTooltip("Demand5");
	//Building Section 6
	var oSection6 = new sap.ui.commons.AccordionSection( "Demand6" );		
	oSection6.setTitle("Demand6");		
	oSection6.setTooltip("Demand6");
	//Building Section 7
	var oSection7 = new sap.ui.commons.AccordionSection( "Demand7" );		
	oSection7.setTitle("Demand7");		
	oSection7.setTooltip("Demand7");
	//Building Section 8
	var oSection8 = new sap.ui.commons.AccordionSection( "Demand8" );		
	oSection8.setTitle("Demand8");		
	oSection8.setTooltip("Demand8");
	//Building Section 9
	var oSection9 = new sap.ui.commons.AccordionSection( "Demand9" );		
	oSection9.setTitle("Demand9");		
	oSection9.setTooltip("Demand9");
	//Building Section 10
	var oSection10 = new sap.ui.commons.AccordionSection( "Demand10" );		
	oSection10.setTitle("Demand10");		
	oSection10.setTooltip("Demand10");
	//Building Section 11
	var oSection11 = new sap.ui.commons.AccordionSection( "Demand11" );		
	oSection11.setTitle("Demand11");		
	oSection11.setTooltip("Demand11");
	//Building Section 12
	var oSection12 = new sap.ui.commons.AccordionSection( "Demand12" );		
	oSection12.setTitle("Demand12");		
	oSection12.setTooltip("Demand12");
	
	oAccordion.addSection( oSection1 );
	oAccordion.addSection( oSection2 );
	oAccordion.addSection( oSection3 );
	oAccordion.addSection( oSection4 );
	oAccordion.addSection( oSection5 );
	oAccordion.addSection( oSection6 );
	oAccordion.addSection( oSection7 );
	oAccordion.addSection( oSection8 );
	oAccordion.addSection( oSection9 );
	oAccordion.addSection( oSection10 );
	oAccordion.addSection( oSection11);
	oAccordion.addSection( oSection12 );
	//oPanelD.addContent(oAccordion);
	//oAccordion.closeSection(oSection1);
	oAccordion.onAfterRendering = function() {
		sap.ui.commons.Accordion.prototype.onAfterRendering.apply(this, arguments);
//	    console.log(this.$());
	    this.$().find('.sapUiAcdSection').draggable({
	      connectToDroppable: "#cargo .sapUiTableCnt",
	      revert:"invalid",
	      helper:"clone",
	      cursor:"pointer",
	      zIndex: 999999,
	      containment:"window",
	      start: function(event,ui){
	        //var selectedNode = event.srcElement.innerText;
	       // console.log(selectedNode + " dragged");
//	    	  console.log("start");
	    	  
	      },
	      drag:function(event, ui) {
//	    	  console.log("dragging");
	    	  $("div.sapUiAcdSectionHdr").parent().parent().parent().css("overflow","visible");
	      },
	      stop: function(event, ui){
//	        console.log("drag stops");
//	        console.log(ui);
//	        console.log(ui);
	        //Very important line, helps to find data set
//	        $(temp1.helper['context']).find('.sapUiAcdSectionCont').text()
	      }
	    });
	  };
	return oAccordion;
	//oPanelD.placeAt("demandLeft");
};