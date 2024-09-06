sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
	"sap/ui/model/json/JSONModel",
	"sap/m/Popover",
	"sap/m/Button",
	"sap/m/library"
],
function (Controller,Device,JSONModel,Popover,Button,library) {
    "use strict";

    return Controller.extend("com.app.outbound.controller.UnloadingByBillofLading", {
        onInit: function () {
            
			
        },
        Onpresssubmit: function () {

            this.getView().byId("icon1").setVisible(false);
            this.getView().byId("icon2").setVisible(true);
            this.getView().byId("_IDGenButton1111").setVisible(true);

        },
        Onpressback1: function () {

            this.getView().byId("icon1").setVisible(true);
            this.getView().byId("icon2").setVisible(false);
            this.getView().byId("_IDGenButton1111").setVisible(false);
            this.getView().byId("_IDGenButton2222").setVisible(false);
            this.getView().byId("_IDGenButton3333").setVisible(false);  
            this.getView().byId("_IDGenButton4444").setVisible(false);  
            this.getView().byId("_IDGenButton5555").setVisible(false);
            this.getView().byId("_IDGenButton6666").setVisible(false);


            

        },
        onHUListPress:function () {

            this.getView().byId("icon1").setVisible(false);
            this.getView().byId("icon2").setVisible(false);
            this.getView().byId("icon3").setVisible(true);
           
            this.getView().byId("_IDGenButton1111").setVisible(false);
            this.getView().byId("_IDGenButton2222").setVisible(true);

        },
        Onpressback2:function(){
            
            this.getView().byId("icon1").setVisible(false);
            this.getView().byId("icon2").setVisible(true);
            this.getView().byId("icon3").setVisible(false);
           
            this.getView().byId("_IDGenButton1111").setVisible(true);
            this.getView().byId("_IDGenButton2222").setVisible(false);
            
        },
        onNewHUPress:function(){
            this.getView().byId("icon1").setVisible(false);
            this.getView().byId("icon2").setVisible(false);
           
            this.getView().byId("icon4").setVisible(true);
            this.getView().byId("icon5").setVisible(false);

            this.getView().byId("_IDGenButton1111").setVisible(false);
            this.getView().byId("_IDGenButton2222").setVisible(false);
            this.getView().byId("_IDGenButton3333").setVisible(true);  
            this.getView().byId("_IDGenButton4444").setVisible(false);  

        },
        Onpressback3:function(){
            this.getView().byId("icon1").setVisible(false);
            this.getView().byId("icon2").setVisible(true);
            this.getView().byId("icon4").setVisible(false);
            this.getView().byId("_IDGenButton1111").setVisible(true);
            this.getView().byId("_IDGenButton2222").setVisible(false);
            this.getView().byId("_IDGenButton3333").setVisible(false);  
        },
        onNextEnterpress:function(){
            this.getView().byId("icon5").setVisible(true);
           
            this.getView().byId("icon4").setVisible(false);
            this.getView().byId("_IDGenButton4444").setVisible(true); 
            this.getView().byId("_IDGenButton2222").setVisible(false);
            this.getView().byId("_IDGenButton3333").setVisible(false);  
            this.getView().byId("_IDGenButton1111").setVisible(false);
            this.getView().byId("icon1").setVisible(false);
            this.getView().byId("icon2").setVisible(false);

            
        },
        Onpressback4:function(){
            this.getView().byId("icon1").setVisible(false);
            this.getView().byId("icon5").setVisible(false);
           
            this.getView().byId("icon4").setVisible(false);
            this.getView().byId("icon3").setVisible(false);

            this.getView().byId("_IDGenButton4444").setVisible(false); 
            this.getView().byId("_IDGenButton2222").setVisible(false);
            this.getView().byId("_IDGenButton3333").setVisible(true);  
            this.getView().byId("_IDGenButton1111").setVisible(false);
            this.getView().byId("_IDGenButton5555").setVisible(false);
            this.getView().byId("_IDGenButton6666").setVisible(false);
        
            this.getView().byId("icon2").setVisible(true);

            
        },
        onGRPress:function(){
            this.getView().byId("icon6").setVisible(true);
            this.getView().byId("icon5").setVisible(false);
            this.getView().byId("icon4").setVisible(false);
            this.getView().byId("_IDGenButton4444").setVisible(false); 
            this.getView().byId("_IDGenButton2222").setVisible(false);
            this.getView().byId("_IDGenButton3333").setVisible(false);  
            this.getView().byId("_IDGenButton1111").setVisible(false);
            this.getView().byId("_IDGenButton5555").setVisible(true);

            this.getView().byId("icon1").setVisible(false);
            this.getView().byId("icon2").setVisible(false);


        },
        Onpressback5:function(){
            this.getView().byId("icon1").setVisible(false);
            this.getView().byId("icon5").setVisible(true);
            this.getView().byId("icon6").setVisible(false);
            
           
            this.getView().byId("icon4").setVisible(false);
            this.getView().byId("_IDGenButton4444").setVisible(true); 
            this.getView().byId("_IDGenButton2222").setVisible(false);
            this.getView().byId("_IDGenButton3333").setVisible(false);  
            this.getView().byId("_IDGenButton1111").setVisible(false);
            this.getView().byId("_IDGenButton5555").setVisible(false);
            this.getView().byId("_IDGenButton6666").setVisible(false);

        
            this.getView().byId("icon2").setVisible(false);

            
        },
        onUnloadPress:function(){
            this.getView().byId("icon6").setVisible(false);
            this.getView().byId("icon5").setVisible(false);
            this.getView().byId("icon4").setVisible(false);
            this.getView().byId("icon7").setVisible(true);

            this.getView().byId("_IDGenButton4444").setVisible(false); 
            this.getView().byId("_IDGenButton2222").setVisible(false);
            this.getView().byId("_IDGenButton3333").setVisible(false);  
            this.getView().byId("_IDGenButton1111").setVisible(false);
            this.getView().byId("_IDGenButton5555").setVisible(false);
            this.getView().byId("_IDGenButton6666").setVisible(true);

            this.getView().byId("icon1").setVisible(false);
            this.getView().byId("icon2").setVisible(false);


        },
       
        // onUnloadPress1:function(){
        //     this.getView().byId("icon6").setVisible(false);
        //     this.getView().byId("icon5").setVisible(false);
        //     this.getView().byId("icon4").setVisible(false);
        //     this.getView().byId("icon7").setVisible(true);

        //     this.getView().byId("_IDGenButton4444").setVisible(false); 
        //     this.getView().byId("_IDGenButton2222").setVisible(false);
        //     this.getView().byId("_IDGenButton3333").setVisible(false);  
        //     this.getView().byId("_IDGenButton1111").setVisible(false);
        //     this.getView().byId("_IDGenButton5555").setVisible(false);
        //     this.getView().byId("_IDGenButton6666").setVisible(false);
           


        //     this.getView().byId("icon1").setVisible(false);
        //     this.getView().byId("icon2").setVisible(false);


        // },
        Onpressback6:function(){
            this.getView().byId("icon1").setVisible(false);
            this.getView().byId("icon5").setVisible(true);
            this.getView().byId("icon7").setVisible(false);
            this.getView().byId("icon6").setVisible(false);
           
            this.getView().byId("icon3").setVisible(false);
            this.getView().byId("_IDGenButton4444").setVisible(false); 
            this.getView().byId("_IDGenButton2222").setVisible(false);
            this.getView().byId("_IDGenButton3333").setVisible(false);  
            this.getView().byId("_IDGenButton1111").setVisible(false);
            this.getView().byId("_IDGenButton5555").setVisible(true);
            this.getView().byId("_IDGenButton6666").setVisible(false);
            this.getView().byId("icon4").setVisible(false);

        
            this.getView().byId("icon2").setVisible(false);

            
        },
        // Onpressback7:function(){
        //     this.getView().byId("icon1").setVisible(false);
        //     this.getView().byId("icon5").setVisible(true);
        //     this.getView().byId("icon6").setVisible(false);
        //     this.getView().byId("icon7").setVisible(false);

           
        //     this.getView().byId("icon3").setVisible(false);
        //     this.getView().byId("_IDGenButton4444").setVisible(false); 
        //     this.getView().byId("_IDGenButton2222").setVisible(false);
        //     this.getView().byId("_IDGenButton3333").setVisible(false);  
        //     this.getView().byId("_IDGenButton1111").setVisible(false);
        //     this.getView().byId("_IDGenButton5555").setVisible(false);
        //     this.getView().byId("_IDGenButton6666").setVisible(false);
      
        //     this.getView().byId("icon4").setVisible(false);

        
        //     this.getView().byId("icon2").setVisible(false);

            
        // },

    });
});