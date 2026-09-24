import ElementParser from "./common/ElementParser.js";
import Ext_grid_LockedGrid from "./Ext/grid/LockedGrid.js";

export default class EWCLockedgrid extends Ext_grid_LockedGrid {
    constructor () {
        super ( [], [] );
        this.xtype = "lockedgrid";
    }
}
try {
    if ( window.customElements.get( "ext-lockedgrid" ) == undefined ) {
        window.customElements.define( "ext-lockedgrid", ElementParser.withParsedCallback( EWCLockedgrid ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-lockedgrid" ) == undefined ) {
        window.customElements.define( "ext-lockedgrid", EWCLockedgrid );
    }
}
