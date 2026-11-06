import ElementParser from "./common/ElementParser.js";
import Ext_form_Password from "./Ext/form/Password.js";

export default class EWCPasswordfield extends Ext_form_Password {
    constructor () {
        super( [], [] );
        this.xtype = "passwordfield";
    }
}
try {
    if ( window.customElements.get( "ext-passwordfield" ) == undefined ) {
        window.customElements.define( "ext-passwordfield", ElementParser.withParsedCallback( EWCPasswordfield ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-passwordfield" ) == undefined ) {
        window.customElements.define( "ext-passwordfield", EWCPasswordfield );
    }
}
