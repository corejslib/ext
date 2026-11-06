import ElementParser from "./common/ElementParser.js";
import Ext_Map from "./Ext/Map.js";

export default class EWCMap extends Ext_Map {
    constructor () {
        super( [], [] );
        this.xtype = "map";
    }
}
try {
    if ( window.customElements.get( "ext-map" ) == undefined ) {
        window.customElements.define( "ext-map", ElementParser.withParsedCallback( EWCMap ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-map" ) == undefined ) {
        window.customElements.define( "ext-map", EWCMap );
    }
}
