sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.app.outbound.controller.View1", {
        onInit: function () {

        },
    
        onItemSelect: function (oEvent) {
            var itemKey = oEvent.getParameter("item").getKey();
            var navContainer = this.getView().byId("idNavContainer");
            // Navigate to the corresponding page based on the selected key
            switch (itemKey) {
                case "OutboundKey":   //key
                    navContainer.to(this.getView().createId("idscroolcontatiner1"));
                    break;
                case "PickingKey":
                     navContainer.to(this.getView().createId("idscroll2"));
                   break;
                 case "PackingKey":
                     navContainer.to(this.getView().createId("idscroll3"));
                     break;
                 case "LoadingKey":
                     navContainer.to(this.getView().createId("idscroll4"));
                     break;
                 case "PickPointKey":
                     navContainer.to(this.getView().createId("idscroll5"));
                    break;
                case "ConsumptionKey":
                    navContainer.to(this.getView().createId("idscroll6"));
                    break;
                case "DistributionEquipmentKey":
                    navContainer.to(this.getView().createId("idscroll7"));
                    break;
                default:
                    break;
            }
        },
    });
});