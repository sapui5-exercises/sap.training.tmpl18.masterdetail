sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {

	return Controller.extend("sap.training.exc18.masterdetail.controller.Master", {

		onInit: function() {

			var oList = this.byId("list");
			this._oList = oList;
			
		   /* TO DO:
    		* Übergeben Sie das List-Objekt oList über die Methode setBoundMasterList() 
    		* der im Component Controller zu erzeugenden ListSelector Instanz.
    	    */

			
		   
		   
		   
    	    
    	    this.getRouter().getRoute("master").attachPatternMatched(this._onMasterMatched, this);
			this.getRouter().attachBypassed(this.onBypassed, this);

		},

		getRouter: function() {
			return this.getOwnerComponent().getRouter();
		},

		onSelect: function(oEvent) {
			
		   /* TO DO:
    		* Rufen Sie die View Controller Methode _showDetail auf, und übergeben Sie
    		* dabei das List-Item, das der Benutzer in der Master-Liste selektiert hat.
    	    */
		
		
		},

		_showDetail: function(oItem) {
			
		   /* TO DO:
    		* Zeigen Sie die selektierte Fluggesellschaft über den Detail-View an.
    		* Navigieren Sie dazu über den Router zur Route object, und setzen Sie
    		* als Wert für den Parameter objectId den Schlüssel der selektierten
    		* Fluggesellschaft. Erzeugen Sie dabei für Phone Devices einen
    		* History-Eintrag.
    	    */
		
		
		},

		/**
		 * Event handler for the bypassed event, which is fired
		 * when no routing pattern matched.
		 * If there was an object selected in the master list,
		 * that selection is removed.
		 */
		onBypassed: function() {
			this._oList.removeSelections(true);
		},

		/**
		 * If the master route was hit (empty hash) we have to set
		 * the hash to the first item in the list as soon as the
		 * listLoading is done and the first item in the list is known
		 */
		_onMasterMatched: function() {
			this.getOwnerComponent().oListSelector.oWhenListLoadingIsDone.then(
				function(mParams) {
					if (mParams.list.getMode() === "None") {
						return;
					}
					var sObjectId = mParams.firstListitem
									.getBindingContext().getProperty("Carrid");
									
					this.getRouter().navTo("object", {
						objectId: sObjectId
					}, true);
					
				}.bind(this)
			);
		}
	});
});