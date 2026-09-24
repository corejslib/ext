import ElementParser from "./common/ElementParser.js";
import Ext_Media from "./Ext/Media.js";

export default class EWCMedia extends Ext_Media {
    constructor () {
        super ( [], [] );
        this.xtype = "media";
    }
}
try {
    if ( window.customElements.get( "ext-media" ) == undefined ) {
        window.customElements.define( "ext-media", ElementParser.withParsedCallback( EWCMedia ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-media" ) == undefined ) {
        window.customElements.define( "ext-media", EWCMedia );
    }
}
