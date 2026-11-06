import ElementParser from "./common/ElementParser.js";
import Ext_grid_row_Group from "./Ext/grid/row/Group.js";

export default class EWCGridgrouprow extends Ext_grid_row_Group {
    constructor () {
        super( [], [] );
        this.xtype = "gridgrouprow";
    }
}
try {
    if ( window.customElements.get( "ext-gridgrouprow" ) == undefined ) {
        window.customElements.define( "ext-gridgrouprow", ElementParser.withParsedCallback( EWCGridgrouprow ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-gridgrouprow" ) == undefined ) {
        window.customElements.define( "ext-gridgrouprow", EWCGridgrouprow );
    }
}
