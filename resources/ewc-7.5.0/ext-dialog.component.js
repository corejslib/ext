import ElementParser from "./common/ElementParser.js";
import Ext_window_Window from "./Ext/window/Window.js";

export default class EWCDialog extends Ext_window_Window {
    constructor () {
        super( [], [] );
        this.xtype = "dialog";
    }
}
try {
    if ( window.customElements.get( "ext-dialog" ) == undefined ) {
        window.customElements.define( "ext-dialog", ElementParser.withParsedCallback( EWCDialog ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-dialog" ) == undefined ) {
        window.customElements.define( "ext-dialog", EWCDialog );
    }
}
