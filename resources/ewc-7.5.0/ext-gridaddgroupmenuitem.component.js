import ElementParser from "./common/ElementParser.js";
import Ext_grid_menu_AddGroup from "./Ext/grid/menu/AddGroup.js";

export default class EWCGridaddgroupmenuitem extends Ext_grid_menu_AddGroup {
    constructor () {
        super ( [], [] );
        this.xtype = "gridaddgroupmenuitem";
    }
}
try {
    if ( window.customElements.get( "ext-gridaddgroupmenuitem" ) == undefined ) {
        window.customElements.define( "ext-gridaddgroupmenuitem", ElementParser.withParsedCallback( EWCGridaddgroupmenuitem ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-gridaddgroupmenuitem" ) == undefined ) {
        window.customElements.define( "ext-gridaddgroupmenuitem", EWCGridaddgroupmenuitem );
    }
}
