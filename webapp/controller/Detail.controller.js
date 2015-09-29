sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {

	return Controller.extend("sap.training.exc18.masterdetail.controller.Detail", {

		onInit: function() {
			
		   /* TO DO:
    		* Registrieren Sie die View Controller Methode _onObjectMatched auf das patternMatched
    		* Ereignis der object Route. Setzen Sie dabei den Context der Methode  _onObjectMatched
    		* auf die View Controller Instanz.
    	    */
		
		
		},

		getRouter: function() {
			return this.getOwnerComponent().getRouter();
		},

		_onObjectMatched: function(oEvent) {
			
			var sObjectPath;
			
		   /* TO DO:
    		* Weisen Sie der Variablen sObjectPath den für den Zugriff auf den OData Service benötigten
    		* Resource Path zu. Dieser Pfad hat den folgenden Aufbau: /CarrierSet('XYZ'), wobei Sie
    		* XYZ durch den Schlüssel der vom Benutzer selektierten Fluggesellschaft ersetzen müssen.
    	    */
			
		
			this._bindView(sObjectPath);
		},

		_bindView: function(sObjectPath) {
			var oView = this.getView();

			this.getView().bindElement({
				path: sObjectPath,
				parameters: {
					expand: "Connections"
				},
				events: {
					change: this._onBindingChange.bind(this),
					dataRequested: function() {
						oView.setBusy(true);
					},
					dataReceived: function() {
						oView.setBusy(false);
					}
				}
			});
		},

		_onBindingChange: function() {

			var oView = this.getView(),
				oElementBinding = oView.getElementBinding();

			if (!oElementBinding.getBoundContext()) {
				
				 /* TO DO:
    			  * Sorgen Sie dafür, dass das Target detailObjectNotFound angezeigt wird.
    			  * Rufen Sie ferner die Methode clearMasterListSelection() der im Component
    			  * Controller zu erzeugenden ListSelector Instanz auf, um sicherzustellen,
    			  * dass in der Master-Liste kein Eintrag selektiert ist.
    	          */

			
			
			
			

				   return;
			}
			
			
		   /* TO DO:
			* Rufen Sie die Methode selectAListItem() der im Component Controller zu erzeugenden 
			* ListSelector Instanz auf, um den zu den angezeigten Detail-Daten gehörenden Eintrag
			* in der Master-Liste zu selektieren. Übergeben Sie dabei den zu den angezeigten
			* Detail-Daten gehörenden Binding Path.
	        */



		},

		onNavBack: function() {
			var sPreviousHash = sap.ui.core.routing.History.getInstance().getPreviousHash();

			if (sPreviousHash !== undefined) {
				// The history contains a previous entry
				history.go(-1);
			} else {
				// Otherwise we go backwards with a forward history
				var bReplace = true;
				this.getRouter().navTo("master", {}, bReplace);
			}
		}

	});
});