

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

    return Controller.extend("com.app.outbound.controller.View1", {
        onInit: function () {
            
			var oModel = new JSONModel(sap.ui.require.toUrl("com/app/outbound/model/data.json"));
            this.getView().setModel(oModel);
            this._setToggleButtonTooltip(!Device.system.desktop);
        },
 
        onItemSelect: function (oEvent) {
            var oItem = oEvent.getParameter("item");
            this.byId("pageContainer").to(this.getView().createId(oItem.getKey()));
        },
 
        handleUserNamePress: function (event) {
            var oPopover = new Popover({
                showHeader: false,
                placement: PlacementType.Bottom,
                content: [
                    new Button({
                        text: 'Feedback',
                        type: ButtonType.Transparent
                    }),
                    new Button({
                        text: 'Help',
                        type: ButtonType.Transparent
                    }),
                    new Button({
                        text: 'Logout',
                        type: ButtonType.Transparent
                    })
                ]
            }).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');
 
            oPopover.openBy(event.getSource());
        },
 
        onSideNavButtonPress: function () {
            var oToolPage = this.byId("toolPage");
            var bSideExpanded = oToolPage.getSideExpanded();
 
            this._setToggleButtonTooltip(bSideExpanded);
 
            oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
        },
 
        _setToggleButtonTooltip: function (bLarge) {
            var oToggleButton = this.byId('sideNavigationToggleButton');
            if (bLarge) {
                oToggleButton.setTooltip('Large Size Navigation');
            } else {
                oToggleButton.setTooltip('Small Size Navigation');
            }
        },
        
         /** Notification text */
         onNotificationAdminPress: function (oEvent) {
            var oButton = oEvent.getSource(),
                oView = this.getView();
                debugger

            // create popover
            if (!this._pPopover) {
                this._pPopover = this.loadFragment({
                    name: "com.app.outbound.fragments.notificationAdmin"
                }).then(function (oPopover) {
                    oView.addDependent(oPopover);
                    oPopover.bindElement("");
                    return oPopover;
                });
            }
            this._pPopover.then(function (oPopover) {
                oPopover.openBy(oButton);
            });
        },
        onAddNewProcessArea: function () {
            this.getView().byId("idAddNewArea").setVisible(false);
            this.getView().byId("idDialogBox").setVisible(false);
            this.getView().byId("_IDGenHBox11").setVisible(false);
            this.getView().byId("_IDField1").setVisible(false);
            this.getView().byId("_IDField4").setVisible(false);
            this.getView().byId("_IDField3").setVisible(false);
            this.getView().byId("_IDField36").setVisible(false);
            this.getView().byId("_IDField2").setVisible(false);
            this.getView().byId("_IDAreaSelect").setVisible(false);
            this.getView().byId("_IDAreaSelect").setVisible(false);
            this.getView().byId("_IDField33").setVisible(false);
            this.getView().byId("_IDField34").setVisible(false);
            this.getView().byId("_IDGenComboBox10").setVisible(false);

            this.getView().byId("_IDGenComboBox11").setVisible(false);
            this.getView().byId("_IDField6").setVisible(false);
            this.getView().byId("idEmptyRow").setVisible(false);
            this.getView().byId("idAddingNewProcessAreaTable").setVisible(true);

        },

        onNewProcessBackBtnPress: function () {
            this.getView().byId("idAddNewArea").setVisible(true);
            this.getView().byId("idDialogBox").setVisible(true);
            this.getView().byId("_IDGenHBox11").setVisible(true);
            this.getView().byId("_IDField1").setVisible(true);
            this.getView().byId("_IDField4").setVisible(true)
            this.getView().byId("_IDField3").setVisible(true);
            this.getView().byId("_IDField36").setVisible(true);
            this.getView().byId("_IDField2").setVisible(true);
            this.getView().byId("_IDAreaSelect").setVisible(true);
            this.getView().byId("_IDAreaSelect").setVisible(true);
            this.getView().byId("_IDField33").setVisible(true);
            this.getView().byId("_IDField34").setVisible(true);
            this.getView().byId("_IDGenComboBox10").setVisible(true);

            this.getView().byId("_IDGenComboBox11").setVisible(true);
            this.getView().byId("_IDField6").setVisible(true);
            this.getView().byId("idEmptyRow").setVisible(true);
            this.getView().byId("idAddingNewProcessAreaTable").setVisible(false);
        },


		
    });
});
