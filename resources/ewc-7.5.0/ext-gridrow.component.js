import ElementParser from "./common/ElementParser.js";
import Ext_grid_Row from "./Ext/grid/Row.js";

export default class EWCGridrow extends Ext_grid_Row {
    constructor () {
        super ( [], [] );
        this.xtype = "gridrow";
    }
}
try {
    if ( window.customElements.get( "ext-gridrow" ) == undefined ) {
        window.customElements.define( "ext-gridrow", ElementParser.withParsedCallback( EWCGridrow ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-gridrow" ) == undefined ) {
        window.customElements.define( "ext-gridrow", EWCGridrow );
    }
}
