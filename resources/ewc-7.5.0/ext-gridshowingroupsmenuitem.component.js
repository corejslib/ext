import ElementParser from "./common/ElementParser.js";
import Ext_grid_menu_ShowInGroups from "./Ext/grid/menu/ShowInGroups.js";

export default class EWCGridshowingroupsmenuitem extends Ext_grid_menu_ShowInGroups {
    constructor () {
        super( [], [] );
        this.xtype = "gridshowingroupsmenuitem";
    }
}
try {
    if ( window.customElements.get( "ext-gridshowingroupsmenuitem" ) == undefined ) {
        window.customElements.define( "ext-gridshowingroupsmenuitem", ElementParser.withParsedCallback( EWCGridshowingroupsmenuitem ) );
    }
}
catch ( e ) {
    if ( window.customElements.get( "ext-gridshowingroupsmenuitem" ) == undefined ) {
        window.customElements.define( "ext-gridshowingroupsmenuitem", EWCGridshowingroupsmenuitem );
    }
}
