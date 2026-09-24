import ElementParser from "./common/ElementParser.js";
import Ext_Title from "./Ext/Title.js";

export default class EWCTitle extends Ext_Title {
    constructor () {
        super ( [], [] );
        this.xtype = "title";
    }
}
try {
    if ( window.customElements.get( "ext-title" ) == undefined ) {
        window.customElements.define( "ext-title", ElementParser.withParsedCallback( EWCTitle ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-title" ) == undefined ) {
        window.customElements.define( "ext-title", EWCTitle );
    }
}
